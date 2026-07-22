'use client';

import Image from 'next/image';
import { RiArrowRightLine, RiArrowRightUpLongLine } from '@remixicon/react';

import { Header } from '@/components/landing/header';
import * as Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const avatars = [
  'https://alignui.com/images/blocks/hero-3-avatar-1.png',
  'https://alignui.com/images/blocks/hero-3-avatar-2.png',
  'https://alignui.com/images/blocks/hero-3-avatar-3.png',
  'https://alignui.com/images/blocks/hero-3-avatar-4.png',
  'https://alignui.com/images/blocks/hero-3-avatar-5.png',
  'https://alignui.com/images/blocks/hero-3-avatar-6.png',
];

const brands = ['Synergy', 'Horizon', 'Catalyst', 'Phoenix', 'Pulse', 'Solaris', 'Aurora'];

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 shrink-0"
    >
      <path
        d="M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM11.1027 15.6L17.4657 9.2361L16.1931 7.9635L11.1027 13.0548L8.5566 10.5087L7.284 11.7813L11.1027 15.6Z"
        className="fill-[var(--primary-base)]"
      />
    </svg>
  );
}

function SmileTile({
  className,
  tone,
}: {
  className?: string;
  tone: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-[1.6rem]', tone, className)}>
      <div className="absolute left-[22%] top-[22%] flex gap-10">
        <span className="h-3 w-7 rounded-full bg-[#10110f]" />
        <span className="h-3 w-7 rounded-full bg-[#10110f]" />
      </div>
      <div className="absolute left-1/2 top-[56%] h-16 w-20 -translate-x-1/2 rounded-b-[4rem] border-b-[8px] border-[#10110f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.2),transparent_32%)]" />
    </div>
  );
}

