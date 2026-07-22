'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailLine,
  RiLock2Line,
} from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

function BrandMark() {
  return (
    <div className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffb586_0%,#ff7a2f_100%)] shadow-[0_8px_18px_rgba(255,122,47,0.22)]">
      <div className="relative size-5">
        <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-white/95" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-white/88" />
        <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
      </div>
    </div>
  );
}

function TestimonialPanel() {
  return (
    <div className="relative hidden h-full min-h-[760px] overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#db6718_0%,#ea7824_42%,#f48a46_74%,#ffc7a1_100%)] px-10 py-10 lg:flex lg:flex-col">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_46%,rgba(255,255,255,0.14)_100%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.38),transparent_34%)]" />

      <div className="relative z-10 mt-[18%] max-w-[440px] pl-6 xl:pl-8">
        <div className="mb-8 flex size-14 items-center justify-center rounded-full bg-white/18 p-1 ring-1 ring-white/16">
          <div className="flex size-full items-center justify-center rounded-full bg-[url('https://alignui.com/images/avatar/illustration/sophia.png')] bg-cover bg-center" />
        </div>

        <p className="max-w-[14ch] text-[30px] font-semibold leading-[1.12] tracking-[-0.025em] text-white xl:text-[34px]">
          We turn complex relocation decisions into a much clearer visa roadmap.
        </p>

        <div className="mt-8">
          <div className="text-[16px] font-semibold text-white">HangiVize Team</div>
          <div className="mt-1 text-[15px] text-white/78">Startup & relocation advisory</div>
        </div>

        <div className="mt-10 flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-[#8d4b19]" />
          <span className="size-1.5 rounded-full bg-[#8d4b19]" />
        </div>
      </div>
    </div>
  );
}

export default function Login2Page() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <main className="min-h-screen bg-white p-3 lg:p-4">
      <div className="grid min-h-[calc(100vh-24px)] rounded-[32px] bg-transparent lg:min-h-[calc(100vh-32px)] lg:grid-cols-[minmax(520px,1.45fr)_minmax(420px,1fr)]">
        <section className="relative z-10 flex min-h-full flex-col overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#fffdf9_100%)] px-8 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] lg:px-14 lg:py-10">
          <div className="flex items-center justify-between">
            <BrandMark />
            <div className="text-[15px] text-[#4b5563]">
              Don&apos;t have an account?{' '}
              <button type="button" className="rounded-2xl bg-[#fff1e8] px-4 py-2 font-medium text-[#ff7a2f]">
                Register
              </button>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[492px] flex-1 flex-col justify-center rounded-[36px] py-10">
            <div className="mb-8 flex justify-center">
              <div className="flex size-[64px] items-center justify-center rounded-full bg-[#fff7f1] shadow-[0_10px_24px_rgba(255,122,47,0.06)] ring-1 ring-[#ffe8da]">
                <div className="flex size-[42px] items-center justify-center rounded-full border border-[#ffdcc7] bg-white text-[#ff7a2f]">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5.5 stroke-current"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="7" width="14" height="10" rx="3" />
                    <path d="M9 7V5.8A3 3 0 0 1 12 3a3 3 0 0 1 3 2.8V7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-[34px] font-semibold tracking-[-0.025em] text-[#111827]">Login to your account</h1>
              <p className="mt-2 text-[16px] text-[#667085]">Enter your details to start your onboarding.</p>
            </div>

            <form className="mt-10 space-y-5">
              <div className="space-y-2">
                <Label.Root htmlFor="email" className="text-[15px]">
                  Email Address<span className="text-[#ff7a2f]">*</span>
                </Label.Root>
                <Input.Root>
                  <Input.Wrapper className="h-[50px] rounded-[14px] border-[#e7e3db] px-4 shadow-none">
                    <RiMailLine className="size-5 text-[#98a2b3]" />
                    <Input.Input id="email" type="email" placeholder="hello@hangivize.com" />
                  </Input.Wrapper>
                </Input.Root>
              </div>

              <div className="space-y-2">
                <Label.Root htmlFor="password" className="text-[15px]">
                  Password<span className="text-[#ff7a2f]">*</span>
                </Label.Root>
                <Input.Root>
                  <Input.Wrapper className="h-[50px] rounded-[14px] border-[#e7e3db] px-4 shadow-none">
                    <RiLock2Line className="size-5 text-[#98a2b3]" />
                    <Input.Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••"
                    />
                    <button type="button" onClick={() => setShowPassword((s) => !s)}>
                      {showPassword ? (
                        <RiEyeOffLine className="size-5 text-[#98a2b3]" />
                      ) : (
                        <RiEyeLine className="size-5 text-[#98a2b3]" />
                      )}
                    </button>
                  </Input.Wrapper>
                </Input.Root>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-3 text-[14px] text-[#111827]">
                  <input type="checkbox" className="size-5 rounded-[6px] border border-[#d0d5dd] accent-[#ff7a2f]" />
                  Keep me logged in
                </label>
                <button type="button" className="text-[14px] font-medium text-[#344054] underline underline-offset-4">
                  Forgot password?
                </button>
              </div>

              <Link href="/onboard" className="block">
                <FancyButton.Root
                  variant="primary"
                  className="mt-2 h-[50px] w-full rounded-[14px] bg-[linear-gradient(180deg,#ff8a34_0%,#ff7a21_100%)] shadow-[0_12px_24px_rgba(255,122,33,0.18)]"
                >
                  Continue to onboarding
                </FancyButton.Root>
              </Link>
            </form>
          </div>
        </section>

        <TestimonialPanel />
      </div>
    </main>
  );
}
