'use client';

import { FormEvent, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RemixiconComponentType,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLongLine,
  RiArrowRightDoubleLine,
  RiArrowDownDoubleLine,
  RiBillFill,
  RiCodeBoxLine,
  RiCheckboxCircleFill,
  RiCloseLine,
  RiLightbulbFlashLine,
  RiLoopRightLine,
  RiRocket2Line,
  RiStairsFill,
  RiStarSmileFill,
  RiTeamFill,
} from '@remixicon/react';

import { FooterSection } from '@/app/page';
import { Ex3Header } from '@/components/landing/hero-ex3';
import * as Button from '@/components/ui/button';
import { stripeCheckoutUrl } from '@/lib/checkout';
import { cn } from '@/lib/utils';

const kitTabs: { id: string; label: string; icon: RemixiconComponentType }[] = [
  { id: 'overview', label: 'Kit Overview', icon: RiStarSmileFill },
  { id: 'sections', label: '18 Sections', icon: RiBillFill },
  { id: 'bundle', label: 'Bundle', icon: RiBillFill },
];

const sprintInsideItems = [
  'Team Matching',
  'Curated Cafe',
  'Idea Pool',
  '48h Sprint',
  'AI Project Score',
  'Investor Match',
  'Idea Kit Discount',
  'Founding Cohort',
];

const dropInsideItems = [
  'Team Matching',
  'Curated Cafe',
  'Idea Pool',
  '48h Sprint',
  'AI Project Score',
  'Investor Match',
  'Idea Kit Discount',
  'Founding Cohort',
];

const sections = [
  'Problem framing and category thesis',
  'ICP and buyer persona mapping',
  'Market opportunity and timing analysis',
  'Competitor teardown and whitespace',
  'Product concept and MVP scope',
  'Core workflow and feature priorities',
  'Monetization model and pricing logic',
  'Acquisition strategy and launch angles',
  'Landing page messaging structure',
  'Waitlist and conversion funnel',
  'Content prompt pack and hooks',
  'Visual direction and brand references',
  'Operational requirements and tooling',
  'Metrics dashboard and milestones',
  'Validation checklist',
  'Build roadmap',
  'Risk notes',
  'Execution summary',
];

const guaranteeList = [
  '18 sections, full PDF',
  'Platform access',
  'Brand + legal kit',
  '8 build prompts',
  'Lifetime updates',
];

const bundleIncludes = [
  'Kleo validation kit',
  'Signal launch kit',
  'Shared GTM narrative',
  'Combined prompt library',
  'Legal + brand starter assets',
  'Lifetime bundle updates',
];

const dropCafeExamples = [
  {
    phase: 'Before the event',
    title: 'Matching and directives',
    description: 'We match the right people in your city, share the weekend brief, and make sure every table arrives with a clear starting point.',
    icon: RiTeamFill,
  },
  {
    phase: '0-12 hour',
    title: 'Idea discovery and development direction',
    description: 'The table finds a problem worth building around, sharpens the idea, and turns early energy into a practical development path.',
    icon: RiLightbulbFlashLine,
  },
  {
    phase: '12-24 hour',
    title: 'Product development and MVP scope',
    description: 'The group defines the MVP, splits responsibilities, and starts building the first working version with clear checkpoints.',
    icon: RiCodeBoxLine,
  },
  {
    phase: '24-36 hour',
    title: 'Testing, feedback, and iteration',
    description: 'Teams test the idea, collect fast feedback, improve the product, and decide what needs to change before the final stretch.',
    icon: RiLoopRightLine,
  },
  {
    phase: '36-48 hour',
    title: 'Demo, next steps, and team decision',
    description: 'The table prepares a simple demo, names the next milestones, and decides whether the team should keep building together.',
    icon: RiRocket2Line,
  },
];

const sprintMetricReviews = [
  {
    src: 'https://alignui.com/images/blocks/icon-google.svg',
    alt: 'Google',
    rating: '4.6',
    name: 'Google',
  },
  {
    src: 'https://alignui.com/images/blocks/icon-trustpilot.svg',
    alt: 'Trustpilot',
    rating: '4.9',
    name: 'Trustpilot',
  },
  {
    src: 'https://alignui.com/images/blocks/icon-tripAdvisor.svg',
    alt: 'G2',
    rating: '4.3',
    name: 'G2',
  },
];

const stepsData = [
  {
    id: 'step1',
    number: '01',
    subtitle: 'Create your account',
    description: 'Sign up in minutes and connect your bank or cards.',
    colorClass: 'text-information-base',
    zIndex: 'z-3',
    roundedClass: 'rounded-t-20 rounded-b-xl lg:rounded-l-3xl lg:rounded-r-xl',
    hasArrow: true,
  },
  {
    id: 'step2',
    number: '02',
    subtitle: 'Automate your money',
    description: 'Set savings rules, schedule bills, and track spending.',
    colorClass: 'text-success-base',
    zIndex: 'z-2',
    roundedClass: 'lg:rounded-xl',
    hasArrow: true,
  },
  {
    id: 'step3',
    number: '03',
    subtitle: 'See your finances grow',
    description: 'Watch your money stay organized and grow over time.',
    colorClass: 'text-feature-base',
    zIndex: 'z-1',
    roundedClass: 'rounded-b-20 rounded-t-xl lg:rounded-r-3xl lg:rounded-l-xl',
    hasArrow: false,
  },
];

const shipdayStepsData = [
  {
    id: 'step1',
    number: '01',
    subtitle: 'Join the sprint',
    description: 'Pick your city, select your role, and confirm your seat.',
    colorClass: 'text-information-base',
    zIndex: 'z-3',
    hasArrow: true,
  },
  {
    id: 'step2',
    number: '02',
    subtitle: 'Meet your team',
    description: 'We match you with 3 strangers. Cafe address arrives before the weekend.',
    colorClass: 'text-success-base',
    zIndex: 'z-2',
    hasArrow: true,
  },
  {
    id: 'step3',
    number: '03',
    subtitle: 'Ship something real',
    description: '48 hours. One product. AI score and investor match at the end.',
    colorClass: 'text-feature-base',
    zIndex: 'z-1',
    hasArrow: false,
  },
];

const tallinnDropStepsData = [
  {
    id: 'step1',
    number: '01',
    subtitle: 'Tell us your city & skills',
    description: 'Share your city and what you bring to the table - code, design, growth, ops, whatever it is.',
    colorClass: 'text-information-base',
    zIndex: 'z-3',
    hasArrow: true,
  },
  {
    id: 'step2',
    number: '02',
    subtitle: 'We build your table',
    description: 'Matching, planning, the room - all handled. You get sat with the right people for your weekend.',
    colorClass: 'text-success-base',
    zIndex: 'z-2',
    hasArrow: true,
  },
  {
    id: 'step3',
    number: '03',
    subtitle: 'Your weekend comes alive',
    description: 'Real founders, real conversations, real momentum. Not a networking event. A working weekend.',
    colorClass: 'text-feature-base',
    zIndex: 'z-1',
    hasArrow: false,
  },
];

const sprintEvents = [
  {
    id: 'tallinn',
    value: 'Jun 15-16',
    city: 'Tallinn Sprint',
    dateRange: 'June 15-16, 2025',
    spots: '4 spots left',
    address: 'Cafe address sent before sprint',
    sector: 'B2B SaaS',
    expertise: 'Developer + Product',
    description:
      'A focused weekend for solo founders who want a matched team, a clear scope, and a working product.',
  },
  {
    id: 'helsinki',
    value: 'Jun 22-23',
    city: 'Helsinki Sprint',
    dateRange: 'June 22-23, 2025',
    spots: '2 spots left',
    address: 'Central Helsinki cafe, details after match',
    sector: 'AI / Automation',
    expertise: 'Design + Engineering',
    description:
      'Build with a small cross-functional team in the city where Nordic founder energy meets deep technical craft.',
  },
  {
    id: 'vienna',
    value: 'Jul 6-7',
    city: 'Vienna Sprint',
    dateRange: 'July 6-7, 2025',
    spots: '6 spots left',
    address: 'Inner Stadt workspace cafe, confirmed by email',
    sector: 'Climate / Sustainability',
    expertise: 'Marketing + Product',
    description:
      'A compact sprint for founders who want customer clarity, launch momentum, and a team they can actually build with.',
  },
];

