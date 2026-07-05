'use client';

const checklistGroups = [
  {
    title: 'Aşama 1: Business Finland Eligibility Statement',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
    items: [
      {
        name: 'Ekip üyelerinin pasaport kopyaları',
        detail: 'Her kurucunun geçerli pasaportu, PDF, tüm kurucular için.',
      },
      {
        name: 'CV’ler (tüm kurucular için)',
        detail: 'İngilizce, 1–2 sayfa, PDF formatında hazırlanmalı.',
      },
      {
        name: 'İş planı / pitch deck',
        detail: 'Zorunlu değil ama güçlü tavsiye edilir; 5–10 slayt, İngilizce.',
      },
      {
        name: 'Enter Finland hesabı',
        detail: 'Başvuru bu platform üzerinden yapılıyor; önceden oluştur.',
      },
    ],
  },
  {
    title: 'Aşama 2: Oturma İzni Başvurusu (Migri)',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
    items: [
      {
        name: 'Eligibility Statement (orijinal)',
        detail: 'Business Finland’dan alınan olumlu değerlendirme; 4 aydan eski olmamalı.',
      },
      {
        name: 'Geçerli pasaport',
        detail: 'İzin bitişinden itibaren en az 3 ay geçerli ve en az 2 boş sayfalı olmalı.',
      },
      {
        name: 'Biyometrik fotoğraf',
        detail: 'Son 6 ay içinde çekilmiş, beyaz arka plan, 36×47 mm.',
      },
      {
        name: 'Mali kanıt belgeleri',
        detail: 'Son 3 ay banka ekstresi, yatırımcı mektubu veya diğer gelir kanıtları.',
      },
      {
        name: 'Finlandiya adresi (varsa)',
        detail: 'Başvuru sırasında zorunlu değil, ama varsa ekle.',
      },
      {
        name: 'Şirket belgeleri (varsa)',
        detail: 'Kayıt belgesi ve hisse yapısı; şirket kurulmamışsa gerekmiyor.',
      },
    ],
  },
];

const optionalDocs = [
  {
    title: 'MP_1 Formu',
    detail: 'Finlandiya’daysan ve ilk kez başvuruyorsan gerekir. enterfinland.fi üzerinden indir.',
  },
  {
    title: 'D Vizesi başvurusu',
    detail: 'Oturma izni kartın hazır olmadan Finlandiya’ya giriş planlıyorsan, izinle eş zamanlı başvur.',
  },
  {
    title: 'Aile üyeleri için ek belgeler',
    detail: 'Eş veya çocuklar geliyorsa nikah cüzdanı, doğum belgeleri gibi ek evraklar gerekir.',
  },
];

export function Kit7ChecklistSection() {
  return (
    <section className="mt-10 space-y-5">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Her Belge: Zorunlu mu, Nereden Alınır, Format Gereksinimleri
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Başvuru sürecinde hata en çok belge hazırlığında oluyor. Bu sayfa, hangi evrakın hangi aşamada gerektiğini,
          hangi formatta hazırlanacağını ve nereden alınacağını tek yerde toplar.
        </p>
      </div>

      {checklistGroups.map((group, groupIndex) => (
        <div
          key={group.title}
          className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
        >
          <div className="flex items-center gap-3">
            <div className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${group.tone}`}>
              {String(groupIndex + 1).padStart(2, '0')}
            </div>
            <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{group.title}</div>
          </div>

          <div className="mt-5 space-y-3">
            {group.items.map((item, index) => (
              <label
                key={item.name}
                className="flex cursor-pointer items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 transition-colors hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-[#cfd6e4] accent-[#12b76a]"
                  defaultChecked={groupIndex === 0 ? index < 1 : index < 2}
                />
                <span>
                  <span className="block text-[15px] font-medium text-[#101828]">{item.name}</span>
                  <span className="mt-1 block text-[14px] leading-7 text-[#475467]">{item.detail}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="grid gap-6 xl:grid-cols-[1fr_0.92fr]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-[10px] bg-[#ffe2c5] px-3 py-1 text-[12px] font-semibold text-[#101828]">
              03
            </div>
            <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">
              Ayrıca ihtiyaç duyabileceğin belgeler
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {optionalDocs.map((item) => (
              <label
                key={item.title}
                className="flex cursor-pointer items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 transition-colors hover:bg-white"
              >
                <input type="checkbox" className="mt-1 size-4 rounded border-[#cfd6e4] accent-[#12b76a]" />
                <span>
                  <span className="block text-[15px] font-medium text-[#101828]">{item.title}</span>
                  <span className="mt-1 block text-[14px] leading-7 text-[#475467]">{item.detail}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="inline-flex rounded-full border border-[#f5d7b2] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b54708]">
            Çeviri notu
          </div>
          <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Tercümeyi son ana bırakma</div>
          <p className="mt-4 text-[15px] leading-8 text-[#8a4b21]">
            Türkçe belgeler Türkiye’den yeminli tercüman tarafından İngilizceye veya Finceye çevrilmeli ve noter onaylı
            olmalı. Özellikle banka ekstreleri ve aile belgelerinde bu süreç zaman alabilir.
          </p>

          <div className="mt-5 space-y-3">
            {[
              'Banka ekstrelerini en az 2 hafta önce hazırlamaya başla',
              'Aile belgelerinde apostil / noter ihtiyacını kontrol et',
              'Tüm PDF isimlendirmelerini düzenli tut',
            ].map((item, index) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 rounded-[18px] border border-[#f4d8c5] bg-white/85 px-4 py-4 transition-colors hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-[#d8c4b4] accent-[#12b76a]"
                  defaultChecked={index === 0}
                />
                <span className="text-[14px] font-medium text-[#8a4b21]">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
