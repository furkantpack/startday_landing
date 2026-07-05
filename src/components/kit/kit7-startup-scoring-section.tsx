'use client';

import { useMemo, useState } from 'react';

const scoringCriteria = [
  {
    key: 'scalability',
    title: 'Ölçeklenebilirlik',
    strong: 'SaaS / platform / marketplace, sınırsız büyüme potansiyeli',
    medium: 'Belirli bir sektörde ölçeklenebilir',
    weak: 'Yerel hizmet, danışmanlık, fiziksel ürün',
  },
  {
    key: 'market',
    title: 'Uluslararası Pazar',
    strong: 'Günden itibaren global hedef, somut pazar araştırması',
    medium: 'Avrupa pazarı odaklı',
    weak: 'Yalnızca Türkiye veya yerel pazar',
  },
  {
    key: 'advantage',
    title: 'Rekabet Avantajı',
    strong: 'Patent / IP / özgün teknoloji veya çok güçlü network avantajı',
    medium: 'Farklılaşma var ama kopyalanabilir',
    weak: 'Aynı iş modelinin kopyası',
  },
  {
    key: 'team',
    title: 'Ekip Tamamlayıcılık',
    strong: 'Teknik + ticari, güçlü önceki deneyim',
    medium: 'İki farklı uzmanlık, sınırlı deneyim',
    weak: 'Tek kurucu veya benzer altyapı',
  },
  {
    key: 'traction',
    title: 'Müşteri Kanıtı',
    strong: 'Ödeme yapan müşteri, LOI veya pilot anlaşma',
    medium: 'Görüşme yapılmış, ihtiyaç doğrulanmış',
    weak: 'Henüz müşteri görüşmesi yapılmamış',
  },
  {
    key: 'finland',
    title: 'Finlandiya Bağlantısı',
    strong: 'Net pazar hedefi veya yerel partner',
    medium: 'Ekosistem için seçilmiş',
    weak: '“Neden Finlandiya?” sorusuna net yanıt yok',
  },
] as const;

const approvedModels = [
  'B2B SaaS — özellikle deeptech, AI/ML uygulamaları, kurumsal yazılım',
  'Cleantech / Green Energy — Finlandiya bu alanda güçlü ekosisteme sahip',
  'Sağlık teknolojisi (HealthTech) — dijital sağlık, telemedikal, biyoteknoloji',
  'EdTech — özellikle iş eğitimi ve kurumsal öğrenme platformları',
  'Fintech — ödeme sistemleri, regtech, blockchain tabanlı finans çözümleri',
  'Gaming / Entertainment Technology — Finlandiya’nın güçlü oyun ekosistemi',
];

const weakModels = [
  'Restoran / kafe',
  'E-ticaret mağazası (ürün bazlı)',
  'Danışmanlık firması (outsourcing / agency)',
  'Sadece Türkiye pazarına hizmet eden işletme',
  'Yerel hizmet sektörü işletmeleri',
];

