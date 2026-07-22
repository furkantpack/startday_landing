'use client';

import {
  RiArrowRightLine,
  RiBookMarkedLine,
  RiCompass3Line,
  RiFolderSettingsLine,
  RiHome5Line,
  RiNotification3Line,
  RiSearchLine,
  RiSettings2Line,
} from '@remixicon/react';

import { cn } from '@/lib/utils';

const sidebarMain = [
  { label: 'Home', icon: RiHome5Line, active: true },
  { label: 'Search', icon: RiSearchLine },
  { label: 'Discover', icon: RiCompass3Line },
  { label: 'Create', icon: RiBookMarkedLine },
];

const categories = [
  { label: 'General', tone: 'bg-[#32d583]' },
  { label: 'Engineering', tone: 'bg-[#f79009]' },
  { label: 'Culture & Values', tone: 'bg-[#f044a7]' },
  { label: 'Design', tone: 'bg-[#53b1fd]' },
];

const tasks = [
  { title: 'Consumer protection law in digital products', type: 'Course', progress: 42, time: '15 min left', due: 'Due Aug 8', priority: 'High priority' },
  { title: 'SOC2 — Compliance training', type: 'Course', progress: 68, time: '10 min left', due: 'Due Aug 9', priority: 'High priority' },
  { title: 'Career paths at Acme', type: 'Course', progress: 12, time: '20 min', due: 'Due Aug 17', priority: 'Mandatory' },
  { title: 'User Research 101: Talking to real users', type: 'Course', progress: 70, time: '10 min left', due: 'Due Sep 6', priority: 'Mandatory' },
  { title: 'Negotiation skills for SaaS & Tech sales', type: 'Course', progress: 36, time: '30 min', due: 'Due Sep 12', priority: 'Mandatory' },
];

const recentCards = [
  { title: 'High-impact demo delivery techniques', subtitle: 'Continue learning', tone: 'from-[#d6f7a6] via-[#e8ffe2] to-[#cce7ff]' },
  { title: 'Effective communication in remote teams', subtitle: 'Marketing', tone: 'from-[#ffddb8] via-[#ff8a5c] to-[#7b2cbf]' },
  { title: 'Cybersecurity awareness', subtitle: '43 min', tone: 'from-[#8ae1ff] via-[#d1ecff] to-[#ffe3f2]' },
  { title: 'Ethical use of AI in legal practice', subtitle: 'Edited yesterday', tone: 'from-[#ffd7d3] via-[#fff1dc] to-[#fff7f2]' },
  { title: 'Diversity & inclusion foundations', subtitle: '1 hr · 2 steps', tone: 'from-[#ced86f] via-[#f5d86b] to-[#f78f59]' },
];

