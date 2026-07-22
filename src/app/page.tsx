'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowDownDoubleLine,
  RiArrowRightDoubleLine,
  RiArrowRightUpLongLine,
} from '@remixicon/react';

import { redirectToCheckout, stripeCheckoutUrl } from '@/lib/checkout';

const navItems = [
  { label: 'Welcome', count: '01', href: '/' },
  { label: 'How it Works', count: '02', href: '#how-it-works' },
  { label: 'Services', count: '03', href: '#services' },
  { label: 'Locations', count: '04', href: '/startday-find-cafes' },
  { label: 'Faq', count: '05', href: '/startday-faq' },
  { label: 'About', count: '06', href: '/startday-about' },
];

const carouselTeamData = [
  {
    id: 'stockholm',
    country: 'Sweden',
    name: 'Stockholm',
    role: '10-12 July',
    image: '/bold-moves-carousel-stockholm.avif',
    href: '/cafe/stockholm',
    tone: '#ffe779',
  },
  {
    id: 'helsinki',
    country: 'Finland',
    name: 'Helsinki',
    role: '10-12 July',
    image: '/bold-moves-carousel-helsinki.avif',
    href: '/cafe/helsinki',
    tone: '#b9f28c',
  },
  {
    id: 'tallinn',
    country: 'Estonia',
    name: 'Tallinn',
    role: '10-12 July',
    image: '/bold-moves-carousel-tallinn.avif',
    href: '/cafe/tallinn',
    tone: '#88d8ff',
  },
  {
    id: 'copenhagen',
    country: 'Denmark',
    name: 'Copenhagen',
    role: '10-12 July',
    image: '/bold-moves-carousel-copenhagen.avif',
    href: '/cafe/copenhagen',
    tone: '#f45a2f',
  },
  {
    id: 'berlin',
    country: 'Germany',
    name: 'Berlin',
    role: '10-12 July',
    image: '/bold-moves-carousel-berlin.avif',
    href: '/cafe/berlin',
    tone: '#ffd7ea',
  },
  {
    id: 'istanbul',
    country: 'Turkey',
    name: 'Istanbul',
    role: '10-12 July',
    image: '/bold-moves-carousel-istanbul.avif',
    href: '/cafe/istanbul',
    tone: '#fff0c6',
  },
  {
    id: 'paris',
    country: 'France',
    name: 'Paris',
    role: '10-12 July',
    image: '/bold-moves-carousel-paris.avif',
    href: '/cafe/paris',
    tone: '#dff6d2',
  },
  {
    id: 'vienna',
    country: 'Austria',
    name: 'Vienna',
    role: '10-12 July',
    image: '/bold-moves-carousel-vienna.avif',
    href: '/cafe/vienna',
    tone: '#ffe0c7',
  },
];

const desktopCarouselSlots = [
  { offset: -3, size: 150, radius: '38px' },
  { offset: -2, size: 190, radius: '42px' },
  { offset: -1, size: 230, radius: '46px' },
  { offset: 0, size: 330, radius: '54px' },
  { offset: 1, size: 230, radius: '46px' },
  { offset: 2, size: 190, radius: '42px' },
  { offset: 3, size: 150, radius: '38px' },
];

const mobileCarouselSlots = [
  { offset: -2, size: 120, radius: '28px' },
  { offset: -1, size: 150, radius: '32px' },
  { offset: 0, size: 230, radius: '38px' },
  { offset: 1, size: 150, radius: '32px' },
  { offset: 2, size: 120, radius: '28px' },
];

const services = [
  {
    title: 'founding team session',
    tags: ['no pitch decks needed', 'casual conversations', 'matches can go further'],
    colors: ['#6b3a1f', '#ff7ccf', '#ffc3af'],
  },
  {
    title: 'skill-swap session',
    tags: ['live problem solving', 'hands-on collaboration', 'visibility for what you actually do'],
    colors: ['#087fbd', '#a7e8f6', '#f45a2f'],
  },
  {
    title: 'idea validation session',
    tags: ['real feedback', 'quick idea stress-tests', 'founder-to-founder input'],
    colors: ['#fff4df', '#ff7b21', '#1d1d19'],
  },
  {
    title: 'weekend build session',
    tags: ['team formation', 'rapid prototyping', 'founder energy, compressed into 2 days'],
    colors: ['#ffc7b7', '#201047', '#ffe779'],
  },
  {
    title: 'community lounge',
    tags: ['coffee & casual talk', 'low-pressure networking', 'StartDay merch drops'],
    colors: ['#f7f0de', '#d7d7d7', '#ff9e8a'],
  },
];

const stepsData = [
  {
    id: 'step1',
    number: '01',
    subtitle: 'Tell us your city & skills',
    description: 'Share your city and what you bring to the table - code, design, growth, ops, whatever it is.',
    color: '#f45a2f',
    roundedClass: 'rounded-t-[20px] rounded-b-xl lg:rounded-l-3xl lg:rounded-r-xl',
    hasArrow: true,
  },
  {
    id: 'step2',
    number: '02',
    subtitle: 'We build your group',
    description: 'Matching, planning, the room - all handled. You get placed with the right people for your weekend.',
    color: '#37cf6a',
    roundedClass: 'rounded-xl',
    hasArrow: true,
  },
  {
    id: 'step3',
    number: '03',
    subtitle: 'Your weekend comes alive',
    description: 'Real founders, real conversations, real momentum. Not a networking event. A working weekend.',
    color: '#7c5cff',
    roundedClass: 'rounded-b-[20px] rounded-t-xl lg:rounded-r-3xl lg:rounded-l-xl',
    hasArrow: false,
  },
];

