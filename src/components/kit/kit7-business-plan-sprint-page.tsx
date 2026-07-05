import { RiArrowLeftLine, RiArrowRightUpLine, RiCheckLine } from '@remixicon/react';

const businessPlanItems = [
  'Business Finland diline göre yazım yönü',
  '"Neden Finlandiya" bölümünün netleştirilmesi',
  'Executive summary + problem/solution çerçevesi',
  'Pitch deck omurgası için yorumlar',
];

const consultingItems = [
  'Başvuru uygunluğu ve red flag kontrolü',
  'Business plan yönlendirmesi ve belge stratejisi',
  'Finansal kanıt, ekip yapısı ve süreç planı',
  'Şirket kurma ve taşınma tarafı için yönlendirme',
  'Email üzerinden süreç takibi ve soru cevap',
  'Daha yüksek dokunuşlu danışmanlık akışı',
];

export function Kit7BusinessPlanSprintPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[1320px]">
        <a
          href="/kit7-blueprint/s26"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-white px-4 py-2 text-[14px] font-medium text-[#344054] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition hover:bg-[#f8fafc]"
        >
          <RiArrowLeftLine className="size-4" />
          Business Plan sayfasına dön
        </a>

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <section className="rounded-[30px] border border-[#dbe6f2] bg-white p-7 shadow-[0_18px_34px_rgba(15,23,42,0.05)] lg:p-8">
            <div className="inline-flex rounded-full bg-[#eff6ff] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2563eb]">
              Business plan
            </div>

            <div className="mt-5 max-w-[440px]">
              <h1 className="text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#0f172a] lg:text-[2.7rem]">
                Sadece business plan tarafını birlikte netleştirelim.
              </h1>
              <p className="mt-4 text-[1rem] leading-8 text-[#475467]">
                Bu paket, Business Finland başvurusunda kullanacağın iş planı ve pitch mantığını temizlemek için
                tasarlandı. Daha sade, daha savunulabilir ve daha tutarlı bir yazım yapısı kurar.
              </p>
            </div>

            <div className="mt-8 rounded-[22px] border border-[#e6edf5] bg-[#f8fbff] p-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Dahil olanlar</div>
              <div className="mt-4 grid gap-3">
                {businessPlanItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#475467]">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                      <RiCheckLine className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-end gap-3">
              <div className="text-[3.7rem] font-semibold leading-none tracking-[-0.07em] text-[#0f172a]">$99</div>
              <div className="pb-2 text-[1rem] text-[#667085]">one-time</div>
            </div>

            <a
              href="#"
              className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#ff9a47_0%,#ff7a21_100%)] px-6 text-[16px] font-semibold text-white shadow-[0_14px_30px_rgba(255,122,33,0.22)] transition hover:brightness-[1.03]"
            >
              Business plan paketi al
            </a>

            <div className="mt-4 text-[13px] leading-6 text-[#98a2b3]">
              Daha hafif bir başlangıç istiyorsan bu paket yalnızca business plan yazımı tarafına odaklanır.
            </div>
          </section>

          <section className="overflow-hidden rounded-[30px] border border-[#2d2d31] bg-[#050505] p-7 text-white shadow-[0_22px_40px_rgba(15,23,42,0.18)] lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[20px] font-medium tracking-[-0.04em] text-white/92">Full Visa Consulting</div>
              <div className="rounded-[12px] border border-[#2f2f34] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                End-to-end support
              </div>
            </div>

            <div className="mt-8 border-t border-dashed border-white/18 pt-8">
              <div className="inline-flex rounded-full border border-[#1f3b73] bg-[#0d1b38] px-4 py-2 text-[14px] font-medium text-[#93c5fd]">
                Finland Startup Visa support
              </div>

              <div className="mt-8 flex flex-wrap items-end gap-3">
                <div className="text-[64px] font-semibold leading-none tracking-[-0.07em]">$499</div>
                <div className="pb-2 text-[22px] text-white/82">/package</div>
              </div>

              <div className="mt-8 rounded-[26px] border border-white/12 bg-[#262626] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="inline-flex -translate-y-8 rounded-[10px] border border-[#46464a] bg-[#313136] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/54">
                  Dahil
                </div>

                <div className="-mt-3 grid gap-x-8 gap-y-4 md:grid-cols-2">
                  {consultingItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[17px] leading-8 text-white/88">
                      <span className="mt-[7px] flex size-5 shrink-0 items-center justify-center rounded-full bg-white/8">
                        <RiCheckLine className="size-3.5 text-white/76" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-[#2f2f34] bg-[#1f1f22] p-5">
                <div className="text-[13px] uppercase tracking-[0.12em] text-white/44">Ödeme özeti</div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-[15px] text-white/80">
                    <span>Full Visa Consulting</span>
                    <span>$499</span>
                  </div>
                  <div className="flex items-center justify-between text-[15px] text-white/52">
                    <span>Ek gizli ücret</span>
                    <span>$0</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 text-[18px] font-semibold text-white">
                    <div className="flex items-center justify-between">
                      <span>Toplam</span>
                      <span>$499</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#ff9a47_0%,#ff7a21_100%)] px-6 py-4 text-[20px] font-semibold text-white shadow-[0_18px_34px_rgba(255,122,33,0.24)] transition hover:brightness-[1.03]"
              >
                Danışmanlığı başlat
              </a>

              <div className="mt-6 flex items-center justify-between gap-4 text-white/74">
                <div>
                  <div className="text-[14px] font-medium">Email ile ulaş</div>
                  <div className="mt-1 text-[20px] font-semibold tracking-[-0.04em]">info@hangivize</div>
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-white text-[#101828] shadow-[0_10px_20px_rgba(15,23,42,0.12)]">
                  <RiArrowRightUpLine className="size-5" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
