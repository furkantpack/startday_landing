'use client';

import { useState } from 'react';

const businessPlanSections = [
  {
    id: 'executive-summary',
    number: '01',
    title: 'Executive Summary',
    hint: '100–150 kelime. Şirketi tek cümlede tanımla: problem, hedef kitle, çözüm, gelir modeli, neden şimdi ve neden Finlandiya.',
    placeholder:
      '[Şirket adı], [hedef kitle] için [problem] sorununu [çözüm] ile çözüyor. [Gelir modeli] ile para kazanıyor ve [hedef pazar büyüklüğü] pazarını hedefliyor. Finlandiya’yı seçiyoruz çünkü...',
  },
  {
    id: 'problem-solution',
    number: '02',
    title: 'Problem ve Çözüm',
    hint: 'Acıyı rakamla anlat. Mevcut alternatifleri yaz. Kendi çözümünün neden daha iyi olduğunu netleştir.',
    placeholder:
      'Problem: Müşteriler bugün ... nedeniyle yıllık ... kaybediyor. Alternatifler ... ama yetersiz çünkü ... Bizim çözümümüz ... ve farkı ...',
  },
  {
    id: 'market-analysis',
    number: '03',
    title: 'Pazar Analizi',
    hint: 'TAM / SAM / SOM net olsun. Büyüme trendlerini ve seni destekleyen makro sinyalleri ekle.',
    placeholder:
      'TAM: ... / SAM: ... / SOM: ... Pazar büyüme trendi ... Hedef segment ... İlk 24 ayda erişilebilir pay ...',
  },
  {
    id: 'business-model',
    number: '05',
    title: 'İş Modeli ve Gelir Planı',
    hint: 'Gelir modeli, ARPU, CAC ve 12 aylık projeksiyon aynı hikâyeyi desteklemeli.',
    placeholder:
      'Gelir modeli ... ARPU ... CAC ... İlk 12 ayda hedef müşteri sayısı ... Aylık gelir projeksiyonu ...',
  },
  {
    id: 'team',
    number: '06',
    title: 'Ekip',
    hint: 'Her kurucu için ayrı paragraf yaz. Rol, geçmiş deneyim, projeye özel uzmanlık ve hisse oranı net olsun.',
    placeholder:
      'Kurucu 1: ... CTO / CEO rolü ... geçmiş deneyim ... hisse oranı ... Kurucu 2: ...',
  },
  {
    id: 'finland-plan',
    number: '07',
    title: 'Finlandiya Planı',
    hint: 'Neden Finlandiya sorusuna ayrı ağırlık ver. İlk 12 ay hedefleri, müşteri planı ve ekip yerleşimini açık yaz.',
    placeholder:
      'Finlandiya’yı seçiyoruz çünkü ... İlk 12 ayda ... müşteri, ... gelir, ... iş ortağı hedefliyoruz. İlk potansiyel müşteriler ...',
  },
] as const;

const competitionDefaults = [
  { competitor: '', what: '', weak: '', edge: '' },
  { competitor: '', what: '', weak: '', edge: '' },
  { competitor: '', what: '', weak: '', edge: '' },
];