const matchQuestions = [
  {
    id: 'city',
    eyebrow: 'step 01 / city',
    title: 'Which city are you in?',
    helper: 'Pick a cafe market so we can shape the right founder room around you.',
    options: ['Helsinki', 'Tallinn', 'Stockholm', 'Copenhagen', 'Istanbul', 'Berlin', 'Paris', 'Vienna'],
    icon: '⌖',
  },
  {
    id: 'role',
    eyebrow: 'step 02 / role',
    title: "What's your role?",
    helper: 'We balance each table with complementary skills, not random seats.',
    options: ['Developer', 'Designer', 'Product Manager', 'Marketer'],
    icon: '✦',
  },
  {
    id: 'build',
    eyebrow: 'step 03 / idea lane',
    title: 'What would you like to build?',
    helper: 'Choose the room you want to walk into. We will tune the cafe brief around it.',
    options: ['AI / Automation', 'B2B SaaS', 'Consumer App', 'Creator Economy', 'Developer Tools', 'Climate / Sustainability'],
    icon: '◒',
  },
  {
    id: 'availability',
    eyebrow: 'step 04 / weekend',
    title: 'When are you available?',
    helper: 'A clear weekend helps us reserve the right table and crew.',
    options: ['This weekend', 'Next weekend', 'Flexible'],
    icon: '↗',
  },
] as const;

const cityMeta: Record<string, { country: string; tint: string }> = {
  Helsinki: {
    country: 'Finland',
    tint: 'linear-gradient(135deg, rgba(0,87,183,0.10), rgba(255,255,255,0.92))',
  },
  Tallinn: {
    country: 'Estonia',
    tint: 'linear-gradient(135deg, rgba(0,114,206,0.10), rgba(255,255,255,0.92) 52%, rgba(29,29,25,0.05))',
  },
  Stockholm: {
    country: 'Sweden',
    tint: 'linear-gradient(135deg, rgba(0,87,183,0.10), rgba(255,205,0,0.18))',
  },
  Copenhagen: {
    country: 'Denmark',
    tint: 'linear-gradient(135deg, rgba(198,12,48,0.12), rgba(255,255,255,0.94))',
  },
  Istanbul: {
    country: 'Türkiye',
    tint: 'linear-gradient(135deg, rgba(227,10,23,0.12), rgba(255,255,255,0.94))',
  },
  Berlin: {
    country: 'Germany',
    tint: 'linear-gradient(135deg, rgba(29,29,25,0.07), rgba(221,0,0,0.08) 52%, rgba(255,206,0,0.16))',
  },
  Paris: {
    country: 'France',
    tint: 'linear-gradient(135deg, rgba(0,85,164,0.10), rgba(255,255,255,0.92) 52%, rgba(239,65,53,0.10))',
  },
  Vienna: {
    country: 'Austria',
    tint: 'linear-gradient(135deg, rgba(237,41,57,0.12), rgba(255,255,255,0.94))',
  },
};