export function Kit7StartupScoringSection() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(scoringCriteria.map((item) => [item.key, 0])),
  );

  const total = useMemo(() => Object.values(scores).reduce((sum, value) => sum + value, 0), [scores]);

  const verdict =
    total >= 15
      ? {
          title: 'Güçlü başvuru',
          detail: 'Devam et. Dosya omurgan güçlü görünüyor; artık anlatımı ve kanıtları keskinleştirmek gerekiyor.',
          tone: 'bg-[#ecfbf4] text-[#067647] border-[#b7ebd0]',
        }
      : total >= 10
        ? {
            title: 'Güçlendir, sonra başvur',
            detail: 'Başvuru potansiyeli var ama zayıf alanları net biçimde güçlendirmen gerekiyor.',
            tone: 'bg-[#fff7ed] text-[#b54708] border-[#f5d7b2]',
          }
        : total > 0
          ? {
              title: 'Henüz erken',
              detail: 'İş modelini veya ekip yapını gözden geçir. Bu haliyle başvuru riski yüksek.',
              tone: 'bg-[#fef3f2] text-[#d92d20] border-[#f2c7c3]',
            }
          : {
              title: 'Skoru başlat',
              detail: 'Her kriter için 1–3 arasında puan seçerek kendi fikrini değerlendir.',
              tone: 'bg-[#f8fafc] text-[#475467] border-[#e4e7ec]',
            };

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Business Finland Gözünden Kendi Fikrini Değerlendirme</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Bu rehberi kullanarak başvurmadan önce kendi fikrini değerlendir. Her kriterde kendinle dürüst ol. Zayıf
          bulduğun noktalarda başvuruyu güçlendirme stratejisi geliştir veya fikri o alanlara göre yeniden çerçevele.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[980px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Kriter</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#067647]">Güçlü (3 puan)</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#4361ee]">Orta (2 puan)</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#b54708]">Zayıf (1 puan)</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#101828]">Senin puanın</th>
              </tr>
            </thead>
            <tbody>
              {scoringCriteria.map((item) => (
                <tr key={item.key} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{item.title}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{item.strong}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{item.medium}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{item.weak}</td>
                  <td className="px-6 py-6 align-top">
                    <div className="flex gap-2">
                      {[1, 2, 3].map((score) => (
                        <button
                          key={score}
                          type="button"
                          onClick={() => setScores((prev) => ({ ...prev, [item.key]: score }))}
                          className={`flex size-10 items-center justify-center rounded-[12px] border text-[14px] font-semibold transition ${
                            scores[item.key] === score
                              ? score === 3
                                ? 'border-[#b7ebd0] bg-[#ecfbf4] text-[#067647]'
                                : score === 2
                                  ? 'border-[#cfe0ff] bg-[#eef4ff] text-[#4361ee]'
                                  : 'border-[#f5d7b2] bg-[#fff7ed] text-[#b54708]'
                              : 'border-[#d0d5dd] bg-white text-[#667085]'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-5">
          <div className={`rounded-[28px] border p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${verdict.tone}`}>
            <div className="text-[13px] font-semibold uppercase tracking-[0.14em]">Toplam Skor</div>
            <div className="mt-3 text-[46px] font-semibold tracking-[-0.06em]">{total}/18</div>
            <div className="mt-3 text-[24px] font-semibold tracking-[-0.04em]">{verdict.title}</div>
            <p className="mt-3 text-[15px] leading-8">{verdict.detail}</p>
          </div>

          <div className="rounded-[28px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">Skor yorumu</div>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#475467]">
              <div>15–18 puan → Güçlü başvuru, devam et</div>
              <div>10–14 puan → Zayıf alanları güçlendir, sonra başvur</div>
              <div>6–9 puan → İş modelini veya ekip yapısını gözden geçir, henüz başvurma</div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">Zayıf alan varsa ne yapmalı?</div>
            <div className="mt-4 space-y-3">
              {[
                'Tek kurucuysan destekleyici kurucu veya net uzman partner ekle.',
                'Yerel pazardaysan hikâyeyi Avrupa / global büyümeye çevir.',
                'Müşteri kanıtı zayıfsa en azından görüşme, LOI veya pilot üret.',
                'Neden Finlandiya sorusunu ayrı bir stratejik bölüm olarak yaz.',
              ].map((item) => (
                <div key={item} className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-3 text-[14px] text-[#475467]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">En Çok Onaylanan İş Modelleri</div>
          <div className="mt-5 space-y-3">
            {approvedModels.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ecfbf4] text-[12px] font-semibold text-[#067647]">
                  {index + 1}
                </div>
                <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">Onaylanma ihtimali düşük modeller</div>
          <div className="mt-5 space-y-3">
            {weakModels.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#f4d8c5] bg-white/85 px-4 py-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fff4ea] text-[12px] font-semibold text-[#b54708]">
                  {index + 1}
                </div>
                <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
