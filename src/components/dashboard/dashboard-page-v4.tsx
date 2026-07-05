'use client';

import {
  RiArrowRightLine,
  RiBankCardLine,
  RiCustomerService2Line,
  RiExchangeDollarLine,
  RiFileLine,
  RiHistoryLine,
  RiLayoutGridLine,
  RiMenuLine,
  RiNotification3Line,
  RiSearchLine,
  RiSettings2Line,
  RiExpandUpDownLine,
  RiPassportLine,
  RiHomeOfficeLine,
} from '@remixicon/react';

import { cn } from '@/lib/utils';

const visaNavMain = [
  { label: 'Dashboard', icon: RiLayoutGridLine, active: true, enabled: true },
  { label: 'Başvuru Adımları', icon: RiPassportLine, enabled: true },
  { label: 'Belge Checklist', icon: RiFileLine, enabled: true },
  { label: 'Finansal Kanıt', icon: RiBankCardLine, enabled: true },
  { label: 'Şirket Kurma', icon: RiHomeOfficeLine, enabled: true },
  { label: 'Taşınma', icon: RiHistoryLine, enabled: false },
];

const visaNavOther = [
  { label: 'Ayarlar', icon: RiSettings2Line, enabled: true },
  { label: 'Destek', icon: RiCustomerService2Line, enabled: false },
];

const tasks = [
  {
    title: 'Business Finland eligibility statement taslağını tamamla',
    type: 'Başvuru',
    progress: 78,
    time: '20 dk kaldı',
    due: 'Due Apr 8',
    priority: 'Kritik',
  },
  {
    title: 'Kurucu CV ve LinkedIn profillerini İngilizce hizala',
    type: 'Profil',
    progress: 52,
    time: '35 dk kaldı',
    due: 'Due Apr 9',
    priority: 'Yüksek',
  },
  {
    title: 'Son 3 aylık banka ekstresi çeviri planını hazırla',
    type: 'Finans',
    progress: 18,
    time: '15 dk',
    due: 'Due Apr 12',
    priority: 'Zorunlu',
  },
  {
    title: 'Pitch deck içinde neden Finlandiya bölümünü güçlendir',
    type: 'Deck',
    progress: 64,
    time: '12 dk kaldı',
    due: 'Due Apr 14',
    priority: 'Yüksek',
  },
  {
    title: 'Büyükelçilik randevusu için tarih aralığını netleştir',
    type: 'Takvim',
    progress: 34,
    time: '25 dk',
    due: 'Due Apr 18',
    priority: 'Zorunlu',
  },
];

const recentCards = [
  {
    title: 'Eligibility statement soru seti ve cevap iskeleti',
    subtitle: 'Başvuru dosyası',
    tone: 'from-[#dbeafe] via-[#eef6ff] to-[#d7f0ff]',
  },
  {
    title: 'Kurucu profili: teknik + ticari ekip dengesi',
    subtitle: 'Profil analizi',
    tone: 'from-[#ffe5d0] via-[#ffd1b5] to-[#f3e8ff]',
  },
  {
    title: 'Finansal kanıt: minimum ve güçlü senaryo',
    subtitle: 'Finans planı',
    tone: 'from-[#dcfce7] via-[#ecfdf3] to-[#dbeafe]',
  },
  {
    title: 'OY kurma, Y-tunnus ve banka hesabı akışı',
    subtitle: 'Şirket kurma',
    tone: 'from-[#fee2e2] via-[#fff1f2] to-[#fff7ed]',
  },
  {
    title: 'Helsinki taşınma bütçesi ve bölge rehberi',
    subtitle: 'Taşınma planı',
    tone: 'from-[#fef3c7] via-[#fde68a] to-[#fed7aa]',
  },
];

