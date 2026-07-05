const ecosystemActors = [
  {
    title: 'Slush',
    detail:
      "Yılda bir kez (Kasım-Aralık), 13.000+ katılımcı, 4.000+ yatırımcı. Avrupa'nın en önemli startup konferansı. Erken dönem için bağlantı altın değerinde.",
    url: 'slush.org',
    tone: 'bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)]',
  },
  {
    title: 'Maria 01',
    detail:
      "Kuzey Avrupa'nın en büyük startup kampüsü. Eski hastane binasında 200+ startup. Coworking, ofis ve etkinlik mekânı. Yerleşmek için başvur.",
    url: 'maria.io',
    tone: 'bg-[linear-gradient(180deg,#fffaf5_0%,#fff4e8_100%)]',
  },
  {
    title: 'Startup Sauna',
    detail:
      'Kuzey ve Doğu Avrupa odaklı hızlandırıcı. 10 haftalık intensif program, erken aşama startup\'lar için. Seçim süreci rekabetçi.',
    url: 'startupsauna.com',
    tone: 'bg-[linear-gradient(180deg,#faf7ff_0%,#f4efff_100%)]',
  },
  {
    title: 'Kiuas Accelerator',
    detail:
      'Finlandiya odaklı hızlandırıcı. Funding, mentorship ve ekosisteme bağlantı sağlıyor. Yılda iki kohort.',
    url: 'kiuas.com',
    tone: 'bg-[linear-gradient(180deg,#f7fcf9_0%,#edf9f1_100%)]',
  },
  {
    title: 'Business Finland Hizmetleri',
    detail:
      'Vize dışında da hizmet sunuyor: araştırma ve geliştirme hibeleri, uluslararasılaşma desteği. Şirket kurulduktan sonra başvuru yapabilirsin.',
    url: 'businessfinland.com',
    tone: 'bg-[linear-gradient(180deg,#f6fbff_0%,#eef7ff_100%)]',
  },
  {
    title: 'Aalto Entrepreneurship Society',
    detail:
      'Aalto Üniversitesi bağlantılı güçlü girişimcilik topluluğu. Etkinlikler, mentorlar ve potansiyel co-founder ağı. Üniversite öğrencisi olmak zorunda değilsin.',
    url: 'aaltoes.com',
    tone: 'bg-[linear-gradient(180deg,#fff8fb_0%,#fff1f6_100%)]',
  },
];

const fundingRows = [
  ['Business Finland R&D hibeleri', 'Ar-Ge ve yenilikçilik projeleri için hibe', '€10K–500K+', 'businessfinland.com/en/for-finnish-customers/services'],
  ['Tekes (B.Finland aracılığıyla)', 'Startup başlangıç hibesi', '€50K–150K', 'Şirket kurulduktan sonra'],
  ['ELY Centres', 'Bölgesel geliştirme destekleri', '€5K–100K', 'ely-keskus.fi'],
  ['Horizon Europe', 'AB çaplı Ar-Ge fonları', '€50K–2M+', 'ec.europa.eu/programmes/horizon'],
  ['Finnish VC\'ler', 'Venture capital yatırımı', '€500K+', 'Lifeline Ventures, Superhero Capital, Voima Ventures'],
];

export function Kit7EcosystemSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Slush'tan Maria 01'e: Kime Bağlanacaksın, Ne Alacaksın
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finlandiya'nın en büyük rekabet avantajlarından biri ekosistemi. Helsinki, Avrupa'daki en sıkı örülmüş startup
          ağlarından birine ev sahipliği yapıyor. Bu ağa girmeden önce haritayı çizmen gerekiyor.
        </p>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Temel Ekosistem Aktörleri</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {ecosystemActors.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                <div className="rounded-full bg-white/85 px-3 py-1 text-[12px] font-medium text-[#4361ee]">{item.url}</div>
              </div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Fon Kaynakları</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="w-[26%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Kaynak</th>
                <th className="w-[30%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Ne Sunuyor</th>
                <th className="w-[16%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Miktar</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Nasıl Başvurulur</th>
              </tr>
            </thead>
            <tbody>
              {fundingRows.map(([source, offer, amount, apply], index) => (
                <tr key={`${index}-${source}`} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{source}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{offer}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{amount}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{apply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
