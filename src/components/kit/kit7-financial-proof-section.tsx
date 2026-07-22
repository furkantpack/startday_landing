type ProofRow = {
  proof: string;
  format: string;
  notes: string;
};

const proofRows: ProofRow[] = [
  {
    proof: 'Banka ekstresi',
    format: 'Son 3 aylık dönem, resmi banka antetli, imzalı',
    notes: 'En güvenilir kanıt. Türkçe ise noter onaylı İngilizce tercüme gerekli.',
  },
  {
    proof: 'Yatırımcı mektubu',
    format: 'Yatırımcının imzalı taahhüt mektubu + miktarı',
    notes: 'Business Finland tarafından da kabul ediliyor. Miktar ve süre belirtilmeli.',
  },
  {
    proof: 'Kira geliri belgesi',
    format: 'Kira sözleşmesi + banka dekontları',
    notes: 'Sürekli gelir kaynağı olarak kabul edilir.',
  },
  {
    proof: 'İş sözleşmesi',
    format: 'Başka bir şirketten iş sözleşmesi',
    notes: 'Startup çalışmasıyla çakışmıyorsa kabul edilir.',
  },
  {
    proof: 'Şirket geliri',
    format: 'Mevcut şirketin dönem sonu bilançosu',
    notes: 'Şirket henüz kurulmamışsa kullanılamaz.',
  },
];

const scenarioCards = [
  {
    title: 'Minimum Senaryo (asgari geçim)',
    tone: 'bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)] border-[#dce7ff]',
    rows: [
      ['Migri minimum şartı', '€12,360/yıl'],
      ['2 yıllık izin için önerilen', '€24,720'],
      ['Şirket geliştirme için ek', '€5,000+'],
      ['Önerilen minimum banka bakiyesi', '€29,000+'],
    ],
  },
  {
    title: 'Güçlü Senaryo (önerilen)',
    tone: 'bg-[linear-gradient(180deg,#f8fff9_0%,#eefbf2_100%)] border-[#cfead6]',
    rows: [
      ['Kişisel geçim + emniyet payı', '€20,000+'],
      ['Şirket geliştirme bütçesi', '€15,000+'],
      ['Acil durum tamponu', '€5,000+'],
      ['Güçlü başvuru için ideal bakiye', '€40,000+'],
    ],
  },
];

export function Kit7FinancialProofSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Kaç Euro, Hangi Format, Hangi Alternatifler Geçerli
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finansal yetersizlik, başvuru redlerinin en yaygın ikinci sebebi. Bu bölümü dikkatlice oku ve başvurudan önce
          hesaplarını hazırla.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Minimum Gereksinim</div>
        <p className="mt-4 text-[15px] leading-8 text-[#475467]">
          Resmi minimum: kişi başına yılda <strong className="text-[#101828]">€12,360</strong> (aylık yaklaşık
          <strong className="text-[#101828]"> €1,030</strong>). Bu yalnızca Migri'nin asgari şartı. Başvurunu
          güçlendirmek için bunu aşman önerilir.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {scenarioCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{card.title}</div>
            <div className="mt-5 space-y-3">
              {card.rows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-[18px] border border-white/80 bg-white/85 px-4 py-4"
                >
                  <div className="text-[14px] leading-7 text-[#475467]">{label}</div>
                  <div className="text-[20px] font-semibold tracking-[-0.025em] text-[#101828]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Kabul Edilen Mali Kanıt Türleri</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="w-[24%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Kanıt Türü</th>
                <th className="w-[34%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Nasıl Sunulur</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Notlar</th>
              </tr>
            </thead>
            <tbody>
              {proofRows.map((row, index) => (
                <tr key={`${index}-${row.proof}`} className="border-t border-[#e6eaf2] first:border-t-0">
                  <td className="px-6 py-6 align-top text-[15px] font-medium text-[#101828]">{row.proof}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.format}</td>
                  <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[30px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="inline-flex rounded-full border border-[#f5d7b2] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b54708]">
          Dikkat
        </div>
        <div className="mt-4 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">
          Para hesabında görünür ve açıklanabilir olmalı
        </div>
        <p className="mt-4 text-[15px] leading-8 text-[#8a4b21]">
          “Paranın kaynağı belirsiz” veya “son aylarda aniden artan bakiye” red gerekçesi olabiliyor. Para hesabında
          en az 3 aydır durmalı. Yakın zamanda büyük para girişi olduysa açıklayıcı belge ekle: mülk satışı, miras
          belgesi veya resmi transfer kanıtı gibi.
        </p>
      </div>
    </section>
  );
}
