'use client';

import { useState } from 'react';
import { RiAddLine, RiCloseLine, RiCustomerServiceFill } from '@remixicon/react';
import Link from 'next/link';

import { FooterSection, Sidebar } from '@/app/page';

const faqSections = [
  {
    number: '01',
    title: 'The Concept',
    description: 'What we do and why it works.',
    items: [
      {
        id: 'concept-1',
        question: 'What exactly is StartDay?',
        answer:
          'StartDay is a city-based weekend sprint for people looking for the right founder table. We match builders by city, skillset, goals, and working style, then bring them together for a structured two-day build experience.',
      },
      {
        id: 'concept-2',
        question: 'How is this different from networking?',
        answer:
          'Networking usually rewards quick pitches and shallow intros. StartDay is built around shared work: a table, a weekend, a clear flow, and enough pressure to see how people actually think and collaborate.',
      },
      {
        id: 'concept-3',
        question: 'Do I need a startup idea already?',
        answer:
          "No. You can bring an idea, arrive with a few rough directions, or join someone else's. We use your form answers to place you at a table where your skills and goals make sense.",
      },
    ],
  },
  {
    number: '02',
    title: 'The Weekend',
    description: 'What to expect from the sprint.',
    items: [
      {
        id: 'cafe-1',
        question: 'How do you match the table?',
        answer:
          'We look at your city, core skill, experience, idea status, industry interests, weekend goal, and preferred team shape. The aim is balance: enough overlap to move together, enough difference to make the table useful.',
      },
      {
        id: 'cafe-2',
        question: 'What happens during the two days?',
        answer:
          'The weekend moves through team formation, problem framing, idea validation, prototype planning, build checkpoints, and a final demo or decision point. It is structured, but still human and flexible.',
      },
      {
        id: 'cafe-3',
        question: 'Where does it happen?',
        answer:
          'Each city table happens in a curated cafe or workspace that fits the group size and working rhythm. The exact address is shared after your match and weekend are confirmed.',
      },
    ],
  },
  {
    number: '03',
    title: 'The Outcome',
    description: 'What you walk away with.',
    items: [
      {
        id: 'outcome-1',
        question: 'What do I walk away with?',
        answer:
          'You leave with real collaboration data: who you worked well with, what kind of idea or problem pulled the table forward, what you built or validated, and whether the team should keep going.',
      },
      {
        id: 'outcome-2',
        question: 'Is this only for technical people?',
        answer:
          'No. Strong tables need engineers, product/design people, growth minds, sales and business development, operators, finance brains, and people who can drive clarity. The point is the mix.',
      },
      {
        id: 'outcome-3',
        question: 'Can I join if I am still in a corporate job?',
        answer:
          'Yes. StartDay is especially useful for people testing the founder path without making a dramatic leap first. A weekend table gives you a lower-pressure way to see how building actually feels.',
      },
    ],
  },
] as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#d8cdb1] last:border-b-0">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="group flex w-full cursor-pointer items-center gap-5 py-5 text-left text-[1rem] font-black tracking-[-0.035em] text-[#1d1d19] sm:text-[1.12rem]"
      >
        <span className="flex-1">{question}</span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#1d1d19] transition-colors group-hover:bg-[#ffe779]">
          {isOpen ? <RiCloseLine className="size-4" /> : <RiAddLine className="size-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-6 pr-10 text-[0.94rem] font-medium leading-[1.72] tracking-[-0.02em] text-[#6f6251] sm:text-[1rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqContent() {
  return (
    <main className="min-w-0 flex-1 bg-[#fffbe8] text-[#1d1d19]">
      <header className="border-b border-dashed border-[#cfc3a4] px-5 pb-8 pt-6 sm:px-8 lg:px-12 lg:pb-12 lg:pt-10">
        <div className="inline-flex rounded-full border border-[#1d1d19] bg-[#ffe779] px-4 py-2 text-[0.78rem] font-black uppercase tracking-[0.08em]">
          FAQ guide
        </div>
        <h1 className="mt-6 max-w-[760px] text-[2rem] font-black leading-[0.96] tracking-[-0.065em] sm:text-[3.25rem] lg:text-[4.4rem]">
          Real answers for future co-founders.
        </h1>
        <p className="mt-5 max-w-[680px] text-[1rem] font-semibold leading-relaxed tracking-[-0.035em] text-[#6f6251] sm:text-[1.12rem]">
          Everything you need to know before StartDay matches your city, your skills, and your weekend table.
        </p>
      </header>

      <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-[1080px]">
          {faqSections.map((section) => (
            <section
              key={section.number}
              className="grid gap-6 border-b border-dashed border-[#cfc3a4] py-9 first:pt-0 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12 lg:py-12"
            >
              <div>
                <div className="text-[0.76rem] font-black uppercase tracking-[0.1em] text-[#f45a2f]">
                  {section.number}
                </div>
                <h2 className="mt-2 text-[2rem] font-black leading-none tracking-[-0.06em]">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-[220px] text-[0.96rem] font-semibold leading-snug tracking-[-0.03em] text-[#8b7c62]">
                  {section.description}
                </p>
              </div>

              <div className="flex flex-col">
                {section.items.map((item) => (
                  <FaqItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </section>
          ))}

          <div className="mt-10 flex flex-col gap-4 rounded-[8px] bg-[#1d1d19] p-5 text-[#fffbe8] sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#f45a2f]">
                <RiCustomerServiceFill className="size-5" />
              </span>
              <div>
                <div className="font-black tracking-[-0.035em]">Still curious?</div>
                <div className="text-sm font-medium text-[#d7ceb7]">Tell us what kind of founder table you want to join.</div>
              </div>
            </div>
            <Link
              href="mailto:hello@startday.co"
              className="inline-flex h-11 items-center justify-center rounded-[6px] bg-[#ffe779] px-5 text-sm font-black text-[#1d1d19] transition-transform hover:-translate-y-0.5"
            >
              hello@startday.co
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}

export default function BoldMovesFaqPage() {
  return (
    <div className="min-h-screen bg-[#fffbe8] p-4">
      <div className="flex min-h-[calc(100svh-32px)] flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
        <Sidebar />
        <FaqContent />
      </div>
    </div>
  );
}
