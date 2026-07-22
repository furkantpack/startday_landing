'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowRightUpLongLine,
  RiCloseLine,
  RiMenu3Line,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const brands = [
  { src: 'https://alignui.com/images/blocks/hero-1-brand-1.svg', alt: 'Brand 1' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-2.svg', alt: 'Brand 2' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-3.svg', alt: 'Brand 3' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-4.svg', alt: 'Brand 4' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-5.svg', alt: 'Brand 5' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-6.svg', alt: 'Brand 6' },
  { src: 'https://alignui.com/images/blocks/hero-1-brand-7.svg', alt: 'Brand 7' },
];

function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 9.33333L10.0333 7V2.33333L14 0L17.9667 2.33333V7L14 9.33333Z"
        className="fill-[var(--primary-base)]"
      />
      <path
        d="M21.9333 14L17.9667 11.6667V7L21.9333 4.66667L25.9 7V11.6667L21.9333 14Z"
        className="fill-[var(--primary-base)]"
      />
      <path
        d="M17.9667 21V16.3333L21.9333 14L25.9 16.3333V21L21.9333 23.3333L17.9667 21Z"
        className="fill-[var(--primary-base)]"
      />
      <path
        d="M10.0333 21L14 18.6667L17.9667 21V25.6667L14 28L10.0333 25.6667V21Z"
        className="fill-[var(--primary-base)]"
      />
      <path
        d="M6.06667 14L10.0333 16.3333V21L6.06667 23.3333L2.10001 21V16.3333L6.06667 14Z"
        className="fill-[var(--primary-base)]"
      />
      <path
        d="M6.06667 14L10.0333 11.6667V7L6.06667 4.66667L2.10001 7V11.6667L6.06667 14Z"
        className="fill-[var(--primary-base)]"
      />
    </svg>
  );
}

function SmileTile({
  className,
  tone,
}: {
  className?: string;
  tone: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-[1.25rem]', tone, className)}>
      <div className="absolute left-[22%] top-[23%] flex gap-7">
        <span className="h-2.5 w-5 rounded-full bg-[#10110f]" />
        <span className="h-2.5 w-5 rounded-full bg-[#10110f]" />
      </div>
      <div className="absolute left-1/2 top-[56%] h-12 w-16 -translate-x-1/2 rounded-b-[4rem] border-b-[6px] border-[#10110f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.2),transparent_32%)]" />
    </div>
  );
}

