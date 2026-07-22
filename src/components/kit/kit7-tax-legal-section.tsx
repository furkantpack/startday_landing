const taxRows = [
  ['Kurumlar vergisi (OY)', '%20', 'Sabit oran, AB ortalamasına yakın'],
  ['Kişisel gelir vergisi', '%20–53 (artan oranlı)', 'Belediye vergisi dahil; gelir arttıkça oran yükseliyor'],
  ['KDV (ALV) — standart', '%25,5', "Ocak 2025'ten itibaren yükseltildi"],
  ['KDV — gıda ve diğer', '%14 / %10', 'Gıda %14, kültür ve spor %10'],
  ['Temettü vergisi', '%7,5–28,9', 'Listelenmemiş şirketten temettü alımına göre değişiyor'],
];

const strategyCards = [
  {
    title: 'Düşük maaş avantajı',
    detail: 'Şirket vergi yükünü azaltır; kişisel gelir vergisi düşük kalır.',
    tone: 'bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)]',
  },
  {
    title: 'Temettü avantajı',
    detail: 'Listelenmemiş şirketten temettünün bir kısmı düşük vergiyle alınabiliyor (%7,5 oranında).',
    tone: 'bg-[linear-gradient(180deg,#f8fff9_0%,#eefbf2_100%)]',
  },
  {
    title: 'YEL (yrittäjän eläkevakuutus)',
    detail: 'Çalışan kurucular için zorunlu girişimci emeklilik sigortası. Yıllık gelirin yaklaşık %24,1’i (2025).',
    tone: 'bg-[linear-gradient(180deg,#fffaf5_0%,#fff4e8_100%)]',
  },
  {
    title: 'R&D hibe geliri',
    detail: 'Business Finland hibeleri kurumlar vergisine tabi, ama şirket büyümesini finanse ediyor.',
    tone: 'bg-[linear-gradient(180deg,#faf7ff_0%,#f4efff_100%)]',
  },
];

const complianceRows = [
  ['KDV beyannamesi', 'Aylık veya üç aylık', 'vero.fi'],
  ['Gelir vergisi beyannamesi', 'Yıllık (Nisan)', 'vero.fi'],
  ['Şirket yıllık raporu', 'Her yıl', 'PRH Trade Register'],
  ['TyEL (emeklilik) ödemesi', 'Aylık', 'Seçtiğin sigorta şirketi'],
  ['YEL sigortası', 'Çalışmaya başlayınca', 'Özel sigorta şirketi'],
];

const supportItems = ['Vergi yapısı kontrolü', 'Maaş / temettü çerçevesi', 'YEL / KDV başlangıç checklist’i'];

export function Kit7TaxLegalSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Finlandiya Vergi Sistemi, Founder Maaşı ve Temel Uyum Gereksinimleri
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finlandiya vergi sistemi karmaşık görünebilir ama startup'lar için oldukça yapılandırılmış ve öngörülebilir.
          Bu bölüm genel bir çerçeve sunuyor; vergi danışmanı veya muhasebeci ile çalışman tavsiye edilir.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-8">
          <div className="rounded-[30px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="inline-flex rounded-full border border-[#f5d7b2] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b54708]">
              Yasal uyarı
            </div>
            <p className="mt-4 text-[15px] leading-8 text-[#8a4b21]">
              Bu rehber genel bilgi amaçlıdır, vergi veya hukuki tavsiye niteliği taşımaz. Vergi planlaması için mutlaka
              bir Fin muhasebeci veya avukatla çalış.
            </p>
          </div>

          <div className="space-y-5">
            <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Temel Vergi Oranları (2025)</div>
            <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <table className="min-w-[760px] w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#e6eaf2]">
                    <th className="w-[28%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Vergi Türü</th>
                    <th className="w-[18%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Oran</th>
                    <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {taxRows.map(([type, rate, detail], index) => (
                    <tr key={`${index}-${type}`} className="border-t border-[#e6eaf2] first:border-t-0">
                      <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{type}</td>
                      <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{rate}</td>
                      <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-5">
            <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">
              Founder Maaşı vs Temettü — Temel Strateji
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {strategyCards.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
                >
                  <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#dbe7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">
              Çifte Vergilendirme — Türkiye Anlaşması
            </div>
            <p className="mt-4 text-[15px] leading-8 text-[#475467]">
              Türkiye ve Finlandiya arasında çifte vergilendirmeyi önleme anlaşması bulunuyor. Aynı gelir için her iki
              ülkede de vergi ödenmesini önlemeyi amaçlar. Finlandiya'ya taşındıktan sonra vergi mükellefiyetin ağırlıklı
              olarak Finlandiya'ya kayar; ancak Türkiye’deki varlıklar ve gelirler için mutlaka muhasebeci görüşü al.
            </p>
          </div>

          <div className="space-y-5">
            <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Uyum Takvimine Genel Bakış</div>
            <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <table className="min-w-[760px] w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#e6eaf2]">
                    <th className="w-[30%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Yükümlülük</th>
                    <th className="w-[24%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Ne Zaman</th>
                    <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Nereye</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceRows.map(([item, timing, place], index) => (
                    <tr key={`${index}-${item}`} className="border-t border-[#e6eaf2] first:border-t-0">
                      <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{item}</td>
                      <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{timing}</td>
                      <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{place}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="xl:sticky xl:top-8 xl:self-start">
          <div className="relative overflow-hidden rounded-[34px] border border-[#f6c453] bg-[radial-gradient(circle_at_80%_78%,rgba(135,29,183,0.78)_0%,rgba(135,29,183,0)_30%),radial-gradient(circle_at_22%_94%,rgba(255,111,60,0.95)_0%,rgba(255,111,60,0)_34%),linear-gradient(180deg,#f4c21f_0%,#ffb423_32%,#ff8c3d_72%,#ff6f3c_100%)] p-6 text-white shadow-[0_22px_40px_rgba(15,23,42,0.16)]">
            <div className="relative">
              <div className="inline-flex rounded-full bg-white/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/84">
                Ek servis
              </div>

              <div className="mt-6 text-[44px] font-semibold leading-[0.98] tracking-[-0.025em] text-white">
                Muhasebe danışmanlığı al
              </div>

              <p className="mt-5 text-[17px] leading-8 text-white/86">
                Finlandiya şirket kurulumu sonrası vergi, KDV, YEL ve aylık muhasebe düzenini birlikte netleştirelim.
              </p>

              <div className="mt-8 rounded-[22px] border border-white/18 bg-white/12 p-4 backdrop-blur-sm">
                <div className="grid gap-3">
                  {supportItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] font-medium text-white/92">
                      <span className="flex size-5 items-center justify-center rounded-full bg-white/16">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-[22px] border border-white/55 bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f8_100%)] px-5 py-4 text-[18px] font-semibold text-[#101828] shadow-[0_14px_28px_rgba(15,23,42,0.14)] transition hover:translate-y-[-1px] hover:bg-white"
              >
                Görüşme planla
              </a>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[14px] font-medium text-white/88">Email tercih edersen</div>
                  <div className="mt-1 text-[20px] font-semibold tracking-[-0.025em] text-white">info@hangivize</div>
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-white text-[#101828] shadow-[0_10px_20px_rgba(15,23,42,0.12)]">
                  →
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