function DesignjoyCard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#7b81ff] bg-[radial-gradient(circle_at_30%_18%,#ffd8fb_0%,#efbaff_22%,transparent_40%),radial-gradient(circle_at_76%_80%,#ff6fe0_0%,rgba(255,111,224,0.14)_22%,transparent_44%),radial-gradient(circle_at_18%_82%,#4047ff_0%,#1f26ff_28%,transparent_52%),linear-gradient(180deg,#79b0ff_0%,#2441ff_38%,#1221db_100%)] p-4 shadow-[0_30px_70px_rgba(28,31,168,0.28)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="relative min-h-[540px] rounded-[1.7rem] sm:min-h-[620px]">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#0c0c0e] px-4 py-3 text-base font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <span className="inline-flex size-3 rounded-full bg-[#ffd21f] shadow-[0_0_12px_rgba(255,210,31,0.8)]" />
            Start today
          </div>

          <div className="absolute right-0 top-3 w-[46%] rotate-[10deg] rounded-[1.7rem] bg-white/10 p-2 shadow-[0_22px_40px_rgba(8,10,40,0.22)] backdrop-blur-sm sm:w-[43%]">
            <div className="grid grid-cols-2 gap-2 rounded-[1.4rem] bg-[#f6a3ff]/30 p-1.5">
              <SmileTile tone="bg-[#ff2e8a]" className="aspect-square" />
              <SmileTile tone="bg-[#ff6819]" className="aspect-square" />
              <SmileTile tone="bg-[#081b0f]" className="aspect-square" />
              <SmileTile tone="bg-[#ffc71c]" className="aspect-square" />
            </div>
          </div>

          <div className="pt-24 sm:pt-36">
            <h2 className="max-w-[10ch] text-[3.45rem] font-semibold leading-[0.93] tracking-[-0.025em] text-white sm:text-[4.65rem]">
              Join Designjoy
            </h2>
            <p className="mt-5 max-w-[18ch] text-[1.55rem] leading-[1.24] tracking-[-0.025em] text-white/92 sm:text-[1.95rem]">
              One subscription to rule them all.
            </p>
          </div>

          <button className="mt-9 flex h-18 w-full items-center justify-center rounded-[1rem] bg-white text-[1.15rem] font-semibold text-[#18181b] shadow-[0_18px_34px_rgba(255,255,255,0.16)] sm:mt-10 sm:h-20 sm:text-[1.65rem]">
            See pricing
          </button>

          <div className="mt-10 flex items-center justify-between gap-4 rounded-[1.3rem] bg-transparent px-1 py-1 sm:mt-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#0d0d10_0%,#2d2100_100%)] shadow-[0_16px_34px_rgba(10,10,16,0.25)] sm:size-16">
                <span className="text-[2rem] sm:text-[2.2rem]">😊</span>
              </div>
              <div>
                <p className="text-lg font-medium text-white sm:text-[1.2rem]">Book a 15-min intro call</p>
                <p className="text-base text-white/64 sm:text-[1.15rem]">Schedule now</p>
              </div>
            </div>

            <button className="inline-flex size-14 items-center justify-center rounded-full bg-white text-[#101010] shadow-[0_18px_34px_rgba(255,255,255,0.18)] sm:size-16">
              <RiArrowRightLine className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinanceHeroEx2() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <div className="border-b border-[var(--stroke-soft-200)] bg-[#fbfaf7] px-4 py-2.5 text-sm text-[var(--text-sub-600)]">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--primary-base)] shadow-[0_2px_8px_rgba(67,97,238,0.08)]">
              New
            </span>
            <span className="truncate">Promote a live event, webinar, or demo in this area</span>
          </div>
          <button className="text-[#aaa49a]">x</button>
        </div>
      </div>

      <div className="md:px-6 lg:px-8">
        <Header />
      </div>

      <section className="mx-auto max-w-[1450px] overflow-hidden rounded-[0_0_2rem_2rem] border-x border-b border-[var(--stroke-soft-200)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] md:mt-4 md:border md:rounded-[0_0_2rem_2rem]">
        <div className="mx-auto max-w-[1220px] px-6 pb-10 pt-7 md:px-8 md:pb-14 md:pt-14 lg:px-10 lg:pb-16 lg:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <div className="relative border-[var(--stroke-soft-200)] lg:border-l lg:pl-[4.65rem]">
              <div className="absolute left-0 top-10 hidden h-[136px] w-px rounded-full bg-[var(--primary-base)] lg:block" />

              <div className="inline-flex items-center gap-2 rounded-xl bg-[var(--bg-weak-50)] py-1 pl-1.5 pr-3">
                <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--primary-base)] shadow-[0_2px_8px_rgba(67,97,238,0.08)]">
                  New
                </span>
                <span className="text-sm font-medium text-[var(--text-sub-600)]">
                  All-in-one analytics for growth
                </span>
              </div>

              <h1 className="mt-5 max-w-[620px] text-[3.15rem] font-semibold leading-[1.05] tracking-[-0.025em] text-[#1d1f24] sm:text-[3.45rem] md:text-[4.15rem] lg:text-[4.7rem]">
                Track your finances with live analytics in one place
              </h1>

              <p className="mt-6 max-w-[610px] text-[1.01rem] leading-8 text-[#666d78] md:mt-7 md:text-[1.12rem]">
                Monitor income, forecast trends, and categorize expenses across every
                account <span className="font-medium text-[#4b515d]">all in real time.</span>
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'View real-time cash flow',
                  'Compare monthly expenses',
                  'Identify high-risk categories',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <p className="text-[1.03rem] text-[#606671]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <Button.Root
                  variant="primary"
                  mode="filled"
                  size="medium"
                  className="h-12 w-full rounded-[14px] px-5 text-[0.98rem] font-semibold shadow-[0_14px_30px_rgba(67,97,238,0.22)] sm:w-auto"
                >
                  Start tracking free
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className="size-4.5 text-white/70"
                  />
                </Button.Root>

                <Button.Root
                  variant="neutral"
                  mode="ghost"
                  size="medium"
                  className="h-12 w-full rounded-[14px] bg-[var(--bg-weak-50)] px-5 text-[0.98rem] font-medium text-[var(--text-sub-600)] hover:bg-[#efebe4] sm:w-auto"
                >
                  Talk to finance team
                </Button.Root>
              </div>

              <div className="mt-7 flex flex-col gap-3 md:mt-14 md:flex-row md:items-center">
                <div className="flex items-center opacity-80 mix-blend-luminosity">
                  {avatars.map((src, index) => (
                    <div
                      key={src}
                      className={cn(
                        'rounded-full border-[3px] border-white shadow-[0_4px_16px_rgba(15,23,42,0.08)]',
                        index !== 0 && '-ml-2',
                      )}
                    >
                      <Image
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        width={28}
                        height={28}
                        className="size-7 rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[0.97rem] text-[#9ba0a8]">
                  <span className="hidden md:inline">- </span>rated 4.8/5 by 200+ SMB founders
                </p>
              </div>
            </div>

            <div className="mx-auto mt-2 w-full max-w-[560px] lg:mt-0">
              <DesignjoyCard />
            </div>
          </div>
        </div>

        <div className="border-y border-[var(--stroke-soft-200)]">
          <div className="flex overflow-x-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex min-w-[178px] flex-1 items-center justify-center border-r border-[var(--stroke-soft-200)] px-8 py-6 last:border-r-0 md:py-7"
              >
                <div className="flex items-center gap-3 text-[#a8aaaf]">
                  <span className="grid size-5 grid-cols-2 gap-[2px]">
                    <span className="rounded-[1px] bg-current opacity-90" />
                    <span className="rounded-[1px] bg-current opacity-55" />
                    <span className="rounded-[1px] bg-current opacity-65" />
                    <span className="rounded-[1px] bg-current opacity-85" />
                  </span>
                  <span className="text-[1.05rem] font-medium tracking-[-0.025em]">
                    {brand}
                    <span className="text-[0.75rem] align-top">TM</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
