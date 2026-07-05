'use client';

import * as React from 'react';
import {
  RiDownloadLine,
  RiFileChartLine,
  RiFolderOpenLine,
  RiGlobalLine,
  RiImageCircleLine,
  RiLayoutGridLine,
  RiMore2Line,
  RiPaletteLine,
} from '@remixicon/react';

import * as Divider from '@/components/ui/divider';
import * as LinkButton from '@/components/ui/link-button';
import { cn } from '@/lib/utils';

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

const heroStats = [
  {
    badge: 'Completed',
    value: '2',
    label: 'Sections complete',
    description: 'Core overview finished',
    tone: 'bg-[#eef8ff] text-[#174ea6]',
  },
  {
    badge: 'Remaining',
    value: '12',
    label: 'Still to review',
    description: 'Includes assets and prompts',
    tone: 'bg-[#ecfbf4] text-[#0d8f62]',
  },
  {
    badge: 'Done',
    value: '33%',
    label: 'Overall progress',
    description: 'Section 7 of 18',
    tone: 'bg-[#f4ecff] text-[#7c3aed]',
  },
];

function ProgressTrack({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-[var(--bg-soft-200)]">
      <div
        className="h-2 rounded-full bg-[linear-gradient(90deg,#7c3aed_0%,#8b5cf6_55%,#c4b5fd_100%)]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function SectionTable() {
  return (
    <div className="w-full">
      <div className="overflow-hidden border border-[var(--stroke-soft-200)] bg-white rounded-none">
        <div className="grid grid-cols-[90px_1.45fr_150px_56px] gap-4 border-b border-[var(--stroke-soft-200)] px-6 py-4 text-[14px] font-medium text-[var(--text-sub-600)]">
          <div>Section</div>
          <div>Description</div>
          <div>Progress</div>
          <div />
        </div>
        {sections.map((row, index) => (
          <React.Fragment key={row.id}>
            <div className="grid grid-cols-[90px_1.45fr_150px_56px] items-center gap-4 px-6 py-5">
              <div>
                <div className="text-[15px] font-semibold text-[var(--text-strong-950)]">{row.id}</div>
                <div className="mt-1 text-[12px] text-[var(--text-soft-400)]">{row.readTime}</div>
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold text-[var(--text-strong-950)]">{row.section}</div>
                <div className="mt-1 text-[14px] text-[var(--text-sub-600)]">{row.sectionName}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-full max-w-[88px] rounded-full bg-[var(--bg-soft-200)]">
                  <div
                    className="h-2 rounded-full bg-[linear-gradient(90deg,#4361ee_0%,#7c3aed_100%)]"
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
                <span className="text-[13px] text-[var(--text-sub-600)]">{row.progress}%</span>
              </div>
              <button className="inline-flex size-9 items-center justify-center rounded-full text-[var(--text-soft-400)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]">
                <RiMore2Line className="size-5" />
              </button>
            </div>
            {index < sections.length - 1 ? <Divider.Root /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function AssetsGrid() {
  return (
    <div className="overflow-hidden border border-[var(--stroke-soft-200)] bg-white rounded-none">
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
                'flex h-[108px] flex-col items-center justify-center gap-2 border-[var(--stroke-soft-200)] p-4 text-center',
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
              <div className="text-[14px] font-medium text-[var(--text-strong-950)]">{item}</div>
            </div>
          );
        })}
        <div className="hidden items-center justify-center p-3 md:flex">
          <span className="text-[14px] text-[var(--text-soft-400)]">... and more</span>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  badge,
  value,
  label,
  description,
  tone,
}: {
  badge: string;
  value: string;
  label: string;
  description: string;
  tone: string;
}) {
  return (
    <div className="rounded-none border border-[var(--stroke-soft-200)] bg-white px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.03)]">
      <div className={cn('mb-3 h-6 w-fit rounded-[8px] px-2 py-1 text-[12px] font-medium', tone)}>{badge}</div>
      <div className="text-[2rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">{value}</div>
      <div className="mt-1 text-[14px] font-medium text-[var(--text-sub-600)]">{label}</div>
      <div className="mt-2 max-w-[11ch] text-[13px] leading-6 text-[var(--text-soft-400)]">{description}</div>
    </div>
  );
}

export function KitContinuePage() {
  const completed = sections.filter((item) => item.progress === 100).length;
  const remaining = 12;
  const done = 33;

  return (
    <main className="min-h-screen bg-white px-4 py-5 lg:px-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden bg-white">
        <section className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#fbfaf7_0%,#f7f4ef_100%)] px-6 py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="text-[15px] font-medium text-[var(--text-soft-400)]">Welcome back, James</div>
                <div className="mt-1 text-[3rem] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--text-strong-950)]">
                  Kleo
                </div>
                <div className="mt-2 text-[20px] text-[var(--primary-base)]">AI Agent · Kit #09 · By KitChef</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['In Progress', '18 Sections', 'Lifetime Access', 'PDF Included'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-[var(--text-sub-600)] ring-1 ring-inset ring-[var(--stroke-soft-200)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-[18px] border border-[var(--stroke-soft-200)] bg-white px-5 py-3.5 text-[16px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)]">
                  <span className="inline-flex items-center gap-2">
                    <RiDownloadLine className="size-4.5" />
                    Download PDF
                  </span>
                </button>
                <button className="rounded-[18px] border border-[var(--stroke-soft-200)] bg-[var(--primary-base)] px-5 py-3.5 text-[16px] font-medium text-white transition hover:bg-[var(--primary-hover)]">
                  Continue &gt; Section 07
                </button>
              </div>
            </div>

            <div className="rounded-none bg-white px-5 py-5 ring-1 ring-inset ring-[var(--stroke-soft-200)]">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center">
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <StatCard key={stat.badge} {...stat} />
                  ))}
                </div>

                <div className="rounded-none border border-[var(--stroke-soft-200)] bg-white px-5 py-5">
                  <div className="mb-2 flex items-center justify-between text-[14px] text-[var(--text-sub-600)]">
                    <span>Your progress</span>
                    <span>Section 7 of 18</span>
                  </div>
                  <ProgressTrack value={done} />
                  <div className="mt-3 flex gap-1.5">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span
                        key={index}
                        className={cn(
                          'h-1.5 flex-1 rounded-full',
                          index < 7 ? 'bg-[#8b5cf6]' : 'bg-[var(--bg-soft-200)]',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 px-6 py-6 lg:px-8 lg:py-7 xl:grid-cols-[minmax(0,1.15fr)_360px]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[28px] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">18 sections</div>
              <div className="text-[18px] text-[var(--text-soft-400)]">
                {completed} completed · {sections.length - completed} remaining
              </div>
            </div>
            <SectionTable />
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[28px] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                Downloads &amp; assets
              </div>
              <LinkButton.Root href="#" className="text-[var(--primary-base)] hover:text-[var(--primary-hover)]">
                Download all
              </LinkButton.Root>
            </div>
            <AssetsGrid />
          </div>
        </section>
      </div>
    </main>
  );
}
