'use client';

import Link from 'next/link';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import { FooterSection, Sidebar } from '@/app/page';

export default function BoldMovesAboutPage() {
  return (
    <div className="min-h-screen bg-[#fffbe8] p-4">
      <div className="flex min-h-[calc(100svh-32px)] flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <section className="bg-[#fffbe8] px-2 py-8 lg:px-0 lg:py-12">
            <div className="mx-auto max-w-[980px]">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 w-fit rounded-full border border-[#1d1d19] bg-[#ffe779] px-5 py-2 text-[0.9rem] font-black tracking-[-0.025em] text-[#1d1d19]">
                  about
                </div>
                <h1 className="mx-auto max-w-[700px] text-[2.25rem] font-black leading-[1.02] tracking-[-0.025em] text-[#1d1d19] sm:text-[3rem]">
                  We believe co-founders are found by building together.
                </h1>
              </div>

              <div className="relative overflow-hidden rounded-[10px] border border-dashed border-[#b9ae84] bg-[#fffdf1] px-6 py-8 shadow-[0_22px_70px_rgba(29,29,25,0.06)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                <div className="absolute right-6 top-6 hidden rotate-3 rounded-full border border-[#1d1d19] bg-[#f45a2f] px-5 py-2 text-[0.82rem] font-black uppercase tracking-[0.12em] text-[#fffbe8] sm:block">
                  StartDay note
                </div>

                <div
                  className="mx-auto max-w-[760px] text-[1.28rem] leading-[1.72] tracking-[-0.025em] text-[#2f2922] sm:text-[1.45rem]"
                  style={{ fontFamily: '"Segoe Print", "Bradley Hand ITC", "Comic Sans MS", cursive' }}
                >
                  <p>
                    We started StartDay because founder matching should feel more like working together than collecting
                    intro calls. A profile can say what someone does, but a weekend table shows how they think, decide,
                    listen, build, and handle pressure when an idea is still rough.
                  </p>

                  <p className="mt-7">
                    Our work is built around small city tables: complementary skills, a clear weekend flow, and enough
                    structure for strangers to become a real team for two days. Some people arrive with ideas. Some
                    arrive with skills. The point is to sit them with the right mix and let the work reveal the fit.
                  </p>

                  <p className="mt-7">
                    Less networking theater. More shared momentum. Find your table, build for a weekend, and leave with
                    a clearer sense of who you should keep building with.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    href="/startday-find-cafes"
                    className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[7px] border border-[#1d1d19] bg-[#ffe779] px-7 text-[1.05rem] font-black tracking-[-0.025em] text-[#1d1d19] shadow-[0_12px_24px_rgba(29,29,25,0.10)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    browse city drops
                    <RiArrowRightUpLongLine className="size-5 text-[#f45a2f]" />
                  </Link>
                  <Link
                    href="/find-your-team"
                    className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[7px] border border-[#1d1d19] bg-[#fffbe8] px-7 text-[1.05rem] font-black tracking-[-0.025em] text-[#1d1d19] transition-transform duration-300 hover:-translate-y-1"
                  >
                    find your team
                    <RiArrowRightUpLongLine className="size-5 text-[#f45a2f]" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
