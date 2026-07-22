'use client';

import * as React from 'react';
import {
  RiArrowRightUpLine,
  RiArrowRightSLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBookOpenLine,
  RiCompass3Line,
  RiFileList3Line,
  RiGalleryLine,
  RiHomeSmile2Line,
  RiLayoutGridLine,
  RiSearchLine,
  RiSparkling2Line,
} from '@remixicon/react';

import { cn } from '@/lib/utils';
import * as LinkButton from '@/components/ui/link-button';

const courseSections = [
  {
    title: 'Section 01',
    label: 'Quickstart',
    items: [
      { label: 'Quickstart', icon: RiBookOpenLine, active: true },
      { label: 'Founder profile', icon: RiCompass3Line },
      { label: 'Positioning goals', icon: RiLayoutGridLine },
    ],
  },
  {
    title: 'Section 02',
    label: 'Market fit',
    items: [
      { label: 'Validation notes', icon: RiFileList3Line },
      { label: 'Competitor map', icon: RiCompass3Line },
      { label: 'Signal review', icon: RiSparkling2Line },
    ],
  },
  {
    title: 'Section 03',
    label: 'Launch assets',
    items: [
      { label: 'Landing page', icon: RiGalleryLine },
      { label: 'Brand kit', icon: RiLayoutGridLine },
      { label: 'Outbound drafts', icon: RiFileList3Line },
    ],
  },
];

const cards = [
  {
    title: 'Quickstart',
    text: 'Deploy your first startup kit in minutes with a clear build order and launch path.',
    tone: 'from-[#eef9f3] to-[#f8fffb]',
    icon: 'rocket',
  },
  {
    title: 'Market map',
    text: 'See demand signals, adjacent competitors, and audience problems before you build.',
    tone: 'from-[#eef8ff] to-[#f8fcff]',
    icon: 'map',
  },
  {
    title: 'Brand kit',
    text: 'Use launch-ready messaging, color direction, visual cues, and page structure.',
    tone: 'from-[#f5f0ff] to-[#fbf9ff]',
    icon: 'brand',
  },
  {
    title: 'Launch assets',
    text: 'Open landing sections, outbound drafts, prompt packs, and checklist templates.',
    tone: 'from-[#fff4ea] to-[#fffaf5]',
    icon: 'assets',
  },
];

const colorfulBlocks = [
  {
    title: 'Validation brief',
    text: 'Research-backed angles, founder-fit notes, and decision shortcuts in one place.',
    tone: 'bg-[#ff5a0f]',
    textTone: 'text-white',
  },
  {
    title: 'Competitor lens',
    text: 'Simple side-by-side positioning to help you avoid crowded generic ideas.',
    tone: 'bg-[#dff5ff]',
    textTone: 'text-[#171717]',
  },
  {
    title: 'Launch prompts',
    text: 'Prompt sequences for market interviews, copy framing, and early customer outreach.',
    tone: 'bg-[#efe1ff]',
    textTone: 'text-[#171717]',
  },
];

const pageToc = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'getting-started', label: 'Getting started' },
  { id: 'kit-layers', label: 'Kit layers' },
  { id: 'recommended-next', label: 'Recommended next' },
];

const nextCards = [
  {
    title: 'First 50 Customers',
    meta: 'Section 08 · 6 min read',
    tone: 'bg-[#efe1ff]',
    iconTone: 'bg-[#d9c2ff]',
  },
  {
    title: 'Competitor map',
    meta: 'Section 06 · 5 min read',
    tone: 'bg-[#ecfbf4]',
    iconTone: 'bg-[#d2f5e5]',
  },
  {
    title: 'Conversion Funnels',
    meta: 'Section 09 · 7 min read',
    tone: 'bg-[#fff4ea]',
    iconTone: 'bg-[#ffe3c2]',
  },
];

