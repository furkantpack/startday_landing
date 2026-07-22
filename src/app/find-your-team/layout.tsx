import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Find Your Startup Team | Startday',
  description:
    'Share your city, skills, goals, and weekend availability so Startday can match you with a balanced founder team.',
  path: '/find-your-team',
});

export default function FindYourTeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
