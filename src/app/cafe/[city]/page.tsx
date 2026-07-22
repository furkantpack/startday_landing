import { notFound } from 'next/navigation';

import { KitMainPage } from '@/components/landing/kit-main-page';

const cityPages = {
  helsinki: {
    city: 'Helsinki',
    scheduleVariant: 'helsinki2026',
    heroImage: '/kit-main-provekit-5-helsinki-hero.avif',
  },
  tallinn: {
    city: 'Tallinn',
    scheduleVariant: 'tallinn2026',
    heroImage: undefined,
  },
  copenhagen: {
    city: 'Copenhagen',
    scheduleVariant: 'copenhagen2026',
    heroImage: '/kit-main-provekit-5-copenhagen-hero.avif',
  },
  stockholm: {
    city: 'Stockholm',
    scheduleVariant: 'stockholm2026',
    heroImage: '/kit-main-provekit-5-stockholm-hero.avif',
  },
  berlin: {
    city: 'Berlin',
    scheduleVariant: 'berlin2026',
    heroImage: '/kit-main-provekit-5-berlin-hero.avif',
  },
  paris: {
    city: 'Paris',
    scheduleVariant: 'paris2026',
    heroImage: '/kit-main-provekit-5-paris-hero.avif',
  },
  vienna: {
    city: 'Vienna',
    scheduleVariant: 'vienna2026',
    heroImage: '/kit-main-provekit-5-vienna-hero.avif',
  },
  istanbul: {
    city: 'Istanbul',
    scheduleVariant: 'istanbul2026',
    heroImage: '/kit-main-provekit-5-istanbul-hero.avif',
  },
} as const;

type CitySlug = keyof typeof cityPages;

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({ city }));
}

export default async function CafeCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const page = cityPages[city as CitySlug];

  if (!page) {
    notFound();
  }

  return (
    <KitMainPage
      cardVariant="sprint"
      contentVariant="tallinnDrop"
      sprintCity={page.city}
      heroLayout="overlay"
      scheduleVariant={page.scheduleVariant}
      heroImage={page.heroImage}
    />
  );
}
