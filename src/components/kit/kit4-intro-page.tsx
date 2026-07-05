'use client';

import * as React from 'react';
import {
  RiArrowRightLine,
  RiArrowRightSLine,
  RiBookOpenLine,
  RiCompass3Line,
  RiFocus3Line,
  RiFlowChart,
  RiHomeSmile2Line,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiSparkling2Line,
  RiUserVoiceLine,
} from '@remixicon/react';

import { cn } from '@/lib/utils';
import * as LinkButton from '@/components/ui/link-button';

const sidebarGroups = [
  {
    title: 'Main topic',
    items: [
      { label: 'Overview', href: '#overview', icon: RiBookOpenLine, active: true },
      { label: 'What ProveKit does', href: '#what-provekit-does', icon: RiSparkling2Line },
      { label: 'Story generation flow', href: '#pipeline', icon: RiFlowChart },
      { label: 'The market gap', href: '#gap', icon: RiCompass3Line },
    ],
  },
  {
    title: 'Signals',
    items: [
      { label: 'Kit metadata', href: '#metadata', icon: RiPriceTag3Line },
      { label: 'Trust signal', href: '#trust-signal', icon: RiShieldCheckLine },
      { label: 'Why it matters', href: '#why-it-matters', icon: RiUserVoiceLine },
    ],
  },
];

const pageToc = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-provekit-does', label: 'What ProveKit does' },
  { id: 'metadata', label: 'Kit metadata' },
  { id: 'pipeline', label: 'Story generation flow' },
  { id: 'trust-signal', label: 'Trust signal' },
  { id: 'gap', label: 'The market gap' },
  { id: 'why-it-matters', label: 'Why it matters' },
];

const metadata = [
  'Kit: $299',
  'Category: AI / Social Proof / GTM',
  'Target: B2B SaaS 10-200 Employees, Agencies',
  '18 Sections',
  'Market-Researched',
  'Ready to Build',
];

const trustSignals = [
  '97% of B2B buyers trust customer evidence',
  'Zero platforms connect live data to customer approval',
  'Verified story generation in 3 minutes',
];

const pipelineSteps = [
  {
    title: 'Connect',
    detail: 'Stripe / Analytics',
    tone: 'bg-[#fff4ea]',
  },
  {
    title: 'AI Reads',
    detail: 'Real Metrics',
    tone: 'bg-[#eef8ff]',
  },
  {
    title: 'Sends',
    detail: 'Approval Email',
    tone: 'bg-[#f5f0ff]',
  },
  {
    title: 'Customer',
    detail: '2-Click Approves',
    tone: 'bg-[#ecfbf4]',
  },
  {
    title: 'AI Generates',
    detail: 'Verified Story',
    tone: 'bg-[#fff3da]',
  },
  {
    title: 'Publish & Embed',
    detail: 'Live badge ready',
    tone: 'bg-[#f4f5ff]',
  },
];

const gapRows = [
  {
    name: 'TESTIMONIAL.TO',
    issue: 'Collects video testimonials. No data integration. No AI generation. No Stripe.',
  },
  {
    name: 'USEREVIDENCE',
    issue: 'Survey-based verified stats. No Stripe/analytics. No AI story generation. Enterprise pricing.',
  },
  {
    name: 'JASPER / COPY.AI',
    issue: "AI writes copy from prompts. No data source. Nothing is verified. Buyer doesn't trust it.",
  },
  {
    name: 'PROVEKIT · THE GAP',
    issue:
      'Stripe + analytics real metrics · 2-click customer approval · AI writes verified story · Verified badge · One product.',
    highlight: true,
  },
];

