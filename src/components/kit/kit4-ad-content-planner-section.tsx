'use client';

import { useState } from 'react';

type SignalTone = 'green' | 'amber' | 'red';
type ContentType =
  | 'Educational'
  | 'Product Demo'
  | 'Customer Story'
  | 'Thought Leadership'
  | 'Engagement'
  | 'Repurpose'
  | 'Launch'
  | 'Partnership';

type Signal = {
  id: string;
  label: string;
  action: string;
  color: SignalTone;
  threshold: (mrr: number, growth: number) => boolean;
};

type ContentItem = {
  type: ContentType;
  topic: string;
  hook: string;
};

const countries = ['USA', 'UK', 'Canada', 'Germany', 'Israel', 'Australia'] as const;

const barColors = ['#0D9488', '#6366F1', '#10B981', '#F59E0B', '#EC4899', '#3B82F6'];

const typeColors: Record<ContentType, { bg: string; color: string }> = {
  Educational: { bg: '#E1F5EE', color: '#0F6E56' },
  'Product Demo': { bg: '#EEF2FF', color: '#4338CA' },
  'Customer Story': { bg: '#FEF3C7', color: '#92400E' },
  'Thought Leadership': { bg: '#FCE7F3', color: '#9D174D' },
  Engagement: { bg: '#FEE2E2', color: '#991B1B' },
  Repurpose: { bg: '#F1F5F9', color: '#475569' },
  Launch: { bg: '#D1FAE5', color: '#065F46' },
  Partnership: { bg: '#EDE9FE', color: '#5B21B6' },
};

const signals: Signal[] = [
  {
    id: 'mrr_1k',
    threshold: (mrr) => mrr >= 1000,
    label: 'MRR > $1,000 reached',
    action: 'Launch LinkedIn + Google brand campaigns in USA.',
    color: 'green',
  },
  {
    id: 'mrr_5k',
    threshold: (mrr) => mrr >= 5000,
    label: 'MRR > $5,000 — product-market fit signals',
    action: 'Expand to UK + Canada. Double USA spend.',
    color: 'green',
  },
  {
    id: 'mrr_10k',
    threshold: (mrr) => mrr >= 10000,
    label: 'MRR > $10,000 — scaling phase',
    action: 'Add Germany + Israel. Test retargeting.',
    color: 'green',
  },
  {
    id: 'mrr_25k',
    threshold: (mrr) => mrr >= 25000,
    label: 'MRR > $25,000 — growth mode',
    action: 'Add Australia. Launch agency-targeted campaigns.',
    color: 'green',
  },
  {
    id: 'growth_high',
    threshold: (_mrr, growth) => growth >= 20,
    label: 'Growth rate >= 20% — momentum signal',
    action: 'Increase spend by 15%. Double down on the winning channel.',
    color: 'green',
  },
  {
    id: 'growth_low',
    threshold: (mrr, growth) => growth < 8 && mrr > 0,
    label: 'Growth slowing (< 8%) — warning',
    action: 'Pause paid. Invest in content + SEO. Audit activation.',
    color: 'red',
  },
  {
    id: 'pre_launch',
    threshold: (mrr) => mrr === 0,
    label: 'Pre-launch — no MRR yet',
    action: 'Zero paid ads. Focus on content, IH, PH waitlist.',
    color: 'amber',
  },
  {
    id: 'seasonal',
    threshold: (mrr) => mrr >= 3000,
    label: 'B2B budget flush (Q4) — seasonal signal',
    action: 'Increase spend 25% in Q4. Lead with case study messaging.',
    color: 'amber',
  },
];

