'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBuilding2Line,
  RiCalendarScheduleLine,
  RiFlashlightLine,
  RiGlobalLine,
  RiMailLine,
  RiMapPin2Line,
  RiTeamLine,
  RiTargetLine,
  RiUserLine,
} from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';
import { analytics } from '@/lib/analytics';
import { redirectToCheckout } from '@/lib/checkout';
import { cn } from '@/lib/utils';

type Field = {
  id: string;
  label: string;
  helper: string;
  type: 'text' | 'email' | 'textarea' | 'options' | 'multi-options';
  placeholder?: string;
  options?: readonly string[];
  hasOtherInput?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

type Step = {
  id: string;
  eyebrow: string;
  title: string;
  helper: string;
  icon: React.ComponentType<{ className?: string }>;
  fields: readonly Field[];
};

function PinCompanyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M12 37V16l12-6 12 6v21" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 37V23h12v14M9 37h30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinRoomIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M12 18h24M14 18v17M34 18v17M10 35h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 13c4-4 8-4 12 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="27" r="2.5" fill="currentColor" />
      <circle cx="30" cy="27" r="2.5" fill="currentColor" />
    </svg>
  );
}

function PinCityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M11 38V18l8-5 7 5 9-6v26M8 38h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 23h.1M17 29h.1M26 24h.1M26 30h.1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function PinCalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M14 12v6M34 12v6M11 19h26M13 15h22a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V19a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 28h5v5h-5zM27 28h5v5h-5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

const steps: readonly Step[] = [
  {
    id: 'you-city',
    eyebrow: 'You & Your City',
    title: "Let's find your table.",
    helper: 'Start with who you are, where you are, and when you can sit down with the right people.',
    icon: RiMapPin2Line,
    fields: [
      {
        id: 'fullName',
        label: 'Full name',
        helper: 'So we know who is joining the table.',
        type: 'text',
        placeholder: 'e.g. Ada Yilmaz',
        icon: RiUserLine,
      },
      {
        id: 'email',
        label: 'Email',
        helper: 'We will send your match and weekend details here.',
        type: 'email',
        placeholder: 'you@example.com',
        icon: RiMailLine,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn profile',
        helper: 'Share your profile so we can understand your background before matching.',
        type: 'text',
        placeholder: 'https://linkedin.com/in/yourname',
        icon: RiGlobalLine,
      },
      {
        id: 'city',
        label: 'Which city are you in?',
        helper: 'Pick the city where you want to join a founder table.',
        type: 'options',
        options: ['Stockholm', 'Helsinki', 'Tallinn', 'Copenhagen', 'Berlin', 'Istanbul', 'Paris', 'Vienna', "My city isn't listed"],
        hasOtherInput: true,
        icon: RiGlobalLine,
      },
    ],
  },
  {
    id: 'skills',
    eyebrow: 'What You Bring',
    title: 'Every team needs balance.',
    helper: 'Tell us what kind of seat you naturally take at the table.',
    icon: RiTeamLine,
    fields: [
      {
        id: 'coreSkill',
        label: "What's your core skill?",
        helper: 'We use this to balance technical, product, growth, and business seats.',
        type: 'options',
        options: [
          'Engineering / Development',
          'Product / Design',
          'Growth / Marketing',
          'Sales / Business Development',
          'Operations / Finance',
          'Other',
        ],
        hasOtherInput: true,
        icon: RiTargetLine,
      },
      {
        id: 'weekend',
        label: 'Which weekend works for you?',
        helper: 'Pick the StartDay weekend that fits your calendar.',
        type: 'options',
        options: ['10-12 July', '17 - 19 July', '24 - 26 July', 'Flexible'],
        icon: RiCalendarScheduleLine,
      },
      {
        id: 'situation',
        label: "What's your current situation?",
        helper: 'This helps us understand your founder starting point.',
        type: 'options',
        options: [
          'Working a corporate job, exploring a switch',
          'Freelancing / independent',
          'Already running something, want a team',
          'Student',
          'Between things, fully available',
        ],
        icon: RiBuilding2Line,
      },
    ],
  },
  {
    id: 'weekend',
    eyebrow: 'Weekend Shape',
    title: 'Not every table is the same.',
    helper: 'Help us understand the kind of weekend that would actually be useful for you.',
    icon: PinRoomIcon,
    fields: [
      {
        id: 'ideaStatus',
        label: 'Do you have a startup idea already?',
        helper: 'We can match idea owners, joiners, and open explorers differently.',
        type: 'options',
        options: [
          'Yes, and I want to build it this weekend',
          'A few ideas, not locked in',
          "No idea - I want to join someone else's",
          'Open to whatever the table decides together',
        ],
        icon: RiTargetLine,
      },
      {
        id: 'industries',
        label: 'What industries interest you?',
        helper: 'Pick as many as you like.',
        type: 'multi-options',
        options: ['Fintech', 'Health', 'Education', 'E-commerce', 'AI/ML', 'Social Impact', 'B2B SaaS', 'Gaming', 'Other'],
        hasOtherInput: true,
        icon: RiGlobalLine,
      },
    ],
  },
  {
    id: 'team-fit',
    eyebrow: 'Team Fit',
    title: 'Who do you want across the table?',
    helper: 'A good table is not random. Tell us what balance would help you do your best work.',
    icon: PinCalendarIcon,
    fields: [
      {
        id: 'teamShape',
        label: 'What do you want your team to look like?',
        helper: 'Choose the mix you would be most excited to work with.',
        type: 'options',
        options: [
          'Mostly technical people',
          'Mostly non-technical / business-minded',
          "A real mix - that's the point",
          'No preference, surprise me',
        ],
        icon: RiTeamLine,
      },
      {
        id: 'workStyle',
        label: 'How do you like to work?',
        helper: 'This helps us avoid a table that feels mismatched from minute one.',
        type: 'options',
        options: [
          'Fast and scrappy - ship something rough by Sunday',
          "Thoughtful - I'd rather plan well than rush",
          'Depends on the team',
        ],
        icon: RiFlashlightLine,
      },
      {
        id: 'dealBreakers',
        label: 'Anything else you would like to share?',
        helper: 'If there is anything else you would like to share, we would love to hear it.',
        type: 'textarea',
        placeholder: 'Tell us anything that would help us build the right table for you.',
        icon: RiTargetLine,
      },
    ],
  },
] as const;