function SidebarItem({
  label,
  href,
  icon: Icon,
  active,
}: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
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

function IntroSidebar() {
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
            <div className="text-[16px] font-medium tracking-[-0.04em] text-[#101828]">ProveKit</div>
            <div className="mt-0.5 text-[12px] text-[#667085]">KitStart Blueprint · Page 1</div>
          </div>
        </div>
        <div className="flex size-9 items-center justify-center rounded-[14px] border border-[#e4e7ec] bg-white text-[#667085] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
          <RiFocus3Line className="size-4" />
        </div>
      </div>

      <div className="mt-6 border-t border-[#eaecf0]" />

      <div className="mt-7">
        {sidebarGroups.map((group, groupIndex) => (
          <div key={group.title} className={groupIndex === 0 ? '' : 'mt-8'}>
            <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => (
                <SidebarItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
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

function HighlightCard({
  tone,
  eyebrow,
  title,
  body,
}: {
  tone: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article className={cn('rounded-[24px] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]', tone)}>
      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8f867b]">{eyebrow}</div>
      <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.04em] text-[#171717]">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-[#5f594f]">{body}</p>
    </article>
  );
}

export function Kit4IntroPage() {
  const breadcrumbs = [
    { label: 'Dashboard', href: '/dash3' },
    { label: 'Kits', href: '/kit-main' },
    { label: 'ProveKit Blueprint', href: '/kit4' },
    { label: 'Intro', href: '/kit4-intro' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
        <IntroSidebar />

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[#efebe5] bg-white px-5 py-5 lg:px-10">
            <div className="flex flex-col gap-5">
              <nav className="flex items-center gap-[6px] rounded-lg bg-[var(--bg-weak-50)] px-2.5 py-2">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <RiHomeSmile2Line className="size-4 text-[var(--text-sub-600)] hover:text-[var(--text-strong-950)]" />
                </a>
                <RiArrowRightSLine className="size-4 cursor-default text-[var(--text-soft-400)]" />
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
                  <div className="text-[16px] font-medium tracking-[-0.04em] text-[#101828]">KitStart Blueprint Series</div>
                  <div className="mt-0.5 text-[12px] text-[#667085]">ProveKit · Confidential · Page 1</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-8 lg:px-10">
            <div className="max-w-[980px]">
              <section id="overview" className="scroll-mt-24">
                <div className="text-[15px] font-medium text-[#28b483]">KitStart</div>
                <h1 className="mt-2 text-[50px] font-semibold leading-[0.96] tracking-[-0.06em] text-[#171717]">
                  PROVEKIT
                </h1>
                <p className="mt-3 text-[22px] font-medium tracking-[-0.03em] text-[#159685]">
                  Verified Customer Story Engine for B2B SaaS
                </p>
                <p className="mt-6 max-w-[780px] text-[18px] leading-8 text-[#625c54]">
                  Connect Stripe and your analytics. ProveKit reads the real revenue impact your
                  customers experienced, sends them a two-click approval form, and generates a
                  verified case study with a live data badge in 3 minutes. No calls. No writers. No
                  3-week approval cycle.
                </p>
              </section>

              <section id="metadata" className="mt-10 scroll-mt-24">
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {metadata.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        'rounded-[18px] border px-4 py-3 text-[14px] font-medium',
                        index === 0
                          ? 'border-[#19a777] bg-[#19a777] text-white'
                          : index === 1
                            ? 'border-[#dce9ea] bg-[#10303c] text-white'
                            : index === 2
                              ? 'border-[#112a38] bg-[#081827] text-white'
                              : 'border-[#ece6dd] bg-[#fbf9f5] text-[#625c54]',
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section id="what-provekit-does" className="mt-14 scroll-mt-24">
                <div className="grid gap-4 lg:grid-cols-3">
                  <HighlightCard
                    tone="bg-[#fff4ea]"
                    eyebrow="Input"
                    title="Real metrics in"
                    body="ProveKit starts with Stripe and analytics inputs so the story begins with customer truth, not prompt guesswork."
                  />
                  <HighlightCard
                    tone="bg-[#eef8ff]"
                    eyebrow="Mechanism"
                    title="Two-click approval"
                    body="Customers approve the proof directly, reducing the painful back-and-forth that usually blocks case study publishing."
                  />
                  <HighlightCard
                    tone="bg-[#f5f0ff]"
                    eyebrow="Output"
                    title="Verified story out"
                    body="The final output is a structured, trust-heavy story with a live badge the buyer can immediately understand."
                  />
                </div>
              </section>

              <section id="pipeline" className="mt-14 scroll-mt-24">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[15px] font-medium text-[#8f867b]">ProveKit · Verified Story Generation Pipeline</div>
                    <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.05em] text-[#171717]">
                      Story generation flow
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pipelineSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className={cn(
                        'relative rounded-[22px] border border-[#ece6dd] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]',
                        step.tone,
                      )}
                    >
                      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8f867b]">
                        Step {index + 1}
                      </div>
                      <div className="mt-3 text-[22px] font-semibold tracking-[-0.04em] text-[#171717]">
                        {step.title}
                      </div>
                      <div className="mt-2 text-[16px] text-[#625c54]">{step.detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="trust-signal" className="mt-14 scroll-mt-24">
                <div className="rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <div className="text-[15px] font-medium text-[#8f867b]">Trust signal</div>
                  <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-[#171717]">
                    Why this intro page matters
                  </h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {trustSignals.map((item, index) => (
                      <div
                        key={item}
                        className={cn(
                          'rounded-[22px] p-5',
                          index === 0 ? 'bg-[#ecfbf4]' : index === 1 ? 'bg-[#fff4ea]' : 'bg-[#f4f5ff]',
                        )}
                      >
                        <div className="text-[32px] font-semibold tracking-[-0.06em] text-[#171717]">
                          {index === 0 ? '97%' : index === 1 ? '0' : '3 min'}
                        </div>
                        <p className="mt-3 text-[15px] leading-7 text-[#625c54]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="gap" className="mt-14 scroll-mt-24 rounded-[28px] border border-[#ece6dd] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                <div className="text-[15px] font-medium text-[#8f867b]">The Gap No One Has Filled</div>
                <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-[#171717]">
                  Where ProveKit is different
                </h2>

                <div className="mt-6 overflow-hidden rounded-[22px] border border-[#ece6dd]">
                  <div className="grid grid-cols-[0.95fr_2fr] border-b border-[#ece6dd] bg-[#fbf9f5] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9d9489]">
                    <div>Option</div>
                    <div>What it misses</div>
                  </div>
                  {gapRows.map((row) => (
                    <div
                      key={row.name}
                      className={cn(
                        'grid grid-cols-[0.95fr_2fr] gap-5 border-b border-[#f1ece6] px-5 py-4 text-[14px] last:border-b-0',
                        row.highlight && 'bg-[#f8fcff]',
                      )}
                    >
                      <div className={cn('font-semibold', row.highlight ? 'text-[#171717]' : 'text-[#625c54]')}>
                        {row.name}
                      </div>
                      <div className={cn(row.highlight ? 'font-medium text-[#4361ee]' : 'text-[#625c54]')}>
                        {row.issue}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="why-it-matters" className="mt-14 scroll-mt-24 pb-10">
                <div className="rounded-[28px] bg-[linear-gradient(135deg,#fffbf2_0%,#fff7ed_100%)] p-6">
                  <div className="text-[15px] font-medium text-[#8f867b]">Why it matters</div>
                  <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.05em] text-[#171717]">
                    First-page takeaway
                  </h2>
                  <p className="mt-4 max-w-[760px] text-[17px] leading-8 text-[#625c54]">
                    The first page positions ProveKit as a tightly-scoped B2B SaaS kit that solves
                    one specific trust problem: turning real customer revenue outcomes into
                    publishable proof without manual case-study production. The page does not sell
                    “more AI.” It sells verified evidence, faster approval, and one connected
                    workflow.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
