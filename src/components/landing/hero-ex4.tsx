'use client';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import { Ex3Header, FooterSection } from '@/components/landing/hero-ex3';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

const kitRows = [
  [
    {
      id: 'wrenchai',
      name: 'WrenchAI Pro',
      category: 'Field Service',
      description:
        'Turns technical PDFs and documentation into a repair assistant delivered through chat, web, and internal ops flows.',
      labels: ['AI Agent', 'B2B', 'Field Ops'],
      icon: 'AI',
      score: '9.2',
      price: '$349',
      oldPrice: '$448',
      technical: '8.6',
      profileFit: '9.5',
      marketDepth: '9.0',
      background:
        'bg-[radial-gradient(circle_at_24%_18%,#ffd22c_0%,#ffb21c_36%,#ff7f43_72%,#9137ff_100%)]',
    },
    {
      id: 'fixmate',
      name: 'FixMate',
      category: 'Home Services',
      description:
        'A consumer repair manager with appliance diagnosis, maintenance alerts, booking flows, and AI-powered self-service.',
      labels: ['B2C', 'Mobile', 'Marketplace'],
      icon: 'HM',
      score: '8.9',
      price: '$199',
      oldPrice: '$268',
      technical: '7.4',
      profileFit: '9.1',
      marketDepth: '8.8',
      background:
        'bg-[radial-gradient(circle_at_82%_12%,#d7ff40_0%,transparent_20%),radial-gradient(circle_at_76%_78%,#ffe66f_0%,#ff9eee_24%,transparent_42%),linear-gradient(145deg,#1722ff_0%,#2441ff_36%,#ffd771_100%)]',
    },
    {
      id: 'launchops',
      name: 'LaunchOps AI',
      category: 'Go-To-Market',
      description:
        'A launch operating system that combines approvals, content deadlines, signal tracking, and campaign reporting in one kit.',
      labels: ['SaaS', 'Ops', 'Analytics'],
      icon: 'GO',
      score: '9.6',
      price: '$279',
      oldPrice: '$359',
      technical: '8.1',
      profileFit: '9.7',
      marketDepth: '9.2',
      background:
        'bg-[radial-gradient(circle_at_72%_14%,#4338ca_0%,#4338ca_28%,transparent_29%),radial-gradient(circle_at_88%_58%,#ff006b_0%,transparent_18%),linear-gradient(145deg,#ff8a00_0%,#ff6a00_44%,#3f3fd8_100%)]',
    },
  ],
  [
    {
      id: 'talentsync',
      name: 'TalentSync',
      category: 'HR Tech',
      description:
        'A recruiting workflow kit for startup teams with interview scoring, candidate ops, and hiring decision automation.',
      labels: ['HR', 'Workflow', 'B2B'],
      icon: 'HR',
      score: '8.7',
      price: '$229',
      oldPrice: '$299',
      technical: '7.0',
      profileFit: '8.8',
      marketDepth: '8.4',
      background:
        'bg-[radial-gradient(circle_at_80%_14%,#08df34_0%,#12c846_34%,transparent_35%),radial-gradient(circle_at_34%_24%,#ff2d86_0%,#ef137f_30%,transparent_31%),linear-gradient(145deg,#f30880_0%,#6d2fd5_60%,#00a4ff_100%)]',
    },
    {
      id: 'creatorstack',
      name: 'CreatorStack',
      category: 'Media Ops',
      description:
        'A campaign execution kit for creator-led brands with briefs, content ops, approvals, payouts, and reusable playbooks.',
      labels: ['Creator Economy', 'Templates', 'Ops'],
      icon: 'CE',
      score: '8.8',
      price: '$249',
      oldPrice: '$329',
      technical: '7.6',
      profileFit: '9.0',
      marketDepth: '8.5',
      background:
        'bg-[radial-gradient(circle_at_24%_14%,#ff5f14_0%,#ff3d14_28%,transparent_29%),radial-gradient(circle_at_78%_18%,#ef3f69_0%,transparent_22%),linear-gradient(145deg,#ff4b00_0%,#ff306c_44%,#0c86d9_100%)]',
    },
    {
      id: 'invoicepilot',
      name: 'InvoicePilot',
      category: 'Fintech',
      description:
        'A cash-flow oriented invoicing kit for agencies and service businesses with reminders, forecasts, and recovery automations.',
      labels: ['Fintech', 'SMB', 'Cash Flow'],
      icon: 'CF',
      score: '9.0',
      price: '$219',
      oldPrice: '$289',
      technical: '7.8',
      profileFit: '9.3',
      marketDepth: '8.9',
      background:
        'bg-[radial-gradient(circle_at_28%_14%,#8fd3ff_0%,#79b2ff_20%,transparent_28%),radial-gradient(circle_at_82%_78%,#ffd77a_0%,#ff95db_28%,transparent_46%),linear-gradient(145deg,#3c61ff_0%,#2851ee_40%,#f3aa5a_100%)]',
    },
  ],
];