function RoomIllustration() {
  return (
    <div className="relative h-[176px] w-[260px]">
      <div className="absolute inset-x-6 bottom-4 h-16 rounded-[999px] bg-white/18 blur-sm" />
      <div className="absolute left-7 top-8 size-24 rounded-[32px] bg-[#ffe779] shadow-[0_18px_36px_rgba(69,31,9,0.16)]" />
      <div className="absolute left-[86px] top-3 size-32 rounded-full bg-[linear-gradient(145deg,#ff9557,#ffc8aa_52%,#f0c7ff)] shadow-[0_18px_40px_rgba(120,49,13,0.2)]" />
      <div className="absolute right-3 top-14 size-24 rounded-[34px] bg-[linear-gradient(145deg,#d7eeff,#8d73ff)] shadow-[0_16px_32px_rgba(36,55,116,0.16)]" />
      <div className="absolute left-[106px] top-[66px] flex gap-7">
        <span className="size-4 rounded-full bg-[#111827]" />
        <span className="size-4 rounded-full bg-[#111827]" />
      </div>
      <span className="absolute left-[119px] top-[96px] h-5 w-10 rounded-b-full bg-[#111827]" />
      <div className="absolute bottom-3 left-3 right-3 h-10 rounded-[22px] border border-white/20 bg-white/22" />
    </div>
  );
}