function DesignjoyCardDesktop() {
  return (
    <div className="relative w-full max-w-[640px]">
      <div className="relative overflow-hidden rounded-[1.8rem] border border-[#7584ff] bg-[radial-gradient(circle_at_24%_18%,#ffd8fb_0%,#efbaff_18%,transparent_36%),radial-gradient(circle_at_79%_78%,#ff7ce3_0%,rgba(255,124,227,0.12)_20%,transparent_40%),radial-gradient(circle_at_16%_84%,#4047ff_0%,#2133ff_24%,transparent_48%),linear-gradient(180deg,#73abff_0%,#263cff_37%,#1321d8_100%)] p-3.5 shadow-[0_24px_48px_rgba(28,31,168,0.22)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_28%)]" />

        <div className="relative min-h-[438px] rounded-[1.5rem] px-3.5 pb-4 pt-3.5">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#0c0c0e] px-4 py-2.5 text-[0.95rem] font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <span className="inline-flex size-3 rounded-full bg-[#ffd21f] shadow-[0_0_12px_rgba(255,210,31,0.8)]" />
            Start today
          </div>

          <div className="absolute right-4 top-3.5 w-[42%] rotate-[9deg] rounded-[1.3rem] bg-white/10 p-2 shadow-[0_22px_40px_rgba(8,10,40,0.22)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2 rounded-[1.2rem] bg-[#f6a3ff]/30 p-1.5">
              <SmileTile tone="bg-[#ff2e8a]" className="aspect-square" />
              <SmileTile tone="bg-[#ff6819]" className="aspect-square" />
              <SmileTile tone="bg-[#081b0f]" className="aspect-square" />
              <SmileTile tone="bg-[#ffc71c]" className="aspect-square" />
            </div>
          </div>

          <div className="pt-22">
            <h2 className="max-w-[8ch] text-[3.15rem] font-semibold leading-[0.93] tracking-[-0.025em] text-white">
              Join Designjoy
            </h2>
            <p className="mt-3 max-w-[17ch] text-[1.2rem] leading-[1.22] tracking-[-0.025em] text-white/92">
              One subscription to rule them all.
            </p>
          </div>

            <Link
              href="/form"
              className="mt-7 flex h-[64px] w-full items-center justify-center rounded-[1rem] bg-white text-[1.05rem] font-semibold text-[#18181b] shadow-[0_18px_34px_rgba(255,255,255,0.16)]"
            >
              See kits
            </Link>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-13 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#0d0d10_0%,#2d2100_100%)] shadow-[0_16px_34px_rgba(10,10,16,0.25)]">
                <span className="text-[2rem]">☺</span>
              </div>
              <div>
                  <p className="text-[1rem] font-medium text-white">Find your startup fit</p>
                  <p className="text-[0.96rem] text-white/64">Get matched in 2 minutes</p>
                </div>
              </div>

              <Link
                href="/form"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white text-[#101010] shadow-[0_18px_34px_rgba(255,255,255,0.18)]"
              >
                <RiArrowRightLine className="size-5" />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const showcaseCards = [
  {
    title: 'Design Board Pro',
    description: 'Shared queue management, request triage, and transparent sprint visibility for fast-moving teams.',
    labels: ['Design Ops', 'Workflow', 'Async'],
    score: '9.4',
    bg: 'bg-[radial-gradient(circle_at_30%_20%,#ffd91b_0%,#ffbe18_38%,#ff7f39_72%,#8f2bff_100%)]',
    icon: '◫',
  },
  {
    title: 'Rate Lock',
    description: 'Predictable monthly pricing with no surprise scope jumps, add-on fees, or fragmented retainers.',
    labels: ['Pricing', 'Subscription', 'Finance'],
    score: '9.1',
    bg: 'bg-[radial-gradient(circle_at_80%_10%,#d7ff40_0%,transparent_22%),radial-gradient(circle_at_76%_78%,#ffe86f_0%,#ff9eee_26%,transparent_42%),linear-gradient(145deg,#1722ff_0%,#2337ff_36%,#ffdb74_100%)]',
    icon: '⌂',
  },
  {
    title: 'Fast Delivery',
    description: 'Get polished design output in days, not weeks, with a cadence built for product and marketing teams.',
    labels: ['Speed', 'Production', 'Creative'],
    score: '9.6',
    bg: 'bg-[radial-gradient(circle_at_70%_12%,#3730b8_0%,#4338ca_28%,transparent_29%),radial-gradient(circle_at_88%_58%,#ff006b_0%,transparent_18%),linear-gradient(145deg,#ff8a00_0%,#ff6a00_44%,#3f3fd9_100%)]',
    icon: '⚡',
  },
  {
    title: 'Top-Notch Quality',
    description: 'Senior-level design craft at your fingertips, with quality control baked into every revision cycle.',
    labels: ['Quality', 'Senior', 'Brand'],
    score: '9.8',
    bg: 'bg-[radial-gradient(circle_at_80%_14%,#07df34_0%,#12c846_34%,transparent_35%),radial-gradient(circle_at_34%_24%,#ff2d86_0%,#ef137f_30%,transparent_31%),linear-gradient(145deg,#f30880_0%,#6d2fd5_60%,#00a4ff_100%)]',
    icon: '★',
  },
  {
    title: 'Flexible Scale',
    description: 'Scale output up or down as needed and pause or restart the service without operational drag.',
    labels: ['Scale', 'Retention', 'B2B'],
    score: '8.9',
    bg: 'bg-[radial-gradient(circle_at_24%_14%,#ff5f14_0%,#ff3d14_28%,transparent_29%),radial-gradient(circle_at_78%_18%,#ef3f69_0%,transparent_22%),linear-gradient(145deg,#ff4b00_0%,#ff306c_44%,#0c86d9_100%)]',
    icon: '▣',
  },
];

const pricingFeatures = {
  starter: [
    'Up to 3 finance users',
    'Custom approval rules',
    'Vendor payment tracking',
    'Expense categorization',
    'One-click exports',
    'Budget reminders',
    'Real-time spend view',
    'Email support',
  ],
  scale: [
    'Unlimited finance users',
    'Role-based access',
    'Approval chains and policies',
    'Automated transfers',
    'Smart spend alerts',
    'Monthly usage insights',
    'Team-level budgeting',
    'Priority support',
  ],
};

const brandingKits = [
  {
    title: 'Branding Kit',
    description: 'Core visual system for founders who need a clean launch-ready brand foundation.',
    background:
      'bg-[radial-gradient(circle_at_82%_12%,#d7ff40_0%,transparent_20%),radial-gradient(circle_at_76%_78%,#ffe66f_0%,#ff9eee_24%,transparent_42%),linear-gradient(145deg,#1722ff_0%,#2441ff_36%,#ffd771_100%)]',
    accent: 'Most popular',
    features: [
      'Logo direction set',
      'Color system and tone',
      'Typography pairing',
      'Brand usage guidance',
      'Social avatar kit',
      'Launch-ready cover assets',
      'Mini pitch deck styling',
      'Editable source files',
    ],
  },
  {
    title: 'Brand Scale Kit',
    description: 'A richer identity system for teams that need rollout consistency across web, social, and product.',
    background:
      'bg-[radial-gradient(circle_at_80%_14%,#08df34_0%,#12c846_34%,transparent_35%),radial-gradient(circle_at_34%_24%,#ff2d86_0%,#ef137f_30%,transparent_31%),linear-gradient(145deg,#f30880_0%,#6d2fd5_60%,#00a4ff_100%)]',
    accent: 'Slider-ready',
    features: [
      'Expanded identity rules',
      'Landing page brand lockup',
      'Campaign asset patterns',
      'Visual QA checklist',
      'UI component styling',
      'Presentation theme',
      'Ad creative system',
        'Priority async support',
      ],
    },
    {
      title: 'Launch Identity Kit',
      description: 'A startup-first system for founders who need a confident first impression across product, deck, and socials.',
      background:
        'bg-[radial-gradient(circle_at_78%_14%,#dfff3d_0%,transparent_18%),radial-gradient(circle_at_72%_74%,#7be1ff_0%,#94a0ff_26%,transparent_40%),linear-gradient(145deg,#0f1cff_0%,#2d45ff_42%,#ffc3f0_100%)]',
      accent: 'Founder-ready',
      features: [
        'Launch headline system',
        'Social launch pack',
        'Pitch deck cover style',
        'Landing page visual rhythm',
        'Product screenshot framing',
        'Brand-safe CTA styles',
        'Founder profile visuals',
        'Fast handoff source files',
      ],
    },
  ];

const trustedAvatars = [
  'https://alignui.com/images/blocks/avatar-1.png',
  'https://alignui.com/images/blocks/avatar-2.png',
  'https://alignui.com/images/blocks/avatar-3.png',
  'https://alignui.com/images/blocks/avatar-4.png',
  'https://alignui.com/images/blocks/avatar-5.png',
  'https://alignui.com/images/blocks/avatar-6.png',
];

const footerGroups = [
  {
    title: 'Product',
    links: ['Design queue', 'Pricing', 'Membership', 'Case studies'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Help center', 'Templates', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Privacy', 'Terms'],
  },
];

const faqData = [
  {
    id: 'faq1',
    question: 'What does a startup kit actually include?',
    answer:
      'Each kit packages validated startup research, positioning direction, launch structure, monetization notes, and execution guidance so you can move from idea to build with less guesswork.',
  },
  {
    id: 'faq2',
    question: 'How do I know which kit fits my profile best?',
    answer:
      'Use the startup fit form and we will score your profile based on technical comfort, budget, market preference, timeline, and sector interest to recommend the best-matching kit.',
  },
  {
    id: 'faq3',
    question: 'Are these kits more useful for technical or non-technical founders?',
    answer:
      'Both. Some kits are better for technical operators who want speed, while others are designed for distribution-first founders who need clearer validation and positioning support.',
  },
  {
    id: 'faq4',
    question: 'Can I use a kit before I have a full team?',
    answer:
      'Yes. The kits are made to help solo founders and lean teams decide faster, define the opportunity, and see what to build before hiring or raising capital.',
  },
  {
    id: 'faq5',
    question: 'Do I get instant access after purchase?',
    answer:
      'Yes. Once you purchase, the kit is delivered immediately so you can start reviewing the opportunity, score breakdowns, and execution materials right away.',
  },
  {
    id: 'faq6',
    question: 'Can I compare multiple kits before buying?',
    answer:
      'Absolutely. You can review labels, fit indicators, difficulty signals, and pricing across kits to compare them before deciding which one to explore in depth.',
  },
];

function ListDotIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z"
        className="fill-[#1FC16B]"
      />
    </svg>
  );
}

function ArrowSketch() {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.065595 13.4353C-0.0710765 13.6752 0.0126463 13.9805 0.252595 14.1172C0.492544 14.2539 0.797855 14.1701 0.934527 13.9302L0.500061 13.6827L0.065595 13.4353ZM20.8536 4.03568C21.0489 3.84042 21.0489 3.52384 20.8536 3.32858L17.6716 0.146595C17.4764 -0.0486672 17.1598 -0.0486672 16.9645 0.146595C16.7693 0.341857 16.7693 0.65844 16.9645 0.853702L19.793 3.68213L16.9645 6.51056C16.7693 6.70582 16.7693 7.0224 16.9645 7.21766C17.1598 7.41293 17.4764 7.41293 17.6716 7.21766L20.8536 4.03568ZM0.500061 13.6827L0.934527 13.9302C3.18591 9.97754 10.182 4.18213 20.5001 4.18213V3.18213C9.81812 3.18213 2.49258 9.1743 0.065595 13.4353L0.500061 13.6827Z"
        fill="#335CFF"
      />
    </svg>
  );
}

