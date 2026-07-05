const budgetCards = [
  {
    title: 'MVP Bütçe (tasarruflu)',
    tone: 'bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)] border-[#dce7ff]',
    total: '€895–1,205',
    items: [
      ['Kira (1 oda paylaşımlı)', '€400–550'],
      ['Market / yemek', '€250–350'],
      ['Toplu ulaşım (aylık kart)', '€65'],
      ['İnternet + telefon', '€30–40'],
      ['Diğer (giyim, sağlık vb.)', '€150–200'],
    ],
  },
  {
    title: 'Konforlu Bütçe',
    tone: 'bg-[linear-gradient(180deg,#f8fff9_0%,#eefbf2_100%)] border-[#cfead6]',
    total: '€1,705–2,225',
    items: [
      ['Kira (1+1 tek kişi)', '€900–1,200'],
      ['Market + dışarıda yemek', '€400–500'],
      ['Toplu ulaşım (aylık kart)', '€65'],
      ['İnternet + telefon', '€40–60'],
      ['Sosyal aktivite + diğer', '€300–400'],
    ],
  },
];

const rentRows = [
  {
    area: 'Kamppi / Töölö',
    feature: 'Merkez, prestijli, ulaşım çok iyi',
    rent: '€1,100–1,500',
    startup: 'İyi ama pahalı',
  },
  {
    area: 'Kallio / Sörnäinen',
    feature: 'Hipster mahalle, startup kültürü',
    rent: '€800–1,100',
    startup: 'Çok popüler',
  },
  {
    area: 'Pasila',
    feature: 'Yeni yapılar, tren bağlantısı',
    rent: '€900–1,200',
    startup: 'İyi seçenek',
  },
  {
    area: 'Otaniemi (Espoo)',
    feature: 'Aalto Üniversitesi kampüsü yakını, tech ekosistemi',
    rent: '€850–1,100',
    startup: 'Startup için ideal',
  },
  {
    area: 'Tikkurila (Vantaa)',
    feature: 'Havaalanı yakını, daha uygun',
    rent: '€650–900',
    startup: 'Bütçe odaklı için',
  },
];

const practicalNotes = [
  {
    title: 'Kira bulmak için',
    detail:
      'Vuokraovi.fi ve Oikotie.fi Finlandiya’nın ana kiralık ev platformları. Ayrıca Facebook grupları (Helsinki Expats, Helsinki Housing) aktif.',
  },
  {
    title: 'Depozito',
    detail: 'Genellikle 1–3 aylık kira tutarında. Finlandiya’ya varmadan önce ödemeye hazır ol.',
  },
  {
    title: 'Sağlık sigortası',
    detail:
      'Kela sistemi kayıt sonrası devreye giriyor, ama ilk dönem özel sağlık sigortası tavsiye edilir (~€30–60/ay).',
  },
  {
    title: 'Coworking alternatifi',
    detail:
      'Maria 01 (€200–400/ay), Hub Helsinki (€150–350/ay) — ev ofisi yerine tercih edilebilir ve network açısından çok değerli.',
  },
  {
    title: 'Tatil / kış hazırlığı',
    detail:
      'Finlandiya kışı için iyi bot ve mont (~€200–400 tek seferlik masraf) ve kışlık giysi bütçesi ayır.',
  },
];

export function Kit7RelocationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Helsinki'de Gerçekçi Yaşam Maliyeti: MVP vs Konforlu Bütçe
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Helsinki, Avrupa'nın pahalı şehirleri arasında ama Londra veya Zürih'ten belirgin şekilde uygun. Tek kişi
          için aylık toplam harcama yaklaşık €1,700–2,100 arasında değişiyor. Ama iyi haber: toplu ulaşım mükemmel,
          eğitim ücretsiz ve sağlık sistemi güçlü.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {budgetCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="flex items-end justify-between gap-4">
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{card.title}</div>
              <div className="text-[24px] font-semibold tracking-[-0.05em] text-[#101828]">{card.total}</div>
            </div>

            <div className="mt-5 space-y-3">
              {card.items.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-[18px] border border-white/80 bg-white/85 px-4 py-4"
                >
                  <div className="text-[14px] leading-7 text-[#475467]">{label}</div>
                  <div className="text-[18px] font-semibold tracking-[-0.04em] text-[#101828]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Bölge Bazlı Kira Rehberi (Helsinki)</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="w-[20%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Bölge</th>
                <th className="w-[34%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Özellik</th>
                <th className="w-[20%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">1+1 Kira Aralığı</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Startup'lar için</th>
              </tr>
            </thead>
            <tbody>
              {rentRows.map((row, index) => (
                <tr key={`${index}-${row.area}`} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{row.area}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.feature}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.rent}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.startup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Pratik Bilgiler</div>
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {practicalNotes.map((item) => (
            <div key={item.title} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] p-5">
              <div className="text-[17px] font-semibold text-[#101828]">{item.title}</div>
              <div className="mt-2 text-[14px] leading-7 text-[#475467]">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