function FieldInput({
  field,
  value,
  otherValue,
  onAnswer,
  onOtherAnswer,
}: {
  field: Field;
  value: string;
  otherValue: string;
  onAnswer: (id: string, value: string) => void;
  onOtherAnswer: (id: string, value: string) => void;
}) {
  const values = value ? value.split('|||').filter(Boolean) : [];
  const isOtherSelected = value === 'Other' || value === "My city isn't listed" || values.includes('Other') || values.includes("My city isn't listed");

  if (field.type === 'text' || field.type === 'email' || field.type === 'textarea') {
    return (
      <label className="block">
        <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#111827]">
          <field.icon className="size-4 text-[#ff7a2f]" />
          {field.label}
        </div>
        {field.type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(event) => onAnswer(field.id, event.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className="min-h-[116px] w-full resize-none rounded-[16px] border border-[#e7e3db] bg-white px-5 py-4 text-[16px] text-[#111827] outline-none transition placeholder:text-[#b6a99f] focus:border-[#ffb180] focus:shadow-[0_10px_24px_rgba(255,122,47,0.08)]"
          />
        ) : (
          <input
            type={field.type}
            value={value}
            onChange={(event) => onAnswer(field.id, event.target.value)}
            placeholder={field.placeholder}
            className="h-[58px] w-full rounded-[16px] border border-[#e7e3db] bg-white px-5 text-[16px] text-[#111827] outline-none transition placeholder:text-[#b6a99f] focus:border-[#ffb180] focus:shadow-[0_10px_24px_rgba(255,122,47,0.08)]"
          />
        )}
        <div className="mt-2 text-[13px] leading-5 text-[#8a634d]">{field.helper}</div>
      </label>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[#111827]">
        <field.icon className="size-4 text-[#ff7a2f]" />
        {field.label}
      </div>
      <div
        className={cn(
          'grid gap-3',
          (field.options?.length ?? 0) > 6 ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 md:grid-cols-2',
        )}
      >
        {field.options?.map((option) => {
          const active = field.type === 'multi-options' ? values.includes(option) : value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                if (field.type !== 'multi-options') {
                  onAnswer(field.id, option);
                  return;
                }

                const nextValues = active ? values.filter((item) => item !== option) : [...values, option];
                onAnswer(field.id, nextValues.join('|||'));
              }}
              className={cn(
                'min-h-[64px] rounded-[16px] border px-4 py-3 text-left transition',
                active
                  ? 'border-[#ffb180] bg-[#fff3ea] shadow-[0_8px_18px_rgba(255,122,47,0.08)]'
                  : 'border-[#e7e3db] bg-white hover:border-[#ffd3b3] hover:bg-[#fffaf5]',
              )}
            >
              <div className="text-[15px] font-medium text-[#111827]">{option}</div>
            </button>
          );
        })}
      </div>

      {field.hasOtherInput && isOtherSelected ? (
        <input
          type="text"
          value={otherValue}
          onChange={(event) => onOtherAnswer(field.id, event.target.value)}
          placeholder={field.id === 'city' ? 'Enter your city' : 'Tell us more'}
          autoFocus
          className="mt-4 h-[54px] w-full rounded-[16px] border border-[#ffb180] bg-[#fffaf5] px-5 text-[16px] text-[#111827] outline-none placeholder:text-[#b6a99f]"
        />
      ) : null}

      <div className="mt-2 text-[13px] leading-5 text-[#8a634d]">{field.helper}</div>
    </div>
  );
}

