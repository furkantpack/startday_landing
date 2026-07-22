'use client';

import * as React from 'react';
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiBookOpenLine,
  RiCheckboxCircleLine,
  RiCompass3Line,
  RiExpandUpDownLine,
  RiFileList3Line,
  RiFolderChartLine,
  RiGalleryLine,
  RiHomeSmile2Line,
  RiLayoutGridLine,
  RiPencilRuler2Line,
  RiSparkling2Line,
} from '@remixicon/react';

import { cn } from '@/lib/utils';
import * as LinkButton from '@/components/ui/link-button';

const lessonGroups = [
  {
    title: 'Main topic',
    items: [
      { label: 'Introduction', icon: RiBookOpenLine, href: '#introduction', active: true },
      { label: 'Getting started', icon: RiSparkling2Line, href: '#getting-started' },
      { label: 'Kit layers', icon: RiLayoutGridLine, href: '#kit-layers' },
      { label: 'Competitor map', icon: RiCompass3Line, href: '#competitor-map' },
    ],
  },
  {
    title: 'Deep dive',
    items: [
      { label: 'Validation brief', icon: RiFolderChartLine, href: '#kit-layers' },
      { label: 'Launch prompts', icon: RiPencilRuler2Line, href: '#kit-layers' },
      { label: 'Recommended next', icon: RiCheckboxCircleLine, href: '#recommended-next' },
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
  { id: 'competitor-map', label: 'Competitor map' },
  { id: 'recommended-next', label: 'Recommended next' },
];

const nextCards = [
  {
    title: 'First 50 Customers',
    meta: 'Section 08 · 6 min read',
    iconTone: 'bg-[#d9c2ff]',
  },
  {
    title: 'Competitor map',
    meta: 'Section 06 · 5 min read',
    iconTone: 'bg-[#d2f5e5]',
  },
  {
    title: 'Conversion Funnels',
    meta: 'Section 09 · 7 min read',
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

function TopicSidebarItem({
  label,
  icon: Icon,
  href,
  active,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        'flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left transition',
        active ? 'bg-[#f1f4fa] text-[#344054]' : 'text-[#344054] hover:bg-[#f8fafc]',
      )}
    >
      <span className="flex items-center gap-3">
        <Icon className={cn('size-[18px]', active ? 'text-[#4361ee]' : 'text-[#667085]')} />
        <span className="text-[15px] font-medium">{label}</span>
      </span>
      {active ? <RiArrowRightLine className="size-4 text-[#667085]" /> : null}
    </a>
  );
}

function TopicSidebar() {
  return (
    <aside className="hidden w-[224px] shrink-0 border-r border-[#e6eaf2] bg-white px-4 py-6 lg:flex lg:flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-[42px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)] shadow-[0_10px_18px_rgba(67,97,238,0.18)]">
            <div className="relative size-5">
              <span className="absolute left-0 top-0 h-2.5 w-4 rounded-sm bg-white/95 [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]" />
              <span className="absolute bottom-0 right-0 h-2.5 w-4 rounded-sm bg-white/80 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
            </div>
          </div>
          <div>
            <div className="text-[16px] font-medium tracking-[-0.025em] text-[#101828]">Branding Kit</div>
            <div className="mt-0.5 text-[12px] text-[#667085]">Section 07 · Competitor map</div>
          </div>
        </div>
        <button className="flex size-9 items-center justify-center rounded-[14px] border border-[#e4e7ec] bg-white text-[#667085] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
          <RiExpandUpDownLine className="size-4" />
        </button>
      </div>

      <div className="mt-6 border-t border-[#eaecf0]" />

      <div className="mt-7">
        {lessonGroups.map((group, groupIndex) => (
          <div key={group.title} className={groupIndex === 0 ? '' : 'mt-8'}>
            <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => (
                <TopicSidebarItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  active={item.active}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 border-t border-[#eaecf0] pt-6">
          <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
            On this page
          </div>
          <div className="border-l border-[#e6f2ec] pl-4">
            <div className="space-y-3">
              {pageToc.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'block text-[14px] transition',
                    index === 0 ? 'font-medium text-[#157f59]' : 'text-[#7d756b]',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

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

export function KitLmsPageV2() {
  const breadcrumbs = [
    { label: 'Dashboard', href: '/dash3' },
    { label: 'Kits', href: '/kit-main' },
    { label: 'Branding Kit', href: '/kit3' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
        <TopicSidebar />

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[#efebe5] bg-white px-5 py-5 lg:px-10">
            <div className="flex flex-col gap-5">
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
                <div className="flex size-[42px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)] shadow-[0_10px_18px_rgba(67,97,238,0.18)]">
                  <div className="relative size-5">
                    <span className="absolute left-0 top-0 h-2.5 w-4 rounded-sm bg-white/95 [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]" />
                    <span className="absolute bottom-0 right-0 h-2.5 w-4 rounded-sm bg-white/80 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
                  </div>
                </div>
                <div>
                  <div className="text-[16px] font-medium tracking-[-0.025em] text-[#101828]">Competitor Map</div>
                  <div className="mt-0.5 text-[12px] text-[#667085]">Branding Kit · Section 07</div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[calc(100vh-88px)]">
            <div className="min-w-0 px-5 py-8 lg:px-10">
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

                <section
                  id="competitor-map"
                  className="mt-14 rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                >
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
          </div>
        </section>
      </div>
    </main>
  );
}
