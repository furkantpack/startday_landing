'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RemixiconComponentType,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLongLine,
  RiBookOpenLine,
  RiFileList3Line,
  RiShieldCheckLine,
} from '@remixicon/react';

import { Ex3Header, FooterSection } from '@/components/landing/hero-ex3';
import * as Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const kitTabs: { id: string; label: string; icon: RemixiconComponentType }[] = [
  { id: 'overview', label: 'Kit Özeti', icon: RiBookOpenLine },
  { id: 'sections', label: '30 Bölüm', icon: RiFileList3Line },
  { id: 'services', label: 'Ek Servisler', icon: RiShieldCheckLine },
];

const kitModules = [
  { title: 'Full Guide', subtitle: 'Baştan sona Finlandiya startup vizesi rehberi' },
  { title: 'Pitch Deck', subtitle: 'Business Finland odaklı deck iskeleti ve yönü' },
  { title: 'Business Plan', subtitle: 'Yazım şablonu ve section bazlı çalışma alanı' },
  { title: 'Checklist', subtitle: 'Belge listesi, zorunluluklar ve hazırlık akışı' },
  { title: 'Finansal Kanıt', subtitle: 'Bakiye, banka ekstresi ve kanıt türleri' },
  { title: 'Vergi', subtitle: 'KDV, gelir vergisi, YEL ve temel uyum çerçevesi' },
  { title: 'Muhasebe', subtitle: 'Finlandiya sonrası muhasebe ve operasyon başlangıcı' },
  { title: 'Şirket Kurma', subtitle: 'OY, PRH, Y-tunnus ve banka hesabı süreci' },
];

const sections = [
  'Fırsat özeti ve neden Finlandiya şimdi',
  'Vize nedir ve kim başvurabilir',
  'Başvurucu profilleri',
  'Başvuru adımları',
  'Rakip ülke karşılaştırması',
  'Business Finland değerlendirmesi',
  '2025-2026 durum analizi',
  'Startup fikir puanlama',
  'Belge checklist yapısı',
  'Ekip ve kurucu profili',
  'Şirket kurma süreci',
  'Startup ekosistemi',
  'Finansal kanıt gereksinimleri',
  'Vergi ve hukuki çerçeve',
  'İş planı çalışma alanı',
  'Zaman çizelgesi ve dönüm noktaları',
  'Başarı hikayeleri',
  'Red gerekçeleri ve çözümleri',
];

const guaranteeList = [
  '30 bölüm, güncel rehber',
  'Adım adım başvuru akışı',
  'İş planı çalışma alanı',
  'Checklist ve puanlama araçları',
  'Ek servis yönlendirmeleri',
];

const serviceIncludes = [
  'Business plan sprint desteği',
  'Muhasebe danışmanlığı yönlendirmesi',
  'Şirket kurulum checklisti',
  'Belge hazırlık çerçevesi',
  'Kurucu profil optimizasyonu',
  'Güncel süreç notları',
];

function ListDotIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z"
        className="fill-[var(--primary-base)]"
      />
    </svg>
  );
}

function FinlandFlagIcon() {
  return (
    <div className="relative h-11 w-11 overflow-hidden rounded-[14px] border border-[#d7e7f2] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.07)]">
      <div className="absolute inset-y-0 left-[34%] w-[20%] bg-[#2563eb]" />
      <div className="absolute inset-x-0 top-[42%] h-[20%] bg-[#2563eb]" />
    </div>
  );
}

function StarsRow() {
  return (
    <div className="mt-2 flex items-center gap-2 text-[0.98rem]">
      <div className="flex items-center gap-0.5 leading-none text-[#f59e0b]" aria-label="5 stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <span className="font-semibold leading-none text-[var(--text-strong-950)]">4.9/5</span>
      <span className="leading-none text-[var(--text-soft-400)]">(212)</span>
    </div>
  );
}

