'use client';

import {
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiBankCardLine,
  RiCustomerService2Line,
  RiExchangeDollarLine,
  RiFileLine,
  RiHistoryLine,
  RiLayoutGridLine,
  RiMenuLine,
  RiNotification3Line,
  RiSearchLine,
  RiSettings2Line,
  RiExpandUpDownLine,
} from '@remixicon/react';

import { cn } from '@/lib/utils';

const financeNavMain = [
  { label: 'Dashboard', icon: RiLayoutGridLine, active: true, enabled: true },
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

const tasks = [
  {
    title: 'Consumer protection law in digital products',
    type: 'Course',
    progress: 42,
    time: '15 min left',
    due: 'Due Aug 8',
    priority: 'High priority',
  },
  {
    title: 'SOC2 - Compliance training',
    type: 'Course',
    progress: 68,
    time: '10 min left',
    due: 'Due Aug 9',
    priority: 'High priority',
  },
  {
    title: 'Career paths at Acme',
    type: 'Course',
    progress: 12,
    time: '20 min',
    due: 'Due Aug 17',
    priority: 'Mandatory',
  },
  {
    title: 'User Research 101: Talking to real users',
    type: 'Course',
    progress: 70,
    time: '10 min left',
    due: 'Due Sep 6',
    priority: 'Mandatory',
  },
  {
    title: 'Negotiation skills for SaaS & Tech sales',
    type: 'Course',
    progress: 36,
    time: '30 min',
    due: 'Due Sep 12',
    priority: 'Mandatory',
  },
];

const recentCards = [
  {
    title: 'High-impact demo delivery techniques',
    subtitle: 'Continue learning',
    tone: 'from-[#d6f7a6] via-[#e8ffe2] to-[#cce7ff]',
  },
  {
    title: 'Effective communication in remote teams',
    subtitle: 'Marketing',
    tone: 'from-[#ffddb8] via-[#ff8a5c] to-[#7b2cbf]',
  },
  {
    title: 'Cybersecurity awareness',
    subtitle: '43 min',
    tone: 'from-[#8ae1ff] via-[#d1ecff] to-[#ffe3f2]',
  },
  {
    title: 'Ethical use of AI in legal practice',
    subtitle: 'Edited yesterday',
    tone: 'from-[#ffd7d3] via-[#fff1dc] to-[#fff7f2]',
  },
  {
    title: 'Diversity & inclusion foundations',
    subtitle: '1 hr · 2 steps',
    tone: 'from-[#ced86f] via-[#f5d86b] to-[#f78f59]',
  },
];

const featuredCards = [
  {
    title: 'Managing remote & hybrid teams effectively',
    tone: 'from-[#33c3d1] via-[#fb5528] to-[#f8c130]',
  },
  {
    title: 'Cybersecurity essentials for all employees',
    tone: 'from-[#0f172a] via-[#111827] to-[#374151]',
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-20 rounded-full bg-[#ece8df]">
      <div
        className="h-2 rounded-full bg-[#22c55e]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function ThumbCard({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: string;
}) {
  return (
    <div className="group min-w-[220px] max-w-[220px]">
      <div
        className={cn(
          'relative h-[126px] overflow-hidden rounded-[24px] bg-gradient-to-br p-3 shadow-[0_12px_24px_rgba(15,23,42,0.08)]',
          tone,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium text-[var(--text-strong-950)]">
          Live
        </div>
      </div>
      <div className="mt-3">
        <div className="line-clamp-2 text-[15px] font-semibold text-[var(--text-strong-950)]">
          {title}
        </div>
        <div className="mt-1 text-[13px] text-[var(--text-soft-400)]">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ title, tone }: { title: string; tone: string }) {
  return (
    <div
      className={cn(
        'relative min-h-[180px] overflow-hidden rounded-[30px] bg-gradient-to-br p-7 shadow-[0_18px_36px_rgba(15,23,42,0.08)]',
        tone,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_24%)]" />
      <div className="relative max-w-[14ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
        {title}
      </div>
    </div>
  );
}

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
            active ? 'text-[#4361ee]' : enabled ? 'text-[#667085]' : 'text-[#b1b8c7]',
          )}
        />
        <span className="text-[15px] font-medium">{label}</span>
      </span>
      {active && <RiArrowRightLine className="size-4 text-[#667085]" />}
    </button>
  );
}

