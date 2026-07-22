import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Startday',
  description:
    'Learn how Startday helps ambitious builders meet co-founders by building together during curated startup weekends.',
  path: '/startday-about',
});

export default function StartdayAboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
