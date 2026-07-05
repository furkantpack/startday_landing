'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowRightUpLongLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8 shrink-0', className)}
    >
      <path
        d="M32 8C33.8 19.2 38.7 26.6 48.7 31.6C39.1 36.2 33.9 43.5 32 56C30.1 43.5 24.9 36.2 15.3 31.6C25.3 26.6 30.2 19.2 32 8Z"
        fill="#4F5B10"
      />
      <path
        d="M32 8C34.2 19.3 39.8 26.7 50.1 31.6"
        stroke="#D7F62B"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.1 31.6C39.8 36.5 34.2 43.8 32 56"
        stroke="#D7F62B"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 56C29.8 43.8 24.2 36.5 13.9 31.6"
        stroke="#D7F62B"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9 31.6C24.2 26.7 29.8 19.3 32 8"
        stroke="#D7F62B"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const visaBrands = [
  { src: 'https://alignui.com/images/blocks/brand-social-company-1.svg', alt: 'Finland' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-2.svg', alt: 'Estonia' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-3.svg', alt: 'Germany' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-4.svg', alt: 'Portugal' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-5.svg', alt: 'Netherlands' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-6.svg', alt: 'Spain' },
  { src: 'https://alignui.com/images/blocks/brand-social-company-7.svg', alt: 'United Kingdom' },
];

const visaCards = [
  {
    title: 'Finland Startup Visa',
    description: 'Kurucu ekip, business plan, finansal kanıt ve taşınma planını birlikte yöneten ana servis.',
    labels: ['Startup', 'Finland', 'Founders'],
    score: '9.6',
    bg: 'bg-[radial-gradient(circle_at_30%_20%,#dbeafe_0%,#93c5fd_35%,#60a5fa_58%,#1d4ed8_100%)]',
    icon: '🇫🇮',
  },
  {
    title: 'Digital Nomad Visa',
    description: 'Uzaktan çalışan profesyoneller için gelir kanıtı, ülke seçimi ve başvuru dosyası stratejisi.',
    labels: ['Remote', 'Nomad', 'EU'],
    score: '9.1',
    bg: 'bg-[radial-gradient(circle_at_82%_10%,#fde68a_0%,transparent_24%),radial-gradient(circle_at_76%_78%,#fbcfe8_0%,#f9a8d4_24%,transparent_40%),linear-gradient(145deg,#0ea5e9_0%,#2563eb_36%,#f59e0b_100%)]',
    icon: '🌍',
  },
  {
    title: 'Residence Permit Strategy',
    description: 'Aile, çalışma ve oturum izinlerinde belge mantığı, zaman planı ve risk noktalarını netleştirir.',
    labels: ['Residence', 'Family', 'Permit'],
    score: '9.3',
    bg: 'bg-[radial-gradient(circle_at_74%_12%,#ddd6fe_0%,#a78bfa_30%,transparent_32%),radial-gradient(circle_at_24%_76%,#fbcfe8_0%,transparent_20%),linear-gradient(145deg,#7c3aed_0%,#4f46e5_60%,#38bdf8_100%)]',
    icon: '🛂',
  },
  {
    title: 'Company Formation',
    description: 'Şirket kurma, vergi başlangıcı, banka hesabı ve muhasebe setup tarafını birlikte ele alır.',
    labels: ['Company', 'Tax', 'Bank'],
    score: '8.9',
    bg: 'bg-[radial-gradient(circle_at_20%_14%,#bbf7d0_0%,#86efac_24%,transparent_26%),radial-gradient(circle_at_82%_70%,#bfdbfe_0%,transparent_18%),linear-gradient(145deg,#10b981_0%,#059669_40%,#1d4ed8_100%)]',
    icon: '🏢',
  },
  {
    title: 'Relocation & Accounting',
    description: 'Taşınma bütçesi, ilk adres, muhasebe başlangıcı ve operasyon kurulumu için daha net bir çerçeve kurar.',
    labels: ['Relocation', 'Accounting', 'Setup'],
    score: '8.8',
    bg: 'bg-[radial-gradient(circle_at_24%_14%,#fed7aa_0%,#fb923c_28%,transparent_29%),radial-gradient(circle_at_78%_18%,#fde68a_0%,transparent_22%),linear-gradient(145deg,#f97316_0%,#fb7185_44%,#2563eb_100%)]',
    icon: '📦',
  },
];

const visaPosterCards = [
  {
    title: 'Helsinki',
    src: '/visa-posters/helsinki-finland.png',
    alt: 'Helsinki Finland poster',
  },
  {
    title: 'Istanbul',
    src: '/visa-posters/istanbul-turkiye.png',
    alt: 'Istanbul Turkiye poster',
  },
  {
    title: 'Stockholm',
    src: '/visa-posters/stockholm-sweden.png',
    alt: 'Stockholm Sweden poster',
  },
  {
    title: 'Berlin',
    src: '/visa-posters/berlin-germany.png',
    alt: 'Berlin Germany poster',
  },
  {
    title: 'Copenhagen',
    src: '/visa-posters/copenhagen-denmark.png',
    alt: 'Copenhagen Denmark poster',
  },
  {
    title: 'Tallinn',
    src: '/visa-posters/tallinn-estonia.png',
    alt: 'Tallinn Estonia poster',
  },
  {
    title: 'Paris',
    src: '/visa-posters/paris-france.png',
    alt: 'Paris France poster',
  },
  {
    title: 'Vienna',
    src: '/visa-posters/vienna-austria.png',
    alt: 'Vienna Austria poster',
  },
] as const;

const visaRouteTabs = [
  { id: 'startup', label: 'Startup Visa' },
  { id: 'nomad', label: 'Nomad Visa' },
  { id: 'investor', label: 'Yatirimci Vizesi' },
] as const;

const visaRouteCards = {
  startup: [
    {
      title: 'Finland Startup Visa',
      description: 'Kurucu ekip, business plan ve finansal kanit tarafinda en dengeli kuzey Avrupa startup rotasi.',
      labels: ['Finland', 'Startup', 'Fast-track'],
      score: '9.6',
      bg: 'bg-[radial-gradient(circle_at_30%_20%,#dbeafe_0%,#93c5fd_35%,#60a5fa_58%,#1d4ed8_100%)]',
      icon: 'FI',
    },
    {
      title: 'Estonia Startup Visa',
      description: 'Dijital devlet yapisi ve yaln sirket operasyonlariyla erken asama ekipler icin guclu alternatif.',
      labels: ['Estonia', 'EU', 'Digital-first'],
      score: '9.1',
      bg: 'bg-[radial-gradient(circle_at_82%_10%,#ccfbf1_0%,transparent_24%),radial-gradient(circle_at_76%_78%,#bfdbfe_0%,#93c5fd_24%,transparent_40%),linear-gradient(145deg,#0f766e_0%,#0ea5e9_36%,#1d4ed8_100%)]',
      icon: 'EE',
    },
    {
      title: 'Denmark Startup Track',
      description: 'Daha secici ama kaliteli ekosistem erisimi isteyen kurucular icin premium Iskandinav secenegi.',
      labels: ['Denmark', 'Scale', 'Nordics'],
      score: '8.8',
      bg: 'bg-[radial-gradient(circle_at_74%_12%,#fecaca_0%,#fca5a5_30%,transparent_32%),radial-gradient(circle_at_24%_76%,#fee2e2_0%,transparent_20%),linear-gradient(145deg,#dc2626_0%,#ef4444_60%,#f59e0b_100%)]',
      icon: 'DK',
    },
  ],
  nomad: [
    {
      title: 'Portugal Nomad Visa',
      description: 'Uzaktan calisanlar icin gelir-gider dengesinde en populer Avrupa rotalarindan biri.',
      labels: ['Portugal', 'Nomad', 'Remote'],
      score: '9.4',
      bg: 'bg-[radial-gradient(circle_at_30%_20%,#fde68a_0%,#fbbf24_35%,#fb923c_58%,#ea580c_100%)]',
      icon: 'PT',
    },
    {
      title: 'Spain Digital Nomad',
      description: 'Iberya hattinda vergi ve yasam dengesi arayan remote profesyoneller icin guclu bir tercih.',
      labels: ['Spain', 'Nomad', 'Lifestyle'],
      score: '9.0',
      bg: 'bg-[radial-gradient(circle_at_82%_10%,#fde68a_0%,transparent_24%),radial-gradient(circle_at_76%_78%,#fecdd3_0%,#fda4af_24%,transparent_40%),linear-gradient(145deg,#dc2626_0%,#f97316_36%,#facc15_100%)]',
      icon: 'ES',
    },
    {
      title: 'Estonia Nomad Visa',
      description: 'Daha teknik calisan ve dijital altyapiyi onemseyen bagimsiz profesyoneller icin sade rota.',
      labels: ['Estonia', 'Nomad', 'Digital'],
      score: '8.7',
      bg: 'bg-[radial-gradient(circle_at_74%_12%,#ccfbf1_0%,#5eead4_30%,transparent_32%),radial-gradient(circle_at_24%_76%,#dbeafe_0%,transparent_20%),linear-gradient(145deg,#0f766e_0%,#0891b2_60%,#2563eb_100%)]',
      icon: 'EE',
    },
  ],
  investor: [
    {
      title: 'UK Innovator Founder',
      description: 'Inovasyon, yatirim ve olcek hikayesini birlikte kurabilen ekipler icin guclu ama secici rota.',
      labels: ['United Kingdom', 'Innovator', 'Investor'],
      score: '8.9',
      bg: 'bg-[radial-gradient(circle_at_30%_20%,#dbeafe_0%,#93c5fd_35%,#fca5a5_58%,#1d4ed8_100%)]',
      icon: 'UK',
    },
    {
      title: 'Netherlands Investor Route',
      description: 'Daha kurumsal ilerleyen, yatirim ve sirketlesme hattini birlikte goturmek isteyenler icin uygun.',
      labels: ['Netherlands', 'Investor', 'Business'],
      score: '8.6',
      bg: 'bg-[radial-gradient(circle_at_82%_10%,#fecaca_0%,transparent_24%),radial-gradient(circle_at_76%_78%,#bfdbfe_0%,#93c5fd_24%,transparent_40%),linear-gradient(145deg,#1d4ed8_0%,#ffffff_36%,#dc2626_100%)]',
      icon: 'NL',
    },
    {
      title: 'Denmark Investor Path',
      description: 'Daha yuksek kalite filtresi ve daha guclu ekonomik zemin arayan yatirimci profilleri icin nis rota.',
      labels: ['Denmark', 'Investor', 'Nordics'],
      score: '8.4',
      bg: 'bg-[radial-gradient(circle_at_74%_12%,#fee2e2_0%,#fca5a5_30%,transparent_32%),radial-gradient(circle_at_24%_76%,#fecdd3_0%,transparent_20%),linear-gradient(145deg,#b91c1c_0%,#ef4444_60%,#1d4ed8_100%)]',
      icon: 'DK',
    },
  ],
} as const;

const sprintLocationCards = [
  {
    title: 'Helsinki Sprint',
    location: 'Helsinki Finland',
    format: 'In-person',
    description:
      'Where Slush was born. Deep engineering roots and the strongest builder community in Northern Europe.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_28%_18%,#dbeafe_0%,#bfdbfe_28%,transparent_30%),linear-gradient(145deg,#0f4c81_0%,#2563eb_45%,#0f172a_100%)]',
    icon: 'HEL',
  },
  {
    title: 'Tallinn Sprint',
    location: 'Tallinn Estonia',
    format: 'In-person',
    description:
      "Home of Transferwise and Skype. Europe's digital capital where founders from around the world converge.",
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_78%_16%,#ccfbf1_0%,transparent_22%),linear-gradient(145deg,#0f766e_0%,#0ea5e9_48%,#1d4ed8_100%)]',
    icon: 'TAL',
  },
  {
    title: 'Stockholm Sprint',
    location: 'Stockholm Sweden',
    format: 'In-person',
    description:
      'Spotify, Klarna, Mojang. The city that keeps producing billion-dollar companies from small teams.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_70%_18%,#fde68a_0%,transparent_24%),linear-gradient(145deg,#1d4ed8_0%,#2563eb_52%,#0f172a_100%)]',
    icon: 'STO',
  },
  {
    title: 'Copenhagen Sprint',
    location: 'Copenhagen Denmark',
    format: 'In-person',
    description:
      'Design-first thinking meets Nordic pragmatism. Where great products look as good as they work.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_72%_20%,#fecaca_0%,transparent_24%),linear-gradient(145deg,#b91c1c_0%,#ef4444_42%,#1f2937_100%)]',
    icon: 'CPH',
  },
  {
    title: 'Istanbul Sprint',
    location: 'Istanbul Turkey',
    format: 'In-person',
    description:
      'Two continents, one city. A fast-moving startup scene with a young, hungry builder generation.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_28%_18%,#fdba74_0%,transparent_24%),linear-gradient(145deg,#c2410c_0%,#ea580c_45%,#1d4ed8_100%)]',
    icon: 'IST',
  },
  {
    title: 'Berlin Sprint',
    location: 'Berlin Germany',
    format: 'In-person',
    description:
      "Europe's startup capital. Raw, diverse, and obsessed with building things that last.",
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_72%_18%,#e5e7eb_0%,transparent_24%),linear-gradient(145deg,#111827_0%,#1f2937_45%,#065f46_100%)]',
    icon: 'BER',
  },
  {
    title: 'Paris Sprint',
    location: 'Paris France',
    format: 'In-person',
    description:
      'Station F changed everything. The city that proved Europe could compete with Silicon Valley.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_72%_18%,#dbeafe_0%,transparent_24%),linear-gradient(145deg,#1d4ed8_0%,#2563eb_42%,#64748b_100%)]',
    icon: 'PAR',
  },
  {
    title: 'Vienna Sprint',
    location: 'Vienna Austria',
    format: 'In-person',
    description:
      'Old world precision meets new world ambition. A quiet but growing hub for deep tech and SaaS.',
    availability: '4 spots/session',
    ctaLabel: 'Join Sprint',
    bg: 'bg-[radial-gradient(circle_at_72%_18%,#e9d5ff_0%,transparent_24%),linear-gradient(145deg,#1d4ed8_0%,#2563eb_44%,#475569_100%)]',
    icon: 'VIE',
  },
] as const;

const serviceCards = [
  {
    title: 'Business Plan Sprint',
    price: '$99',
    description: 'Sadece business plan ve pitch mantığını netleştirmek isteyen kurucular için hafif başlangıç paketi.',
    features: ['Executive summary', '"Neden bu ülke?" çerçevesi', 'Pitch deck yönü', 'İngilizce polish notları'],
  },
  {
    title: 'Full Visa Consulting',
    price: '$499',
    description: 'Vize uygunluğu, belge stratejisi, finansal kanıt, kurucu profili ve relocation setup için tam destek.',
    features: ['Profil analizi', 'Belge checklisti', 'Finans planı', 'Şirket kurma yönü'],
  },
  {
    title: 'Relocation Setup',
    price: '$249',
    description: 'Taşınma sonrası şirketleşme, muhasebe, banka ve ilk operasyon kurulumuna odaklanan servis.',
    features: ['Şirket kurma akışı', 'Muhasebe başlangıcı', 'Vergi setup', 'Adres / banka checklisti'],
  },
];

const visaPackages = [
  {
    title: 'Startup Visa Kit',
    description: 'Finlandiya startup vizesi için başvuru mantığı, business plan omurgası ve finansal kanıt çerçevesi.',
    background:
      'bg-[radial-gradient(circle_at_82%_12%,#d7ff40_0%,transparent_20%),radial-gradient(circle_at_76%_78%,#bfe3ff_0%,#93c5fd_24%,transparent_42%),linear-gradient(145deg,#1722ff_0%,#2441ff_36%,#9dd6ff_100%)]',
    accent: 'Most requested',
    cta: 'Get startup visa kit',
    features: [
      'Eligibility statement yapısı',
      'Business plan yönlendirmesi',
      'Finansal kanıt checklisti',
      'Kurucu profili notları',
      'Hızlı timeline görünümü',
      'Risk ve red flag özeti',
      'Pitch deck narrative',
      'Hazır section akışı',
    ],
  },
  {
    title: 'Full Relocation Kit',
    description: 'Şirket kurma, muhasebe, banka hesabı, vergi başlangıcı ve relocation operasyonlarını birlikte kapsar.',
    background:
      'bg-[radial-gradient(circle_at_80%_14%,#07df34_0%,#12c846_34%,transparent_35%),radial-gradient(circle_at_34%_24%,#ffcc70_0%,#f59e0b_30%,transparent_31%),linear-gradient(145deg,#0f766e_0%,#1d4ed8_60%,#00a4ff_100%)]',
    accent: 'Operations-ready',
    cta: 'Explore relocation kit',
    features: [
      'OY / şirket kurma akışı',
      'Vergi ve KDV başlangıcı',
      'Muhasebe servis yönü',
      'Banka hesabı checklisti',
      'Taşınma bütçesi çerçevesi',
      'Adres ve kayıt notları',
      'Aile / oturum bağlantıları',
      'İlk 90 gün operasyon planı',
    ],
  },
];

const faqData = [
  {
    id: 'faq1',
    question: 'Sadece Finlandiya için mi çalışıyorsunuz?',
    answer:
      'Hayır. Finlandiya startup vizesi ana uzmanlık alanımız olsa da digital nomad, residence permit strategy ve company formation gibi yan servislerde başka ülke alternatifleri de değerlendiriyoruz.',
  },
  {
    id: 'faq2',
    question: 'Hangi servis bana daha uygun?',
    answer:
      'Sadece business plan tarafında netlik istiyorsan sprint paketiyle başlayabilirsin. Başvuru, belge, finans ve taşınma adımlarını birlikte yönetmek istiyorsan full danışmanlık daha doğru olur.',
  },
  {
    id: 'faq3',
    question: 'Başka vize türlerini de karşılaştırabiliyor musunuz?',
    answer:
      'Evet. Profilini, bütçeni, ekip yapını ve zaman planını değerlendirip Finlandiya, Estonya, Almanya, Portekiz gibi alternatif yolları birlikte kıyaslayabiliyoruz.',
  },
];

const visaFooterGroups = [
  {
    title: 'Routes',
    links: ['Finland Startup Visa', 'Digital Nomad Visa', 'Investor Routes', 'Country Comparison'],
  },
  {
    title: 'Services',
    links: ['Business Plan Review', 'Documentation Strategy', 'Relocation Planning', 'Company Setup'],
  },
  {
    title: 'Resources',
    links: ['Eligibility Check', 'Financial Proof Guide', 'Timeline Planning', 'Founder Fit Review'],
  },
];

export function VisaFooterSection() {
  return (
    <footer className="border-t border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f8f7f3_0%,#eef3ff_100%)] text-[var(--text-strong-950)]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-7 lg:py-16">
        <div className="grid gap-10 border-b border-[var(--stroke-soft-200)] pb-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-lg font-semibold tracking-[-0.03em]">HangiVize</span>
            </div>
            <h3 className="mt-5 text-[2.4rem] font-semibold leading-[1] tracking-[-0.06em] text-[var(--text-strong-950)]">
              Visa planning that feels clearer, calmer, and much more strategic.
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1rem] leading-7 text-[var(--text-sub-600)]">
              Compare the right countries, tighten your documents, and move from idea to relocation
              with a cleaner application system.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button.Root
                variant="primary"
                mode="filled"
                size="medium"
                className="h-12 rounded-[14px] px-5"
              >
                Go to dashboard
              </Button.Root>
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="medium"
                className="h-12 rounded-[14px] border-[var(--stroke-soft-200)] bg-white/70 px-5 text-[var(--text-strong-950)] hover:bg-white hover:text-[var(--text-strong-950)]"
              >
                Book a consultation
              </Button.Root>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {visaFooterGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)]">
                  {group.title}
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-[0.98rem] text-[var(--text-sub-600)] transition hover:text-[var(--text-strong-950)]"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-[var(--text-soft-400)] lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 HangiVize. All rights reserved.</p>
          <p>Istanbul-based visa, relocation, and founder advisory system for global applicants.</p>
        </div>
      </div>
    </footer>
  );
}