function PetalLogo({ tone = 'green' }: { tone?: 'green' | 'yellow' | 'blue' }) {
  const colors = {
    green: ['#b9f28c', '#37cf6a'],
    yellow: ['#ffe66f', '#ffb34c'],
    blue: ['#88d8ff', '#ff693f'],
  }[tone];

  return (
    <div className="relative size-9 shrink-0">
      {[0, 1, 2, 3].map((item) => (
        <span
          key={item}
          className="absolute left-1/2 top-1/2 block h-4 w-4 rounded-full"
          style={{
            background: colors[item % 2],
            transform: `translate(-50%, -50%) rotate(${item * 90}deg) translateY(-8px)`,
          }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 block size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8d9]" />
    </div>
  );
}

export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Link
        href="/startday-find-cafes"
        className="group fixed right-4 top-8 z-50 inline-flex h-10 origin-top animate-[pin-nudge_2.8s_ease-in-out_infinite] items-center justify-center rounded-full border border-[#1d1d19]/10 bg-[#ffe779] px-4 text-[0.86rem] font-black tracking-[-0.025em] text-[#1d1d19] shadow-[0_10px_24px_rgba(29,29,25,0.16)] transition-transform duration-300 active:scale-95 motion-reduce:animate-none lg:hidden"
      >
        Locations
      </Link>
      <aside
        className={[
          'relative flex w-full flex-col rounded-[7px] bg-[#f45a2f] text-[#1d1d19] transition-all duration-300 lg:sticky lg:top-4 lg:min-h-[calc(100svh-32px)] lg:w-[300px] lg:p-5',
          isMobileMenuOpen
            ? 'p-3 shadow-[0_12px_34px_rgba(29,29,25,0.16)]'
            : 'p-2.5 shadow-none',
        ].join(' ')}
      >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="StartDay home"
          className="relative h-10 w-[142px] shrink-0 overflow-hidden"
        >
          <Image
            src="/startday-logo-cropped.avif"
            alt="StartDay"
            width={188}
            height={62}
            priority
            className="h-full w-full object-contain"
          />
        </Link>
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="flex size-10 items-center justify-center rounded-[7px] border border-dashed border-[#f8edd0] bg-[#fff8df] text-[1.8rem] font-medium leading-none text-[#756752] lg:hidden"
        >
          {isMobileMenuOpen ? (
            <span aria-hidden="true">×</span>
          ) : (
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-0.5 w-6 rounded-full bg-[#756752]" />
              <span className="block h-0.5 w-6 rounded-full bg-[#756752]" />
              <span className="block h-0.5 w-6 rounded-full bg-[#756752]" />
            </span>
          )}
        </button>
      </div>

      <nav
        className={[
          'mt-4 grid grid-cols-2 gap-2 lg:mt-7 lg:flex lg:flex-col',
          isMobileMenuOpen ? 'grid' : 'hidden lg:flex',
        ].join(' ')}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="group flex h-9 items-center justify-between rounded-[4px] bg-[#ffe779] px-3 text-[1.06rem] font-black tracking-[-0.025em] transition-transform duration-300 hover:-translate-y-0.5 lg:h-[50px] lg:rounded-[7px] lg:px-4 lg:text-[1.18rem]"
          >
            <span>{item.label}</span>
            <span className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-white text-[0.68rem] font-black tracking-[-0.025em] lg:size-9 lg:text-sm">
                {item.count}
              </span>
            </span>
          </Link>
        ))}
      </nav>

      <div
        className={[
          'pt-5 lg:mt-auto lg:block lg:pt-14',
          isMobileMenuOpen ? 'block' : 'hidden',
        ].join(' ')}
      >
        <h2 className="max-w-[360px] text-[1.58rem] font-black leading-[1.02] tracking-[-0.025em] text-white lg:max-w-[260px] lg:text-[2rem]">
          ready to find your startup team
        </h2>
        <Link
          href="/find-your-team"
          className="mt-3 flex h-11 max-w-[194px] items-center justify-center rounded-[7px] border border-[#1d1d19] bg-[#ffe779] text-[1rem] font-extrabold tracking-[-0.025em] text-[#1d1d19] shadow-[0_12px_24px_rgba(29,29,25,0.10)] transition-transform duration-300 hover:-translate-y-0.5 lg:mt-6 lg:h-14 lg:max-w-[260px] lg:text-[1.05rem]"
        >
          find your team
        </Link>

        <div className="mt-6 flex max-w-full flex-wrap items-center justify-end gap-3 rounded-[7px] border border-dashed border-[#f8edd0] bg-[#fff8df] px-3 py-3 text-[0.94rem] font-semibold tracking-[-0.025em] lg:max-w-[260px] lg:px-4 lg:py-4">
          {['ig', 'in'].map((icon) => (
            <span
              key={icon}
              className="flex size-5 items-center justify-center rounded-[4px] bg-[#1d1d19] text-[10px] font-black uppercase text-[#fff8df]"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      </aside>
    </>
  );
}

function TopBar() {
  return null;
  return (
    <header className="flex items-center justify-between gap-4 text-[#1d1d19]">
      <div className="flex items-center gap-2 text-[1.1rem] font-medium tracking-[-0.025em] sm:text-[1.25rem]">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#edf7dc]">
          <span className="size-3 rounded-full bg-[#65bd34]" />
        </span>
        available for the project
      </div>

      <div className="hidden items-center gap-2 text-[1rem] font-semibold sm:flex">
        <span className="rounded-[2px] bg-[#fff0c6] px-2 py-1">est.2015</span>
        <span className="opacity-70">→</span>
        <span className="rounded-[2px] bg-[#fff0c6] px-2 py-1 text-[1.2rem] leading-none">∞</span>
      </div>
    </header>
  );
}

function PortraitOrb() {
  return (
    <span className="relative inline-flex size-[0.86em] translate-y-[0.08em] items-center justify-center overflow-hidden rounded-full bg-[#16376c] align-baseline">
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,#35d4ff_0_12%,transparent_13%),radial-gradient(circle_at_28%_68%,#ff7d7d_0_18%,transparent_19%),linear-gradient(120deg,#0f3d85_0%,#1d6aca_44%,#ff8756_69%,#ff72aa_100%)]" />
      <span className="absolute left-[22%] top-[22%] h-[58%] w-[40%] rounded-full bg-[#ff9a6b] opacity-80 mix-blend-screen" />
      <span className="absolute left-[42%] top-[20%] h-[60%] w-[42%] rounded-full bg-[#28d5bd] opacity-70 mix-blend-screen" />
    </span>
  );
}

function MoonWord() {
  return (
    <span className="relative inline-flex items-center">
      m
      <span className="relative mx-[0.02em] inline-flex size-[0.74em] items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#1d1d19]" />
        <span className="absolute -left-[0.22em] inset-y-0 w-[0.74em] rounded-full border-[0.06em] border-[#fffbe9] bg-[#1d1d19]" />
        <span className="absolute -left-[0.40em] inset-y-0 w-[0.74em] rounded-full border-[0.06em] border-[#fffbe9] bg-[#1d1d19]" />
      </span>
      ves
    </span>
  );
}

function HeroContent() {
  return (
    <section className="relative flex flex-col overflow-hidden rounded-[8px] bg-[#fffbe8] px-5 pb-14 pt-12 sm:px-9 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
      <header className="flex justify-center">
        <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
          <h1 className="max-w-[930px] text-[2rem] font-black leading-[1.04] tracking-[-0.025em] text-[#1d1d19]">
            The weekend that turns strangers into founders
          </h1>

          <p className="mt-6 max-w-[560px] text-[1.05rem] font-semibold leading-[1.34] tracking-[-0.025em] text-[#6f6251]">
            No bios. No swiping. No planning. We&apos;ll match you with your team and handle the details. All you need to do is show up.
          </p>
        </div>
      </header>
    </section>
  );
}

function TeamCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevActiveIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    prevActiveIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselTeamData.length) % carouselTeamData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselTeamData.length);
  };

  const activeMember = carouselTeamData[activeIndex];
  const slots = isMobile ? mobileCarouselSlots : desktopCarouselSlots;
  const activeSize = isMobile ? 230 : 330;
  const gap = isMobile ? 12 : 16;

  return (
    <section id="about" className="overflow-hidden bg-[#fffbe8] py-8 lg:py-10">
      <div className="rounded-[10px] border border-[#eadc9d] bg-[#fff5c8] px-4 py-10 shadow-[0_22px_70px_rgba(29,29,25,0.06)] sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-[#1d1d19] bg-[#ffe779] px-5 py-2 text-[0.9rem] font-black tracking-[-0.025em] text-[#1d1d19]">
              city drops connected
            </div>
            <h2 className="mt-5 max-w-[520px] text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-[#1d1d19]">
              Your next founding weekend is already forming.
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <p className="max-w-[450px] text-[1.12rem] font-medium leading-[1.16] tracking-[-0.025em] text-[#1d1d19] lg:text-right">
              Browse live city drops, pick the session that fits your goals, and turn a weekend into your next startup team.
            </p>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 flex-1 items-center justify-center rounded-full border border-[#1d1d19] bg-[#fffbe8] text-[1.35rem] font-black text-[#1d1d19] transition-transform duration-300 hover:-translate-y-0.5 sm:w-16 sm:flex-none"
                aria-label="Previous team member"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#f45a2f] text-[1.35rem] font-black text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-16 sm:flex-none"
                aria-label="Next team member"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative w-full overflow-hidden" style={{ height: activeSize }}>
            {carouselTeamData.map((member, index) => {
              const total = carouselTeamData.length;
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              let prevOffset = index - prevActiveIndexRef.current;
              if (prevOffset > total / 2) prevOffset -= total;
              if (prevOffset < -total / 2) prevOffset += total;

              const slot = slots.find((item) => item.offset === offset);
              const isVisible = Math.abs(offset) <= (isMobile ? 2 : 3);
              const isActive = offset === 0;
              const isWrapping = Math.abs(offset - prevOffset) > 1;
              const size = slot?.size ?? (isMobile ? 120 : 150);
              const radius = slot?.radius ?? '34px';
              const centerSlotIndex = slots.findIndex((item) => item.offset === 0);

              let xOffset = 0;
              if (offset !== 0) {
                const dir = offset > 0 ? 1 : -1;
                const absOffset = Math.abs(offset);
                xOffset = slots[centerSlotIndex].size / 2 + gap;
                for (let i = 1; i < absOffset; i++) {
                  const siblingSlot = slots.find((item) => item.offset === i);
                  xOffset += (siblingSlot?.size ?? (isMobile ? 120 : 150)) + gap;
                }
                xOffset += size / 2;
                xOffset *= dir;
              }

              return (
                <div
                  key={member.id}
                  className={[
                    'absolute left-1/2 top-0 overflow-hidden border border-[#1d1d19]/10 shadow-[0_22px_60px_rgba(29,29,25,0.12)]',
                    !isWrapping ? 'transition-all duration-500 ease-in-out' : '',
                    !isVisible ? 'pointer-events-none opacity-0' : '',
                  ].join(' ')}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: radius,
                    background: member.tone,
                    zIndex: isVisible ? 4 - Math.abs(offset) : 0,
                    transform: `translateX(calc(-50% + ${xOffset}px))`,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={[
                      'size-full object-cover',
                      !isWrapping ? 'transition-all duration-500 ease-in-out' : '',
                      !isActive ? 'scale-[0.98] opacity-80 saturate-[0.72]' : '',
                    ].join(' ')}
                  />
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-7 flex max-w-[520px] flex-col items-center text-center">
            <div className="rounded-full bg-[#fffbe8] px-5 py-2 text-[1rem] font-black tracking-[-0.025em] text-[#f45a2f]">
              {activeMember.country}
            </div>
            <h3 className="mt-3 text-[2rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
              {activeMember.name}
            </h3>
            <p className="mt-2 text-[1.05rem] font-semibold tracking-[-0.025em] text-[#1d1d19]/70">
              {activeMember.role}
            </p>
            <Link
              href={activeMember.href}
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#1d1d19] bg-[#ffe779] px-6 text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] shadow-[0_12px_24px_rgba(29,29,25,0.10)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              explore
              <RiArrowRightUpLongLine className="size-4 text-[#f45a2f]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePreview({ colors }: { colors: string[] }) {
  return (
    <div className="flex h-16 items-start gap-1.5">
      {colors.map((color, index) => (
        <div
          key={`${color}-${index}`}
          className="relative h-12 w-16 rounded-[6px] border border-[#1d1d19]/10 shadow-[0_10px_24px_rgba(29,29,25,0.12)]"
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

function ServicesSection() {
  return (
    <section id="services" className="bg-[#fffbe8] py-8 lg:py-12">
      <div className="mb-10 text-center">
        <h2 className="text-[2rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
          services
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex min-h-[300px] flex-col rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffbe8] p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <ServicePreview colors={service.colors} />
            <h3 className="mt-5 text-[2rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
              {service.title}
            </h3>
            <div className="mt-auto flex flex-wrap gap-2 pt-10">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[3px] bg-[#fff0c6] px-2 py-1 text-[1rem] font-medium leading-none tracking-[-0.025em] text-[#1d1d19]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}

        <article className="flex min-h-[300px] flex-col rounded-[7px] border border-dashed border-[#1d1d19] bg-[#1d1d19] p-6 text-[#fffbe8]">
          <div className="flex gap-2">
            <PetalLogo tone="green" />
            <PetalLogo tone="yellow" />
            <PetalLogo tone="blue" />
          </div>
          <h3 className="mt-6 max-w-[280px] text-[2rem] font-black leading-[0.98] tracking-[-0.025em]">
            ready to find your team
          </h3>
          <Link
            href="#"
            className="mt-auto flex h-[60px] w-full max-w-[170px] items-center justify-center rounded-[7px] bg-[#ffe779] text-[1.12rem] font-medium tracking-[-0.025em] text-[#1d1d19] transition-transform duration-300 hover:-translate-y-1"
          >
            let&apos;s talk
          </Link>
        </article>
      </div>
    </section>
  );
}

function ClientVoicesSection() {
  return (
    <section className="bg-[#fffbe8] px-2 py-10 lg:py-16">
      <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
        <h2 className="max-w-[560px] text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-[#1d1d19]">
          hear from our satisfied clients
        </h2>

        <div className="mt-12 flex w-full flex-col items-center gap-6 rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffdf0] px-6 py-7 text-left sm:flex-row sm:justify-between lg:px-8">
          <div className="flex items-end gap-2">
            <span className="text-[3.25rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
              4.5
            </span>
            <span className="pb-1 text-[1.35rem] font-black tracking-[-0.025em] text-[#1d1d19]">
              /5
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="text-[1.55rem] font-black leading-none tracking-[0.04em] text-[#f45a2f]">
              ★★★★★
            </div>
            <p className="text-[1.05rem] font-semibold leading-none tracking-[-0.025em] text-[#6f6251]">
              trusted by builders
            </p>
          </div>

          <div className="relative h-[58px] w-[108px] overflow-hidden rounded-[7px] border border-[#1d1d19]/10 bg-[#ffe779]">
            <img
              src={carouselTeamData[5].image}
              alt=""
              className="absolute inset-y-0 left-0 h-full w-[58px] object-cover"
            />
            <img
              src={carouselTeamData[1].image}
              alt=""
              className="absolute inset-y-0 right-0 h-full w-[58px] object-cover"
            />
            <span className="absolute inset-y-0 left-[44px] w-6 bg-[#37cf6a]/80 mix-blend-multiply" />
          </div>

          <p className="max-w-[230px] text-center text-[1.08rem] font-bold leading-[1.06] tracking-[-0.025em] text-[#1d1d19] sm:text-left">
            56+ times we&apos;ve helped founders find their team.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#fffbe8] py-10 lg:py-16">
      <div className="mx-auto mb-8 flex w-full max-w-[808px] flex-col gap-5 px-4 lg:mb-12 lg:flex-row lg:items-end lg:gap-8 lg:px-0">
        <div className="flex flex-1 flex-col gap-3">
          <div className="w-fit rounded-[9px] bg-[#fff0c6] px-3 py-1.5 text-[0.9rem] font-black tracking-[-0.025em] text-[#6f6251]">
            HOW IT WORKS
          </div>
          <h2 className="text-[2rem] font-black leading-[1.04] tracking-[-0.025em] text-[#1d1d19]">
            Bold, simple and matched.
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 lg:max-w-[310px]">
          <p className="text-[1rem] font-medium leading-[1.35] tracking-[-0.025em] text-[#6f6251]">
            Find your team in just 3 steps. We handle the matching, the space, and the weekend - you just show up ready to build.
          </p>
          <Link
            href="#"
            className="group inline-flex w-fit items-center gap-1 text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] transition-colors hover:text-[#f45a2f]"
          >
            Get started free
            <RiArrowRightUpLongLine className="size-5 text-[#9a8d73] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f45a2f]" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-6 flex w-full flex-col gap-2 px-4 lg:max-w-7xl lg:flex-row lg:gap-3 lg:px-7">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className={`relative flex w-full bg-[#fff5c8] p-5 shadow-[0_18px_50px_rgba(29,29,25,0.05)] lg:p-7 ${step.roundedClass}`}
          >
            {step.hasArrow && (
              <div className="absolute -bottom-4 left-12 z-10 flex size-7 items-center justify-center rounded-full border border-[#eadc9d] bg-[#fffbe8] shadow-[0_8px_18px_rgba(29,29,25,0.08)] lg:-right-5 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2">
                <RiArrowRightDoubleLine className="hidden size-5 text-[#9a8d73] lg:block" />
                <RiArrowDownDoubleLine className="block size-5 text-[#9a8d73] lg:hidden" />
              </div>
            )}

            <div
              className="flex h-auto border-r border-[#e3c891] pr-5 text-[1.25rem] font-black leading-none tracking-[-0.025em] xl:pr-7"
              style={{ color: step.color }}
            >
              {step.number}
            </div>
            <div className="flex flex-col gap-3 pl-5 xl:pl-7">
              <div className="text-[0.95rem] font-black tracking-[-0.025em] text-[#9a8d73]">
                {step.subtitle}
              </div>
              <div className="text-[1.15rem] font-black leading-[1.15] tracking-[-0.025em] text-[#1d1d19]">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 text-center text-[0.95rem] font-semibold tracking-[-0.025em] text-[#9a8d73] lg:px-0">
        We handle the matching, the space, and the weekend - you just show up.
      </div>
    </section>
  );
}

function PricingSection() {
  const pricingItems = [
    'Matched with your team based on city, skills & goals',
    'Full 2-day weekend session (Sat-Sun)',
    'Space & setup handled - just show up',
    '4-6 people per group, balanced by skillset',
    "Full refund if we can't match you",
  ];

  return (
    <section className="bg-[#fffbe8] px-4 py-10 lg:py-16">
      <div className="mx-auto grid max-w-[980px] overflow-hidden rounded-[7px] border border-[#1d1d19]/10 bg-[#fffdf0] shadow-[0_18px_50px_rgba(29,29,25,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-between bg-[#f45a2f] p-6 text-[#fffbe8] lg:p-8">
          <div>
            <div className="w-fit rounded-[9px] bg-[#ffe779] px-3 py-1.5 text-[0.9rem] font-black tracking-[-0.025em] text-[#1d1d19]">
              PRICING
            </div>
            <h2 className="mt-5 max-w-[360px] text-[2.15rem] font-black leading-[0.98] tracking-[-0.025em] lg:text-[2.65rem]">
              One seat. One weekend. One real shot.
            </h2>
          </div>
          <p className="mt-8 max-w-[330px] text-[1rem] font-semibold leading-6 tracking-[-0.025em] text-[#fffbe8]/85">
            StartDay keeps pricing simple so the focus stays on the table, the team, and the work.
          </p>
        </div>

        <article className="p-6 lg:p-8">
          <div className="flex flex-col gap-4 border-b border-[#e3d8b7] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-end gap-2 text-[#1d1d19]">
                <span className="text-[3.75rem] font-black leading-none tracking-[-0.025em]">€15</span>
                <span className="pb-2 text-[1rem] font-black tracking-[-0.025em] text-[#9a8d73]">/ per seat</span>
              </div>
              <p className="mt-3 max-w-[360px] text-[1.2rem] font-black leading-[1.12] tracking-[-0.025em] text-[#1d1d19]">
                One weekend. One team. Real momentum.
              </p>
            </div>
            <Link
              href={stripeCheckoutUrl}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[7px] border border-[#1d1d19] bg-[#ffe779] px-6 text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] shadow-[0_14px_28px_rgba(255,231,121,0.22)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Get your seat
              <RiArrowRightUpLongLine className="size-4 text-[#f45a2f] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-6 rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffbe8] px-5 py-2">
            {pricingItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-[#eadc9d] py-4 text-[0.98rem] font-semibold leading-6 tracking-[-0.025em] text-[#1d1d19] last:border-b-0"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#37cf6a]/20 text-[0.78rem] font-black text-[#268847]">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function FooterSection() {
  const columns = [
    {
      title: 'Resources',
      links: [
        { label: 'Locations', href: '/startday-find-cafes' },
        { label: 'Session Formats', href: '/#services' },
        { label: 'FAQ', href: '/startday-faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/startday-about' },
        { label: 'How it Works', href: '/#how-it-works' },
        { label: 'Contact', href: '/find-your-team' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Preferences', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#fffbe8] px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-[#e3d8b7] pb-9 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[2rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
            Ready to find your team?
          </h2>
          <Link
            href="/find-your-team"
            className="group inline-flex w-fit items-center gap-1 border-b border-[#1d1d19] text-[1rem] font-black tracking-[-0.025em] text-[#1d1d19] transition-colors hover:text-[#f45a2f]"
          >
            Let&apos;s talk
            <RiArrowRightUpLongLine className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative grid gap-10 pt-12 lg:grid-cols-[1fr_0.72fr] lg:pt-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <div className="text-[0.9rem] font-semibold tracking-[-0.025em] text-[#9a8d73]">
                  {column.title}
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {column.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-fit text-[0.95rem] font-semibold tracking-[-0.025em] text-[#1d1d19] transition-colors hover:text-[#f45a2f]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-[220px] lg:min-h-[260px]">
            <div className="flex justify-start gap-4 lg:justify-end">
              {['fb', 'ig', 'x'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex size-8 items-center justify-center rounded-full bg-[#1d1d19] text-[0.72rem] font-black uppercase text-[#fffbe8] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {social}
                </Link>
              ))}
            </div>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-[clamp(4.8rem,12vw,10.5rem)] w-[min(76vw,560px)] select-none opacity-95 sm:-bottom-4 lg:right-[-1%]"
              aria-hidden="true"
            >
              <Image
                src="/startday-logo-cropped.avif"
                alt=""
                fill
                sizes="(min-width: 1024px) 560px, 76vw"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-[0.85rem] font-medium tracking-[-0.025em] text-[#b2a682]">
          2026 StartDay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function CafeMatchFormSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = matchQuestions[step];
  const selected = answers[question.id];
  const isLastStep = step === matchQuestions.length - 1;
  const progress = ((step + 1) / matchQuestions.length) * 100;

  const chooseOption = (option: string) => {
    setAnswers((current) => ({ ...current, [question.id]: option }));
  };

  const goNext = () => {
    if (!selected) return;
    if (isLastStep) {
      redirectToCheckout();
      return;
    }
    setStep((current) => Math.min(current + 1, matchQuestions.length - 1));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  return (
    <section id="find-cafes" className="bg-[#fffbe8] py-8 pb-12 lg:py-12">
      <div className="overflow-hidden rounded-[10px] border border-[#eadc9d] bg-[#fff5c8] shadow-[0_22px_70px_rgba(29,29,25,0.06)]">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_0.58fr]">
          <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex items-center gap-4">
              <div className="flex size-[70px] shrink-0 items-center justify-center rounded-[28px] border border-[#f45a2f]/35 bg-[#fffbe8] text-[2rem] font-black text-[#f45a2f] shadow-[0_18px_40px_rgba(244,90,47,0.08)]">
                {question.icon}
              </div>
              <div className="h-px flex-1 bg-[#e3c891]" />
              <span className="hidden rounded-full border border-[#1d1d19] bg-[#ffe779] px-4 py-2 text-[0.82rem] font-black tracking-[-0.025em] text-[#1d1d19] sm:inline-flex">
                find cafes
              </span>
            </div>

            <div className="mt-8">
              <div className="text-[0.82rem] font-black uppercase tracking-[0.14em] text-[#f45a2f]">
                {question.eyebrow}
              </div>
              <h2 className="mt-3 max-w-[760px] text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-[#1d1d19]">
                {question.title}
              </h2>
              <p className="mt-4 max-w-[580px] text-[1.15rem] font-medium leading-[1.35] tracking-[-0.025em] text-[#6b3a1f]">
                {question.helper}
              </p>
            </div>

            <div className="mt-9 grid gap-3 md:grid-cols-2">
              {question.options.map((option) => {
                const meta = question.id === 'city' ? cityMeta[option] : null;
                const isSelected = selected === option;

                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => chooseOption(option)}
                    className={[
                      'group min-h-[86px] rounded-[18px] border px-5 py-4 text-left transition-all duration-300',
                      isSelected
                        ? 'border-[#1d1d19] bg-[#ffe779] shadow-[0_18px_36px_rgba(29,29,25,0.12)]'
                        : 'border-[#dccb9f] bg-[#fffbe8] hover:-translate-y-0.5 hover:border-[#1d1d19]/60',
                    ].join(' ')}
                    style={{
                      background: isSelected ? '#ffe779' : meta?.tint,
                    }}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block text-[1.18rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
                          {option}
                        </span>
                        <span className="mt-2 block text-[0.95rem] font-semibold tracking-[-0.025em] text-[#6b3a1f]">
                          {meta?.country ?? 'Cafe sprint'}
                        </span>
                      </span>
                      <span
                        className={[
                          'flex size-8 shrink-0 items-center justify-center rounded-full border text-[0.9rem] font-black transition-all duration-300',
                          isSelected
                            ? 'border-[#1d1d19] bg-[#1d1d19] text-[#fffbe8]'
                            : 'border-[#1d1d19]/20 bg-white/70 text-[#1d1d19]/45 group-hover:border-[#1d1d19] group-hover:text-[#1d1d19]',
                        ].join(' ')}
                      >
                        {isSelected ? '✓' : '→'}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="flex h-14 items-center justify-center rounded-[7px] border border-[#1d1d19]/20 bg-[#fffbe8] px-7 text-[1.05rem] font-black tracking-[-0.025em] text-[#1d1d19] transition-all duration-300 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!selected}
                className="flex h-14 flex-1 items-center justify-center rounded-[7px] bg-[#f45a2f] px-7 text-[1.08rem] font-black tracking-[-0.025em] text-white shadow-[0_18px_34px_rgba(244,90,47,0.22)] transition-all duration-300 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {isLastStep ? 'Match profile ready' : 'Continue'} →
              </button>
            </div>
          </div>

          <aside className="border-t border-[#eadc9d] bg-[#f45a2f] p-6 text-[#fffbe8] lg:border-l lg:border-t-0 lg:p-8">
            <div className="sticky top-8">
              <div className="flex items-center gap-2">
                <PetalLogo tone="green" />
                <PetalLogo tone="yellow" />
                <PetalLogo tone="blue" />
              </div>
              <h3 className="mt-8 max-w-[320px] text-[2rem] font-black leading-[1.02] tracking-[-0.025em] text-white">
                cafe rooms for bold moves
              </h3>
              <p className="mt-5 text-[1.08rem] font-semibold leading-[1.22] tracking-[-0.025em] text-white/88">
                Choose a city, role, and weekend. We turn it into a sharper table: four people, one cafe, one product.
              </p>

              <div className="mt-8 rounded-[18px] border border-white/22 bg-[#1d1d19] p-5">
                <div className="mb-3 flex items-center justify-between text-[0.85rem] font-black uppercase tracking-[0.12em] text-[#ffe779]">
                  <span>progress</span>
                  <span>{step + 1}/{matchQuestions.length}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-[#ffe779] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-6 grid gap-2">
                  {matchQuestions.map((item, index) => (
                    <div
                      key={item.id}
                      className={[
                        'flex items-center justify-between rounded-[10px] px-3 py-2 text-[0.94rem] font-black tracking-[-0.025em]',
                        index === step ? 'bg-[#ffe779] text-[#1d1d19]' : 'bg-white/8 text-white/72',
                      ].join(' ')}
                    >
                      <span>{item.id}</span>
                      <span>{answers[item.id] ?? (index === step ? 'now' : 'open')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function CafeMatchFormSimple() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = matchQuestions[step];
  const selected = answers[question.id];
  const isLastStep = step === matchQuestions.length - 1;
  const progress = ((step + 1) / matchQuestions.length) * 100;

  const chooseOption = (option: string) => {
    setAnswers((current) => ({ ...current, [question.id]: option }));
  };

  const goNext = () => {
    if (!selected) return;
    if (isLastStep) {
      redirectToCheckout();
      return;
    }
    setStep((current) => Math.min(current + 1, matchQuestions.length - 1));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  return (
    <section id="find-cafes" className="flex min-h-[calc(100svh-32px)] items-center bg-[#fffbe8] px-0 py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[940px] rounded-[7px] border border-dashed border-[#b9ae84] bg-[#fffdf1] px-6 py-10 shadow-[0_22px_70px_rgba(29,29,25,0.04)] sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[780px]">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-[24px] border border-[#f45a2f]/25 bg-[#fff7e4] text-[1.55rem] font-black text-[#f45a2f]">
              {question.icon}
            </div>
            <div className="h-px flex-1 border-t border-dashed border-[#d5c8aa]" />
            <div className="text-[0.82rem] font-black uppercase tracking-[0.14em] text-[#a87b57]">
              {step + 1}/{matchQuestions.length}
            </div>
          </div>

          <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-[#eee2bf]">
            <div
              className="h-full rounded-full bg-[#f45a2f] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-9">
            <div className="text-[0.78rem] font-black uppercase tracking-[0.16em] text-[#f45a2f]">
              {question.eyebrow}
            </div>
            <h2 className="mt-3 max-w-[740px] text-[2rem] font-black leading-[1.04] tracking-[-0.025em] text-[#1d1d19]">
              {question.title}
            </h2>
            <p className="mt-4 max-w-[560px] text-[1.02rem] font-medium leading-[1.45] tracking-[-0.025em] text-[#7b654d]">
              {question.helper}
            </p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-2">
            {question.options.map((option) => {
              const meta = question.id === 'city' ? cityMeta[option] : null;
              const isSelected = selected === option;

              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => chooseOption(option)}
                  className={[
                    'group min-h-[78px] rounded-[14px] border px-5 py-4 text-left transition-all duration-300',
                    isSelected
                      ? 'border-[#1d1d19] bg-[#ffe779] shadow-[0_14px_28px_rgba(29,29,25,0.10)]'
                      : 'border-[#dfd3b8] bg-white hover:-translate-y-0.5 hover:border-[#1d1d19]/45',
                  ].join(' ')}
                  style={{
                    background: isSelected ? '#ffe779' : meta?.tint ?? '#ffffff',
                  }}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span>
                      <span className="block text-[1.02rem] font-black leading-none tracking-[-0.025em] text-[#1d1d19]">
                        {option}
                      </span>
                      <span className="mt-2 block text-[0.9rem] font-medium tracking-[-0.025em] text-[#8a634d]">
                        {meta?.country ?? 'Cafe sprint'}
                      </span>
                    </span>
                    <span
                      className={[
                        'flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.8rem] font-black transition-all duration-300',
                        isSelected
                          ? 'border-[#1d1d19] bg-[#1d1d19] text-[#fffbe8]'
                          : 'border-[#1d1d19]/15 bg-white/80 text-[#1d1d19]/35 group-hover:border-[#1d1d19] group-hover:text-[#1d1d19]',
                      ].join(' ')}
                    >
                      {isSelected ? '✓' : '→'}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="flex h-[52px] items-center justify-center rounded-[7px] border border-[#1d1d19]/15 bg-white px-7 text-[0.98rem] font-black tracking-[-0.025em] text-[#6f6251] transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:text-[#1d1d19] disabled:cursor-not-allowed disabled:opacity-35"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!selected}
              className="flex h-[52px] flex-1 items-center justify-center rounded-[7px] bg-[#1d1d19] px-7 text-[1rem] font-black tracking-[-0.025em] text-[#fffbe8] shadow-[0_14px_28px_rgba(29,29,25,0.14)] transition-all duration-300 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
            >
              {isLastStep ? 'Match profile ready' : 'Continue'} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BoldMovesPage() {
  return (
    <div className="min-h-screen bg-[#fffbe8] p-4">
      <div className="flex min-h-[calc(100svh-32px)] flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <HeroContent />
          <TeamCarouselSection />
          <ClientVoicesSection />
          <HowItWorksSection />
          <PricingSection />
          <ServicesSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
