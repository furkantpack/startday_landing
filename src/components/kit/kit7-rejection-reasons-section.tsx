'use client';

import { useState } from 'react';
import { RiArrowRightUpLongLine, RiAddLine, RiSubtractLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

const faqData = [
  {
    id: 'red1',
    question: 'Red 01: Solo founder başvurusu',
    answer:
      'Neden reddedilir: Business Finland ekip sinerjisi arıyor; tek kişi bu kriteri nadiren karşılıyor.\n\nÇözüm: Başvurmadan önce gerçek bir co-founder bul. Tamamlayıcı beceri olması şart. Ekip oluşturmak için 2–4 ay ayır.\n\nPratik: Kiuas veya Startup Sauna etkinliklerinden co-founder bağlantısı kur.',
  },
  {
    id: 'red2',
    question: 'Red 02: Yetersiz finansal kanıt',
    answer:
      'Neden reddedilir: Banka hesabında yeterli bakiye yok veya son aylarda aniden artan şüpheli para girişi.\n\nÇözüm: Başvurudan en az 3–6 ay önce hesaplarda €29,000+ bulundur. Para transferleri varsa açıklayıcı belge ekle. Yatırımcı mektubu iyi bir alternatif.\n\nPratik: Banka ekstresinin son 3 ayı göstermesi isteniyor; bu 3 ayı temiz ve istikrarlı tut.',
  },
  {
    id: 'red3',
    question: 'Red 03: Ölçeklenemeyen iş modeli',
    answer:
      'Neden reddedilir: Danışmanlık, ajans, yerel hizmet veya fiziksel ürün satan işletmeler kriterleri karşılamıyor.\n\nÇözüm: İş modelini yazılım, platform veya ölçeklenebilir hizmet olarak yeniden çerçevele.\n\nPratik: Fiziksel ürün satıyorsan ürünün etrafında yazılım/platform katmanı oluştur.',
  },
  {
    id: 'red4',
    question: 'Red 04: "Neden Finlandiya" sorusuna zayıf yanıt',
    answer:
      'Neden reddedilir: “Finlandiya güzel ülke” gibi cevaplar ticari gerekçe sunmuyor.\n\nÇözüm: Finlandiya’ya özel somut bağlantı oluştur: hedef müşteri, partner, ekosistem veya teknoloji bağlantısı.\n\nPratik: LinkedIn’den ilgili Fin şirketleriyle iletişime geç; hatta bir görüşme yap.',
  },
  {
    id: 'red5',
    question: 'Red 05: Büyüme planı somut değil',
    answer:
      'Neden reddedilir: “Büyüyeceğiz” gibi belirsiz ifadeler yeterli değil.\n\nÇözüm: 12 aylık somut hedefler tanımla: müşteri, MRR, ekip, kanal ve ülke bazlı plan yaz.\n\nPratik: Benzer şirketlerin büyüme eğrisini referans al.',
  },
  {
    id: 'red6',
    question: 'Red 06: Ekip uzmanlıkları örtüşüyor',
    answer:
      'Neden reddedilir: İki yazılımcı veya iki pazarlama uzmanından oluşan ekip yeterli tamamlayıcılık sunmuyor.\n\nÇözüm: Ekip rollerini netleştir ve farklılaştır. Teknik ekipten biri ticari rol üstleniyorsa bunu açıkça yaz.\n\nPratik: Kimin CTO, kimin CEO olduğunu net belirt.',
  },
  {
    id: 'red7',
    question: 'Red 07: Müşteri talebi kanıtlanmamış',
    answer:
      'Neden reddedilir: Tamamen varsayıma dayanan, hiç müşteri görüşmesi yapılmamış fikirler zayıf görünür.\n\nÇözüm: En az 10–15 potansiyel müşteriyle görüşme yap ve sonuçları belgele. LOI veya pilot müşteri çok güçlü sinyaldir.\n\nPratik: Bir görüşme özeti bile sıfır kanıttan çok daha iyi.',
  },
  {
    id: 'red8',
    question: 'Red 08: Ücret karşılığı sahte co-founder',
    answer:
      'Neden reddedilir: Sahte kurucu yapıları başvuruyu geçersiz kılar.\n\nÇözüm: Gerçek co-founder bul. Danışman veya advisor rolünü ayrı göster; kurucu gibi sunma.\n\nPratik: Danışman katkısını advisory board olarak yaz; şeffaf ol.',
  },
  {
    id: 'red9',
    question: 'Red 09: IP / fikri mülkiyet başka ülkede',
    answer:
      'Neden reddedilir: Mevcut şirketin IP’si başka ülkede ve Finlandiya’ya transfer planı belirsiz.\n\nÇözüm: IP transferi planını zaman çizelgesiyle anlat. Gerekirse hukuki danışman desteğiyle ön sözleşme hazırla.\n\nPratik: “6 ay içinde transfer” gibi net takvim ver.',
  },
  {
    id: 'red10',
    question: 'Red 10: Başvuru dili ve kalitesi',
    answer:
      'Neden reddedilir: Dilbilgisi hatalı, dağınık veya profesyonel görünmeyen İngilizce değerlendirmeyi zayıflatır.\n\nÇözüm: Native speaker veya profesyonel editörden geçir. Net, kısa ve aktif cümleler kullan.\n\nPratik: Her bölümü önce Türkçe yaz, sonra iş İngilizcesine çevir ve tekrar gözden geçir.',
  },
];

export function Kit7RejectionReasonsSection() {
  const [openId, setOpenId] = useState<string>('red1');

  return (
    <section className="mt-10 space-y-8">
      <div className="mx-auto flex max-w-[924px] flex-col">
        <Badge.Root
          variant="filled"
          color="gray"
          className="mb-3 h-7 w-fit rounded-[9px] px-3 normal-case lg:mx-auto"
        >
          Need help?
        </Badge.Root>
        <div className="mb-4 text-[34px] font-semibold tracking-[-0.025em] text-[#101828] lg:text-center">
          Red Gerekçeleri &amp; Çözümleri
        </div>
        <div className="mb-8 text-[16px] leading-8 text-[#667085] lg:mb-16 lg:text-center">
          En yaygın 10 hata ve nasıl önlenir. Her red gerekçesinin altında net çözüm ve tek bir pratik aksiyon var.
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex flex-row gap-6 lg:flex-col">
            <div className="relative h-auto w-35 shrink-0 overflow-hidden rounded-[28px] shadow-[0_10px_24px_rgba(15,23,42,0.12)] md:w-50 lg:w-75">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,#e6efff_0%,#eef4ff_32%,#f7f2ff_100%)]" />
              <div className="absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-white/30 lg:left-6 lg:top-6">
                <span className="flex h-2 w-2 rounded-full bg-white" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex h-[82%] flex-col justify-end gap-0.5 p-4 lg:h-[54%] lg:p-6">
                <div className="text-[14px] font-medium text-white">Başvuru danışmanı</div>
                <div className="text-[13px] text-white/70">Red risklerini önceden temizleyin</div>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:gap-5.5">
              <div className="text-[20px] font-semibold leading-8 text-[#667085]">
                Red almak yerine{' '}
                <span className="block text-[#101828]">nedenleri baştan kapat.</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[13px] text-[#98a2b3]">Ön kontrol, çerçeveleme ve İngilizce final polish.</div>
                <Button.Root variant="neutral" mode="stroke" size="medium" className="h-10 w-fit cursor-pointer gap-2 rounded-xl">
                  Birlikte gözden geçirelim
                  <Button.Icon
                    as={RiArrowRightUpLongLine}
                    className="size-5 text-[#667085] transition-all duration-300"
                  />
                </Button.Root>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full space-y-2.5">
            {faqData.map((faq) => {
              const open = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="cursor-pointer rounded-[20px] border border-[#e6eaf2] px-4 py-3 transition duration-300 lg:px-5 lg:py-4"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? '' : faq.id)}
                    className="flex w-full items-start gap-3 text-left lg:items-center"
                  >
                    <span className="text-[15px] font-medium text-[#344054] transition duration-300 hover:text-[#101828]">
                      {faq.question}
                    </span>
                    <span className="ml-auto text-[#98a2b3]">
                      {open ? <RiSubtractLine className="size-6" /> : <RiAddLine className="size-6" />}
                    </span>
                  </button>

                  <AnimatePresenceWrapper open={open}>
                    <div className="flex flex-col gap-4 pt-3.5 pb-1.5">
                      <div className="whitespace-pre-line text-[15px] leading-8 text-[#667085]">{faq.answer}</div>
                    </div>
                  </AnimatePresenceWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatePresenceWrapper({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