const featuredCards = [
  { title: 'Managing remote & hybrid teams effectively', tone: 'from-[#33c3d1] via-[#fb5528] to-[#f8c130]' },
  { title: 'Cybersecurity essentials for all employees', tone: 'from-[#0f172a] via-[#111827] to-[#374151]' },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-20 rounded-full bg-[#ece8df]">
      <div className="h-2 rounded-full bg-[#22c55e]" style={{ width: `${value}%` }} />
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
      <div className={cn('relative h-[126px] overflow-hidden rounded-[24px] bg-gradient-to-br p-3 shadow-[0_12px_24px_rgba(15,23,42,0.08)]', tone)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium text-[var(--text-strong-950)]">
          Live
        </div>
      </div>
      <div className="mt-3">
        <div className="line-clamp-2 text-[15px] font-semibold text-[var(--text-strong-950)]">{title}</div>
        <div className="mt-1 text-[13px] text-[var(--text-soft-400)]">{subtitle}</div>
      </div>
    </div>
  );
}

function FeaturedCard({ title, tone }: { title: string; tone: string }) {
  return (
    <div className={cn('relative min-h-[180px] overflow-hidden rounded-[30px] bg-gradient-to-br p-7 shadow-[0_18px_36px_rgba(15,23,42,0.08)]', tone)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_24%)]" />
      <div className="relative max-w-[14ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
        {title}
      </div>
    </div>
  );
}

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fdfcf9_0%,#fbfaf7_100%)] p-4 lg:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1480px] overflow-hidden rounded-[32px] border border-[#e9e2d8] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:min-h-[calc(100vh-3rem)]">
        <aside className="hidden w-[250px] flex-col border-r border-[#eee7dc] bg-[#fcfbf8] px-4 py-5 lg:flex">
          <div className="flex items-center justify-between rounded-2xl px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#4d6bff_0%,#4361ee_100%)] text-white shadow-[0_8px_18px_rgba(67,97,238,0.24)]">
                ✦
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[var(--text-strong-950)]">Acme</div>
                <div className="text-[12px] text-[var(--text-soft-400)]">Workspace</div>
              </div>
            </div>
            <RiArrowRightLine className="size-4 rotate-90 text-[var(--text-soft-400)]" />
          </div>

          <div className="mt-5 space-y-1">
            {sidebarMain.map((item) => (
              <button
                key={item.label}
                className={cn(
                  'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium transition',
                  item.active
                    ? 'bg-[#f2f0ec] text-[var(--text-strong-950)]'
                    : 'text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]',
                )}
              >
                <item.icon className="size-4.5" />
                {item.label}
              </button>
            ))}
            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]">
              <span className="flex items-center gap-3">
                <RiFolderSettingsLine className="size-4.5" />
                Manage
              </span>
              <RiArrowRightLine className="size-4 rotate-90" />
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]">
              <span className="flex items-center gap-3">
                <RiSettings2Line className="size-4.5" />
                Settings
              </span>
              <RiArrowRightLine className="size-4 rotate-90" />
            </button>
          </div>

          <div className="mt-10 space-y-2">
            {categories.map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
              >
                <span className="flex items-center gap-3">
                  <span className={cn('size-4 rounded-md', item.tone)} />
                  {item.label}
                </span>
                <RiArrowRightLine className="size-4 rotate-90" />
              </button>
            ))}
            <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]">
              <span className="text-[18px] leading-none">＋</span>
              Browse
            </button>
          </div>

          <div className="mt-auto">
            <button className="w-full rounded-2xl bg-[#141414] px-4 py-3 text-[14px] font-medium text-white shadow-[0_16px_28px_rgba(20,20,20,0.16)]">
              New
            </button>
          </div>
        </aside>

        <section className="min-w-0 flex-1 bg-white">
          <div className="flex items-center justify-between border-b border-[#f0ebe3] px-5 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80')] bg-cover bg-center" />
              <div className="text-[14px] font-medium text-[var(--text-strong-950)]">Emma Sundqvist</div>
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
              <p className="mt-1 text-[1.15rem] text-[var(--text-soft-400)]">You have 5 things to do today</p>
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
                    <div className="truncate text-[15px] font-semibold text-[var(--text-strong-950)]">{task.title}</div>
                    <div className="mt-1 truncate text-[13px] text-[var(--text-soft-400)]">
                      Understand the legal responsibilities and requirements.
                    </div>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">{task.type}</div>
                  <div className="flex items-center gap-3">
                    <ProgressBar value={task.progress} />
                    <span className="text-[13px] text-[var(--text-soft-400)]">{task.time}</span>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">{task.due}</div>
                  <div className="text-[13px] font-medium text-[var(--text-sub-600)]">{task.priority}</div>
                  <div className="text-center text-[var(--text-soft-400)]">–</div>
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
                    <ThumbCard key={card.title} title={card.title} subtitle={card.subtitle} tone={card.tone} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 text-[1.9rem] font-semibold tracking-[-0.025em] text-[var(--text-strong-950)]">Featured</div>
              <div className="grid gap-5 lg:grid-cols-2">
                {featuredCards.map((card) => (
                  <FeaturedCard key={card.title} title={card.title} tone={card.tone} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
