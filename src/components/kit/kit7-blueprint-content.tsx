import { Kit4BlueprintContent } from '@/components/kit/kit4-blueprint-content';
import { Kit7ApplicationStepsSection as Kit7ApplicationStepsNativeSection } from '@/components/kit/kit7-application-steps-section';
import { Kit7BusinessPlanSection } from '@/components/kit/kit7-business-plan-section';
import { Kit7ChecklistSection as Kit7ChecklistTodoSection } from '@/components/kit/kit7-checklist-section';
import { Kit7CompanyFormationSection } from '@/components/kit/kit7-company-formation-section';
import { Kit7EcosystemSection } from '@/components/kit/kit7-ecosystem-section';
import { Kit7FinancialProofSection } from '@/components/kit/kit7-financial-proof-section';
import { Kit7RelocationSection } from '@/components/kit/kit7-relocation-section';
import { Kit7RejectionReasonsSection } from '@/components/kit/kit7-rejection-reasons-section';
import { Kit7SuccessStoriesSection } from '@/components/kit/kit7-success-stories-section';
import { Kit7StartupScoringSection } from '@/components/kit/kit7-startup-scoring-section';
import { Kit7TaxLegalSection } from '@/components/kit/kit7-tax-legal-section';
import { Kit7TimelineSection } from '@/components/kit/kit7-timeline-section';

const finlandStats = [
  {
    value: '14 gün',
    label: 'Fast-track işlem süresi',
    note: 'Business Finland onayı sonrası izin süreci ortalama iki haftada netleşiyor.',
    className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    value: '4.200+',
    label: 'Aktif startup (2025)',
    note: 'Olgunlaşmış, uluslararası ağlara açık güçlü bir erken aşama ekosistemi.',
    className: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f3e8ff_100%)]',
  },
  {
    value: '13',
    label: 'Unicorn sayısı',
    note: 'Küçük nüfusa rağmen yüksek yoğunlukta teknoloji başarısı üretmiş bir ülke.',
    className: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffdcb2_100%)]',
  },
  {
    value: '#1',
    label: 'AB dijital hazırlık sıralaması',
    note: 'Dijital devlet altyapısı ve startup operasyonları tarafında çok güçlü zemin.',
    className: 'bg-[linear-gradient(135deg,#f5f3ff_0%,#e0f2fe_100%)]',
  },
  {
    value: '#1',
    label: 'Dünya Mutluluk Raporu 2024',
    note: 'Yaşam kalitesi ile iş yapma ortamını aynı anda güçlendiren nadir ülkelerden biri.',
    className: 'bg-[linear-gradient(135deg,#fdf2f8_0%,#fef3c7_100%)]',
  },
  {
    value: '2018',
    label: 'Program başlangıcı',
    note: 'Yeni değil; yeterince eski olduğu için süreç artık daha öngörülebilir ve net.',
    className: 'bg-[linear-gradient(135deg,#eff6ff_0%,#eef2ff_100%)]',
  },
];

const finlandSignals = [
  'Finlandiya GDP’si 2025’te %1.1–1.5 büyüme hedefliyor; teknoloji ve temiz enerji öncü sektörler.',
  'Business Finland, yenilikçi startup’lara €500,000’a varan cleantech hibeleri sunuyor.',
  'Slush, yıllık 13.000+ katılımcıyla dünyanın en büyük startup etkinliklerinden biri; bağlantı ağı eşsiz.',
  'Finlandiya’da mühendis havuzu güçlü; Aalto Üniversitesi teknoloji alanında dünya üst sıralarında.',
  'Program 2018’den bu yana binlerce başvurucu çekti; süreç olgunlaştı ve öngörülebilir hale geldi.',
  'Aile üyelerini getirme imkanı güçlü: eş çalışma izni alıyor, çocuklar ücretsiz eğitimden yararlanıyor.',
  '4 yıl sonra daimi oturma izni, 8 yıl sonra vatandaşlık yolu açık.',
  'Hiçbir danışman kesin onay garantisi veremez; başvuruyu kendin yapabilmen gerçek avantajdır.',
];

const eligibilityCards = [
  {
    step: '1',
    title: 'AB/AEA Dışı Vatandaşlık',
    detail:
      'AB veya AEA ülkesi vatandaşları bu programa başvuramaz. Türkiye dahil tüm AB dışı ülkeler hak kazanır. AB vatandaşları zaten serbest dolaşım hakkına sahip olduğu için bu programa ihtiyaç duymaz.',
    note: 'Türkiye dahil tüm AB dışı ülkeler için açık.',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
  },
  {
    step: '2',
    title: 'En Az 2 Kurucu',
    detail:
      'Business Finland genel olarak en az 2 kurucudan oluşan ekip arar. Solo founder başvuruları çok nadir onaylanır. Kurucuların birbirini tamamlayan becerilere sahip olması beklenir.',
    note: 'Ana kurucu: en az %60 hisse. Kalan pay destekleyici kurucular arasında dağılır.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
  },
  {
    step: '3',
    title: 'Uluslararası Büyüme Odaklı İş Modeli',
    detail:
      'Şirketin hızlı uluslararası büyüme potansiyeli taşıması gerekir. “Ölçeklenebilir” olduğunu pazar büyüklüğü, hedef ülkeler ve büyüme stratejisiyle açık biçimde anlatmalısın.',
    note: 'Yerel işletme değil, uluslararası startup anlatısı gerekir.',
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)]',
  },
  {
    step: '4',
    title: 'Yeterli Mali Kaynak',
    detail:
      'Her kurucu için yılda en az €12,360, yani aylık yaklaşık €1,030 geçim kaynağı kanıtlanmalıdır. Bu iş geliri, banka hesabı, yatırımcı desteği veya düzenli başka bir gelir olabilir.',
    note: 'Helsinki için öneri aylık €1,200+ ve 2 yıllık izin için toplam ~€29,000 kanıt.',
    tone: 'bg-[linear-gradient(135deg,#fdf2f8_0%,#f5f3ff_100%)]',
  },
  {
    step: '5',
    title: 'Finlandiya’da Çalışma Taahhüdü',
    detail:
      'Şirkette bizzat çalışacağını ve bu çalışmanın Finlandiya’da gerçekleşeceğini kanıtlaman gerekir. Sadece şirket sahibi olmak yetmez; aktif rol üstlenmen beklenir.',
    note: 'Pasif ortaklık değil, aktif founder rolü gerekir.',
    tone: 'bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_100%)]',
  },
];

