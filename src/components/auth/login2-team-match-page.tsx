'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBrushLine,
  RiCalendarScheduleLine,
  RiCodeSSlashLine,
  RiCompass3Line,
  RiLightbulbFlashLine,
  RiMapPin2Line,
  RiMegaphoneLine,
  RiPuzzle2Line,
  RiRocket2Line,
  RiUserStarLine,
} from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';
import { cn } from '@/lib/utils';

const questions = [
  {
    id: 'city',
    label: 'Which city are you in?',
    options: ['Helsinki', 'Tallinn', 'Stockholm', 'Copenhagen', 'Istanbul', 'Berlin', 'Paris', 'Vienna'],
    icon: RiMapPin2Line,
  },
  {
    id: 'role',
    label: "What's your role?",
    options: ['Developer', 'Designer', 'Product Manager', 'Marketer'],
    icon: RiPuzzle2Line,
  },
  {
    id: 'build',
    label: 'What would you like to build?',
    options: [
      'Fintech',
      'Healthtech',
      'Edtech',
      'Developer Tools',
      'AI / Automation',
      'E-commerce',
      'Creator Economy',
      'Climate / Sustainability',
      'B2B SaaS',
      'Consumer App',
      'Other',
    ],
    icon: RiRocket2Line,
  },
  {
    id: 'idea',
    label: 'Do you have an idea?',
    options: ["I'll bring my own idea", "I'd like to pick from the idea pool", 'Either works for me'],
    icon: RiLightbulbFlashLine,
  },
  {
    id: 'availability',
    label: 'When are you available?',
    options: ['This weekend', 'Next weekend', 'Flexible'],
    icon: RiCalendarScheduleLine,
  },
  {
    id: 'experience',
    label: "What's your experience level?",
    options: ['Junior (0-2 years)', 'Mid (2-5 years)', 'Senior (5+ years)'],
    icon: RiUserStarLine,
  },
] as const;

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Developer: RiCodeSSlashLine,
  Designer: RiBrushLine,
  'Product Manager': RiCompass3Line,
  Marketer: RiMegaphoneLine,
};

const cityMeta: Record<string, { country: string; tint: string; activeTint: string }> = {
  Helsinki: {
    country: 'Finland',
    tint: 'bg-[linear-gradient(135deg,rgba(0,87,183,0.06)_0%,rgba(255,255,255,0.98)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(0,87,183,0.12)_0%,rgba(255,255,255,0.98)_100%)]',
  },
  Tallinn: {
    country: 'Estonia',
    tint: 'bg-[linear-gradient(135deg,rgba(0,114,206,0.06)_0%,rgba(255,255,255,0.98)_50%,rgba(0,0,0,0.04)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(0,114,206,0.12)_0%,rgba(255,255,255,0.98)_50%,rgba(0,0,0,0.06)_100%)]',
  },
  Stockholm: {
    country: 'Sweden',
    tint: 'bg-[linear-gradient(135deg,rgba(0,87,183,0.08)_0%,rgba(255,205,0,0.08)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(0,87,183,0.14)_0%,rgba(255,205,0,0.12)_100%)]',
  },
  Copenhagen: {
    country: 'Denmark',
    tint: 'bg-[linear-gradient(135deg,rgba(198,12,48,0.07)_0%,rgba(255,255,255,0.98)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(198,12,48,0.13)_0%,rgba(255,255,255,0.98)_100%)]',
  },
  Istanbul: {
    country: 'Türkiye',
    tint: 'bg-[linear-gradient(135deg,rgba(227,10,23,0.07)_0%,rgba(255,255,255,0.98)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(227,10,23,0.13)_0%,rgba(255,255,255,0.98)_100%)]',
  },
  Berlin: {
    country: 'Germany',
    tint: 'bg-[linear-gradient(135deg,rgba(0,0,0,0.05)_0%,rgba(221,0,0,0.05)_55%,rgba(255,206,0,0.07)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(0,0,0,0.08)_0%,rgba(221,0,0,0.08)_55%,rgba(255,206,0,0.1)_100%)]',
  },
  Paris: {
    country: 'France',
    tint: 'bg-[linear-gradient(135deg,rgba(0,85,164,0.06)_0%,rgba(255,255,255,0.98)_50%,rgba(239,65,53,0.06)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(0,85,164,0.12)_0%,rgba(255,255,255,0.98)_50%,rgba(239,65,53,0.1)_100%)]',
  },
  Vienna: {
    country: 'Austria',
    tint: 'bg-[linear-gradient(135deg,rgba(237,41,57,0.07)_0%,rgba(255,255,255,0.98)_100%)]',
    activeTint: 'bg-[linear-gradient(135deg,rgba(237,41,57,0.13)_0%,rgba(255,255,255,0.98)_100%)]',
  },
};

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