const brandingSlides = [
  {
    title: 'Landing hero direction',
    caption: 'Continue learning',
    tone: 'from-[#d8ffb0] via-[#dff6f4] to-[#b7e3f6]',
  },
  {
    title: 'Messaging for founder-led sales',
    caption: 'Marketing',
    tone: 'from-[#ffcda8] via-[#ff8b5d] to-[#7b2cbf]',
  },
  {
    title: 'Brand system walkthrough',
    caption: '43 min',
    tone: 'from-[#9edcff] via-[#cce8ff] to-[#f7d7ec]',
  },
  {
    title: 'Offer framing in action',
    caption: 'Edited yesterday',
    tone: 'from-[#ffd8d1] via-[#fff0dd] to-[#fff8f0]',
  },
  {
    title: 'Launch assets bundle',
    caption: '1 hr · 2 steps',
    tone: 'from-[#f7ef72] via-[#f7df6f] to-[#ffb562]',
  },
];

const competitorMap = [
  { name: 'Generic AI builder', depth: 'Shallow research', speed: 'Fast', fit: 'Low founder fit' },
  { name: 'Freelancer sprint', depth: 'Medium strategy', speed: 'Medium', fit: 'Depends on brief quality' },
  { name: 'KitChef branding kit', depth: 'Deep kit logic', speed: 'Fast', fit: 'Designed for startup validation' },
];