const contentPlans: ContentItem[][] = [
  [
    {
      type: 'Educational',
      topic: 'Why case studies take 3 weeks',
      hook: 'Thread: "I asked 50 marketers how long their case study process takes. The answers shocked me."',
    },
    {
      type: 'Engagement',
      topic: 'Poll: how many case studies do you have?',
      hook: 'Poll: "How many verified case studies does your company have published?" (0 / 1-5 / 5-20 / 20+)',
    },
    {
      type: 'Educational',
      topic: 'The cost of missing customer stories',
      hook: '"Your competitor just closed a deal because they had 3 case studies in that vertical. You had 0."',
    },
    {
      type: 'Repurpose',
      topic: 'Repurpose best thread as newsletter',
      hook: 'Weekly founder note: "The evidence gap killing B2B deals"',
    },
    {
      type: 'Product Demo',
      topic: 'Show the 3-min story generation',
      hook: '"I connected Stripe and generated a verified case study in 3 minutes. Here is the full screen recording."',
    },
    {
      type: 'Engagement',
      topic: 'Ask for beta testers',
      hook: '"Looking for 10 B2B SaaS founders with 20+ customers to beta test ProveKit. DM me."',
    },
    {
      type: 'Repurpose',
      topic: 'Weekend: reshare top post',
      hook: 'Boost the top performing post from the week.',
    },
  ],
  [
    {
      type: 'Customer Story',
      topic: 'First beta user result',
      hook: '"[Customer] had 200 customers and 2 case studies. They now have 18. Here is how."',
    },
    {
      type: 'Educational',
      topic: 'Verified vs unverified testimonials',
      hook: '"Your buyer can tell the difference between a real stat and an AI-generated testimonial. Here is the proof."',
    },
    {
      type: 'Product Demo',
      topic: 'Approval flow walkthrough',
      hook: '"The part nobody expects: 90% of customers approve in under 24 hours. Here is why."',
    },
    {
      type: 'Thought Leadership',
      topic: 'B2B buying behavior 2025',
      hook: '"97% of B2B buyers trust customer evidence more than any other content type. But only 3% of SaaS companies produce it consistently."',
    },
    {
      type: 'Educational',
      topic: 'How to pick your first story',
      hook: '"Not your biggest customer. Not your longest relationship. This is the customer you should feature first."',
    },
    {
      type: 'Engagement',
      topic: 'Community question',
      hook: '"What is your biggest blocker to producing more case studies? Reply and I will give you a template."',
    },
    {
      type: 'Repurpose',
      topic: 'Compile week into carousel',
      hook: 'LinkedIn carousel: "5 things we learned running 50 case studies in one month"',
    },
  ],
  [
    {
      type: 'Thought Leadership',
      topic: 'Why AI-generated copy fails buyers',
      hook: '"Buyers have learned to smell AI copy. Here is what they trust instead — and why data verification changes everything."',
    },
    {
      type: 'Product Demo',
      topic: 'Live story generation on stream',
      hook: '"Generating a real case study live on LinkedIn. Come watch."',
    },
    {
      type: 'Customer Story',
      topic: 'Agency using ProveKit for clients',
      hook: '"This agency charges $2,000 per case study. ProveKit produces each one in 3 minutes. Their margin is now 98%."',
    },
    {
      type: 'Educational',
      topic: 'The 5-step manual process (and what it costs)',
      hook: '"Customer interview: 3 hours. Writing draft: 5 hours. Review cycles: 24 hours elapsed. Design and publish: 4 hours. Total: $3,040."',
    },
    {
      type: 'Partnership',
      topic: 'Stripe integration announcement',
      hook: '"ProveKit now reads directly from Stripe — zero data entry. Connect in 2 minutes."',
    },
    {
      type: 'Engagement',
      topic: 'Ask for referrals',
      hook: '"If ProveKit has saved your team time, we would love an intro to one other founder who could use it. We will give you $20/mo credit for every signup."',
    },
    {
      type: 'Repurpose',
      topic: 'Best customer story as PDF',
      hook: 'Turn the top case study into a shareable PDF asset.',
    },
  ],
  [
    {
      type: 'Thought Leadership',
      topic: 'The future of social proof',
      hook: '"In 2026, every marketing claim will need a data source. Unverified testimonials will carry the same trust as an anonymous review."',
    },
    {
      type: 'Product Demo',
      topic: 'Show embeddable widget',
      hook: '"Your website now shows rotating verified stats from real customers — with a Verified badge that links to the source data."',
    },
    {
      type: 'Customer Story',
      topic: 'Feature a specific vertical win',
      hook: '"How a FinTech company used 1 ProveKit story to close 3 enterprise deals in Q4."',
    },
    {
      type: 'Educational',
      topic: 'SEO case: why verified stories rank',
      hook: '"AI search prioritizes specific, verifiable proof points. Generic testimonials get filtered out. Here is how to build content that ranks in 2025."',
    },
    {
      type: 'Educational',
      topic: 'Pricing ProveKit vs agency cost',
      hook: '"$99/month. Or $2,500/story with an agency. Math is easy."',
    },
    {
      type: 'Engagement',
      topic: 'Feature request thread',
      hook: '"What would make ProveKit 10x more useful for your team? Top answer gets built first."',
    },
    {
      type: 'Repurpose',
      topic: 'Compile month highlights',
      hook: 'Month in review: metrics, customer stories, product updates.',
    },
  ],
];

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const stages = ['Pre-launch (waitlist)', 'Post-launch (0-$5K MRR)', 'Growth ($5K-$25K MRR)', 'Scale ($25K+ MRR)'];

