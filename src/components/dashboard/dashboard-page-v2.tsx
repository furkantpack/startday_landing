'use client';

import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiBookOpenLine,
  RiCompass3Line,
  RiGridLine,
  RiHome5Line,
  RiPushpin2Line,
  RiSearchLine,
  RiSettings3Line,
} from '@remixicon/react';

import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', icon: RiHome5Line, active: true },
  { label: 'Search', icon: RiSearchLine },
  { label: 'Discover', icon: RiCompass3Line },
  { label: 'My library', icon: RiGridLine },
  { label: 'Create', icon: RiBookOpenLine },
];

const manageItems = [
  { label: 'Manage', icon: RiGridLine },
  { label: 'Settings', icon: RiSettings3Line },
];

const todoCards = [
  {
    title: 'Next up in Compliance Foundations',
    subtitle: 'Step 1 of 4 · Compliance training that...',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Next up in Evaluating Tech',
    subtitle: 'Step 1 of 4 · Basics of AI',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Next up in Future Leaders Academy',
    subtitle: 'Step 1 of 7 · How to be a good mentor',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
  },
];

const recents = [
  {
    title: 'Sales coaching fundamentals',
    subtitle: 'Continue learning',
    image:
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    badge: 'Program',
  },
  {
    title: 'Effective communication in remote teams',
    subtitle: 'Marketing',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live',
  },
  {
    title: 'Cybersecurity awareness',
    subtitle: '43 min',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    badge: 'Completed',
  },
  {
    title: 'Ethical use of AI in legal practice',
    subtitle: 'Edited yesterday',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    badge: 'Edit',
  },
  {
    title: 'Diversity & inclusion foundations',
    subtitle: '1 hr · 2 steps',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Program',
  },
];

function SidebarItem({
  label,
  icon: Icon,
  active,
  trailing,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  trailing?: boolean;
}) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[16px] font-medium transition',
        active
          ? 'bg-[#fff1ea] text-[#171717]'
          : 'text-[#6b655d] hover:bg-[#f7f4ef] hover:text-[#171717]',
      )}
    >
      <span className="flex items-center gap-3">
        <Icon className="size-5" />
        {label}
      </span>
      {trailing ? <RiArrowDownSLine className="size-4 text-[#9c958b]" /> : null}
    </button>
  );
}

function MiniCourseCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="min-w-0">
      <div className="relative overflow-hidden rounded-[28px]">
        <img src={image} alt="" className="h-[160px] w-full object-cover" />
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[14px] font-semibold text-[#171717] shadow-[0_8px_20px_rgba(15,23,42,0.12)]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex size-4 items-center justify-center rounded-md border border-[#d9d2c7]">
              <span className="block size-2 rounded-sm bg-[#171717]" />
            </span>
            Program
          </span>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-[17px] font-semibold tracking-[-0.03em] text-[#171717]">{title}</div>
        <div className="mt-1 text-[15px] text-[#7f786f]">{subtitle}</div>
      </div>
    </div>
  );
}

function RecentCard({
  image,
  badge,
  title,
  subtitle,
}: {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="min-w-[210px] max-w-[210px]">
      <div className="relative overflow-hidden rounded-[24px]">
        <img src={image} alt="" className="h-[108px] w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#171717] shadow-[0_8px_18px_rgba(15,23,42,0.12)]">
          {badge}
        </div>
      </div>
      <div className="mt-3 text-[15px] font-semibold leading-[1.25] text-[#171717]">{title}</div>
      <div className="mt-1 text-[13px] text-[#8c857b]">{subtitle}</div>
    </div>
  );
}