const processRows = [
  {
    stage: '1. Eligibility Statement',
    institution: 'Business Finland',
    action: 'İş planı ve ekip değerlendirmesi yapılır. Olumlu sonuç, ikinci aşama için zorunlu belgedir.',
    duration: '~1 ay (ortalama)',
    fee: 'Ücretsiz',
  },
  {
    stage: '2. Oturma İzni Başvurusu',
    institution: 'Migri (Enter Finland)',
    action: 'Eligibility Statement + mali kanıt + pasaport ile oturma izni başvurusu yapılır. Fast-track mevcuttur.',
    duration: '14 gün (fast-track)',
    fee: '€400 (online)',
  },
];

const applicantProfiles = [
  {
    status: 'Güçlü Profil',
    title: 'Teknik + Ticari Ekip',
    detail:
      'Bir yazılımcı ile bir iş geliştirme / satış uzmanının birlikte başvurması Business Finland’ın en çok görmek istediği kombinasyon. Her kurucu şirkete farklı bir uzmanlık getirir. Startup deneyimi veya önceki girişimler varsa büyük artıdır.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#e9fff4_100%)]',
    badgeClass: 'bg-[#ecfbf4] text-[#067647]',
  },
  {
    status: 'Kabul Edilebilir',
    title: 'Sektör Uzmanı Çifti',
    detail:
      'Aynı sektörden gelen ama farklı rollerdeki iki kurucu. Örneğin bir doktor ile sağlık teknolojisi uzmanı. Sektör derinliği güçlü olmalı ve “neden Finlandiya?” sorusuna çok net yanıt verilmelidir.',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
    badgeClass: 'bg-[#eef4ff] text-[#4361ee]',
  },
  {
    status: 'Riskli Profil',
    title: 'Solo Founder',
    detail:
      'Tek kuruculu başvurular nadiren onaylanır. Business Finland ekip sinerjisi ve tamamlayıcı beceriler arar. Tek kişiyle başvuruyorsan çok güçlü bir geçmiş ve çok net bir büyüme planı gerekir.',
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef2f2_100%)]',
    badgeClass: 'bg-[#fff4ea] text-[#b54708]',
  },
];

const applicantRows = [
  {
    criteria: 'Ekip büyüklüğü',
    strong: '2–4 kurucu, tamamlayıcı beceri',
    acceptable: '2 kurucu, benzer alan',
    weak: '1 kurucu',
  },
  {
    criteria: 'Teknik beceri',
    strong: 'Ekipte aktif geliştirici',
    acceptable: 'Teknik danışman desteği',
    weak: 'Sıfır teknik altyapı',
  },
  {
    criteria: 'Pazar odağı',
    strong: 'Uluslararası, ölçeklenebilir, B2B SaaS tarzı',
    acceptable: 'Avrupa pazarı odaklı',
    weak: 'Yalnızca yerel/Türkiye pazarı',
  },
  {
    criteria: 'Önceki deneyim',
    strong: 'Çalışan startup / exit / VC yatırım deneyimi',
    acceptable: 'İlgili sektörde çalışmış',
    weak: 'Konuyla ilgisiz geçmiş',
  },
  {
    criteria: 'Mali kanıt',
    strong: '€30,000+ banka + yatırımcı desteği',
    acceptable: '€15,000–29,000 banka',
    weak: '€12,000 altı',
  },
  {
    criteria: 'İngilizce seviyesi',
    strong: 'İş İngilizcesi akıcı',
    acceptable: 'Orta-iyi seviye',
    weak: 'Temel seviye',
  },
];

const countryComparisonCards = [
  {
    flag: '🇫🇮',
    name: 'Finlandiya',
    status: 'Önerilen',
    points: [
      '14 günde fast-track izin',
      'Ücretsiz Business Finland değerlendirmesi',
      'Güçlü ekosistem + Slush erişimi',
      '4 yıl → daimi oturma izni',
      'Aile üyelerine çalışma izni',
      'Şeffaf kriterler, öngörülebilir süreç',
    ],
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#e9fff4_100%)]',
    badgeClass: 'bg-[#ecfbf4] text-[#067647]',
  },
  {
    flag: '🇪🇪',
    name: 'Estonya',
    status: 'Alternatif',
    points: [
      'e-Residency fiziksel ikamet vermiyor',
      'Startup Visa ayrı, daha kısıtlı',
      'Küçük yerel pazar',
      'Dijital altyapı güçlü',
      'Düşük maliyet avantajı var',
    ],
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
    badgeClass: 'bg-[#eef4ff] text-[#4361ee]',
  },
  {
    flag: '🇩🇪',
    name: 'Almanya',
    status: 'Zor',
    points: [
      'Bürokrasi ağır, süreç uzun',
      'Almanca önemli avantaj sağlıyor',
      'Büyük pazar erişimi güçlü',
      'Onay süresi 3–6 ay olabilir',
      'Değerlendirme kriterleri belirsiz',
    ],
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef2f2_100%)]',
    badgeClass: 'bg-[#fff4ea] text-[#b54708]',
  },
];

const countryComparisonRows = [
  {
    criteria: 'İşlem süresi',
    finland: '14 gün (fast-track)',
    estonia: '30–60 gün',
    germany: '3–6 ay',
    netherlands: '2–3 ay',
    france: '2–4 ay',
  },
  {
    criteria: 'Min. sermaye',
    finland: '€0 (OY için kaldırıldı)',
    estonia: '€0',
    germany: '€12,500',
    netherlands: '€0,01',
    france: '€1',
  },
  {
    criteria: 'Başvuru ücreti',
    finland: '€400',
    estonia: '€100',
    germany: '€110',
    netherlands: '€171',
    france: '€99',
  },
  {
    criteria: 'Değerlendirme kurumu',
    finland: 'Business Finland',
    estonia: 'Startup Estonia',
    germany: 'Çeşitli (eyalete göre)',
    netherlands: 'RVO.nl',
    france: 'BPI France',
  },
  {
    criteria: 'İzin süresi',
    finland: '2 yıl (uzatılabilir)',
    estonia: '2 yıl',
    germany: '3 yıl',
    netherlands: '2 yıl',
    france: '1–4 yıl',
  },
  {
    criteria: 'Fiziksel ikamet',
    finland: 'Evet ✓',
    estonia: 'e-Residency → hayır',
    germany: 'Evet',
    netherlands: 'Evet',
    france: 'Evet',
  },
];