const shipdaySprintEvents = [
  {
    id: 'tallinn',
    value: 'Jun 15-16',
    city: 'Tallinn Sprint',
    dateRange: 'June 15-16, 2025',
    spots: '4 spots left',
    address: 'Address sent before sprint',
    sector: 'B2B SaaS',
    expertise: 'Product Build',
    description:
      'A focused weekend for solo founders who want a matched team, a clear scope, and a working product.',
  },
  {
    id: 'helsinki',
    value: 'Jun 22-23',
    city: 'Tallinn Sprint',
    dateRange: 'June 22-23, 2025',
    spots: '2 spots left',
    address: 'Tallinn cafe, details after match',
    sector: 'Mobile App',
    expertise: 'Design Sprint',
    description:
      'Build with a small cross-functional team in Tallinn, with a sharper focus on mobile-first product ideas.',
  },
  {
    id: 'vienna',
    value: 'Jul 6-7',
    city: 'Tallinn Sprint',
    dateRange: 'July 6-7, 2025',
    spots: '6 spots left',
    address: 'Tallinn workspace cafe, confirmed by email',
    sector: 'AI Tools',
    expertise: 'Go-to-Market',
    description:
      'A compact Tallinn sprint for founders who want customer clarity, launch momentum, and a team they can actually build with.',
  },
];

const tallinnDropEvents = [
  {
    id: 'tallinn-tech',
    value: '10-12 July',
    city: 'Founder Table',
    dateRange: '10-12 July',
    spots: '4 seats left',
    address: 'Sent before the weekend',
    sector: 'Tech & Product',
    expertise: 'Cofounder Match',
    description:
      'A focused weekend for builders who want real co-founder chemistry, not another intro call.',
  },
  {
    id: 'tallinn-design',
    value: '17 - 19 July',
    city: 'Founder Table',
    dateRange: '17 - 19 July',
    spots: '2 seats left',
    address: 'City cafe, details after matching',
    sector: 'Design & Creative',
    expertise: 'Skill-Swap Table',
    description:
      'A design-focused table for founders who want hands-on collaboration, fast feedback, and clear roles.',
  },
  {
    id: 'tallinn-ai',
    value: '24 - 26 July',
    city: 'Founder Table',
    dateRange: '24 - 26 July',
    spots: '6 seats left',
    address: 'Workspace cafe, confirmed by email',
    sector: 'AI & Dev Tools',
    expertise: 'Weekend Build',
    description:
      'A compact founder weekend for people who want momentum, real feedback, and a table full of the right people.',
  },
];

const sprintFaqSections = [
  {
    id: 'matching',
    title: 'Matching',
    eyebrow: '01',
    description: 'How strangers become a balanced four-person team.',
    items: [
      {
        id: 'matching-1',
        question: 'Do I need an idea before joining?',
        answer:
          'No. Bring your own idea or pick one from the sprint idea pool. The goal is to build with the right people, not arrive with a perfect plan.',
      },
      {
        id: 'matching-2',
        question: 'How do you match the team?',
        answer:
          'We match four complementary roles: developer, designer, product, and marketing. The mix is designed so every sprint can move from idea to working product.',
      },
      {
        id: 'matching-3',
        question: 'Can solo founders join?',
        answer:
          'Yes. Solo founders are exactly who this is for. You show up alone and leave with a team you actually built something with.',
      },
    ],
  },
  {
    id: 'sprint',
    title: 'Sprint weekend',
    eyebrow: '02',
    description: 'What happens before, during, and around the cafe build.',
    items: [
      {
        id: 'sprint-1',
        question: 'What should I bring?',
        answer:
          'Bring your laptop, charger, and 48 hours of focus. We handle the matching, structure, cafe location, and sprint flow.',
      },
      {
        id: 'sprint-2',
        question: 'Where does the sprint happen?',
        answer:
          'The cafe address is shared after your seat is confirmed. We keep the group small so the space feels focused, social, and easy to build in.',
      },
      {
        id: 'sprint-3',
        question: 'What happens if someone does not show up?',
        answer:
          'We keep backup matching options for each city. You will not be left without a team because one person cancels.',
      },
    ],
  },
  {
    id: 'outcome',
    title: 'Outcome',
    eyebrow: '03',
    description: 'What you should expect to leave with after 48 hours.',
    items: [
      {
        id: 'outcome-1',
        question: 'What do we walk away with?',
        answer:
          'A working product, an AI project score, a matched investor shortlist, and a sharper sense of whether the team should keep building.',
      },
      {
        id: 'outcome-2',
        question: 'Is this beginner friendly?',
        answer:
          'Yes. Experience helps, but complementary skills and real momentum matter more. The format is built to help mixed-level teams move fast.',
      },
    ],
  },
];

const shipdayFaqSections = [
  {
    id: 'matching',
    title: 'Matching',
    eyebrow: '01',
    description: 'How we turn solo builders into a balanced sprint team.',
    items: [
      {
        id: 'matching-1',
        question: 'Do I need an idea before joining?',
        answer: 'No. Pick one from our idea pool or bring your own.',
      },
      {
        id: 'matching-2',
        question: 'How do you match the team?',
        answer:
          'By role, sector preference, and availability. Every team has a developer, designer, product manager, and marketer.',
      },
      {
        id: 'matching-3',
        question: 'Can solo founders join?',
        answer: "Yes. That's exactly who this is built for.",
      },
    ],
  },
  {
    id: 'sprint',
    title: 'Sprint Weekend',
    eyebrow: '02',
    description: 'What to expect before you walk into the cafe.',
    items: [
      {
        id: 'sprint-1',
        question: 'What should I bring?',
        answer: 'Your laptop, a charger, and 48 hours of focus.',
      },
      {
        id: 'sprint-2',
        question: 'Where does the sprint happen?',
        answer: 'A curated cafe in Tallinn. Full address sent after matching.',
      },
      {
        id: 'sprint-3',
        question: "What happens if someone doesn't show up?",
        answer: "We have a backup matching system. You won't be left without a team.",
      },
    ],
  },
  {
    id: 'outcome',
    title: 'Outcome',
    eyebrow: '03',
    description: 'What you should have in hand after the weekend.',
    items: [
      {
        id: 'outcome-1',
        question: 'What do we walk away with?',
        answer: 'A working product, an AI project score, and a matched investor list.',
      },
      {
        id: 'outcome-2',
        question: 'Is this beginner friendly?',
        answer: 'Yes. Complementary skills matter more than experience level.',
      },
    ],
  },
];

const tallinnDropFaqSections = [
  {
    id: 'format',
    title: 'Format',
    eyebrow: '01',
    description: 'How we turn solo builders into a founder table with real momentum.',
    items: [
      {
        id: 'format-1',
        question: 'Do I need an idea before booking?',
        answer:
          'No. Bring an idea, pick from the pool, or show up with a skill you want to test with the right people.',
      },
      {
        id: 'format-2',
        question: 'How do you decide which table fits me?',
        answer:
          'We match your city, skillset, goals, and availability so the table has complementary founder energy.',
      },
      {
        id: 'format-3',
        question: 'Can I join without a co-founder yet?',
        answer:
          'Yes. StartDay is built for people who are still looking for the right person to build with.',
      },
    ],
  },
  {
    id: 'drop-day',
    title: 'Table Weekend',
    eyebrow: '02',
    description: 'What to expect when you walk into the cafe.',
    items: [
      {
        id: 'drop-day-1',
        question: 'What should we bring?',
        answer:
          'Bring your laptop, charger, and a bias toward building. We handle the matching, table flow, and weekend structure.',
      },
      {
        id: 'drop-day-2',
        question: 'Where does the table happen?',
        answer:
          'In a curated city cafe matched to the table format. The exact location is confirmed after matching.',
      },
      {
        id: 'drop-day-3',
        question: 'What happens if someone cancels?',
        answer:
          'We keep backup matching options for each city so the table still feels balanced and useful.',
      },
    ],
  },
  {
    id: 'outcome',
    title: 'Outcome',
    eyebrow: '03',
    description: 'What you should have after the weekend.',
    items: [
      {
        id: 'outcome-1',
        question: 'What do we walk away with?',
        answer:
          'Real conversations, proof of how you work together, table-level feedback, and a clearer read on who you should keep building with.',
      },
      {
        id: 'outcome-2',
        question: 'Is this suited for first-time founders?',
        answer:
          'Yes. It is especially useful when you want a lower-pressure way to test the founder path with real people.',
      },
    ],
  },
];

function ListDotIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z"
        className="fill-[var(--primary-base)]"
      />
    </svg>
  );
}

function StarsRow({ rating = '4.7/5', count = '137' }: { rating?: string; count?: string }) {
  return (
    <div className="mt-2 flex items-center gap-2 text-[0.98rem]">
      <div className="flex items-center gap-0.5 leading-none text-[#f97316]" aria-label="5 stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <span className="font-semibold leading-none text-[var(--text-strong-950)]">{rating}</span>
      <span className="leading-none text-[var(--text-soft-400)]">({count})</span>
    </div>
  );
}

type DropScheduleVariant =
  | 'default'
  | 'tallinn2026'
  | 'helsinki2026'
  | 'copenhagen2026'
  | 'stockholm2026'
  | 'berlin2026'
  | 'paris2026'
  | 'vienna2026'
  | 'istanbul2026';

type DropSelection = {
  city: string;
  dateRange: string;
  spots: string;
  sector: string;
  expertise: string;
};

const dropScheduleDates: Partial<
  Record<DropScheduleVariant, { value: string; dateRange: string; leadDate: string }[]>
> = {
  tallinn2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  helsinki2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  copenhagen2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  stockholm2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  berlin2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  paris2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  vienna2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
  istanbul2026: [
    { value: '24-26 July', dateRange: '24-26 July', leadDate: '24-26 July' },
    { value: '31 July - 2 August', dateRange: '31 July - 2 August', leadDate: '31 July - 2 August' },
    { value: '7 - 9 August', dateRange: '7 - 9 August', leadDate: '7 - 9 August' },
  ],
};

