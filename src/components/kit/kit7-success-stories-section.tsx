'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RiArrowLeftLongLine, RiArrowRightLongLine } from '@remixicon/react';

const reviewCards = [
  {
    date: '24 July 2025',
    rating: '4.8/5',
    source: 'Founder review',
    quote: 'Başvuruyu yeniden çerçeveledikten sonra neden Finlandiya kısmı ilk kez gerçekten ikna edici hale geldi.',
    name: 'Anonim Kurucu',
    title: 'B2B SaaS / Türkiye → Helsinki',
    accent: 'before:bg-[#12b76a]',
  },
  {
    date: '12 Jun 2025',
    rating: '4.9/5',
    source: 'Founder review',
    quote: 'Pazar büyüklüğünü veriyle anlatmak ve ekip tamamlayıcılığını net yazmak başvuruyu tamamen değiştirdi.',
    name: 'Anonim Ekip',
    title: 'HealthTech / 3 Kurucu',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    date: '19 May 2025',
    rating: '4.7/5',
    source: 'Founder review',
    quote: 'İlk red sonrası asıl sorunun fikir değil, tek kurucu görünümü olduğunu fark ettik.',
    name: 'Anonim Başvurucu',
    title: 'Solo → 2 Kurucu',
    accent: 'before:bg-[#4361ee]',
  },
  {
    date: '03 Apr 2025',
    rating: '4.8/5',
    source: 'Founder review',
    quote: 'Pilot müşteri kanıtı sunduğumuz anda dosya çok daha güvenilir görünmeye başladı.',
    name: 'Anonim Kurucu',
    title: 'SaaS / Pilot Kanıtlı',
    accent: 'before:bg-[#f59e0b]',
  },
  {
    date: '18 Mar 2025',
    rating: '4.6/5',
    source: 'Founder review',
    quote: 'Finlandiya bağlantısını yüzeysel değil, gerçek partner ve ekosistem temaslarıyla yazmak kritikmiş.',
    name: 'Anonim Ekip',
    title: 'Marketplace / Finlandiya Bağlantılı',
    accent: 'before:bg-[#ec4899]',
  },
];

const spotlightStories = [
  {
    id: 'a',
    badge: 'Profil A',
    title: 'B2B SaaS, İki Kurucu',
    subtitle: 'Türkiye → Helsinki',
    quote:
      'İlk başvuruda ek bilgi talebi aldılar. “Neden Finlandiya” kısmını pilot görüşme ve somut pazar verisiyle güçlendirince ikinci değerlendirmede onay geldı.',
    highlight: 'Ders: Finlandiya bağlantısını teorik değil, kanıtlı anlat.',
    summary:
      'Bir yazılım geliştirici + bir satış uzmanı. İş modeli: inşaat sektörü için proje yönetimi SaaS. €42B küresel pazar verisiyle başvuru güçlendirildi. İki hafta içinde Finlandiyalı bir inşaat firmasıyla pilot görüşme kanıtı sunuldu ve toplam süreç 3 ayda tamamlandı.',
    initials: 'AH',
    stats: [
      { label: 'Toplam süre', value: '3 ay' },
      { label: 'Ek bilgi turu', value: '1 kez' },
    ],
  },
  {
    id: 'b',
    badge: 'Profil B',
    title: 'HealthTech, Üç Kurucu',
    subtitle: 'Doktor + Mühendis + BD',
    quote:
      'Ekip tamamlayıcılığı ve klinik kanıt planı dosyanın merkezine yerleşti. Güçlü finansal tampon başvuruyu daha da sağlamlaştırdı.',
    highlight: 'Ders: güçlü ekip + güçlü finansal kanıt çok hızlı fark yaratır.',
    summary:
      'Bir doktor, bir yazılım mühendisi ve bir iş geliştirme uzmanı. Finlandiya sağlık sistemiyle potansiyel entegrasyon ve Aalto bağlantısı güçlü sinyal oldu. €85,000 banka kanıtı sunuldu ve 5 hafta içinde ek bilgi talebi olmadan onay alındı.',
    initials: 'BK',
    stats: [
      { label: 'Banka kanıtı', value: '€85K' },
      { label: 'Onay süresi', value: '5 hf' },
    ],
  },
  {
    id: 'c',
    badge: 'Profil C',
    title: 'Solo Founder, Red Sonrası Tekrar Başvuru',
    subtitle: 'Tek kurucu → gerçek co-founder',
    quote:
      'İlk red, ekip yapısının zayıflığından geldi. İkinci başvuruda co-founder katkısı gerçek ve net tanımlandığında tablo değişti.',
    highlight: 'Ders: solo founder görünümünden kaçın; gerçek katkı şart.',
    summary:
      'İlk başvuru ekip gerekliliği nedeniyle reddedildi. Altı ay sonra eşiyle birlikte yeniden başvurdu; eşinin finans geçmişi şirkete gerçek operasyonel değer kattı. İş modeli uluslararası büyüme hedefleriyle netleştirildi ve ikinci denemede onay alındı.',
    initials: 'CR',
    stats: [
      { label: 'Tekrar başvuru', value: '+6 ay' },
      { label: 'Sonuç', value: 'Onay' },
    ],
  },
];

