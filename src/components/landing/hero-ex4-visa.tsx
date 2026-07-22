'use client';
import Link from 'next/link';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import { VisaFooterSection } from '@/components/landing/hero-ex3-visa';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

function VisaHeader() {
  return (
    <header className="border-b border-[var(--stroke-soft-200)] bg-white">
      <div className="mx-auto flex h-[55px] max-w-[1440px] items-center justify-between px-4 md:px-6 xl:px-7">
        <div className="flex items-center gap-8">
          <Link href="/ex3-visa" className="flex items-center gap-3">
            <div className="relative h-7 w-7 overflow-hidden rounded-[8px] border border-[#dbeafe] bg-white">
              <span className="absolute inset-y-0 left-[35%] w-[18%] bg-[#2563eb]" />
              <span className="absolute inset-x-0 top-[40%] h-[18%] bg-[#2563eb]" />
            </div>
            <span className="text-[15px] font-semibold text-[var(--text-strong-950)]">HangiVize</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="#routes"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              Routes
            </Link>
            <Link
              href="#services"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              Services
            </Link>
            <Link
              href="#faq"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              FAQ
            </Link>
          </nav>
        </div>

        <Link href="/dash4">
          <Button.Root
            variant="primary"
            mode="filled"
            size="medium"
            className="h-10 rounded-[12px] px-4 text-[15px] font-semibold"
          >
            Go to dashboard
          </Button.Root>
        </Link>
      </div>
    </header>
  );
}

const visaRows = [
  [
    {
      id: 'finland-startup',
      name: 'Finland Startup Visa',
      category: 'Startup Visa',
      description:
        'Founders who need a clean route for eligibility, business plan, financial proof, and relocation planning.',
      labels: ['Finland', 'Founders', 'Fast-track'],
      icon: 'FI',
      score: '9.6',
      price: '$499',
      oldPrice: '$650',
      technical: '7.9',
      profileFit: '9.6',
      marketDepth: '9.1',
      background:
        'bg-[radial-gradient(circle_at_24%_18%,#dbeafe_0%,#93c5fd_36%,#60a5fa_72%,#1d4ed8_100%)]',
    },
    {
      id: 'estonia-startup',
      name: 'Estonia Startup Visa',
      category: 'Startup Visa',
      description:
        'A digital-first route for founders who want lean company operations and a lighter admin stack in Europe.',
      labels: ['Estonia', 'EU', 'Digital-first'],
      icon: 'EE',
      score: '9.0',
      price: '$399',
      oldPrice: '$540',
      technical: '7.2',
      profileFit: '9.1',
      marketDepth: '8.8',
      background:
        'bg-[radial-gradient(circle_at_82%_12%,#ccfbf1_0%,transparent_20%),radial-gradient(circle_at_76%_78%,#bfdbfe_0%,#93c5fd_24%,transparent_42%),linear-gradient(145deg,#0f766e_0%,#0ea5e9_36%,#1d4ed8_100%)]',
    },
    {
      id: 'denmark-startup',
      name: 'Denmark Startup Track',
      category: 'Startup Visa',
      description:
        'A more selective Nordic option for teams who care about ecosystem quality and premium operating standards.',
      labels: ['Denmark', 'Nordics', 'Selective'],
      icon: 'DK',
      score: '8.7',
      price: '$449',
      oldPrice: '$590',
      technical: '8.2',
      profileFit: '8.6',
      marketDepth: '8.5',
      background:
        'bg-[radial-gradient(circle_at_72%_14%,#fecaca_0%,#fca5a5_28%,transparent_29%),radial-gradient(circle_at_88%_58%,#fee2e2_0%,transparent_18%),linear-gradient(145deg,#dc2626_0%,#ef4444_44%,#f59e0b_100%)]',
    },
  ],
  [
    {
      id: 'portugal-nomad',
      name: 'Portugal Nomad Visa',
      category: 'Nomad Visa',
      description:
        'A strong route for remote workers balancing income requirements, lifestyle goals, and smoother relocation.',
      labels: ['Portugal', 'Nomad', 'Remote'],
      icon: 'PT',
      score: '9.3',
      price: '$349',
      oldPrice: '$460',
      technical: '6.4',
      profileFit: '9.3',
      marketDepth: '8.7',
      background:
        'bg-[radial-gradient(circle_at_80%_14%,#fde68a_0%,#fbbf24_34%,transparent_35%),radial-gradient(circle_at_34%_24%,#fdba74_0%,#fb923c_30%,transparent_31%),linear-gradient(145deg,#f59e0b_0%,#f97316_60%,#ea580c_100%)]',
    },
    {
      id: 'uk-investor',
      name: 'UK Innovator Founder',
      category: 'Investor / Innovation',
      description:
        'A route for founders and investor-backed teams that can clearly prove innovation, market logic, and growth.',
      labels: ['United Kingdom', 'Innovator', 'Investor'],
      icon: 'UK',
      score: '8.8',
      price: '$549',
      oldPrice: '$720',
      technical: '8.4',
      profileFit: '8.8',
      marketDepth: '9.0',
      background:
        'bg-[radial-gradient(circle_at_24%_14%,#bfdbfe_0%,#93c5fd_28%,transparent_29%),radial-gradient(circle_at_78%_18%,#fecaca_0%,transparent_22%),linear-gradient(145deg,#1d4ed8_0%,#1e40af_44%,#dc2626_100%)]',
    },
    {
      id: 'relocation-ops',
      name: 'Relocation & Setup',
      category: 'Operations',
      description:
        'Company formation, banking, accounting, and early-stage relocation tasks bundled into one practical setup layer.',
      labels: ['Relocation', 'Accounting', 'Setup'],
      icon: 'OPS',
      score: '9.1',
      price: '$249',
      oldPrice: '$340',
      technical: '6.9',
      profileFit: '9.4',
      marketDepth: '8.6',
      background:
        'bg-[radial-gradient(circle_at_28%_14%,#8fd3ff_0%,#79b2ff_20%,transparent_28%),radial-gradient(circle_at_82%_78%,#ffd77a_0%,#ff95db_28%,transparent_46%),linear-gradient(145deg,#3c61ff_0%,#2851ee_40%,#f3aa5a_100%)]',
    },
  ],
];