function StickyBuyCard() {
  return (
    <div className="sticky top-24 w-full lg:w-[340px]">
      <div className="overflow-hidden rounded-[28px] border border-[#d7e7f2] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="bg-[#0f172a] px-6 py-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-[18px] bg-[linear-gradient(145deg,#dbeafe_0%,#eff6ff_100%)]">
            <FinlandFlagIcon />
          </div>
          <div className="mt-3 text-[1.75rem] font-semibold tracking-[-0.05em] text-white">Vize Danışmanlığı</div>
          <div className="text-[0.9rem] font-medium uppercase tracking-[0.08em] text-[#93c5fd]">
            Full Support · Finland
          </div>
        </div>

        <div className="space-y-6 p-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[1rem] font-semibold text-[var(--text-strong-950)]">Baştan sona danışmanlık</h5>
            <p className="text-[0.95rem] leading-6 text-[var(--text-sub-600)]">
              Uygunluk kontrolü, belge stratejisi, business plan yönlendirmesi ve süreç koordinasyonu dahil daha
              yüksek dokunuşlu destek paketi.
            </p>
          </div>

          <div className="relative flex items-end gap-2 before:absolute before:-left-6 before:top-1/2 before:h-full before:w-0.5 before:-translate-y-1/2 before:bg-[var(--primary-base)]">
            <span className="text-[3rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text-strong-950)]">
              $499
            </span>
            <span className="pb-1 text-[1rem] text-[var(--text-sub-600)]">one-time</span>
          </div>

          <ul className="space-y-3 border-t border-[#e7eef6] pt-5">
            {guaranteeList.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.96rem] text-[var(--text-sub-600)]">
                <ListDotIcon />
                {item}
              </li>
            ))}
          </ul>

          <Button.Root variant="primary" mode="filled" size="medium" className="h-12 w-full gap-2 rounded-[14px] text-[1rem]">
            Danışmanlık al
            <Button.Icon as={RiArrowRightUpLongLine} className="size-5 text-white" />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-4">
      <section className="rounded-[24px] border border-[#d7e7f2] bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="mb-4 px-1 sm:mb-5">
          <div className="text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
            Kitin içinde neler var
          </div>
          <p className="mt-1 text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
            Başvurudan taşınmaya kadar süreci daha doğru planlamak için gereken ana başlıkları tek yerde toplar.
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-[#d7e7f2] bg-white">
          <div className="grid grid-cols-3">
            {kitModules.map((module, index) => {
              const isLastRow = index >= 6;
              const isRightColumn = index % 3 === 2;

              return (
                <div
                  key={module.title}
                  className={cn(
                    'flex min-h-[92px] items-center p-4 sm:min-h-[132px] sm:p-6',
                    !isLastRow && 'border-b border-[#d7e7f2]',
                    !isRightColumn && 'border-r border-[#d7e7f2]',
                  )}
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[0.98rem] font-semibold text-[var(--text-strong-950)] sm:text-[1.08rem]">
                      {module.title}
                    </div>
                    <div className="max-w-[20ch] text-[0.84rem] leading-6 text-[var(--text-soft-400)] sm:text-[0.92rem]">
                      {module.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex min-h-[92px] items-center justify-center p-4 text-center sm:min-h-[132px] sm:p-6">
              <span className="text-[0.95rem] font-medium text-[var(--text-soft-400)] sm:text-[1rem]">
                ve daha fazlası
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7e7f2] py-6 sm:py-8">
        <div className="mb-6 text-center sm:mb-8">
          <div className="text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)] sm:text-[1.75rem]">
            Neden bu kit işine yarar
          </div>
          <p className="mt-1 text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
            Dağınık forum bilgileri, danışman satış dili ve eksik checklist yerine daha net bir karar zemini sağlar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
          <div className="flex flex-col items-center px-4 text-center sm:px-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#d7e7f2] text-[#2563eb]">
              <RiFileList3Line className="size-5" />
            </div>
            <div className="text-[2.05rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text-strong-950)]">
              30
            </div>
            <div className="mt-3 text-[1.05rem] font-medium text-[var(--text-strong-950)]">Hazır bölüm</div>
            <p className="mt-2 max-w-[22ch] text-[0.98rem] leading-7 text-[var(--text-soft-400)]">
              Vize uygunluğu, ekip yapısı, finansal kanıt ve taşınma planı dahil.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 text-center sm:border-l sm:border-r sm:border-[#d7e7f2] sm:px-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#d7e7f2] text-[#10b981]">
              <RiShieldCheckLine className="size-5" />
            </div>
            <div className="text-[2.05rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text-strong-950)]">
              14 gün
            </div>
            <div className="mt-3 text-[1.05rem] font-medium text-[var(--text-strong-950)]">Fast-track odağı</div>
            <p className="mt-2 max-w-[22ch] text-[0.98rem] leading-7 text-[var(--text-soft-400)]">
              Doğru hazırlanmış bir dosyada zaman çizelgesi ve darboğazlar daha görünür olur.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 text-center sm:px-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#d7e7f2] text-[#f59e0b]">
              <RiBookOpenLine className="size-5" />
            </div>
            <div className="text-[2.05rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text-strong-950)]">
              1 kit
            </div>
            <div className="mt-3 text-[1.05rem] font-medium text-[var(--text-strong-950)]">Daha net hazırlık</div>
            <p className="mt-2 max-w-[22ch] text-[0.98rem] leading-7 text-[var(--text-soft-400)]">
              İş planı, belge seti ve ek servis kararlarını aynı sistem içinde görürsün.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionsContent() {
  return (
    <section className="rounded-[24px] border border-[#d7e7f2] bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.04)]">
      <div className="text-[1.75rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
        30 bölümden oluşan rehber yapı
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={section}
            className="flex items-start gap-3 rounded-[16px] border border-[#e3edf7] bg-[#f8fbff] px-4 py-3"
          >
            <div className="pt-0.5 text-[0.92rem] font-semibold text-[var(--primary-base)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="text-[0.98rem] leading-6 text-[var(--text-sub-600)]">{section}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesContent() {
  return (
    <section className="rounded-[24px] border border-[#d7e7f2] bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.04)] lg:p-7">
      <div className="max-w-[760px]">
        <div className="mb-4 inline-flex h-7 w-fit items-center rounded-full bg-[#eff6ff] px-3 text-[0.74rem] font-medium uppercase tracking-[0.08em] text-[#2563eb]">
          Business plan servisi
        </div>
        <h3 className="text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)] lg:text-[1.9rem]">
          Business plan dosyanı birlikte netleştirelim
        </h3>
        <p className="mt-3 max-w-[58ch] text-[0.98rem] leading-7 text-[var(--text-sub-600)]">
          Bu servis yalnızca Business Finland başvurusunda kullanacağın iş planı ve pitch mantığına odaklanır.
          Fikrini daha savunulabilir hale getirmek, “neden Finlandiya” bölümünü güçlendirmek ve yazılı cevapları
          temizlemek için hafif ama odaklı bir çalışma alanı sunar.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="rounded-[20px] border border-[#e3edf7] bg-[#f8fbff] p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Executive summary çerçevesi',
              'Problem / çözüm netleştirme',
              'Pazar ve rakip yazım yönü',
              '12 aylık plan ve metrik dili',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-[14px] border border-[#e3edf7] bg-white px-3 py-3 text-[0.95rem] text-[var(--text-sub-600)]">
                <ListDotIcon />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-[#e3edf7] bg-white p-5">
          <div className="text-[0.8rem] uppercase tracking-[0.08em] text-[var(--text-soft-400)]">Business plan</div>
          <div className="mt-2 text-[2.4rem] font-semibold tracking-[-0.06em] text-[var(--text-strong-950)]">$99</div>
          <div className="mt-1 text-[0.95rem] text-[var(--text-sub-600)]">one-time</div>
          <Button.Root variant="primary" mode="filled" size="medium" className="mt-5 h-11 w-full gap-2 rounded-[14px]">
            Planı hazırla
            <Button.Icon as={RiArrowRightUpLongLine} className="size-5 text-white" />
          </Button.Root>
        </div>
      </div>
    </section>
  );
}

export function KitMain2Page() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const tabOrder = kitTabs.map((tab) => tab.id);
  const currentIndex = tabOrder.indexOf(activeTab);
  const showStickyCard = activeTab !== 'services';

  const content = useMemo(() => {
    if (activeTab === 'services') return <ServicesContent />;
    if (activeTab === 'sections') return <SectionsContent />;
    return <OverviewContent />;
  }, [activeTab]);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setActiveTab(tabOrder[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex >= tabOrder.length - 1) return;
    setActiveTab(tabOrder[currentIndex + 1]);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-page)]">
      <Ex3Header />

      <section className="border-b border-[var(--stroke-soft-200)] bg-white">
        <div className="py-0">
          <div className="overflow-hidden border-y border-[#d7e7f2] bg-white">
            <div className="relative overflow-hidden bg-[linear-gradient(180deg,#d9ecff_0%,#eef6ff_54%,#f8fbff_100%)] px-4 py-4 sm:px-6 sm:py-4 lg:px-7 lg:py-5">
              <div className="mx-auto max-w-[1180px]">
                <div className="relative aspect-[5.12/1] min-h-[88px] w-full sm:min-h-[112px] lg:min-h-[118px]">
                  <div className="absolute inset-0">
                    <div className="absolute left-[-3%] top-[34%] h-28 w-28 rounded-full bg-white/85 blur-[2px] sm:h-40 sm:w-40" />
                    <div className="absolute left-[8%] bottom-[-4%] h-32 w-44 rounded-[999px] bg-white/92 sm:h-44 sm:w-60" />
                    <div className="absolute right-[-2%] top-[18%] h-32 w-32 rounded-full bg-white/88 sm:h-48 sm:w-48" />
                    <div className="absolute right-[5%] bottom-[-6%] h-32 w-44 rounded-[999px] bg-white/95 sm:h-44 sm:w-60" />
                    <div className="absolute left-[18%] top-[18%] h-14 w-14 rounded-full bg-white/55 blur-md sm:h-20 sm:w-20" />
                    <div className="absolute right-[22%] top-[24%] h-16 w-16 rounded-full bg-white/45 blur-md sm:h-24 sm:w-24" />
                  </div>

                  <div className="absolute left-[6%] bottom-[10%] hidden items-end gap-3 opacity-[0.18] lg:flex">
                    <span className="block h-10 w-20 rounded-t-[20px] bg-[#2563eb]" />
                    <span className="block h-14 w-10 rounded-t-[16px] bg-[#2563eb]" />
                    <span className="block h-20 w-14 rounded-t-[22px] bg-[#2563eb]" />
                    <span className="block h-12 w-9 rounded-t-[14px] bg-[#2563eb]" />
                    <span className="block h-16 w-16 rounded-t-[20px] bg-[#2563eb]" />
                  </div>

                  <div className="absolute left-[18%] top-[14%] hidden rotate-[28deg] opacity-[0.1] lg:block">
                    <div className="flex gap-8">
                      <span className="block h-28 w-11 rounded-full bg-[#2563eb]" />
                      <span className="block h-44 w-11 rounded-full bg-[#2563eb]" />
                      <span className="block h-36 w-11 rounded-full bg-[#2563eb]" />
                    </div>
                  </div>

                  <div className="absolute right-[10%] top-[20%] hidden h-20 w-20 items-center justify-center rounded-full border border-[#bfdbfe] bg-white/60 lg:flex">
                    <div className="relative h-10 w-10 overflow-hidden rounded-[8px] bg-white shadow-[0_8px_18px_rgba(37,99,235,0.1)]">
                      <span className="absolute inset-y-0 left-[35%] w-[18%] bg-[#2563eb]" />
                      <span className="absolute inset-x-0 top-[40%] h-[18%] bg-[#2563eb]" />
                    </div>
                  </div>

                  <div className="relative z-10 ml-auto flex h-full max-w-[560px] items-center">
                    <div>
                      <div className="text-[1.65rem] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101828] sm:text-[2.2rem] lg:text-[3.1rem]">
                        Finlandiya startup vizesi için <span className="text-[var(--primary-base)]">daha net</span> bir hazırlık sistemi
                      </div>
                      <p className="mt-3 max-w-[32ch] text-[0.92rem] leading-7 text-[#475467] sm:text-[0.98rem]">
                        Uygunluk, ekip yapısı, finansal kanıt, iş planı ve taşınma adımlarını tek bir kit içinde toparlar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-7">
              <div className="relative border-t border-[#eef2f6] bg-white px-0 py-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative -mt-16 flex size-[116px] shrink-0 items-center justify-center rounded-[24px] border border-[#dfe8ef] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)] sm:-mt-18 lg:-mt-20">
                      <div className="flex size-[90px] items-center justify-center rounded-[20px] bg-white">
                        <div className="relative h-14 w-14 overflow-hidden rounded-[14px] border border-[#d7e7f2] bg-white">
                          <div className="absolute inset-y-0 left-[34%] w-[20%] bg-[#2563eb]" />
                          <div className="absolute inset-x-0 top-[42%] h-[20%] bg-[#2563eb]" />
                        </div>
                      </div>
                      <div className="absolute -right-2 -top-3 rounded-[10px] border border-[#1d4ed8] bg-white px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
                        <div className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
                          2026 edition
                        </div>
                        <div className="mt-1 text-[1rem] font-semibold tracking-[-0.04em] text-[#101828]">
                          Finland
                        </div>
                      </div>
                    </div>

                    <div className="pb-1">
                      <div className="text-[2.3rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text-strong-950)] sm:text-[2.7rem]">
                        Finland Startup Visa
                      </div>
                      <div className="mt-3 text-[1.02rem] text-[var(--text-sub-600)]">
                        By <span className="font-medium text-[var(--primary-base)]">HangiVize</span>
                      </div>
                      <StarsRow />
                    </div>
                  </div>

                  <div className="pb-2 text-left sm:text-right">
                    <div className="inline-flex rounded-full border border-[#d7e7f2] bg-[#f8fbff] px-4 py-2 text-[0.85rem] font-medium text-[var(--text-sub-600)]">
                      Full guide · business plan · finance · company setup
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-[1180px] bg-white px-4 pb-1 sm:px-6 lg:px-7">
              <div className="border-stroke-soft-200 relative mb-4 flex w-[calc(100%+32px)] overflow-hidden border-t border-b lg:hidden">
                <RiArrowLeftSLine
                  onClick={handlePrev}
                  className={`${currentIndex <= 0 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
                />
                <RiArrowRightSLine
                  onClick={handleNext}
                  className={`${currentIndex >= tabOrder.length - 1 ? 'pointer-events-none opacity-30' : 'cursor-pointer'} text-text-soft-400 absolute right-4 top-1/2 z-10 size-5 -translate-y-1/2 transition-all duration-300`}
                />
                <div
                  className="flex w-full flex-nowrap transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {kitTabs.map((tab) => (
                    <div
                      key={tab.id}
                      className="group/tab hover:bg-bg-white-0 hover:text-text-strong-950 flex w-full shrink-0 cursor-pointer items-center justify-center gap-1.5 px-13 py-4 shadow-none transition-all duration-300"
                      data-tab={tab.id}
                      data-active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <tab.icon className="text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300" />
                      <span className="text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300">
                        {tab.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-weak-50 mb-1 hidden w-fit gap-1 rounded-[96px] p-1 lg:flex">
                {kitTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="group/tab hover:bg-bg-white-0 hover:text-text-strong-950 data-[active=true]:bg-bg-white-0 data-[active=true]:shadow-custom-input-4 flex cursor-pointer items-center gap-1.5 rounded-[96px] px-3 py-2 shadow-none transition-all duration-300"
                    data-tab={tab.id}
                    data-active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="text-text-disabled-300 group-data-[active=true]/tab:text-primary-base size-4.5 transition-all duration-300" />
                    <span className="text-label-sm text-text-sub-600 group-data-[active=true]/tab:text-text-strong-950 transition-all duration-300">
                      {tab.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-7">
          <div
            className={cn(
              'mx-auto max-w-[1180px] gap-6 lg:items-start',
              showStickyCard ? 'grid lg:grid-cols-[minmax(0,1fr)_340px]' : 'block',
            )}
          >
            <div className="min-w-0">{content}</div>
            {showStickyCard ? <StickyBuyCard /> : null}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}


