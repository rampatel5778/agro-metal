/**
 * Phase 0: Extract page content from existing WordPress HTML exports
 * into JSON files under src/content/pages/
 *
 * Usage: node scripts/extract-content.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.resolve(ROOT, '..', 'existing website');
const OUT_DIR = path.resolve(ROOT, 'src', 'content', 'pages');

const PAGE_CONFIG = {
  'index.html': {
    id: 'home',
    slug: 'home',
    path: '/',
    template: 'home',
    seoDescription:
      'Agrometal bridges global agriculture and mining commodities with trusted trading, hedging, and logistics solutions from Dubai, UAE.',
  },
  'about-us.html': {
    id: 'about-us',
    slug: 'about-us',
    path: '/about-us/',
    template: 'inner-default',
    seoDescription:
      'Learn about Agrometal — a Dubai-based commodity trading company connecting global agriculture and mining markets.',
  },
  'our-history.html': {
    id: 'our-history',
    slug: 'our-history',
    path: '/about-us/our-history/',
    template: 'inner-default',
    seoDescription:
      'Discover the history and milestones of Agrometal in global commodity trading and logistics.',
  },
  'trading-logistics-warehousing.html': {
    id: 'trading-logistics-warehousing',
    slug: 'trading-logistics-warehousing',
    path: '/about-us/trading-logistics-warehousing/',
    template: 'inner-default',
    seoDescription:
      'Agrometal trading, logistics and warehousing services for agricultural and mining commodities worldwide.',
  },
  'products.html': {
    id: 'products',
    slug: 'products',
    path: '/products/',
    template: 'hub',
    seoDescription:
      'Explore Agrometal product categories: ferrous metals, non-ferrous metals, and agricultural commodities.',
  },
  'ferrous-metals.html': {
    id: 'ferrous-metals',
    slug: 'ferrous-metals',
    path: '/products/ferrous-metals/',
    template: 'inner-default',
    seoDescription:
      'Ferrous metals trading by Agrometal — reliable supply of iron, steel, and related commodities.',
  },
  'non-ferrous-metals.html': {
    id: 'non-ferrous-metals',
    slug: 'non-ferrous-metals',
    path: '/products/non-ferrous-metals/',
    template: 'inner-default',
    seoDescription:
      'Non-ferrous metals trading — copper, aluminium, zinc and more through Agrometal global network.',
  },
  'agricultural-commodities.html': {
    id: 'agricultural-commodities',
    slug: 'agricultural-commodities',
    path: '/products/agricultural-commodities/',
    template: 'inner-default',
    seoDescription:
      'Agricultural commodities trading — grains, pulses, and food crops sourced and delivered globally.',
  },
  'services.html': {
    id: 'services',
    slug: 'services',
    path: '/services/',
    template: 'hub',
    seoDescription:
      'Agrometal services: commodity hedging, currency hedging, and end-to-end logistics solutions.',
  },
  'commodity-hedging.html': {
    id: 'commodity-hedging',
    slug: 'commodity-hedging',
    path: '/services/commodity-hedging/',
    template: 'inner-default',
    seoDescription:
      'Manage price risk with Agrometal commodity hedging strategies for metals and agricultural products.',
  },
  'currency-hedging.html': {
    id: 'currency-hedging',
    slug: 'currency-hedging',
    path: '/services/currency-hedging/',
    template: 'inner-default',
    seoDescription:
      'Protect against FX volatility with Agrometal currency hedging for international commodity trades.',
  },
  'logistics.html': {
    id: 'logistics',
    slug: 'logistics',
    path: '/services/logistics/',
    template: 'inner-default',
    seoDescription:
      'Global logistics services from Agrometal — shipping, warehousing, and supply chain management.',
  },
  'sustainability.html': {
    id: 'sustainability',
    slug: 'sustainability',
    path: '/sustainability/',
    template: 'inner-default',
    seoDescription:
      'Agrometal commitment to environmental stewardship, social responsibility, and ethical governance.',
  },
  'contact-us.html': {
    id: 'contact-us',
    slug: 'contact-us',
    path: '/contact-us/',
    template: 'contact',
    seoDescription:
      'Contact Agrometal in Jebel Ali, Dubai. Phone, email, and enquiry form for commodity trading inquiries.',
  },
};

function decodeHtml(text) {
  return text
    .replace(/&#8211;/g, '–')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' '));
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]+)<\/title>/i);
  if (!match) return 'Agrometal';
  return decodeHtml(match[1].replace(/\s*[–-]\s*Agrometal\s*$/i, '').trim());
}

function extractImages(html) {
  const images = [];
  const re =
    /src="(https:\/\/agrodemo\.360websitedemo\.com\/wp-content\/uploads\/[^"?]+)(?:\?[^"]*)?"(?:[^>]*alt="([^"]*)")?/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const url = m[1];
    if (url.includes('/elementor/')) continue;
    const alt = decodeHtml(m[2] || '');
    const filename = path.basename(url.split('?')[0]);
    const parts = url.split('/uploads/')[1]?.split('/') ?? [];
    const localPath = `/images/agrometal/${parts.join('/')}`;
    images.push({
      remoteUrl: url,
      src: localPath,
      alt,
      filename,
    });
  }
  return images;
}

function extractYoutubeIds(html) {
  const ids = new Set();
  const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/g,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html)) !== null) ids.add(m[1]);
  }
  return [...ids];
}

function extractHeadings(html) {
  const headings = [];
  const re = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = stripTags(m[1]);
    if (text && text.length > 1 && !text.includes('widget')) {
      headings.push(text);
    }
  }
  return headings;
}

function extractParagraphs(html) {
  const mainMatch = html.match(
    /<div id="qodef-page-inner"[\s\S]*?<\/div>\s*<footer/i,
  );
  const scope = mainMatch ? mainMatch[0] : html;
  const paragraphs = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(scope)) !== null) {
    const text = stripTags(m[1]);
    if (
      text.length > 30 &&
      !text.includes('wpcf7') &&
      !text.startsWith('Office LB') &&
      !/^Phone No:/i.test(text)
    ) {
      paragraphs.push(text);
    }
  }
  return [...new Set(paragraphs)];
}

function extractHeroBanner(images) {
  const banner = images.find(
    (img) =>
      /banner|hero|top-banner|below-banner/i.test(img.filename) ||
      /banner/i.test(img.alt),
  );
  return banner;
}

function buildSections(config, html, images, youtubeIds, headings, paragraphs) {
  const sections = [];
  const heroBanner = extractHeroBanner(images);

  if (headings.length > 0 || paragraphs.length > 0) {
    sections.push({
      id: 'intro',
      type: config.template === 'home' ? 'hero-video' : 'text',
      heading: headings[0],
      body: paragraphs.slice(0, 5),
      videoId: config.template === 'home' ? '7AGfbbcy8Ro' : undefined,
      image: heroBanner,
    });
  }

  if (headings.length > 1) {
    for (let i = 1; i < Math.min(headings.length, 8); i++) {
      sections.push({
        id: `section-${i}`,
        type: 'text',
        heading: headings[i],
        body: paragraphs.slice(i * 2, i * 2 + 3),
      });
    }
  }

  if (youtubeIds.includes('nr3_0zjTlsI')) {
    sections.push({
      id: 'video-cta',
      type: 'video-cta',
      videoId: 'nr3_0zjTlsI',
    });
  }

  const contentImages = images.filter(
    (img) => !/logo|favicon|colored-logo/i.test(img.filename),
  );
  if (contentImages.length > 0) {
    sections.push({
      id: 'media-inventory',
      type: 'raw-html',
      meta: {
        note: 'Image inventory from source HTML — map to Agriva sections in Phase 1+',
        images: contentImages,
      },
    });
  }

  return sections;
}

function processPage(filename) {
  const config = PAGE_CONFIG[filename];
  if (!config) return null;

  const filePath = path.join(SOURCE_DIR, filename);
  const html = fs.readFileSync(filePath, 'utf8');
  const title = extractTitle(html);
  const images = extractImages(html);
  const youtubeIds = extractYoutubeIds(html);
  const headings = extractHeadings(html);
  const paragraphs = extractParagraphs(html);
  const heroBanner = extractHeroBanner(images);

  const uniqueImages = [
    ...new Map(images.map((img) => [img.remoteUrl, img])).values(),
  ];

  return {
    id: config.id,
    slug: config.slug,
    path: config.path,
    sourceFile: filename,
    template: config.template,
    seo: {
      title,
      description: config.seoDescription,
      canonical: config.path,
    },
    hero: {
      title: headings[0] || title,
      subtitle: paragraphs[0]?.slice(0, 200),
      bannerImage: heroBanner,
    },
    sections: buildSections(
      config,
      html,
      uniqueImages,
      youtubeIds,
      headings,
      paragraphs,
    ),
    audit: {
      extractedAt: new Date().toISOString(),
      remoteImageCount: uniqueImages.length,
      youtubeIds,
      notes: [
        'Auto-extracted from WordPress/Elementor HTML — review before Phase 1 build',
        `Headings found: ${headings.length}`,
        `Paragraphs found: ${paragraphs.length}`,
      ],
    },
  };
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const summary = [];
  for (const filename of Object.keys(PAGE_CONFIG)) {
    const content = processPage(filename);
    const outFile = path.join(OUT_DIR, `${content.id}.json`);
    fs.writeFileSync(outFile, JSON.stringify(content, null, 2), 'utf8');
    summary.push({
      file: filename,
      json: `${content.id}.json`,
      images: content.audit.remoteImageCount,
      sections: content.sections.length,
      youtube: content.audit.youtubeIds,
    });
    console.log(`✓ ${filename} → ${content.id}.json (${content.audit.remoteImageCount} images)`);
  }

  fs.writeFileSync(
    path.join(OUT_DIR, '_audit-summary.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), pages: summary }, null, 2),
    'utf8',
  );

  console.log(`\nDone. ${summary.length} pages written to src/content/pages/`);
}

main();
