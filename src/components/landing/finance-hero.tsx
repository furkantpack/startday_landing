'use client';

import Image from 'next/image';
import { RiArrowRightUpLongLine } from '@remixicon/react';

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

export function FinanceHero() {
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

              <h1 className="mt-5 max-w-[620px] text-[3.15rem] font-semibold leading-[1.05] tracking-[-0.07em] text-[#1d1f24] sm:text-[3.45rem] md:text-[4.15rem] lg:text-[4.7rem]">
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
              <div className="relative overflow-hidden rounded-[2rem] bg-[#f4f4f1] sm:rounded-[2.25rem]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_36%)]" />
                <div className="absolute left-0 top-5 h-[1px] w-[42%] bg-white/90" />
                <div className="absolute right-0 top-5 h-[1px] w-[18%] bg-white/90" />
                <div className="absolute left-[18%] top-5 h-[132px] w-[1px] bg-white/90" />
                <div className="absolute right-[18%] top-5 h-[132px] w-[1px] bg-white/90" />
                <div className="absolute left-0 top-[140px] h-[1px] w-[24%] rotate-[33deg] origin-left bg-white/80" />
                <div className="absolute right-0 top-[154px] h-[1px] w-[24%] -rotate-[34deg] origin-right bg-white/80" />
                <div className="absolute left-0 bottom-[160px] h-[1px] w-[28%] rotate-[29deg] origin-left bg-white/80" />
                <div className="absolute right-0 top-[312px] h-[1px] w-[20%] -rotate-[31deg] origin-right bg-white/80" />

                <div className="relative aspect-[0.93] min-h-[360px] sm:min-h-[420px]">
                  <Image
                    src="https://alignui.com/images/blocks/hero-4-image-1.png"
                    alt="Finance analytics hero"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>

                <div className="absolute bottom-[8%] left-1/2 w-[82%] min-w-0 -translate-x-1/2 rounded-[1.35rem] border border-[rgba(229,223,214,0.9)] bg-white/94 p-3.5 shadow-[0_24px_44px_rgba(15,23,42,0.12)] backdrop-blur sm:bottom-[10%] sm:w-[68%] sm:-translate-x-[8%] sm:rounded-[1.7rem] sm:p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1 text-[0.78rem] font-medium text-[#6f7682] sm:text-[0.94rem]">
                        Revenue by Category
                        <span className="inline-flex size-4 items-center justify-center rounded-full bg-[#eef0f4] text-[10px] text-[#9197a1]">
                          i
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-[1.6rem] font-semibold tracking-[-0.06em] text-[#22262d] sm:text-[2.05rem]">
                          58%
                        </span>
                        <span className="text-[0.84rem] font-semibold text-[var(--primary-base)] sm:text-[1rem]">
                          +2.1%
                        </span>
                        <span className="text-[0.82rem] text-[#7f8691] sm:text-[1rem]">from last week</span>
                      </div>
                    </div>
                    <button className="rounded-xl border border-[var(--stroke-soft-200)] bg-[#faf9f7] px-2.5 py-1.5 text-[0.82rem] font-medium text-[#686e79] shadow-[0_2px_6px_rgba(15,23,42,0.03)] sm:px-3 sm:text-[0.95rem]">
                      Details
                    </button>
                  </div>

                  <div className="mt-4 flex gap-[4px] sm:mt-5 sm:gap-[5px]">
                    {Array.from({ length: 30 }).map((_, index) => {
                      const active = index < 15;
                      return (
                        <span
                          key={index}
                          className={cn(
                            'h-6 flex-1 rounded-[1px] sm:h-8',
                            active ? 'bg-[var(--primary-base)]' : 'bg-[#eceff4]',
                          )}
                        />
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[0.88rem] font-medium text-[#666d78] sm:text-[1rem]">Services</span>
                      <div className="flex items-center gap-1">
                        <button className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] text-[#7d838d]">
                          {'<'}
                        </button>
                        <button className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] text-[#7d838d]">
                          {'>'}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-right sm:gap-3">
                      <span className="text-[0.92rem] font-semibold text-[#565d68] sm:text-[1.08rem]">$12.4k total</span>
                      <span className="text-[0.9rem] font-semibold text-[var(--primary-base)] sm:text-[1rem]">+3.2%</span>
                    </div>
                  </div>
                </div>
              </div>
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
                  <span className="text-[1.05rem] font-medium tracking-[-0.02em]">
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