function DropClaimModal({
  drop,
  onClose,
}: {
  drop: DropSelection;
  onClose: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState(drop.dateRange);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const submitClaim = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const answers = [
      { question: 'City', answer: drop.city },
      { question: 'Selected date', answer: selectedDate },
      { question: 'Full name', answer: fullName },
      { question: 'Email', answer: email },
      { question: 'Role', answer: role },
    ];

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formType: 'Founder table booking',
          city: drop.city,
          selectedTable: {
            dateRange: selectedDate,
            spots: drop.spots,
            sector: drop.sector,
            expertise: drop.expertise,
          },
          answers,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit booking');
      }

      window.location.href = stripeCheckoutUrl;
    } catch (error) {
      console.error('drop claim submit error', error);
      setSubmitError('Could not send the request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/50 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-[460px] rounded-[28px] border border-white/50 bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.24)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[var(--primary-base)]">
              1 seat added
            </div>
            <h3 className="mt-2 text-[1.7rem] font-semibold leading-none tracking-[-0.025em] text-[#111827]">
              {drop.city}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-6 text-[#667085]">
              Choose your date, add your details, and we will review your fit for this city table.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#667085] transition hover:bg-[#f9fafb]"
            aria-label="Close"
          >
            <RiCloseLine className="size-5" />
          </button>
        </div>

        <form
          className="mt-6 grid gap-4"
          onSubmit={submitClaim}
        >
          <label className="block">
            <span className="mb-2 block text-[0.9rem] font-semibold text-[#111827]">City</span>
            <input
              readOnly
              type="text"
              value={drop.city}
              className="h-[54px] w-full rounded-[16px] border border-[#e7e3db] bg-[#fffaf5] px-4 text-[1rem] font-semibold text-[#111827] outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.9rem] font-semibold text-[#111827]">Date</span>
            <input
              required
              type="text"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              placeholder="e.g. 24-26 July"
              className="h-[54px] w-full rounded-[16px] border border-[#e7e3db] bg-white px-4 text-[1rem] text-[#111827] outline-none placeholder:text-[#b6a99f] focus:border-[#ffb180]"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.9rem] font-semibold text-[#111827]">Full name</span>
            <input
              required
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your name"
              className="h-[54px] w-full rounded-[16px] border border-[#e7e3db] bg-white px-4 text-[1rem] text-[#111827] outline-none placeholder:text-[#b6a99f] focus:border-[#ffb180]"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.9rem] font-semibold text-[#111827]">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-[54px] w-full rounded-[16px] border border-[#e7e3db] bg-white px-4 text-[1rem] text-[#111827] outline-none placeholder:text-[#b6a99f] focus:border-[#ffb180]"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.9rem] font-semibold text-[#111827]">Role</span>
            <input
              required
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="e.g. Developer, designer, growth, product"
              className="h-[54px] w-full rounded-[16px] border border-[#e7e3db] bg-white px-4 text-[1rem] text-[#111827] outline-none placeholder:text-[#b6a99f] focus:border-[#ffb180]"
            />
          </label>
          {submitError ? (
            <div className="rounded-[14px] bg-[#fff1f1] px-4 py-3 text-[0.9rem] font-medium text-[#b42318]">
              {submitError}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex h-[54px] w-full items-center justify-center rounded-[16px] bg-[var(--primary-base)] text-[1rem] font-semibold text-white transition hover:brightness-95"
          >
            {isSubmitting ? 'Sending...' : 'Claim this seat'}
          </button>
        </form>
      </div>
    </div>
  );
}

function StickyBuyCard({
  variant = 'default',
  contentVariant = 'default',
  sprintCity = 'Tallinn',
  scheduleVariant = 'default',
  spotAdded = false,
}: {
  variant?: 'default' | 'sprint';
  contentVariant?: 'default' | 'shipday' | 'tallinnDrop';
  sprintCity?: string;
  scheduleVariant?: DropScheduleVariant;
  spotAdded?: boolean;
}) {
  if (variant === 'sprint') {
    const isDrop = contentVariant === 'tallinnDrop';
    const leadDate = dropScheduleDates[scheduleVariant]?.[0].leadDate ?? 'June 15-16';

    return (
      <div className="w-full lg:w-[340px]">
        <div className="overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_94%_52%,rgba(178,28,185,0.86),transparent_33%),radial-gradient(circle_at_12%_10%,rgba(255,207,0,0.98),transparent_42%),linear-gradient(145deg,#ffb703_0%,#ff5b35_46%,#ff8a00_100%)] shadow-[0_24px_54px_rgba(255,91,53,0.20)]">
          <div className="px-6 pb-4 pt-6 text-left">
            <div className="text-[2.65rem] font-semibold leading-none tracking-[-0.025em] text-white">
              {sprintCity}
            </div>
            <div className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white/75">
              {isDrop ? `Founder table - ${leadDate}` : `Sprint - ${leadDate}`}
            </div>
            <div className="hidden">
              AI Agent · Kit #09
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 pb-6 pt-2">
            <div>
              <h5 className="text-[1.05rem] font-bold text-white">
                {isDrop ? 'Founding Table' : 'Founding Sprint'}
              </h5>
              {isDrop && spotAdded ? (
                <div className="mt-3 w-fit rounded-full bg-white px-3 py-1 text-[0.82rem] font-bold text-[#111827]">
                  1 seat added
                </div>
              ) : null}
              <p className="mt-2 text-[0.94rem] leading-6 text-white/80">
                {isDrop
                  ? 'Meet your matched founder table at a curated cafe, build trust, and find real momentum by Sunday.'
                  : 'Meet your team at a curated cafe, build something real, and ship it by Sunday.'}
              </p>
            </div>

            {!isDrop ? (
              <div className="flex items-end gap-2">
              <span className="text-[2.85rem] font-semibold leading-none tracking-[-0.025em] text-white">
                {isDrop ? '€2,400' : '€20'}
              </span>
              <span className="pb-1 text-[1rem] text-white/80">{isDrop ? '/table' : '/seat'}</span>
              </div>
            ) : null}

            <ul className="flex flex-col gap-3">
              {(isDrop
                ? ['Matched founder table', '2-day weekend sprint', 'Skill-balanced seats']
                : ['4 people, complementary skills', '48 hours, one product', 'AI score + investor match']
              ).map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.94rem] font-semibold text-white/90">
                  <RiCheckboxCircleFill className="size-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>

            <Button.Root
              asChild
              variant="neutral"
              mode="filled"
              size="medium"
              className="mt-1 h-[58px] w-full cursor-pointer gap-2 rounded-[14px] bg-white text-[1rem] font-bold text-[#111827] hover:bg-white/95"
            >
              <Link href="/find-your-team">
                {isDrop ? 'Claim your seat' : 'Claim your seat'}
                <Button.Icon as={RiArrowRightSLine} className="size-5 text-[#111827]" />
              </Link>
            </Button.Root>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[340px]">
      <div className="overflow-hidden rounded-[28px] border border-[#e8e0d4] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="bg-[#16112b] px-6 py-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-[18px] bg-[linear-gradient(145deg,#262145_0%,#121022_100%)] text-[1.7rem]">
            🤖
          </div>
          <div className="mt-3 text-[2rem] font-semibold tracking-[-0.025em] text-white">Kleo</div>
          <div className="text-[0.9rem] font-medium uppercase tracking-[0.08em] text-[#9b8fe4]">
            AI Agent · Kit #09
          </div>
        </div>

        <div className="space-y-6 p-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[1rem] font-semibold text-[var(--text-strong-950)]">Team plan</h5>
            <p className="text-[0.95rem] leading-6 text-[var(--text-sub-600)]">
              For founders who want the full validated startup kit, launch assets,
              and execution guidance in one purchase.
            </p>
          </div>

          <div className="relative flex items-end gap-2 before:absolute before:-left-6 before:top-1/2 before:h-full before:w-0.5 before:-translate-y-1/2 before:bg-[var(--primary-base)]">
            <span className="text-[3rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)]">
              $980
            </span>
            <span className="pb-1 text-[1rem] text-[var(--text-sub-600)]">/mo</span>
          </div>

          <ul className="space-y-3 border-t border-[#eee7dc] pt-5">
            {guaranteeList.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.96rem] text-[var(--text-sub-600)]">
                <ListDotIcon />
                {item}
              </li>
            ))}
          </ul>

          <Button.Root
            variant="primary"
            mode="filled"
            size="medium"
            className="h-12 w-full gap-2 rounded-[14px] text-[1rem]"
          >
            Contact us
            <Button.Icon as={RiArrowRightUpLongLine} className="size-5 text-white" />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}

function MobileDropBookingCard({
  sprintCity,
  scheduleVariant,
  spotAdded,
  onClaim,
}: {
  sprintCity: string;
  scheduleVariant: DropScheduleVariant;
  spotAdded: boolean;
  onClaim: () => void;
}) {
  const leadDate = dropScheduleDates[scheduleVariant]?.[0].leadDate ?? 'July 2026';

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
      <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,#ffbf00_0%,#ff6724_58%,#ff8a00_100%)] p-4 text-white shadow-[0_24px_60px_rgba(255,91,53,0.28)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white/82">
              Next table - {leadDate}
            </div>
            <div className="mt-1 text-[1.35rem] font-semibold leading-tight tracking-[-0.025em]">
              Claim your seat
            </div>
          </div>
          {spotAdded ? (
            <div className="rounded-full bg-white px-3 py-1 text-[0.78rem] font-bold text-[#111827]">
              1 seat added
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onClaim}
          className="mt-4 flex h-13 w-full items-center justify-center gap-2 rounded-[15px] bg-white text-[1rem] font-semibold text-[#16112b] shadow-[0_16px_32px_rgba(22,17,43,0.12)]"
        >
          Book this seat
          <RiArrowRightSLine className="size-5" />
        </button>
      </div>
    </div>
  );
}

function OverviewContent({
  contentVariant = 'default',
  sprintCity = 'Tallinn',
  scheduleVariant = 'default',
  onDropSelected,
}: {
  contentVariant?: 'default' | 'shipday' | 'tallinnDrop';
  sprintCity?: string;
  scheduleVariant?: DropScheduleVariant;
  onDropSelected?: (drop: DropSelection) => void;
}) {
  const isShipday = contentVariant === 'shipday';
  const isDrop = contentVariant === 'tallinnDrop';
  const dropEventDates = dropScheduleDates[scheduleVariant] ?? null;
  const activeSteps = isDrop ? tallinnDropStepsData : isShipday ? shipdayStepsData : stepsData;
  const activeInsideItems = isDrop ? dropInsideItems : sprintInsideItems;
  const activeSprintEvents = isDrop
    ? tallinnDropEvents.map((event, index) => ({
        ...event,
        value: dropEventDates?.[index]?.value ?? event.value,
        city: `${sprintCity} Founder Table`,
        dateRange: dropEventDates?.[index]?.dateRange ?? event.dateRange,
        address: event.address.replaceAll('Tallinn', sprintCity),
        description: event.description.replaceAll('Tallinn', sprintCity),
      }))
    : isShipday
    ? shipdaySprintEvents.map((event) => ({
        ...event,
        city: `${sprintCity} Sprint`,
        address: event.address.replaceAll('Tallinn', sprintCity),
        description: event.description.replaceAll('Tallinn', sprintCity),
      }))
    : sprintEvents;
  const activeFaqSections = isDrop ? tallinnDropFaqSections : isShipday ? shipdayFaqSections : sprintFaqSections;
  const [selectedSprintId, setSelectedSprintId] = useState(activeSprintEvents[0].id);

  const selectSprintEvent = (event: (typeof activeSprintEvents)[number]) => {
    setSelectedSprintId(event.id);

    if (isDrop) {
      onDropSelected?.({
        city: event.city,
        dateRange: event.dateRange,
        spots: event.spots,
        sector: event.sector,
        expertise: event.expertise,
      });
    }
  };

  return (
    <div className="space-y-4">
      <section className="py-2 sm:py-3">
        <div className="mb-4 sm:mb-5">
          <div className="text-[1.45rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
            {isDrop ? "What's inside the table" : "What's inside the kit"}
          </div>
          <p className="mt-1 text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
            {isDrop
              ? 'A quick look at the matching, roles, and weekend experience this table is built around.'
              : 'A quick look at the companies, patterns, and launch references this kit is built around.'}
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-[#e8e0d4] bg-white">
          <div className="grid grid-cols-3">
            {activeInsideItems.map((item, index) => {
              const isLastRow = index >= 6;
              const isRightColumn = index % 3 === 2;

              return (
                <div
                  key={item}
                  className={cn(
                    'flex min-h-[92px] items-center justify-center p-4 sm:min-h-[132px] sm:p-6',
                    !isLastRow && 'border-b border-[#e8e0d4]',
                    !isRightColumn && 'border-r border-[#e8e0d4]',
                  )}
                >
                  <span className="text-center text-[1.05rem] font-semibold tracking-[-0.025em] text-[var(--text-sub-600)] sm:text-[1.35rem]">
                    {item}
                  </span>
                </div>
              );
            })}
            <div className="flex min-h-[92px] items-center justify-center p-4 text-center sm:min-h-[132px] sm:p-6">
              <span className="text-[0.95rem] font-medium text-[var(--text-soft-400)] sm:text-[1rem]">
                {isDrop ? '...and more' : '... and more'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3">
        <div className="mb-5">
          <div className="flex h-7 w-fit items-center gap-2 rounded-[9px] bg-[#fcfaf6] px-2.5 text-[0.88rem] font-medium text-[var(--text-sub-600)]">
            <span className="size-1.5 rounded-full bg-[var(--primary-base)]" />
            {isDrop || isShipday ? 'Stats & Metrics' : 'Stats & Metric'}
          </div>
          <div className="mt-4 text-[1.45rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
            {isDrop
              ? 'Trusted by builders across Europe'
              : isShipday
              ? 'Trusted by builders across Europe'
              : 'Trusted by leading finance teams worldwide'}
          </div>
          <p className="mt-1 max-w-[620px] text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
            {isDrop
              ? 'The fastest way to sit down with the right founder table - across the cities builders already are.'
              : isShipday
              ? 'The fastest way to find your team, build your idea, and ship it - all in one weekend.'
              : 'Thousands of finance professionals streamline their workflows every day.'}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {(isDrop
            ? [
                ['2,400+', 'Builders'],
                ['10', 'Cities'],
              ]
            : isShipday
            ? [
                ['1,000+', 'Builders'],
                ['12', 'Cities'],
              ]
            : [
                ['120+', 'countries'],
                ['$50B+', 'processed'],
                ['15M+', 'transactions'],
              ]
          ).map(([value, label]) => (
            <div key={label} className="rounded-[18px] border border-[#ece4d9] bg-[#fcfaf6] p-4">
              <div className="text-[1.35rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                {value}
              </div>
              <div className="mt-1 text-[0.92rem] text-[var(--text-sub-600)]">{label}</div>
            </div>
          ))}
        </div>

        {isDrop ? (
          <div className="mt-5">
            <div className="rounded-[18px] border border-[#ece4d9] bg-white px-5 py-5">
              <div className="text-[1.05rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                This is not a hackathon.
              </div>
              <p className="mt-2 max-w-[720px] text-[0.92rem] leading-6 text-[var(--text-sub-600)]">
                It is not another event that throws people into a room and hopes something happens. StartDay matches you with the right people in your city, brings the group together physically, gives the weekend a clear structure, and leaves the direction in your hands.
              </p>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {dropCafeExamples.map((item) => {
                const Icon = item.icon;

                return (
                <article
                  key={item.phase}
                  className="relative overflow-hidden rounded-[18px] border border-[#ece4d9] bg-white p-5"
                >
                  <div className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full border border-[#f3d24f] bg-[#ffe779] text-[#1d1d19] shadow-[0_10px_22px_rgba(255,197,34,0.22)]">
                    <Icon className="size-5" />
                  </div>
                  <div className="relative">
                    <div className="w-fit rounded-full bg-[#f5f0e8] px-3 py-1 text-[0.78rem] font-semibold tracking-[-0.025em] text-[#8a634d]">
                      {item.phase}
                    </div>
                    <div className="mt-5 text-[1rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                      {item.title}
                    </div>
                    <p className="mt-2 text-[0.88rem] leading-6 text-[var(--text-soft-400)]">
                      {item.description}
                    </p>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap gap-3 rounded-[18px] border border-[#ece4d9] bg-white p-4">
            {sprintMetricReviews.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <Image src={item.src} alt={item.alt} width={18} height={18} className="size-4.5" />
                <p className="text-[0.92rem] text-[var(--text-soft-400)]">
                  <span className="font-medium text-[var(--text-sub-600)]">{item.rating}</span> {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="py-2 sm:py-3">
        <div className="px-0 py-6 lg:py-8">
          <div className="mx-auto mb-10 flex w-full max-w-[808px] flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="flex max-w-[430px] flex-col gap-3">
              <div className="text-label-sm text-text-sub-600 bg-bg-weak-50 flex h-7 w-fit items-center rounded-[9px] px-2.5 normal-case">
                {isDrop || isShipday ? 'Steps' : 'Secure, simple and smart tools'}
              </div>
              <h3 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#020617] lg:text-[2.45rem]">
                {isDrop
                  ? 'From matching to founder momentum, all in one table.'
                  : isShipday
                  ? 'From signup to shipped, all in one weekend.'
                  : 'Set up and take control in just 3 steps'}
              </h3>
            </div>
            <div className="flex max-w-[260px] flex-col gap-6">
              <p className="text-[0.98rem] leading-6 text-[#334155]">
                {isDrop
                  ? 'Claim your seat and meet your founder table.'
                  : isShipday
                  ? 'Claim your spot and meet your team at the cafe.'
                  : 'Stay on schedule with smart, automated payments.'}
              </p>
              <a
                href="#"
                className="group flex h-auto cursor-pointer items-center justify-start gap-1 text-[0.95rem] font-medium text-[#020617] no-underline transition-all duration-300 hover:text-[#020617]"
              >
                {isDrop ? 'Claim your seat' : isShipday ? 'Claim your spot' : 'Get started free'}
                <RiArrowRightUpLongLine className="size-4.5 text-[#9ca3af] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#020617]" />
              </a>
            </div>
          </div>
          <div className="mx-auto mb-7 grid w-full max-w-[880px] grid-cols-1 gap-3 md:grid-cols-2">
            {activeSteps.map((step) => (
              <div
                key={step.id}
                className={`relative flex min-h-[138px] w-full rounded-[24px] bg-[#f5f5f4] p-5 lg:min-h-[150px] lg:p-6 ${step.zIndex}`}
              >
                {step.hasArrow && (
                  <div className="absolute -bottom-4 left-1/2 z-10 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)] md:-right-5 md:top-1/2 md:-bottom-auto md:left-auto md:translate-x-0 md:-translate-y-1/2">
                    <RiArrowRightDoubleLine className="hidden size-5 text-[#9ca3af] md:block" />
                    <RiArrowDownDoubleLine className="block size-5 text-[#9ca3af] md:hidden" />
                  </div>
                )}
                <div className={`flex h-auto border-r border-[#e5e7eb] pr-5 text-[1.08rem] font-medium leading-none ${step.colorClass}`}>
                  {step.number}
                </div>
                <div className="flex flex-col gap-3 pl-5">
                  <div className="text-[0.86rem] font-medium text-[#9ca3af]">
                    {step.subtitle}
                  </div>
                  <div className="max-w-[22ch] text-[1rem] font-medium leading-6 tracking-[-0.025em] text-[#020617] lg:text-[1.08rem]">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center text-[0.9rem] font-medium text-[#9ca3af]">
            {isDrop
              ? 'From matching to founder momentum, all in one table.'
              : isShipday
              ? 'From signup to shipped, all in one weekend.'
              : 'From setup to success, all in minutes.'}
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3">
        <div className="flex flex-col items-start gap-4 lg:items-center">
          <div className="flex h-7 w-fit items-center gap-1.5 rounded-[9px] border border-[#e8e0d4] bg-[#fcfaf6] pr-2.5 pl-2 text-[0.86rem] font-medium text-[var(--text-sub-600)]">
            <RiStairsFill className="size-4 text-[var(--primary-base)]" />
            {isDrop ? 'Founder Table Calendar' : 'Sprint calendar'}
          </div>
          <div className="text-[2rem] font-semibold leading-tight tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-center lg:text-[2.65rem]">
            {isDrop ? 'Pick your next founder table.' : isShipday ? 'Pick your next founder weekend.' : 'Pick your next founder weekend'}
          </div>
          <p className="max-w-[560px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
            {isDrop
              ? 'Three upcoming city tables, each matched around founder goals and complementary skills.'
              : 'Three upcoming city sprints, each matched around sector focus and complementary expertise.'}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-5">
          {activeSprintEvents.map((event) => {
            const isSelected = selectedSprintId === event.id;

            return (
            <div
              key={event.id}
              role="button"
              tabIndex={0}
              onClick={() => selectSprintEvent(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') selectSprintEvent(event);
              }}
              className={cn(
                'cursor-pointer rounded-[22px] border p-4 transition-all duration-300 lg:p-5',
                isSelected
                  ? 'border-[var(--primary-base)] bg-white shadow-[0_18px_42px_rgba(51,92,255,0.12)]'
                  : 'border-[#ece4d9] bg-[#fcfaf6] hover:border-[#d8d0c4] hover:bg-white',
              )}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-7">
                <div className="flex min-w-[128px] flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-1">
                  <div className="text-[1.85rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)]">
                    {event.value}
                  </div>
                  <div
                    className={cn(
                      'rounded-full px-3 py-1 text-[0.8rem] font-semibold shadow-[0_8px_18px_rgba(15,23,42,0.05)]',
                      isSelected ? 'bg-[var(--primary-base)] text-white' : 'bg-white text-[var(--primary-base)]',
                    )}
                  >
                    {event.spots}
                  </div>
                </div>

                <div className="hidden h-20 w-px bg-[#e8e0d4] lg:block" />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[1.25rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-[1.45rem]">
                      {isDrop ? `${sprintCity} Founder Table` : event.city}
                    </h3>
                    <span className="rounded-full border border-[#e8e0d4] bg-white px-2.5 py-1 text-[0.78rem] font-medium text-[var(--text-sub-600)]">
                      {event.sector}
                    </span>
                    <span className="rounded-full border border-[#e8e0d4] bg-white px-2.5 py-1 text-[0.78rem] font-medium text-[var(--text-sub-600)]">
                      {event.expertise}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[620px] text-[0.95rem] leading-6 text-[var(--text-sub-600)]">
                    {event.description}
                  </p>
                  <div className="mt-4 grid gap-2 text-[0.88rem] font-medium text-[var(--text-soft-400)] sm:grid-cols-2">
                    <span>
                      <span className="text-[var(--text-sub-600)]">Date:</span> {event.dateRange}
                    </span>
                    <span>
                      <span className="text-[var(--text-sub-600)]">Address:</span> {event.address}
                    </span>
                  </div>
                </div>

                <Button.Root
                  variant="primary"
                  mode="filled"
                  size="xsmall"
                  className="h-11 w-full cursor-pointer gap-2 rounded-[999px] px-5 text-[0.92rem] font-semibold shadow-[0_14px_30px_rgba(51,92,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(51,92,255,0.28)] lg:w-fit"
                  onClick={(e) => {
                    e.stopPropagation();
                    selectSprintEvent(event);
                  }}
                >
                  {isDrop ? (isSelected ? 'Selected Table' : 'Join Table') : isSelected ? 'Selected Sprint' : 'Join Sprint'}
                  <Button.Icon as={RiArrowRightUpLongLine} className="size-4.5 text-static-white/[0.72]" />
                </Button.Root>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <section className="py-2 sm:py-3">
        <div className="flex w-full flex-col gap-7 lg:gap-8">
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="bg-bg-weak-50 text-label-sm text-text-sub-600 flex h-7 w-fit items-center rounded-[9px] px-2.5 normal-case">
                {isDrop ? 'Table FAQ' : 'Sprint FAQ'}
              </div>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
                {isDrop ? 'Questions before the table?' : 'Questions before the cafe?'}
              </h2>
            </div>
            <p className="max-w-[620px] text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
              {isDrop
                ? 'Everything you need to know before showing up, meeting your city, and joining your founder table.'
                : 'Everything you need to know before showing up, meeting your team, and building for the weekend.'}
            </p>
          </div>

          <div className="mx-[-8px] flex w-[calc(100%+16px)] flex-col gap-4 lg:mx-0 lg:w-full">
            {activeFaqSections.map((section) => (
              <div
                key={section.id}
                className="flex w-full flex-col gap-5 rounded-[24px] border border-[#ece4d9] bg-[#fcfaf6] p-5 lg:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--primary-base)]">
                      {section.eyebrow}
                    </div>
                    <div className="mt-1 text-[1.45rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                      {section.title}
                    </div>
                  </div>
                  <p className="max-w-[320px] text-[0.9rem] leading-6 text-[var(--text-soft-400)] sm:text-right">
                    {section.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {section.items.map((item, index) => (
                    <div key={item.id}>
                      {index > 0 ? <div className="mb-4 h-px w-full bg-[var(--stroke-soft-200)]" /> : null}
                      <details className="group">
                        <summary className="text-[1rem] font-semibold text-[var(--text-sub-600)] group-open:text-text-strong-950 flex w-full cursor-pointer list-none items-center gap-4 text-left transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                          <span className="flex-1">{item.question}</span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
                            <RiCloseLine className="size-5 rotate-45 text-text-soft-400 transition-transform duration-300 group-open:rotate-0 group-open:text-text-sub-600" />
                          </span>
                        </summary>
                        <div className="max-w-[680px] pt-3 text-[0.95rem] leading-7 text-[var(--text-sub-600)] lg:pt-4">
                          {item.answer}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-label-sm lg:text-label-md text-text-soft-400 w-full">
            <span>Looking for something else?</span>{' '}
            <a
              href={isDrop ? 'mailto:hello@startday.co' : 'mailto:hello@hangivize.com'}
              className="text-text-sub-600 transition-colors hover:text-text-strong-950"
            >
              {isDrop ? 'hello@startday.co' : isShipday ? 'hello@shipday.work' : 'hello@hangivize.com'}
            </a>
          </p>
        </div>
      </section>

      {!isDrop ? (
      <section className="py-2 sm:py-3">
        <div className="flex flex-col gap-6 border-t border-[#e8e0d4] pt-8 lg:flex-row lg:items-center lg:gap-8">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 shrink-0 text-[var(--primary-base)] lg:size-16"
            aria-hidden="true"
          >
            <path d="M32 21.3333L22.9333 16V5.33333L32 0L41.0667 5.33333V16L32 21.3333Z" className="fill-current" />
            <path d="M50.1333 32L41.0667 26.6667V16L50.1333 10.6667L59.2 16V26.6667L50.1333 32Z" className="fill-current" />
            <path d="M41.0667 48V37.3333L50.1333 32L59.2 37.3333V48L50.1333 53.3333L41.0667 48Z" className="fill-current" />
            <path d="M22.9333 48L32 42.6667L41.0667 48V58.6667L32 64L22.9333 58.6667V48Z" className="fill-current" />
            <path d="M13.8667 32L22.9333 37.3333V48L13.8667 53.3333L4.79999 48V37.3333L13.8667 32Z" className="fill-current" />
            <path d="M13.8667 32L22.9333 26.6667V16L13.8667 10.6667L4.79999 16V26.6667L13.8667 32Z" className="fill-current" />
          </svg>
          <div className="flex flex-1 flex-col gap-2">
            <div className="text-[1.45rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
              {isDrop ? 'Ready to find your founder table?' : 'Ready to move your sprint forward?'}
            </div>
            <div className="max-w-[560px] text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
              {isDrop
                ? 'Turn a weekend with strangers into real conversations, real collaboration, and a co-founder match worth exploring.'
                : 'Turn a weekend with strangers into a working product, a clearer team, and a real next step.'}
            </div>
          </div>
          {isShipday && sprintCity === 'Helsinki' ? (
            <div className="hidden items-center gap-3 pr-2 lg:flex">
              <div className="-rotate-3 text-right font-['Segoe_Print','Comic_Sans_MS',cursive] text-[1rem] leading-5 text-[#431407]">
                <span className="block">pick your seat</span>
                <span className="text-[0.82rem] text-[#9a6a42]">on the card</span>
              </div>
              <svg
                width="98"
                height="54"
                viewBox="0 0 98 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-1 text-[#431407]"
                aria-hidden="true"
              >
                <path
                  d="M2 29C21 7 51 7 72 26C79 32 85 36 94 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="6 7"
                />
                <path
                  d="M82 25L95 35L81 44"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <Button.Root
              variant="primary"
              mode="filled"
              size="medium"
              className="h-11 w-fit cursor-pointer gap-2 rounded-[999px] px-5 text-[0.92rem] font-semibold shadow-[0_14px_30px_rgba(51,92,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(51,92,255,0.28)]"
            >
              {isDrop ? 'pick your seat' : isShipday ? 'Claim Your Spot' : 'Claim your spot'}
              <Button.Icon as={RiArrowRightUpLongLine} className="size-4.5 text-static-white/[0.72]" />
            </Button.Root>
          )}
        </div>
      </section>
      ) : null}
    </div>
  );
}

function SectionsContent() {
  return (
    <section className="rounded-[24px] border border-[#e8e0d4] bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.04)]">
      <div className="text-[1.75rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
        18 kit sections
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={section}
            className="flex items-start gap-3 rounded-[16px] border border-[#ece4d9] bg-[#fcfaf6] px-4 py-3"
          >
            <div className="pt-0.5 text-[0.92rem] font-semibold text-[var(--primary-base)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="text-[0.98rem] leading-6 text-[var(--text-sub-600)]">{section}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BundleContent() {
  return (
    <section className="rounded-[28px] bg-[#f8f6f2] p-2.5">
      <div className="flex w-full flex-col gap-2.5 rounded-[28px] bg-[#f4efe8] p-2.5 lg:flex-row lg:rounded-[36px]">
        <div className="flex w-full flex-col rounded-[24px] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)] lg:w-[58%] lg:rounded-[28px] lg:p-8">
          <div className="mb-4 inline-flex h-6 w-fit items-center rounded-[8px] bg-[#f5f1ea] px-2.5 text-[0.74rem] font-medium text-[var(--text-sub-600)]">
            Bundle pricing
          </div>
          <h3 className="text-[1.4rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-[1.75rem]">
            Two kits. One clearer launch path.
          </h3>
          <p className="mt-2 text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
            Buy Kleo and Signal together to cover idea validation, GTM framing,
            and launch assets in one discounted package.
          </p>

          <div className="my-7 rounded-[20px] border border-[#ece4d9] bg-[#fcfaf6] p-5 lg:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-[14px] bg-[#16112b] text-xl text-white">
                  🤖
                </div>
                <div>
                  <div className="text-[1rem] font-semibold text-[var(--text-strong-950)]">Kleo Kit</div>
                  <div className="text-[0.92rem] text-[var(--text-soft-400)]">$299 standalone</div>
                </div>
              </div>

              <div className="hidden text-[1.25rem] font-semibold text-[var(--text-soft-400)] sm:block">+</div>

              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-[14px] bg-[linear-gradient(145deg,#4338ca_0%,#1d4ed8_100%)] text-xl text-white">
                  ✦
                </div>
                <div>
                  <div className="text-[1rem] font-semibold text-[var(--text-strong-950)]">Signal Kit</div>
                  <div className="text-[0.92rem] text-[var(--text-soft-400)]">$299 standalone</div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[16px] border border-[#ece4d9] bg-white px-4 py-3">
                <div className="text-[0.8rem] uppercase tracking-[0.08em] text-[var(--text-soft-400)]">Total value</div>
                <div className="mt-2 text-[1.75rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                  $598
                </div>
              </div>
              <div className="rounded-[16px] border border-[#ece4d9] bg-white px-4 py-3">
                <div className="text-[0.8rem] uppercase tracking-[0.08em] text-[var(--text-soft-400)]">Bundle price</div>
                <div className="mt-2 text-[1.75rem] font-semibold tracking-[-0.025em] text-[var(--primary-base)]">
                  $349
                </div>
              </div>
              <div className="rounded-[16px] border border-[#ece4d9] bg-white px-4 py-3">
                <div className="text-[0.8rem] uppercase tracking-[0.08em] text-[var(--text-soft-400)]">You save</div>
                <div className="mt-2 text-[1.75rem] font-semibold tracking-[-0.025em] text-[#10b981]">
                  $249
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#ece4d9] pt-6">
            <div className="mb-2 text-[1rem] font-medium text-[var(--text-strong-950)]">What the bundle unlocks</div>
            <div className="text-[0.94rem] text-[var(--text-sub-600)]">
              Validation, launch planning, positioning, and asset direction across two connected startup kits.
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Cross-kit strategy notes',
                'Shared competitor mapping',
                'Launch copy prompts',
                'Combined founder checklist',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[0.95rem] text-[var(--text-sub-600)]">
                  <ListDotIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-6 p-5.5 lg:gap-5 xl:gap-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-label-md text-text-strong-950">Bundle plan</h5>
            <p className="text-label-sm text-text-sub-600 font-medium">
              For founders who want two complementary startup kits in one discounted purchase.
            </p>
          </div>
          <div className="text-title-h2 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 flex items-center gap-2.5">
            $349 <span className="text-label-md text-text-sub-600">one-time</span>
          </div>
          <ul className="border-stroke-soft-200 flex flex-col gap-4 border-t pt-6 lg:gap-3 lg:pt-5 xl:gap-4 xl:pt-6">
            {bundleIncludes.map((item) => (
              <li key={item} className="text-label-sm text-text-sub-600 flex items-center gap-2.5">
                <ListDotIcon />
                {item}
              </li>
            ))}
          </ul>
          <Button.Root
            variant="primary"
            mode="filled"
            size="medium"
            className="shadow-complex-7 w-full gap-2 rounded-xl"
          >
            Buy bundle
            <Button.Icon
              as={RiArrowRightUpLongLine}
              className="text-static-white/[0.64] group-disabled:text-text-disabled-300 size-5"
            />
          </Button.Root>
        </div>
      </div>
    </section>
  );
}

export function KitMainPage({
  cardVariant = 'default',
  contentVariant = 'default',
  sprintCity = 'Tallinn',
  heroLayout = 'default',
  scheduleVariant = 'default',
  heroImage = '/kit-main-provekit-2-hero-v2.avif',
}: {
  cardVariant?: 'default' | 'sprint';
  contentVariant?: 'default' | 'shipday' | 'tallinnDrop';
  sprintCity?: string;
  heroLayout?: 'default' | 'overlay';
  scheduleVariant?: DropScheduleVariant;
  heroImage?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [claimedDrop, setClaimedDrop] = useState<DropSelection | null>(null);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const tabOrder = kitTabs.map((tab) => tab.id);
  const currentIndex = tabOrder.indexOf(activeTab);
  const showStickyCard = activeTab !== 'bundle';
  const useOverlayHero = cardVariant === 'sprint' && heroLayout === 'overlay';
  const isDrop = contentVariant === 'tallinnDrop';

  const content = useMemo(() => {
    if (activeTab === 'bundle') return <BundleContent />;
    if (activeTab === 'sections') return <SectionsContent />;
    return (
      <OverviewContent
        contentVariant={contentVariant}
        sprintCity={sprintCity}
        scheduleVariant={scheduleVariant}
        onDropSelected={(drop) => {
          setClaimedDrop(drop);
          setIsClaimModalOpen(true);
        }}
      />
    );
  }, [activeTab, contentVariant, sprintCity, scheduleVariant]);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setActiveTab(tabOrder[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex >= tabOrder.length - 1) return;
    setActiveTab(tabOrder[currentIndex + 1]);
  };

  const handleMobileDropClaim = () => {
    const leadDate = dropScheduleDates[scheduleVariant]?.[0];
    const drop =
      claimedDrop ??
      ({
        city: `${sprintCity} Founder Table`,
        dateRange: leadDate?.dateRange ?? 'July 2026',
        spots: '1 seat available',
        sector: 'Cofounder Match',
        expertise: 'Founding Table',
      } satisfies DropSelection);

    setClaimedDrop(drop);
    setIsClaimModalOpen(true);
  };

  return (
    <div className={cn('min-h-screen overflow-x-clip bg-[var(--bg-page)]', isDrop && 'pb-[330px] lg:pb-0')}>
      {isDrop ? (
        <div className="bg-[#fffbe8] px-4 py-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#1d1d19] bg-[#fffbe8] px-5 text-[0.95rem] font-black tracking-[-0.025em] text-[#1d1d19] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <RiArrowLeftSLine className="size-5" />
            Back
          </Link>
        </div>
      ) : (
        <Ex3Header />
      )}

      <section className="border-b border-[var(--stroke-soft-200)] bg-white">
        <div className="py-0">
          <div className="overflow-hidden border-y border-[#d7e7f2] bg-white">
            <div
              className={cn(
                'relative overflow-hidden bg-[linear-gradient(180deg,#d9f0ff_0%,#e5f5ff_58%,#f0f8ff_100%)]',
                cardVariant === 'sprint'
                  ? 'px-0 py-0'
                  : 'px-4 py-4 sm:px-6 sm:py-4 lg:px-7 lg:py-5',
              )}
            >
              <div className={cn(cardVariant === 'sprint' ? 'w-full' : 'mx-auto max-w-[1180px]')}>
                <div
                  className={cn(
                    'relative aspect-[5.12/1] w-full',
                    useOverlayHero
                      ? 'aspect-[3.84/1] min-h-[294px] sm:min-h-[374px] lg:min-h-[454px]'
                      : cardVariant === 'sprint'
                      ? 'min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]'
                      : 'min-h-[88px] sm:min-h-[112px] lg:min-h-[118px]',
                  )}
                >
                  {cardVariant === 'sprint' ? (
                    <Image
                      src={heroImage}
                      alt={`${sprintCity} ${isDrop ? 'founder table' : 'sprint'} hero`}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0">
                        <div className="absolute left-[-3%] top-[34%] h-28 w-28 rounded-full bg-white sm:h-40 sm:w-40" />
                        <div className="absolute left-[8%] bottom-[-4%] h-32 w-44 rounded-[999px] bg-white sm:h-44 sm:w-60" />
                        <div className="absolute right-[-2%] top-[18%] h-32 w-32 rounded-full bg-white sm:h-48 sm:w-48" />
                        <div className="absolute right-[5%] bottom-[-6%] h-32 w-44 rounded-[999px] bg-white sm:h-44 sm:w-60" />
                      </div>

                      <div className="absolute left-[12%] top-[12%] hidden rotate-[28deg] opacity-[0.08] lg:block">
                        <div className="flex gap-8">
                          <span className="block h-28 w-11 rounded-full bg-[#4297ff]" />
                          <span className="block h-44 w-11 rounded-full bg-[#4297ff]" />
                          <span className="block h-36 w-11 rounded-full bg-[#4297ff]" />
                        </div>
                      </div>
                    </>
                  )}

                  {useOverlayHero ? (
                    <div className="absolute bottom-5 left-4 z-10 w-[calc(100%-32px)] max-w-[430px] rounded-[28px] border border-white/50 bg-white/62 p-5 shadow-[0_22px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:bottom-7 sm:left-8 sm:p-6 lg:bottom-10 lg:left-[13%]">
                      <div className="text-[2rem] font-semibold leading-none tracking-[-0.025em] text-[#101828] sm:text-[2.45rem]">
                        {sprintCity} {isDrop ? 'Founder Table' : 'Sprint'}
                      </div>
                      <div className="mt-3 text-[0.98rem] text-[#475467]">
                        By <span className="font-medium text-[var(--primary-base)]">{isDrop ? 'StartDay' : 'Shipday'}</span>
                      </div>
                      <StarsRow rating={isDrop ? '4.8/5' : '4.7/5'} count={isDrop ? '94' : '137'} />
                    </div>
                  ) : null}

                  <div className={cn("relative z-10 ml-auto flex h-full max-w-[540px] items-center", cardVariant === 'sprint' && 'hidden')}>
                    <div>
                      <div className="text-[1.65rem] font-semibold leading-[0.9] tracking-[-0.025em] text-[#101828] sm:text-[2.2rem] lg:text-[3.1rem]">
                        <span className="text-[var(--primary-base)]">AI</span> that makes startup validation effortless
                      </div>
                      <p className="mt-3 max-w-[28ch] text-[0.92rem] leading-7 text-[#475467] sm:text-[0.98rem]">
                        KitChef helps founders move faster with structured startup kits built for clearer decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!useOverlayHero ? (
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-7">
              <div className="relative border-t border-[#eef2f6] bg-white px-0 py-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-5">
                    {cardVariant !== 'sprint' ? (
                      <div className="relative -mt-16 flex size-[116px] shrink-0 items-center justify-center rounded-[24px] border border-[#dfe8ef] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)] sm:-mt-18 lg:-mt-20">
                        <div className="flex size-[90px] items-center justify-center rounded-[20px] bg-black text-white">
                          <div className="flex rotate-[30deg] gap-3">
                            <span className="block h-12 w-4 rounded-full bg-white" />
                            <span className="block h-20 w-4 rounded-full bg-white" />
                            <span className="block h-12 w-4 rounded-full bg-white" />
                          </div>
                        </div>
                        <div className="absolute -right-2 -top-3 rounded-[10px] border border-[#111827] bg-white px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
                          <div className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
                            Spring 2026
                          </div>
                          <div className="mt-1 text-[1rem] font-semibold tracking-[-0.025em] text-[#101828]">
                            Leader
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="pb-1">
                      <div className="text-[2.5rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[3rem]">
                        {cardVariant === 'sprint' ? `${sprintCity} ${isDrop ? 'Founder Table' : 'Sprint'}` : 'Kleo'}
                      </div>
                      <div className="mt-3 text-[1.02rem] text-[var(--text-sub-600)]">
                        By <span className="font-medium text-[var(--primary-base)]">{cardVariant === 'sprint' ? (isDrop ? 'StartDay' : 'Shipday') : 'KitChef'}</span>
                      </div>
                      <StarsRow rating={isDrop ? '4.8/5' : '4.7/5'} count={isDrop ? '94' : '137'} />
                    </div>
                  </div>

                  {cardVariant !== 'sprint' ? (
                    <div className="pb-2 text-left sm:text-right">
                      <div className="text-[3rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[3.4rem]">
                        $299
                      </div>
                      <div className="mt-1 text-[1rem] text-[var(--text-sub-600)]">one-time</div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            ) : null}

            {cardVariant !== 'sprint' ? (
            <div className="mx-auto max-w-[1180px] bg-white px-4 pb-1 sm:px-6 lg:px-7">
              <div className="border-stroke-soft-200 relative mb-4 flex w-[calc(100%+32px)] overflow-hidden border-t border-b lg:hidden">
                <RiArrowLeftSLine
                  onClick={handlePrev}
                  className={`${currentIndex <= 0 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
                />
                <RiArrowRightSLine
                  onClick={handleNext}
                  className={`${currentIndex >= tabOrder.length - 1 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute right-4 top-1/2 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
                />
                <div
                  className="flex w-full flex-nowrap transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {kitTabs.map((tab) => (
                    <div
                      key={tab.id}
                      className="group/tab hover:bg-bg-white-0 hover:text-text-strong-950 flex w-full shrink-0 cursor-pointer items-center justify-center gap-1.5 px-13 py-4 shadow-none transition-all duration-300"
                      data-tab={tab.id}
                      data-active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <tab.icon className="text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300" />
                      <span className="text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300">
                        {tab.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-weak-50 mb-1 hidden w-fit gap-1 rounded-[96px] p-1 lg:flex">
                {kitTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="group/tab hover:bg-bg-white-0 hover:text-text-strong-950 data-[active=true]:bg-bg-white-0 data-[active=true]:shadow-custom-input-4 flex cursor-pointer items-center gap-1.5 rounded-[96px] px-3 py-2 shadow-none transition-all duration-300"
                    data-tab={tab.id}
                    data-active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300" />
                    <span className="text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300">
                      {tab.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-7">
              <div
                className={cn(
                  'mx-auto max-w-[1180px] lg:items-start',
                  showStickyCard
                    ? cn('grid lg:grid-cols-[minmax(0,1fr)_340px]', isDrop ? 'gap-8 lg:gap-10' : 'gap-6')
                    : 'block',
                )}
              >
            <div className="min-w-0">{content}</div>
            {showStickyCard ? (
              <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
                <StickyBuyCard
                  variant={cardVariant}
                  contentVariant={contentVariant}
                  sprintCity={sprintCity}
                  scheduleVariant={scheduleVariant}
                  spotAdded={Boolean(claimedDrop)}
                />
              </aside>
            ) : null}
          </div>
        </div>
      </section>

      {isClaimModalOpen && claimedDrop ? (
        <DropClaimModal drop={claimedDrop} onClose={() => setIsClaimModalOpen(false)} />
      ) : null}

      {isDrop ? (
        <MobileDropBookingCard
          sprintCity={sprintCity}
          scheduleVariant={scheduleVariant}
          spotAdded={Boolean(claimedDrop)}
          onClaim={handleMobileDropClaim}
        />
      ) : null}

      <FooterSection />
    </div>
  );
}
