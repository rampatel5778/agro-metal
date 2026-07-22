import type { ContentImage } from './image.js';

export interface TimelineItem {
  id: string;
  title: string;
  period?: string;
  date?: string;
  body?: string | string[];
  image?: ContentImage;
}

export interface Timeline {
  id: string;
  variant: 'horizontal' | 'vertical' | 'slider';
  items: TimelineItem[];
}