function VisaHeader() {
  return (
    <header className="border-b border-[var(--stroke-soft-200)] bg-white">
      <div className="mx-auto flex h-[55px] max-w-[1440px] items-center justify-between px-4 md:px-6 xl:px-7">
          <div className="flex items-center gap-8">
            <Link href="/ex3-visa" className="flex items-center gap-3">
              <Logo />
              <span className="text-[15px] font-semibold text-[var(--text-strong-950)]">HangiVize</span>
            </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="#routes"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              Routes
            </Link>
            <Link
              href="#services"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              Services
            </Link>
            <Link
              href="#faq"
              className="rounded-xl px-3 py-2 text-[15px] text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]"
            >
              FAQ
            </Link>
          </nav>
        </div>

        <Link href="/dash4">
          <Button.Root
            variant="primary"
            mode="filled"
            size="medium"
            className="h-10 rounded-[12px] px-4 text-[15px] font-semibold"
          >
            Go to dashboard
          </Button.Root>
        </Link>
      </div>
    </header>
  );
}

function ListDotIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z"
        className="fill-[#1FC16B]"
      />
    </svg>
  );
}

function VisaHeroStackCard({
  card,
  position,
  isActive,
}: {
  card: (typeof visaCards)[number];
  position: number;
  isActive: boolean;
}) {
  const stackTransforms = [
    'translate3d(0,0,0) scale(1) rotate(0deg)',
    'translate3d(-32px,12px,0) scale(0.95) rotate(-4deg)',
    'translate3d(-64px,24px,0) scale(0.89) rotate(-8deg)',
    'translate3d(-96px,36px,0) scale(0.83) rotate(-12deg)',
  ];

  const transform = stackTransforms[Math.min(position, stackTransforms.length - 1)];
  const opacity = position > 3 ? 0 : 1;

  return (
    <div
      className={cn(
        'absolute left-1/2 top-1/2 h-[420px] w-[290px] -translate-y-1/2 overflow-hidden rounded-[2.2rem] border border-white/20 shadow-[0_38px_74px_rgba(15,23,42,0.28)] transition-all duration-500 ease-out',
        card.bg,
        isActive ? 'z-40' : position === 1 ? 'z-30' : position === 2 ? 'z-20' : 'z-10',
      )}
      style={{
        transform: `translateX(-50%) ${transform}`,
        opacity,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(255,255,255,0.26),transparent_22%),radial-gradient(circle_at_76%_82%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.24)_100%)]" />

      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="inline-flex rounded-full bg-white/16 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
            {card.labels[0]}
          </span>
          <span className="inline-flex size-13 items-center justify-center rounded-full bg-white/18 text-[1rem] font-semibold backdrop-blur-sm">
            {card.score}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-end">
          <div className="mb-4 flex flex-wrap gap-2.5">
            {card.labels.slice(1).map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/28 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white/88 backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>

          <h3 className="max-w-[10ch] text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.06em]">{card.title}</h3>
          <p className="mt-3 max-w-[18ch] text-[1.02rem] leading-8 text-white/82">{card.description}</p>
        </div>
      </div>
    </div>
  );
}

