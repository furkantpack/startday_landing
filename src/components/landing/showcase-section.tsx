'use client';

import {
  RiArrowRightLine,
  RiPlayFill,
  RiSparkling2Line,
  RiStarFill,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';

const storyCards = [
  {
    tag: 'Launch Workflow',
    brand: 'STARTBASE',
    title: '"From scattered planning to one launch command center."',
    person: 'Ece Demir',
    role: 'Growth Lead, Startbase Teams',
    accent: 'from-[#4d6bff]/40 via-[#8f81ff]/16 to-transparent',
    glow: 'bg-[#5872ff]',
    portrait: 'from-[#2b313b] via-[#60507a] to-[#a697cb]',
  },
  {
    tag: 'AI Operations',
    brand: 'SIGNAL OS',
    title: '"Every campaign now has owners, AI checklists, and live readiness."',
    person: 'Mert Yalin',
    role: 'Product Ops Director',
    accent: 'from-[#0ca678]/30 via-[#2f9e44]/10 to-transparent',
    glow: 'bg-[#0ca678]',
    portrait: 'from-[#1d222c] via-[#36404f] to-[#6cb49a]',
  },
  {
    tag: 'Bundle Mode',
    brand: 'CONTROL',
    title: '"The whole stack feels premium, clear, and ready for scale."',
    person: 'Selin Kaya',
    role: 'Founder, Revenue Systems',
    accent: 'from-[#ff9f43]/34 via-[#ffb36b]/12 to-transparent',
    glow: 'bg-[#ff9f43]',
    portrait: 'from-[#24211f] via-[#5f4c42] to-[#cf9c75]',
  },
];

const productCards = [
  {
    badge: 'AI Agent · Launch Ops',
    score: '9.4',
    title: 'Startbase Core',
    subtitle: 'Planning, approvals, launch checklists, and signal tracking.',
    price: '$249',
    accent: 'from-[#263761] to-[#314b82]',
    border: 'border-[#f0dca6]',
    market: 'TAM $8.9B',
    platforms: 'Web + Multi-channel',
    metrics: [
      ['Execution depth', '9.7'],
      ['Go-to-market fit', '9.5'],
      ['Team visibility', '9.8'],
    ],
  },
  {
    badge: 'Mobile App · B2C',
    score: '8.8',
    title: 'Signal Mobile',
    subtitle: 'On-the-go launch status, alerts, and approval loops for founders.',
    price: '$179',
    accent: 'from-[#0b7d62] to-[#20936e]',
    border: 'border-[#cfe5ff]',
    market: 'TAM $12.3B',
    platforms: 'iOS + Android',
    metrics: [
      ['Alert clarity', '9.3'],
      ['Response speed', '9.0'],
      ['Signal quality', '9.1'],
    ],
  },
];

const bundleItems = [
  'Core workspace - 18 sections',
  'Signal Mobile - 14 sections',
  'Executive dashboard - 8 sections',
  'Shared AI architecture',
  'Conversion reporting model',
  'Cross-channel automation flows',
];

export function ShowcaseSection() {
  return (
    <section className="relative mx-auto mt-10 max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-[linear-gradient(180deg,#eef2ff_0%,#edf2ff_46%,#e5edff_100%)] px-4 py-14 md:px-6 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(67,97,238,0.18),transparent_62%)]" />
      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[860px] text-center">
          <div className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary-base)] shadow-[0_8px_24px_rgba(67,97,238,0.08)]">
            Trusted by teams shipping faster with AI
          </div>
          <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.025em] text-[#111633] md:text-6xl lg:text-[5.4rem]">
            Discover launch stories with
            <span className="bg-[linear-gradient(90deg,#8aa0ff_0%,#4361ee_72%)] bg-clip-text text-transparent">
              {' '}
              signal-rich cards
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-[#334266] md:text-[1.45rem]">
            Startbase keeps the same premium palette and typography, then turns product
            proof into modular cards that can scale across hero, social proof, pricing, and
            bundle moments.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-full bg-white/55 px-5 py-4 shadow-[0_18px_40px_rgba(67,97,238,0.08)] backdrop-blur">
            <div className="flex items-center gap-1 text-[#4361ee]">
              {Array.from({ length: 5 }).map((_, index) => (
                <RiStarFill key={index} className="size-5" />
              ))}
            </div>
            <div className="text-lg font-semibold text-[#24304d]">4.9</div>
            <div className="text-base text-[#5a6786]">from 120+ product and GTM teams</div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {storyCards.map((card) => (
            <article
              key={card.title}
              className="group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/50 bg-[#171b24] shadow-[0_28px_60px_rgba(17,22,51,0.18)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.portrait}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.12),transparent_22%)]" />
              <div className={`absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t ${card.accent}`} />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(7,10,18,0.88)_100%)]" />

              <div className="relative flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold uppercase tracking-[0.05em] text-[#18285f]">
                    {card.tag}
                  </span>
                  <span className="text-[2rem] font-semibold tracking-[-0.025em] text-white/90">
                    {card.brand}
                  </span>
                </div>

                <div className="mt-auto">
                  <div className="mb-4 flex items-center">
                    <button className="inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/75 px-3 py-3 text-[15px] font-semibold text-[#1d2640] shadow-[0_14px_32px_rgba(255,255,255,0.18)] backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-[var(--primary-base)] shadow-[0_8px_24px_rgba(67,97,238,0.2)]">
                        <RiPlayFill className="size-5" />
                      </span>
                      Play story
                    </button>
                  </div>
                  <h3 className="max-w-[15ch] text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
                    {card.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3">
                    <span className={`size-2.5 rounded-full ${card.glow} shadow-[0_0_16px_currentColor]`} />
                    <div>
                      <p className="text-lg font-semibold text-white">{card.person}</p>
                      <p className="text-base text-white/72">{card.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {productCards.map((card) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[1.75rem] border bg-white/88 shadow-[0_24px_60px_rgba(67,97,238,0.08)] backdrop-blur ${card.border}`}
              >
                <div className={`bg-gradient-to-r ${card.accent} px-5 pb-5 pt-4 text-white`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-white/18 px-3 py-1.5 text-xs font-semibold tracking-[0.03em] text-white ring-1 ring-white/30">
                      {card.badge}
                    </span>
                    <div className="flex size-14 flex-col items-center justify-center rounded-full border border-white/40 text-center">
                      <span className="text-xl font-semibold leading-none">{card.score}</span>
                      <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                        /10
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-16 text-[2rem] font-semibold tracking-[-0.025em]">
                    {card.title}
                  </h3>
                  <p className="mt-1 max-w-[30ch] text-sm text-white/80">{card.subtitle}</p>
                </div>

                <div className="px-5 py-5">
                  <p className="text-[15px] leading-7 text-[var(--text-sub-600)]">
                    Turns fragmented execution into one AI-guided workflow with clear owners,
                    checklists, alerts, and launch visibility.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--text-sub-600)]">
                    <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                      {card.market}
                    </span>
                    <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                      {card.platforms}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {card.metrics.map(([label, score]) => (
                      <div key={label} className="grid grid-cols-[92px_1fr_28px] items-center gap-3 text-sm">
                        <span className="text-[var(--text-sub-600)]">{label}</span>
                        <div className="h-1.5 rounded-full bg-[#e8eefc]">
                          <div
                            className="h-1.5 rounded-full bg-[linear-gradient(90deg,#38b2ac_0%,#4361ee_100%)]"
                            style={{ width: `${Number(score) * 10}%` }}
                          />
                        </div>
                        <span className="text-right font-semibold text-[var(--text-strong-950)]">
                          {score}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[2rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                        {card.price}
                      </span>
                      <span className="ml-1 text-sm text-[var(--text-sub-600)]">one-time</span>
                    </div>
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="medium"
                      className="rounded-[1rem] border-[var(--stroke-soft-200)] bg-white px-5"
                    >
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--text-strong-950)] text-white">
                        <RiPlayFill className="size-3.5" />
                      </span>
                      See details
                    </Button.Root>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="overflow-hidden rounded-[1.9rem] border border-[rgba(255,148,84,0.32)] bg-white shadow-[0_24px_60px_rgba(255,145,77,0.12)]">
            <div className="bg-[linear-gradient(180deg,#ff7d47_0%,#ff8d57_100%)] px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.03em]">
                    Two-Sided Platform
                  </span>
                  <h3 className="mt-4 text-[2.4rem] font-semibold tracking-[-0.025em]">Bundle</h3>
                  <p className="text-sm text-white/85">Startbase Core + Signal Mobile</p>
                </div>
                <button className="inline-flex size-10 items-center justify-center rounded-xl border border-[#2a1e1a]/20 bg-white/18 text-[#2a1e1a]">
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>
            </div>

            <div className="space-y-5 px-6 py-6">
              <p className="text-[17px] leading-8 text-[var(--text-sub-600)]">
                Both products. One design system. Startbase handles planning and approvals,
                while Signal Mobile pushes every alert, dependency, and next step to the team.
              </p>

              <div className="rounded-[1rem] border border-[#ece4d7] bg-[#f5f1ea] p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#d9efbf] px-3 py-1 text-sm font-semibold text-[#46702b]">
                    Best Value
                  </span>
                  <p className="max-w-[48ch] text-[15px] leading-6 text-[var(--text-sub-600)]">
                    Build the full launch surface at once: web workspace, mobile alerts,
                    shared AI engine, and one unified reporting layer.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-[var(--text-sub-600)]">
                <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                  TAM $17.9B
                </span>
                <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                  Web + Mobile
                </span>
                <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                  Full-stack platform
                </span>
                <span className="rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)] px-3 py-1">
                  32 sections
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-soft-400)]">
                  Strong points
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Shared AI core', 'Supply + demand sides', 'Premium launch UX', '30% bundle lift'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#e5f4cb] px-3 py-1 text-sm font-medium text-[#5e8d2e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[var(--stroke-soft-200)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-soft-400)]">
                  Kit content - 6 blocks
                </p>
                <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {bundleItems.map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[24px_1fr] items-center gap-2 border-b border-[var(--stroke-soft-200)] pb-3 text-[15px]"
                    >
                      <span className="font-semibold text-[#ff7d47]">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-[var(--text-sub-600)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 border-t border-[var(--stroke-soft-200)] px-6 py-5">
              <div>
                <div className="text-sm text-[var(--text-soft-400)] line-through">$448</div>
                <div className="text-[2.2rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                  $349
                  <span className="ml-1 text-sm font-normal tracking-normal text-[var(--text-sub-600)]">
                    one-time
                  </span>
                </div>
              </div>
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="medium"
                className="rounded-[1rem] border-[var(--stroke-soft-200)] bg-white px-6"
              >
                Buy now
                <Button.Icon as={RiArrowRightLine} className="size-4" />
              </Button.Root>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#27163a] px-4 py-3 text-sm text-white shadow-[0_16px_34px_rgba(39,22,58,0.18)]">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/12">
              <RiSparkling2Line className="size-4" />
            </span>
            Design system stays consistent across hero, story, product, and bundle cards.
          </div>
        </div>
      </div>
    </section>
  );
}
