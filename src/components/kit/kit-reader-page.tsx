'use client';

import {
  RiArrowLeftLine,
  RiBarChartBoxLine,
  RiBookMarkedLine,
  RiBubbleChartLine,
  RiCompass3Line,
  RiDonutChartLine,
  RiFileChartLine,
  RiGalleryLine,
  RiLayoutGridLine,
  RiLineChartLine,
  RiPlayCircleFill,
  RiSearchLine,
  RiSparkling2Line,
  RiTableLine,
} from '@remixicon/react';

import { cn } from '@/lib/utils';

const sections = [
  { label: 'Welcome', icon: RiCompass3Line },
  { label: 'Introduction', icon: RiBookMarkedLine, active: true, members: ['P', 'M', 'A'] },
  { label: 'Market map', icon: RiBubbleChartLine },
  { label: 'Positioning', icon: RiLayoutGridLine },
  { label: 'Launch assets', icon: RiGalleryLine },
  { label: 'Metrics model', icon: RiLineChartLine },
];

const subSections = [
  'Problem summary',
  'Audience fit',
  'Offer framing',
  'Launch checklist',
];

const highlights = [
  {
    title: 'Validation snapshot',
    value: '74%',
    detail: 'Founder-fit confidence',
    tone: 'from-[#ffe5d8] via-[#fff2ec] to-[#ffffff]',
  },
  {
    title: 'Expected payback',
    value: '5.6x',
    detail: 'ROI over first launch cycle',
    tone: 'from-[#dff5ff] via-[#eef9ff] to-[#ffffff]',
  },
  {
    title: 'Build complexity',
    value: 'Medium',
    detail: 'Fastest path: no-code + light automation',
    tone: 'from-[#efe7ff] via-[#f7f2ff] to-[#ffffff]',
  },
];

const chartBars = [
  { label: 'Demand', value: 88, color: 'bg-[#4361ee]' },
  { label: 'Execution', value: 72, color: 'bg-[#7c3aed]' },
  { label: 'Moat', value: 64, color: 'bg-[#f97316]' },
  { label: 'Speed', value: 91, color: 'bg-[#10b981]' },
];

const scoreRows = [
  { label: 'Market opportunity', value: '9.2', width: '90%', color: 'bg-[#4361ee]' },
  { label: 'Revenue potential', value: '8.8', width: '84%', color: 'bg-[#10b981]' },
  { label: 'Build difficulty', value: '5.0', width: '48%', color: 'bg-[#7c3aed]' },
  { label: 'Validation level', value: '9.5', width: '92%', color: 'bg-[#f97316]' },
];

const dataRows = [
  ['Primary ICP', 'Service businesses', 'High urgency, repeat support needs'],
  ['Go-to-market', 'Founder-led outbound', 'Warm lead capture + focused niche lists'],
  ['Monetization', 'Subscription + onboarding', 'Monthly SaaS + setup fee for implementation'],
  ['Moat layer', 'Repair dataset', 'Compounding diagnostic prompts and field notes'],
];

const recommendedCards = [
  {
    title: 'Can you position this offer in 15 words?',
    subtitle: 'Quick exercise',
    tone: 'bg-[#efe1ff]',
    accent: 'bg-[#7c3aed]',
  },
  {
    title: 'Principles behind the category wedge',
    subtitle: '2 min read',
    tone: 'bg-[#dff5ff]',
    accent: 'bg-[#53b1fd]',
  },
  {
    title: 'Staying humble while iterating',
    subtitle: '1 min read',
    tone: 'bg-[#f5f3ef]',
    accent: 'bg-[#f59e0b]',
  },
];

function SectionPill({
  label,
  active,
  members,
  icon: Icon,
}: {
  label: string;
  active?: boolean;
  members?: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between rounded-[20px] px-4 py-3 text-left transition',
        active ? 'bg-[#f5f4f0] text-[#171717]' : 'text-[#6d665d] hover:bg-[#f8f6f2] hover:text-[#171717]',
      )}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={cn(
            'flex size-9 shrink-0 items-center justify-center rounded-[14px] border text-[#6d665d]',
            active ? 'border-[#ddd5ca] bg-white text-[#171717]' : 'border-[#ece6dd] bg-white',
          )}
        >
          <Icon className="size-4.5" />
        </span>
        <span className="truncate text-[16px] font-medium">{label}</span>
      </span>
      {members ? (
        <span className="flex shrink-0 -space-x-2">
          {members.map((member, index) => (
            <span
              key={member}
              className={cn(
                'flex size-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-semibold text-[#171717]',
                index === 0 && 'bg-[#f9a8d4]',
                index === 1 && 'bg-[#fde68a]',
                index === 2 && 'bg-[#93c5fd]',
              )}
            >
              {member}
            </span>
          ))}
        </span>
      ) : null}
    </button>
  );
}