function VisaHeroPosterCard({
  card,
  position,
}: {
  card: (typeof visaPosterCards)[number];
  position: number;
}) {
  const stackTransforms = [
    'translate3d(0,0,0) scale(1) rotate(0deg)',
    'translate3d(-26px,12px,0) scale(0.95) rotate(-4deg)',
    'translate3d(-52px,24px,0) scale(0.9) rotate(-8deg)',
    'translate3d(-78px,36px,0) scale(0.85) rotate(-12deg)',
  ];

  const transform = stackTransforms[Math.min(position, stackTransforms.length - 1)];
  const opacity = position > 3 ? 0 : 1;

  return (
    <div
      className={cn(
        'absolute left-1/2 top-1/2 h-[420px] w-[290px] -translate-y-1/2 overflow-hidden rounded-[2rem] border border-[#eadfcf] bg-[#f6eddc] shadow-[0_36px_70px_rgba(27,19,8,0.22)] transition-all duration-500 ease-out',
        position === 0 ? 'z-40' : position === 1 ? 'z-30' : position === 2 ? 'z-20' : 'z-10',
      )}
      style={{
        transform: `translateX(-50%) ${transform}`,
        opacity,
      }}
    >
      <div className="relative h-full w-full bg-[#f6eddc]">
        <Image src={card.src} alt={card.alt} fill sizes="290px" className="object-cover" />
      </div>
    </div>
  );
}

