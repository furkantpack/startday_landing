const companyStructures = [
  {
    structure: 'OY (Limited Şirket)',
    timing: "Startup'lar için standart",
    advantage: 'Sınırlı sorumluluk, yatırıma hazır, esnek',
    disadvantage: 'Muhasebe zorunluluğu var',
  },
  {
    structure: 'Toiminimi (Bireysel girişimci)',
    timing: 'Serbest meslek için',
    advantage: 'Basit kurulum',
    disadvantage: 'Kişisel sorumluluk, yatırıma kapalı',
  },
  {
    structure: 'OYJ (Halka açık A.Ş.)',
    timing: 'Büyük şirketler',
    advantage: 'Halka arz imkânı',
    disadvantage: '€80,000 min. sermaye şartı',
  },
];

const companySteps = [
  {
    step: '1',
    title: 'Şirket Adı Araştırması (PRH)',
    detail:
      'prh.fi adresinden istediğin şirket adının müsait olup olmadığını kontrol et. Ad "Oy" ile bitmeli. Benzersiz ve yanıltıcı olmayan bir ad seç.',
    meta: ['Link: virre.prh.fi', 'Süre: 5 dakika', 'Ücret: Ücretsiz'],
  },
  {
    step: '2',
    title: 'Kuruluş Bildirimini Hazırla (YTJ)',
    detail:
      'ytj.fi üzerinden elektronik kuruluş bildirimi doldurulur. Şirket adı, iş kolu, adres, yönetim kurulu üyeleri ve hissedar yapısı gerekir.',
    meta: ['Süre: 1–2 saat', 'Ücret: ~€280–380', 'PRH işlem süresi: birkaç hafta'],
  },
  {
    step: '3',
    title: 'Y-Tunnus Al',
    detail:
      "PRH kaydı tamamlandıktan sonra şirketin Business ID'si otomatik olarak atanır. Tüm resmi işlemlerde ve faturalarda bu numara kullanılır.",
    meta: ['Vergi kaydı: vero.fi', 'VAT kaydı: yıllık €30,000+ beklentide hemen yap'],
  },
  {
    step: '4',
    title: 'Banka Hesabı Aç',
    detail:
      'OP Bank, Nordea ve Handelsbanken kurumsal hesap sunar. Daha hızlı alternatif olarak Holvi veya Revolut Business düşünülebilir.',
    meta: ['Gerekli: Y-tunnus + kuruluş belgesi + kişisel kimlik', 'Süre: 2 hafta – 2 ay'],
  },
];

const costRows = [
  ['PRH kayıt ücreti (OY)', '€280–380', 'Online başvuruda daha düşük'],
  ['Şirket adresi (virtual office)', '€69–150/ay', 'Kendi ev adresin de olabilir ama önerilmiyor'],
  ['Muhasebe hizmeti (başlangıç)', '€100–300/ay', 'OY için zorunlu; yıllık finansal raporlama yapılmalı'],
  ['Sağlık sigortası (YEL)', 'Gelire göre', 'Startup’ta çalışan kurucular için zorunlu emeklilik sigortası'],
  ['İlk yıl tahmini toplam', '€1,500–3,000', 'Muhasebe ve adres dahil, maaş hariç'],
];

const supportItems = ['OY kuruluş akışı', 'PRH / YTJ hazırlığı', 'Banka hesabı checklist'];

export function Kit7CompanyFormationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          OY Kurma, PRH Kaydı, Y-Tunnus ve Banka Hesabı
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          İzni aldıktan ve Finlandiya'ya taşındıktan sonra şirketini kurabilirsin. İyi haber: Finlandiya OY kurulumu
          nispeten basit, tamamen online yapılabiliyor ve minimum sermaye şartı 2019'dan bu yana kaldırılmış durumda.
        </p>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">OY vs Diğer Yapılar</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="w-[22%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Yapı</th>
                <th className="w-[22%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Ne Zaman</th>
                <th className="w-[28%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Avantaj</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Dezavantaj</th>
              </tr>
            </thead>
            <tbody>
              {companyStructures.map((row, index) => (
                <tr key={`${index}-${row.structure}`} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{row.structure}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.timing}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.advantage}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.disadvantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">OY Kurma Adımları</div>
          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            {companySteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${
                  ['before:bg-[#4361ee]', 'before:bg-[#7c3aed]', 'before:bg-[#12b76a]', 'before:bg-[#f59e0b]'][index]
                }`}
              >
                <div>
                  <div className="inline-flex rounded-[9px] bg-[#f6f8fb] px-2.5 py-1.5 text-[12px] font-medium text-[#667085]">
                    Adım {item.step}
                  </div>
                  <div className="mt-5 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.detail}</p>
                </div>
                <div className="border-t border-[#e6eaf2] pt-5">
                  <div className="flex flex-wrap gap-2">
                    {item.meta.map((meta) => (
                      <div
                        key={meta}
                        className="rounded-[14px] border border-[#edf1f7] bg-[#fcfdff] px-3 py-2 text-[12px] font-medium text-[#475467]"
                      >
                        {meta}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="xl:sticky xl:top-8 xl:self-start">
          <div className="overflow-hidden rounded-[22px] border border-[#d7e5ff] bg-white shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
            <div className="border-b border-[#dbe7ff] bg-[linear-gradient(135deg,#eef4ff_0%,#f3efff_52%,#fff5e9_100%)] px-4 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4361ee]">
                  Company Setup
                </div>
                <div className="rounded-full bg-[#ffffffcc] px-2.5 py-1 text-[11px] font-semibold text-[#7f56d9]">
                  Ek servis
                </div>
              </div>
              <div className="mt-3 text-[18px] font-semibold tracking-[-0.025em] text-[#101828]">Beraber şirket kuralım</div>
              <p className="mt-1.5 text-[13px] leading-6 text-[#475467]">
                OY kuruluş akışını, PRH evraklarını ve banka hesabı sürecini birlikte netleştirelim.
              </p>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {supportItems.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[14px] px-3 py-2 text-[12px] font-semibold ${
                      index === 0
                        ? 'bg-[#eef4ff] text-[#2643a2]'
                        : index === 1
                          ? 'bg-[#f4efff] text-[#6941c6]'
                          : 'bg-[#ecfdf3] text-[#067647]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button className="rounded-[14px] bg-[#4361ee] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(67,97,238,0.18)]">
                  Birlikte kuralım
                </button>
                <button className="rounded-[14px] border border-[#d0d5dd] bg-[#f8fafc] px-4 py-2.5 text-[13px] font-semibold text-[#344054]">
                  Şirket checklist indir
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Şirket Kurulumu Maliyet Özeti</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="w-[28%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Kalem</th>
                <th className="w-[18%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Maliyet</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Not</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map(([item, cost, note], index) => (
                <tr key={`${index}-${item}`} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{item}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{cost}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[30px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Yönetim kurulu kuralı</div>
        <p className="mt-4 text-[15px] leading-8 text-[#8a4b21]">
          OY'un en az bir yönetim kurulu üyesi olmalı. EU/EEA dışından kurucular için ek PRH izni gerekebilir. Bir Finli
          veya AB vatandaşı yönetim kurulu üyesi varsa süreç kolaylaşıyor. Bu kişiyi Finlandiya’daki coworking ortamında
          veya mentor ağından bulabilirsin.
        </p>
      </div>
    </section>
  );
}