const featuredCards = [
  {
    title: 'Finlandiya Startup Visa başvurunu baştan sona takip et',
    tone: 'from-[#2563eb] via-[#3b82f6] to-[#93c5fd]',
  },
  {
    title: 'Belgeler, finans ve şirket kurma adımlarını tek panelde gör',
    tone: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-20 rounded-full bg-[#ece8df]">
      <div className="h-2 rounded-full bg-[#22c55e]" style={{ width: `${value}%` }} />
    </div>
  );
}

function ThumbCard({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: string;
}) {
  return (
    <div className="group min-w-[220px] max-w-[220px]">
      <div
        className={cn(
          'relative h-[126px] overflow-hidden rounded-[24px] bg-gradient-to-br p-3 shadow-[0_12px_24px_rgba(15,23,42,0.08)]',
          tone,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium text-[var(--text-strong-950)]">
          Guide
        </div>
      </div>
      <div className="mt-3">
        <div className="line-clamp-2 text-[15px] font-semibold text-[var(--text-strong-950)]">{title}</div>
        <div className="mt-1 text-[13px] text-[var(--text-soft-400)]">{subtitle}</div>
      </div>
    </div>
  );
}

function FeaturedCard({ title, tone }: { title: string; tone: string }) {
  return (
    <div
      className={cn(
        'relative min-h-[180px] overflow-hidden rounded-[30px] bg-gradient-to-br p-7 shadow-[0_18px_36px_rgba(15,23,42,0.08)]',
        tone,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_24%)]" />
      <div className="relative max-w-[14ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
        {title}
      </div>
    </div>
  );
}

function SidebarNavItem({
  label,
  icon: Icon,
  active,
  enabled = true,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  enabled?: boolean;
}) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left transition',
        active ? 'bg-[#f1f4fa] text-[#344054]' : enabled ? 'text-[#344054] hover:bg-[#f8fafc]' : 'cursor-default text-[#b1b8c7]',
      )}
    >
      <span className="flex items-center gap-3">
        <Icon
          className={cn(
            'size-[18px]',
            active ? 'text-[#4361ee]' : enabled ? 'text-[#667085]' : 'text-[#b1b8c7]',
          )}
        />
        <span className="text-[15px] font-medium">{label}</span>
      </span>
      {active && <RiArrowRightLine className="size-4 text-[#667085]" />}
    </button>
  );
}

