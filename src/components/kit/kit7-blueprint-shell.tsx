'use client';

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBookOpenLine,
  RiCompass3Line,
  RiFileList3Line,
  RiFocus3Line,
  RiFolderChartLine,
  RiLayoutGridLine,
  RiPencilRuler2Line,
  RiSparkling2Line,
} from '@remixicon/react';

import { cn } from '@/lib/utils';
import { blueprintSections, type BlueprintSection } from '@/components/kit/kit7-blueprint-sections';

const sectionIcons = {
  sparkles: RiSparkling2Line,
  file: RiFileList3Line,
  compass: RiCompass3Line,
  layout: RiLayoutGridLine,
  chart: RiFolderChartLine,
  book: RiBookOpenLine,
  pencil: RiPencilRuler2Line,
} as const;

const grouped = blueprintSections.reduce<Record<string, BlueprintSection[]>>((acc, section) => {
  if (!acc[section.group]) acc[section.group] = [];
  acc[section.group].push(section);
  return acc;
}, {});

function SidebarItem({
  href,
  label,
  icon: Icon,
  active,
  number,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  number: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        'flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left transition',
        active ? 'bg-[#f1f4fa] text-[#344054]' : 'text-[#344054] hover:bg-[#f8fafc]',
      )}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="min-w-[20px] text-[10px] font-medium text-[#98a2b3]">{number}</span>
        <Icon className={cn('size-[18px] shrink-0', active ? 'text-[#4361ee]' : 'text-[#667085]')} />
        <span className="truncate text-[15px] font-medium">{label}</span>
      </span>
      {active ? <RiArrowRightLine className="size-4 shrink-0 text-[#667085]" /> : null}
    </a>
  );
}

export function Kit7BlueprintShell({
  sectionId,
  children,
}: {
  sectionId: string;
  children?: React.ReactNode;
}) {
  const currentIndex = blueprintSections.findIndex((section) => section.id === sectionId);
  const current = currentIndex >= 0 ? blueprintSections[currentIndex] : blueprintSections[0];
  const prev = currentIndex > 0 ? blueprintSections[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < blueprintSections.length - 1 ? blueprintSections[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
        <aside className="hidden w-[224px] shrink-0 border-r border-[#e6eaf2] bg-white px-4 py-6 lg:flex lg:flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[52px] items-center justify-center rounded-[14px] border border-[#dbe4f0] bg-white shadow-[0_10px_18px_rgba(15,23,42,0.06)]">
                <div className="relative h-6 w-8 overflow-hidden rounded-[4px] bg-white">
                  <span className="absolute left-1/2 top-0 h-full w-[7px] -translate-x-1/2 bg-[#1f6feb]" />
                  <span className="absolute left-0 top-1/2 h-[7px] w-full -translate-y-1/2 bg-[#1f6feb]" />
                </div>
              </div>
              <div>
                <div className="text-[16px] font-medium tracking-[-0.04em] text-[#101828]">Finland Startup Visa</div>
                  <div className="mt-0.5 text-[12px] text-[#667085]">by Hangi Vize</div>
              </div>
            </div>
            <div className="flex size-9 items-center justify-center rounded-[14px] border border-[#e4e7ec] bg-white text-[#667085] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
              <RiFocus3Line className="size-4" />
            </div>
          </div>

          <div className="mt-6 border-t border-[#eaecf0]" />

          <div className="mt-7 flex-1 overflow-y-auto pr-1">
            {Object.entries(grouped).map(([group, sections], index) => (
              <div key={group} className={index === 0 ? '' : 'mt-8'}>
                <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">
                  {group}
                </div>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <SidebarItem
                      key={section.id}
                      href={`/kit7-blueprint/${section.id}`}
                      label={section.title}
                      icon={sectionIcons[section.icon as keyof typeof sectionIcons]}
                      number={section.number}
                      active={section.id === current.id}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[#efebe5] bg-white px-5 py-5 lg:px-10">
            <div>
              <div className="text-[14px] font-medium text-[#28b483]">Section {current.number}</div>
              <div className="mt-1 text-[34px] font-semibold tracking-[-0.05em] text-[#171717]">{current.title}</div>
            </div>
          </div>

          <div className="px-5 py-8 lg:px-10">
            {children ?? (
              <iframe
                src={`/kit4-blueprint.html?embed=1&section=${current.id}`}
                title={`ProveKit ${current.title}`}
                className="w-full border-0"
                style={{ height: current.height }}
              />
            )}

            <div className="mt-8 flex flex-col gap-4 border-t border-[#ece6dd] pt-6 md:flex-row md:items-center md:justify-between">
              {prev ? (
                <a
                  href={`/kit7-blueprint/${prev.id}`}
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-[#625c54] transition hover:text-[#171717]"
                >
                  <RiArrowLeftLine className="size-4.5" />
                  {prev.title}
                </a>
              ) : (
                <div />
              )}

              <div className="text-[15px] font-medium text-[#8d857b]">
                Section {current.number} of {blueprintSections.length}
              </div>

              {next ? (
                <a
                  href={`/kit7-blueprint/${next.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-[#ddd6cb] bg-white px-5 py-3 text-[16px] font-semibold text-[#171717] transition hover:border-[#cfc6b8] hover:bg-[#faf8f3]"
                >
                  {next.title}
                  <RiArrowRightLine className="size-4.5" />
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
