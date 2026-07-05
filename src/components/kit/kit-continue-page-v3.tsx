'use client';

import * as React from 'react';
import {
  RiArrowLeftLongLine,
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiArrowRightLongLine,
  RiBankCardLine,
  RiCustomerService2Line,
  RiExchangeDollarLine,
  RiExpandUpDownLine,
  RiFileChartLine,
  RiFileLine,
  RiHistoryLine,
  RiImageCircleLine,
  RiLayoutGridLine,
  RiMore2Line,
  RiPaletteLine,
  RiSettings2Line,
} from '@remixicon/react';
import Image from 'next/image';

import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

const financeNavMain = [
  { label: 'Dashboard', icon: RiLayoutGridLine, active: false, enabled: true },
  { label: 'My Cards', icon: RiBankCardLine, enabled: true },
  { label: 'Transfer', icon: RiArrowLeftRightLine, enabled: true },
  { label: 'Transactions', icon: RiHistoryLine, enabled: true },
  { label: 'Payments', icon: RiFileLine, enabled: false },
  { label: 'Exchange', icon: RiExchangeDollarLine, enabled: false },
];

const financeNavOther = [
  { label: 'Settings', icon: RiSettings2Line, enabled: true },
  { label: 'Support', icon: RiCustomerService2Line, enabled: false },
];

const testimonials = [
  {
    name: 'Arthur Taylor',
    title: 'Director of Implementation',
    quote:
      'We reduced late payments by 90% after using the smart scheduling tools.',
    highlight: 'That alone was worth it.',
    stats: [
      { value: '16%', label: 'Faster invoice approvals' },
      { value: '22%', label: 'More on-time payments' },
      { value: '41%', label: 'Less manual work' },
    ],
  },
  {
    name: 'Sarah Mitchell',
    title: 'Head of Operations',
    quote: 'The automation features saved our team over 20 hours per week.',
    highlight: 'It transformed how we work.',
    stats: [
      { value: '17%', label: 'Faster invoice approvals' },
      { value: '22%', label: 'More on-time payments' },
      { value: '41%', label: 'Less manual work' },
    ],
  },
  {
    name: 'David Chen',
    title: 'CFO at TechCorp',
    quote: 'Invoice management has never been this seamless and efficient.',
    highlight: 'Our cash flow improved significantly.',
    stats: [
      { value: '16%', label: 'Faster invoice approvals' },
      { value: '22%', label: 'More on-time payments' },
      { value: '41%', label: 'Less manual work' },
    ],
  },
  {
    name: 'Emily Rodriguez',
    title: 'Finance Manager',
    quote:
      'The reporting dashboard gives us real-time insights we never had before.',
    highlight: 'Decision-making is now data-driven.',
    stats: [
      { value: '16%', label: 'Faster invoice approvals' },
      { value: '22%', label: 'More on-time payments' },
      { value: '41%', label: 'Less manual work' },
    ],
  },
];

const sections = [
  {
    id: '01',
    section: 'Opportunity Brief',
    sectionName: 'Market entry overview',
    readTime: '8 min read',
    progress: 100,
  },
  {
    id: '02',
    section: 'Product Spec',
    sectionName: 'Offer and workflow scope',
    readTime: '10 min read',
    progress: 100,
  },
  {
    id: '03',
    section: 'Niche Opportunity Map',
    sectionName: 'Audience and segment analysis',
    readTime: '12 min read',
    progress: 82,
  },
  {
    id: '04',
    section: 'Target Markets & Segments',
    sectionName: 'ICP priorities and filters',
    readTime: '8 min read',
    progress: 55,
  },
  {
    id: '05',
    section: 'Tech Stack',
    sectionName: 'Build requirements and tooling',
    readTime: '11 min read',
    progress: 24,
  },
];

const assetGrid = [
  'Full Kit PDF',
  'Brand Kit',
  'Landing Page',
  'Social Media Kit',
  'Legal Templates',
  'Prompt Library',
  'Metrics Sheet',
  'Launch Checklist',
];

function SidebarNavItem({
  label,
  icon: Icon,
  active,
  enabled = true,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  enabled?: boolean;
}) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left transition',
        active
          ? 'bg-[#f1f4fa] text-[#344054]'
          : enabled
            ? 'text-[#344054] hover:bg-[#f8fafc]'
            : 'cursor-default text-[#b1b8c7]',
      )}
    >
      <span className="flex items-center gap-3">
        <Icon
          className={cn(
            'size-[18px]',
            active
              ? 'text-[#4361ee]'
              : enabled
                ? 'text-[#667085]'
                : 'text-[#b1b8c7]',
          )}
        />
        <span className="text-[15px] font-medium">{label}</span>
      </span>
      {active && <RiArrowRightLine className="size-4 text-[#667085]" />}
    </button>
  );
}