const evaluationCriteria = [
  {
    step: '1',
    title: 'İş Modeli ve Ölçeklenebilirlik',
    detail:
      'İş modelinin uluslararası büyüme potansiyeli taşıyıp taşımadığı incelenir. Yazılım, platform, marketplace ve SaaS gibi modeller öne çıkar. “Danışmanlık yapacağım” veya “yerel hizmet sunacağım” yanıtları red riski yaratır.',
    weight: 'Ağırlık: Yüksek',
    proof: 'Beklenen kanıt: hedef pazar büyüklüğü rakamları, büyüme stratejisi',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
  },
  {
    step: '2',
    title: 'Ekip Yetkinliği ve Tamamlayıcılık',
    detail:
      'Kurucuların geçmişi, uzmanlık alanları ve birbirini nasıl tamamladığı değerlendirilir. CV ve LinkedIn profilleri incelenir. Önceki startup deneyimi, sektörel uzmanlık ve akademik geçmiş önemlidir.',
    weight: 'Ağırlık: Çok Yüksek',
    proof: 'Beklenen kanıt: CV’ler, önceki projeler, referanslar',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
  },
  {
    step: '3',
    title: 'Yenilikçilik ve Rekabet Avantajı',
    detail:
      'Çözümün rakiplerden farkı net şekilde gösterilmelidir. “Bunu başka kim yapıyor ve sen neden daha iyisin?” sorusuna somut yanıt veremeyen başvurular zayıf kalır.',
    weight: 'Ağırlık: Yüksek',
    proof: 'Beklenen kanıt: rakip analizi, fark yaratan özellik',
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)]',
  },
  {
    step: '4',
    title: 'Pazar Potansiyeli ve Müşteri Talebi',
    detail:
      'Hedef pazarın büyüklüğü, büyüme hızı ve müşteri talebinin kanıtı incelenir. Mevcut kullanıcı, pilot müşteri veya bekleme listesi varsa başvuruyu ciddi şekilde güçlendirir.',
    weight: 'Ağırlık: Orta-Yüksek',
    proof: 'Beklenen kanıt: TAM/SAM rakamları, potansiyel müşteri görüşmeleri',
    tone: 'bg-[linear-gradient(135deg,#fdf2f8_0%,#f5f3ff_100%)]',
  },
  {
    step: '5',
    title: 'Finansal Kaynaklar ve Sürdürülebilirlik',
    detail:
      'Her kurucunun kişisel geçim masraflarını ve şirketin erken dönem geliştirme maliyetlerini karşılayacak yeterli kaynağa sahip olup olmadığı kontrol edilir.',
    weight: 'Ağırlık: Orta',
    proof: 'Beklenen kanıt: banka ekstreleri, yatırımcı mektubu, gelir belgesi',
    tone: 'bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_100%)]',
  },
];

const evaluationQuestions = [
  'İş fikrinizi kısaca açıklayın (executive summary)',
  'Müşterinin sorunu nedir? Mevcut alternatifler neler?',
  'Rakipler kimler? Rekabet avantajınız ne?',
  'Ekip yapınızı ve her kurucunun rolünü anlatın',
  'Hisse yapısı nedir? Her kurucunun oranı?',
  'Finlandiya’ya neden taşınmak istiyorsunuz?',
  '12 aylık büyüme planınız nedir?',
];

const visaTrendRows = [
  {
    year: '2023',
    applications: '~1.200+',
    approval: '%90+',
    trend: 'Altın Çağ',
  },
  {
    year: '2024',
    applications: '~1.100',
    approval: '%80',
    trend: 'Standartlaşma',
  },
  {
    year: '2025',
    applications: '~150 (İlk Çeyrek Verisi*)',
    approval: '%23',
    trend: 'Sert Düşüş / Filtreleme',
  },
];

const rejectionFlags = [
  {
    step: '1',
    title: '“Innovative Difference” Eksikliği',
    detail:
      'Sadece yerel pazara hitap eden, teknolojik üstünlüğü olmayan klasik e-ticaret veya hizmet modelleri. Business Finland bunu “Finlandiya ekonomisine özgün değer katmıyor” diyerek reddedebiliyor.',
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef2f2_100%)]',
  },
  {
    step: '2',
    title: 'Ekip Yapısındaki Zayıflık',
    detail:
      'Solo founder başvuruları veya ekibin işi büyütecek teknik yetkinliğe sahip olmaması güçlü red flag. Business Finland en az 2 kurucu ve çok yönlü uzmanlık görmek istiyor.',
    tone: 'bg-[linear-gradient(135deg,#fef2f2_0%,#fff1f2_100%)]',
  },
  {
    step: '3',
    title: 'Finansal Yetersizlik',
    detail:
      'Kişi başı yıllık yaklaşık €12.000 seviyesindeki fonun bankada gösterilememesi veya şirketin operasyonel runway’inin belirsiz kalması başvuruyu ciddi biçimde zayıflatıyor.',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
  },
  {
    step: '4',
    title: 'Ölçeklenme Planının Gerçekçi Olmaması',
    detail:
      '“Milyon dolarlık ciro yapacağız” gibi iddialar, kanal ve dönüşüm mantığıyla desteklenmiyorsa inandırıcı bulunmuyor. PLG, direct sales ve funnel mantığı somut anlatılmalı.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
  },
];

