import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Startday FAQ',
  description:
    'Answers about Startday founder matching, startup weekend formats, city tables, pricing, and what happens during the weekend.',
  path: '/startday-faq',
});

export default function StartdayFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