const ratingsData = [
  { id: 'google', label: 'Country fit', rating: '4.7', source: 'Google' },
  { id: 'trustpilot', label: 'Application clarity', rating: '4.9', source: 'Trustpilot' },
  { id: 'g2', label: 'Relocation readiness', rating: '4.4', source: 'G2' },
];

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3 text-[12px]">
        <span className="text-[#9f978a]">{label}</span>
        <span className="font-semibold text-[var(--text-strong-950)]">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#e8e1d5]">
        <div
          className="h-1.5 rounded-full bg-[linear-gradient(90deg,#4db7b0_0%,#4b62f0_100%)]"
          style={{ width: `${Math.min(100, Number(value) * 10)}%` }}
        />
      </div>
    </div>
  );
}

function getLabelTone(index: number) {
  const tones = [
    'bg-[#fff4da] text-[#8a6228] border-[#efd9a8]',
    'bg-[#eef4ff] text-[#4863a9] border-[#d9e4ff]',
    'bg-[#eef8f2] text-[#4d7a61] border-[#d7ebdf]',
  ];

  return tones[index % tones.length];
}

function VisaCard({ visa }: { visa: (typeof visaRows)[number][number] }) {
  return (
    <article className="min-w-0 rounded-[2rem] border border-[#ece5da] bg-white p-4 shadow-[0_10px_26px_rgba(15,23,42,0.04)]">
      <div
        className={cn(
          'relative aspect-[1.02] overflow-hidden rounded-[1.45rem] shadow-[0_14px_30px_rgba(15,23,42,0.06)] sm:aspect-[1.08] sm:rounded-[1.7rem]',
          visa.background,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.22),transparent_24%)]" />
        <div className="absolute left-4 top-4 inline-flex max-w-[calc(100%-5rem)] items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--text-strong-950)] shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:left-5 sm:top-5 sm:text-[12px]">
          {visa.category}
        </div>
        <div className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-white/50 bg-white/22 text-sm font-semibold text-white backdrop-blur sm:right-5 sm:top-5 sm:size-12">
          {visa.score}
        </div>
        <div className="absolute left-1/2 top-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.25rem] bg-white/24 text-[1.05rem] font-semibold tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(255,255,255,0.16)] backdrop-blur-sm sm:size-20 sm:rounded-[1.4rem] sm:text-[1.15rem]">
          {visa.icon}
        </div>
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap gap-2">
          {visa.labels.map((label, index) => (
            <span
              key={label}
              className={cn(
                'max-w-full rounded-full border px-3 py-1 text-[12px] font-medium break-words',
                getLabelTone(index),
              )}
            >
              {label}
            </span>
          ))}
        </div>

        <h4 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
          {visa.name}
        </h4>
        <p className="mt-2 text-[0.94rem] leading-6 text-[var(--text-sub-600)] sm:text-[0.98rem]">
          {visa.description}
        </p>

        <div className="mt-5 space-y-3 rounded-[1.2rem] border border-[#eee6db] bg-[#f8f4ec] p-4">
          <MetricRow label="Belge zorlugu" value={visa.technical} />
          <MetricRow label="Profile uyum" value={visa.profileFit} />
          <MetricRow label="Ulke derinligi" value={visa.marketDepth} />
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-[1.2rem] border border-[#efe6d9] bg-[#fcfaf6] px-4 py-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="text-[1.02rem] text-[#a79f93] line-through">{visa.oldPrice}</div>
            <div className="text-[2rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[2.2rem]">
              {visa.price}
              <span className="ml-1 text-[1rem] font-medium tracking-normal text-[var(--text-sub-600)]">
                starting
              </span>
            </div>
          </div>

          <Link href="/kit-main2">
            <Button.Root
              variant="neutral"
              mode="stroke"
              size="medium"
              className="h-11 w-full rounded-[14px] border-[#e2d8c9] bg-white px-5 text-[0.96rem] font-medium text-[var(--text-strong-950)] shadow-none hover:bg-[#fffdfa] sm:w-auto"
            >
              Buy now
            </Button.Root>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function HeroEx4Visa() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-page)]">
        <VisaHeader />

      <section className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#ffffff_0%,#faf9f6_100%)] py-10 lg:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:px-7">
          <div className="mb-8 flex flex-col px-6 lg:mb-12 lg:items-center lg:px-0">
            <Badge.Root
              className="mb-3 h-7 w-fit rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm capitalize text-[var(--text-sub-600)] lg:mx-auto"
            >
              Visa & Relocation
            </Badge.Root>
            <h3 className="mb-4 max-w-[780px] text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[2.4rem] lg:text-center xl:text-[3.4rem]">
              Visa routes with clearer fit
            </h3>
            <p className="mb-4 max-w-[720px] text-[0.98rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
              Compare visa paths fast. See country fit, document complexity, profile match, and relocation depth before
              you decide what route to pursue next.
            </p>
            <LinkButton.Root
              href="/ex3-visa"
              className="group h-auto w-fit gap-1 text-[var(--primary-base)] lg:mx-auto"
            >
              Explore all visa routes
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className="size-5 text-[var(--primary-base)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </LinkButton.Root>
          </div>

          <div className="mx-2 min-w-0 overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#eef2ff_0%,#e8eeff_100%)] p-0.5 shadow-[0_22px_48px_rgba(67,97,238,0.06)] sm:mx-3 sm:rounded-[28px] lg:mx-0 lg:rounded-[40px]">
            <div className="rounded-[28px] bg-white lg:rounded-[38px]">
              {visaRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                  {rowIndex > 0 && <div className="mx-auto hidden h-px w-[88%] bg-[#ece5da] lg:block" />}
                  <div className="grid min-w-0 gap-5 px-3 py-4 sm:px-6 sm:py-6 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:py-8">
                    {row.map((visa) => (
                      <VisaCard key={visa.id} visa={visa} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 border-t border-[#ece5da] bg-[#f5f1eb] p-4 lg:gap-12">
              {ratingsData.map((rating, index) => (
                <div
                  key={rating.id}
                  className={cn(
                    'relative flex items-center gap-2',
                    index !== ratingsData.length - 1 &&
                      "lg:before:absolute lg:before:-right-6 lg:before:top-1/2 lg:before:h-4 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#ddd3c4] lg:before:content-['']",
                  )}
                >
                  <div className="inline-flex size-5 items-center justify-center rounded-full bg-[var(--primary-base)]/10 text-[11px] font-semibold text-[var(--primary-base)]">
                    {rating.rating}
                  </div>
                  <p className="text-sm text-[var(--text-soft-400)]">
                    <span className="font-medium text-[var(--text-sub-600)]">{rating.label}</span>{' '}
                    {rating.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        <VisaFooterSection />
      </div>
    );
  }