const founderProfileCards = [
  {
    title: 'CV Hazırlama Kriterleri',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
    items: [
      '1–2 sayfa, İngilizce, reverse chronological format',
      'Başarı odaklı anlatım: görev değil sonuç yaz',
      'Startup deneyimi, yan projeler ve hackathonlar mutlaka görünmeli',
      'Fon, yarışma veya yatırım geçmişi varsa öne çıkar',
      'Finlandiya bağlantısı varsa mutlaka ekle',
    ],
  },
  {
    title: 'LinkedIn Profili Optimizasyonu',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
    items: [
      'Headline: “Co-founder at [Şirket] | [Uzmanlık alanı]”',
      'About: Kim olduğun, ne inşa ettiğin, neden Finlandiya',
      'Deneyim bölümü boş kalmamalı',
      'Şirket sayfası oluşturulmuş ve profile bağlanmış olmalı',
      'En az 2–3 tavsiye güvenilirlik sağlar',
    ],
  },
  {
    title: 'Co-Founder Stratejisi',
    tone: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)]',
    items: [
      'Startup Sauna / Kiuas gibi Finlandiya bazlı ağlara gir',
      'CoFoundersLab / FoundersList kullan',
      'LinkedIn gelişmiş arama ile Helsinki / Finland odaklı tarama yap',
      'Slush ve Arctic15 etkinliklerine online da olsa dahil ol',
      'Sahte veya ücretli co-founder modeli kurma',
    ],
  },
];

const linkedInRows = [
  {
    section: 'Başlık (Headline)',
    should: '"Co-founder at [Şirket] | [Uzmanlık alanı]" formatında',
  },
  {
    section: 'Özet (About)',
    should: '3–4 cümle: kim olduğun, ne inşa ettiğin, neden Finlandiya',
  },
  {
    section: 'Deneyim',
    should: 'Tüm pozisyonlar başarı odaklı madde madde. Boş bölüm bırakma',
  },
  {
    section: 'Eğitim',
    should: 'Tüm eğitimler, kurslar ve sertifikalar eklenmiş olmalı',
  },
  {
    section: 'Şirket sayfası',
    should: 'Startup’ın LinkedIn sayfası oluşturulmuş ve profile bağlanmış olmalı',
  },
  {
    section: 'Tavsiyeler',
    should: 'En az 2–3 referans / tavsiye eklenmiş olması güvenilirlik sağlar',
  },
];