function FriendFacesIllustration() {
  return (
    <div className="relative h-[150px] w-[220px]">
      <div className="absolute left-16 top-8 h-[112px] w-[112px] rounded-full bg-[linear-gradient(180deg,#ff9f47_0%,#ffc8aa_52%,#f0c7ff_100%)] shadow-[0_18px_36px_rgba(255,122,47,0.18)]">
        <div className="absolute left-7 top-8 flex gap-3">
          <span className="relative size-7 rounded-full bg-white">
            <span className="absolute left-[9px] top-[8px] size-3.5 rounded-full bg-[#111111]" />
          </span>
          <span className="relative size-7 rounded-full bg-white">
            <span className="absolute left-[9px] top-[8px] size-3.5 rounded-full bg-[#111111]" />
          </span>
        </div>
        <div className="absolute left-1/2 top-[62px] h-7 w-9 -translate-x-1/2 rounded-b-[22px] rounded-t-[8px] bg-[#111111]" />
      </div>

      <div className="absolute left-6 top-0 h-[76px] w-[76px] rounded-full bg-[linear-gradient(180deg,#ffe1f2_0%,#f19cff_100%)]">
        <div className="absolute left-4 top-5 flex gap-2">
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
        </div>
        <div className="absolute left-1/2 top-[39px] h-3.5 w-5 -translate-x-1/2 rounded-b-[18px] rounded-t-[5px] bg-[#111111]" />
      </div>

      <div className="absolute right-6 top-1 h-[76px] w-[76px] rounded-full bg-[linear-gradient(180deg,#d7eeff_0%,#b6c0ff_55%,#a47eff_100%)]">
        <div className="absolute left-4 top-5 flex gap-2">
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
        </div>
        <div className="absolute left-1/2 top-[38px] h-4.5 w-4.5 -translate-x-1/2 rounded-full bg-[#111111]" />
      </div>

      <div className="absolute left-0 top-[82px] h-[52px] w-[52px] rounded-full bg-[linear-gradient(180deg,#c8ffe4_0%,#6ed6ff_100%)]">
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="relative size-3.5 rounded-full bg-white">
            <span className="absolute left-[5px] top-[4px] size-1.5 rounded-full bg-[#111111]" />
          </span>
          <span className="relative size-3.5 rounded-full bg-white">
            <span className="absolute left-[5px] top-[4px] size-1.5 rounded-full bg-[#111111]" />
          </span>
        </div>
        <div className="absolute left-1/2 top-[25px] h-2.5 w-3.5 -translate-x-1/2 rounded-b-[10px] rounded-t-[4px] bg-[#111111]" />
      </div>

      <div className="absolute right-0 top-[62px] h-[74px] w-[74px] rounded-full bg-[linear-gradient(180deg,#fff1a6_0%,#ffd84a_100%)]">
        <div className="absolute left-4 top-6 flex gap-2">
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
          <span className="relative size-5 rounded-full bg-white">
            <span className="absolute left-[7px] top-[6px] size-2.5 rounded-full bg-[#111111]" />
          </span>
        </div>
        <div className="absolute left-1/2 top-[41px] h-3.5 w-5 -translate-x-1/2 rounded-b-[18px] rounded-t-[5px] bg-[#111111]" />
      </div>
    </div>
  );
}