function FeaturedCard({
  title,
  image,
  dark,
}: {
  title: string;
  image: string;
  dark?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[34px]">
      <img src={image} alt="" className="h-[330px] w-full object-cover" />
      <div
        className={cn(
          'absolute inset-0',
          dark
            ? 'bg-[linear-gradient(90deg,rgba(17,24,39,0.45)_0%,rgba(17,24,39,0.28)_45%,rgba(17,24,39,0.1)_100%)]'
            : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0)_100%)]',
        )}
      />
      <div className="absolute inset-y-0 left-0 flex w-full max-w-[52%] items-center px-10">
        <div>
          <div className={cn('max-w-[12ch] text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.06em]', dark ? 'text-white' : 'text-white')}>
            {title}
          </div>
          <div className="mt-8 flex gap-4">
            <button className={cn('rounded-2xl px-6 py-3 text-[16px] font-semibold', dark ? 'bg-white text-[#111827]' : 'bg-[#111111] text-white')}>
              Start
            </button>
            <button className={cn('rounded-2xl px-6 py-3 text-[16px] font-semibold', dark ? 'bg-white/18 text-white backdrop-blur-sm' : 'bg-white/88 text-[#171717]')}>
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPageV2() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[288px] flex-col border-r border-[#efebe5] bg-white px-6 py-5 lg:flex">
          <div className="flex items-center gap-3 px-1">
            <div className="flex size-7 items-center justify-center rounded-md bg-[#111111] text-[11px] font-semibold text-white">
              LS
            </div>
            <div className="flex items-center gap-1 text-[16px] font-semibold text-[#171717]">
              The Learning Stack
              <RiArrowDownSLine className="size-4 text-[#928b82]" />
            </div>
          </div>

          <div className="mt-8 space-y-1">
            {navItems.map((item) => (
              <SidebarItem key={item.label} label={item.label} icon={item.icon} active={item.active} />
            ))}
            {manageItems.map((item) => (
              <SidebarItem key={item.label} label={item.label} icon={item.icon} trailing />
            ))}
          </div>

          <div className="mt-10 border-t border-[#efebe5] pt-8">
            <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-[16px] font-medium text-[#6b655d] transition hover:bg-[#f7f4ef] hover:text-[#171717]">
              <span className="inline-flex size-7 items-center justify-center rounded-full border border-[#ddd6cb] text-[20px] leading-none">
                +
              </span>
              Browse teamspaces
            </button>
          </div>

          <div className="mt-auto pt-6">
            <div className="overflow-hidden rounded-[44px]">
              <img
                src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="h-[230px] w-full object-cover"
              />
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 bg-white px-6 py-5 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#f79009] text-[12px] font-semibold text-white">
                M
              </div>
              <div className="text-[16px] font-semibold text-[#171717]">Mark Dearlove</div>
            </div>

            <div className="hidden flex-1 justify-center xl:flex">
              <div className="flex w-full max-w-[360px] items-center gap-3 rounded-full border border-[#ece7df] px-5 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
                <span className="inline-flex size-3.5 rounded-full bg-[#111111]" />
                <span className="text-[16px] text-[#7b746b]">Ask or learn anything with Sana</span>
              </div>
            </div>

            <div className="text-[15px] font-medium text-[#8b847a]">Need help? View Resources</div>
          </div>

          <div className="mt-7">
            <section className="rounded-[34px] bg-[#ffe5d8] px-8 py-7">
              <div className="text-[3.15rem] font-semibold leading-[0.94] tracking-[-0.06em] text-[#171717]">
                Good morning, Mark
              </div>
              <div className="mt-2 flex items-center gap-3 text-[18px] text-[#5d5650]">
                <span className="font-semibold text-[#171717]">To-do (3)</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  View all <RiArrowRightSLine className="size-4" />
                </span>
              </div>

              <div className="mt-7 grid gap-5 xl:grid-cols-3">
                {todoCards.map((card) => (
                  <MiniCourseCard
                    key={card.title}
                    image={card.image}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <div className="mb-5 flex items-center gap-2 text-[16px] font-medium text-[#6f685f]">
                <RiPushpin2Line className="size-4" />
                Featured
              </div>
              <FeaturedCard
                title="Evaluating Tech"
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
              />
            </section>

            <section className="mt-10">
              <div className="mb-5 text-[2rem] font-semibold tracking-[-0.05em] text-[#171717]">Continue browsing</div>
              <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-5">
                  {recents.map((card) => (
                    <RecentCard
                      key={card.title}
                      image={card.image}
                      badge={card.badge}
                      title={card.title}
                      subtitle={card.subtitle}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-10 grid gap-5 xl:grid-cols-2">
              <FeaturedCard
                title="Managing remote & hybrid teams effectively"
                image="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=80"
              />
              <FeaturedCard
                title="Cybersecurity essentials for all employees"
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
                dark
              />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