export function Kit7BusinessPlanSection() {
  const [sections, setSections] = useState<Record<string, string>>(
    Object.fromEntries(businessPlanSections.map((item) => [item.id, ''])),
  );
  const [competitionRows, setCompetitionRows] = useState(competitionDefaults);

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Business Finland&apos;ın Beklediği Tam Yapı
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Business Finland doğrudan bir iş planı PDF’i talep etmiyor; soruları Enter Finland içinde yanıtlıyorsun.
          Ama bu yapıyı önce tek belgede hazırlamak hem cevaplarını tutarlı hale getirir hem de pitch deck’ini üretmeyi
          kolaylaştırır.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] p-6 text-[15px] leading-8 text-[#34508c] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <strong className="text-[#101828]">Uzunluk önerisi:</strong> Her yanıt 150–400 kelime arasında olmalı. Çok kısa
        yanıtlar değerlendirilemez; çok uzun yanıtlar ise dikkat dağıtır. Net, somut ve rakam destekli yaz.
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-6">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Çalışma Akışı</div>
              <div className="mt-5 space-y-3">
                {[
                  'Önce metni burada yaz, sonra Enter Finland’a aktar.',
                  'Rakamları tüm bölümlerde tutarlı tut: TAM, gelir, ekip, runway.',
                  '“Neden Finlandiya?” yanıtını ayrı düşün; genel şirket tanımına gömme.',
                  'Pitch deck ile bu belge aynı hikâyeyi anlatmalı.',
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                      {index + 1}
                    </div>
                    <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Hızlı Kontrol Listesi</div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  'Uluslararası büyüme hikâyesi var mı?',
                  'En az 2 kurucu net rol dağılımıyla görünüyor mu?',
                  'Pazar verileri ve büyüklük rakamları somut mu?',
                  'Rakip farkı tek cümlede anlatılabiliyor mu?',
                  'Mali kaynak ve runway net mi?',
                  'Neden Finlandiya sorusu gerçekten cevaplanıyor mu?',
                ].map((item) => (
                  <div key={item} className="rounded-[18px] border border-[#e6eaf2] bg-[#fcfdff] px-4 py-3 text-[14px] font-medium text-[#475467]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {businessPlanSections.slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#eef4ff] text-[13px] font-semibold text-[#4361ee]">
                    {item.number}
                  </div>
                  <div>
                    <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                    <div className="mt-1 text-[14px] text-[#667085]">{item.hint}</div>
                  </div>
                </div>
                <textarea
                  value={sections[item.id]}
                  onChange={(event) => setSections((prev) => ({ ...prev, [item.id]: event.target.value }))}
                  placeholder={item.placeholder}
                  className="mt-5 min-h-[180px] w-full rounded-[22px] border border-[#d0d5dd] bg-[#fcfdff] px-5 py-4 text-[15px] leading-8 text-[#101828] outline-none placeholder:text-[#98a2b3]"
                />
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#eef4ff] text-[13px] font-semibold text-[#4361ee]">
                04
              </div>
              <div>
                <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">Rekabet Analizi</div>
                <div className="mt-1 text-[14px] text-[#667085]">Rakipleri kısa, net ve fark odaklı anlat. Üç rakip yeterli.</div>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto rounded-[22px] border border-[#e6eaf2]">
              <table className="min-w-[760px] w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#e6eaf2] bg-[#f8fafc]">
                    <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#667085]">Rakip</th>
                    <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#667085]">Ne Yapıyor</th>
                    <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#667085]">Zayıf Yanı</th>
                    <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#667085]">Bizim Farkımız</th>
                  </tr>
                </thead>
                <tbody>
                  {competitionRows.map((row, index) => (
                    <tr key={index} className="border-t border-[#e6eaf2] first:border-t-0">
                      {(['competitor', 'what', 'weak', 'edge'] as const).map((field) => (
                        <td key={field} className="px-4 py-4 align-top">
                          <textarea
                            value={row[field]}
                            onChange={(event) =>
                              setCompetitionRows((prev) =>
                                prev.map((item, rowIndex) =>
                                  rowIndex === index ? { ...item, [field]: event.target.value } : item,
                                ),
                              )
                            }
                            placeholder={
                              field === 'competitor'
                                ? '[Rakip]'
                                : field === 'what'
                                  ? '[Kısa açıklama]'
                                  : field === 'weak'
                                    ? '[Neden yetersiz]'
                                    : '[Senin avantajın]'
                            }
                            className="min-h-[110px] w-full rounded-[16px] border border-[#d0d5dd] bg-[#fcfdff] px-3 py-3 text-[14px] leading-7 text-[#101828] outline-none placeholder:text-[#98a2b3]"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-5">
            {businessPlanSections.slice(3).map((item) => (
              <div key={item.id} className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#eef4ff] text-[13px] font-semibold text-[#4361ee]">
                    {item.number}
                  </div>
                  <div>
                    <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                    <div className="mt-1 text-[14px] text-[#667085]">{item.hint}</div>
                  </div>
                </div>
                <textarea
                  value={sections[item.id]}
                  onChange={(event) => setSections((prev) => ({ ...prev, [item.id]: event.target.value }))}
                  placeholder={item.placeholder}
                  className="mt-5 min-h-[180px] w-full rounded-[22px] border border-[#d0d5dd] bg-[#fcfdff] px-5 py-4 text-[15px] leading-8 text-[#101828] outline-none placeholder:text-[#98a2b3]"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="xl:sticky xl:top-8 xl:self-start">
          <div className="overflow-hidden rounded-[22px] border border-[#d7e5ff] bg-white shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
            <div className="border-b border-[#dbe7ff] bg-[linear-gradient(135deg,#eef4ff_0%,#f3efff_52%,#fff5e9_100%)] px-4 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4361ee]">
                  Business Plan Sprint
                </div>
                <div className="rounded-full bg-[#ffffffcc] px-2.5 py-1 text-[11px] font-semibold text-[#7f56d9]">
                  1:1 destek
                </div>
              </div>
              <div className="mt-3 text-[18px] font-semibold tracking-[-0.04em] text-[#101828]">
                Birlikte hazırlayalım
              </div>
              <p className="mt-1.5 text-[13px] leading-6 text-[#475467]">
                İş planını Business Finland diline çevirip daha net ve daha ikna edici hale getirelim.
              </p>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {[
                  { label: 'Executive summary', tone: 'bg-[#eef4ff] text-[#2643a2]' },
                  { label: 'Neden Finlandiya?', tone: 'bg-[#f4efff] text-[#6941c6]' },
                  { label: 'Pitch deck omurgası', tone: 'bg-[#ecfdf3] text-[#067647]' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-[14px] px-3 py-2 text-[12px] font-semibold ${item.tone}`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = '/kit7-blueprint/business-plan-sprint';
                  }}
                  className="rounded-[14px] bg-[#4361ee] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(67,97,238,0.18)]"
                >
                  Birlikte hazırlayalım
                </button>
                <button className="rounded-[14px] border border-[#d0d5dd] bg-[#f8fafc] px-4 py-2.5 text-[13px] font-semibold text-[#344054]">
                  Checklist indir
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
