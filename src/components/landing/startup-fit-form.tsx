'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine, RiMailLine, RiSparkling2Line } from '@remixicon/react';

import { Ex3Header, FooterSection } from '@/components/landing/hero-ex3';
import * as Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Answer = {
  technical?: 'high' | 'medium' | 'low';
  market?: 'b2b' | 'b2c' | 'both';
  budget?: 'bootstrap' | 'small' | 'funded';
  speed?: 'now' | 'soon' | 'research';
  sector?: 'field' | 'fintech' | 'hr' | 'creator' | 'marketing';
};

const questions = [
  {
    key: 'technical',
    step: 'Step 1/5',
    title: 'Ne kadar teknik birisin?',
    subtitle: 'Bu cevap, sana daha uygun teknik zorluk seviyesindeki kitleri one cikarir.',
    options: [
      { value: 'high', label: 'Kod yazarim', score: { wrenchai: 22, invoicepilot: 12, launchops: 18 } },
      { value: 'medium', label: 'Biraz', score: { fixmate: 16, talentsync: 14, creatorstack: 12 } },
      { value: 'low', label: 'Hic', score: { creatorstack: 16, fixmate: 12, talentsync: 10 } },
    ],
  },
  {
    key: 'market',
    step: 'Step 2/5',
    title: 'Hedef pazar?',
    subtitle: 'B2B ve B2C secimi, hangi kitin daha hizli validate edilecegini etkiler.',
    options: [
      { value: 'b2b', label: 'B2B', score: { wrenchai: 18, launchops: 18, talentsync: 16 } },
      { value: 'b2c', label: 'B2C', score: { fixmate: 20, creatorstack: 12 } },
      { value: 'both', label: 'Her ikisi', score: { invoicepilot: 18, creatorstack: 16, launchops: 14 } },
    ],
  },
  {
    key: 'budget',
    step: 'Step 3/5',
    title: 'Butcen?',
    subtitle: 'Butce, operasyonel kompleksite ve pazara cikis hizini birlikte belirler.',
    options: [
      { value: 'bootstrap', label: 'Bootstrap', score: { invoicepilot: 18, creatorstack: 16, talentsync: 12 } },
      { value: 'small', label: 'Az yatirim', score: { launchops: 16, fixmate: 14, talentsync: 12 } },
      { value: 'funded', label: 'Fonlama var', score: { wrenchai: 20, fixmate: 14, launchops: 18 } },
    ],
  },
  {
    key: 'speed',
    step: 'Step 4/5',
    title: 'Ne kadar hizli baslamak istiyorsun?',
    subtitle: 'Hiz beklentisi, seni daha hazir ve daha hizli uygulanabilir kitlere yonlendirir.',
    options: [
      { value: 'now', label: 'Hemen', score: { creatorstack: 16, invoicepilot: 18, launchops: 14 } },
      { value: 'soon', label: '1-3 ay', score: { talentsync: 14, fixmate: 14, launchops: 12 } },
      { value: 'research', label: 'Arastirma asamasindayim', score: { wrenchai: 16, fixmate: 10, talentsync: 10 } },
    ],
  },
  {
    key: 'sector',
    step: 'Step 5/5',
    title: 'Hangi sektor ilgini cekiyor?',
    subtitle: 'Son adimda ilgi alanina gore en uygun startup kitini belirliyoruz.',
    options: [
      { value: 'field', label: 'Field service', score: { wrenchai: 24 } },
      { value: 'fintech', label: 'Fintech', score: { invoicepilot: 24 } },
      { value: 'hr', label: 'HR tech', score: { talentsync: 24 } },
      { value: 'creator', label: 'Creator economy', score: { creatorstack: 24 } },
      { value: 'marketing', label: 'Marketing ops', score: { launchops: 24 } },
    ],
  },
] as const;