export function PricingSection() {
  const [activePlan, setActivePlan] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="border-b border-[var(--stroke-soft-200)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-7 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-col lg:mb-10 lg:items-center">
            <Badge.Root
              className="mb-3 h-7 w-fit gap-1.5 rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm normal-case text-[var(--text-sub-600)]"
            >
              Designed for growing finance teams
            </Badge.Root>
            <h3 className="mb-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-center xl:text-[3.4rem]">
              Scale with clarity, not complexity
            </h3>
            <p className="max-w-[760px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
              Choose a plan that grows with your team. Transparent pricing, cleaner
              operations, and a setup that stays fast as finance workflows get more
              advanced.
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center gap-7">
            <div className="relative flex w-full max-w-[280px] rounded-[12px] bg-[var(--bg-weak-50)] p-1">
              <div
                className={cn(
                  'absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-[10px] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-transform duration-300',
                  activePlan === 'yearly' ? 'translate-x-[calc(100%+8px)]' : 'translate-x-0',
                )}
              />
              <button
                className={cn(
                  'relative z-10 flex-1 rounded-[10px] px-4 py-2 text-sm font-medium transition',
                  activePlan === 'monthly'
                    ? 'text-[var(--text-strong-950)]'
                    : 'text-[var(--text-soft-400)]',
                )}
                onClick={() => setActivePlan('monthly')}
              >
                Monthly
              </button>
              <button
                className={cn(
                  'relative z-10 flex-1 rounded-[10px] px-4 py-2 text-sm font-medium transition',
                  activePlan === 'yearly'
                    ? 'text-[var(--text-strong-950)]'
                    : 'text-[var(--text-soft-400)]',
                )}
                onClick={() => setActivePlan('yearly')}
              >
                Yearly
              </button>
              <div className="pointer-events-none absolute -top-5 right-0 flex items-center gap-2 lg:-right-20 lg:top-1">
                <span className="hidden lg:inline-flex">
                  <ArrowSketch />
                </span>
                <span className="text-xs font-semibold text-[var(--primary-base)]">Save 20%</span>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-[2rem] bg-[var(--bg-weak-50)] p-1 lg:flex-row">
                <div className="flex flex-1 flex-col justify-between p-6 xl:p-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-[1rem] font-semibold text-[var(--text-strong-950)]">
                        Starter
                      </div>
                      <Badge.Root
                        className="rounded-[6px] border border-dashed border-[#7ab85a] bg-transparent px-2 py-0.5 text-[11px] text-[#5d9b3f]"
                      >
                        Most popular
                      </Badge.Root>
                    </div>
                    <p className="mt-2 text-[0.98rem] leading-6 text-[var(--text-sub-600)]">
                      For small teams managing recurring finance ops and weekly approvals.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-4">
                      <p className="text-[2.6rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                        ${activePlan === 'yearly' ? '15' : '12'}
                      </p>
                      <div>
                        <div className="text-sm text-[var(--text-sub-600)]">
                          /{activePlan === 'yearly' ? 'year' : 'month'}
                        </div>
                        <div className="text-xs text-[var(--text-soft-400)]">
                          {activePlan === 'yearly' ? 'billed annually' : 'billed monthly'}
                        </div>
                      </div>
                    </div>
                    <Button.Root
                      variant="primary"
                      mode="filled"
                      size="medium"
                      className="mt-6 h-12 w-full rounded-[14px] gap-2"
                    >
                      Start free trial
                      <Button.Icon as={RiArrowRightUpLongLine} className="size-5 text-white/70" />
                    </Button.Root>
                  </div>
                </div>

                <div className="w-full rounded-[1.5rem] bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)] lg:w-[280px] xl:p-8">
                  <ul className="flex flex-col gap-4">
                    {pricingFeatures.starter.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-[var(--text-sub-600)]">
                        <ListDotIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col rounded-[2rem] bg-[var(--bg-weak-50)] p-1 lg:flex-row">
                <div className="flex flex-1 flex-col justify-between p-6 xl:p-8">
                  <div>
                    <div className="text-[1rem] font-semibold text-[var(--text-strong-950)]">
                      Scale
                    </div>
                    <p className="mt-2 text-[0.98rem] leading-6 text-[var(--text-sub-600)]">
                      For growing teams managing multi-step policies, budgets, and transfers.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-4">
                      <p className="text-[2.6rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                        ${activePlan === 'yearly' ? '49' : '39'}
                      </p>
                      <div>
                        <div className="text-sm text-[var(--text-sub-600)]">
                          /{activePlan === 'yearly' ? 'year' : 'month'}
                        </div>
                        <div className="text-xs text-[var(--text-soft-400)]">
                          {activePlan === 'yearly' ? 'billed annually' : 'billed monthly'}
                        </div>
                      </div>
                    </div>
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="medium"
                      className="mt-6 h-12 w-full rounded-[14px] border-[var(--primary-base)] bg-transparent gap-2 text-[var(--primary-base)]"
                    >
                      Get started
                      <Button.Icon as={RiArrowRightUpLongLine} className="size-5 text-[var(--primary-base)]/70" />
                    </Button.Root>
                  </div>
                </div>

                <div className="w-full rounded-[1.5rem] bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)] lg:w-[280px] xl:p-8">
                  <ul className="flex flex-col gap-4">
                    {pricingFeatures.scale.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-[var(--text-sub-600)]">
                        <ListDotIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-1 lg:flex-row lg:items-center">
            <div className="flex items-center">
              {trustedAvatars.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    'rounded-full border-[3px] border-white shadow-[0_4px_12px_rgba(15,23,42,0.08)]',
                    index !== 0 && '-ml-2',
                  )}
                >
                  <Image
                    src={src}
                    alt={`Trusted avatar ${index + 1}`}
                    width={24}
                    height={24}
                    className="size-6 rounded-full mix-blend-luminosity"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--text-soft-400)]">
              <span className="hidden lg:inline text-[var(--text-soft-400)]">— </span>
              trusted by 250+ finance teams worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandingKitSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: 'left' | 'right') => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>('[data-branding-card="true"]');
    const amount = card ? card.offsetWidth + 24 : 420;

    container.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
      <section className="border-b border-[var(--stroke-soft-200)] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-7 lg:py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex flex-col lg:mb-10 lg:items-center">
              <Badge.Root
                className="mb-3 h-7 w-fit gap-1.5 rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm normal-case text-[var(--text-sub-600)]"
              >
                Designed for brand-first launches
              </Badge.Root>
              <h3 className="mb-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-center xl:text-[3.4rem]">
                Build a brand that ships with confidence
              </h3>
              <p className="max-w-[760px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
                Choose a kit that gives your startup a clean visual system, sharper rollout
                assets, and a launch-ready identity that feels coherent from day one.
              </p>
            </div>

            <div
              ref={sliderRef}
              className="grid gap-6 overflow-visible pb-2 lg:flex lg:snap-x lg:snap-mandatory lg:overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {brandingKits.map((kit, index) => (
                <div
                  key={kit.title}
                  data-branding-card="true"
                  className="relative flex w-full min-w-0 snap-start flex-col rounded-[2rem] border border-[rgba(15,23,42,0.06)] bg-[var(--bg-weak-50)] p-1 lg:min-w-[calc(50%-12px)] xl:min-w-[540px] lg:flex-row"
                >
                  <div className="absolute -right-3 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-[linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,0.09),rgba(15,23,42,0))] lg:block" />
                  <div
                    className={cn(
                      'flex flex-1 flex-col justify-between rounded-[1.7rem] p-6 xl:p-8',
                      kit.background,
                    )}
                  >
                      <div className="flex flex-col items-center text-center">
                        <h4 className="max-w-[12ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.025em] text-white lg:text-[2.35rem]">
                          {kit.title}
                        </h4>
                        <p className="mt-4 max-w-[22ch] text-[1.02rem] leading-7 text-white/88">
                          {kit.description}
                        </p>
                      </div>

                      <div className="mt-8">
                        <Button.Root
                        variant={index === 0 ? 'primary' : 'neutral'}
                        mode={index === 0 ? 'filled' : 'stroke'}
                        size="medium"
                        className={cn(
                          'mt-6 h-12 w-full rounded-[14px] gap-2',
                          index === 0
                            ? 'bg-white text-[var(--primary-base)] hover:bg-white/95'
                            : 'border-white/55 bg-white/10 text-white hover:bg-white/15',
                        )}
                      >
                        {index === 0 ? 'Get branding kit' : 'Explore brand scale'}
                        <Button.Icon
                          as={RiArrowRightUpLongLine}
                          className={cn(
                            'size-5',
                            index === 0 ? 'text-[var(--primary-base)]/70' : 'text-white/75',
                          )}
                        />
                      </Button.Root>
                    </div>
                  </div>

                  <div className="w-full rounded-[1.5rem] bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)] lg:w-[280px] xl:p-8">
                    <ul className="flex flex-col gap-4">
                      {kit.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-[var(--text-sub-600)]">
                          <ListDotIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden items-center gap-4 lg:flex">
              <button
                type="button"
                aria-label="Previous branding kit"
                onClick={() => scrollCards('left')}
                className="flex size-16 items-center justify-center rounded-full bg-white text-[var(--text-strong-950)] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
              >
                <RiArrowRightLine className="size-6 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next branding kit"
                onClick={() => scrollCards('right')}
                className="flex size-16 items-center justify-center rounded-full bg-white text-[var(--text-strong-950)] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
              >
                <RiArrowRightLine className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string>('faq1');

  return (
    <section className="border-b border-[var(--stroke-soft-200)] bg-white">
      <div className="mx-auto flex max-w-[924px] flex-col px-6 py-10 lg:px-7 lg:py-20">
        <Badge.Root className="mb-3 h-7 w-fit rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm normal-case text-[var(--text-sub-600)] lg:mx-auto">
          Need help?
        </Badge.Root>
        <h3 className="mb-4 text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] lg:text-center xl:text-[3.2rem]">
          Frequently asked questions
        </h3>
        <p className="mb-8 text-[1rem] leading-7 text-[var(--text-sub-600)] lg:mb-14 lg:text-center">
          Find quick answers about kit structure, founder fit, and how to choose the
          right startup idea for your profile.
        </p>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex flex-row gap-6 lg:flex-col">
            <div className="relative h-auto w-35 shrink-0 overflow-hidden rounded-[1.4rem] shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:w-50 lg:w-75 lg:rounded-[1.75rem]">
              <Image
                src="https://alignui.com/images/blocks/faq-img-1.jpg"
                alt="Startup advisor"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 lg:left-6 lg:top-6">
                <span className="flex h-2 w-2 rounded-full bg-white" />
              </div>
              <div className="absolute bottom-0 left-0 flex h-[82%] w-full flex-col justify-end gap-0.5 p-4 lg:h-[54%] lg:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.12)_24%,rgba(0,0,0,0.52)_100%)]" />
                <div className="relative text-sm font-medium text-white lg:text-base">
                  Elif Kaya
                </div>
                <div className="relative text-xs text-white/65 lg:text-sm">
                  Startup kit advisor
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[1.125rem] font-semibold leading-8 text-[var(--text-soft-400)] lg:text-[1.45rem]">
                Need guidance?
                <span className="block text-[var(--text-strong-950)]">
                  Elif can help you choose the right kit.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-sm text-[var(--text-soft-400)]">
                  It is free and takes only a few minutes.
                </div>
                <Button.Root
                  variant="neutral"
                  mode="stroke"
                  size="medium"
                  className="h-10 w-fit gap-2 rounded-xl border-[var(--stroke-soft-200)] bg-white"
                >
                  Book a meeting
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className="size-5 text-[var(--text-sub-600)]/64"
                  />
                </Button.Root>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full space-y-2.5">
            {faqData.map((faq) => {
              const isOpen = openItem === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-[1.25rem] px-4 py-3 ring-1 ring-[var(--stroke-soft-200)] transition duration-300 lg:px-5 lg:py-4"
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? '' : faq.id)}
                    className="flex w-full items-start gap-4 text-left lg:items-center"
                  >
                    <span className={cn(
                      'text-sm font-medium leading-6 transition lg:text-[0.98rem]',
                      isOpen ? 'text-[var(--text-strong-950)]' : 'text-[var(--text-sub-600)]',
                    )}>
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'ml-auto flex size-6 items-center justify-center text-[var(--text-soft-400)] transition-transform duration-300',
                        isOpen ? 'rotate-180 text-[var(--text-sub-600)]' : '',
                      )}
                    >
                      <RiArrowDownSLine className="size-6" />
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="pt-3.5 pb-1.5 text-sm leading-6 text-[var(--text-sub-600)]">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f8f7f3_0%,#eef3ff_100%)] text-[var(--text-strong-950)]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-7 lg:py-16">
        <div className="grid gap-10 border-b border-[var(--stroke-soft-200)] pb-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-lg font-semibold tracking-[-0.025em]">Apex Finance</span>
            </div>
            <h3 className="mt-5 text-[2.4rem] font-semibold leading-[1] tracking-[-0.025em] text-[var(--text-strong-950)]">
              Finance infrastructure that feels as sharp as your product.
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1rem] leading-7 text-[var(--text-sub-600)]">
              Bring together approvals, spend visibility, budgeting, and clean reporting
              in one premium operating surface.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button.Root
                variant="primary"
                mode="filled"
                size="medium"
                className="h-12 rounded-[14px] px-5"
              >
                Get started
              </Button.Root>
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="medium"
                className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white/70 px-5 text-[var(--text-strong-950)] hover:bg-white hover:text-[var(--text-strong-950)]"
              >
                Book a demo
              </Button.Root>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)]">
                  {group.title}
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-[0.98rem] text-[var(--text-sub-600)] transition hover:text-[var(--text-strong-950)]"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-[var(--text-soft-400)] lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Apex Finance. All rights reserved.</p>
          <p>Istanbul-based design and finance system for modern teams.</p>
        </div>
      </div>
    </footer>
  );
}

