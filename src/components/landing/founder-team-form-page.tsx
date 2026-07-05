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
  RiSparkling2Line,
  RiUserStarLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Badge from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type StepQuestion = {
  id: string;
  label: string;
  helper: string;
  icon: React.ComponentType<{ className?: string }>;
  options: string[];
};

const questions: StepQuestion[] = [
  {
    id: 'city',
    label: 'Which city are you in?',
    helper: 'We use city matching so your team can actually meet in person.',
    icon: RiMapPin2Line,
    options: ['Helsinki', 'Tallinn', 'Stockholm', 'Copenhagen', 'Istanbul', 'Berlin', 'Paris', 'Vienna'],
  },
  {
    id: 'role',
    label: "What's your role?",
    helper: 'Balanced teams start with clear roles.',
    icon: RiPuzzle2Line,
    options: ['Developer', 'Designer', 'Product Manager', 'Marketer'],
  },
  {
    id: 'build',
    label: 'What would you like to build?',
    helper: 'Pick the kind of product energy you want around you.',
    icon: RiRocket2Line,
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
  },
  {
    id: 'idea',
    label: 'Do you have an idea?',
    helper: 'You can bring one, borrow one, or stay flexible.',
    icon: RiLightbulbFlashLine,
    options: ["I'll bring my own idea", "I'd like to pick from the idea pool", 'Either works for me'],
  },
  {
    id: 'availability',
    label: 'When are you available?',
    helper: 'We batch matches around the same build window.',
    icon: RiCalendarScheduleLine,
    options: ['This weekend', 'Next weekend', 'Flexible'],
  },
  {
    id: 'experience',
    label: "What's your experience level?",
    helper: 'This helps us keep the team balanced.',
    icon: RiUserStarLine,
    options: ['Junior (0-2 years)', 'Mid (2-5 years)', 'Senior (5+ years)'],
  },
];

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Developer: RiCodeSSlashLine,
  Designer: RiBrushLine,
  'Product Manager': RiCompass3Line,
  Marketer: RiMegaphoneLine,
};

