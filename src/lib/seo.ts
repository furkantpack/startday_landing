import type { Metadata } from 'next';

export const siteUrl = 'https://www.startday.space';

export const siteName = 'Startday';

export const defaultTitle = 'Startday | Meet Your Co-Founder & Build a Startup in One Weekend';

export const shortTitle = 'Startday | Meet Your Co-Founder';

export const defaultDescription =
  'Startday helps ambitious builders meet co-founders, form startup teams, validate ideas, and build together during curated startup weekends across Europe.';

export const homepageDescription =
  'Meet ambitious builders, find co-founders, validate startup ideas and launch your startup during curated weekend experiences.';

export const seoKeywords = [
  'startup weekend',
  'find cofounder',
  'meet cofounder',
  'startup event',
  'startup networking',
  'startup community',
  'entrepreneur meetup',
  'founder matching',
  'startup bootcamp',
  'build a startup',
  'startup accelerator',
  'hackathon',
  'startup collaboration',
  'startup teams',
];

export const socialImage = {
  url: '/startday-og.png',
  width: 1200,
  height: 630,
  alt: 'Startday founder weekend table',
};

export const citySlugs = [
  'helsinki',
  'tallinn',
  'copenhagen',
  'stockholm',
  'berlin',
  'paris',
  'vienna',
  'istanbul',
] as const;

export type CitySlug = (typeof citySlugs)[number];

export const cityNames: Record<CitySlug, string> = {
  helsinki: 'Helsinki',
  tallinn: 'Tallinn',
  copenhagen: 'Copenhagen',
  stockholm: 'Stockholm',
  berlin: 'Berlin',
  paris: 'Paris',
  vienna: 'Vienna',
  istanbul: 'Istanbul',
};

export function canonical(path = '/') {
  return path === '/' ? siteUrl : `${siteUrl}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonical(path),
    },
    openGraph: {
      title,
      description,
      url: canonical(path),
      siteName,
      type: 'website',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512.png`,
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/startday-find-cafes?city={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Startday Startup Weekend',
    description:
      'A curated weekend experience for ambitious builders to meet co-founders, form startup teams, validate ideas, and build together.',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    organizer: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    location: {
      '@type': 'Place',
      name: 'Curated Startday city venue',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Europe',
      },
    },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/find-your-team`,
      price: '15',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  },
];
