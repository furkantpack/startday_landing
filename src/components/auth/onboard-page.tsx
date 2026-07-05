'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

const questions = [
  {
    id: 'goal',
    label: 'What do you want to solve first?',
    options: ['Finland startup visa', 'Digital nomad visa', 'Company formation', 'Not sure yet'],
  },
  {
    id: 'profile',
    label: 'Which profile describes you best?',
    options: ['Founder / co-founder', 'Remote employee', 'Freelancer / consultant', 'Investor / operator'],
  },
  {
    id: 'timeline',
    label: 'When do you want to move?',
    options: ['Within 1 month', '1-3 months', '3-6 months', 'Just researching'],
  },
  {
    id: 'team',
    label: 'How many founders or applicants are involved?',
    options: ['Just me', '2 founders', '3-4 people', 'Family included too'],
  },
  {
    id: 'support',
    label: 'What kind of support do you need most?',
    options: ['Business plan only', 'Full visa consulting', 'Relocation + company setup', 'Country comparison first'],
  },
];

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

function ProgressDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mt-10 flex items-center gap-2">
      {questions.map((question, index) => (
        <span
          key={question.id}
          className={activeIndex === index ? 'h-1.5 w-6 rounded-full bg-white' : 'size-1.5 rounded-full bg-[#8d4b19]'}
        />
      ))}
    </div>
  );
}

function TestimonialPanel({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative hidden h-full min-h-[760px] overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#db6718_0%,#ea7824_42%,#f48a46_74%,#ffc7a1_100%)] px-10 py-10 lg:flex lg:flex-col">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_46%,rgba(255,255,255,0.14)_100%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.38),transparent_34%)]" />

      <div className="relative z-10 mt-[18%] max-w-[440px] pl-6 xl:pl-8">
        <div className="mb-8 flex size-14 items-center justify-center rounded-full bg-white/18 p-1 ring-1 ring-white/16">
          <div className="flex size-full items-center justify-center rounded-full bg-[url('https://alignui.com/images/avatar/illustration/sophia.png')] bg-cover bg-center" />
        </div>

        <p className="max-w-[13ch] text-[30px] font-semibold leading-[1.12] tracking-[-0.05em] text-white xl:text-[34px]">
          One clear answer at a time makes the whole visa path easier to map.
        </p>

        <div className="mt-8">
          <div className="text-[16px] font-semibold text-white">HangiVize Onboarding</div>
          <div className="mt-1 text-[15px] text-white/78">Question {activeIndex + 1} of {questions.length}</div>
        </div>

        <ProgressDots activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default function OnboardPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  const question = questions[step];
  const selectedValue = answers[question.id];
  const isLastStep = step === questions.length - 1;

  return (
    <main className="min-h-screen bg-white p-3 lg:p-4">
      <div className="grid min-h-[calc(100vh-24px)] rounded-[32px] bg-transparent lg:min-h-[calc(100vh-32px)] lg:grid-cols-[minmax(520px,1.45fr)_minmax(420px,1fr)]">
        <section className="relative z-10 flex min-h-full flex-col overflow-hidden rounded-l-[32px] rounded-r-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#fffdf9_100%)] px-8 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] lg:px-14 lg:py-10">
          <div className="flex items-center justify-between">
            <BrandMark />
            <div className="rounded-full bg-[#fff1e8] px-4 py-2 text-[14px] font-medium text-[#ff7a2f]">
              Step {step + 1} / {questions.length}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[560px] flex-1 flex-col justify-center rounded-[36px] py-10">
            <div className="mb-8 flex justify-center">
              <div className="flex size-[64px] items-center justify-center rounded-full bg-[#fff7f1] shadow-[0_10px_24px_rgba(255,122,47,0.06)] ring-1 ring-[#ffe8da]">
                <div className="flex size-[42px] items-center justify-center rounded-full border border-[#ffdcc7] bg-white text-[#ff7a2f]">
                  <span className="text-[18px] font-semibold">{step + 1}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-[34px] font-semibold tracking-[-0.05em] text-[#111827]">{question.label}</h1>
              <p className="mt-2 text-[16px] text-[#667085]">We&apos;ll use this to shape your visa roadmap and service match.</p>
            </div>

            <div className="mt-10 space-y-3">
              {question.options.map((option) => {
                const active = selectedValue === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                    className={
                      active
                        ? 'w-full rounded-[16px] border border-[#ffb180] bg-[#fff3ea] px-5 py-4 text-left text-[16px] font-medium text-[#111827] shadow-[0_8px_18px_rgba(255,122,47,0.08)]'
                        : 'w-full rounded-[16px] border border-[#e7e3db] bg-white px-5 py-4 text-left text-[16px] font-medium text-[#344054] transition hover:border-[#ffd3b3] hover:bg-[#fffaf5]'
                    }
                  >
                    {option}
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
                  if (isLastStep) {
                    router.push('/dash4');
                  } else {
                    setStep((value) => value + 1);
                  }
                }}
                disabled={!selectedValue}
                className="h-[50px] min-w-[180px] rounded-[14px] bg-[linear-gradient(180deg,#ff8a34_0%,#ff7a21_100%)] shadow-[0_12px_24px_rgba(255,122,33,0.18)] disabled:opacity-50"
              >
                {isLastStep ? 'Finish onboarding' : 'Continue'}
                {!isLastStep ? <RiArrowRightLine className="ml-2 size-4" /> : null}
              </FancyButton.Root>
            </div>
          </div>
        </section>

        <TestimonialPanel activeIndex={step} />
      </div>
    </main>
  );
}