const documentChecklistGroups = [
  {
    title: 'Aşama 1: Business Finland Eligibility Statement',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#f7f2ff_100%)]',
    items: [
      {
        name: 'Ekip üyelerinin pasaport kopyaları',
        detail: 'Her kurucunun geçerli pasaportu, PDF, tüm kurucular için',
      },
      {
        name: 'CV’ler (tüm kurucular için)',
        detail: 'İngilizce, 1–2 sayfa, PDF formatında',
      },
      {
        name: 'İş planı / pitch deck',
        detail: 'Zorunlu değil ama güçlü tavsiye ediliyor; 5–10 slayt, İngilizce',
      },
      {
        name: 'Enter Finland hesabı',
        detail: 'Başvuru bu platform üzerinden yapılıyor; önceden oluştur',
      },
    ],
  },
  {
    title: 'Aşama 2: Oturma İzni Başvurusu (Migri)',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#f4fbf0_100%)]',
    items: [
      {
        name: 'Eligibility Statement (orijinal)',
        detail: 'Business Finland’dan alınan olumlu değerlendirme; 4 aydan eski olmamalı',
      },
      {
        name: 'Geçerli pasaport',
        detail: 'İzin bitişinden itibaren en az 3 ay geçerli ve en az 2 boş sayfalı olmalı',
      },
      {
        name: 'Biyometrik fotoğraf',
        detail: 'Son 6 ay içinde çekilmiş, beyaz arka plan, 36×47 mm',
      },
      {
        name: 'Mali kanıt belgeleri',
        detail: 'Son 3 ay banka ekstresi, yatırımcı mektubu veya diğer gelir kanıtı',
      },
      {
        name: 'Finlandiya adresi (varsa)',
        detail: 'Başvuru sırasında zorunlu değil, ama varsa ekle',
      },
      {
        name: 'Şirket belgeleri (varsa)',
        detail: 'Kayıt belgesi ve hisse yapısı; şirket kurulmamışsa gerekmiyor',
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

type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

type TableRow = Record<string, string>;

function NativeTable({
  columns,
  rows,
}: {
  columns: TableColumn[];
  rows: TableRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
      <table className="min-w-[760px] w-full border-collapse">
        <thead>
          <tr className="border-b border-[#e6eaf2]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-5 text-left text-[14px] font-medium text-[#667085] ${column.className ?? ''}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${index}-${row[columns[0].key]}`} className="border-t border-[#e6eaf2] first:border-t-0">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Kit7OpportunityBriefSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Neden Finlandiya, Neden Şimdi?</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finlandiya, Avrupa&apos;nın en erişilebilir startup vize programlarından birini sunuyor. 2018&apos;de
          başlatılan Startup Permit, AB dışından gelen girişimcilerin hızlı büyüyen uluslararası şirketler kurmak için
          Finlandiya&apos;ya taşınmasını mümkün kılıyor. Programın en güçlü yönü net süreç akışı: Business Finland
          değerlendirmesini geçen bir ekip, ortalama 14 günde izin alabiliyor. Buna kıyasla benzer Avrupa programları
          haftalarca, hatta aylarca sürebiliyor.
        </p>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          2025 itibarıyla Finlandiya&apos;da 4.200&apos;den fazla startup faaliyet gösteriyor ve ülke 13 teknoloji
          unicorn&apos;ıyla Avrupa&apos;nın en yoğun startup ekosistemlerinden biri konumunda. Helsinki, AB&apos;nin
          dijital hazırlık sıralamasında birinci. Bunun yanı sıra Finlandiya, 2024 Dünya Mutluluk Raporu&apos;nda da
          birinci sırada yer alıyor; yaşam kalitesi ve iş ortamını birleştiren nadir ülkelerden biri.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {finlandStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[42px] font-semibold tracking-[-0.06em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
            <div className="mt-2 text-[14px] leading-7 text-[#475467]">{stat.note}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Neden Finlandiya, Diğer Ülkeler Değil?</div>
          <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#475467]">
            <p>
              Çoğu girişimci önce Estonya e-Residency veya Berlin vizeleriyle karşılaşıyor. Finlandiya&apos;nın farkı
              üç noktada ortaya çıkıyor: süreç hızı, ekosistem derinliği ve yaşam kalitesi.
            </p>
            <p>
              Estonya e-Residency bir şirket kurmana izin veriyor ama fiziksel oturma hakkı vermiyor. Berlin vize
              programları daha karmaşık bürokratik süreçler gerektiriyor ve onay garantisi daha belirsiz.
            </p>
            <p>
              Finlandiya&apos;da başvurunun sonucu 14 gün gibi kısa bir sürede netleşiyor ve karar kriterleri şeffaf
              şekilde yayınlanıyor. Bu, danışman bağımlılığını azaltıyor ve programı daha öngörülebilir hale getiriyor.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(67,97,238,0.14)_0%,rgba(67,97,238,0)_72%)]" />
          <div className="relative">
            <div className="inline-flex items-center rounded-full border border-[#cfe0ff] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4361ee]">
              Legal note
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Kritik Gerçek</div>
              <div
                className="rotate-[-4deg] rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[14px] text-[#b45309] shadow-[0_10px_18px_rgba(245,158,11,0.12)]"
                style={{ fontFamily: '"Bradley Hand", "Segoe Print", "Comic Sans MS", cursive' }}
              >
                kesin onay diye bir şey yok
              </div>
            </div>

            <div className="mt-5 rounded-[26px] border border-[#d8e4ff] bg-white px-6 py-6 shadow-[0_14px_28px_rgba(67,97,238,0.08)]">
              <div className="flex gap-4">
                <div className="w-1.5 shrink-0 rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)]" />
                <div className="space-y-3">
                  <p className="text-[16px] leading-8 text-[#344054]">
                    Business Finland, hiçbir danışmana özel anlaşma yapmıyor ve başarı garantisi veremiyor.
                    Danışmanların sattığı “kesin onay” vaatleri yasal değil.
                  </p>
                  <p className="text-[16px] font-medium leading-8 text-[#101828]">
                    Başvuruyu kendin yapabilirsin; bu rehber tam olarak bunun için var.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                'Şeffaf karar kriterleri',
                'Hızlı ve öngörülebilir süreç',
                'Kendi başına başvurulabilir yapı',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[18px] border border-[#dbe4f0] bg-white px-4 py-3.5 shadow-[0_6px_14px_rgba(15,23,42,0.03)]"
                >
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${
                      index === 0
                        ? 'bg-[#eef4ff] text-[#4361ee]'
                        : index === 1
                          ? 'bg-[#ecfbf4] text-[#067647]'
                          : 'bg-[#fff4ea] text-[#b54708]'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-[14px] font-medium text-[#475467]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Piyasa Sinyalleri</div>
        <div className="mt-5 grid gap-3">
          {finlandSignals.map((item, index) => (
            <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit7ProductSpecSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Temel Tanımlar ve Hak Kazanma Koşulları</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finlandiya Startup İzni, resmi adıyla “Residence permit for a start-up entrepreneur”, AB dışından gelen
          girişimcilerin Finlandiya’da hızlı büyümeye odaklanan bir startup kurması veya büyütmesi için tasarlanmış bir
          oturma iznidir. Bu, turist vizesi değil; çalışma ve oturma hakkı veren tam izindir. İlk izin 2 yıl için verilir
          ve yenilenebilir.
        </p>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Dikkat: Bu program küçük yerel işletmeler için değil. Restoran, kuaför, danışmanlık firması gibi işletmeler bu
          vizeden yararlanamaz. Business Finland yalnızca ölçeklenebilir, uluslararası büyüme hedefleyen teknoloji odaklı
          iş modellerine olumlu değerlendirme yapar.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 text-[15px] leading-8 text-[#8a4b21] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <strong className="text-[#101828]">Dikkat:</strong> Bu program küçük yerel işletmeler için değil. Business Finland,
        yalnızca ölçeklenebilir ve uluslararası büyüme hedefleyen startup anlatılarına olumlu bakar.
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Temel Hak Kazanma Koşulları</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {eligibilityCards.map((item) => (
            <div
              key={item.step}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-white/80 text-[16px] font-semibold text-[#101828] shadow-[0_6px_14px_rgba(15,23,42,0.05)]">
                  {item.step}
                </div>
                <div>
                  <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
                  <div className="mt-4 rounded-[18px] border border-white/70 bg-white/75 px-4 py-3 text-[14px] text-[#344054]">
                    {item.note}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">İki Aşamalı Süreç</div>
        <NativeTable
          columns={[
            { key: 'stage', label: 'Aşama', className: 'w-[23%]' },
            { key: 'institution', label: 'Kurum', className: 'w-[20%]' },
            { key: 'action', label: 'Ne Yapılır', className: 'w-[37%]' },
            { key: 'duration', label: 'Süre', className: 'w-[10%]' },
            { key: 'fee', label: 'Ücret', className: 'w-[10%]' },
          ]}
          rows={processRows}
        />

        <div className="rounded-[28px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] p-6 text-[15px] leading-8 text-[#34508c] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <strong className="text-[#101828]">Önemli:</strong> Eligibility Statement belgesinin geçerlilik süresi 4 aydır.
          Bu 4 ay içinde oturma izni başvurusunu tamamlamazsan yeni bir Eligibility Statement almak zorundasın. Başvuru
          takvimini buna göre planla.
        </div>
      </div>
    </section>
  );
}

function Kit7TargetProfilesSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Hangi Profil Nasıl Görünmeli?</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Business Finland değerlendirmesi kişiden kişiye değişir. Aynı iş fikri, farklı ekip kompozisyonlarıyla çok
          farklı sonuçlar verebilir. Kendi profilini iyi tanımlaman, başvurunu nasıl çerçeveleyeceğini belirler.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {applicantProfiles.map((profile) => (
          <div
            key={profile.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${profile.tone}`}
          >
            <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold ${profile.badgeClass}`}>
              {profile.status}
            </div>
            <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{profile.title}</div>
            <p className="mt-4 text-[15px] leading-8 text-[#475467]">{profile.detail}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">İdeal Başvurucu Özellikleri</div>
        <NativeTable
          columns={[
            { key: 'criteria', label: 'Kriter', className: 'w-[18%]' },
            { key: 'strong', label: 'Güçlü', className: 'w-[28%]' },
            { key: 'acceptable', label: 'Kabul Edilebilir', className: 'w-[27%]' },
            { key: 'weak', label: 'Zayıf', className: 'w-[27%]' },
          ]}
          rows={applicantRows}
        />
      </div>

      <div className="rounded-[28px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 text-[15px] leading-8 text-[#8a4b21] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <strong className="text-[#101828]">Önemli not:</strong> Ekip gerçek olmalı. Business Finland, ücret karşılığı
        “co-founder” gibi gösterilen kişileri fark ediyor ve bu tür başvuruları reddediyor. Kurucuların gerçekten şirkette
        aktif rol üstleniyor olması gerekiyor.
      </div>
    </section>
  );
}

function Kit7ApplicationStepsSection() {
  const steps = [
    {
      step: '1',
      title: 'Enter Finland Hesabı Oluştur',
      detail:
        "enterfinland.fi adresinde hem Business Finland Eligibility Statement hem de oturma izni başvurusu bu platform üzerinden yapılıyor. Ekipteki tüm kurucuların ayrı hesap açması gerekiyor.",
      meta: ['Süre: 15 dakika', 'Ücret: Ücretsiz', 'Link: enterfinland.fi'],
      tone: 'bg-[linear-gradient(180deg,#f8fbff_0%,#f3f8ff_100%)]',
    },
    {
      step: '2',
      title: 'Eligibility Statement Başvurusu',
      detail:
        'Ekip adına tek bir kişi başvuru yapıyor. Enter Finland sorularını yanıtla, pasaport kopyaları ve CV’leri ekle. Pitch deck opsiyonel ama önerilir.',
      meta: ['Süre: 2–4 saat', 'Ücret: Ücretsiz', 'Bekleme: ~1 ay'],
      tone: 'bg-[linear-gradient(180deg,#fffaf5_0%,#fff4e8_100%)]',
    },
    {
      step: '3',
      title: 'Business Finland Kararını Bekle',
      detail:
        'Ortalama işlem süresi 1 aydır. Yoğun dönemlerde uzayabilir. Ek bilgi talep edilebilir; Enter Finland hesabını düzenli kontrol et. Olumlu karar bildirim olarak gelir.',
      meta: ['Önemli: 4 aylık süre başlar', 'Hemen Migri aşamasına geç'],
      tone: 'bg-[linear-gradient(180deg,#faf7ff_0%,#f4efff_100%)]',
    },
    {
      step: '4',
      title: 'Oturma İzni Başvurusu',
      detail:
        'Her kurucu bireysel başvurusunu yapar. Eligibility Statement eklenir, mali kanıt yüklenir ve istenirse fast-track seçilir.',
      meta: ['Ücret: €400 online / €480 kağıt', 'Süre: 14 gün fast-track veya 1–2 ay'],
      tone: 'bg-[linear-gradient(180deg,#f6fbff_0%,#eef7ff_100%)]',
    },
    {
      step: '5',
      title: 'Kimlik Doğrulama ve Biyometri',
      detail:
        'En yakın Fin büyükelçiliği veya konsolosluğunda kimlik doğrulaması ve biyometrik veri verilir. Ankara veya İstanbul için randevuyu erken al.',
      meta: ['Gerekli: Pasaport + başvuru onayı', 'Randevu: 3–4 hafta önceden önerilir'],
      tone: 'bg-[linear-gradient(180deg,#fff8fb_0%,#fff1f6_100%)]',
    },
    {
      step: '6',
      title: 'Karar ve D Vizesi',
      detail:
        'Migri kararı Enter Finland üzerinden gelir. D vizesi talep ettiysen pasaportuna işlenebilir ve kart gelmeden Finlandiya’ya giriş sağlar.',
      meta: ['D Vizesi: 100 gün', 'Kart daha sonra posta ile gelebilir'],
      tone: 'bg-[linear-gradient(180deg,#f7fcf9_0%,#edf9f1_100%)]',
    },
    {
      step: '7',
      title: "Finlandiya'ya Taşın ve Kaydol",
      detail:
        'DVV ofisine giderek yerleşim kaydını yap. Henkilötunnus aldıktan sonra banka hesabı, şirket kuruluşu ve vergi işlemleri açılır.',
      meta: ['DVV kayıt: ücretsiz', 'Henkilötunnus -> banka -> şirket -> vergi'],
      tone: 'bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)]',
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Business Finland → Enter Finland → Migri Tam Akışı
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Başvuruyu doğru sırayla yönetmek, süre kaybetmemek için kritik. En sık hata, Eligibility Statement geldikten
          sonra 4 aylık geçerlilik penceresini kaçırmak veya büyükelçilik randevusunu geç planlamak oluyor.
        </p>
      </div>

      <div className="grid gap-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
          >
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start">
              <div className="flex items-center gap-4 xl:w-[280px] xl:shrink-0">
                <div className="flex size-12 items-center justify-center rounded-[16px] bg-white text-[18px] font-semibold text-[#101828] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                  {item.step}
                </div>
                <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              </div>

              <div className="flex-1">
                <p className="text-[15px] leading-8 text-[#475467]">{item.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.meta.map((meta) => (
                    <div
                      key={meta}
                      className="rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[12px] font-medium text-[#344054]"
                    >
                      {meta}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#dbe7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">Süreç özeti takvimi</div>
        <p className="mt-3 text-[15px] leading-8 text-[#475467]">
          Eligibility Statement başvurusu → yaklaşık 1 ay bekleme → oturma izni başvurusu → 14 gün fast-track →
          büyükelçilik randevusu → D vizesi → taşınma. En hızlı senaryoda 2–3 ayda tamamlanabilir; randevu
          gecikmelerini hesaba katarsan 3–4 ay daha gerçekçi bir plandır.
        </p>
      </div>
    </section>
  );
}

function Kit7CompetitorCountriesSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Estonya, Almanya, Hollanda ve Fransa ile Kıyaslama
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Birçok girişimci “neden Finlandiya?” sorusuna tam cevap vermeden başvuruya geçiyor. Hem Business Finland’a bunu
          açıklaman gerekiyor, hem de kendi kararın için net bir tablo çizmen lazım.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {countryComparisonCards.map((country) => (
          <div
            key={country.name}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${country.tone}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-[28px]">{country.flag}</div>
              <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold ${country.badgeClass}`}>
                {country.status}
              </div>
            </div>
            <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{country.name}</div>
            <div className="mt-5 space-y-3">
              {country.points.map((point) => (
                <div key={point} className="rounded-[18px] border border-white/70 bg-white/75 px-4 py-3 text-[14px] text-[#475467]">
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Karşılaştırma Tablosu</div>
        <NativeTable
          columns={[
            { key: 'criteria', label: 'Kriter', className: 'w-[18%]' },
            { key: 'finland', label: 'Finlandiya', className: 'w-[16%]' },
            { key: 'estonia', label: 'Estonya', className: 'w-[16%]' },
            { key: 'germany', label: 'Almanya', className: 'w-[18%]' },
            { key: 'netherlands', label: 'Hollanda', className: 'w-[16%]' },
            { key: 'france', label: 'Fransa', className: 'w-[16%]' },
          ]}
          rows={countryComparisonRows}
        />
      </div>
    </section>
  );
}

function Kit7BusinessFinlandEvaluationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Nasıl Değerlendirilirsin, Kriterler ve Puanlama Mantığı
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Business Finland, ticari bir değerlendirme kuruluşu gibi davranır. Amacı Finlandiya’ya değer katacak,
          uluslararası büyüme potansiyeli olan startup’ları tespit etmektir. Değerlendirme tamamen Enter Finland
          platformundaki yazılı cevaplara dayanır; yüz yüze görüşme zorunlu değildir, ancak ilave bilgi istenebilir.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Değerlendirilen 5 Ana Kriter</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {evaluationCriteria.map((item) => (
            <div
              key={item.step}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-white/80 text-[16px] font-semibold text-[#101828] shadow-[0_6px_14px_rgba(15,23,42,0.05)]">
                  {item.step}
                </div>
                <div>
                  <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                      {item.weight}
                    </div>
                    <div className="rounded-full bg-white/80 px-3 py-1 text-[12px] text-[#475467]">{item.proof}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Değerlendirmede Sık Sorulan Sorular</div>
          <div className="mt-5 grid gap-3">
            {evaluationQuestions.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                  {index + 1}
                </div>
                <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_100%)] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="inline-flex rounded-full border border-[#cfe0ff] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4361ee]">
            Practical tip
          </div>
          <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Pitch deck eklemek zorunlu değil, ama faydalı</div>
          <div className="mt-5 rounded-[24px] border border-[#d8e4ff] bg-white px-5 py-5 text-[15px] leading-8 text-[#475467] shadow-[0_10px_22px_rgba(67,97,238,0.08)]">
            Business Finland, 5–10 slaytlık sade bir pitch deck eklenmesini öneriyor. Tasarıma değil içeriğe odaklan:
            ekip, pazar, çözüm, büyüme planı ve neden Finlandiya bölümü net olmalı.
          </div>
          <div className="mt-5 space-y-3">
            {[
              'İngilizce yaz ve kısa kal',
              'Rakamlarla konuş: pazar, büyüme, müşteri',
              'Neden Finlandiya sorusuna ayrı blok ayır',
            ].map((item) => (
              <div key={item} className="rounded-[18px] border border-[#dbe4f0] bg-white px-4 py-3 text-[14px] font-medium text-[#475467]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit7VisaStateAnalysisSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Finlandiya Startup Vizesi: 2025-2026 Durum Analizi
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Finlandiya, son iki yılda “kapıları ardına kadar açma” politikasından “nitelikli ve hızlı büyüyen girişimleri
          seçme” politikasına geçti. Bu durum, başvuru sayılarındaki düşüşe rağmen seçiciliğin ne kadar arttığını
          gösteriyor.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Genel İstatistikler ve Onay Oranları</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {[
            {
              title: 'Funnel 1: Başvuru Hacmi',
              steps: [
                { label: '2023 Başvuru Sayısı', value: '~1.200+', width: '100%', tone: 'bg-[#fbefe1]' },
                { label: '2024 Başvuru Sayısı', value: '~1.100', width: '88%', tone: 'bg-[#fde0bb]' },
                { label: '2025 İlk Çeyrek', value: '~150', width: '58%', tone: 'bg-[#e9e4fb]' },
              ],
            },
            {
              title: 'Funnel 2: Onay Oranı',
              steps: [
                { label: '2023 Onay Oranı', value: '%90+', width: '100%', tone: 'bg-[#fbefe1]' },
                { label: '2024 Onay Oranı', value: '%80', width: '82%', tone: 'bg-[#fde0bb]' },
                { label: '2025 Onay Oranı', value: '%23', width: '46%', tone: 'bg-[#dcebf7]' },
              ],
            },
          ].map((funnel) => (
            <div key={funnel.title} className="rounded-[32px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{funnel.title}</div>
              <div className="mt-6 space-y-4">
                {funnel.steps.map((step, index) => (
                  <div
                    key={step.label}
                    className={`rounded-[24px] px-5 py-5 ${step.tone}`}
                    style={{ width: step.width }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[16px] font-medium text-[#101828]">{step.label}</div>
                      <div className="text-[15px] font-medium text-[#667085]">{step.value}</div>
                    </div>
                    <div className="mt-2 text-[14px] text-[#667085]">
                      {index === 0
                        ? '100% of previous stage'
                        : `${Math.round((Number(step.value.replace(/[^0-9]/g, '')) / Number(funnel.steps[index - 1].value.replace(/[^0-9]/g, ''))) * 100) || 0}% of previous stage`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 text-[15px] leading-8 text-[#8a4b21] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <strong className="text-[#101828]">Kritik not:</strong> 2025&apos;in başından itibaren onay oranlarında dramatik
          bir düşüş gözlemlendi. Business Finland artık sadece iyi bir fikir değil, global ölçeklenebilirliği kanıtlanmış
          bir model bekliyor.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">En Sık Elenme Nedenleri</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {rejectionFlags.map((item) => (
            <div
              key={item.step}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-white/80 text-[16px] font-semibold text-[#101828] shadow-[0_6px_14px_rgba(15,23,42,0.05)]">
                  {item.step}
                </div>
                <div>
                  <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                  <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="inline-flex rounded-full border border-[#e4e7ec] bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
          Neden danışmanlık?
        </div>
        <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
          “Piyasadaki genel onay oranı %23&apos;lere gerilemişken, projeyi yeni nesil beklentilere göre hazırlıyoruz.”
        </div>
        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {[
            {
              title: 'Data-Driven Approach',
              detail:
                'Sadece fikir değil; funnel, zaman tasarrufu analizi ve ROI hesaplamalarıyla dosyayı daha ikna edici hale getiriyoruz.',
            },
            {
              title: 'Eligibility Optimization',
              detail:
                'Ekip yapısından pazar analizine kadar, reddedilme nedenlerini başvuru öncesinde elimine etmeye odaklanıyoruz.',
            },
            {
              title: 'Güncel Mevzuat',
              detail:
                '2026 başındaki yeni gelir sınırları ve güncel değerlendirme beklentileriyle dosyayı senkron tutuyoruz.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">{item.title}</div>
              <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit7FounderProfileSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          CV Hazırlama, LinkedIn Optimizasyonu ve Co-Founder Stratejisi
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Business Finland değerlendirmesinde ekip kriteri en ağırlıklı faktörlerden biri. İş fikrin vasat olsa bile
          güçlü bir ekip profili onay şansını artırıyor; tersi de geçerli. Bu bölümü başvurudan en az 4 hafta önce
          hazırlamaya başla.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {founderProfileCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{card.title}</div>
            <div className="mt-5 space-y-3">
              {card.items.map((item) => (
                <div key={item} className="rounded-[18px] border border-white/70 bg-white/75 px-4 py-3 text-[14px] leading-7 text-[#475467]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">LinkedIn Profili Optimizasyonu</div>
        <NativeTable
          columns={[
            { key: 'section', label: 'LinkedIn Bölümü', className: 'w-[28%]' },
            { key: 'should', label: 'Ne Olmalı', className: 'w-[72%]' },
          ]}
          rows={linkedInRows}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Co-Founder bulmak için kanallar</div>
          <div className="mt-5 grid gap-3">
            {[
              'Startup Sauna / Kiuas: Finlandiya bazlı hızlandırıcı ağları',
              'CoFoundersLab / FoundersList: global eşleştirme platformları',
              'LinkedIn gelişmiş arama: “Co-founder” + “Helsinki” / “Finland”',
              'Slush / Arctic15: online veya fiziksel katılım ile ağ kurma',
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

        <div className="rounded-[32px] border border-[#f2d6c7] bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="inline-flex rounded-full border border-[#f5d7b2] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b54708]">
            Asla yapma
          </div>
          <div className="mt-4 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
            Para karşılığında co-founder rolü satın alma
          </div>
          <p className="mt-4 text-[15px] leading-8 text-[#8a4b21]">
            Business Finland bu durumu tespit etmiş durumda ve bu tür başvuruları direkt reddediyor. Sahte ekip kurulumu
            başvuruyu geçersiz kılıyor. Kurucuların şirkette gerçekten aktif rol üstleniyor olması gerekiyor.
          </p>
          <div className="mt-5 space-y-3">
            {[
              'Rol gerçek olmalı',
              'LinkedIn ve CV ile tutarlı görünmeli',
              'Şirkette operasyonel katkı açık olmalı',
            ].map((item) => (
              <div key={item} className="rounded-[18px] border border-[#f4d8c5] bg-white/85 px-4 py-3 text-[14px] font-medium text-[#8a4b21]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit7ChecklistSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[1040px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Her Belge: Zorunlu mu, Nereden Alınır, Format Gereksinimleri
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Başvuru sürecinde hata en çok belge hazırlığında oluyor. Bu sayfa, hangi evrakın hangi aşamada gerektiğini,
          hangi formatta hazırlanacağını ve nereden alınacağını tek yerde toplar.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {documentChecklistGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${group.tone}`}
          >
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{group.title}</div>
            <div className="mt-5 space-y-3">
              {group.items.map((item, index) => (
                <div key={item.name} className="flex items-start gap-3 rounded-[18px] border border-white/70 bg-white/80 px-4 py-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-[#101828]">{item.name}</div>
                    <div className="mt-1 text-[14px] leading-7 text-[#475467]">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Ayrıca ihtiyaç duyabileceğin belgeler</div>
          <div className="mt-5 grid gap-3">
            {optionalDocs.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] p-4">
                <div className="text-[16px] font-semibold text-[#101828]">{item.title}</div>
                <div className="mt-2 text-[14px] leading-7 text-[#475467]">{item.detail}</div>
              </div>
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
            ].map((item) => (
              <div key={item} className="rounded-[18px] border border-[#f4d8c5] bg-white/85 px-4 py-3 text-[14px] font-medium text-[#8a4b21]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Kit7BlueprintContent({ sectionId }: { sectionId: string }) {
    if (sectionId === 's01') {
      return <Kit7OpportunityBriefSection />;
    }

  if (sectionId === 's02') {
    return <Kit7ProductSpecSection />;
  }

    if (sectionId === 's03') {
      return <Kit7TargetProfilesSection />;
    }

      if (sectionId === 's04') {
        return <Kit7ApplicationStepsNativeSection />;
      }

    if (sectionId === 's05') {
      return <Kit7CompetitorCountriesSection />;
  }

  if (sectionId === 's07') {
    return <Kit7BusinessFinlandEvaluationSection />;
  }

  if (sectionId === 's08') {
    return <Kit7VisaStateAnalysisSection />;
  }

  if (sectionId === 's14') {
    return <Kit7StartupScoringSection />;
  }

    if (sectionId === 's20') {
      return <Kit7FounderProfileSection />;
    }

    if (sectionId === 's22') {
      return <Kit7RelocationSection />;
    }

    if (sectionId === 's23') {
      return <Kit7EcosystemSection />;
    }

    if (sectionId === 's24') {
      return <Kit7FinancialProofSection />;
    }

    if (sectionId === 's25') {
      return <Kit7TaxLegalSection />;
    }

    if (sectionId === 's18') {
      return <Kit7ChecklistTodoSection />;
    }

    if (sectionId === 's19') {
      return <Kit7CompanyFormationSection />;
    }

    if (sectionId === 's26') {
      return <Kit7BusinessPlanSection />;
    }

    if (sectionId === 's28') {
      return <Kit7TimelineSection />;
    }

    if (sectionId === 's29') {
      return <Kit7SuccessStoriesSection />;
    }

    if (sectionId === 's30') {
      return <Kit7RejectionReasonsSection />;
    }
  
    return <Kit4BlueprintContent sectionId={sectionId} />;
  }