const kitMeta = {
  wrenchai: { name: 'WrenchAI Pro', href: '/ex4' },
  fixmate: { name: 'FixMate', href: '/ex4' },
  launchops: { name: 'LaunchOps AI', href: '/ex4' },
  talentsync: { name: 'TalentSync', href: '/ex4' },
  creatorstack: { name: 'CreatorStack', href: '/ex4' },
  invoicepilot: { name: 'InvoicePilot', href: '/ex4' },
} as const;

export function StartupFitForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [email, setEmail] = useState('');

  const currentQuestion = questions[stepIndex];
  const isComplete = stepIndex >= questions.length;

  const result = useMemo(() => {
    const scores: Record<string, number> = {
      wrenchai: 0,
      fixmate: 0,
      launchops: 0,
      talentsync: 0,
      creatorstack: 0,
      invoicepilot: 0,
    };

    questions.forEach((question) => {
      const answer = answers[question.key as keyof Answer];
      const option = question.options.find((item) => item.value === answer);
      if (!option) return;
      Object.entries(option.score).forEach(([kit, value]) => {
        scores[kit] += value;
      });
    });

    const topEntry = Object.entries(scores).sort((a, b) => b[1] - a[1])[0] ?? ['launchops', 0];
    const readiness = Math.round((topEntry[1] / 108) * 100);

    return {
      topKit: topEntry[0] as keyof typeof kitMeta,
      readiness,
    };
  }, [answers]);

  const progress = `${((Math.min(stepIndex, questions.length) / questions.length) * 100).toFixed(0)}%`;

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <Ex3Header />

      <section className="px-6 py-10 lg:px-7 lg:py-14">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke-soft-200)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-sub-600)]">
              <RiSparkling2Line className="size-4 text-[var(--primary-base)]" />
              Startup Fit Quiz
            </div>
            <h1 className="mt-5 text-[2.8rem] font-semibold leading-[1] tracking-[-0.06em] text-[var(--text-strong-950)] lg:text-[4rem]">
              En uygun startup kitini bul
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-[1.05rem]">
              5 soru, yaklasik 2 dakika. Sonunda startup readiness skorunu ve profiline en
              uygun kit onerimizi goreceksin.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--stroke-soft-200)] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <div className="border-b border-[var(--stroke-soft-200)] px-6 py-5 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-[var(--text-sub-600)]">
                    {isComplete ? 'Result' : currentQuestion.step}
                  </div>
                  <div className="mt-1 text-[1.15rem] font-semibold text-[var(--text-strong-950)]">
                    {isComplete ? 'Sonuc ekrani' : currentQuestion.title}
                  </div>
                </div>
                <div className="text-sm text-[var(--text-soft-400)]">{progress}</div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-[var(--bg-weak-50)]">
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,#4db7b0_0%,#4b62f0_100%)] transition-all duration-300"
                  style={{ width: progress }}
                />
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
              <aside className="border-b border-[var(--stroke-soft-200)] bg-[#fbfaf7] px-6 py-6 lg:border-b-0 lg:border-r lg:px-8">
                <div className="space-y-5">
                  {questions.map((question, index) => (
                    <div key={question.key} className="relative pl-5">
                      <div
                        className={cn(
                          "absolute left-0 top-1 h-10 w-0.5 rounded-full",
                          index === stepIndex && !isComplete
                            ? 'bg-[var(--primary-base)]'
                            : index < stepIndex || isComplete
                              ? 'bg-[#9ad8c8]'
                              : 'bg-[var(--stroke-soft-200)]',
                        )}
                      />
                      <div className={cn(index === stepIndex && !isComplete ? 'text-[var(--primary-base)]' : 'text-[var(--text-soft-400)]')}>
                        {question.step}
                      </div>
                      <div className="mt-1 font-medium text-[var(--text-strong-950)]">
                        {question.title}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="px-6 py-8 lg:px-10 lg:py-10">
                {!isComplete ? (
                  <div className="mx-auto max-w-[620px]">
                    <div className="mb-8">
                      <div className="text-[2rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                        {currentQuestion.title}
                      </div>
                      <p className="mt-3 text-[1rem] leading-7 text-[var(--text-sub-600)]">
                        {currentQuestion.subtitle}
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {currentQuestion.options.map((option) => {
                        const isSelected =
                          answers[currentQuestion.key as keyof Answer] === option.value;

                        return (
                          <button
                            key={option.value}
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [currentQuestion.key]: option.value,
                              }))
                            }
                            className={cn(
                              'rounded-[1.4rem] border px-5 py-5 text-left transition',
                              isSelected
                                ? 'border-[var(--primary-base)] bg-[#f2f5ff] shadow-[0_10px_24px_rgba(67,97,238,0.08)]'
                                : 'border-[var(--stroke-soft-200)] bg-white hover:border-[#d5dcec] hover:bg-[#fbfcff]',
                            )}
                          >
                            <div className="text-[1.02rem] font-semibold text-[var(--text-strong-950)]">
                              {option.label}
                            </div>
                            <div className="mt-1 text-sm text-[var(--text-sub-600)]">
                              Bu secim sana uygun kitleri yeniden agirliklandirir.
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <Button.Root
                        variant="neutral"
                        mode="stroke"
                        size="medium"
                        className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[var(--text-sub-600)]"
                        onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
                        disabled={stepIndex === 0}
                      >
                        <RiArrowLeftLine className="size-4" />
                        Geri
                      </Button.Root>

                      <Button.Root
                        variant="primary"
                        mode="filled"
                        size="medium"
                        className="h-12 rounded-[14px] px-5"
                        disabled={!answers[currentQuestion.key as keyof Answer]}
                        onClick={() => setStepIndex((value) => value + 1)}
                      >
                        Devam et
                        <RiArrowRightLine className="size-4" />
                      </Button.Root>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto max-w-[620px]">
                    <div className="rounded-[1.6rem] border border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f8fbff_0%,#f6f3ee_100%)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)]">
                        Startup Readiness Score
                      </div>
                      <div className="mt-3 text-[3.4rem] font-semibold leading-none tracking-[-0.07em] text-[var(--text-strong-950)]">
                        {result.readiness}/100
                      </div>
                      <p className="mt-3 text-[1rem] leading-7 text-[var(--text-sub-600)]">
                        Profiline en uygun kit:
                        <span className="font-semibold text-[var(--text-strong-950)]">
                          {' '}
                          {kitMeta[result.topKit].name}
                        </span>
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <Button.Root
                          variant="primary"
                          mode="filled"
                          size="medium"
                          asChild
                          className="h-12 rounded-[14px] px-5"
                        >
                          <Link href={kitMeta[result.topKit].href}>Ucretsiz ilk 3 bolumu gor</Link>
                        </Button.Root>
                        <Button.Root
                          variant="neutral"
                          mode="stroke"
                          size="medium"
                          asChild
                          className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5"
                        >
                          <Link href="/ex4">Kiti incele</Link>
                        </Button.Root>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.6rem] border border-[var(--stroke-soft-200)] bg-white p-6">
                      <div className="flex items-center gap-2 text-[var(--text-strong-950)]">
                        <RiMailLine className="size-4 text-[var(--primary-base)]" />
                        <span className="font-semibold">Raporunu kaydet</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-sub-600)]">
                        Skorun zaten hazir. E-posta girersen sonucu kaydedip detayli kit
                        onerini sana yollariz.
                      </p>
                      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="email@ornek.com"
                          className="h-12 flex-1 rounded-[14px] border border-[var(--stroke-soft-200)] px-4 outline-none transition focus:border-[var(--primary-base)]"
                        />
                        <Button.Root
                          variant="neutral"
                          mode="stroke"
                          size="medium"
                          className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5"
                        >
                          Kaydet
                        </Button.Root>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <Button.Root
                        variant="neutral"
                        mode="stroke"
                        size="medium"
                        className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[var(--text-sub-600)]"
                        onClick={() => setStepIndex(0)}
                      >
                        <RiArrowLeftLine className="size-4" />
                        Tekrar yap
                      </Button.Root>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
