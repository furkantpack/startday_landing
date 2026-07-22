const timelineGroups = [
  {
    title: 'Hazırlık Aşaması',
    range: 'Hafta 1–8',
    accent: 'bg-[#eef4ff]',
    items: [
      {
        week: 'Hafta 1–2',
        title: 'Fikir ve Ekip Değerlendirmesi',
        detail:
          'Startup fikri puanlama rehberini uygula. Co-founder yoksa arama sürecini başlat. Pazar araştırması için 10–15 potansiyel müşteri görüşmesi planla.',
      },
      {
        week: 'Hafta 3–4',
        title: 'Mali Hazırlık',
        detail:
          'Banka bakiyeni kontrol et. €29,000+ hedefine ne kadar uzaksın? Yatırımcı mektubu alabilecek biri var mı? 3 aylık banka geçmişinin temiz görünmesini sağla.',
      },
      {
        week: 'Hafta 5–6',
        title: 'Başvuru Materyalleri Hazırlığı',
        detail:
          'CV’leri İngilizce güncelle. LinkedIn profillerini optimize et. İş planını yaz. Pitch deck hazırla. Enter Finland hesabı oluştur.',
      },
      {
        week: 'Hafta 7–8',
        title: 'Finlandiya Bağlantısı Kur',
        detail:
          'LinkedIn’den Finlandiyalı potansiyel müşteri veya partnerlerle iletişime geç. Maria 01 veya Slush etkinliğine online kayıt yap. “Neden Finlandiya” kısmını somutlaştır.',
      },
    ],
  },
  {
    title: 'Başvuru Aşaması',
    range: 'Hafta 9–20',
    accent: 'bg-[#f4efff]',
    items: [
      {
        week: 'Hafta 9',
        title: 'Business Finland Eligibility Statement Gönder',
        detail: 'Enter Finland üzerinden başvuruyu tamamla. Tüm belgeleri yükle. Onay bekleme süreci başlıyor.',
      },
      {
        week: 'Hafta 9–13',
        title: 'Bekleme Süreci + Büyükelçilik Randevusu Al',
        detail:
          'Enter Finland’ı düzenli kontrol et. Aynı anda Fin Büyükelçiliği’nden randevu al. Bu süreçte Finlandiya araştırmasını derinleştir.',
      },
      {
        week: 'Hafta 13–14',
        title: 'Eligibility Statement Sonucu',
        detail:
          'Olumlu sonuçta hemen oturma izni başvurusuna geç. Olumsuz sonuçta geri bildirimi okuyup güçlendir ve tekrar başvur.',
      },
      {
        week: 'Hafta 14–15',
        title: 'Oturma İzni Başvurusu',
        detail: 'Her kurucu bireysel başvuru yapıyor. Fast-track seçeneğini işaretle. Ücret öde ve Eligibility Statement ekle.',
      },
      {
        week: 'Hafta 15–16',
        title: 'Büyükelçilik Ziyareti — Kimlik Doğrulama',
        detail: 'Randevun gerçekleşiyor. Pasaport, fotoğraf ve belgelerle git. Biyometrik veri alınıyor.',
      },
      {
        week: 'Hafta 17–18',
        title: 'Oturma İzni Kararı + D Vizesi',
        detail:
          'Fast-track’te 14 gün. Olumlu karar geldiğinde gerekiyorsa D Vizesi için büyükelçiliğe tekrar git.',
      },
    ],
  },
  {
    title: 'Taşınma ve Kurulum Aşaması',
    range: 'Hafta 19–30',
    accent: 'bg-[#ecfdf3]',
    items: [
      {
        week: 'Hafta 19–20',
        title: "Finlandiya'ya Taşın",
        detail:
          'D Vizesiyle Finlandiya’ya gir. Geçici konaklama ayarla. DVV’ye yerleşim kaydı yaptır ve henkilötunnus al.',
      },
      {
        week: 'Hafta 21–24',
        title: 'Şirket Kurulumu',
        detail:
          'Kalıcı adres bul. OY kuruluş başvurusu yap. PRH onayını bekle, Y-tunnus al, banka hesabı aç ve KDV kaydını tamamla.',
      },
      {
        week: 'Hafta 25–30',
        title: 'Ekosisteme Katıl & Başla',
        detail:
          'Maria 01 veya başka coworking alanına geç. Startup Sauna / Kiuas etkinliklerine katıl. Destek programlarına başvur ve ilk müşteri görüşmelerini başlat.',
      },
    ],
  },
];

const reminders = [
  'Eligibility Statement 4 ay geçerli — bu süre dolmadan oturma iznini tamamla',
  'D Vizesi 100 gün geçerli — çok uzun bekleme varsa dikkat et',
  'Büyükelçilik randevusunu Eligibility Statement başvurusuyla eş zamanlı al',
  'Business Finland startuppermit@businessfinland.fi adresine doğrudan soru sorabilirsin',
  "Vize uzatması için Finlandiya'da bulunman ve startup kriterlerini karşılamaya devam etmen gerekiyor",
];

export function Kit7TimelineSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Gün 0'dan Helsinki'ye — Hafta Hafta Plan
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Bu plan, sıfırdan başlayan bir kişi için gerçekçi bir yol haritası sunuyor. Kendi durumuna göre bazı adımları
          paralel olarak yürütebilirsin. En kritik darboğaz: Business Finland bekleme süresi ve büyükelçilik randevusu.
        </p>
      </div>

      {timelineGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${group.accent}`}>
                {group.range}
              </div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{group.title}</div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {group.items.map((item, index) => (
              <div
                key={`${group.title}-${item.week}`}
                className={`relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${
                  index % 3 === 0 ? 'before:bg-[#4361ee]' : index % 3 === 1 ? 'before:bg-[#7c3aed]' : 'before:bg-[#12b76a]'
                }`}
              >
                <div>
                  <div className="inline-flex rounded-[9px] bg-[#f6f8fb] px-2.5 py-1.5 text-[12px] font-medium text-[#667085]">
                    {item.week}
                  </div>
                  <div className="mt-5 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-[30px] border border-[#d7f0e9] bg-[linear-gradient(135deg,#f2fffb_0%,#eff6ff_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Gerçekçi toplam süre</div>
        <p className="mt-4 text-[15px] leading-8 text-[#475467]">
          Hazırlık + başvuru + taşınma süreci optimist senaryoda 5–6 ay alıyor. Büyükelçilik randevu gecikmesi ve ek
          bilgi talepleri bunu 7–9 aya çıkarabilir. Sabırlı ol; bu süreç hız yarışı değil, sağlam adım atmak için fırsat.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Kritik Hatırlatmalar</div>
        <div className="mt-5 space-y-3">
          {reminders.map((item) => (
            <div key={item} className="rounded-[18px] border border-[#f4d8c5] bg-white/85 px-4 py-3 text-[14px] font-medium text-[#8a4b21]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
