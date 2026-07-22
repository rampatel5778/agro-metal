import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { PageId } from '@types/page';
import type { PageContent } from '@types/page';
import { pageContentSchema } from '@lib/schemas/page.schema.js';

const CONTENT_DIR = path.resolve(process.cwd(), 'src/content/pages');

/** Load and validate page JSON content by id */
export function loadPageContent(pageId: PageId): PageContent {
  const filePath = path.join(CONTENT_DIR, `${pageId}.json`);
  const raw = readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw) as unknown;
  return pageContentSchema.parse(data) as PageContent;
}

/** Safe loader for build-time — returns null if audit file missing */
export function tryLoadPageContent(pageId: PageId): PageContent | null {
  try {
    return loadPageContent(pageId);
  } catch {
    return null;
  }
}
