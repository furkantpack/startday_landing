'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import { FooterSection, Sidebar } from '@/app/page';

const cities = [
  {
    city: 'Tallinn',
    country: 'Estonia',
    label: 'Founder cafes',
    earliestDate: '10-12 July',
    capacity: '4 tables left',
    image: '/bold-moves-tallinn-cafe-card.avif',
    href: '/cafe/tallinn',
    colors: ['#fff4df', '#ff7b21', '#1d1d19'],
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    label: 'Nordic launch rooms',
    earliestDate: '10-12 July',
    capacity: '2 tables left',
    image: '/bold-moves-helsinki-cafe-card.avif',
    href: '/cafe/helsinki',
    colors: ['#087fbd', '#a7e8f6', '#f45a2f'],
  },
  {
    city: 'Stockholm',
    country: 'Sweden',
    label: 'Product lounges',
    earliestDate: '10-12 July',
    capacity: '5 tables left',
    image: '/bold-moves-stockholm-cafe-card.avif',
    href: '/cafe/stockholm',
    colors: ['#ffe779', '#0057b8', '#1d1d19'],
  },
  {
    city: 'Copenhagen',
    country: 'Denmark',
    label: 'Design cafe drops',
    earliestDate: '10-12 July',
    capacity: '3 tables left',
    image: '/bold-moves-copenhagen-cafe-card.avif',
    href: '/cafe/copenhagen',
    colors: ['#ffc7b7', '#c60c30', '#fffbe8'],
  },
  {
    city: 'Berlin',
    country: 'Germany',
    label: 'Builder tables',
    earliestDate: '10-12 July',
    capacity: '6 tables left',
    image: '/bold-moves-berlin-cafe-card.avif',
    href: '/cafe/berlin',
    colors: ['#1d1d19', '#ffce00', '#dd0000'],
  },
  {
    city: 'Istanbul',
    country: 'Turkey',
    label: 'Cross-city rooms',
    earliestDate: '10-12 July',
    capacity: '4 tables left',
    image: '/bold-moves-istanbul-cafe-card.avif',
    href: '/cafe/istanbul',
    colors: ['#f45a2f', '#ffe779', '#fffbe8'],
  },
  {
    city: 'Paris',
    country: 'France',
    label: 'Creative community cafes',
    earliestDate: '10-12 July',
    capacity: '3 tables left',
    image: '/bold-moves-paris-cafe-card.avif',
    href: '/cafe/paris',
    colors: ['#0055a4', '#ffffff', '#ef4135'],
  },
  {
    city: 'Vienna',
    country: 'Austria',
    label: 'Focus cafe sessions',
    earliestDate: '10-12 July',
    capacity: '2 tables left',
    image: '/bold-moves-vienna-cafe-card.avif',
    href: '/cafe/vienna',
    colors: ['#ed2939', '#f7f0de', '#1d1d19'],
  },
  {
    city: 'Request a new city',
    country: 'New city',
    label: 'Request new city',
    earliestDate: 'Tell us your city',
    capacity: 'New drops opening soon',
    href: '/find-your-team',
    colors: ['#dc143c', '#fff0c6', '#1d1d19'],
  },
];

const countries = ['All countries', ...cities.filter((item) => item.country !== 'New city').map((item) => item.country)];
const dates = [
  'All dates',
  ...Array.from(new Set(cities.filter((item) => item.country !== 'New city').map((item) => item.earliestDate))),
];

function CityPreview({ colors }: { colors: string[] }) {
  return (
    <div className="flex h-[104px] items-start gap-2">
      {colors.map((color, index) => (
        <div
          key={`${color}-${index}`}
          className="relative h-[76px] w-[96px] rounded-[8px] border border-[#1d1d19]/10 shadow-[0_14px_30px_rgba(29,29,25,0.12)]"
          style={{
            background:
              index === 1
                ? `radial-gradient(circle at 54% 42%, #1d1d19 0 10%, transparent 11%), linear-gradient(135deg, ${color}, #ffe779)`
                : `linear-gradient(135deg, ${color}, #fffbe8)`,
            transform: `rotate(${index === 0 ? -8 : index === 1 ? 4 : 10}deg) translateY(${index === 1 ? -2 : 6}px)`,
            zIndex: 3 - index,
          }}
        >
          <span className="absolute inset-2 rounded-[4px] border border-[#1d1d19]/20" />
        </div>
      ))}
    </div>
  );
}

function CityImagePreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[8px] border border-[#1d1d19]/10 bg-[#fff7df] shadow-[0_14px_30px_rgba(29,29,25,0.12)] sm:aspect-[1.9/1] lg:aspect-[16/9]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain object-center"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-2 rounded-[5px] border border-white/35" />
    </div>
  );
}

export default function BoldMovesFindCafesPage() {
  const [selectedCountry, setSelectedCountry] = useState('All countries');
  const [selectedDate, setSelectedDate] = useState('All dates');

  const filteredCities = cities.filter((item) => {
    if (item.country === 'New city') {
      return true;
    }

    const countryMatches = selectedCountry === 'All countries' || item.country === selectedCountry;
    const dateMatches = selectedDate === 'All dates' || item.earliestDate === selectedDate;

    return countryMatches && dateMatches;
  });

  return (
    <div className="min-h-screen bg-[#fffbe8] p-4">
      <div className="flex min-h-[calc(100svh-32px)] flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <section className="bg-[#fffbe8] py-8 lg:py-12">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-4 w-fit rounded-full border border-[#1d1d19] bg-[#ffe779] px-5 py-2 text-[0.9rem] font-black tracking-[-0.025em] text-[#1d1d19]">
                find cafes
              </div>
              <h1 className="mx-auto max-w-[680px] text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-[#1d1d19] sm:text-[2.55rem]">
                Pick the city where your brand should enter the room.
              </h1>
              <p className="mx-auto mt-4 max-w-[560px] text-[1.05rem] font-semibold leading-[1.32] tracking-[-0.025em] text-[#6f6251]">
                Curated cafes, real tables, and city communities ready for physical brand moments.
              </p>
            </div>

            <div className="mb-8 grid gap-3 rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffdf1] p-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[760px]">
              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#f45a2f]">
                  country
                </span>
                <select
                  value={selectedCountry}
                  onChange={(event) => setSelectedCountry(event.target.value)}
                  className="h-[52px] w-full rounded-[7px] border border-[#1d1d19]/15 bg-[#fffbe8] px-3 text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] outline-none"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#f45a2f]">
                  date
                </span>
                <select
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="h-[52px] w-full rounded-[7px] border border-[#1d1d19]/15 bg-[#fffbe8] px-3 text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] outline-none"
                >
                  {dates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {filteredCities.map((item) => (
                <article
                  key={item.city}
                  className="flex min-h-[330px] flex-col rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffbe8] p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  {'image' in item && item.image ? (
                    <CityImagePreview src={item.image} alt={`${item.city} cafe card`} />
                  ) : (
                    <CityPreview colors={item.colors} />
                  )}
                  <div className="mt-5 text-[0.92rem] font-black uppercase tracking-[0.12em] text-[#f45a2f]">
                    {item.label}
                  </div>
                  <h2 className="mt-2 text-[2rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
                    {item.city}
                  </h2>

                  <div className="mt-auto grid gap-2 pt-10 text-[1rem] font-medium tracking-[-0.025em] text-[#1d1d19]">
                    <div className="rounded-[3px] bg-[#fff0c6] px-2 py-2">
                      Earliest date: <span className="font-black">{item.earliestDate}</span>
                    </div>
                    <div className="rounded-[3px] bg-[#fff0c6] px-2 py-2">
                      Capacity: <span className="font-black">{item.capacity}</span>
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="mt-5 flex h-[54px] w-full items-center justify-center gap-2 rounded-[7px] border border-[#1d1d19] bg-[#ffe779] text-[1.05rem] font-black tracking-[-0.025em] text-[#1d1d19] shadow-[0_12px_24px_rgba(29,29,25,0.10)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    {item.country === 'New city' ? 'request city' : 'select city'}
                    <RiArrowRightUpLongLine className="size-5 text-[#f45a2f]" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
