/**
 * Phase 0: Download remote Agrometal assets from agrodemo.360websitedemo.com
 * Saves to public/images/agrometal/{year}/{filename}
 * Skips Elementor CSS and responsive size variants (downloads full-size only).
 *
 * Usage: node scripts/download-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.resolve(ROOT, '..', 'existing website');
const OUT_BASE = path.resolve(ROOT, 'public', 'images', 'agrometal');
const MANIFEST_PATH = path.resolve(ROOT, 'src', 'content', 'asset-manifest.json');

const UPLOAD_RE =
  /https:\/\/agrodemo\.360websitedemo\.com\/wp-content\/uploads\/([^"'\s)?]+)/gi;

/** Skip responsive WordPress size suffixes — keep full/original only */
function isResponsiveVariant(filename) {
  return /-\d+x\d+\.(webp|jpe?g|png|gif)$/i.test(filename);
}

function collectUrls() {
  const urls = new Set();
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.html'));

  for (const file of files) {
    const html = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    let m;
    UPLOAD_RE.lastIndex = 0;
    while ((m = UPLOAD_RE.exec(html)) !== null) {
      let relative = m[1].split('?')[0];
      if (relative.includes('elementor/')) continue;
      const filename = path.basename(relative);
      if (isResponsiveVariant(filename)) continue;
      urls.add(
        `https://agrodemo.360websitedemo.com/wp-content/uploads/${relative}`,
      );
    }
  }
  return [...urls].sort();
}

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath)) {
    return { url, destPath, status: 'skipped' };
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Agrometal-Phase0-Asset-Mirror/1.0' },
  });

  if (!res.ok) {
    return { url, destPath, status: 'failed', error: `${res.status} ${res.statusText}` };
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  return { url, destPath, status: 'downloaded', bytes: buffer.length };
}

async function main() {
  const urls = collectUrls();
  console.log(`Found ${urls.length} unique full-size assets to mirror.\n`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: 'https://agrodemo.360websitedemo.com/wp-content/uploads/',
    total: urls.length,
    assets: [],
  };

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const url of urls) {
    const relative = url.split('/uploads/')[1];
    const destPath = path.join(OUT_BASE, relative.replace(/\//g, path.sep));
    const localPath = `/images/agrometal/${relative}`;

    try {
      const result = await downloadFile(url, destPath);
      manifest.assets.push({
        remoteUrl: url,
        localPath,
        file: destPath.replace(ROOT, '').replace(/\\/g, '/'),
        status: result.status,
        bytes: result.bytes,
        error: result.error,
      });

      if (result.status === 'downloaded') {
        downloaded++;
        console.log(`✓ ${relative}`);
      } else if (result.status === 'skipped') {
        skipped++;
        console.log(`· ${relative} (exists)`);
      } else {
        failed++;
        console.log(`✗ ${relative} — ${result.error}`);
      }
    } catch (err) {
      failed++;
      console.log(`✗ ${relative} — ${err.message}`);
      manifest.assets.push({
        remoteUrl: url,
        localPath,
        status: 'failed',
        error: err.message,
      });
    }
  }

  manifest.summary = { downloaded, skipped, failed };
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`\nComplete: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
  console.log(`Manifest: src/content/asset-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