export function DashboardPageV4() {
  return (
    <main className="min-h-screen bg-white p-0">
      <div className="mx-auto flex min-h-screen max-w-[1480px] bg-white">
        <aside className="hidden w-[224px] shrink-0 border-r border-[#e6eaf2] bg-white px-4 py-6 lg:flex lg:flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-[42px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)] shadow-[0_10px_18px_rgba(67,97,238,0.18)]">
                <div className="relative h-5 w-5 overflow-hidden rounded-[4px] bg-white">
                  <span className="absolute inset-y-0 left-[35%] w-[18%] bg-[#4361ee]" />
                  <span className="absolute inset-x-0 top-[40%] h-[18%] bg-[#4361ee]" />
                </div>
              </div>
              <div>
                <div className="text-[16px] font-medium tracking-[-0.04em] text-[#101828]">Finland Visa</div>
                <div className="mt-0.5 text-[12px] text-[#667085]">Startup dashboard</div>
              </div>
            </div>
            <button className="flex size-9 items-center justify-center rounded-[14px] border border-[#e4e7ec] bg-white text-[#667085] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
              <RiExpandUpDownLine className="size-4" />
            </button>
          </div>

          <div className="mt-6 border-t border-[#eaecf0]" />

          <div className="mt-7">
            <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">Main</div>
            <div className="space-y-1">
              {visaNavMain.map((item) => (
                <SidebarNavItem key={item.label} label={item.label} icon={item.icon} active={item.active} enabled={item.enabled} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 px-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#98a2b3]">Others</div>
            <div className="space-y-1">
              {visaNavOther.map((item) => (
                <SidebarNavItem key={item.label} label={item.label} icon={item.icon} enabled={item.enabled} />
              ))}
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 bg-white">
          <div className="border-b border-[#e6eaf2] px-5 py-4 lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-[40px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#5b7cff_0%,#4361ee_100%)] shadow-[0_10px_18px_rgba(67,97,238,0.18)]">
                  <div className="relative h-5 w-5 overflow-hidden rounded-[4px] bg-white">
                    <span className="absolute inset-y-0 left-[35%] w-[18%] bg-[#4361ee]" />
                    <span className="absolute inset-x-0 top-[40%] h-[18%] bg-[#4361ee]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <button className="flex size-11 items-center justify-center text-[#667085]">
                  <RiSearchLine className="size-5" />
                </button>
                <div className="mx-1 h-8 w-px bg-[#e6eaf2]" />
                <button className="relative flex size-11 items-center justify-center text-[#667085]">
                  <RiNotification3Line className="size-5" />
                  <span className="absolute right-3.5 top-3 size-2 rounded-full bg-[#f04438]" />
                </button>
                <div className="mx-1 h-8 w-px bg-[#e6eaf2]" />
                <button className="flex size-11 items-center justify-center text-[#667085]">
                  <RiMenuLine className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-[#e6eaf2] px-5 py-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#dbeafe_0%,#bfdbfe_100%)] ring-1 ring-inset ring-[#dbe2ea]">
                <RiPassportLine className="size-5 text-[#1d4ed8]" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#101828]">Founder workspace</div>
                <div className="mt-0.5 text-[13px] text-[#667085]">Finlandiya başvuru kontrol paneli</div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-between border-b border-[#f0ebe3] px-5 py-4 lg:flex lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-[linear-gradient(180deg,#dbeafe_0%,#bfdbfe_100%)]">
                <RiPassportLine className="size-4.5 text-[#1d4ed8]" />
              </div>
              <div className="text-[14px] font-medium text-[var(--text-strong-950)]">Founder workspace</div>
            </div>
            <div className="flex items-center gap-4 text-[13px] text-[var(--text-soft-400)]">
              <span>Need help? View visa resources</span>
              <div className="relative">
                <RiNotification3Line className="size-5 text-[var(--text-soft-400)]" />
                <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#f04438]" />
              </div>
            </div>
          </div>

          <div className="space-y-10 px-5 py-6 lg:px-8 lg:py-7">
            <div>
              <h1 className="text-[2.1rem] font-semibold tracking-[-0.06em] text-[var(--text-strong-950)]">
                Finland Startup Visa dashboard
              </h1>
              <p className="mt-1 text-[1.15rem] text-[var(--text-soft-400)]">You have 5 active preparation steps this week</p>
            </div>

            <div className="overflow-hidden rounded-[26px] border border-[#eee7dc] bg-[#fffdfa]">
              <div className="grid grid-cols-[minmax(0,2fr)_112px_150px_130px_140px_32px] gap-4 border-b border-[#eee7dc] px-6 py-3 text-[12px] font-medium text-[var(--text-soft-400)]">
                <div>Görev</div>
                <div>Tür</div>
                <div>İlerleme</div>
                <div>Tarih</div>
                <div>Öncelik</div>
                <div />
              </div>
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="grid grid-cols-[minmax(0,2fr)_112px_150px_130px_140px_32px] items-center gap-4 border-b border-[#f2ede6] px-6 py-4 last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[15px] font-semibold text-[var(--text-strong-950)]">{task.title}</div>
                    <div className="mt-1 truncate text-[13px] text-[var(--text-soft-400)]">
                      Finlandiya startup izni sürecindeki kritik hazırlık adımlarından biri.
                    </div>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">{task.type}</div>
                  <div className="flex items-center gap-3">
                    <ProgressBar value={task.progress} />
                    <span className="text-[13px] text-[var(--text-soft-400)]">{task.time}</span>
                  </div>
                  <div className="text-[13px] text-[var(--text-sub-600)]">{task.due}</div>
                  <div className="text-[13px] font-medium text-[var(--text-sub-600)]">{task.priority}</div>
                  <div className="text-center text-[var(--text-soft-400)]">-</div>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-5 text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">
                Son eklenenler <span className="text-[var(--text-soft-400)]">14</span>
              </div>
              <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-5">
                  {recentCards.map((card) => (
                    <ThumbCard key={card.title} title={card.title} subtitle={card.subtitle} tone={card.tone} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--text-strong-950)]">Öne çıkanlar</div>
              <div className="grid gap-5 lg:grid-cols-2">
                {featuredCards.map((card) => (
                  <FeaturedCard key={card.title} title={card.title} tone={card.tone} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
