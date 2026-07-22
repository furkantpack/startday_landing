const steps = [
  {
    step: '1',
    title: 'Enter Finland Hesabı Oluştur',
    detail:
      'enterfinland.fi adresinde hem Business Finland Eligibility Statement hem de oturma izni başvurusu bu platform üzerinden yapılıyor. Ekipteki tüm kurucuların ayrı hesap açması gerekiyor.',
    meta: ['Süre: 15 dakika', 'Ücret: Ücretsiz', 'Link: enterfinland.fi'],
  },
  {
    step: '2',
    title: 'Eligibility Statement Başvurusu',
    detail:
      'Ekip adına tek bir kişi başvuru yapıyor. Enter Finland sorularını yanıtla, pasaport kopyaları ve CV’leri ekle. Pitch deck opsiyonel ama önerilir.',
    meta: ['Süre: 2–4 saat', 'Ücret: Ücretsiz', 'Bekleme: ~1 ay'],
  },
  {
    step: '3',
    title: 'Business Finland Kararını Bekle',
    detail:
      'Ortalama işlem süresi 1 aydır. Yoğun dönemlerde uzayabilir. Ek bilgi talep edilebilir; Enter Finland hesabını düzenli kontrol et. Olumlu karar bildirim olarak gelir.',
    meta: ['Önemli: 4 aylık süre başlar', 'Hemen Migri aşamasına geç'],
  },
  {
    step: '4',
    title: 'Oturma İzni Başvurusu',
    detail:
      'Her kurucu bireysel başvurusunu yapar. Eligibility Statement eklenir, mali kanıt yüklenir ve istenirse fast-track seçilir.',
    meta: ['Ücret: €400 online / €480 kağıt', 'Süre: 14 gün fast-track veya 1–2 ay'],
  },
  {
    step: '5',
    title: 'Kimlik Doğrulama ve Biyometri',
    detail:
      'En yakın Fin büyükelçiliği veya konsolosluğunda kimlik doğrulaması ve biyometrik veri verilir. Ankara veya İstanbul için randevuyu erken al.',
    meta: ['Gerekli: Pasaport + başvuru onayı', 'Randevu: 3–4 hafta önceden önerilir'],
  },
  {
    step: '6',
    title: 'Karar ve D Vizesi',
    detail:
      'Migri kararı Enter Finland üzerinden gelir. D vizesi talep ettiysen pasaportuna işlenebilir ve kart gelmeden Finlandiya’ya giriş sağlar.',
    meta: ['D Vizesi: 100 gün', 'Kart daha sonra posta ile gelebilir'],
  },
  {
    step: '7',
    title: "Finlandiya'ya Taşın ve Kaydol",
    detail:
      'DVV ofisine giderek yerleşim kaydını yap. Henkilötunnus aldıktan sonra banka hesabı, şirket kuruluşu ve vergi işlemleri açılır.',
    meta: ['DVV kayıt: ücretsiz', 'Henkilötunnus → banka → şirket → vergi'],
  },
];

const accents = [
  'before:bg-[#4361ee]',
  'before:bg-[#f59e0b]',
  'before:bg-[#7c3aed]',
  'before:bg-[#0ea5e9]',
  'before:bg-[#ec4899]',
  'before:bg-[#12b76a]',
  'before:bg-[#64748b]',
];

export function Kit7ApplicationStepsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Business Finland → Enter Finland → Migri Tam Akışı
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Başvuruyu doğru sırayla yönetmek, süre kaybetmemek için kritik. En sık hata, Eligibility Statement geldikten
          sonra 4 aylık geçerlilik penceresini kaçırmak veya büyükelçilik randevusunu geç planlamak oluyor.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Başvuru akışı</div>
        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${
                accents[index % accents.length]
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

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Süreç özeti takvimi</div>
        <p className="mt-3 text-[15px] leading-8 text-[#475467]">
          Eligibility Statement başvurusu → yaklaşık 1 ay bekleme → oturma izni başvurusu → 14 gün fast-track →
          büyükelçilik randevusu → D vizesi → taşınma. En hızlı senaryoda 2–3 ayda tamamlanabilir; randevu gecikmelerini
          hesaba katarsan 3–4 ay daha gerçekçi bir plandır.
        </p>
      </div>
    </section>
  );
}
