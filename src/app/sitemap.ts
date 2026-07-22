import type { MetadataRoute } from 'next';

import { citySlugs, siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '/',
    '/find-your-team',
    '/startday-about',
    '/startday-faq',
    '/startday-find-cafes',
  ] as const;

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route === '/' ? '' : route}`,
      lastModified: now,
      changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '/' ? 1 : 0.8,
    })),
    ...citySlugs.map((city) => ({
      url: `${siteUrl}/cafe/${city}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];
}