export function DashboardPageV3() {
  return (
    <main className="min-h-screen bg-white p-0">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
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
                <div className="text-[16px] font-medium tracking-[-0.025em] text-[#101828]">
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

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[#e6eaf2] px-5 py-4 lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-[40px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)] shadow-[0_10px_18px_rgba(67,97,238,0.18)]">
                  <div className="relative size-5">
                    <span className="absolute left-0 top-0 h-2.5 w-4 rounded-sm bg-white/95 [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]" />
                    <span className="absolute bottom-0 right-0 h-2.5 w-4 rounded-sm bg-white/80 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <button className="flex size-11 items-center justify-center text-[#667085]">
                  <RiSearchLine className="size-5" />
                </button>
                <div className="mx-1 h-8 w-px bg-[#e6eaf2]" />
                <button className="relative flex size-11 items-center justify-center text-[#667085]">
                  <RiNotification3Line className="size-5" />
                  <span className="absolute right-3.5 top-3 size-2 rounded-full bg-[#f04438]" />
                </button>
                <div className="mx-1 h-8 w-px bg-[#e6eaf2]" />
                <button className="flex size-11 items-center justify-center text-[#667085]">
                  <RiMenuLine className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-[#e6eaf2] px-5 py-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-[url('https://alignui.com/images/avatar/illustration/arthur.png')] bg-cover bg-center ring-1 ring-inset ring-[#dbe2ea]" />
              <div>
                <div className="text-[14px] font-semibold text-[#101828]">
                  Arthur Taylor
                </div>
                <div className="mt-0.5 text-[13px] text-[#667085]">
                  Welcome back to Apex
                  <span className="ml-1">👋🏻</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-between border-b border-[#f0ebe3] px-5 py-4 lg:flex lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80')] bg-cover bg-center" />
              <div className="text-[14px] font-medium text-[var(--text-strong-950)]">
                Emma Sundqvist
              </div>
            </div>
            <div className="flex items-center gap-4 text-[13px] text-[var(--text-soft-400)]">
              <span>Need help? View resources</span>
              <div className="relative">
                <RiNotification3Line className="size-5 text-[var(--text-soft-400)]" />
                <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#f04438]" />
              </div>
            </div>
          </div>

          <div className="space-y-10 px-5 py-6 lg:px-8 lg:py-7">
            <div>
              <h1 className="text-[2.1rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                Good morning, Emma
              </h1>
              <p className="mt-1 text-[1.15rem] text-[var(--text-soft-400)]">
                You have 5 things to do today
              </p>
            </div>

            <div className="overflow-hidden rounded-[26px] border border-[#eee7dc] bg-[#fffdfa]">
              <div className="grid grid-cols-[minmax(0,2fr)_112px_150px_130px_140px_32px] gap-4 border-b border-[#eee7dc] px-6 py-3 text-[12px] font-medium text-[var(--text-soft-400)]">
                <div>Assignment</div>
                <div>Type</div>
                <div>Progress</div>
                <div>Date and time</div>
                <div>Priority</div>
                <div />
              </div>
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="grid grid-cols-[minmax(0,2fr)_112px_150px_130px_140px_32px] items-center gap-4 border-b border-[#f2ede6] px-6 py-4 last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[15px] font-semibold text-[var(--text-strong-950)]">
                      {task.title}
                    </div>
                    <div className="mt-1 truncate text-[13px] text-[var(--text-soft-400)]">
                      Understand the legal responsibilities and requirements.
                    </div>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">
                    {task.type}
                  </div>
                  <div className="flex items-center gap-3">
                    <ProgressBar value={task.progress} />
                    <span className="text-[13px] text-[var(--text-soft-400)]">
                      {task.time}
                    </span>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">
                    {task.due}
                  </div>
                  <div className="text-[13px] font-medium text-[var(--text-sub-600)]">
                    {task.priority}
                  </div>
                  <div className="text-center text-[var(--text-soft-400)]">
                    -
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-5 text-[1.9rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                Recent <span className="text-[var(--text-soft-400)]">14</span>
              </div>
              <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-5">
                  {recentCards.map((card) => (
                    <ThumbCard
                      key={card.title}
                      title={card.title}
                      subtitle={card.subtitle}
                      tone={card.tone}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 text-[1.9rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">
                Featured
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {featuredCards.map((card) => (
                  <FeaturedCard
                    key={card.title}
                    title={card.title}
                    tone={card.tone}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