const ratingsData = [
  { id: 'google', label: 'Founder fit', rating: '4.6', source: 'Google' },
  { id: 'trustpilot', label: 'Execution depth', rating: '4.9', source: 'Trustpilot' },
  { id: 'g2', label: 'Launchability', rating: '4.3', source: 'G2' },
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

function KitCard({ idea }: { idea: (typeof kitRows)[number][number] }) {
  return (
    <article className="min-w-0 rounded-[2rem] border border-[#ece5da] bg-white p-4 shadow-[0_10px_26px_rgba(15,23,42,0.04)]">
      <div
        className={cn(
          'relative aspect-[1.02] overflow-hidden rounded-[1.45rem] shadow-[0_14px_30px_rgba(15,23,42,0.06)] sm:aspect-[1.08] sm:rounded-[1.7rem]',
          idea.background,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.22),transparent_24%)]" />
        <div className="absolute left-4 top-4 inline-flex max-w-[calc(100%-5rem)] items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--text-strong-950)] shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:left-5 sm:top-5 sm:text-[12px]">
          {idea.category}
        </div>
        <div className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-white/50 bg-white/22 text-sm font-semibold text-white backdrop-blur sm:right-5 sm:top-5 sm:size-12">
          {idea.score}
        </div>
        <div className="absolute left-1/2 top-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.25rem] bg-white/24 text-[1.05rem] font-semibold tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(255,255,255,0.16)] backdrop-blur-sm sm:size-20 sm:rounded-[1.4rem] sm:text-[1.15rem]">
          {idea.icon}
        </div>
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap gap-2">
          {idea.labels.map((label, index) => (
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
          {idea.name}
        </h4>
        <p className="mt-2 text-[0.94rem] leading-6 text-[var(--text-sub-600)] sm:text-[0.98rem]">
          {idea.description}
        </p>

        <div className="mt-5 space-y-3 rounded-[1.2rem] border border-[#eee6db] bg-[#f8f4ec] p-4">
          <MetricRow label="Technical zorluk" value={idea.technical} />
          <MetricRow label="Profile uyum" value={idea.profileFit} />
          <MetricRow label="Pazar derinligi" value={idea.marketDepth} />
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-[1.2rem] border border-[#efe6d9] bg-[#fcfaf6] px-4 py-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="text-[1.02rem] text-[#a79f93] line-through">{idea.oldPrice}</div>
            <div className="text-[2rem] font-semibold leading-none tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[2.2rem]">
              {idea.price}
              <span className="ml-1 text-[1rem] font-medium tracking-normal text-[var(--text-sub-600)]">
                one-time
              </span>
            </div>
          </div>

          <Button.Root
            variant="neutral"
            mode="stroke"
            size="medium"
            className="h-11 w-full rounded-[14px] border-[#e2d8c9] bg-white px-5 text-[0.96rem] font-medium text-[var(--text-strong-950)] shadow-none hover:bg-[#fffdfa] sm:w-auto"
          >
            Buy now
          </Button.Root>
        </div>
      </div>
    </article>
  );
}

export function HeroEx4() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-page)]">
      <Ex3Header />

      <section className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#ffffff_0%,#faf9f6_100%)] py-10 lg:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:px-7">
          <div className="mb-8 flex flex-col px-6 lg:mb-12 lg:items-center lg:px-0">
            <Badge.Root
              className="mb-3 h-7 w-fit rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm capitalize text-[var(--text-sub-600)] lg:mx-auto"
            >
              Apps & Integrations
            </Badge.Root>
            <h3 className="mb-4 max-w-[780px] text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--text-strong-950)] sm:text-[2.4rem] lg:text-center xl:text-[3.4rem]">
              Startup kits with clearer fit
            </h3>
            <p className="mb-4 max-w-[720px] text-[0.98rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
              Compare startup kits fast. See category, fit, difficulty, and market
              depth before you decide what to build next.
            </p>
            <LinkButton.Root
              href="#"
              className="group h-auto w-fit gap-1 text-[var(--primary-base)] lg:mx-auto"
            >
              Explore all integrations
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className="size-5 text-[var(--primary-base)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </LinkButton.Root>
          </div>

          <div className="mx-2 min-w-0 overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#eef2ff_0%,#e8eeff_100%)] p-0.5 shadow-[0_22px_48px_rgba(67,97,238,0.06)] sm:mx-3 sm:rounded-[28px] lg:mx-0 lg:rounded-[40px]">
            <div className="rounded-[28px] bg-white lg:rounded-[38px]">
              {kitRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                  {rowIndex > 0 && (
                    <div className="mx-auto hidden h-px w-[88%] bg-[#ece5da] lg:block" />
                  )}
                  <div className="grid min-w-0 gap-5 px-3 py-4 sm:px-6 sm:py-6 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:py-8">
                    {row.map((idea) => (
                      <KitCard key={idea.id} idea={idea} />
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

      <FooterSection />
    </div>
  );
}