export function Kit7SuccessStoriesSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const visibleReviews = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3; i += 1) {
      items.push(reviewCards[(reviewIndex + i) % reviewCards.length]);
    }
    return items;
  }, [reviewIndex]);

  const activeStory = spotlightStories[storyIndex];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="inline-flex rounded-full border border-[#dbe7ff] bg-[#f8fbff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4361ee]">
          Başarı Hikayeleri
        </div>
        <div className="mt-4 text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Gerçek Başvuruculardan Dersler
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Business Finland değerlendirme sürecinden geçmiş kişilerin deneyimleri hem motivasyon hem de pratik rehberlik
          sunuyor. Aşağıdaki profiller gerçek başvurucuların deneyimlerine dayanıyor ancak kimlik bilgileri gizlenmiştir.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] lg:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Kurucu yorumları</div>
            <p className="mt-2 text-[15px] leading-7 text-[#475467]">
              Başvurudan sonra en çok tekrar edilen noktalar: net pazar verisi, gerçek ekip katkısı ve Finlandiya’ya
              özel bağlantı.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setReviewIndex((prev) => (prev - 1 + reviewCards.length) % reviewCards.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d0d5dd] bg-white text-[#344054] transition hover:bg-[#f8fafc]"
            >
              <RiArrowLeftLongLine className="size-5" />
            </button>
            <button
              onClick={() => setReviewIndex((prev) => (prev + 1) % reviewCards.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d0d5dd] bg-white text-[#344054] transition hover:bg-[#f8fafc]"
            >
              <RiArrowRightLongLine className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {visibleReviews.map((review) => (
            <div
              key={`${review.date}-${review.name}`}
              className={`relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[28px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${review.accent}`}
            >
              <div className="text-[13px] text-[#98a2b3]">{review.date}</div>
              <div className="flex flex-1 flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#f5f7fb] px-3 py-1.5 text-[12px] font-semibold text-[#101828]">
                    {review.rating}
                  </div>
                  <div className="text-[13px] text-[#667085]">{review.source}</div>
                </div>
                <div className="text-[24px] leading-9 font-semibold tracking-[-0.04em] text-[#101828]">{review.quote}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[15px] font-medium text-[#101828]">{review.name}</div>
                <div className="text-[14px] text-[#667085]">{review.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)] lg:p-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Detaylı profil incelemesi</div>
            <p className="mt-2 text-[15px] leading-7 text-[#475467]">
              Üç farklı başvuru tipi üzerinden hangi yapıların işe yaradığını karşılaştır.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {spotlightStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setStoryIndex(index)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  index === storyIndex
                    ? 'bg-[#101828] text-white'
                    : 'border border-[#d0d5dd] bg-white text-[#344054] hover:bg-[#f8fafc]'
                }`}
              >
                {story.badge}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-3">
          <div className="order-2 flex w-[calc(43%-6px)] overflow-hidden rounded-[24px] border border-[#e6eaf2] shadow-[0_8px_18px_rgba(15,23,42,0.06)] lg:order-1 lg:w-[calc(22%-8px)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="flex min-h-[312px] w-full flex-col justify-between bg-[linear-gradient(160deg,#e7efff_0%,#f0f5ff_50%,#f7f3ff_100%)] p-5"
              >
                <div className="w-fit rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-[#4361ee]">
                  {activeStory.badge}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[14px] font-medium text-[#667085]">{activeStory.subtitle}</div>
                    <div className="mt-1 text-[20px] font-semibold tracking-[-0.04em] text-[#101828]">{activeStory.title}</div>
                  </div>
                  <div className="flex size-14 items-center justify-center rounded-[18px] bg-white text-[18px] font-semibold text-[#101828] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                    {activeStory.initials}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-4 flex w-full overflow-hidden rounded-[24px] border border-[#e6eaf2] bg-[#fbfcfe] lg:order-2 lg:w-[calc(56%-8px)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.3 }}
                className="flex h-full w-full flex-col justify-between gap-7 p-5 lg:p-6 xl:p-7"
              >
                <div className="flex flex-col gap-2">
                  <div className="text-[14px] font-medium text-[#101828]">{activeStory.title}</div>
                  <div className="text-[14px] text-[#667085]">{activeStory.subtitle}</div>
                </div>

                <div className="text-[22px] leading-[1.45] font-semibold tracking-[-0.04em] text-[#475467] lg:text-[26px]">
                  {activeStory.quote}{' '}
                  <span className="text-[#101828]">{activeStory.highlight}</span>
                </div>

                <div className="rounded-[20px] border border-[#e6eaf2] bg-white p-4 text-[14px] leading-7 text-[#475467]">
                  {activeStory.summary}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-3 flex h-auto w-[calc(57%-6px)] flex-col gap-3 lg:order-3 lg:w-[calc(22%-8px)]">
            {activeStory.stats.map((stat, index) => {
              const isApproval = stat.value.toLowerCase().includes('onay');

              return (
              <AnimatePresence mode="wait" key={`${activeStory.id}-${stat.label}`}>
                <motion.div
                  key={`${activeStory.id}-${stat.label}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.28, delay: index * 0.06 }}
                  className={`flex flex-1 flex-col justify-end gap-2 rounded-[24px] border p-4 lg:p-5 xl:px-6 xl:py-6 ${
                    isApproval
                      ? 'border-[#cfead6] bg-[linear-gradient(180deg,#f5fcf7_0%,#eefbf2_100%)]'
                      : 'border-[#e6eaf2] bg-[#f8fafc]'
                  }`}
                >
                  <p className={`text-[14px] ${isApproval ? 'text-[#067647]' : 'text-[#667085]'}`}>{stat.label}</p>
                  <h3
                    className={`text-[22px] font-semibold tracking-[-0.05em] xl:text-[26px] ${
                      isApproval ? 'text-[#067647]' : 'text-[#101828]'
                    }`}
                  >
                    {stat.value}
                  </h3>
                </motion.div>
              </AnimatePresence>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-[#d7f0e9] bg-[linear-gradient(135deg,#f2fffb_0%,#eff6ff_100%)] px-6 py-5 text-[15px] leading-8 text-[#475467] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <span className="font-semibold text-[#0f766e]">Ortak başarı faktörleri:</span> Somut pazar verileri kullanmak,
        ekip tamamlayıcılığını açıkça ortaya koymak, Finlandiya'ya özel bağlantı noktaları sunmak ve yeterli finansal
        tampon göstermek.
      </div>
    </section>
  );
}
