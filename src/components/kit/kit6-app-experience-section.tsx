'use client';

import { useState } from 'react';

export function Kit6AppExperienceSection() {
  const tabs = [
    { id: 'landing', label: 'Home' },
    { id: 'login', label: 'Login' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'report', label: 'Gap Report' },
    { id: 'new-meeting', label: 'New Meeting' },
    { id: 'agents', label: 'Agents' },
    { id: 'analytics', label: 'Analytics' },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('landing');

  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#f5f3ff] px-3 py-1 text-[12px] font-semibold text-[#7C3AED]">
            Functional UI
          </div>
          <div className="inline-flex rounded-[10px] bg-[#eef4ff] px-3 py-1 text-[12px] font-semibold text-[#4361ee]">
            Interactive app flow
          </div>
        </div>
        <div className="mt-4 text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">PreMeet App Experience</div>
        <p className="mt-4 max-w-[900px] text-[16px] leading-8 text-[#475467]">
          A functional, dark-mode-native product surface inspired by the provided app concept. Switch tabs to preview
          the full PreMeet journey across acquisition, auth, dashboard usage, report review, meeting creation, agent
          health, and analytics.
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#1b2027] bg-[#0A0C0F] shadow-[0_18px_38px_rgba(13,17,23,0.24)]">
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
          <button
            onClick={() => setActiveTab('landing')}
            className="font-['Syne'] text-[18px] font-extrabold tracking-[-0.03em] text-white"
          >
            PRE<span className="text-[#7C5CFC]">MEET</span>
          </button>
          <div className="flex flex-1 flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-[10px] px-3 py-2 text-[13px] font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-[#181C22] text-white'
                    : 'text-[#8B95A3] hover:bg-[#14181d] hover:text-[#F0F2F5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="inline-flex items-center gap-3">
            <span className="rounded-full border border-[#7C5CFC] bg-[rgba(124,92,252,0.12)] px-3 py-1 text-[11px] font-semibold text-[#A78BFA]">
              Beta
            </span>
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#7C5CFC] text-[12px] font-semibold text-white">
              AK
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'landing' ? (
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#0D1117] px-5 py-10 text-center sm:px-8">
              <div className="pointer-events-none absolute left-1/2 top-[28%] h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(124,92,252,0.22)_0%,transparent_68%)]" />
              <div className="relative inline-flex items-center gap-2 rounded-full border border-[rgba(124,92,252,0.3)] bg-[rgba(124,92,252,0.12)] px-4 py-2 text-[12px] font-medium text-[#c6bbff]">
                <span className="size-2 rounded-full bg-[#10D98C]" />
                Agent-to-Agent Pre-Meeting Intelligence
              </div>
              <div className="relative mx-auto mt-6 max-w-[720px] font-['Syne'] text-[34px] font-extrabold leading-[1.02] tracking-[-0.06em] text-white sm:text-[54px]">
                Your agents meet <br />
                <span className="text-[#7C5CFC]">before you do.</span>
              </div>
              <p className="relative mx-auto mt-5 max-w-[560px] text-[15px] leading-8 text-[#8B95A3]">
                Before every meeting, each person&apos;s AI agent scans their emails, docs, and tickets. Agents compare
                notes, find the gaps, and deliver a report showing only what actually needs live discussion.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <button className="rounded-[12px] bg-[#7C5CFC] px-5 py-3 text-[14px] font-semibold text-white">
                  Start Free - 20 Gap Reports �
                </button>
                <button className="rounded-[12px] border border-white/15 px-5 py-3 text-[14px] font-medium text-[#C7CED8]">
                  See a real Gap Report
                </button>
              </div>
              <div className="relative mt-10 grid gap-3 rounded-[20px] border border-white/8 bg-[#111418] p-4 sm:grid-cols-5">
                {['Topic entered', 'Agents scan sources', 'Agents compare', 'Gap Report', 'Short meeting'].map(
                  (step, index) => (
                    <div key={step} className="rounded-[12px] border border-white/8 bg-[#181C22] px-3 py-4 text-center">
                      <div className="font-mono text-[10px] text-[#7C5CFC]">0{index + 1}</div>
                      <div className="mt-1 text-[12px] font-medium text-[#C7CED8]">{step}</div>
                    </div>
                  ),
                )}
              </div>
            </div>
          ) : null}

          {activeTab === 'login' ? (
            <div className="mx-auto max-w-[440px] rounded-[24px] border border-white/8 bg-[#111418] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
              <div className="font-['Syne'] text-[24px] font-extrabold text-white">
                PRE<span className="text-[#7C5CFC]">MEET</span>
              </div>
              <p className="mt-2 text-[14px] text-[#8B95A3]">Sign in to your workspace</p>
              <div className="mt-6 space-y-3">
                <button className="flex w-full items-center justify-center rounded-[12px] border border-white/10 bg-[#181C22] px-4 py-3 text-[14px] font-medium text-white">
                  Continue with Google
                </button>
                <button className="flex w-full items-center justify-center rounded-[12px] border border-white/10 bg-[#181C22] px-4 py-3 text-[14px] font-medium text-white">
                  Continue with Slack
                </button>
              </div>
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[12px] text-[#4E5966]">or</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-[12px] font-medium text-[#8B95A3]">Work email</div>
                  <div className="rounded-[12px] border border-white/10 bg-[#181C22] px-4 py-3 text-[14px] text-[#6B7280]">
                    you@company.com
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-[12px] font-medium text-[#8B95A3]">Password</div>
                  <div className="rounded-[12px] border border-white/10 bg-[#181C22] px-4 py-3 text-[14px] text-[#6B7280]">
                    ��������
                  </div>
                </div>
              </div>
              <button className="mt-5 w-full rounded-[12px] bg-[#7C5CFC] px-4 py-3 text-[14px] font-semibold text-white">
                Sign in �
              </button>
            </div>
          ) : null}

          {activeTab === 'dashboard' ? (
            <div className="grid gap-5 xl:grid-cols-[220px_1fr]">
              <aside className="rounded-[20px] border border-white/8 bg-[#111418] p-4">
                {['Dashboard', 'New Meeting', 'Gap Reports', 'Agents', 'Analytics', 'Settings', 'Billing'].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`mb-2 flex items-center rounded-[12px] px-3 py-3 text-[14px] font-medium ${
                        index === 0 ? 'bg-[#181C22] text-white' : 'text-[#8B95A3]'
                      }`}
                    >
                      {item}
                    </div>
                  ),
                )}
              </aside>
              <div className="space-y-5">
                <div>
                  <div className="text-[28px] font-semibold tracking-[-0.04em] text-white">Good morning, Alex</div>
                  <div className="mt-2 text-[14px] text-[#8B95A3]">You have 3 meetings today. 2 Gap Reports ready.</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ['Hours Saved - April', '47h', '? $4,700 salary value recovered', '#10D98C'],
                    ['Gap Reports Sent', '23', '^ 12 vs last month', '#7C5CFC'],
                    ['Avg Meeting Reduction', '58%', 'From 52 min � 22 min avg', '#F5A623'],
                    ['Team ROI vs PreMeet Cost', '23�', '$199/mo � $4,700 recovered', '#F0F2F5'],
                  ].map(([label, value, detail, tone]) => (
                    <div key={label} className="rounded-[20px] border border-white/8 bg-[#111418] p-5">
                      <div className="text-[12px] text-[#8B95A3]">{label}</div>
                      <div className="mt-3 text-[34px] font-semibold tracking-[-0.05em]" style={{ color: tone }}>
                        {value}
                      </div>
                      <div className="mt-2 text-[13px] leading-6 text-[#8B95A3]">{detail}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-[20px] border border-white/8 bg-[#111418] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[18px] font-semibold text-white">Today&apos;s Meetings</div>
                    <button className="rounded-[10px] bg-[#7C5CFC] px-4 py-2 text-[13px] font-semibold text-white">
                      + New Meeting
                    </button>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ['Q2 Roadmap Review', '5 attendees � Notion + Jira + Gmail', '2 Conflicts', '4 Gaps', '10:00 AM'],
                      ['Hiring Sync', '4 attendees � Notion + Slack', '1 Conflict', '2 Gaps', '1:30 PM'],
                      ['Enterprise Deal Review', '6 attendees � Gmail + Drive + Linear', 'Ready', '3 Gaps', '4:00 PM'],
                    ].map((item) => (
                      <div
                        key={item[0]}
                        className="flex flex-col gap-3 rounded-[16px] border border-white/8 bg-[#181C22] p-4 lg:flex-row lg:items-center"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="text-[15px] font-semibold text-white">{item[0]}</div>
                          <div className="mt-1 text-[12px] text-[#8B95A3]">{item[1]}</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-[rgba(255,71,87,0.1)] px-3 py-1 text-[11px] font-semibold text-[#FF4757]">
                            {item[2]}
                          </span>
                          <span className="rounded-full bg-[rgba(245,166,35,0.1)] px-3 py-1 text-[11px] font-semibold text-[#F5A623]">
                            {item[3]}
                          </span>
                        </div>
                        <div className="text-[13px] font-medium text-[#C7CED8]">{item[4]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === 'report' ? (
            <div className="mx-auto max-w-[980px] rounded-[24px] border border-white/8 bg-[#111418] p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[28px] font-semibold tracking-[-0.04em] text-white">Q2 Roadmap Review</div>
                  <div className="mt-2 text-[14px] text-[#8B95A3]">
                    Gap Report delivered 30 minutes before meeting � 5 attendees
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[rgba(245,166,35,0.1)] px-3 py-1 text-[11px] font-semibold text-[#F5A623]">
                    4 Gaps
                  </span>
                  <span className="rounded-full bg-[rgba(255,71,87,0.1)] px-3 py-1 text-[11px] font-semibold text-[#FF4757]">
                    2 Conflicts
                  </span>
                  <span className="rounded-full bg-[rgba(16,217,140,0.1)] px-3 py-1 text-[11px] font-semibold text-[#10D98C]">
                    18 min recommended
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {[
                  [
                    'Shared Context',
                    'PM and engineering agree that launch depends on the analytics integration and that staffing remains unchanged.',
                  ],
                  [
                    'Key Gap',
                    'Engineering has a blocker from the data team that product has not seen in Linear comments.',
                  ],
                  [
                    'Conflict',
                    'Sales is forecasting a Q2 target based on the older $400K number while product planning has already shifted to $350K.',
                  ],
                  [
                    'Agenda',
                    '1. Confirm revised target. 2. Assign owner for dependency blocker. 3. Decide if launch slips one sprint.',
                  ],
                ].map(([title, body], index) => (
                  <div
                    key={title}
                    className={`rounded-[18px] border p-4 ${
                      index === 0
                        ? 'border-white/8 bg-[#181C22]'
                        : index === 1
                          ? 'border-[rgba(245,166,35,0.35)] bg-[rgba(245,166,35,0.08)]'
                          : index === 2
                            ? 'border-[rgba(255,71,87,0.28)] bg-[rgba(255,71,87,0.08)]'
                            : 'border-[rgba(124,92,252,0.25)] bg-[rgba(124,92,252,0.08)]'
                    }`}
                  >
                    <div className="text-[14px] font-semibold text-white">{title}</div>
                    <div className="mt-3 text-[14px] leading-7 text-[#C7CED8]">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === 'new-meeting' ? (
            <div className="mx-auto max-w-[760px] rounded-[24px] border border-white/8 bg-[#111418] p-5 sm:p-6">
              <div className="text-[26px] font-semibold tracking-[-0.04em] text-white">Create a new meeting</div>
              <div className="mt-6 grid gap-4">
                {[
                  ['Meeting title', 'Q2 roadmap review'],
                  ['Meeting type', 'Roadmap review'],
                  ['Attendees', 'alex@premeet.io, mina@premeet.io, daniel@premeet.io'],
                  ['Scheduled at', 'Thursday � 10:00 AM'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 text-[12px] font-medium text-[#8B95A3]">{label}</div>
                    <div className="rounded-[12px] border border-white/10 bg-[#181C22] px-4 py-3 text-[14px] text-[#C7CED8]">
                      {value}
                    </div>
                  </div>
                ))}
                <div className="rounded-[16px] border border-[rgba(124,92,252,0.25)] bg-[rgba(124,92,252,0.08)] p-4 text-[14px] leading-7 text-[#C7CED8]">
                  PreMeet will trigger agent analysis 90 minutes before the meeting and deliver the Gap Report 30 minutes
                  before start time.
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-[12px] bg-[#7C5CFC] px-5 py-3 text-[14px] font-semibold text-white">
                  Create meeting
                </button>
                <button className="rounded-[12px] border border-white/10 px-5 py-3 text-[14px] font-medium text-[#C7CED8]">
                  Cancel
                </button>
              </div>
            </div>
          ) : null}

          {activeTab === 'agents' ? (
            <div className="rounded-[24px] border border-white/8 bg-[#111418] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[26px] font-semibold tracking-[-0.04em] text-white">Agent Health</div>
                  <div className="mt-2 text-[14px] text-[#8B95A3]">
                    Each employee owns their own agent and integrations.
                  </div>
                </div>
                <button className="rounded-[12px] bg-[#181C22] px-4 py-2.5 text-[13px] font-medium text-white">
                  Re-index all
                </button>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ['Aylin Demir', 'Gmail � Notion � Slack', 'Ready', 'Indexed 12 min ago'],
                  ['Daniel Ross', 'Outlook � Linear', 'Syncing', 'Indexed 34 min ago'],
                  ['Mina Park', 'Gmail � Drive � Jira', 'Ready', 'Indexed 1 hour ago'],
                ].map(([name, stack, status, time]) => (
                  <div
                    key={name}
                    className="flex flex-col gap-3 rounded-[16px] border border-white/8 bg-[#181C22] p-4 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-semibold text-white">{name}</div>
                      <div className="mt-1 text-[12px] text-[#8B95A3]">{stack}</div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        status === 'Ready'
                          ? 'bg-[rgba(16,217,140,0.1)] text-[#10D98C]'
                          : 'bg-[rgba(245,166,35,0.1)] text-[#F5A623]'
                      }`}
                    >
                      {status}
                    </span>
                    <div className="text-[12px] text-[#8B95A3]">{time}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === 'analytics' ? (
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['Hours saved', '340h'],
                  ['Salary value recovered', '$34K'],
                  ['Avg meeting reduction', '60%'],
                  ['Meetings skipped', '18'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[20px] border border-white/8 bg-[#111418] p-5">
                    <div className="text-[12px] text-[#8B95A3]">{label}</div>
                    <div className="mt-3 text-[34px] font-semibold tracking-[-0.05em] text-white">{value}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-[20px] border border-white/8 bg-[#111418] p-5">
                <div className="text-[18px] font-semibold text-white">Monthly savings trend</div>
                <div className="mt-5 space-y-3">
                  {[
                    ['Jan', '12%'],
                    ['Feb', '28%'],
                    ['Mar', '54%'],
                    ['Apr', '78%'],
                  ].map(([month, width]) => (
                    <div key={month} className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-3">
                      <div className="text-[13px] text-[#8B95A3]">{month}</div>
                      <div className="h-8 rounded-full bg-[#181C22]">
                        <div
                          className="h-8 rounded-full bg-[linear-gradient(90deg,#7C5CFC_0%,#9f8eff_100%)]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
