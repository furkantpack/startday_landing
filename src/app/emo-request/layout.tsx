import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Find Your Startup Team | Startday',
  description:
    'Startday matches ambitious builders with balanced founder teams for curated startup weekends across Europe.',
  path: '/find-your-team',
});

export default function EmoRequestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