function FinanceSidebar() {
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
            <div className="text-[16px] font-medium tracking-[-0.04em] text-[#101828]">
              Apex
            </div>
            <div className="mt-0.5 text-[12px] text-[#667085]">
              Finance &amp; Banking
            </div>
          </div>
        </div>
        <button className="flex size-9 items-center justify-center rounded-[14px] border border-[#e4e7ec] bg-white text-[#667085] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
          <RiExpandUpDownLine className="size-4" />
        </button>
      </div>

      <div className="mt-6 border-t border-[#eaecf0]" />

      <div className="mt-7">
        <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
          Main
        </div>
        <div className="space-y-1">
          {financeNavMain.map((item) => (
            <SidebarNavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={item.active}
              enabled={item.enabled}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
          Others
        </div>
        <div className="space-y-1">
          {financeNavOther.map((item) => (
            <SidebarNavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              enabled={item.enabled}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

function SectionTable() {
  return (
    <div className="w-full overflow-hidden border border-[var(--stroke-soft-200)] bg-white">
      <div className="grid grid-cols-[88px_1.55fr_136px_48px] gap-3 border-b border-[var(--stroke-soft-200)] px-5 py-4 text-[14px] font-medium text-[var(--text-sub-600)]">
        <div>Section</div>
        <div>Description</div>
        <div>Progress</div>
        <div />
      </div>
      {sections.map((row, index) => (
        <React.Fragment key={row.id}>
          <div className="grid grid-cols-[88px_1.55fr_136px_48px] items-center gap-3 px-5 py-4">
            <div>
              <div className="text-[15px] font-semibold text-[var(--text-strong-950)]">
                {row.id}
              </div>
              <div className="mt-1 text-[12px] text-[var(--text-soft-400)]">
                {row.readTime}
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-semibold text-[var(--text-strong-950)]">
                {row.section}
              </div>
              <div className="mt-1 text-[14px] text-[var(--text-sub-600)]">
                {row.sectionName}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-full max-w-[84px] rounded-full bg-[var(--bg-soft-200)]">
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,#4361ee_0%,#7c3aed_100%)]"
                  style={{ width: `${row.progress}%` }}
                />
              </div>
              <span className="text-[13px] text-[var(--text-sub-600)]">
                {row.progress}%
              </span>
            </div>
            <button className="inline-flex size-8 items-center justify-center rounded-full text-[var(--text-soft-400)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]">
              <RiMore2Line className="size-4.5" />
            </button>
          </div>
          {index < sections.length - 1 ? <Divider.Root /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function AssetsGrid() {
  return (
    <div className="overflow-hidden border border-[var(--stroke-soft-200)] bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {assetGrid.map((item, index) => {
          const isMobileLastRow = index >= 6;
          const isDesktopLastRow = index >= 6;
          const isMobileRightColumn = index % 2 === 1;
          const isDesktopRightColumn = index % 3 === 2;

          return (
            <div
              key={item}
              className={cn(
                'flex h-[104px] flex-col items-center justify-center gap-2 border-[var(--stroke-soft-200)] p-4 text-center',
                !isMobileLastRow && 'border-b md:border-b-0',
                !isDesktopLastRow && 'md:border-b',
                !isMobileRightColumn && 'border-r',
                isDesktopRightColumn ? 'md:border-r-0' : 'md:border-r',
              )}
            >
              <div className="flex size-10 items-center justify-center rounded-2xl bg-[var(--bg-weak-50)] text-[var(--primary-base)]">
                {index % 4 === 0 ? (
                  <RiFileChartLine className="size-5" />
                ) : index % 4 === 1 ? (
                  <RiPaletteLine className="size-5" />
                ) : index % 4 === 2 ? (
                  <RiLayoutGridLine className="size-5" />
                ) : (
                  <RiImageCircleLine className="size-5" />
                )}
              </div>
              <div className="text-[14px] font-medium text-[var(--text-strong-950)]">
                {item}
              </div>
            </div>
          );
        })}
        <div className="hidden items-center justify-center p-3 md:flex">
          <span className="text-[14px] text-[var(--text-soft-400)]">
            ... and more
          </span>
        </div>
      </div>
    </div>
  );
}

export function KitContinuePageV3() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isBeginning = activeIndex === 0;
  const isEnd = activeIndex === testimonials.length - 1;
  const completed = sections.filter((item) => item.progress === 100).length;

  return (
    <main className="min-h-screen bg-white p-0">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
        <FinanceSidebar />

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[var(--stroke-soft-200)] bg-white px-5 py-5 lg:px-6 lg:py-6">
            <div className="mx-auto flex max-w-[1180px] flex-col gap-1">
              <div className="relative w-full rounded-t-3xl rounded-b-xl">
                <Image
                  src="https://alignui.com/images/blocks/testimonials-1-logo-1.svg"
                  alt="testimonials logo"
                  width={480}
                  height={480}
                  className="absolute -top-27.5 -right-73 z-1 h-67.75 w-76.5 shrink-0 -translate-x-1/2 lg:-top-50 lg:-right-30 lg:h-100 lg:w-100 xl:-top-70 xl:-right-39 xl:h-120 xl:w-120"
                />
                <div className="absolute bottom-5 left-5 z-10 flex lg:right-12 lg:bottom-12 lg:left-auto">
                  <Image
                    src="https://alignui.com/images/blocks/testimonials-1-image-1.svg"
                    alt="testimonials image"
                    width={104}
                    height={24}
                    className="h-auto w-26 shrink-0"
                  />
                </div>

                <div className="relative min-h-[220px] overflow-hidden rounded-t-3xl rounded-b-xl bg-bg-weak-50 lg:min-h-[300px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className={cn(
                        'absolute inset-0 flex h-full w-full flex-col gap-8 overflow-hidden rounded-t-3xl rounded-b-xl p-5 pb-19 transition-all duration-500 ease-out lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-10',
                        activeIndex === index
                          ? 'translate-x-0 opacity-100'
                          : 'pointer-events-none -translate-x-4 opacity-0',
                      )}
                    >
                      <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
                        <div
                          className={cn(
                            'flex flex-col transition-all duration-500 ease-out lg:gap-0.5',
                            activeIndex === index
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-4 opacity-0',
                          )}
                        >
                          <div className="text-label-md text-text-strong-950">
                            {testimonial.name}
                          </div>
                          <div className="text-label-sm text-text-soft-400">
                            {testimonial.title}
                          </div>
                        </div>
                        <h4
                          className={cn(
                            'text-title-h6 lg:text-title-h5 text-text-sub-600 w-full transition-all duration-500 ease-out lg:w-[62%]',
                            activeIndex === index
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-4 opacity-0',
                          )}
                          style={{
                            transitionDelay:
                              activeIndex === index ? '0.2s' : '0s',
                          }}
                        >
                          {testimonial.quote}{' '}
                          <span className="text-text-strong-950 lg:flex">
                            {testimonial.highlight}
                          </span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-weak-50 flex w-full flex-col gap-4 rounded-t-xl rounded-b-3xl p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-7">
                <div className="relative w-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={testimonial.name} className="w-full shrink-0">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                          {testimonial.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className={cn(
                                'flex flex-col gap-1 pb-4 transition-all duration-500 ease-out lg:pr-8 lg:pb-0',
                                statIndex === testimonial.stats.length - 1
                                  ? ''
                                  : 'border-stroke-soft-200 border-b lg:border-r lg:border-b-0',
                                activeIndex === index
                                  ? 'translate-x-0 opacity-100'
                                  : '-translate-x-4 opacity-0',
                              )}
                              style={{
                                transitionDelay:
                                  activeIndex === index
                                    ? `${0.4 + statIndex * 0.2}s`
                                    : '0s',
                              }}
                            >
                              <div className="text-label-lg text-text-strong-950">
                                {stat.value}
                              </div>
                              <div className="text-label-sm text-text-soft-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveIndex((prev) => Math.max(prev - 1, 0))
                    }
                    disabled={isBeginning}
                    className="border-stroke-soft-200 bg-bg-soft-200 group disabled:bg-bg-weak-50 flex h-10 w-full cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:w-10"
                  >
                    <RiArrowLeftLongLine
                      className={cn(
                        'size-5 transition-all duration-300',
                        isBeginning
                          ? 'text-text-soft-400'
                          : 'text-text-sub-600 group-hover:text-text-sub-600',
                      )}
                    />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((prev) =>
                        Math.min(prev + 1, testimonials.length - 1),
                      )
                    }
                    disabled={isEnd}
                    className="border-stroke-soft-200 bg-bg-soft-200 group disabled:bg-bg-weak-50 flex h-10 w-full cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:w-10"
                  >
                    <RiArrowRightLongLine
                      className={cn(
                        'size-5 transition-all duration-300',
                        isEnd
                          ? 'text-text-soft-400'
                          : 'text-text-sub-600 group-hover:text-text-sub-600',
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="grid gap-5 px-5 py-5 lg:px-6 lg:py-6 xl:grid-cols-[minmax(0,1.28fr)_320px]">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[28px] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                  18 sections
                </div>
                <div className="text-[16px] text-[var(--text-soft-400)]">
                  {completed} completed · {sections.length - completed} remaining
                </div>
              </div>
              <SectionTable />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[28px] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                  Downloads &amp; assets
                </div>
                <LinkButton.Root
                  href="#"
                  className="text-[var(--primary-base)] hover:text-[var(--primary-hover)]"
                >
                  Download all
                </LinkButton.Root>
              </div>
              <AssetsGrid />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