export default function Login2TeamMatchPage() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  const question = questions[step];
  const selectedValue = answers[question.id];
  const isLastStep = step === questions.length - 1;
  const StepIcon = question.icon;

  return (
    <main className="min-h-screen bg-white p-3 lg:p-4">
      <div className="grid min-h-[calc(100vh-24px)] rounded-[32px] bg-transparent lg:min-h-[calc(100vh-32px)] lg:grid-cols-[minmax(620px,1.45fr)_minmax(360px,0.75fr)]">
        <section className="relative z-10 flex min-h-full flex-col overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#fffdf9_100%)] px-8 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] lg:px-14 lg:py-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <div className="text-[15px] font-semibold text-[#111827]">Founder Weekend Match</div>
                <div className="text-[13px] text-[#8a634d]">Build your team in a few steps</div>
              </div>
            </div>

            <div className="rounded-full bg-[#fff1e8] px-4 py-2 text-[14px] font-medium text-[#ff7a2f]">
              Step {step + 1} / {questions.length}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[720px] flex-1 flex-col justify-center py-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex size-[62px] items-center justify-center rounded-[22px] bg-[#fff7f1] text-[#ff7a2f] shadow-[0_10px_24px_rgba(255,122,47,0.06)] ring-1 ring-[#ffe8da]">
                <StepIcon className="size-7" />
              </div>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,#f1dec8_0%,rgba(241,222,200,0)_100%)]" />
            </div>

            <div className="max-w-[700px]">
              <h1 className="max-w-[14ch] text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111827] lg:text-[48px]">
                {question.label}
              </h1>
              <p className="mt-3 max-w-[42ch] text-[16px] leading-7 text-[#7a4a30]">
                Pick one answer so we can shape the right founder room around you.
              </p>
            </div>

            <div
              className={cn(
                'mt-9 grid gap-3',
                question.options.length <= 4
                  ? 'grid-cols-1 md:grid-cols-2'
                  : question.options.length <= 8
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
              )}
            >
              {question.options.map((option) => {
                const active = selectedValue === option;
                const OptionIcon = roleIcons[option];
                const cityInfo = question.id === 'city' ? cityMeta[option] : null;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                    className={cn(
                      'min-h-[82px] rounded-[18px] border px-5 py-4 text-left transition',
                      active
                        ? cityInfo
                          ? `border-[#ffb180] ${cityInfo.activeTint} shadow-[0_8px_18px_rgba(255,122,47,0.08)]`
                          : 'border-[#ffb180] bg-[#fff3ea] shadow-[0_8px_18px_rgba(255,122,47,0.08)]'
                        : cityInfo
                          ? `border-[#e7e3db] ${cityInfo.tint} hover:border-[#ffd3b3]`
                          : 'border-[#e7e3db] bg-white hover:border-[#ffd3b3] hover:bg-[#fffaf5]',
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {OptionIcon ? (
                        <div
                          className={cn(
                            'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[14px]',
                            active ? 'bg-[#ff7a2f] text-white' : 'bg-[#fff4ea] text-[#ff7a2f]',
                          )}
                        >
                          <OptionIcon className="size-4.5" />
                        </div>
                      ) : null}

                      <div className="min-w-0">
                        <div className="text-[16px] font-medium text-[#111827]">{option}</div>
                        {cityInfo ? (
                          <div className="mt-1 text-[13px] text-[#8a634d]">{cityInfo.country}</div>
                        ) : (
                          <div className="mt-1 text-[13px] text-[#8a634d]">
                            {active ? 'Selected for your profile' : 'Choose this option'}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                className="inline-flex h-[50px] items-center gap-2 rounded-[14px] border border-[#e7e3db] bg-white px-5 text-[15px] font-medium text-[#344054] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={step === 0}
              >
                <RiArrowLeftLine className="size-4" />
                Back
              </button>

              <FancyButton.Root
                variant="primary"
                onClick={() => {
                  if (!selectedValue) return;
                  if (!isLastStep) setStep((value) => value + 1);
                }}
                disabled={!selectedValue || isLastStep}
                className="h-[50px] min-w-[180px] rounded-[14px] bg-[linear-gradient(180deg,#ff8a34_0%,#ff7a21_100%)] shadow-[0_12px_24px_rgba(255,122,33,0.18)] disabled:opacity-50"
              >
                {isLastStep ? 'Profile ready' : 'Continue'}
                {!isLastStep ? <RiArrowRightLine className="ml-2 size-4" /> : null}
              </FancyButton.Root>
            </div>
          </div>
        </section>

        <aside className="relative hidden h-full min-h-[760px] overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#db6718_0%,#ea7824_42%,#f48a46_74%,#ffc7a1_100%)] px-10 py-10 lg:flex lg:flex-col">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_46%,rgba(255,255,255,0.14)_100%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.38),transparent_34%)]" />

          <div className="relative z-10 mt-[24%] max-w-[360px] pl-4">
            <div className="mb-8">
              <FriendFacesIllustration />
            </div>

            <p className="max-w-[12ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] text-white">
              Meet strangers. Build something real.
            </p>

            <p className="mt-6 max-w-[24ch] text-[17px] leading-8 text-white/82">
              Four roles. One city. One weekend. We shape the team so you can focus on the energy.
            </p>

            <div className="mt-8">
              <Link href="/ex3-visa-3" className="text-[15px] font-medium text-white underline underline-offset-4">
                Back to landing
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