export function Ex3Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-[var(--stroke-soft-200)] bg-white">
        <div className="mx-auto flex h-[55px] max-w-[1440px] items-center justify-between px-4 md:px-6 xl:px-7">
          <div className="flex items-center gap-4 lg:gap-8">
            <button className="lg:hidden" onClick={() => setOpen((value) => !value)}>
              {open ? (
                <RiCloseLine className="size-5 text-[var(--text-sub-600)]" />
              ) : (
                <RiMenu3Line className="size-5 text-[var(--text-sub-600)]" />
              )}
            </button>
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="#"
                className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                Products
              </Link>
              <Link
                href="#"
                className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                Services
              </Link>
              <Badge.Root className="rounded-[5px] px-1.5 py-0.5 text-[9px]">NEW</Badge.Root>
              <Link
                href="#"
                className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                Solutions
                <RiArrowDownSLine className="size-4" />
              </Link>
              <Link
                href="#"
                className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button.Root
              variant="neutral"
              mode="stroke"
              size="medium"
              className="h-10 rounded-[12px] border-[var(--stroke-soft-200)] bg-white px-4 text-[15px] font-medium text-[var(--text-sub-600)] shadow-none"
            >
              Sign in
            </Button.Root>
            <Button.Root
              variant="primary"
              mode="filled"
              size="medium"
              className="h-10 rounded-[12px] px-4 text-[15px] font-semibold"
            >
              Get started
            </Button.Root>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden border-t border-[var(--stroke-soft-200)] bg-white transition-all duration-300 lg:hidden',
            open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="flex flex-col px-4 py-3">
            {['Products', 'Services', 'Solutions', 'Pricing', 'Contact'].map((item) => (
              <Link
                key={item}
                href="#"
                className="rounded-xl px-3 py-3 text-[15px] text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)]"
              >
                {item}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="medium"
                className="h-11 rounded-[12px] border-[var(--stroke-soft-200)] bg-white px-4 text-[15px] font-medium text-[var(--text-sub-600)]"
              >
                Sign in
              </Button.Root>
              <Button.Root
                variant="primary"
                mode="filled"
                size="medium"
                className="h-11 rounded-[12px] px-4 text-[15px] font-semibold"
              >
                Get started
              </Button.Root>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export function HeroEx3({ beforeFooter }: { beforeFooter?: React.ReactNode }) {
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  const scrollShowcase = (direction: 'left' | 'right') => {
    const container = showcaseRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>('[data-showcase-card="true"]');
    const amount = card ? card.offsetWidth + 20 : 380;

    container.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

    return (
      <div className="w-full overflow-x-hidden bg-white">
      <Ex3Header />

      <div className="relative overflow-x-clip border-b border-[var(--stroke-soft-200)]">
        <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-7 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            <div className="flex w-full flex-col gap-6 xl:max-w-[484px]">
              <div className="flex flex-col">
                <div className="mb-3 flex w-fit items-center gap-2 rounded-xl bg-[var(--bg-weak-50)] py-1 pl-1.5 pr-[9px] lg:mb-4">
                  <Badge.Root className="rounded-[5px] bg-white px-2 py-0.5 shadow-[0_2px_8px_rgba(67,97,238,0.08)]">
                    NEW
                  </Badge.Root>
                  <span className="text-sm text-[var(--text-sub-600)]">
                    Upgrade your banking now
                  </span>
                </div>

                <h1 className="mb-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[3rem] lg:text-[3.7rem] xl:text-[4.15rem]">
                  Earn on time, save with ease, track every dollar.
                </h1>
                <p className="max-w-[42ch] text-[1rem] leading-7 text-[var(--text-sub-600)]">
                  From invoicing to insights, Apex gives you complete control over your
                  finances <span className="font-medium">so you can focus on growth.</span>
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button.Root className="h-12 w-full cursor-pointer gap-2 rounded-[14px] px-5 text-[0.98rem] font-semibold shadow-[0_14px_30px_rgba(67,97,238,0.2)] sm:w-auto">
                  Get started free
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className="size-5 text-white/70"
                  />
                </Button.Root>

                <Button.Root
                  variant="neutral"
                  mode="stroke"
                  size="medium"
                  className="h-12 w-full cursor-pointer rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[0.98rem] font-medium text-[var(--text-sub-600)] shadow-none sm:w-auto"
                >
                  Talk to sales
                </Button.Root>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[760px] lg:max-w-none">
              <div className="lg:ml-auto lg:w-[74%] xl:w-[70%]">
                <DesignjoyCardDesktop />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center bg-white lg:flex lg:border-b lg:border-[var(--stroke-soft-200)]">
        {brands.map((brand, index) => (
          <div
            key={brand.src}
            className={cn(
              'flex w-full justify-center border-t border-[var(--stroke-soft-200)] py-7 lg:border-r lg:border-t-0',
              index === brands.length - 1 ? 'hidden lg:flex lg:border-r-0' : '',
            )}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={106}
              height={24}
              className="h-6 w-auto lg:h-5 xl:h-6"
            />
          </div>
        ))}
      </div>

        <section className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f6f8ff_0%,#eef3ff_100%)]">
          <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-7 lg:py-10">
            <div className="mx-auto max-w-[920px] text-center">
              <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft-400)]">
                Product Showcase
              </div>
              <h2 className="mt-4 text-[2.45rem] font-semibold leading-[0.96] tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[3rem] lg:text-[4.1rem]">
                Three standout cards, ready to slide
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-[1.05rem]">
                We keep the colorful visual language, but turn the section into a
                horizontally scrollable product rail with richer card metadata and clearer
                actions.
              </p>
            </div>

              <div className="mt-6 hidden items-center justify-end gap-3 lg:flex">
              <button
                type="button"
                aria-label="Previous showcase card"
                onClick={() => scrollShowcase('left')}
                className="flex size-12 items-center justify-center rounded-full bg-white text-[var(--text-strong-950)] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
              >
                <RiArrowRightLine className="size-5 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next showcase card"
                onClick={() => scrollShowcase('right')}
                className="flex size-12 items-center justify-center rounded-full bg-white text-[var(--text-strong-950)] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
              >
                <RiArrowRightLine className="size-5" />
              </button>
            </div>

              <div
                ref={showcaseRef}
              className="mt-4 overflow-visible lg:overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="grid gap-5 lg:flex lg:min-w-max lg:pr-6">
                  {showcaseCards.map((card) => (
                    <article
                      key={card.title}
                      data-showcase-card="true"
                      className="w-full min-w-0 snap-start rounded-[2rem] border border-white/50 bg-white/75 p-4 shadow-[0_20px_44px_rgba(67,97,238,0.1)] backdrop-blur md:max-w-[420px] md:justify-self-center lg:w-[calc((100vw-10rem)/3.4)] lg:min-w-[300px]"
                    >
                  <div
                    className={cn(
                      'relative aspect-[1.08] overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_rgba(15,23,42,0.1)]',
                      card.bg,
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.2),transparent_20%)]" />
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/88 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--text-strong-950)]">
                      {card.labels[0]}
                    </div>
                    <div className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/18 text-sm font-semibold text-white backdrop-blur">
                      {card.score}
                    </div>
                    <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.4rem] bg-white/24 text-[2.1rem] text-white shadow-[0_14px_30px_rgba(255,255,255,0.16)] backdrop-blur-sm">
                      {card.icon}
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {card.labels.map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-[var(--stroke-soft-200)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--text-sub-600)]"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                      {card.title}
                    </h3>
                    <p className="mt-2 min-h-[72px] text-[0.98rem] leading-6 text-[var(--text-sub-600)]">
                      {card.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-soft-400)]">
                          Score
                        </div>
                        <div className="text-[1.5rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                          {card.score}
                          <span className="ml-1 text-[0.95rem] font-medium text-[var(--text-sub-600)]">
                            /10
                          </span>
                        </div>
                      </div>

                      <Button.Root
                        variant="neutral"
                        mode="stroke"
                        size="medium"
                        className="h-11 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[0.96rem] font-medium text-[var(--text-strong-950)] shadow-none"
                      >
                        Detay gör
                      </Button.Root>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <BrandingKitSection />
      <FaqSection />
      {beforeFooter}
      <FooterSection />
    </div>
  );
}