export function FounderTeamFormPage() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  const question = questions[step];
  const selectedValue = answers[question.id];
  const isLastStep = step === questions.length - 1;
  const progress = ((step + 1) / questions.length) * 100;
  const CurrentIcon = question.icon;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f4ee_0%,#fbf8f2_100%)] p-3 lg:p-4">
      <div className="grid min-h-[calc(100vh-24px)] overflow-hidden rounded-[34px] border border-[#eadfd1] bg-[#fffdf9] shadow-[0_22px_60px_rgba(67,22,4,0.08)] lg:min-h-[calc(100vh-32px)] lg:grid-cols-[minmax(580px,1.25fr)_minmax(420px,0.75fr)]">
        <section className="relative flex min-h-full flex-col px-7 py-7 lg:px-12 lg:py-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-[18px] bg-[#4b1807] text-[#d4f126] shadow-[0_12px_30px_rgba(75,24,7,0.18)]">
                <RiSparkling2Line className="size-5" />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#431604]">Founder Weekend Match</div>
                <div className="text-[13px] text-[#8a634d]">Build your team in a few steps</div>
              </div>
            </div>

            <Badge.Root className="rounded-full bg-[#fff3e8] px-3 py-1 text-[12px] normal-case text-[#ff6b2e]">
              Step {step + 1} of {questions.length}
            </Badge.Root>
          </div>

          <div className="mt-7 h-2 overflow-hidden rounded-full bg-[#f1e7da]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#d4f126_0%,#ff7a2f_100%)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mx-auto flex w-full max-w-[650px] flex-1 flex-col justify-center py-10">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-[24px] bg-[#fff7ef] text-[#4b1807] ring-1 ring-[#f1dec8]">
                <CurrentIcon className="size-7" />
              </div>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,#f1dec8_0%,rgba(241,222,200,0)_100%)]" />
            </div>

            <div className="max-w-[680px]">
              <h1 className="max-w-[12ch] text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#431604] lg:text-[3.35rem]">
                {question.label}
              </h1>
              <p className="mt-4 max-w-[46ch] text-[1rem] leading-7 text-[#7a4a30] lg:text-[1.08rem]">
                {question.helper}
              </p>
            </div>

            <div
              className={cn(
                'mt-10 grid gap-3',
                question.options.length <= 4
                  ? 'grid-cols-1 md:grid-cols-2'
                  : question.options.length <= 8
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
              )}
            >
              {question.options.map((option) => {
                const isSelected = selectedValue === option;
                const OptionIcon = roleIcons[option];

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                    className={cn(
                      'group min-h-[84px] rounded-[22px] border px-5 py-4 text-left transition duration-200',
                      isSelected
                        ? 'border-[#d4f126] bg-[#f7ffd1] shadow-[0_14px_28px_rgba(212,241,38,0.16)]'
                        : 'border-[#ebddce] bg-white hover:border-[#ffcfb0] hover:bg-[#fff9f3]',
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {OptionIcon ? (
                        <div
                          className={cn(
                            'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[14px]',
                            isSelected ? 'bg-[#4b1807] text-[#d4f126]' : 'bg-[#fff4ea] text-[#4b1807]',
                          )}
                        >
                          <OptionIcon className="size-4.5" />
                        </div>
                      ) : null}

                      <div className="min-w-0">
                        <div className="text-[16px] font-semibold tracking-[-0.03em] text-[#431604]">{option}</div>
                        <div className="mt-1 text-[13px] text-[#8a634d]">
                          {isSelected ? 'Selected for your match profile' : 'Tap to choose this option'}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <Button.Root
                variant="neutral"
                mode="stroke"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                disabled={step === 0}
                className="h-12 rounded-[18px] border-[#eadfd1] bg-white px-5 text-[#6f5949]"
              >
                <Button.Icon as={RiArrowLeftLine} className="size-4" />
                Back
              </Button.Root>

              <Button.Root
                variant="primary"
                mode="filled"
                onClick={() => {
                  if (!selectedValue) return;
                  if (!isLastStep) setStep((value) => value + 1);
                }}
                disabled={!selectedValue || isLastStep}
                className="h-12 min-w-[180px] rounded-[18px] bg-[linear-gradient(180deg,#d9fb2f_0%,#c8ec24_100%)] px-6 text-[#341304] shadow-[0_16px_34px_rgba(212,241,38,0.22)] hover:brightness-[0.99]"
              >
                Continue
                <Button.Icon as={RiArrowRightLine} className="size-4" />
              </Button.Root>
            </div>
          </div>
        </section>

        <aside className="relative hidden min-h-full overflow-hidden bg-[linear-gradient(180deg,#4f1b08_0%,#6a2408_40%,#8c3410_100%)] px-10 py-10 lg:flex lg:flex-col">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,241,38,0.16),transparent_24%),radial-gradient(circle_at_84%_22%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_72%_84%,rgba(255,122,47,0.18),transparent_28%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#fdf2df] ring-1 ring-white/10">
              Weekend builder flow
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <h2 className="max-w-[10ch] text-[2.9rem] font-semibold leading-[0.94] tracking-[-0.06em] text-[#fff8ef]">
              We curate the team chemistry for you.
            </h2>
            <p className="mt-5 max-w-[30ch] text-[1.05rem] leading-8 text-white/74">
              Four roles, one city, one weekend, one clear build goal. You answer the essentials. We shape the room.
            </p>
          </div>

          <div className="relative z-10 mt-auto space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#d4f126]">How it works</div>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Share your city and role', icon: RiMapPin2Line },
                  { step: '02', title: 'Pick your build direction', icon: RiRocket2Line },
                  { step: '03', title: 'Choose timing and experience', icon: RiCalendarScheduleLine },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-[16px] bg-[#d4f126] text-[#3b1804]">
                      <item.icon className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/46">{item.step}</div>
                      <div className="mt-1 text-[15px] font-semibold text-white">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_100%)] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-semibold text-white">Your future team</div>
                  <div className="mt-1 text-[13px] text-white/62">Balanced across product, craft and growth</div>
                </div>
                <div className="rounded-full bg-[#d4f126] px-3 py-1 text-[12px] font-semibold text-[#341304]">4 builders</div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: 'Developer', icon: RiCodeSSlashLine },
                  { label: 'Designer', icon: RiBrushLine },
                  { label: 'Product', icon: RiCompass3Line },
                  { label: 'Marketing', icon: RiMegaphoneLine },
                ].map((item) => (
                  <div key={item.label} className="rounded-[18px] border border-white/10 bg-white/8 p-4">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-[14px] bg-white/10 text-[#d4f126]">
                      <item.icon className="size-4.5" />
                    </div>
                    <div className="text-[14px] font-semibold text-white">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/ex3-visa-3" className="inline-flex text-[14px] font-medium text-white/72 transition hover:text-white">
              Back to landing
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
