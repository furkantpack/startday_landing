import type { Metadata } from 'next';

import { buildPageMetadata, cityNames, type CitySlug } from '@/lib/seo';

type Props = {
  children: React.ReactNode;
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityNames[city as CitySlug];

  if (!cityName) {
    return buildPageMetadata({
      title: 'Startup Weekend | Startday',
      description:
        'Join a curated Startday startup weekend to meet co-founders, build startup teams, and launch your next idea.',
      path: `/cafe/${city}`,
    });
  }

  return buildPageMetadata({
    title: `Startup Weekend ${cityName} | Startday`,
    description: `Join ${cityName}'s curated startup weekend. Meet co-founders, build startup teams and launch your next idea.`,
    path: `/cafe/${city}`,
  });
}

export default function CafeCityLayout({ children }: Props) {
  return children;
}
