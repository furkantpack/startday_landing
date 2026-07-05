import { blueprintSections as kit4BlueprintSections } from '@/components/kit/kit4-blueprint-sections';

const hiddenSectionNumbers = new Set(['06', '09', '10', '11', '12', '13', '15', '16', '17', '21', '27']);

const mappedSections = kit4BlueprintSections.map((section) =>
  section.id === 's01'
    ? { ...section, title: 'Neden Finlandiya' }
    : section.id === 's02'
      ? { ...section, title: 'Temel Tanımlar' }
      : section.id === 's03'
        ? { ...section, title: 'Profiller' }
        : section.id === 's04'
          ? { ...section, title: 'Başvuru Adımları' }
          : section.id === 's05'
            ? { ...section, title: 'Ülke Karşılaştırma' }
            : section.id === 's07'
              ? { ...section, title: 'Değerlendirme' }
              : section.id === 's08'
                ? { ...section, title: 'Durum Analizi' }
                : section.id === 's14'
                  ? { ...section, title: 'Startup Fikir Puanlama' }
                  : section.id === 's18'
                    ? { ...section, title: 'Checklist' }
                    : section.id === 's19'
                      ? { ...section, title: 'Şirket Kurma' }
                      : section.id === 's20'
                        ? { ...section, title: 'Ekip ve Kurucu Profili' }
                        : section.id === 's22'
                          ? { ...section, title: 'Taşınma' }
                          : section.id === 's23'
                            ? { ...section, title: 'Startup Ekosistemi' }
                            : section.id === 's24'
                              ? { ...section, title: 'Finansal Kanıt Gereksinimleri' }
                              : section.id === 's25'
                                ? { ...section, title: 'Vergi ve Hukuki Çerçeve' }
                                : section.id === 's26'
                                  ? { ...section, title: 'Business Plan' }
                                  : section.id === 's28'
                                    ? { ...section, title: 'Zaman Çizelgesi & Dönüm Noktaları' }
                                    : section,
);

export const blueprintSections = [
  ...mappedSections.filter((section) => !hiddenSectionNumbers.has(section.number)),
  { id: 's29', number: '29', title: 'Başarı Hikayeleri', group: 'Copy / Brand', icon: 'book', height: '2600px' },
  { id: 's30', number: '30', title: 'Red Gerekçeleri & Çözümleri', group: 'Copy / Brand', icon: 'book', height: '2600px' },
].sort((a, b) => Number(a.number) - Number(b.number));

export type BlueprintSection = (typeof blueprintSections)[number];