function VisaHeroCard({
  mode = 'default',
  heroCopy = defaultHeroCopy,
}: {
  mode?: 'default' | 'posters';
  heroCopy?: HeroCopy;
}) {
  const sourceCards = mode === 'posters' ? visaPosterCards : visaCards;
  const [cardOrder, setCardOrder] = useState(sourceCards.map((_, index) => index));

  const rotateCards = () => {
    setCardOrder((current) => [...current.slice(1), current[0]]);
  };

  return (
    <div className="relative w-full max-w-[640px]">
        <div className="relative min-h-[500px] px-3.5 pb-4 pt-3.5">
          <button
            type="button"
            onClick={rotateCards}
            className="group relative flex min-h-[430px] w-full items-center justify-center rounded-[1.5rem] outline-none"
            aria-label="Rotate visa cards"
          >
            <div className="absolute inset-x-6 bottom-1 h-16 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.1)_48%,transparent_74%)] blur-2xl" />

            {cardOrder.map((cardIndex, position) =>
              mode === 'posters' ? (
                <VisaHeroPosterCard
                  key={`${visaPosterCards[cardIndex].title}-${position}`}
                  card={visaPosterCards[cardIndex]}
                  position={position}
                />
              ) : (
                <VisaHeroStackCard
                  key={`${visaCards[cardIndex].title}-${position}`}
                  card={visaCards[cardIndex]}
                  position={position}
                  isActive={position === 0}
                />
              ),
            )}
          </button>

          {heroCopy.ctaPlacement === 'right' ? (
            <div className="mt-8 flex justify-center">
              <Link
                href={heroCopy.ctaHref}
                className="inline-flex h-14 shrink-0 items-center justify-center rounded-[18px] bg-[#d4f126] px-6 text-[1rem] font-semibold text-[#341304] shadow-[0_18px_34px_rgba(212,241,38,0.18)]"
              >
                {heroCopy.ctaLabel}
              </Link>
            </div>
          ) : (
            <div className="mt-6 flex items-end justify-between gap-6">
              <div className="max-w-[18rem] pt-1">
                <p className="text-[1rem] font-medium text-[#171717]">Find your visa fit</p>
                <p className="mt-1 text-[0.96rem] text-[#6b7280]">Click the front card to send it to the back.</p>
              </div>

              <Link
                href="/kit7-blueprint/s30"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white text-[#101010] shadow-[0_18px_34px_rgba(15,23,42,0.14)] ring-1 ring-[#ececec]"
              >
                <RiArrowRightLine className="size-5" />
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  price,
  description,
  features,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="rounded-[2rem] border border-white/50 bg-white/75 p-5 shadow-[0_20px_44px_rgba(67,97,238,0.1)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[1.3rem] font-semibold tracking-[-0.04em] text-[var(--text-strong-950)]">{title}</div>
          <p className="mt-2 text-[0.98rem] leading-6 text-[var(--text-sub-600)]">{description}</p>
        </div>
        <div className="rounded-full bg-[#eff6ff] px-3 py-1 text-[0.95rem] font-semibold text-[var(--primary-base)]">
          {price}
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 text-[0.94rem] text-[var(--text-sub-600)]">
            <span className="size-2 rounded-full bg-[var(--primary-base)]" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

type HeroCopy = {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaPlacement?: 'left' | 'right' | 'support';
  supportBlock?: React.ReactNode;
};

type RouteSectionMode = 'default' | 'sprints';

const defaultHeroCopy: HeroCopy = {
  badgeText: 'Visa advisory services',
  title: 'Find the right visa path, then prepare the file properly.',
  description:
    'Finland startup visa is our core route, but we also help founders and remote workers compare other visa types, relocation options, company setup, and accounting needs.',
  ctaLabel: 'Go to dashboard',
  ctaHref: '/dash4',
  ctaPlacement: 'left',
};

export function HeroEx3Visa({
  heroCardMode = 'default',
  heroCopy = defaultHeroCopy,
  routeSectionMode = 'default',
}: {
  heroCardMode?: 'default' | 'posters';
  heroCopy?: HeroCopy;
  routeSectionMode?: RouteSectionMode;
} = {}) {
  const [openItem, setOpenItem] = useState('faq1');
  const [activeRouteTab, setActiveRouteTab] = useState<(typeof visaRouteTabs)[number]['id']>('startup');

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <VisaHeader />

      <div className="relative overflow-x-clip border-b border-[var(--stroke-soft-200)]">
        <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-7 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            <div className="flex w-full flex-col gap-6 xl:max-w-[520px]">
              <div className="flex flex-col">
                <div className="mb-3 flex w-fit items-center gap-2 rounded-xl bg-[var(--bg-weak-50)] py-1 pl-1.5 pr-[9px] lg:mb-4">
                  <Badge.Root className="rounded-[5px] bg-white px-2 py-0.5 shadow-[0_2px_8px_rgba(67,97,238,0.08)]">
                    NEW
                  </Badge.Root>
                  <span className="text-sm text-[var(--text-sub-600)]">{heroCopy.badgeText}</span>
                </div>

                <h1 className="mb-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.07em] text-[var(--text-strong-950)] sm:text-[3rem] lg:text-[3.7rem] xl:text-[4.15rem]">
                  {heroCopy.title}
                </h1>
                <p className="max-w-[44ch] text-[1rem] leading-7 text-[var(--text-sub-600)]">
                  {heroCopy.description}
                </p>

                {heroCopy.supportBlock ? <div className="mt-8">{heroCopy.supportBlock}</div> : null}

                {heroCopy.ctaPlacement !== 'right' && heroCopy.ctaPlacement !== 'support' ? (
                  <div className="mt-6">
                    <Link href={heroCopy.ctaHref}>
                      <Button.Root
                        variant="primary"
                        mode="filled"
                        size="medium"
                        className="h-13 rounded-[18px] px-6 text-[1rem] font-semibold"
                      >
                        {heroCopy.ctaLabel}
                      </Button.Root>
                    </Link>
                  </div>
                ) : null}
              </div>

            </div>

            <div className="mx-auto w-full max-w-[760px] lg:max-w-none">
              <div className="lg:ml-auto lg:w-[74%] xl:w-[70%]">
                <VisaHeroCard mode={heroCardMode} heroCopy={heroCopy} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center bg-white lg:flex lg:border-b lg:border-[var(--stroke-soft-200)]">
        {visaBrands.map((brand, index) => (
          <div
            key={brand.src}
            className={cn(
              'flex w-full justify-center border-t border-[var(--stroke-soft-200)] py-7 lg:border-r lg:border-t-0',
              index === visaBrands.length - 1 ? 'hidden lg:flex lg:border-r-0' : '',
            )}
          >
            <Image src={brand.src} alt={brand.alt} width={106} height={24} className="h-6 w-auto opacity-70 lg:h-5 xl:h-6" />
          </div>
        ))}
      </div>

      <section id="routes" className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f6f8ff_0%,#eef3ff_100%)]">
        <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-7 lg:py-10">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft-400)]">
              {routeSectionMode === 'sprints' ? 'SPRINT LOCATIONS' : 'Visa routes'}
            </div>
            <h2 className="mt-4 text-[2.45rem] font-semibold leading-[0.96] tracking-[-0.07em] text-[var(--text-strong-950)] sm:text-[3rem] lg:text-[4.1rem]">
              {routeSectionMode === 'sprints'
                ? 'Find your city. Show up. Build something.'
                : 'Three standout visa cards, ready to compare'}
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-[1.05rem]">
              {routeSectionMode === 'sprints'
                ? 'Pick a city, meet your team at the café, and spend the weekend building with three strangers.'
                : 'Switch between startup, nomad, and investor paths. See Finland next to Estonia, Denmark, and other real alternatives.'}
            </p>
          </div>

          {routeSectionMode === 'sprints' ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sprintLocationCards.map((card) => (
                <article
                  key={card.title}
                  className="w-full min-w-0 rounded-[2rem] border border-white/50 bg-white/75 p-4 shadow-[0_20px_44px_rgba(67,97,238,0.1)] backdrop-blur"
                >
                  <div
                    className={cn(
                      'relative aspect-[1.08] overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_rgba(15,23,42,0.1)]',
                      card.bg,
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_20%)]" />
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/88 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--text-strong-950)]">
                      {card.location.split(' ')[0]}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-[1.4rem] border border-white/15 bg-white/16 px-5 py-4 text-[2rem] font-semibold tracking-[0.2em] text-white shadow-[0_14px_30px_rgba(255,255,255,0.16)] backdrop-blur-sm">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[var(--stroke-soft-200)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--text-sub-600)]">
                        {card.location}
                      </span>
                      <span className="rounded-full border border-[var(--stroke-soft-200)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--text-sub-600)]">
                        {card.format}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[var(--text-strong-950)]">
                      {card.title}
                    </h3>
                    <p className="mt-2 min-h-[72px] text-[0.98rem] leading-6 text-[var(--text-sub-600)]">{card.description}</p>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="text-[0.98rem] font-medium text-[var(--text-sub-600)]">{card.availability}</div>

                      <Button.Root
                        variant="neutral"
                        mode="stroke"
                        size="medium"
                        className="h-11 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[0.96rem] font-medium text-[var(--text-strong-950)] shadow-none"
                      >
                        {card.ctaLabel} <RiArrowRightUpLongLine className="size-4" />
                      </Button.Root>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-8 flex justify-center">
                <div className="bg-bg-weak-50 inline-flex w-full max-w-[460px] gap-1 rounded-[96px] p-1">
                  {visaRouteTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveRouteTab(tab.id)}
                      className={cn(
                        'flex-1 rounded-[96px] px-3 py-2 text-[14px] font-medium transition',
                        activeRouteTab === tab.id
                          ? 'bg-white text-[var(--text-strong-950)] shadow-custom-input-4'
                          : 'text-[var(--text-sub-600)] hover:bg-white/70',
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:flex lg:min-w-max lg:overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {visaRouteCards[activeRouteTab].map((card) => (
                  <article
                    key={card.title}
                    className="w-full min-w-0 snap-start rounded-[2rem] border border-white/50 bg-white/75 p-4 shadow-[0_20px_44px_rgba(67,97,238,0.1)] backdrop-blur md:max-w-[420px] md:justify-self-center lg:w-[calc((100vw-10rem)/3.4)] lg:min-w-[300px]"
                  >
                    <div
                      className={cn(
                        'relative aspect-[1.08] overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_rgba(15,23,42,0.1)]',
                        card.bg,
                      )}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.2),transparent_20%)]" />
                      <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/88 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--text-strong-950)]">
                        {card.labels[0]}
                      </div>
                      <div className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/18 text-sm font-semibold text-white backdrop-blur">
                        {card.score}
                      </div>
                      <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.4rem] bg-white/24 text-[1.55rem] font-semibold text-white shadow-[0_14px_30px_rgba(255,255,255,0.16)] backdrop-blur-sm">
                        {card.icon}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {card.labels.map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-[var(--stroke-soft-200)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--text-sub-600)]"
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[var(--text-strong-950)]">
                        {card.title}
                      </h3>
                      <p className="mt-2 min-h-[72px] text-[0.98rem] leading-6 text-[var(--text-sub-600)]">{card.description}</p>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-soft-400)]">Score</div>
                          <div className="text-[1.5rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                            {card.score}
                            <span className="ml-1 text-[0.95rem] font-medium text-[var(--text-sub-600)]">/10</span>
                          </div>
                        </div>

                        <Button.Root
                          variant="neutral"
                          mode="stroke"
                          size="medium"
                          className="h-11 rounded-[14px] border-[var(--stroke-soft-200)] bg-white px-5 text-[0.96rem] font-medium text-[var(--text-strong-950)] shadow-none"
                        >
                          View route
                        </Button.Root>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-b border-[var(--stroke-soft-200)] bg-[linear-gradient(180deg,#f8f7f3_0%,#eef3ff_100%)]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-7 lg:py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex flex-col lg:items-center">
              <Badge.Root className="mb-3 h-7 w-fit gap-1.5 rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm normal-case text-[var(--text-sub-600)]">
                Signature kits
              </Badge.Root>
              <h3 className="mb-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--text-strong-950)] lg:text-center xl:text-[3.4rem]">
                Build a visa plan that moves with confidence
              </h3>
              <p className="max-w-[760px] text-[1rem] leading-7 text-[var(--text-sub-600)] lg:text-center">
                Choose a kit that gives your application cleaner structure, stronger documentation logic, and a clearer
                relocation path from day one.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {visaPackages.map((kit, index) => (
                <div
                  key={kit.title}
                  className="relative flex min-w-0 flex-col rounded-[2rem] border border-[rgba(15,23,42,0.06)] bg-[var(--bg-weak-50)] p-1 lg:flex-row"
                >
                  <div className="absolute -right-3 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-[linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,0.09),rgba(15,23,42,0))] lg:block" />
                  <div className={cn('flex flex-1 flex-col justify-between rounded-[1.7rem] p-6 xl:p-8', kit.background)}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 inline-flex rounded-full bg-white/18 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
                        {kit.accent}
                      </div>
                      <h4 className="max-w-[12ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white lg:text-[2.35rem]">
                        {kit.title}
                      </h4>
                      <p className="mt-4 max-w-[22ch] text-[1.02rem] leading-7 text-white/88">{kit.description}</p>
                    </div>

                    <div className="mt-8">
                      <Button.Root
                        variant={index === 0 ? 'primary' : 'neutral'}
                        mode={index === 0 ? 'filled' : 'stroke'}
                        size="medium"
                        className={cn(
                          'mt-6 h-12 w-full gap-2 rounded-[14px]',
                          index === 0
                            ? 'bg-white text-[var(--primary-base)] hover:bg-white/95'
                            : 'border-white/55 bg-white/10 text-white hover:bg-white/15',
                        )}
                      >
                        {kit.cta}
                        <Button.Icon
                          as={RiArrowRightUpLongLine}
                          className={cn('size-5', index === 0 ? 'text-[var(--primary-base)]/70' : 'text-white/75')}
                        />
                      </Button.Root>
                    </div>
                  </div>

                  <div className="w-full rounded-[1.5rem] bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)] lg:w-[280px] xl:p-8">
                    <ul className="flex flex-col gap-4">
                      {kit.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-[var(--text-sub-600)]">
                          <ListDotIcon />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-[var(--stroke-soft-200)] bg-white">
        <div className="mx-auto flex max-w-[924px] flex-col px-6 py-10 lg:px-7 lg:py-20">
          <Badge.Root className="mb-3 h-7 w-fit rounded-[9px] bg-[var(--bg-weak-50)] px-2.5 py-1 text-sm normal-case text-[var(--text-sub-600)] lg:mx-auto">
            Need help?
          </Badge.Root>
          <h3 className="mb-4 text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--text-strong-950)] lg:text-center xl:text-[3.2rem]">
            Frequently asked questions
          </h3>
          <p className="mb-8 text-[1rem] leading-7 text-[var(--text-sub-600)] lg:mb-14 lg:text-center">
            Find quick answers about visa routes, country fit, and which level of support
            makes sense for your relocation plan.
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="flex flex-row gap-6 lg:flex-col">
              <div className="relative h-auto w-35 shrink-0 overflow-hidden rounded-[1.4rem] shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:w-50 lg:w-75 lg:rounded-[1.75rem]">
                <Image
                  src="https://alignui.com/images/blocks/faq-img-1.jpg"
                  alt="Visa advisor"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 lg:left-6 lg:top-6">
                  <span className="flex h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="absolute bottom-0 left-0 flex h-[82%] w-full flex-col justify-end gap-0.5 p-4 lg:h-[54%] lg:p-6">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.12)_24%,rgba(0,0,0,0.52)_100%)]" />
                  <div className="relative text-sm font-medium text-white lg:text-base">Elif Kaya</div>
                  <div className="relative text-xs text-white/65 lg:text-sm">Visa advisory lead</div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[1.125rem] font-semibold leading-8 text-[var(--text-soft-400)] lg:text-[1.45rem]">
                  Need guidance?
                  <span className="block text-[var(--text-strong-950)]">
                    Elif can help you choose the right visa path.
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-sm text-[var(--text-soft-400)]">
                    It is free and takes only a few minutes.
                  </div>
                  <Button.Root
                    variant="neutral"
                    mode="stroke"
                    size="medium"
                    className="h-10 w-fit gap-2 rounded-xl border-[var(--stroke-soft-200)] bg-white"
                  >
                    Book a meeting
                    <Button.Icon
                      as={RiArrowRightUpLongLine}
                      className="size-5 text-[var(--text-sub-600)]/64"
                    />
                  </Button.Root>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full space-y-2.5">
              {faqData.map((faq) => {
                const isOpen = openItem === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-[1.25rem] px-4 py-3 ring-1 ring-[var(--stroke-soft-200)] transition duration-300 lg:px-5 lg:py-4"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenItem(isOpen ? '' : faq.id)}
                      className="flex w-full items-start gap-4 text-left lg:items-center"
                    >
                      <span
                        className={cn(
                          'text-sm font-medium leading-6 transition lg:text-[0.98rem]',
                          isOpen ? 'text-[var(--text-strong-950)]' : 'text-[var(--text-sub-600)]',
                        )}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          'ml-auto flex size-6 items-center justify-center text-[var(--text-soft-400)] transition-transform duration-300',
                          isOpen ? 'rotate-180 text-[var(--text-sub-600)]' : '',
                        )}
                      >
                        <RiArrowDownSLine className="size-6" />
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="pt-3.5 pb-1.5 text-sm leading-6 text-[var(--text-sub-600)]">
                        {faq.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <VisaFooterSection />
    </div>
  );
}