function getStageLabel(mrr: number) {
  if (mrr === 0) return 'Pre-launch';
  if (mrr < 5000) return 'Early';
  if (mrr < 25000) return 'Growth';
  return 'Scale';
}

function getCountryAllocation(mrr: number) {
  if (mrr < 1000) return { USA: 100, UK: 0, Canada: 0, Germany: 0, Israel: 0, Australia: 0 };
  if (mrr < 5000) return { USA: 80, UK: 10, Canada: 10, Germany: 0, Israel: 0, Australia: 0 };
  if (mrr < 10000) return { USA: 55, UK: 20, Canada: 15, Germany: 5, Israel: 5, Australia: 0 };
  if (mrr < 25000) return { USA: 40, UK: 20, Canada: 15, Germany: 12, Israel: 8, Australia: 5 };
  return { USA: 35, UK: 18, Canada: 13, Germany: 14, Israel: 10, Australia: 10 };
}

function getDayContent(day: number, stage: number) {
  const weekPlan = contentPlans[stage][Math.floor((day - 1) / 7) % contentPlans[stage].length];
  return weekPlan;
}

function getChannelText(type: ContentType) {
  if (type === 'Product Demo') return 'LinkedIn + Twitter/X + Loom';
  if (type === 'Customer Story') return 'LinkedIn + website blog';
  if (type === 'Engagement') return 'Twitter/X + LinkedIn';
  return 'LinkedIn + newsletter';
}

function getFormatText(type: ContentType) {
  if (type === 'Product Demo') return 'Screen recording + short caption';
  return 'Text post (200-400 chars) + optional image';
}

