import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Startup Weekend Locations | Startday',
  description:
    'Browse Startday city drops across Europe and choose the startup weekend location where you want to meet co-founders and build.',
  path: '/startday-find-cafes',
});

export default function StartdayFindCafesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