function HighlightCard({
  title,
  value,
  detail,
  tone,
}: {
  title: string;
  value: string;
  detail: string;
  tone: string;
}) {
  return (
    <article
      className={cn(
        'rounded-[28px] border border-[#ece6dd] bg-gradient-to-br p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]',
        tone,
      )}
    >
      <div className="text-[13px] font-medium text-[#7a7268]">{title}</div>
      <div className="mt-4 text-[2rem] font-semibold tracking-[-0.025em] text-[#171717]">{value}</div>
      <div className="mt-2 max-w-[18ch] text-[14px] leading-6 text-[#625c54]">{detail}</div>
    </article>
  );
}

export function KitReaderPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[292px] flex-col border-r border-[#ece6dd] bg-white px-6 py-6 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-[#171717] text-[18px] font-semibold text-white">
              K
            </div>
            <div>
              <div className="text-[17px] font-semibold text-[#171717]">KitChef</div>
              <div className="text-[13px] text-[#9a9186]">WrenchAI Pro</div>
            </div>
          </div>

          <div className="mt-9 space-y-2">
            <button className="flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left text-[17px] font-medium text-[#625c54] transition hover:bg-[#f7f4ef] hover:text-[#171717]">
              <RiArrowLeftLine className="size-5" />
              Back
            </button>
            <button className="flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left text-[17px] font-medium text-[#625c54] transition hover:bg-[#f7f4ef] hover:text-[#171717]">
              <RiSearchLine className="size-5" />
              Search
            </button>
            <button className="flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left text-[17px] font-medium text-[#625c54] transition hover:bg-[#f7f4ef] hover:text-[#171717]">
              <span className="text-[18px]">Aa</span>
              Glossary
            </button>
          </div>

          <div className="mt-8 border-t border-[#efebe5] pt-8">
            <div className="space-y-2">
              {sections.map((section) => (
                <SectionPill
                  key={section.label}
                  label={section.label}
                  icon={section.icon}
                  active={section.active}
                  members={section.members}
                />
              ))}
            </div>

            <div className="mt-6 ml-5 border-l border-[#ece6dd] pl-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#a19a90]">
                AI Fundamentals
              </div>
              <div className="mt-3 space-y-1">
                {subSections.map((item, index) => (
                  <button
                    key={item}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-[16px] px-3 py-2.5 text-left text-[15px] transition',
                      index === 0
                        ? 'bg-[#f8f6f2] font-medium text-[#171717]'
                        : 'text-[#6d665d] hover:bg-[#f8f6f2] hover:text-[#171717]',
                    )}
                  >
                    <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#dfd8cf] text-[12px] text-[#8d857b]">
                      {index + 1}
                    </span>
                    <span className="truncate">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-[#ece6dd] bg-white px-5 py-4 lg:px-8">
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-[#958d83]">My kits / Field service / WrenchAI Pro</div>
              <div className="mt-1 text-[15px] font-semibold text-[#171717]">Sales mastery in the AI age</div>
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <button className="rounded-2xl border border-[#ece6dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#625c54]">
                Narration
              </button>
              <button className="rounded-2xl border border-[#ece6dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#625c54]">
                Share
              </button>
            </div>
          </div>

          <div className="space-y-8 px-4 py-5 md:px-6 lg:px-8 lg:py-7">
            <section className="overflow-hidden rounded-[34px] border border-[#e8e1d8] bg-white shadow-[0_20px_48px_rgba(15,23,42,0.05)]">
              <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#090b08] px-8 py-10">
                  <div className="absolute left-16 top-10 text-[16px] font-medium text-[#b7d62f]">
                    Future-Proof Selling
                  </div>
                  <div className="relative max-w-[10ch] text-center font-serif text-[4.4rem] leading-[0.9] tracking-[-0.025em] text-white md:text-[5.6rem]">
                    Sales mastery in the AI age
                  </div>
                  <button className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                    <RiPlayCircleFill className="size-14" />
                  </button>
                  <div className="absolute right-18 top-1/2 h-[210px] w-[2px] -translate-y-1/2 bg-[#67d0ff]" />
                  <span className="absolute right-10 top-[42%] rounded-[12px] bg-[#f472b6] px-3 py-2 text-[14px] font-medium text-[#171717]">
                    Paul
                  </span>
                  <span className="absolute right-14 top-[55%] rounded-[12px] bg-[#67d0ff] px-3 py-2 text-[14px] font-medium text-[#171717]">
                    Alex
                  </span>
                </div>

                <div className="relative min-h-[430px] overflow-hidden bg-[linear-gradient(180deg,#d7effa_0%,#eaf6fb_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.85),transparent_22%),radial-gradient(circle_at_15%_85%,rgba(255,255,255,0.75),transparent_18%),linear-gradient(180deg,transparent,rgba(255,255,255,0.1))]" />
                  <img
                    src="https://images.unsplash.com/photo-1516321310764-8d8f4f8e8d8f?auto=format&fit=crop&w=1200&q=80"
                    alt="Kit visual"
                    className="absolute right-0 top-0 h-full w-full object-cover opacity-92"
                  />
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_340px]">
              <div className="space-y-6">
                <div className="rounded-[28px] border border-[#ece6dd] bg-white px-6 py-7 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <div className="max-w-[16ch] text-[3rem] font-semibold leading-[0.92] tracking-[-0.025em] text-[#171717] md:text-[3.6rem]">
                    Build a sales system founders can actually ship.
                  </div>
                  <p className="mt-5 max-w-[70ch] text-[17px] leading-8 text-[#5f5a52]">
                    This kit turns early-stage guesswork into an actionable launch plan. It combines
                    positioning, outreach structure, pricing logic, visual assets, and validation steps
                    into one operational view so the team can move from idea to first revenue with less
                    thrash.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {highlights.map((item) => (
                    <HighlightCard key={item.title} {...item} />
                  ))}
                </div>

                <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                  <div className="rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-[#f7f4ef] text-[#171717]">
                        <RiTableLine className="size-5" />
                      </span>
                      <div>
                        <div className="text-[20px] font-semibold tracking-[-0.025em] text-[#171717]">
                          Launch assumptions table
                        </div>
                        <div className="text-[14px] text-[#8e857b]">One-screen summary of the core business case</div>
                      </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-[22px] border border-[#eee8de]">
                      <div className="grid grid-cols-[1.05fr_0.85fr_1.2fr] border-b border-[#eee8de] bg-[#fbf9f5] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9d9489]">
                        <div>Area</div>
                        <div>Decision</div>
                        <div>Notes</div>
                      </div>
                      {dataRows.map((row) => (
                        <div
                          key={row[0]}
                          className="grid grid-cols-[1.05fr_0.85fr_1.2fr] gap-3 border-b border-[#f2ede6] px-4 py-4 text-[14px] last:border-b-0"
                        >
                          <div className="font-medium text-[#171717]">{row[0]}</div>
                          <div className="text-[#5f5a52]">{row[1]}</div>
                          <div className="text-[#8b847a]">{row[2]}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-[#f7f4ef] text-[#171717]">
                        <RiDonutChartLine className="size-5" />
                      </span>
                      <div className="text-[20px] font-semibold tracking-[-0.025em] text-[#171717]">
                        Kit scores
                      </div>
                    </div>
                    <div className="mt-6 space-y-5">
                      {scoreRows.map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-[14px]">
                            <span className="font-medium text-[#625c54]">{item.label}</span>
                            <span className="font-semibold text-[#171717]">{item.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-[#efebe5]">
                            <div className={cn('h-2 rounded-full', item.color)} style={{ width: item.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] bg-[#ff5a0f] px-7 py-7 text-white shadow-[0_20px_44px_rgba(249,115,22,0.24)]">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 text-[13px] font-medium text-white/70">
                        <RiSparkling2Line className="size-4" />
                        Interactive exercise
                      </div>
                      <div className="mt-3 max-w-[22ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.025em]">
                        See how tone changes meaning in the opening message.
                      </div>
                      <div className="mt-3 max-w-[48ch] text-[15px] leading-7 text-white/80">
                        Drag the framing slider, compare three outreach variations, and see which version
                        best matches the founder profile this kit is built for.
                      </div>
                    </div>
                    <button className="hidden shrink-0 rounded-full bg-white/16 px-6 py-3 text-[15px] font-medium text-white backdrop-blur-sm lg:block">
                      Start exercise
                    </button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <div className="mb-5 text-[16px] font-medium text-[#6f685f]">Recommended</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {recommendedCards.map((card) => (
                      <article
                        key={card.title}
                        className={cn('rounded-[24px] p-5 shadow-[0_10px_22px_rgba(15,23,42,0.05)]', card.tone)}
                      >
                        <span className={cn('mb-6 flex size-11 items-center justify-center rounded-full text-white', card.accent)}>
                          <RiBarChartBoxLine className="size-5" />
                        </span>
                        <div className="text-[20px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#171717]">
                          {card.title}
                        </div>
                        <div className="mt-3 text-[14px] text-[#7a7268]">{card.subtitle}</div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] xl:sticky xl:top-6">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#a1998f]">
                    Section overview
                  </div>
                  <div className="mt-4 text-[26px] font-semibold tracking-[-0.025em] text-[#171717]">
                    Introduction
                  </div>
                  <p className="mt-3 text-[15px] leading-7 text-[#625c54]">
                    A compact introduction to the category, the founder advantage, and the fastest route
                    to a launchable wedge.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-[22px] bg-[#f7f4ef] p-4">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                      alt="Whiteboard planning"
                      className="h-[180px] w-full rounded-[18px] object-cover"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    {chartBars.map((bar) => (
                      <div key={bar.label}>
                        <div className="mb-2 flex items-center justify-between text-[14px]">
                          <span className="text-[#625c54]">{bar.label}</span>
                          <span className="font-medium text-[#171717]">{bar.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#efebe5]">
                          <div className={cn('h-2 rounded-full', bar.color)} style={{ width: `${bar.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#171717] px-4 py-3.5 text-[15px] font-medium text-white">
                    Continue
                    <RiArrowLeftLine className="size-4 rotate-180" />
                  </button>
                </div>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