function MintyIcon({ kind }: { kind: string }) {
  if (kind === 'rocket') {
    return (
      <svg viewBox="0 0 64 64" className="size-14 text-[#28b483]">
        <path
          d="M39 11c7 2 14 9 14 16-8 0-15 7-16 14-6 0-12-4-15-10 1-8 8-16 17-20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="39" cy="24" r="3.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    );
  }
  if (kind === 'map') {
    return (
      <svg viewBox="0 0 64 64" className="size-14 text-[#28b483]">
        <path
          d="M16 18l11-4 10 4 11-4v32l-11 4-10-4-11 4V18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27 14v32M37 18v32" fill="none" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    );
  }
  if (kind === 'brand') {
    return (
      <svg viewBox="0 0 64 64" className="size-14 text-[#28b483]">
        <path
          d="M24 17h16l7 8v22H17V25l7-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M24 17l8 10 8-10" fill="none" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="size-14 text-[#28b483]">
      <path
        d="M18 20h28v24H18zM24 14h16M24 50h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 28h16M24 34h12" fill="none" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function ContentCard({
  title,
  text,
  tone,
  icon,
}: {
  title: string;
  text: string;
  tone: string;
  icon: string;
}) {
  return (
    <article className="group">
      <div
        className={cn(
          'relative h-[188px] overflow-hidden rounded-[24px] border border-[#e8f1eb] bg-gradient-to-br',
          tone,
        )}
      >
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(40,180,131,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(40,180,131,0.07)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <MintyIcon kind={icon} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-[#171717]">{title}</h3>
        <p className="mt-2 max-w-[34ch] text-[15px] leading-7 text-[#6d665d]">{text}</p>
      </div>
    </article>
  );
}

export function KitLmsPage() {
  const breadcrumbs = [
    { label: 'Dashboard', href: '/dash' },
    { label: 'Kits', href: '/kit-main' },
    { label: 'Branding Kit', href: '/kit2' },
  ];

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="grid min-h-screen lg:grid-cols-[280px_minmax(0,1fr)_250px]">
        <aside className="hidden border-r border-[#efebe5] bg-white px-6 py-7 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#28b483] text-[15px] font-semibold text-white">
              k
            </div>
            <div className="text-[18px] font-semibold tracking-[-0.025em] text-[#171717]">kitchef</div>
          </div>

          <button className="mt-8 flex w-full items-center gap-3 rounded-[18px] border border-[#efebe5] px-4 py-3 text-left text-[16px] text-[#625c54] transition hover:bg-[#fafaf8]">
            <RiSparkling2Line className="size-4.5 text-[#a49c92]" />
            Ask Assistant
          </button>

          <div className="mt-5 space-y-7">
            {courseSections.map((group, groupIndex) => (
              <div key={group.title}>
                <div className="mb-2 flex items-center gap-3 px-1">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#a39a90]">
                    {group.title}
                  </div>
                  <div className="text-[14px] font-medium text-[#171717]">{group.label}</div>
                </div>
                <div className="space-y-1 rounded-[20px] border border-[#f1ece6] p-2">
                  {group.items.map((item) => (
                    <button
                      key={`${group.title}-${item.label}`}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-[16px] px-4 py-3 text-left text-[16px] transition',
                        item.active && groupIndex === 0
                          ? 'bg-[#ecfbf4] font-medium text-[#157f59]'
                          : 'text-[#6d665d] hover:bg-[#f7f6f2] hover:text-[#171717]',
                      )}
                    >
                      <item.icon className="size-4.5" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="min-w-0">
          <div className="border-b border-[#efebe5] bg-white px-5 py-5 lg:px-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <nav className="flex items-center gap-[6px] rounded-lg bg-[var(--bg-weak-50)] px-2.5 py-2">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <RiHomeSmile2Line className="size-4 text-[var(--text-sub-600)] hover:text-[var(--text-strong-950)]" />
                </a>
                {breadcrumbs.length > 0 ? (
                  <RiArrowRightSLine className="size-4 cursor-default text-[var(--text-soft-400)]" />
                ) : null}
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={item.href}>
                    <LinkButton.Root
                      href={item.href}
                      variant="gray"
                      className="hover:text-[var(--text-strong-950)]"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.label}
                    </LinkButton.Root>
                    {index < breadcrumbs.length - 1 ? (
                      <RiArrowRightSLine className="size-4 cursor-default text-[var(--text-soft-400)]" />
                    ) : null}
                  </React.Fragment>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-[#efebe5] px-4 py-3 text-[15px] text-[#91887d] lg:min-w-[360px]">
                  <RiSearchLine className="size-4.5 shrink-0" />
                  <span className="truncate">Search or ask</span>
                  <span className="ml-auto hidden text-[13px] lg:block">⌘K</span>
                </div>
                <button className="rounded-full border border-[#efebe5] px-5 py-3 text-[15px] font-medium text-[#625c54]">
                  Ask AI
                </button>
              </div>
            </div>
          </div>

          <div className="px-5 py-8 lg:px-10">
            <div className="max-w-[920px]">
              <div className="text-[15px] font-medium text-[#28b483]">Getting Started</div>
              <h1
                id="introduction"
                className="mt-2 scroll-mt-24 text-[48px] font-semibold leading-[0.98] tracking-[-0.025em] text-[#171717]"
              >
                Quickstart Guide
              </h1>
              <p className="mt-4 text-[18px] leading-8 text-[#6d665d]">
                Start building structured startup kits in under five minutes with a system that keeps
                research, launch assets, positioning, and prompts in one place.
              </p>

              <div id="getting-started" className="mt-10 scroll-mt-24 grid gap-8 md:grid-cols-2">
                {cards.map((card) => (
                  <ContentCard key={card.title} {...card} />
                ))}
              </div>

              <section className="mt-14 rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <div className="mb-5 text-[2rem] font-semibold tracking-[-0.025em] text-[#171717]">
                  Recent <span className="text-[#a1998f]">14</span>
                </div>
                <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex gap-6">
                    {brandingSlides.map((slide) => (
                      <article key={slide.title} className="min-w-[278px] max-w-[278px]">
                        <div
                          className={cn(
                            'relative h-[158px] overflow-hidden rounded-[28px] bg-gradient-to-br shadow-[0_14px_30px_rgba(15,23,42,0.06)]',
                            slide.tone,
                          )}
                        >
                          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-[#171717]">
                            Live
                          </div>
                        </div>
                        <div className="mt-4 text-[18px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#171717]">
                          {slide.title}
                        </div>
                        <div className="mt-2 text-[15px] text-[#8c857b]">{slide.caption}</div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <div id="kit-layers" className="mt-14 scroll-mt-24">
                <div className="text-[15px] font-medium text-[#8f867b]">Kit layers</div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_1fr_1fr]">
                  {colorfulBlocks.map((block) => (
                    <article
                      key={block.title}
                      className={cn(
                        'rounded-[26px] p-6 shadow-[0_14px_28px_rgba(15,23,42,0.05)]',
                        block.tone,
                        block.textTone,
                      )}
                    >
                      <div className="text-[14px] font-medium opacity-75">Interactive module</div>
                      <div className="mt-3 text-[26px] font-semibold leading-[1.02] tracking-[-0.025em]">
                        {block.title}
                      </div>
                      <div className="mt-3 text-[15px] leading-7 opacity-80">{block.text}</div>
                    </article>
                  ))}
                </div>
              </div>

              <section className="mt-14 rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[15px] font-medium text-[#8f867b]">Competitor map</div>
                    <div className="mt-1 text-[28px] font-semibold tracking-[-0.025em] text-[#171717]">
                      Where this kit wins
                    </div>
                  </div>
                  <div className="rounded-full bg-[#ecfbf4] px-3 py-2 text-[13px] font-medium text-[#157f59]">
                    Research-backed
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[22px] border border-[#ece6dd]">
                  <div className="grid grid-cols-[1.2fr_1fr_1fr_1.2fr] border-b border-[#ece6dd] bg-[#fbf9f5] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9d9489]">
                    <div>Option</div>
                    <div>Research depth</div>
                    <div>Speed</div>
                    <div>Founder fit</div>
                  </div>
                  {competitorMap.map((row, index) => (
                    <div
                      key={row.name}
                      className={cn(
                        'grid grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-4 border-b border-[#f1ece6] px-5 py-4 text-[14px] last:border-b-0',
                        index === 2 && 'bg-[#f8fcff]',
                      )}
                    >
                      <div className={cn('font-medium', index === 2 ? 'text-[#171717]' : 'text-[#625c54]')}>
                        {row.name}
                      </div>
                      <div className="text-[#625c54]">{row.depth}</div>
                      <div className="text-[#625c54]">{row.speed}</div>
                      <div className={cn(index === 2 ? 'font-medium text-[#4361ee]' : 'text-[#8b847a]')}>
                        {row.fit}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div id="recommended-next" className="mt-16 scroll-mt-24">
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-[#ece6dd]" />
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8c857b]">
                    Recommended next
                  </div>
                  <div className="h-px flex-1 bg-[#ece6dd]" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {nextCards.map((card, index) => (
                    <article
                      key={card.title}
                      className="rounded-[22px] border border-[#ece6dd] bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
                    >
                      <div className={cn('flex size-12 items-center justify-center rounded-2xl', card.iconTone)}>
                        {index === 0 ? (
                          <RiSparkling2Line className="size-5 text-[#7c3aed]" />
                        ) : index === 1 ? (
                          <RiCompass3Line className="size-5 text-[#10b981]" />
                        ) : (
                          <RiLayoutGridLine className="size-5 text-[#f97316]" />
                        )}
                      </div>
                      <div className="mt-5 text-[18px] font-semibold tracking-[-0.025em] text-[#171717]">
                        {card.title}
                      </div>
                      <div className="mt-2 text-[14px] text-[#7d756b]">{card.meta}</div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-[#ece6dd] pt-6 md:flex-row md:items-center md:justify-between">
                  <button className="inline-flex items-center gap-2 text-[16px] font-medium text-[#625c54] transition hover:text-[#171717]">
                    <RiArrowLeftLine className="size-4.5" />
                    Competitor map
                  </button>
                  <div className="text-[15px] font-medium text-[#8d857b]">Section 7 of 18</div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-[#ddd6cb] bg-white px-5 py-3 text-[16px] font-semibold text-[#171717] transition hover:border-[#cfc6b8] hover:bg-[#faf8f3]">
                    First 50 Customers
                    <RiArrowRightLine className="size-4.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="hidden border-l border-[#efebe5] bg-white px-6 py-8 xl:block">
          <div className="text-[15px] font-medium text-[#7f776d]">On this page</div>
          <div className="mt-6 border-l border-[#e6f2ec] pl-5">
            <div className="space-y-3">
              {pageToc.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'block text-[15px] transition',
                    index === 0 ? 'font-medium text-[#157f59]' : 'text-[#7d756b]',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