export default function Login2CompanyBriefPage() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [otherAnswers, setOtherAnswers] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const currentStep = steps[step];
  const StepIcon = currentStep.icon;
  const isLastStep = step === steps.length - 1;
  const progress = ((step + 1) / steps.length) * 100;
  const hasValidStep = currentStep.fields.every((field) => {
    const value = answers[field.id] ?? '';
    if (field.id !== 'email') {
      return true;
    }

    return Boolean(value.trim());
  });

  React.useEffect(() => {
    analytics.onboardingStarted({ form_type: 'find_your_team' });
  }, []);

  const setAnswer = (id: string, value: string) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  const setOtherAnswer = (id: string, value: string) => {
    setOtherAnswers((current) => ({ ...current, [id]: value }));
  };

  const submitAnswers = async () => {
    const email = answers.email?.trim();

    if (!email) {
      return;
    }

    const collectedAnswers = steps.flatMap((formStep) =>
      formStep.fields.map((field) => {
        const selectedValue = answers[field.id] ?? '';
        const selectedValues = selectedValue.split('|||').filter(Boolean);
        const usesOther =
          selectedValue === 'Other' ||
          selectedValue === "My city isn't listed" ||
          selectedValues.includes('Other') ||
          selectedValues.includes("My city isn't listed");
        const answer = usesOther
          ? [...(selectedValues.length ? selectedValues : [selectedValue]), otherAnswers[field.id] ? `Other: ${otherAnswers[field.id]}` : '']
              .filter(Boolean)
              .join(', ')
          : selectedValues.length > 1
            ? selectedValues.join(', ')
            : selectedValue;

        return {
          question: field.label,
          answer,
        };
      }),
    );

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formType: 'Find your team',
          answers: collectedAnswers,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      analytics.onboardingCompleted({
        form_type: 'find_your_team',
        city: answers.city,
        weekend: answers.weekend,
        core_skill: answers.coreSkill,
      });
      analytics.userSignedUp({
        form_type: 'find_your_team',
        city: answers.city,
        core_skill: answers.coreSkill,
      });
      analytics.subscriptionStarted({
        form_type: 'find_your_team',
        city: answers.city,
        weekend: answers.weekend,
      });
      redirectToCheckout();
    } catch (error) {
      console.error('submit form error', error);
      setSubmitError('We could not submit your profile right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-3 lg:p-4">
      <div className="grid min-h-[calc(100vh-24px)] rounded-[32px] bg-transparent lg:min-h-[calc(100vh-32px)] lg:grid-cols-[minmax(620px,1.45fr)_minmax(360px,0.75fr)]">
        <section className="relative z-10 flex min-h-full flex-col overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#fffdf9_100%)] px-8 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] lg:px-14 lg:py-10">
          <div className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center py-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex size-[62px] items-center justify-center rounded-[22px] bg-[#fff7f1] text-[#ff7a2f] shadow-[0_10px_24px_rgba(255,122,47,0.06)] ring-1 ring-[#ffe8da]">
                <StepIcon className="size-7" />
              </div>
              <div className="h-px flex-1 bg-[linear-gradient(90deg,#f1dec8_0%,rgba(241,222,200,0)_100%)]" />
              <div className="rounded-full bg-[#fff1e8] px-4 py-2 text-[14px] font-medium text-[#ff7a2f]">
                Step {step + 1} / {steps.length}
              </div>
            </div>

            <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#ff7a2f]">
              {currentStep.eyebrow}
            </div>
            <h1 className="mt-3 max-w-[16ch] text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] text-[#111827] lg:text-[48px]">
              {currentStep.title}
            </h1>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-7 text-[#7a4a30]">{currentStep.helper}</p>

            <div className="mt-9 grid gap-6">
              {currentStep.fields.map((field) => (
                <FieldInput
                  key={field.id}
                  field={field}
                  value={answers[field.id] ?? ''}
                  otherValue={otherAnswers[field.id] ?? ''}
                  onAnswer={setAnswer}
                  onOtherAnswer={setOtherAnswer}
                />
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                disabled={step === 0}
                className="inline-flex h-[50px] items-center gap-2 rounded-[14px] border border-[#e7e3db] bg-white px-5 text-[15px] font-medium text-[#344054] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RiArrowLeftLine className="size-4" /> Back
              </button>

              <FancyButton.Root
                variant="primary"
                onClick={() => {
                  if (!hasValidStep) return;
                  if (!isLastStep) setStep((value) => value + 1);
                  if (isLastStep) void submitAnswers();
                }}
                disabled={!hasValidStep || isSubmitting}
                className="h-[50px] min-w-[180px] rounded-[14px] bg-[linear-gradient(180deg,#ff8a34_0%,#ff7a21_100%)] shadow-[0_12px_24px_rgba(255,122,33,0.18)] disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : isLastStep ? 'Find my team' : 'Continue'}
                {!isLastStep ? <RiArrowRightLine className="ml-2 size-4" /> : null}
              </FancyButton.Root>
            </div>
            {submitError ? (
              <div className="mt-4 rounded-[14px] border border-[#ffd5c2] bg-[#fff3ea] px-4 py-3 text-[14px] font-medium text-[#9f3418]">
                {submitError}
              </div>
            ) : null}
          </div>
        </section>

        <aside className="relative hidden h-full min-h-[760px] overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#db6718_0%,#ea7824_42%,#f48a46_74%,#ffc7a1_100%)] px-10 py-10 lg:flex lg:flex-col">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_46%,rgba(255,255,255,0.14)),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.38),transparent_34%)]" />
          <div className="relative z-10 mt-[18%] max-w-[380px] pl-4">
            <RoomIllustration />
            <p className="mt-8 max-w-[13ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-white">
              Your city. Your skills. The right table.
            </p>
            <p className="mt-5 max-w-[27ch] text-[17px] leading-8 text-white/84">
              StartDay uses your goals, working style, and weekend timing to build a balanced founder table around you.
            </p>

            <Link href="/" className="mt-8 inline-block text-[15px] font-medium text-white underline underline-offset-4">
              Back to homepage
            </Link>
          </div>
        </aside>
      </div>

      {isSuccessModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/45 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-[440px] rounded-[28px] border border-white/60 bg-white p-6 text-center shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#ffe779] text-[28px] font-black text-[#111827] shadow-[0_14px_28px_rgba(255,231,121,0.24)]">
              ✓
            </div>
            <h2 className="mt-5 text-[30px] font-semibold leading-[1.02] tracking-[-0.025em] text-[#111827]">
              Request received.
            </h2>
            <p className="mx-auto mt-3 max-w-[32ch] text-[15px] leading-7 text-[#7a4a30]">
              Thanks for sharing your profile. We will review your answers and send the next details to your email.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="flex h-[50px] flex-1 items-center justify-center rounded-[14px] border border-[#e7e3db] bg-white px-5 text-[15px] font-semibold text-[#344054] transition hover:bg-[#fffaf5]"
              >
                Close
              </button>
              <Link
                href="/"
                className="flex h-[50px] flex-1 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#ff8a34_0%,#ff7a21_100%)] px-5 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(255,122,33,0.18)] transition hover:-translate-y-0.5"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
