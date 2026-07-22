import type { PageId } from '@types/page';
import { BUILD_PHASE, ROUTE_BY_ID } from '@data/constants';

export interface RoutePlaceholderMeta {
  pageId: PageId;
  path: string;
  label: string;
  phase: number;
  template: string;
  showFooterVideoCta: boolean;
}

/** Metadata for Phase 2 route placeholders — no layout implementation */
export function getRouteMeta(pageId: PageId): RoutePlaceholderMeta {
  const route = ROUTE_BY_ID[pageId];
  return {
    pageId,
    path: route.path,
    label: route.label,
    phase: BUILD_PHASE,
    template: route.template,
    showFooterVideoCta: route.showFooterVideoCta,
  };
}