export function Kit4AdContentPlannerSection({
  mode = 'full',
}: {
  mode?: 'full' | 'content-only';
}) {
  const [activeTab, setActiveTab] = useState<'spend' | 'content'>(mode === 'content-only' ? 'content' : 'spend');
  const [mrr, setMrr] = useState(5000);
  const [growth, setGrowth] = useState(15);
  const [budgetPct, setBudgetPct] = useState(20);
  const [stage, setStage] = useState(1);
  const [month, setMonth] = useState(5);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const budget = Math.round((mrr * budgetPct) / 100);
  const stageLabel = getStageLabel(mrr);
  const activeSignals = signals.filter((item) => item.threshold(mrr, growth));
  const allocations = getCountryAllocation(mrr);
  const primaryFocus = Object.entries(allocations).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'USA';
  const maxPct = Math.max(...Object.values(allocations));
  const firstDay = new Date(2025, month, 1).getDay();
  const daysInMonth = monthDays[month];
  const selectedContent = selectedDay ? getDayContent(selectedDay, stage) : null;

  return (
    <section className="mt-10 space-y-8">
      {mode === 'full' ? (
        <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="grid gap-3 lg:grid-cols-2">
            <button
              type="button"
              onClick={() => setActiveTab('spend')}
              className={`rounded-[24px] px-5 py-4 text-left transition ${
                activeTab === 'spend'
                  ? 'bg-[linear-gradient(135deg,#0f172a_0%,#16325c_100%)] text-white'
                  : 'bg-[#f7f9fc] text-[#667085]'
              }`}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em]">Planner</div>
              <div className="mt-2 text-[20px] font-semibold tracking-[-0.025em]">Ad Spend Planner</div>
              <p className={`mt-2 text-[14px] leading-7 ${activeTab === 'spend' ? 'text-white/75' : 'text-[#667085]'}`}>
                Model budget allocation, market focus, and growth triggers by MRR stage.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('content')}
              className={`rounded-[24px] px-5 py-4 text-left transition ${
                activeTab === 'content'
                  ? 'bg-[linear-gradient(135deg,#0f172a_0%,#16325c_100%)] text-white'
                  : 'bg-[#f7f9fc] text-[#667085]'
              }`}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em]">Calendar</div>
              <div className="mt-2 text-[20px] font-semibold tracking-[-0.025em]">Content Planner</div>
              <p className={`mt-2 text-[14px] leading-7 ${activeTab === 'content' ? 'text-white/75' : 'text-[#667085]'}`}>
                Build a monthly posting rhythm with content types, hooks, and channel guidance.
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-[32px] border border-[#e6eaf2] bg-[linear-gradient(135deg,#0f172a_0%,#16325c_100%)] p-8 text-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">Calendar</div>
          <div className="mt-3 text-[30px] font-semibold tracking-[-0.025em]">Content Planner</div>
          <p className="mt-3 max-w-3xl text-[15px] leading-8 text-white/75">
            Build a monthly posting rhythm with content types, hooks, and channel guidance, using the same operating
            system from the planner UI.
          </p>
        </div>
      )}

      {activeTab === 'spend' ? (
        <div className="space-y-8">
          <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="grid gap-6 xl:grid-cols-3">
              {[
                {
                  label: 'Current MRR ($)',
                  value: `$${mrr.toLocaleString()}`,
                  min: 0,
                  max: 100000,
                  step: 500,
                  state: mrr,
                  setState: setMrr,
                },
                {
                  label: 'Monthly growth rate (%)',
                  value: `${growth}%`,
                  min: 0,
                  max: 50,
                  step: 1,
                  state: growth,
                  setState: setGrowth,
                },
                {
                  label: 'Ad budget (% of MRR)',
                  value: `${budgetPct}%`,
                  min: 5,
                  max: 40,
                  step: 1,
                  state: budgetPct,
                  setState: setBudgetPct,
                },
              ].map((item) => (
                <label key={item.label} className="block rounded-[24px] bg-[#f8fafc] p-5">
                  <div className="text-[13px] font-medium text-[#667085]">{item.label}</div>
                  <div className="mt-2 text-[28px] font-semibold tracking-[-0.025em] text-[#101828]">{item.value}</div>
                  <input
                    className="mt-5 h-2 w-full cursor-pointer accent-[#0D9488]"
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={item.state}
                    onChange={(event) => item.setState(Number(event.target.value))}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-4">
            {[
              { label: 'Total ad budget', value: `$${budget.toLocaleString()}`, tone: 'from-[#effcf6] to-[#e0f2fe]' },
              { label: 'Stage', value: stageLabel, tone: 'from-[#f5f3ff] to-[#eef4ff]' },
              { label: 'Primary focus', value: primaryFocus, tone: 'from-[#fff7ed] to-[#fef3c7]' },
              { label: 'Active signals', value: String(activeSignals.length), tone: 'from-[#eef2ff] to-[#fce7f3]' },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-[28px] border border-[#e6eaf2] bg-gradient-to-br ${item.tone} p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]`}
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#667085]">{item.label}</div>
                <div className="mt-3 text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#667085]">Active Signals</div>
              <div className="mt-5 space-y-3">
                {activeSignals.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-[20px] border border-[#e6eaf2] bg-[#fcfdff] px-5 py-4"
                  >
                    <div
                      className={`mt-1 size-2.5 rounded-full ${
                        item.color === 'green'
                          ? 'bg-[#10b981]'
                          : item.color === 'amber'
                          ? 'bg-[#f59e0b]'
                          : 'bg-[#ef4444]'
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-medium text-[#101828]">{item.label}</div>
                      <div className="mt-1 text-[14px] leading-7 text-[#667085]">{item.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                Budget Allocation by Country
              </div>
              <div className="mt-5 space-y-4">
                {countries.map((country, index) => {
                  const pct = allocations[country];
                  if (pct === 0) return null;
                  const amount = Math.round((budget * pct) / 100);
                  return (
                    <div key={country}>
                      <div className="flex items-center justify-between text-[14px]">
                        <div className="font-medium text-[#101828]">
                          {country} <span className="text-[#667085]">{pct}%</span>
                        </div>
                        <div className="text-[#667085]">${amount.toLocaleString()}/mo</div>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f1f5f9]">
                        <div
                          className="h-full rounded-full transition-[width]"
                          style={{
                            width: `${Math.round((pct / maxPct) * 100)}%`,
                            backgroundColor: barColors[index],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="rounded-[20px] bg-[#f8fafc] p-5">
                <div className="text-[13px] font-medium text-[#667085]">Stage</div>
                <select
                  value={stage}
                  onChange={(event) => {
                    setStage(Number(event.target.value));
                    setSelectedDay(null);
                  }}
                  className="mt-3 w-full rounded-[14px] border border-[#d0d5dd] bg-white px-4 py-3 text-[14px] text-[#101828] outline-none"
                >
                  {stages.map((item, index) => (
                    <option key={item} value={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-[20px] bg-[#f8fafc] p-5">
                <div className="text-[13px] font-medium text-[#667085]">Month start</div>
                <select
                  value={month}
                  onChange={(event) => {
                    setMonth(Number(event.target.value));
                    setSelectedDay(null);
                  }}
                  className="mt-3 w-full rounded-[14px] border border-[#d0d5dd] bg-white px-4 py-3 text-[14px] text-[#101828] outline-none"
                >
                  {monthNames.map((item, index) => (
                    <option key={item} value={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-7 gap-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="rounded-[12px] px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98a2b3]"
                >
                  {day}
                </div>
              ))}

              {Array.from({ length: firstDay }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const item = getDayContent(day, stage);
                const colors = typeColors[item.type];
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`min-h-[92px] rounded-[18px] border p-3 text-left transition ${
                      selectedDay === day
                        ? 'border-[#0D9488] bg-[#f0fdfa] shadow-[0_0_0_1px_rgba(13,148,136,0.14)]'
                        : 'border-[#e6eaf2] bg-white hover:border-[#cfd8e3]'
                    }`}
                  >
                    <div className="text-[11px] text-[#98a2b3]">{day}</div>
                    <div
                      className="mt-2 inline-flex rounded-full px-2 py-1 text-[10px] font-semibold"
                      style={{ backgroundColor: colors.bg, color: colors.color }}
                    >
                      {item.type}
                    </div>
                    <div className="mt-2 line-clamp-2 text-[11px] leading-5 text-[#475467]">{item.topic}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedContent ? (
            <div className="rounded-[32px] border border-[#dce7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#f6faff_100%)] p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-[14px] font-semibold text-[#101828]">
                  {monthNames[month]} {selectedDay}
                </div>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{
                    backgroundColor: typeColors[selectedContent.type].bg,
                    color: typeColors[selectedContent.type].color,
                  }}
                >
                  {selectedContent.type}
                </span>
              </div>

              <div className="mt-5 text-[28px] font-semibold tracking-[-0.025em] text-[#101828]">{selectedContent.topic}</div>
              <div className="mt-5 rounded-[24px] border-l-4 border-[#0D9488] bg-white px-5 py-4 text-[15px] leading-8 text-[#344054]">
                {selectedContent.hook}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[20px] bg-white p-5">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#98a2b3]">Channels</div>
                  <div className="mt-3 text-[15px] leading-7 text-[#475467]">{getChannelText(selectedContent.type)}</div>
                </div>
                <div className="rounded-[20px] bg-white p-5">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#98a2b3]">Format</div>
                  <div className="mt-3 text-[15px] leading-7 text-[#475467]">{getFormatText(selectedContent.type)}</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
