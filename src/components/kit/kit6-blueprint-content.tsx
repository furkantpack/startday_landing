import { Kit4BlueprintContent } from '@/components/kit/kit4-blueprint-content';
import { Kit6AppExperienceSection } from '@/components/kit/kit6-app-experience-section';

type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

type TableRow = Record<string, string>;

const preMeetStats = [
  {
    value: '$375B',
    label: 'Lost to unproductive meetings annually (US)',
    note: 'Meetings already behave like a hidden operating expense line.',
    className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    value: '71%',
    label: 'Senior managers say meetings are unproductive',
    note: 'The problem is acknowledged at the leadership layer, not just by ICs.',
    className: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    value: '50%',
    label: 'Of meeting time spent on irrelevant topics',
    note: 'Most meetings are still used for synchronization instead of judgment.',
    className: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]',
  },
  {
    value: '60%',
    label: 'Shorter meetings with PreMeet',
    note: 'The product removes the pre-alignment burden before humans ever join.',
    className: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
  {
    value: '$29K',
    label: 'Meeting cost per employee per year',
    note: 'Meeting drag compounds quietly into a real headcount-equivalent cost.',
    className: 'bg-[linear-gradient(135deg,#eef4ff_0%,#fdf2ff_100%)]',
  },
  {
    value: '3×',
    label: 'Meeting volume increase since 2020',
    note: 'The scale of the problem keeps growing faster than preparation tooling.',
    className: 'bg-[linear-gradient(135deg,#ecfbf4_0%,#e6f3ff_100%)]',
  },
];

const preMeetMarketSignals = [
  'Meeting volume has tripled since 2020 (Microsoft, 2023), so the problem is growing faster than any solution addressing it.',
  '$25 million is lost per day by U.S. companies to poorly planned or unnecessary meetings (State of Meetings Report, 2025).',
  '71% of managers consider meetings unproductive, while only 17% of senior leaders say meetings are a productive use of time (HBR).',
  '63% of meetings have no predefined agenda and 37% have no agenda at all (Atlassian), meaning preparation is structurally broken.',
  'AI agent economy is projected to grow from $3.66B (2023) to $139B by 2033, making multi-agent coordination infrastructure production-ready.',
  'Notion AI, GitHub Copilot, and Cursor normalized AI working on a user’s behalf; PreMeet extends this to inter-person coordination.',
  'Outcome-based pricing is becoming dominant in B2B AI across 2025–2026, so pay-per-saved-hour is now a credible buying motion.',
  'Remote and hybrid work means 86% of meetings include at least one remote participant, making async-first prep expected rather than optional.',
  'The average employee spends 1 hour 9 minutes preparing for each meeting, which PreMeet automates.',
  'No company has built agent-to-agent pre-meeting coordination at SMB pricing. Clockwise and Reclaim optimize when; PreMeet optimizes what and whether.',
];

const preMeetGapRows = [
  {
    product: 'Otter.ai / tl;dv',
    detail: 'Records and transcribes after the meeting. Documents wasted time, but does not prevent it.',
  },
  {
    product: 'Notion AI / Confluence',
    detail: 'AI over docs, but passive. Someone still has to ask, and it does not proactively compare people.',
  },
  {
    product: 'Clockwise / Reclaim',
    detail: 'Optimizes scheduling and calendar time, but does not touch meeting content or preparation quality.',
  },
  {
    product: 'PreMeet — The Gap',
    detail: 'Agent-to-agent pre-meeting. Each person agent scans sources, compares with others, and surfaces only the real gaps. No existing tool does this.',
  },
];

const preMeetProductRows = [
  {
    priority: 'P0',
    feature: 'Personal Agent per User',
    description:
      'Each user has a persistent AI agent connected to Gmail / Outlook, Google Drive / Notion / Confluence, Jira / Linear / Asana, and Slack / Teams. The agent continuously indexes and updates personal context.',
  },
  {
    priority: 'P0',
    feature: 'Meeting Topic Intake',
    description:
      'Organizer enters the topic, attendees, meeting type, and optional notes. Calendar integration auto-triggers the workflow for meetings booked 2+ hours ahead.',
  },
  {
    priority: 'P0',
    feature: 'Agent-to-Agent Sync',
    description:
      'Each attendee agent scans its own sources, then compares findings with the other agents to identify what each person knows, expects, and where assumptions conflict.',
  },
  {
    priority: 'P0',
    feature: 'Gap Report',
    description:
      'Pre-meeting report delivered 30 minutes before the call: shared context, information gaps, factual conflicts, and a ranked agenda containing only items requiring live discussion.',
  },
  {
    priority: 'P0',
    feature: 'Hours Saved Tracker',
    description:
      'Every meeting receives a time-saved estimate versus the standard meeting type. Team and org dashboards aggregate this into hours saved and salary-equivalent value.',
  },
  {
    priority: 'P1',
    feature: 'Meeting Type Templates',
    description:
      'Pre-configured agent behavior for sales calls, roadmap reviews, 1:1s, investor meetings, and other repeatable meeting types.',
  },
  {
    priority: 'P1',
    feature: 'Post-Meeting Action Sync',
    description:
      'After the meeting, PreMeet writes decisions and actions back to connected tools: Notion / Confluence updated, Jira / Linear tickets created, Slack thread posted.',
  },
  {
    priority: 'P1',
    feature: 'Meeting Necessity Score',
    description:
      'PreMeet estimates whether a meeting should even happen by measuring shared context and decision density. It can recommend a shorter slot or an async thread.',
  },
  {
    priority: 'P2',
    feature: 'Org-Level Analytics',
    description:
      'VP Ops / COO dashboards show meeting hours per team, recurring waste patterns, complexity by department, and async-conversion opportunities.',
  },
  {
    priority: 'P2',
    feature: 'White-Label (Agency Mode)',
    description:
      'Ops consultancies and productivity agencies deploy PreMeet for client orgs with separate branding, agent configs, and billing.',
  },
];

const preMeetWorkflowSteps = [
  {
    step: '1',
    title: 'Topic & Attendees Entered',
    detail:
      'Organizer enters the topic, selects attendees, and optionally picks a meeting type template. Calendar integration can trigger this automatically for meetings booked 2+ hours ahead.',
  },
  {
    step: '2',
    title: 'Each Agent Scans Its Sources',
    detail:
      'Every attendee agent searches email threads, docs, tickets, and chat history for context relevant to the topic, then produces a structured what-I-know summary.',
  },
  {
    step: '3',
    title: 'Agents Compare Notes',
    detail:
      'The orchestration layer compares the summaries to separate shared context from gaps and conflicts between people.',
  },
  {
    step: '4',
    title: 'Gap Report Generated & Delivered',
    detail:
      'Claude generates the final report: shared context, gaps, conflicts, and a ranked agenda. It is delivered to all attendees 30 minutes before the meeting via email and Slack.',
  },
  {
    step: '5',
    title: 'Short Meeting — Decisions Only',
    detail:
      'Humans arrive already synchronized and use the live meeting only for judgment, decisions, and unresolved differences. Average duration drops by roughly 60%.',
  },
  {
    step: '6',
    title: 'Decisions Written Back',
    detail:
      'After the meeting, actions are synced back into workspace tools so nothing needs to be reconstructed manually.',
  },
];

const preMeetSegmentRows = [
  {
    segment: 'B2B SaaS — Product & Engineering Teams (10–200 employees)',
    demand: 'High meeting volume, tool-native, fast decisions',
    revenue: 'Primary',
    geography: '$49–199/mo · USA, UK, Canada, Germany, Netherlands, Israel',
  },
  {
    segment: 'Mid-Market Operations Teams (200–2,000 employees)',
    demand: 'COO / Chief of Staff as buyer, team-wide rollout',
    revenue: 'High',
    geography: '$199–499/mo · USA, UK, Germany, Canada, Singapore',
  },
  {
    segment: 'Consulting & Ops Agencies',
    demand: 'Deploy for clients, white-label value, recurring revenue',
    revenue: 'High',
    geography: '$499/mo (Agency) · USA, UK, Australia, Netherlands',
  },
];

const preMeetPersonas = [
  {
    role: 'Primary Buyer',
    title: 'VP Operations / Chief of Staff',
    detail:
      'Age 32–45. Owns org efficiency and sees meeting hours rising faster than output. Has already tried lighter fixes like no-meeting Fridays and internal guidelines. Budget is easy if ROI is visible. Discovery happens on LinkedIn, Lenny’s Newsletter, and operator Slack communities.',
    message: "Your team's next 340 hours back, this month.",
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    role: 'Champion',
    title: 'Head of Product / Engineering',
    detail:
      'Age 28–42. Feels the pain personally because deep work time gets fragmented by meetings where the first 20 minutes are spent aligning on context. Champions the product upward to VP Ops or the CEO.',
    message: 'Stop attending meetings to learn what everyone already knows.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    role: 'Economic Buyer',
    title: 'CEO / CFO (Smaller SaaS)',
    detail:
      'Age 30–50. At 10–50 person companies, every meeting with 5 attendees can easily cost ~$500/hr in salary time. Outcome-based billing reads as pure leverage: the invoice is a fraction of the time recovered.',
    message: 'We invoice less than 7% of the salary time we save.',
    tone: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]',
  },
];

const preMeetGeographyRows = [
  { region: 'USA', culture: '★★★★★', adoption: 'Very High', async: 'High', speed: 'Fast', priority: '9.5/10' },
  { region: 'UK / Ireland', culture: '★★★★☆', adoption: 'High', async: 'Medium-High', speed: 'Medium-Fast', priority: '8.5/10' },
  { region: 'Canada', culture: '★★★★☆', adoption: 'High', async: 'High', speed: 'Fast', priority: '8.5/10' },
  { region: 'Germany / Austria', culture: '★★★★★', adoption: 'Medium-High', async: 'High', speed: 'Medium', priority: '7.8/10' },
  { region: 'Netherlands', culture: '★★★★☆', adoption: 'High', async: 'Very High', speed: 'Fast', priority: '8.0/10' },
  { region: 'Israel', culture: '★★★★☆', adoption: 'Very High', async: 'Very High', speed: 'Very Fast', priority: '8.2/10' },
  { region: 'Australia / NZ', culture: '★★★☆☆', adoption: 'High', async: 'High', speed: 'Fast', priority: '7.5/10' },
];

const preMeetCompetitorRows = [
  {
    product: 'Otter.ai',
    price: '$10�20/mo',
    strength: 'Transcription, search',
    weakness: 'Post-meeting only. No preparation layer.',
    pre: 'no',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'tl;dv',
    price: '$0�25/seat',
    strength: 'Recording, CRM sync',
    weakness: 'Post-meeting. Records waste � does not prevent it.',
    pre: 'no',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'Notion AI',
    price: '$10+/mo',
    strength: 'Docs AI, templates',
    weakness: 'Passive. No proactive pre-meeting workflow.',
    pre: 'partial',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'Clockwise',
    price: '$0�27/mo',
    strength: 'Calendar optimization',
    weakness: 'Schedules meetings better � does not shorten them.',
    pre: 'no',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'Reclaim AI',
    price: '$8�20/seat',
    strength: 'Schedule protection',
    weakness: 'Protects focus time � does not improve meeting content.',
    pre: 'no',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'Fellow.app',
    price: '$6�9/seat',
    strength: 'Agenda templates, 1:1 tools',
    weakness: 'Manual preparation still depends on humans doing the work.',
    pre: 'partial',
    agent: 'no',
    outcome: 'no',
    smb: 'yes',
  },
  {
    product: 'Avoma',
    price: '$19�79/seat',
    strength: 'Sales meeting intelligence',
    weakness: 'Sales-focused and post-meeting. No cross-participant agent layer.',
    pre: 'no',
    agent: 'no',
    outcome: 'no',
    smb: 'partial',
  },
  {
    product: 'PREMEET ?',
    price: '$49�499/mo + usage',
    strength: 'Agent-to-agent pre-meeting intelligence',
    weakness: 'Our product',
    pre: 'yes',
    agent: 'yes',
    outcome: 'yes',
    smb: 'yes',
  },
];

const preMeetPricingPlans = [
  {
    name: 'STARTER',
    price: '$49/mo',
    detail: 'Up to 5 users � 20 Gap Reports/mo � Gmail + Notion � Email delivery � Flat fee',
    featured: false,
  },
  {
    name: 'GROWTH',
    price: '$199/mo',
    detail: 'Up to 20 users � Unlimited reports � All integrations � Slack delivery � Hours saved dashboard',
    featured: true,
  },
  {
    name: 'SCALE',
    price: '$499/mo',
    detail: 'Up to 100 users � Org analytics � Custom templates � CSM � Outcome billing available',
    featured: false,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    detail: 'Unlimited users � SSO + audit logs � On-premise option � Outcome-based billing � SLA',
    featured: false,
  },
];

const preMeetProjection = [
  { month: 'M1', value: '$588', width: '1%' },
  { month: 'M2', value: '$1,960', width: '2%' },
  { month: 'M3', value: '$4,900', width: '5%' },
  { month: 'M4', value: '$9,800', width: '10%' },
  { month: 'M5', value: '$16,700', width: '17%' },
  { month: 'M6', value: '$24,500', width: '25%' },
  { month: 'M7', value: '$34,300', width: '35%' },
  { month: 'M8', value: '$45,100', width: '46%' },
  { month: 'M9', value: '$55,900', width: '56%' },
  { month: 'M10', value: '$66,600', width: '67%' },
  { month: 'M11', value: '$80,400', width: '81%' },
  { month: 'M12', value: '$98,000', width: '98%' },
];

const preMeetAcquisitionCards = [
  {
    period: 'Day 1–30',
    title: 'Seed with Direct Outreach',
    actions: [
      'LinkedIn search: VP Operations B2B SaaS or Chief of Staff startup at 10–200 employee companies. 4,000+ targets.',
      'Message hook: Your team is spending 30% of the workweek in meetings to sync on things that could be automated. We built AI agents that do the sync before the meeting. Want to see the first Gap Report on a real meeting?',
      'Twitter / X: engage with high-signal threads on async work and meeting culture.',
      'Hacker News Ask HN: How does your team handle meeting sprawl as you scale?',
      'Indie Hackers post: Built AI agents that do your meeting prep so you only discuss what is unresolved.',
      'Product Hunt upcoming page with waitlist and demo video.',
    ],
    goal: '15 free beta teams, 5 paying Growth teams, $1,000+ MRR',
    accent: 'before:bg-[#2563EB]',
  },
  {
    period: 'Day 31–60',
    title: 'Product Hunt + Integrations',
    actions: [
      'Product Hunt launch: PreMeet — AI agents do your meeting prep. You just show up for the decisions.',
      "Convert 8 of 15 beta teams to paid with a 30-day money-back guarantee if meeting time doesn't drop by at least 30%.",
      'Notion integration marketplace listing.',
      'Slack App Directory listing with Gap Reports delivered 30 minutes before meetings.',
      'SEO content around reducing meeting time, async-first culture, and AI meeting prep tools.',
    ],
    goal: '40 free teams, 20 paying, $5,000+ MRR',
    accent: 'before:bg-[#16A34A]',
  },
  {
    period: 'Day 61–90',
    title: 'Enterprise Pilots + Partnerships',
    actions: [
      'Target 5 mid-market companies for paid pilots and show ROI dashboards to CFO / COO after 30 days.',
      'Secure 3 ops consulting agency partnerships, each deploying PreMeet across 5+ clients.',
      'Linear and Jira marketplace listings focused on roadmap and planning meetings.',
      'Referral loop: $50/mo credit per team that converts and stays paid for 90+ days.',
      'Target YC S25 / W26 cohort companies with high early meeting volume and fast tool adoption.',
    ],
    goal: '200 free, 50 paying, $12,000+ MRR, 3 marketplace listings live',
    accent: 'before:bg-[#7C3AED]',
  },
];

const preMeetFunnelRows = [
  { label: 'Website Visitors', value: '6,000', pct: '100%', width: '100%', tone: 'bg-[linear-gradient(90deg,#7c3aed_0%,#6d28d9_100%)]' },
  { label: 'Free Signups', value: '480', pct: '8%', width: '80%', tone: 'bg-[linear-gradient(90deg,#7c3aed_0%,#7c3aed_100%)]' },
  { label: 'First Integration Connected', value: '312', pct: '5.2%', width: '57%', tone: 'bg-[linear-gradient(90deg,#7c3aed_0%,#8b5cf6_100%)]' },
  { label: 'First Meeting Topic Entered', value: '216', pct: '3.6%', width: '41%', tone: 'bg-[linear-gradient(90deg,#9b7df7_0%,#8b5cf6_100%)]' },
  { label: 'First Gap Report Received', value: '150', pct: '2.5%', width: '30%', tone: 'bg-[linear-gradient(90deg,#a78bfa_0%,#8b5cf6_100%)]' },
  { label: 'Team Invited (2+ users)', value: '96', pct: '1.6%', width: '21%', tone: 'bg-[linear-gradient(90deg,#10b981_0%,#14b8a6_100%)]' },
  { label: 'Upgraded to Paid', value: '48', pct: '0.8%', width: '9%', tone: 'bg-[linear-gradient(90deg,#10b981_0%,#22c55e_100%)]' },
];

const preMeetMeetingSavingsRows = [
  {
    type: 'Roadmap Review',
    before: '90 min',
    after: '35 min',
    saved: '55 min',
    cost: '~$366/meeting',
  },
  {
    type: 'Sales Kickoff',
    before: '60 min',
    after: '22 min',
    saved: '38 min',
    cost: '~$253/meeting',
  },
  {
    type: '1:1 / Performance Review',
    before: '45 min',
    after: '18 min',
    saved: '27 min',
    cost: '~$90/meeting',
  },
  {
    type: 'Sprint Planning',
    before: '75 min',
    after: '28 min',
    saved: '47 min',
    cost: '~$313/meeting',
  },
  {
    type: 'Investor Update',
    before: '60 min',
    after: '20 min',
    saved: '40 min',
    cost: '~$267/meeting',
  },
];

const preMeetCodePrompts = [
  {
    id: 'Prompt 1',
    category: 'Personal Agent Context Retrieval',
    title: 'Personal Agent Context Retrieval (Python / LangGraph)',
    code: `# Personal agent context retrieval servisi yaz.
# Input: { user_id, meeting_topic, meeting_type, lookback_days: 30 }

# Source 1: Gmail API
# GET /gmail/v1/users/me/messages?q={meeting_topic} insubject:{topic}
# -> Extract thread summaries, key decisions, unresolved questions
# -> Prioritize last 30 days, boost emails with multiple replies

# Source 2: Notion API
# POST /v1/search { query: meeting_topic, filter: { object: "page" }}
# -> Extract page content, last_edited_by, key decisions marked

# Source 3: Linear API (GraphQL)
# query { issues(filter: { title: { containsIgnoreCase: topic }})
# { title, state, assignee, priority, comments { body } }}

# Source 4: Slack API
# GET /search.messages?query={topic}&count=20
# -> Extract channel conversations, filter bot messages

# Output per source: structured JSON
# { source: "gmail", items: [{ summary: "...", key_point: "...", date: "...", confidence: 0.85 }], user_position: "What this user knows / expects / is uncertain about" }

# Embed user_position -> store in pgvector with user_id + meeting_id
# LangGraph node, async, Python, handles rate limits gracefully.`,
  },
  {
    id: 'Prompt 2',
    category: 'Agent Comparison',
    title: 'Agent-to-Agent Comparison (LangGraph Orchestration)',
    code: `# Multi-agent comparison orchestrator yaz.
# Input: { meeting_id, attendee_positions: [{ user_id, position_summary }] }

# LangGraph graph:
# Node 1: For each pair of agents, extract claims as structured list
# -> { claim, source_user, confidence, evidence_snippet }
# Node 2: Cross-reference claims
# -> SHARED: claim appears in 2+ positions, no conflict
# -> GAP: claim exists for user A, absent for user B
# -> CONFLICT: same topic, different facts/numbers/dates
# Node 3: Rank by discussion urgency
# -> CONFLICT > GAP > SHARED
# -> Within conflicts: rank by business impact

# Output:
# {
#   shared_context: ["..."],
#   gaps: [{ info: "...", known_by: "Alice", unknown_by: ["Bob", "Carol"] }],
#   conflicts: [{ topic: "...", position_a: "...", position_b: "..." }],
#   agenda_items: [{ item: "...", type: "conflict|gap|decision", urgency: 1 }]
# }

# Save to meeting_analyses table.
# Python, async, LangGraph StateGraph.`,
  },
  {
    id: 'Prompt 3',
    category: 'Gap Report',
    title: 'Gap Report Generation (Claude API)',
    code: `# Claude API ile Gap Report generation servisi yaz.
# Input: { meeting_id } -> fetch meeting_analyses record

System: "You are PreMeet, an AI that generates pre-meeting Gap Reports.
Rules:
1. ONLY use facts from the provided agent analysis. Never invent claims.
2. Shared Context section: bullet list, past tense, 3-6 items max.
3. Gaps section: 'Alice has info that Bob and Carol don't: [gap]'
4. Conflicts section: 'Bob says X. Alice says Y. Needs resolution.'
5. Agenda: only items requiring live discussion. Max 5 items. Ranked.
6. Total report: under 500 words. Plain language. No jargon.
7. End with: 'Estimated meeting time needed: ~[N] minutes'"

User: "Meeting: {topic} Attendees: {attendees} Analysis: {meeting_analysis_json}"

# Output: { report_markdown, estimated_minutes, agenda_items[] }
# Save to gap_reports table. Deliver via Resend + Slack API.`,
  },
  {
    id: 'Prompt 4',
    category: 'Billing Logic',
    title: 'Hours Saved Calculator (Node.js)',
    code: `# Hours saved calculation engine yaz.
# Input: { meeting_id, actual_duration_minutes, attendee_count }

# Baseline durations by meeting type:
const BASELINES = {
  roadmap_review: 90,
  sales_call: 60,
  one_on_one: 45,
  sprint_planning: 75,
  investor_meeting: 60,
  general: 55
};

# Calculation:
# time_saved_minutes = baseline - actual_duration
# person_hours_saved = (time_saved_minutes / 60) * attendee_count
# salary_value_saved = person_hours_saved * 80
# billing_amount = person_hours_saved * 7

# Store in meeting_savings table
# Aggregate monthly for Hours Saved Dashboard and Stripe Meter event
# POST stripe.billing.meterEvents.create({ event_name: 'hours_saved', value: hours })
# TypeScript, Stripe SDK.`,
  },
  {
    id: 'Prompt 5',
    category: 'Calendar Trigger',
    title: 'Calendar Integration & Auto-Trigger (Node.js)',
    code: `# Google Calendar + Outlook Calendar auto-trigger yaz.
# Trigger: calendar webhook (Google Calendar push notification)

# Step 1: On new calendar event created or updated
# -> Parse: title, attendees (emails), start_time, duration
# -> Filter: meeting 2+ hours away AND 2+ attendees AND attendees are PreMeet users

# Step 2: Match attendees to PreMeet user_ids via email
# -> At least 2 matched users -> create meeting record in DB

# Step 3: Schedule Inngest job
# -> Trigger 90 minutes before meeting start
# -> Runs full agent pipeline -> delivers Gap Report 30 min before

# Step 4: Deliver notification
# -> Email via Resend: "Your Gap Report for [Meeting Title] is ready ->"
# -> Slack DM to each attendee: same link

# TypeScript, Inngest, Google APIs, Microsoft Graph.`,
  },
  {
    id: 'Prompt 6',
    category: 'Dashboard UI',
    title: 'Hours Saved Dashboard (Next.js + shadcn/ui)',
    code: `# Next.js 14 + shadcn/ui ile PreMeet dashboard yaz.

# Pages:
# /dashboard: KPI row (Hours Saved This Month, Gap Reports Sent, Avg Meeting Reduction %, Salary Value Recovered) + recent meetings list + team leaderboard
# /meetings: list of meetings with Gap Report links, hours saved, attendees
# /meetings/[id]: full Gap Report view + agent sources + comparison details
# /agents: integration status per user (Gmail ✓, Notion ✓, Jira pending)
# /reports: monthly Hours Saved reports + download PDF for CFO
# /settings: team management, billing, integration config

# Design:
# Deep Ink bg, Violet (#7C3AED) primary, Emerald (#10B981) saved hours
# Key component: Hours Saved card — large "$34,000 recovered this month"
# Sub-stat: "at $199/mo PreMeet cost — 170× ROI"

# TypeScript, react-query, Tailwind.`,
  },
  {
    id: 'Prompt 7',
    category: 'Stripe Billing',
    title: 'Stripe Outcome-Based Billing',
    code: `# PreMeet Stripe billing yaz.

# Plans:
# starter: $49/mo flat — 5 users, 20 gap reports/mo
# growth: $199/mo flat — 20 users, unlimited reports
# scale: $499/mo + $7/hour saved usage — 100 users + outcome billing
# enterprise: custom

# Outcome billing (Scale+):
# 1. Create Stripe Meter: name='hours_saved', event_name='hours_saved'
# 2. After each meeting: report hours saved to meter
# stripe.billing.meterEvents.create({ event_name: 'hours_saved', payload: { value: hours_saved, stripe_customer_id: id }})
# 3. Stripe aggregates monthly, bills at $7/unit
# 4. Invoice line item: "340 hours saved × $7 = $2,380"

# /api/checkout -> Stripe Checkout session
# /api/webhook -> subscription.created/updated/deleted
# /api/portal -> Stripe Customer Portal
# Feature gates: report limits enforced on Scale+ by meter, others by DB counter
# TypeScript, Stripe SDK v14.`,
  },
  {
    id: 'Prompt 8',
    category: 'Database Schema',
    title: 'Supabase Database Schema',
    code: `-- PreMeet için Supabase PostgreSQL şeması
accounts: id, name, plan, report_limit_per_month, reports_this_month, stripe_ids jsonb, brand_settings jsonb, outcome_billing_enabled bool, created_at
users: id, account_id, email, name, avatar_url, agent_status (pending|indexing|ready|error), last_indexed_at
integrations: id, user_id, provider (gmail|notion|linear|jira|asana|slack|teams|gdrive|confluence), access_token encrypted, refresh_token encrypted, scopes text[], connected_at, last_synced, sync_status
agent_memories: id, user_id, content text, embedding vector(1536), metadata jsonb (source, source_url, date, topic_tags[]), indexed_at, expires_at
meetings: id, account_id, title text, meeting_type text, attendee_user_ids uuid[], calendar_event_id text, scheduled_at timestamptz, actual_duration_minutes int, status (pending|processing|ready|completed)
meeting_analyses: id, meeting_id, shared_context jsonb, gaps jsonb, conflicts jsonb, agenda_items jsonb, generated_at, agent_run_ids uuid[]
gap_reports: id, meeting_id, report_markdown text, estimated_minutes int, delivered_via text[], delivered_at timestamptz
meeting_savings: id, meeting_id, account_id, baseline_minutes int, actual_minutes int, person_hours_saved numeric, salary_value_saved numeric, billing_amount numeric, meter_event_id text

-- RLS: accounts see only their own data
-- users only access their own agent_memories
-- Index: user_id, account_id, embedding (ivfflat), scheduled_at`,
  },
];

const stackReaperTechRows = [
  {
    layer: 'Frontend',
    recommended: 'Next.js 14',
    host: 'Vercel',
    alternative: 'Remix',
    rationale: 'SSR, great auth, Vercel analytics, fast deploys',
  },
  {
    layer: 'Agent Orchestration',
    recommended: 'LangGraph (Python)',
    host: 'Modal / Railway',
    alternative: 'CrewAI',
    rationale: 'Multi-agent graphs, stateful agent loops, best for agent-to-agent comparison',
  },
  {
    layer: 'AI / Generation',
    recommended: 'Claude API (Sonnet)',
    host: 'Anthropic',
    alternative: 'GPT-4o',
    rationale: 'Best at structured synthesis, following constraints, gap detection accuracy',
  },
  {
    layer: 'Embeddings / Search',
    recommended: 'OpenAI text-embedding-3-small + pgvector',
    host: 'Supabase',
    alternative: 'Pinecone',
    rationale: 'Per-user vector store for agent memory; RLS isolates user data',
  },
  {
    layer: 'Email Integration',
    recommended: 'Gmail API + Microsoft Graph API',
    host: 'OAuth per user',
    alternative: 'Nylas',
    rationale: 'Direct OAuth, no intermediary cost, full thread access',
  },
  {
    layer: 'Docs Integration',
    recommended: 'Notion API + Confluence API + Google Drive API',
    host: 'Per-user OAuth',
    alternative: 'Unified.to',
    rationale: 'Targeted APIs at launch; Unified.to for scale ($99/mo vs 2 weeks dev)',
  },
  {
    layer: 'Project Tools',
    recommended: 'Jira API + Linear API + Asana API',
    host: 'Per-user OAuth',
    alternative: 'Merge.dev',
    rationale: 'Per-user tokens, scoped to relevant projects',
  },
  {
    layer: 'Messaging',
    recommended: 'Slack API + Microsoft Teams API',
    host: 'Per-workspace OAuth',
    alternative: '—',
    rationale: 'Channel context retrieval, bot for Gap Report delivery',
  },
  {
    layer: 'Calendar',
    recommended: 'Google Calendar API + Outlook Calendar API',
    host: 'Per-user OAuth',
    alternative: 'Cronofy',
    rationale: 'Meeting detection trigger, attendee list extraction',
  },
  {
    layer: 'Database',
    recommended: 'Supabase (PostgreSQL)',
    host: 'Supabase Cloud',
    alternative: 'PlanetScale',
    rationale: 'RLS per workspace, pgvector for agent memory, real-time',
  },
  {
    layer: 'Job Queue',
    recommended: 'Inngest',
    host: 'Inngest Cloud',
    alternative: 'BullMQ',
    rationale: 'Async agent runs, retries, fan-out per attendee',
  },
  {
    layer: 'Auth',
    recommended: 'Supabase Auth + Google SSO',
    host: 'Supabase',
    alternative: 'Clerk',
    rationale: 'Magic link + Google for fast trial start',
  },
  {
    layer: 'Payments',
    recommended: 'Stripe Billing + Meters',
    host: 'Stripe',
    alternative: 'Paddle',
    rationale: 'Usage-based billing on hours saved; Stripe Meters track the unit',
  },
  {
    layer: 'Notifications',
    recommended: 'Resend (email) + Slack Bot',
    host: 'Resend Cloud',
    alternative: 'SendGrid',
    rationale: 'Gap Report delivery 30min before meeting',
  },
  {
    layer: 'Analytics',
    recommended: 'PostHog',
    host: 'PostHog Cloud',
    alternative: 'Mixpanel',
    rationale: 'A/B testing, funnel tracking, agent run analytics',
  },
];

const stackReaperArchitecture = [
  {
      title: 'Layer 1 � Personal Agent (Per User, Persistent)',
    detail:
      "Each user's agent maintains a continuously updated vector store of their context: email threads by topic and participant, doc summaries with decision tags, ticket activity by project, and Slack channel summaries. It re-indexes on schedule and webhook, stored in Supabase pgvector with RLS so each agent only sees its owner's data.",
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
      title: 'Layer 2 � Orchestration (Per Meeting, Triggered)',
    detail:
      'When a meeting is created, LangGraph spins up a meeting-scoped graph. Each attendee agent runs in parallel, retrieves top relevant chunks, and generates a structured position summary. The orchestrator then compares summaries to find conflicts and complementary context.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
      title: 'Layer 3 � Gap Report Generation (Claude Sonnet)',
    detail:
      'The structured diff is sent to Claude to generate a compact Gap Report containing shared context, information asymmetries, direct conflicts, and only the agenda items that truly require live discussion.',
    tone: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]',
  },
];

const stackReaperTimeline = [
  {
    week: 'Week 1-2',
    title: 'Foundation & Intake',
    summary: 'Supabase schema, auth, calendar integration, and meeting topic intake UI.',
    detail: 'Create workspace data model, wire Google Calendar triggers, and establish the first meeting intake surface.',
    accent: 'before:bg-[#2563EB]',
  },
  {
    week: 'Week 3',
    title: 'Context Indexing',
    summary: 'Gmail + Notion integrations with pgvector indexing and per-user retrieval.',
    detail: 'Build personal agent memory for email, docs, and user context so every meeting starts with relevant history.',
    accent: 'before:bg-[#16A34A]',
  },
  {
    week: 'Week 4',
    title: 'Agent Comparison Core',
    summary: 'LangGraph orchestration, agent-to-agent comparison, and Gap Report generation.',
    detail: 'Run per-attendee summaries in parallel, resolve conflicts, then compile the report through Claude Sonnet.',
    accent: 'before:bg-[#7C3AED]',
  },
  {
    week: 'Week 5',
    title: 'Delivery Layer',
    summary: 'Gap Report delivery by email and Slack plus hours-saved dashboard.',
    detail: 'Ship pre-meeting report delivery, add meeting type templates, and make the time savings visible to the user.',
    accent: 'before:bg-[#D97706]',
  },
  {
    week: 'Week 6',
    title: 'Commercial Beta',
    summary: 'Stripe billing, project tool integrations, and beta launch.',
    detail: 'Add Stripe Meters, integrate Jira / Linear / Asana, and open the first production beta cohort.',
    accent: 'before:bg-[#CA8A04]',
  },
];

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

function Kit6OpportunityBriefSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[30px] font-semibold tracking-[-0.05em] text-[#101828] sm:text-[34px]">Why PreMeet, Why Now?</div>
        <p className="mt-4 text-[15px] leading-7 text-[#475467] sm:text-[16px] sm:leading-8">
          Meetings are the single most expensive recurring cost in knowledge work, and almost nobody treats them that
          way. U.S. businesses lose approximately $375 billion annually to unproductive meetings. The average knowledge
          worker spends 31 hours per month in meetings, with half of that time considered wasted. Executives spend up to
          23 hours per week in meetings, and 71% of senior managers describe those sessions as unproductive and
          inefficient. Yet the default workflow is still the same as it was decades ago: book a slot, hope people
          prepared, repeat.
        </p>
        <p className="mt-4 text-[15px] leading-7 text-[#475467] sm:text-[16px] sm:leading-8">
          The core problem is not that people are bad at meetings. It is that most meetings are doing the wrong job:
          information synchronization. Participants need to know what the others know, identify misalignments, and build
          shared context before decision-making can even begin. That synchronization layer eats 60–70% of meeting time.
          PreMeet removes it by using a network of personal AI agents to synchronize context before the meeting starts,
          then handing humans only the gaps that actually require judgment.
        </p>
      </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {preMeetStats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-[24px] border border-[#e6eaf2] p-5 sm:rounded-[28px] sm:p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
            >
              <div className="text-[34px] font-semibold tracking-[-0.06em] text-[#101828] sm:text-[42px]">{stat.value}</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828] sm:mt-3 sm:text-[17px]">{stat.label}</div>
              <div className="mt-2 text-[13px] leading-6 text-[#475467] sm:text-[14px] sm:leading-7">{stat.note}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[24px] border border-[#e6eaf2] bg-white p-5 sm:rounded-[28px] sm:p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828] sm:text-[24px]">The Gap No One Has Filled</div>
          <div className="mt-6 space-y-4">
            {preMeetGapRows.map((row, index) => (
              <div
                key={row.product}
                className={`rounded-[18px] border px-4 py-4 sm:rounded-[20px] sm:px-5 sm:py-5 ${
                  index === preMeetGapRows.length - 1
                    ? 'border-[#d7f0e2] bg-[linear-gradient(135deg,#f4fbf7_0%,#eff6ff_100%)]'
                    : 'border-[#edf1f7] bg-[#fcfdff]'
                }`}
              >
                <div className="text-[17px] font-semibold tracking-[-0.03em] text-[#101828] sm:text-[18px]">{row.product}</div>
                <p className="mt-3 text-[14px] leading-7 text-[#475467] sm:text-[15px] sm:leading-8">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#e6eaf2] bg-white p-5 sm:rounded-[28px] sm:p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828] sm:text-[24px]">Market Signals & Validation</div>
          <div className="mt-5 grid gap-3">
            {preMeetMarketSignals.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[16px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 sm:rounded-[18px]"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-[14px] leading-7 text-[#475467] sm:text-[15px]">{item}</div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

function Kit6ProductSpecSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">PreMeet: Product Definition</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          One-Sentence Value Prop: &quot;Enter a meeting topic and your attendees — PreMeet&apos;s AI agents scan
          everyone&apos;s sources, compare notes with each other, and deliver a gap report showing only the points that
          actually require human discussion. Your meeting just got 60% shorter.&quot;
        </p>
      </div>

      <NativeTable
        columns={[
          { key: 'priority', label: 'Pri', className: 'w-[10%]' },
          { key: 'feature', label: 'Feature', className: 'w-[25%]' },
          { key: 'description', label: 'Description', className: 'w-[65%]' },
        ]}
        rows={preMeetProductRows}
      />

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">End-to-End Agent Workflow</div>
        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {preMeetWorkflowSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div className="inline-flex rounded-[10px] bg-[#eef7ff] px-3 py-1 text-[12px] font-semibold text-[#4361ee]">
                Step {item.step}
              </div>
              <div className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit6TargetMarketsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Who Buys PreMeet and Why</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          PreMeet&apos;s primary buyer is the person who feels the cost of bad meetings most acutely: the VP of
          Operations, Chief of Staff, Head of Product, or founder who sees half the week disappear into preparation
          that should have been async. The trigger for purchase is usually a particularly bad quarter of meeting sprawl
          or a CFO asking why headcount is up while output is flat.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Target Markets & Segments</div>
        <NativeTable
          columns={[
            { key: 'segment', label: 'Segment', className: 'w-[34%]' },
            { key: 'demand', label: 'Demand', className: 'w-[28%]' },
            { key: 'revenue', label: 'Revenue', className: 'w-[12%]' },
            { key: 'geography', label: 'Key Geographies', className: 'w-[26%]' },
          ]}
          rows={preMeetSegmentRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Buyer Persona Profiles</div>
        <div className="grid gap-5 xl:grid-cols-3">
          {preMeetPersonas.map((persona) => (
            <div
              key={persona.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${persona.tone}`}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">{persona.role}</div>
              <div className="mt-3 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{persona.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{persona.detail}</p>
              <div className="mt-5 rounded-[18px] border border-white/60 bg-white/70 px-4 py-4 text-[15px] leading-7 text-[#101828]">
                <span className="font-semibold">Key message:</span> {persona.message}
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Geographic Priority Matrix</div>
          <NativeTable
            columns={[
              { key: 'region', label: 'Region', className: 'w-[24%]' },
              { key: 'adoption', label: 'Tool Adoption', className: 'w-[19%]' },
              { key: 'async', label: 'Async Openness', className: 'w-[19%]' },
              { key: 'speed', label: 'Decision Speed', className: 'w-[19%]' },
              { key: 'priority', label: 'Priority', className: 'w-[19%]' },
            ]}
            rows={preMeetGeographyRows}
          />
        </div>
    </section>
  );
}

function Kit6CompetitorMapSection() {
  const renderStatus = (value: string) => {
    if (value === 'yes') {
      return (
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#dff7e8] text-[15px] font-semibold text-[#16a34a]">
          ?
        </span>
      );
    }

    if (value === 'partial') {
      return (
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#fff1c7] text-[15px] font-semibold text-[#d97706]">
          ~
        </span>
      );
    }

    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#ffe2e0] text-[15px] font-semibold text-[#ef4444]">
        �
      </span>
    );
  };

  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Competitive Landscape</div>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[980px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2] bg-[#fcfdff]">
              <th className="px-4 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Product</th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Price</th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Strength</th>
              <th className="px-4 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Weakness</th>
              <th className="px-3 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Pre-Meeting</th>
              <th className="px-3 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Agent-to-Agent</th>
              <th className="px-3 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Outcome Pricing</th>
              <th className="px-3 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">SMB Fit</th>
            </tr>
          </thead>
          <tbody>
            {preMeetCompetitorRows.map((row, index) => {
              const featured = row.product.includes('PREMEET');
              return (
                <tr
                  key={row.product}
                  className={`${index === 0 ? '' : 'border-t border-[#e6eaf2]'} ${featured ? 'bg-[#f3efff]' : 'bg-white'}`}
                >
                  <td className="px-4 py-4 align-top text-[15px] font-semibold text-[#101828]">{row.product}</td>
                  <td className="px-4 py-4 align-top text-[15px] leading-7 text-[#475467]">{row.price}</td>
                  <td className="px-4 py-4 align-top text-[15px] leading-7 text-[#475467]">{row.strength}</td>
                  <td className="px-4 py-4 align-top text-[15px] leading-8 text-[#475467]">{row.weakness}</td>
                  <td className="px-3 py-4 align-top text-center">{renderStatus(row.pre)}</td>
                  <td className="px-3 py-4 align-top text-center">{renderStatus(row.agent)}</td>
                  <td className="px-3 py-4 align-top text-center">{renderStatus(row.outcome)}</td>
                  <td className="px-3 py-4 align-top text-center">{renderStatus(row.smb)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  
        <div className="rounded-[28px] border border-[#d7f0e9] bg-[linear-gradient(135deg,#f2fffb_0%,#eff6ff_100%)] px-6 py-5 text-[15px] leading-8 text-[#475467] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <span className="font-semibold text-[#0f766e]">PreMeet&apos;s moat:</span> the agent-to-agent comparison layer.
          Every competitor either records what happened after the meeting or helps humans prepare manually. PreMeet is
          the only product where each person&apos;s agent does the preparation work first, then compares context with the
        other agents to surface only what remains unresolved.
      </div>
    </section>
  );
}

function Kit6RevenueModelSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Outcome-Based Pricing � Pay for Saved Hours</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Pricing Philosophy: PreMeet charges a fraction of the value it creates. For every hour of meeting time saved,
          PreMeet bills $7. The average knowledge worker costs ~$100/hr in total compensation, so PreMeet invoices 7%
          of the value delivered. A team saving 340 hours/month pays $2,380. That team&apos;s CFO sees $34,000 in
          salary time recovered. Zero-risk buying motion.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        {preMeetPricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[28px] border p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${
              plan.featured
                ? 'border-[#dbe7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)]'
                : 'border-[#e6eaf2] bg-white'
            }`}
          >
            <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">{plan.name}</div>
            <div className="mt-4 text-[36px] font-semibold tracking-[-0.06em] text-[#101828]">{plan.price}</div>
            <p className="mt-4 text-[15px] leading-8 text-[#475467]">{plan.detail}</p>
          </div>
        ))}
      </div>

        <div className="rounded-[28px] border border-[#d7f0e2] bg-[linear-gradient(135deg,#f4fbf7_0%,#eff6ff_100%)] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Outcome-Based Billing (Scale+ and Enterprise)</div>
          <div className="mt-5 grid gap-4">
            {[
              'Hours saved calculated per meeting: (standard meeting length for type) minus (actual meeting length after Gap Report) � attendee count',
              'Billing rate: $7/hour saved � invoiced monthly with full audit trail showing which meetings, which savings, which attendees',
              'Example invoice: "This month: 340 hours saved across 87 meetings � $2,380. Salary cost of those hours: ~$34,000."',
              'Cap option: customers can set a monthly billing cap for predictability; PreMeet discounts above the cap',
              'Agency white-label: $499/mo base + $25/client workspace/mo � agency marks up to client as productivity consulting',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-[18px] border border-white/60 bg-white/70 px-4 py-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ecfbf4] text-[12px] font-semibold text-[#16a34a]">
                {index + 1}
              </div>
              <div className="text-[15px] leading-8 text-[#475467]">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">12-Month MRR Projection</div>
        <div className="mt-6 space-y-4">
          {preMeetProjection.map((item) => (
            <div key={item.month} className="grid grid-cols-[36px_minmax(0,1fr)_110px] items-center gap-4">
              <div className="text-[15px] font-medium text-[#667085]">{item.month}</div>
              <div className="h-7 rounded-full bg-[#f2f4f7]">
                <div
                  className="h-7 rounded-full bg-[linear-gradient(90deg,#7c3aed_0%,#9b8af5_100%)]"
                  style={{ width: item.width }}
                />
              </div>
              <div className="text-right text-[15px] font-medium text-[#344054]">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit6First50CustomersSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">ICP Profiles & 30-60-90 Day Acquisition Plan</div>
      </div>

      <div className="grid gap-5">
        {preMeetAcquisitionCards.map((card) => (
          <div
            key={card.period}
            className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${card.accent}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                {card.period}
              </div>
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{card.title}</div>
            </div>

            <div className="mt-6 grid gap-3">
              {card.actions.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[15px] leading-8 text-[#475467]"
                >
                  <span className="mr-3 inline-flex size-6 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
              <strong className="text-[#101828]">Goal:</strong> {card.goal}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Kit6ConversionFunnelsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Conversion Funnels</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">Acquisition & Activation — Month 6 Targets</p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Funnel 1: PLG / Inbound</div>
        <div className="mt-6 space-y-4">
          {preMeetFunnelRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[240px_minmax(0,1fr)_72px] items-center gap-5">
              <div className="text-[15px] text-[#344054]">{row.label}</div>
              <div className="h-8 rounded-[10px] bg-[#f2f4f7]">
                <div
                  className={`flex h-8 items-center rounded-[10px] px-4 text-[14px] font-medium text-white ${row.tone}`}
                  style={{ width: row.width }}
                >
                  {row.value} ({row.pct})
                </div>
              </div>
              <div className="text-right font-mono text-[14px] text-[#667085]">{row.pct}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Meeting Time: Before vs. After PreMeet</div>
        <NativeTable
          columns={[
            { key: 'type', label: 'Meeting Type', className: 'w-[22%]' },
            { key: 'before', label: 'Avg Length (Before)', className: 'w-[18%]' },
            { key: 'after', label: 'Avg Length (After)', className: 'w-[18%]' },
            { key: 'saved', label: 'Time Saved', className: 'w-[16%]' },
            { key: 'cost', label: 'Monthly Cost Saved (5-person team)', className: 'w-[26%]' },
          ]}
          rows={preMeetMeetingSavingsRows}
        />
        <div className="text-[15px] leading-8 text-[#667085]">
          Salary cost calculated at $80/hr blended rate. 5-person meeting. PreMeet Growth plan: $199/mo. At 4
          roadmap reviews/month, break-even happens inside the first meeting.
        </div>
      </div>
    </section>
  );
}

function Kit6CodePromptsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
            8 copy-paste prompts
          </div>
          <div className="inline-flex rounded-[10px] bg-[#ecfbf4] px-3 py-1 text-[12px] font-semibold text-[#067647]">
            Claude / GPT-4o ready
          </div>
        </div>
        <p className="mt-4 max-w-[920px] text-[16px] leading-8 text-[#475467]">
          Core build prompts for implementing the PreMeet product surface. Each prompt is preserved from the blueprint,
          but repackaged in the same cleaner project card language used in kit4 so the section feels like a build
          system rather than a plain code dump.
        </p>
      </div>

      <div className="space-y-5">
        {preMeetCodePrompts.map((prompt, index) => (
          <div
            key={prompt.id}
            className="overflow-hidden rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div
              className={`border-b border-[#e6eaf2] p-6 ${
                index % 4 === 0
                  ? 'bg-[#eef4ff]'
                  : index % 4 === 1
                    ? 'bg-[#ecfbf4]'
                    : index % 4 === 2
                      ? 'bg-[#fff4ea]'
                      : 'bg-[#f5f0ff]'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-[10px] bg-white/75 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                  {prompt.id}
                </div>
                <div className="inline-flex rounded-[10px] bg-white/75 px-3 py-1 text-[12px] font-semibold text-[#667085]">
                  {prompt.category}
                </div>
              </div>
              <div className="mt-4 text-[26px] font-semibold tracking-[-0.05em] text-[#101828]">{prompt.title}</div>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto rounded-[22px] bg-[#0f172a] p-5">
                <pre className="min-w-[700px] whitespace-pre-wrap text-[13px] leading-7 text-[#e2e8f0]">
                  <code>{prompt.code}</code>
                </pre>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-[12px] bg-[#4361ee] px-4 py-2.5 text-[14px] font-medium text-white">
                  Copy prompt
                </button>
                <button className="rounded-[12px] border border-[#d0d5dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#101828]">
                  Save to build queue
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Kit6TechStackSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Technical Architecture</div>
      </div>

      <NativeTable
        columns={[
          { key: 'layer', label: 'Layer', className: 'w-[18%]' },
          { key: 'recommended', label: 'Recommended', className: 'w-[21%]' },
          { key: 'host', label: 'Host', className: 'w-[16%]' },
          { key: 'alternative', label: 'Alternative', className: 'w-[15%]' },
          { key: 'rationale', label: 'Rationale', className: 'w-[30%]' },
        ]}
        rows={stackReaperTechRows}
      />

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Agent Architecture — 3 Layers</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {stackReaperArchitecture.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Build Timeline</div>
        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {stackReaperTimeline.map((item) => (
            <div
              key={item.week}
              className={`relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div>
                <div className="inline-flex rounded-[9px] bg-[#f6f8fb] px-2.5 py-1.5 text-[12px] font-medium text-[#667085]">
                  {item.week}
                </div>
                <div className="mt-5 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.summary}</p>
              </div>
              <div className="border-t border-[#e6eaf2] pt-5 text-[14px] leading-7 text-[#475467]">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit6DesignSystemSection() {
  const colors = [
    { name: 'Focus White', hex: '#F5F3FF', usage: 'Light app background', tone: 'bg-[#F5F3FF]' },
    { name: 'Surface White', hex: '#FFFFFF', usage: 'Cards and modals', tone: 'bg-white' },
    { name: 'Violet Light', hex: '#EDE9FE', usage: 'Soft rows, panels, and hover states', tone: 'bg-[#EDE9FE]' },
    { name: 'Focus Violet', hex: '#7C3AED', usage: 'Primary actions and ranked agenda states', tone: 'bg-[#7C3AED]' },
    { name: 'Saved Emerald', hex: '#10B981', usage: 'Hours saved and positive metrics', tone: 'bg-[#10B981]' },
    { name: 'Gap Amber', hex: '#F59E0B', usage: 'Gap badges and unresolved items', tone: 'bg-[#F59E0B]' },
    { name: 'Deep Ink', hex: '#0D1117', usage: 'Dark surfaces, code, and dark mode shell', tone: 'bg-[#0D1117]' },
  ];

  const typography = [
    { style: 'Display', font: 'Outfit ExtraBold', size: '38px', usage: 'PreMeet' },
    { style: 'H1', font: 'Outfit Bold', size: '26px', usage: 'Page titles' },
    { style: 'H2', font: 'Outfit SemiBold', size: '18px', usage: 'Section headers' },
    { style: 'Body', font: 'DM Sans Regular', size: '14px', usage: 'Gap reports, descriptions, dashboard body copy' },
    { style: 'Mono / Data', font: 'DM Mono', size: '12px', usage: 'Hours saved, Meeting IDs, API keys' },
    { style: 'Gap Badge', font: 'DM Sans Bold', size: '11px', usage: '3 Gaps / 1 Conflict' },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e9ddff] bg-[linear-gradient(135deg,#f7f3ff_0%,#f1ebff_56%,#ffffff_100%)] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="inline-flex rounded-[10px] bg-white px-3 py-1 text-[12px] font-semibold text-[#7C3AED] shadow-[0_4px_10px_rgba(124,58,237,0.08)]">
          Deep Focus Violet
        </div>
        <div className="mt-4 text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Intelligent, Calm, Decisive
        </div>
        <p className="mt-4 max-w-[900px] text-[16px] leading-8 text-[#475467]">
          PreMeet uses a calm violet system built for agentic productivity. The palette supports both a clean light
          workspace and a deep dark-mode shell without losing clarity around gaps, conflicts, or saved time.
        </p>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Color Palette</div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {colors.map((color) => (
            <div
              key={color.name}
              className="rounded-[24px] border border-[#e6eaf2] bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div className={`h-28 rounded-[18px] border border-[#e6eaf2] ${color.tone}`} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">{color.name}</div>
                  <div className="mt-1 font-mono text-[12px] text-[#667085]">{color.hex}</div>
                </div>
              </div>
              <p className="mt-3 text-[14px] leading-7 text-[#475467]">{color.usage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Typography</div>
        <NativeTable
          columns={[
            { key: 'style', label: 'Style', className: 'w-[18%]' },
            { key: 'font', label: 'Font', className: 'w-[28%]' },
            { key: 'size', label: 'Size', className: 'w-[16%]' },
            { key: 'usage', label: 'Usage', className: 'w-[38%]' },
          ]}
          rows={typography}
        />
      </div>

      <div className="space-y-5">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Product Surface Preview</div>
          <div className="mt-6 overflow-hidden rounded-[24px] border border-[#e9ddff] bg-[#F5F3FF] p-5">
            <div className="grid gap-4 xl:grid-cols-[200px_1fr]">
              <div className="rounded-[22px] bg-white p-4 shadow-[0_8px_16px_rgba(124,58,237,0.08)]">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]">Sidebar</div>
                <div className="mt-4 space-y-2">
                  {['Dashboard', 'Meetings', 'Agents', 'Reports', 'Settings'].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[12px] px-3 py-2 text-[14px] font-medium ${
                        index === 0 ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#475467]'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ['Hours Saved', '340h', '#10B981'],
                    ['Gap Reports', '87', '#7C3AED'],
                    ['Avg Reduction', '60%', '#F59E0B'],
                    ['Salary Value', '$34K', '#0D1117'],
                  ].map(([label, value, tone]) => (
                    <div key={label} className="rounded-[18px] bg-white p-4 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
                      <div className="text-[12px] font-medium text-[#98A2B3]">{label}</div>
                      <div className="mt-3 font-mono text-[24px] font-semibold tracking-[-0.04em]" style={{ color: tone }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[22px] bg-white p-5 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">Gap Report</div>
                    <div className="inline-flex rounded-full bg-[#FEF3C7] px-3 py-1 text-[11px] font-semibold text-[#B54708]">
                      3 Gaps
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-[16px] bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#475467]">
                      Shared Context: collapsed until needed.
                    </div>
                    <div className="rounded-[16px] border border-[#FCD34D] bg-[#FFF7E8] px-4 py-3 text-[14px] text-[#475467]">
                      Gaps list highlighted with amber badges.
                    </div>
                    <div className="rounded-[16px] border border-[#FDA29B] bg-[#FEF3F2] px-4 py-3 text-[14px] text-[#475467]">
                      Conflicts list pulled forward when facts diverge.
                    </div>
                    <div className="rounded-[16px] border border-[#DDD6FE] bg-[#F5F3FF] px-4 py-3 text-[14px] text-[#475467]">
                      Agenda ranked in violet so humans only discuss what still needs judgment.
                    </div>
                  </div>
                </div>

                <div className="rounded-[22px] bg-[#0D1117] p-5 text-white shadow-[0_10px_24px_rgba(13,17,23,0.2)]">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50">Agent status row</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      ['Alex', '#10B981'],
                      ['Mina', '#7C3AED'],
                      ['Noah', '#F59E0B'],
                    ].map(([name, tone]) => (
                      <div key={name} className="flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-[13px]">
                        <span className="inline-flex size-2.5 rounded-full" style={{ backgroundColor: tone }} />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#1f2937] bg-[#0D1117] p-7 shadow-[0_18px_38px_rgba(13,17,23,0.24)]">
          <div className="inline-flex rounded-[10px] bg-white/8 px-3 py-1 text-[12px] font-semibold text-white/70">
            Figma / v0.dev starter prompt
          </div>
          <div className="mt-5 rounded-[22px] bg-white/5 p-5">
            <pre className="whitespace-pre-wrap text-[13px] leading-7 text-[#E5E7EB]">
              <code>{`Dark-mode-capable B2B SaaS. Product: PreMeet — AI agent pre-meeting intelligence. Colors: bg #F5F3FF (light) / #0D1117 (dark), cards white, primary Focus Violet #7C3AED, saved Emerald #10B981, gap Amber #F59E0B. Layout: left sidebar (Dashboard, Meetings, Agents, Reports, Settings), main: KPI row (Hours Saved, Gap Reports, Avg Meeting Reduction, Salary Value Recovered), recent meetings list with gap badge per row. Key component: Gap Report card — Shared Context (collapsed), Gaps list (amber badge), Conflicts list (red badge), Agenda (violet, ranked). Agent status row: integration dots per user. Style: focused, intelligent, calm — like Linear + Notion hybrid. Outfit font headers, DM Sans body. Card radius 10px.`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit6PromptPackSection() {
  const promptGroups = [
    {
      title: 'Gap Detection Prompts',
      accent: 'bg-[#f5f0ff] text-[#7c3aed]',
      prompts: [
        'Given these two agent position summaries for a roadmap review, identify every factual conflict — different feature priorities, timeline discrepancies, or resource assumptions that differ between participants.',
        "Analyze these 4 agent summaries for a sales call. Identify: (1) what the account exec knows that the sales engineer doesn't, (2) what the SE knows that the AE doesn't, (3) where their assumptions about the customer differ.",
        "For this sprint planning meeting, compare the PM's position with the engineering lead's position. Surface: differing estimates, scope disagreements, dependency gaps, and blocking items one knows about that the other doesn't.",
        "Given these agent summaries, score the meeting from 1–10 for necessity. 10 = must have live discussion. 1 = could be async. Output JSON: { score, reasoning, could_be_async_if: '...' }",
      ],
    },
    {
      title: 'Report Generation Prompts',
      accent: 'bg-[#fff4ea] text-[#b54708]',
      prompts: [
        'Write a Gap Report for a 1:1 meeting between a manager and report. Focus on: open feedback threads, OKR progress discrepancies, and blockers the manager may not know about. Keep it under 300 words.',
        'Generate an investor meeting Gap Report. Shared context: financials everyone knows. Gaps: metrics the founder has that investors may not have seen. Conflicts: differing views on growth trajectory. Include 3 agenda items max.',
        "This meeting has no conflicts and only 1 gap. Generate a 'Meeting Not Recommended' note suggesting the gap be resolved via Slack thread instead, with a draft message.",
      ],
    },
    {
      title: 'Post-Meeting Write-Back Prompts',
      accent: 'bg-[#ecfbf4] text-[#067647]',
      prompts: [
        'Given this meeting transcript and the pre-meeting Gap Report, identify which gaps were resolved, which conflicts were decided, and which items remain open. Output structured JSON for tool write-back.',
        'Draft 3 Jira ticket descriptions from these meeting action items. Include: title, acceptance criteria, suggested assignee (from attendee list), priority (inferred from discussion urgency).',
        'Write a Notion meeting summary page. Sections: Decisions Made, Open Items, Next Steps. Format: table for decisions (decision, owner, date), bullet list for open items.',
      ],
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#f5f3ff] px-3 py-1 text-[12px] font-semibold text-[#7C3AED]">
            Prompt Pack
          </div>
          <div className="inline-flex rounded-[10px] bg-[#eef4ff] px-3 py-1 text-[12px] font-semibold text-[#4361ee]">
            Use-case specific
          </div>
        </div>
        <div className="mt-4 text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Gap Detection & Report Generation Prompts by Use Case
        </div>
        <p className="mt-4 max-w-[920px] text-[16px] leading-8 text-[#475467]">
          A practical prompt set for PreMeet teams. These are the exact kinds of prompts you can surface inside the
          product, reuse in ops workflows, or turn into agent actions for gap detection, report generation, and
          post-meeting write-back.
        </p>
      </div>

      <div className="space-y-5">
        {promptGroups.map((group, index) => (
          <div
            key={group.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${group.accent}`}>
                  Prompt Pack
                </div>
                <div className="mt-3 text-[26px] font-semibold tracking-[-0.04em] text-[#101828]">{group.title}</div>
              </div>
              <div
                className={`inline-flex rounded-[12px] px-3 py-2 text-[13px] font-medium ${
                  index % 3 === 0
                    ? 'bg-[#f5f0ff] text-[#7c3aed]'
                    : index % 3 === 1
                      ? 'bg-[#eef4ff] text-[#4361ee]'
                      : 'bg-[#ecfbf4] text-[#067647]'
                }`}
              >
                UI + workflow ready
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {group.prompts.map((prompt, promptIndex) => (
                <div key={prompt} className="overflow-hidden rounded-[22px] border border-[#1e293b] bg-[#0f172a]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-[#ef4444]" />
                      <span className="size-2.5 rounded-full bg-[#f59e0b]" />
                      <span className="size-2.5 rounded-full bg-[#22c55e]" />
                    </div>
                    <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-slate-400">
                      Prompt {promptIndex + 1}
                    </div>
                  </div>
                    <pre className="min-w-0 whitespace-pre-wrap break-words px-5 py-5 text-[13px] leading-7 text-slate-200">
                      <code className="block min-w-0 whitespace-pre-wrap break-words">{prompt}</code>
                    </pre>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Kit6UIKitSection() {
  const recentMeetings = [
    { title: 'Q2 Roadmap Review', attendees: 6, time: 'Today � 14:00', gaps: 3, conflicts: 1, saved: '2.4h' },
    { title: 'Enterprise Deal Sync', attendees: 4, time: 'Tomorrow � 10:30', gaps: 2, conflicts: 0, saved: '1.2h' },
    { title: 'Sprint Planning', attendees: 8, time: 'Fri � 09:00', gaps: 4, conflicts: 2, saved: '3.1h' },
  ];

  const agentRows = [
    { name: 'Aylin Demir', email: 'aylin@premeet.io', lastIndexed: '12 min ago', integrations: ['#10B981', '#10B981', '#F59E0B'] },
    { name: 'Daniel Ross', email: 'daniel@premeet.io', lastIndexed: '34 min ago', integrations: ['#10B981', '#7C3AED', '#E5E7EB'] },
    { name: 'Mina Park', email: 'mina@premeet.io', lastIndexed: '1 hr ago', integrations: ['#10B981', '#10B981', '#10B981'] },
  ];

    const componentPreviews = [
      {
        title: 'Core Cards',
        subtitle: 'Gap report, KPI, and agenda surfaces',
        tone: 'bg-[#faf7ff] border-[#eee6ff]',
        accent: 'text-[#7C3AED]',
      },
      {
        title: 'Status System',
        subtitle: 'Conflict, gap, saved, and integration states',
        tone: 'bg-[#fffaf2] border-[#f7e2bc]',
        accent: 'text-[#B54708]',
      },
      {
        title: 'Dark Mode Shell',
        subtitle: 'Deep Ink surfaces for agent-heavy workflows',
        tone: 'bg-[#f3fbf7] border-[#dcefe5]',
        accent: 'text-[#067647]',
      },
    ];

  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#f5f3ff] px-3 py-1 text-[12px] font-semibold text-[#7C3AED]">
            UI Kit
          </div>
          <div className="inline-flex rounded-[10px] bg-[#eef4ff] px-3 py-1 text-[12px] font-semibold text-[#4361ee]">
            Dashboard components
          </div>
        </div>
        <div className="mt-4 text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">
          Dashboard Components � React + Tailwind
        </div>
        <p className="mt-4 max-w-[940px] text-[16px] leading-8 text-[#475467]">
          A product-first UI kit for PreMeet: KPI cards, gap-aware meeting rows, agent status states,
          agenda surfaces, and dark-mode utilities designed for a calm decision-making workflow.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#ece7fb] bg-[linear-gradient(135deg,#fbf9ff_0%,#f6f3ff_48%,#ffffff_100%)] p-5 sm:p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Dashboard Shell Preview</div>
            <p className="mt-2 text-[15px] leading-7 text-[#667085]">
              Focused, intelligent, calm. Built like a Linear � Notion hybrid for meeting-heavy teams.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#7C3AED] shadow-[0_4px_10px_rgba(124,58,237,0.08)]">
            Light mode surface
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-[#e9e2fb] bg-[#faf8ff] p-4 sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[200px_1fr]">
            <div className="rounded-[22px] bg-white p-4 shadow-[0_8px_16px_rgba(124,58,237,0.06)]">
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]">Navigation</div>
              <div className="mt-4 space-y-2">
                {['Dashboard', 'Meetings', 'Agents', 'Reports', 'Settings'].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[12px] px-3 py-2 text-[14px] font-medium ${
                      index === 0 ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#475467]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ['Hours Saved', '340h', '#10B981'],
                    ['Gap Reports', '87', '#7C3AED'],
                    ['Avg Reduction', '60%', '#F59E0B'],
                    ['Salary Value', '$34K', '#0D1117'],
                ].map(([label, value, tone]) => (
                  <div key={label} className="rounded-[18px] bg-white p-4 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
                    <div className="text-[12px] font-medium text-[#98A2B3]">{label}</div>
                    <div className="mt-3 text-[26px] font-semibold tracking-[-0.04em]" style={{ color: tone }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[22px] bg-white p-5 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">Gap Report Card</div>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex rounded-full bg-[#FEF3C7] px-3 py-1 text-[11px] font-semibold text-[#B54708]">
                          3 Gaps
                        </div>
                      <div className="inline-flex rounded-full bg-[#FEF3F2] px-3 py-1 text-[11px] font-semibold text-[#B42318]">
                        1 Conflict
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[16px] bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#475467]">
                    Shared Context: launch scope already aligned across PM and eng.
                  </div>
                  <div className="mt-3 rounded-[16px] border border-[#FCD34D] bg-[#FFF7E8] px-4 py-3 text-[14px] text-[#475467]">
                    Gap: engineering has an integration blocker the PM has not yet seen.
                  </div>
                  <div className="mt-3 rounded-[16px] border border-[#FDA29B] bg-[#FEF3F2] px-4 py-3 text-[14px] text-[#475467]">
                    Conflict: launch date assumption differs by one full sprint.
                  </div>
                  <div className="mt-3 rounded-[16px] border border-[#DDD6FE] bg-[#F5F3FF] px-4 py-3 text-[14px] text-[#475467]">
                    Agenda: 1. dependency owner, 2. timeline reset, 3. release risk call.
                  </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF3] px-3 py-1 text-[12px] font-semibold text-[#067647]">
                        2.4h saved
                      </div>
                    <button className="rounded-[12px] bg-[#7C3AED] px-4 py-2 text-[13px] font-semibold text-white">
                      View report �
                    </button>
                  </div>
                </div>

                <div className="rounded-[22px] bg-white p-5 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
                  <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">Recent Meetings</div>
                  <div className="mt-4 space-y-3">
                      {recentMeetings.map((item) => (
                        <div key={item.title} className="rounded-[16px] border border-[#EEF2F6] bg-[#FCFDFF] p-4">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <div className="text-[15px] font-semibold text-[#101828]">{item.title}</div>
                              <div className="mt-1 text-[12px] text-[#98A2B3]">
                                {item.attendees} attendees � {item.time}
                              </div>
                          </div>
                          <div className="text-[12px] font-medium text-[#10B981]">{item.saved}</div>
                        </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <div className="inline-flex rounded-full bg-[#F5F3FF] px-3 py-1 text-[11px] font-semibold text-[#7C3AED]">
                              {item.gaps} gaps
                            </div>
                          {item.conflicts > 0 ? (
                            <div className="inline-flex rounded-full bg-[#FEF3F2] px-3 py-1 text-[11px] font-semibold text-[#B42318]">
                              {item.conflicts} conflicts
                            </div>
                          ) : (
                            <div className="inline-flex rounded-full bg-[#ECFDF3] px-3 py-1 text-[11px] font-semibold text-[#067647]">
                              No conflict
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                <div className="rounded-[22px] bg-[#0D1117] p-5 text-white shadow-[0_10px_24px_rgba(13,17,23,0.2)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50">Agent Status Row</div>
                    <div className="inline-flex rounded-full bg-white/8 px-3 py-1 text-[11px] font-semibold text-white/70">
                      Dark utility panel
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    {agentRows.map((row) => (
                      <div key={row.email} className="flex flex-col items-start gap-3 rounded-[16px] bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="text-[14px] font-semibold text-white">{row.name}</div>
                          <div className="text-[12px] text-white/50">{row.email}</div>
                        </div>
                        <div className="flex gap-2">
                          {row.integrations.map((tone, index) => (
                            <span key={`${row.email}-${index}`} className="inline-flex size-2.5 rounded-full" style={{ backgroundColor: tone }} />
                          ))}
                        </div>
                        <div className="text-[12px] text-white/50">Last indexed {row.lastIndexed}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {componentPreviews.map((card, index) => (
          <div
            key={card.title}
            className={`rounded-[28px] border p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className={`text-[22px] font-semibold tracking-[-0.04em] ${card.accent}`}>{card.title}</div>
            <div className="mt-1 text-[14px] text-[#667085]">{card.subtitle}</div>

            {index === 0 ? (
              <div className="mt-5 space-y-3">
                <div className="rounded-[18px] bg-white p-4 shadow-[0_6px_14px_rgba(15,23,42,0.04)]">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98A2B3]">Hours Saved KPI</div>
                  <div className="mt-3 text-[30px] font-semibold tracking-[-0.05em] text-[#101828]">340h</div>
                  <div className="mt-1 text-[13px] font-medium text-[#10B981]">? $34,000 salary value recovered</div>
                </div>
                <div className="rounded-[18px] bg-white p-4 shadow-[0_6px_14px_rgba(15,23,42,0.04)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[15px] font-semibold text-[#101828]">Agenda Module</div>
                    <div className="inline-flex rounded-full bg-[#F5F3FF] px-3 py-1 text-[11px] font-semibold text-[#7C3AED]">
                      Ranked
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-[14px] text-[#475467]">
                    <div>1. Resolve launch timeline conflict</div>
                    <div>2. Confirm owner for integration blocker</div>
                    <div>3. Decide release risk threshold</div>
                  </div>
                </div>
              </div>
            ) : null}

            {index === 1 ? (
              <div className="mt-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex rounded-full bg-[#F5F3FF] px-3 py-1 text-[11px] font-semibold text-[#7C3AED]">3 Gaps</div>
                  <div className="inline-flex rounded-full bg-[#FEF3F2] px-3 py-1 text-[11px] font-semibold text-[#B42318]">1 Conflict</div>
                  <div className="inline-flex rounded-full bg-[#ECFDF3] px-3 py-1 text-[11px] font-semibold text-[#067647]">2.4h saved</div>
                </div>
                <div className="rounded-[18px] bg-white p-4 shadow-[0_6px_14px_rgba(15,23,42,0.04)]">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98A2B3]">Integration states</div>
                  <div className="mt-4 flex gap-3">
                    <span className="inline-flex size-3 rounded-full bg-[#10B981]" />
                    <span className="inline-flex size-3 rounded-full bg-[#F59E0B]" />
                    <span className="inline-flex size-3 rounded-full bg-[#E5E7EB]" />
                    <span className="inline-flex size-3 rounded-full bg-[#7C3AED]" />
                  </div>
                </div>
              </div>
            ) : null}

            {index === 2 ? (
              <div className="mt-5 rounded-[22px] bg-[#0D1117] p-4 text-white shadow-[0_10px_24px_rgba(13,17,23,0.2)]">
                <div className="text-[12px] uppercase tracking-[0.08em] text-white/50">Dark mode sample</div>
                <div className="mt-4 rounded-[16px] bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[14px] font-semibold">Gap Report Ready</div>
                      <div className="text-[12px] text-white/50">Roadmap Review � 6 attendees</div>
                    </div>
                    <button className="rounded-[10px] bg-[#7C3AED] px-3 py-2 text-[12px] font-semibold text-white">
                      Open
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
function preMeetMethodClass(method: string) {
  if (method === 'GET') return 'bg-[#eef4ff] text-[#2563EB]';
  if (method === 'POST') return 'bg-[#ecfbf4] text-[#067647]';
  if (method === 'DELETE') return 'bg-[#FEF3F2] text-[#B42318]';
  return 'bg-[#f5f7fb] text-[#475467]';
}

function Kit6ApiSchemaSection() {
  const apiRows = [
    {
      method: 'POST',
      endpoint: '/integrations/connect',
      description: 'Connect an integration (OAuth callback)',
      params: '{"provider":"gmail","code":"oauth_code"}',
    },
    {
      method: 'GET',
      endpoint: '/integrations',
      description: "List user's connected integrations + status",
      params: '�',
    },
    {
      method: 'DELETE',
      endpoint: '/integrations/:provider',
      description: 'Disconnect an integration',
      params: '�',
    },
    {
      method: 'POST',
      endpoint: '/agent/index',
      description: 'Trigger manual re-index for user agent',
      params: '{"lookback_days":30}',
    },
    {
      method: 'GET',
      endpoint: '/agent/status',
      description: "Get user's agent index status + last synced",
      params: '�',
    },
    {
      method: 'POST',
      endpoint: '/meetings',
      description: 'Create meeting + trigger agent pipeline',
      params: '{"title":"...","attendees":["uuid"],"meeting_type":"roadmap_review","scheduled_at":"..."}',
    },
    {
      method: 'GET',
      endpoint: '/meetings',
      description: 'List meetings with status',
      params: '?status=ready&limit=20',
    },
    {
      method: 'GET',
      endpoint: '/meetings/:id',
      description: 'Get meeting with full analysis + gap report',
      params: '�',
    },
    {
      method: 'POST',
      endpoint: '/meetings/:id/complete',
      description: 'Mark meeting done + log actual duration',
      params: '{"actual_duration_minutes":22}',
    },
    {
      method: 'GET',
      endpoint: '/gap-reports/:meeting_id',
      description: 'Get Gap Report markdown + agenda',
      params: '�',
    },
    {
      method: 'POST',
      endpoint: '/gap-reports/:id/deliver',
      description: 'Re-deliver Gap Report via email + Slack',
      params: '�',
    },
    {
      method: 'GET',
      endpoint: '/analytics/savings',
      description: 'Hours saved + salary value + billing amount',
      params: '?period=2025-04&group_by=team',
    },
    {
      method: 'GET',
      endpoint: '/usage',
      description: 'Report count vs plan limit this month',
      params: '�',
    },
    {
      method: 'POST',
      endpoint: '/webhooks/calendar',
      description: 'Calendar push notification receiver (public)',
      params: 'Google / Outlook webhook payload',
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">API Schema</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Base URL: <span className="font-mono text-[#101828]">https://api.premeet.io/v1</span> {' '}� Auth:{' '}
          <span className="font-mono text-[#101828]">Bearer (Supabase JWT)</span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Auth model', 'Bearer token via Supabase JWT'],
          ['Primary consumer', 'Dashboard, integrations, meeting pipeline, report delivery'],
          ['Design principle', 'Thin REST layer over meetings, agent memory, and report state'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[24px] border border-[#e6eaf2] bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">{label}</div>
            <div className="mt-3 text-[16px] font-medium leading-7 text-[#101828]">{value}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[980px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2]">
              {['Method', 'Endpoint', 'Description', 'Body / Params'].map((label) => (
                <th key={label} className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {apiRows.map((row, index) => (
              <tr key={`${row.method}-${row.endpoint}`} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                <td className="px-6 py-5 align-top">
                  <span className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold ${preMeetMethodClass(row.method)}`}>
                    {row.method}
                  </span>
                </td>
                <td className="px-6 py-5 align-top font-mono text-[14px] text-[#101828]">{row.endpoint}</td>
                <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#475467]">{row.description}</td>
                <td className="px-6 py-5 align-top font-mono text-[13px] leading-7 text-[#667085]">{row.params}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Kit6DatabaseSchemaSection() {
  const tables = [
    {
      title: 'accounts',
      accent: 'bg-[#f5f0ff] text-[#7c3aed]',
      rows: [
        { column: 'id', type: 'uuid', notes: 'PK' },
        { column: 'name', type: 'text', notes: 'Company name' },
        { column: 'plan', type: 'text', notes: 'starter|growth|scale|enterprise' },
        { column: 'report_limit_per_month', type: 'int', notes: '20/null/null/null' },
        { column: 'outcome_billing_enabled', type: 'bool', notes: 'Scale+ only' },
        { column: 'stripe_ids', type: 'jsonb', notes: 'customer_id, subscription_id, meter_id' },
        { column: 'brand_settings', type: 'jsonb', notes: 'logo_url, primary_color, domain' },
      ],
    },
    {
      title: 'integrations',
      accent: 'bg-[#eef4ff] text-[#2563EB]',
      rows: [
        { column: 'id', type: 'uuid', notes: 'PK' },
        { column: 'user_id', type: 'uuid', notes: 'FK � users' },
        { column: 'provider', type: 'text', notes: 'gmail|notion|linear|jira|slack|gdrive' },
        { column: 'access_token', type: 'text', notes: 'Encrypted at rest (Supabase Vault)' },
        { column: 'refresh_token', type: 'text', notes: 'Encrypted' },
        { column: 'sync_status', type: 'text', notes: 'pending|syncing|ready|error' },
        { column: 'last_synced', type: 'timestamptz', notes: '�' },
      ],
    },
    {
      title: 'meetings',
      accent: 'bg-[#fff4ea] text-[#B54708]',
      rows: [
        { column: 'id', type: 'uuid', notes: 'PK' },
        { column: 'account_id', type: 'uuid', notes: 'FK � accounts' },
        { column: 'title', type: 'text', notes: '�' },
        { column: 'meeting_type', type: 'text', notes: 'roadmap|sales|one_on_one|sprint|general' },
        { column: 'attendee_user_ids', type: 'uuid[]', notes: 'PreMeet user IDs only' },
        { column: 'scheduled_at', type: 'timestamptz', notes: '�' },
        { column: 'actual_duration_minutes', type: 'int', notes: 'Logged after meeting' },
        { column: 'status', type: 'text', notes: 'pending|processing|ready|completed' },
      ],
    },
    {
      title: 'meeting_savings',
      accent: 'bg-[#ecfbf4] text-[#067647]',
      rows: [
        { column: 'id', type: 'uuid', notes: 'PK' },
        { column: 'meeting_id', type: 'uuid', notes: 'FK � meetings' },
        { column: 'account_id', type: 'uuid', notes: 'FK � for RLS' },
        { column: 'baseline_minutes', type: 'int', notes: 'Standard duration for meeting type' },
        { column: 'actual_minutes', type: 'int', notes: '�' },
        { column: 'person_hours_saved', type: 'numeric', notes: '(baseline-actual)/60 � attendees' },
        { column: 'salary_value_saved', type: 'numeric', notes: 'person_hours � $80' },
        { column: 'billing_amount', type: 'numeric', notes: 'person_hours � $7 (Scale+)' },
      ],
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Database Schema</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          PostgreSQL + Supabase RLS
        </p>
      </div>

      <div className="grid gap-5">
        {tables.map((table) => (
          <div
            key={table.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${table.accent}`}>
                  Table
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-[#101828]">{table.title}</div>
              </div>
              <div className="rounded-full bg-[#f6f8fb] px-4 py-2 text-[13px] font-medium text-[#667085]">
                {table.rows.length} columns
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-[24px] border border-[#e6eaf2]">
              <table className="min-w-[760px] w-full border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#e6eaf2]">
                    {['Column', 'Type', 'Notes'].map((label) => (
                      <th key={label} className="px-5 py-4 text-left text-[13px] font-medium text-[#667085]">
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, index) => (
                    <tr key={row.column} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                      <td className="px-5 py-4 align-top font-mono text-[14px] text-[#101828]">{row.column}</td>
                      <td className="px-5 py-4 align-top font-mono text-[13px] text-[#667085]">{row.type}</td>
                      <td className="px-5 py-4 align-top text-[15px] leading-7 text-[#475467]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Kit6LandingCopySection() {
  const sections = [
    {
      title: 'Hero Section',
      tone: 'bg-[#f5f0ff] text-[#7c3aed]',
      preview: 'The meeting before the meeting is finally automated.',
      items: [
        {
          label: 'The Executive',
          copy: "Headline: The meeting before the meeting is now automated.\n\nSubheadline: PreMeet agents index your team�s Slack, Docs, and Jira to find alignment gaps before you hit 'Join.' Stop syncing. Start deciding.",
        },
        {
          label: 'The Radical',
          copy: "Headline: Stop using humans for status updates.\n\nSubheadline: You don�t need a 60-minute call to read a ticket aloud. PreMeet agents compare notes across your stack and surface the only 3 things you actually need to discuss.",
        },
        {
          label: 'The Results',
          copy: 'Headline: Cut your meeting volume by 40% this week.\n\nSubheadline: Deploy personal AI agents that prep for you. They scan your data, resolve the easy stuff in the background, and hand you a Gap Report for the hard stuff.',
        },
      ],
    },
    {
      title: 'Pain Section',
      tone: 'bg-[#fff4ea] text-[#b54708]',
      preview: "You aren't paying engineers to catch up on Zoom.",
      items: [
        {
          label: 'The Math',
          copy: "Headline: You aren't paying engineers to 'catch up' on Zoom.\n\nBody: Every quick sync costs you hundreds in billable hours. 60% of that time is wasted on establishing context that already exists in your tools.",
        },
        {
          label: 'The Fatigue',
          copy: 'Headline: Death by a thousand quick syncs.\n\nBody: Your calendar is a graveyard of roadmap reviews where the first 40 minutes are spent arguing about which version of the truth is current.',
        },
        {
          label: 'The Root Cause',
          copy: "Headline: The problem isn't the meeting. It's the lack of shared context.\n\nBody: You don�t need better agendas or faster note-takers. You need everyone to arrive with the same facts. Right now, they don't.",
        },
      ],
    },
    {
      title: 'Solution Section',
      tone: 'bg-[#eef4ff] text-[#2563EB]',
      preview: 'Agents do the prep. You take the credit.',
      items: [
        {
          label: 'The Workflow',
          copy: 'Headline: Agents do the prep. You take the credit.\n\nBody: 1. Connect your stack. 2. Agents cross-reference data. 3. Get a Gap Report highlighting only the conflicts.',
        },
        {
          label: 'The Comparison',
          copy: "Headline: Like a Chief of Staff for every seat.\n\nBody: While you sleep, your agent talks to your teammate's agent. They find the friction points so you don't have to find them at 9:00 AM on a Monday.",
        },
        {
          label: 'The Output',
          copy: 'Headline: Turn 60-minute slogs into 15-minute wins.\n\nBody: PreMeet identifies what Alice knows that Bob doesn�t. We surface the Gap � the only part of the meeting that requires human intelligence.',
        },
      ],
    },
    {
      title: 'Social Proof Section',
      tone: 'bg-[#ecfbf4] text-[#067647]',
      preview: 'The ROI was a quieter Slack and faster shipping.',
      items: [
        {
          label: 'The Aha!',
          copy: '"I realized we had not had a status update meeting in three weeks. PreMeet just... handled them."\n\nContext: Director of Product, Fintech',
        },
        {
          label: 'The CFO View',
          copy: '"We reclaimed 400 engineering hours in one month. The ROI was not a graph; it was a quieter Slack and faster shipping."\n\nContext: CTO, Series C Startup',
        },
        {
          label: 'The User',
          copy: '"The Gap Report is the first thing I open every morning. It is like having a superpower for spotting project risks."\n\nContext: Lead Designer',
        },
      ],
    },
  ];

  const pricingItems = [
    {
      label: 'Risk-Free',
      headline: 'Reclaim your calendar. Free for 30 days.',
      offer: "No credit card required. If you don't delete at least 5 recurring meetings, we haven't done our job.",
    },
    {
      label: 'Performance',
      headline: 'First 20 Gap Reports are on us.',
      offer: 'Experience the 20-minute roadmap review. Connect your tools and run your first report in 5 minutes.',
    },
    {
      label: 'The Challenge',
      headline: 'The Meeting-Light Guarantee.',
      offer: "If PreMeet doesn't cut your meeting time by 30%, we'll give you a month of Pro for free. Start your first Gap Report now.",
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Landing Page Copy Alternatives</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Strategic copy options for PreMeet�s landing flow. Same structure, different angles: executive, radical,
          results-first, and ROI-led paths you can test without rewriting the whole page.
        </p>
      </div>

      <div className="grid gap-5">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${section.tone}`}>
                  Landing block
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-[#101828]">{section.title}</div>
              </div>
              <div className="rounded-full bg-[#f6f8fb] px-4 py-2 text-[13px] font-medium text-[#667085]">
                {section.items.length} alternatives
              </div>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-3">
              {section.items.map((item, optionIndex) => (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-[26px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
                >
                  <div
                    className={`p-6 ${
                      optionIndex === 0
                        ? 'bg-[linear-gradient(135deg,#eef4ff_0%,#f5f0ff_100%)]'
                        : optionIndex === 1
                          ? 'bg-[linear-gradient(135deg,#fff4ea_0%,#fdf2ff_100%)]'
                          : 'bg-[linear-gradient(135deg,#ecfbf4_0%,#eef4ff_100%)]'
                    }`}
                  >
                    <div className="inline-flex rounded-[10px] bg-white/70 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                      Option {String.fromCharCode(65 + optionIndex)}
                    </div>
                    <div className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.label}</div>
                  </div>

                  <div className="p-6">
                    <div className="rounded-[20px] bg-[#fcfdff] p-5">
                      <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Landing section preview</div>
                      <div className="mt-3 text-[30px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#101828]">
                        {section.preview}
                      </div>
                      <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-[#475467]">{item.copy}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <button className="rounded-[12px] bg-[#4361ee] px-4 py-2.5 text-[14px] font-medium text-white">
                          Preview section
                        </button>
                        <button className="rounded-[12px] border border-[#d0d5dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#101828]">
                          Save alternative
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex rounded-full bg-[#ecfbf4] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#067647]">
                Pricing / CTA
              </div>
              <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-[#101828]">Pricing & CTA Alternatives</div>
            </div>
            <div className="rounded-full bg-[#f6f8fb] px-4 py-2 text-[13px] font-medium text-[#667085]">
              3 alternatives
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {pricingItems.map((item, index) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-[26px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
              >
                <div
                  className={`p-6 ${
                    index === 0
                      ? 'bg-[linear-gradient(135deg,#eef4ff_0%,#f5f0ff_100%)]'
                      : index === 1
                        ? 'bg-[linear-gradient(135deg,#fff4ea_0%,#fdf2ff_100%)]'
                        : 'bg-[linear-gradient(135deg,#ecfbf4_0%,#eef4ff_100%)]'
                  }`}
                >
                  <div className="inline-flex rounded-[10px] bg-white/70 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                    Option {String.fromCharCode(65 + index)}
                  </div>
                  <div className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.label}</div>
                </div>
                <div className="p-6">
                  <div className="rounded-[20px] bg-[#fcfdff] p-5">
                    <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Pricing section preview</div>
                    <div className="mt-3 text-[26px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#101828]">
                      {item.headline}
                    </div>
                    <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.offer}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <button className="rounded-[12px] bg-[#4361ee] px-4 py-2.5 text-[14px] font-medium text-white">
                        Preview section
                      </button>
                      <button className="rounded-[12px] border border-[#d0d5dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#101828]">
                        Save alternative
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e9ddff] bg-[linear-gradient(135deg,#f7f3ff_0%,#f2ecff_56%,#ffffff_100%)] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Pro Tip for your Landing Page</div>
          <p className="mt-4 text-[15px] leading-8 text-[#475467]">
            Since the core magic is agents talking to agents, use a small product animation or diagram where Agent Alice
            and Agent Bob exchange data bubbles and output a single Gap Report document. That visual instantly separates
            PreMeet from standard AI note-takers like Otter or Fireflies.
          </p>
        </div>
      </div>
    </section>
  );
}

function Kit6WaitlistEmailSequenceSection() {
  const emails = [
    {
      day: 'Day 0',
      subject: "You're on the PreMeet waitlist",
      preview: 'Set expectation, explain the core value, and invite a reply about the most painful recurring meeting.',
      cta: 'Reply with your worst meeting',
      body: `Hi [First Name],

You just joined 700+ ops leads and founders who are done running meetings where the first 30 minutes are just getting everyone on the same page.

When your slot opens, you'll get: each person connects their sources in 5 minutes -> your next meeting gets a Gap Report -> you find out which meetings can be cut in half and which ones don't need to happen at all.

Quick question: what's the meeting your team dreads most every week? Reply and I'll tell you what a PreMeet Gap Report would look like for that meeting.

� [Founder Name], PreMeet`,
    },
    {
      day: 'Day 3',
      subject: 'The real cost of your next all-hands',
      preview: 'Make the meeting cost visible in salary terms and reframe the product around recovered time.',
      cta: 'See an all-hands Gap Report',
      body: `Let's say your all-hands has 25 people. Average fully-loaded cost: $80/hr per person.

1-hour meeting: $2,000 in salary time.
If 50% is context-setting (industry average): $1,000 wasted.
12 all-hands per year: $12,000 in wasted synchronization time � from one meeting type.

PreMeet Growth plan: $199/mo = $2,388/yr.
Break-even: 2.4 meetings. Everything after that is pure recovery.

[See what a Gap Report for an all-hands looks like ->]`,
    },
    {
      day: 'Day 7',
      subject: "Why the problem isn't bad agendas",
      preview: 'Differentiate PreMeet from note-takers and agenda tools by naming the real issue: information asymmetry.',
      cta: 'See a real Gap Report',
      body: `Every "meeting productivity" tool focuses on agendas, note-taking, or recording.

None of them fix the real problem: people show up without knowing what other people know.

Agendas tell you the topics. They don't tell you:
� That Alice's email thread revised the Q2 target everyone else missed
� That Bob's Linear tickets reveal a dependency the PM didn't know existed
� That Carol's Slack thread already resolved 3 of the 5 agenda items

PreMeet doesn't fix agendas. It fixes the information asymmetry that makes agendas necessary.

[See a real Gap Report ->]`,
    },
    {
      day: 'Day 11',
      subject: 'One question before your slot opens',
      preview: 'Segment the user by meeting pain pattern so onboarding can match the real problem.',
      cta: 'Reply with a letter',
      body: `[First Name] � rolling out accounts this week. Quick question:

Which of these best describes your team's meeting problem?
a) Too many meetings � calendar is always full
b) Meetings are too long � always go over time
c) Meetings don't produce decisions � lots of discussion, little action
d) Preparation is broken � people show up without context

Reply with a letter. I'll configure PreMeet for your specific pattern when you log in.`,
    },
    {
      day: 'Day 14',
      subject: 'Your PreMeet account is ready',
      preview: 'Move them into setup and explain the first activation moment clearly.',
      cta: 'Connect your sources',
      body: `[First Name] � you're in.

[Connect Your Sources and Run Your First Gap Report ->]

Start here: each person on your team connects Gmail and Notion (takes 5 minutes each). Then create a meeting � pick your next roadmap review or 1:1.

PreMeet will run agent analysis and deliver your Gap Report 30 minutes before the meeting. When you walk in knowing exactly what needs to be resolved � and nothing else � that's the moment it clicks.

Questions? Reply here � same day.

� [Founder Name], PreMeet`,
    },
  ];

  return (
    <section className="mt-10 space-y-5">
      {emails.map((email, index) => (
        <div
          key={email.subject}
          className="rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e6eaf2] px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                Email {index + 1}
              </div>
              <div className="text-[14px] font-medium text-[#4361ee]">{email.day}</div>
            </div>
            <div className="rounded-full bg-[#eef7ff] px-3 py-1 text-[12px] font-medium text-[#4361ee]">
              Waitlist sequence
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="border-b border-[#e6eaf2] bg-[#fcfdff] px-6 py-6 lg:border-r lg:border-b-0">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Compose</div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">From</div>
                  <div className="mt-1 text-[14px] text-[#101828]">founder@premeet.io</div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">To</div>
                  <div className="mt-1 text-[14px] text-[#101828]">[First Name] &lt;waitlist@company.com&gt;</div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Goal</div>
                  <div className="mt-1 text-[14px] leading-7 text-[#667085]">{email.preview}</div>
                </div>
              </div>
            </div>

            <div className="px-6 py-6">
              <div className="rounded-[20px] border border-[#e6eaf2] bg-white">
                <div className="border-b border-[#e6eaf2] px-5 py-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Subject</div>
                  <div className="mt-1 text-[18px] font-medium text-[#101828]">{email.subject}</div>
                </div>
                <div className="px-5 py-5">
                  <div className="whitespace-pre-line text-[15px] leading-8 text-[#475467]">{email.body}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button className="rounded-[12px] bg-[#4361ee] px-4 py-2.5 text-[14px] font-medium text-white">
                      {email.cta}
                    </button>
                    <button className="rounded-[12px] border border-[#d0d5dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#101828]">
                      Save draft
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Kit6BrandingKitSection() {
  const brandVoice = [
    {
      title: 'Precise',
      detail: 'Every claim needs a number behind it. Say 60% shorter meetings, 340 hours saved, 18 minutes needed. Avoid vague productivity language.',
      tone: 'bg-[#eef4ff] text-[#2563EB]',
      icon: '01',
    },
    {
      title: 'Agent-forward',
      detail: 'Humanize the agent without making it theatrical. The work is real, the drama is unnecessary.',
      tone: 'bg-[#f5f0ff] text-[#7C3AED]',
      icon: '02',
    },
    {
      title: 'Outcome-obsessed',
      detail: 'The Gap Report is never the destination. The shorter meeting, recovered hours, and better decision are.',
      tone: 'bg-[#ecfbf4] text-[#067647]',
      icon: '03',
    },
    {
      title: 'Calm confidence',
      detail: 'PreMeet does not promise to eliminate meetings. It promises to make them worth showing up to.',
      tone: 'bg-[#fff4ea] text-[#B54708]',
      icon: '04',
    },
  ];

  const logoRows = [
    {
      element: 'Symbol',
      specification:
        'Two overlapping chat bubbles � one for each agent in conversation � with a checkmark in the intersection. Focus Violet (#7C3AED) on white. Communicates agent-to-agent comparison, resolution, and clarity.',
    },
    {
      element: 'Wordmark',
      specification:
        "PREMEET � Outfit ExtraBold, all caps. 'PRE' in Deep Ink (#0D1117), 'MEET' in Focus Violet (#7C3AED). The separation marks the product boundary.",
    },
    {
      element: 'Gap Badge',
      specification:
        'Pill badge: "3 Gaps � 1 Conflict" � violet light background, violet text. Used in the UI to communicate meeting complexity before the report is opened.',
    },
    {
      element: 'Dark variant',
      specification:
        "White 'PRE', Violet 'MEET' on Deep Ink (#0D1117) for dark backgrounds, Slack notifications, and email headers.",
    },
    {
      element: 'Minimum size',
      specification: 'Wordmark: 120px wide. Symbol: 20px.',
    },
  ];

  const languageRows = [
    {
      aspect: 'Time Savings',
      do: 'Your 60-minute meeting took 22 minutes',
      dont: 'Dramatically reduce meeting length',
    },
    {
      aspect: 'Agent Work',
      do: 'Agents compared notes before you arrived',
      dont: 'AI-powered meeting intelligence platform',
    },
    {
      aspect: 'Meeting Prep',
      do: 'Show up for the final 12 minutes of decisions',
      dont: 'Prepare more effectively for your next sync',
    },
    {
      aspect: 'Conflict Resolution',
      do: "Your agent found a $5k discrepancy between Slack and Notion",
      dont: 'Automated detection of project inconsistencies',
    },
    {
      aspect: 'Product Purpose',
      do: 'Earn your meeting',
      dont: 'Optimize your corporate communication',
    },
    {
      aspect: 'Value Prop',
      do: 'The first 40 minutes of this meeting already happened in the Gap Report',
      dont: 'Next-generation meeting management software',
    },
    {
      aspect: 'The Why',
      do: 'Spend $120k on engineering, not on status updates',
      dont: 'High-level productivity for enterprise teams',
    },
    {
      aspect: 'Onboarding',
      do: 'Connect Slack. Run a Gap Report. See the 3 things that matter.',
      dont: 'Experience the power of our multi-platform integration.',
    },
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Brand Name</div>
          <div className="mt-6 text-[48px] font-semibold tracking-[-0.07em]">
            <span className="text-[#0D1117]">PRE</span>
            <span className="text-[#7C3AED]">MEET</span>
          </div>
          <div className="mt-5 space-y-3 text-[15px] leading-8 text-[#475467]">
            <p>
              <strong className="text-[#101828]">Pre</strong> means before. The entire product lives in the 30 minutes
              before a meeting starts � the only moment where meeting quality can still be changed.
            </p>
            <p>
              <strong className="text-[#101828]">Meet</strong> is the thing everyone is trying to make better. PreMeet
              does not avoid meetings � it earns them by making them the right format for live decision-making.
            </p>
            <p>
              <strong className="text-[#101828]">Together</strong> the name becomes the tool that happens before the
              meeting so the meeting can be what it should be: clear, short, and worth attending.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Domain target</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">premeet.io / premeet.co</div>
            </div>
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Tagline</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">Agents sync. You decide.</div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Brand Voice</div>
          <div className="mt-6 grid gap-4">
            {brandVoice.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-[12px] text-[14px] font-semibold ${item.tone}`}>
                    {item.icon}
                  </div>
                  <div className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">{item.title}</div>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Logo Specification</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Element</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Specification</th>
              </tr>
            </thead>
            <tbody>
              {logoRows.map((row, index) => (
                <tr key={row.element} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                  <td className="px-6 py-6 text-[15px] font-semibold text-[#101828]">{row.element}</td>
                  <td className="px-6 py-6 text-[15px] leading-7 text-[#667085]">{row.specification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Brand Voice: Do & Don't Guide</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[860px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Aspect</th>
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#067647]">DO SAY</th>
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#d92d20]">DON'T SAY</th>
              </tr>
            </thead>
            <tbody>
              {languageRows.map((row, index) => (
                <tr key={row.aspect} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                  <td className="px-6 py-6 text-[15px] font-semibold text-[#101828]">{row.aspect}</td>
                  <td className="px-6 py-6 text-[15px] leading-7 text-[#101828]">{row.do}</td>
                  <td className="px-6 py-6 text-[15px] leading-7 text-[#667085]">{row.dont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const preMeetLaunchChecklistGroups = [
  {
    title: 'Technical Readiness',
    tone: 'bg-[#ede9fe] text-[#6d28d9]',
    items: [
      'Gmail OAuth integration: read-only access, thread retrieval tested with 10 real accounts',
      'Notion API: page search + content extraction tested with diverse workspace structures',
      'Linear API: issue retrieval, comment extraction, assignee mapping tested',
      'Slack API: channel message search, DM context extraction (user-consented) tested',
      'LangGraph agent pipeline: parallel agent runs + comparison pass tested for 5-person meeting',
      "pgvector indexing: per-user isolation confirmed via RLS � user A cannot retrieve user B's memories",
      'Gap Report generation: tested for 20 different meeting type + attendee combinations � no hallucinations',
      'Gap Report delivery: email (Resend) + Slack DM delivered correctly, 30 min before meeting',
      'Hours Saved calculator: baseline vs. actual tracked correctly, Stripe Meter events firing',
      'Stripe billing: all four plans + outcome-based meter billing tested end-to-end',
    ],
  },
  {
    title: 'Legal & Trust',
    tone: 'bg-[#ecfdf3] text-[#067647]',
    items: [
      "Privacy policy: clearly explains what each integration reads, how it's stored, retention period",
      'Data processing agreement: GDPR/CCPA compliant DPA available for download',
      'Integration consent: users explicitly grant access per-integration, can revoke at any time',
      'Agent memory encryption: all indexed content encrypted at rest (Supabase Vault)',
      'GDPR right to erasure: user can delete all their agent memories and integration data',
      'RLS audited: no cross-tenant data access possible under any query pattern',
    ],
  },
  {
    title: 'Marketing & Launch',
    tone: 'bg-[#fff4e5] text-[#b54708]',
    items: [
      'Landing page live with all copy from Section 15',
      'Waitlist email sequence live in Loops.so (5 emails from Section 16)',
      'Product Hunt assets: tagline, description, 5 screenshots, 90-second demo video showing real Gap Report',
      'Notion integration marketplace listing submitted',
      'Slack App Directory listing submitted',
      '10 beta Gap Reports generated from real meetings for demo and website',
      'ROI calculator: "How much is your meeting calendar costing?" landing page tool',
    ],
  },
  {
    title: 'Onboarding & Activation',
    tone: 'bg-[#eef4ff] text-[#175cd3]',
    items: [
      'Day 1 email: triggers after first integration connected (not just signup)',
      'Onboarding checklist: 3 steps (Connect Sources � Create Meeting � Receive Gap Report)',
      'Empty state: "Connect Gmail and Notion to give your agent its first context"',
      `Day 5 no-activation email: "Your agent is connected but hasn't run yet � here's a 2-minute setup guide"`,
      'First Gap Report celebration: in-app moment + "Share this with your team" CTA',
      'Hours Saved milestone emails: at 10h, 50h, 100h saved � shareable for team buy-in',
    ],
  },
] as const;

function Kit6LaunchChecklistSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#101828]">Launch Checklist</div>
        <p className="mt-3 max-w-[760px] text-[15px] leading-8 text-[#667085]">
          Pre-launch and go-live readiness for PreMeet across integrations, legal trust, launch assets, and activation
          flow.
        </p>
      </div>

      <div className="grid gap-5">
        {preMeetLaunchChecklistGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex items-center gap-3">
              <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${group.tone}`}>
                Checklist
              </div>
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{group.title}</div>
            </div>

            <div className="mt-6 grid gap-3">
              {group.items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] px-5 py-4"
                >
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-[#f6f8fb] text-[12px] font-semibold text-[#667085]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-[16px] text-[#16a34a]">�</span>
                    <div className="text-[15px] leading-8 text-[#475467]">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const preMeetDpaSections = [
  {
    number: '1',
    title: 'Data Categories',
    body: `PreMeet accesses: (a) Email metadata and thread summaries via Gmail/Outlook OAuth � read-only, no email sending. (b) Document content via Notion/Confluence/Google Drive OAuth � read-only. (c) Project ticket titles, descriptions, assignees via Jira/Linear/Asana � read-only. (d) Slack/Teams message content from channels users explicitly authorize. PreMeet never accesses payment information, HR records, or data outside explicitly granted OAuth scopes.`,
  },
  {
    number: '2',
    title: 'Data Security',
    body: `All OAuth tokens are encrypted at rest using Supabase Vault. Agent memory vectors are stored with Row Level Security, so cross-user access is not possible. Data is processed on EU or US servers per customer preference. Gap Reports contain only synthesized insights � raw source content is never stored in Gap Reports.`,
  },
  {
    number: '3',
    title: 'Employee Consent',
    body: `Each individual user grants integration access for their own account only. No administrator can grant access to an employee's personal email or documents without that employee's explicit OAuth consent. Employees can revoke access and delete their agent memory at any time from account settings.`,
  },
  {
    number: '4',
    title: 'Data Retention',
    body: `Agent memory vectors are retained while an integration is active plus 30 days after disconnection. Gap Reports are retained for 12 months or until account deletion. Meeting savings data is retained for the billing period plus 90 days. Users can request immediate deletion of all data, processed within 30 days.`,
  },
  {
    number: '5',
    title: 'Breach Notification',
    body: `PreMeet will notify the Data Controller within 72 hours of discovering a data breach, including the nature of the breach, affected data categories, estimated number of individuals impacted, and remediation measures already taken.`,
  },
  {
    number: '6',
    title: 'Applicable Law',
    body: `EU customers: GDPR (EU 2016/679). California customers: CCPA. UK customers: UK GDPR. Turkish customers: KVKK (Law No. 6698).`,
  },
] as const;

const preMeetConsentRows = [
  {
    field: 'Form Title',
    content: 'PreMeet Agent Authorization � Your Personal Agent',
  },
  {
    field: 'Introduction',
    content:
      'PreMeet will create a personal AI agent connected to your accounts. Your agent scans your sources to help prepare for meetings you attend. Only you control which integrations are connected. Your data is never shared with other users � only synthesized insights appear in shared Gap Reports.',
  },
  {
    field: 'What your agent accesses',
    content:
      'Your Gmail inbox (read-only) � Your Notion workspace (read-only) � Your Linear/Jira tickets (read-only) � Your authorized Slack channels (read-only)',
  },
  {
    field: 'What your agent does NOT access',
    content:
      "Your direct messages (unless explicitly authorized) � Your personal accounts (only work accounts) � Any source you don't explicitly connect",
  },
  {
    field: 'Consent checkboxes',
    content:
      '? I authorize PreMeet to index my connected accounts to prepare Gap Reports for my meetings\n? I understand I can revoke any integration at any time from my settings\n? I understand that synthesized insights (not raw content) will appear in Gap Reports shared with meeting attendees',
  },
  {
    field: 'Legal note',
    content:
      'This consent was digitally signed with timestamp and IP address and is stored securely in PreMeet systems. To revoke: settings@premeet.io',
  },
] as const;

function Kit6PrivacyDataAgreementSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[32px] border border-[#dfe4ea] bg-[linear-gradient(180deg,#fffefb_0%,#ffffff_100%)] shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
        <div className="border-b border-[#e6eaf2] px-8 py-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Legal Agreement</div>
              <div className="mt-3 max-w-[860px] text-[32px] font-semibold tracking-[-0.05em] text-[#101828]">
                Privacy &amp; Data Agreement
              </div>
              <p className="mt-4 max-w-[900px] text-[15px] leading-8 text-[#667085]">
                Two agreements define how PreMeet handles team data: the customer Data Processing Agreement and the
                employee agent consent flow shown during onboarding before any integration is connected.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e6eaf2] bg-[#fcfdff] px-5 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Last Updated</div>
              <div className="mt-2 text-[15px] font-medium text-[#101828]">April 6, 2026</div>
              <div className="mt-4 text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Product</div>
              <div className="mt-2 text-[15px] font-medium text-[#101828]">PREMEET � premeet.io</div>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)]">
            <div className="space-y-0">
              <div className="py-1">
                <div className="inline-flex rounded-full bg-[#ede9fe] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6d28d9]">
                  Agreement 1
                </div>
                <div className="mt-3 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
                  Customer Data Processing Agreement
                </div>
                <p className="mt-3 text-[15px] leading-8 text-[#667085]">
                  This Data Processing Agreement is entered into between PreMeet as Data Processor and the customer
                  organization as Data Controller for agent-based meeting intelligence services.
                </p>
              </div>

              {preMeetDpaSections.map((item, index) => (
                <div key={item.number} className={`py-7 ${index === 0 ? '' : 'border-t border-[#eceff4]'}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d0d5dd] bg-white text-[13px] font-semibold text-[#344054]">
                      {item.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#98a2b3]">Section {item.number}</div>
                      <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
                      <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t border-[#eceff4] py-7">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#98a2b3]">Agreement 2</div>
                <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">
                  Employee Agent Consent Form
                </div>
                <p className="mt-3 text-[15px] leading-8 text-[#667085]">
                  Shown to each employee during onboarding before connecting any integration. Digital signature records
                  checkbox state, timestamp, and IP immutably.
                </p>
                <div className="mt-5 overflow-x-auto rounded-[24px] border border-[#e6eaf2] bg-white">
                  <table className="min-w-[640px] w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e6eaf2]">
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Field</th>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Content</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preMeetConsentRows.map((row, index) => (
                        <tr key={row.field} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                          <td className="px-5 py-5 align-top text-[15px] font-medium text-[#101828]">{row.field}</td>
                          <td className="px-5 py-5 text-[15px] leading-7 whitespace-pre-line text-[#667085]">{row.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Agreement Type</div>
                <div className="mt-2 text-[16px] font-medium text-[#101828]">Customer DPA + Employee Consent</div>
              </div>
              <div className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Primary Systems</div>
                <div className="mt-3 space-y-2 text-[15px] leading-7 text-[#475467]">
                  <div>Gmail / Outlook OAuth</div>
                  <div>Notion / Confluence / Drive</div>
                  <div>Slack / Teams Access</div>
                  <div>Supabase Vault</div>
                  <div>Gap Report Synthesis</div>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#d7f0e2] bg-[#f4fbf7] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#067647]">User Right to Delete</div>
                <div className="mt-3 text-[15px] leading-8 text-[#475467]">
                  Employees can revoke integrations and request deletion of agent memory. Customer deletion requests are
                  processed within 30 days.
                </div>
              </div>
              <div className="rounded-[24px] border border-[#e6eaf2] bg-white p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Contact</div>
                <div className="mt-2 text-[16px] font-medium text-[#101828]">settings@premeet.io</div>
                <div className="mt-3 text-[14px] leading-7 text-[#667085]">
                  For GDPR / CCPA / KVKK rights requests, consent withdrawal, or retention questions.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

const preMeetAbFrameworkRows = [
  {
    rule: 'Minimum sample size',
    detail: 'At least 200 unique visitors per variant or a 95% confidence interval.',
  },
  {
    rule: 'Test duration',
    detail: 'Minimum 2 weeks so weekly traffic patterns are reflected in the result.',
  },
  {
    rule: 'Tool',
    detail: 'PostHog Feature Flags, already available in the stack at zero extra cost.',
  },
  {
    rule: 'Decision criteria',
    detail: 'Focus on a single metric and target p-value < 0.05.',
  },
  {
    rule: 'Rollout',
    detail: 'Winning variant rolls out to 100% and the result is documented in the growth log.',
  },
] as const;

const preMeetAbSchedule = [
  {
    timeline: 'Weeks 1-2',
    test: 'Test 02 � Onboarding: Connection trigger timing',
    reason: 'Critical for activation',
  },
  {
    timeline: 'Weeks 3-4',
    test: 'Test 01 � Landing: Hero headline',
    reason: 'High traffic impact',
  },
  {
    timeline: 'Weeks 5-6',
    test: 'Test 07 � Growth: Invite flow trigger',
    reason: 'Viral loop optimization',
  },
  {
    timeline: 'Weeks 7-8',
    test: 'Test 03 � Product: Gap Report delivery window',
    reason: 'Retention impact',
  },
  {
    timeline: 'Weeks 9-10',
    test: 'Test 04 � Dashboard: Salary value vs. Hours',
    reason: 'Upgrade conversion',
  },
  {
    timeline: 'Weeks 11-12',
    test: 'Test 06 � Pricing: Plan anchor order',
    reason: 'ARPU optimization',
  },
] as const;

const preMeetAbScenarioCards = [
  {
    id: 'Test 01',
    title: 'Landing Page � Hero Headline',
    hypothesis:
      'A headline focusing on a specific time-saving preparation claim converts better than a broad benefit statement.',
    control: 'Agents sync. You decide.',
    test: 'Your next meeting is 60% preparation. PreMeet handles that part.',
    metric: 'CTA click rate + signup conversion',
    impact: '+20-35%',
  },
  {
    id: 'Test 02',
    title: 'Onboarding � Connection Trigger',
    hypothesis:
      'Prompting the primary integration immediately after signup increases the day-1 activation rate.',
    control: 'Dashboard -> "Connect your first integration" as a suggested next step.',
    test: 'Signup -> Immediate full-screen "Connect Gmail to activate your agent."',
    metric: 'First integration connected within Day 1',
    impact: '+30-45%',
  },
  {
    id: 'Test 03',
    title: 'Product � Gap Report Delivery Timing',
    hypothesis:
      'Delivering the Gap Report earlier allows more time for async resolution, reducing meeting duration further.',
    control: 'Gap Report delivered 30 minutes before meeting.',
    test: 'Gap Report delivered 2 hours before meeting.',
    metric: 'Thumbs up rate on Gap Report + actual meeting duration reduction',
    impact: '+15-25% satisfaction',
  },
  {
    id: 'Test 04',
    title: 'Dashboard � Primary KPI Framing',
    hypothesis:
      'Framing savings in terms of "Salary Value Recovered" creates more urgency for upgrades than "Hours Saved."',
    control: 'Primary KPI: "Hours Saved: 340h"',
    test: 'Primary KPI: "$34,000 salary value recovered" (with hours as sub-stat).',
    metric: 'Upgrade rate from Growth to Scale among CFO/COO accounts',
    impact: '+20-35%',
  },
  {
    id: 'Test 05',
    title: 'Product � Meeting Necessity Score',
    hypothesis:
      'Actively suggesting a meeting cancelation for low-complexity syncs increases long-term product stickiness.',
    control: 'Gap Report always generated regardless of meeting complexity.',
    test: 'Low-complexity meetings get "Meeting Not Recommended � async suggested instead" message.',
    metric: 'NPS score + 90-day retention rate',
    impact: '+40% NPS',
  },
  {
    id: 'Test 06',
    title: 'Pricing Page � Plan Anchor',
    hypothesis:
      'Presenting the Scale plan first increases the selection rate of the mid-tier Growth plan.',
    control: 'Starter -> Growth -> Scale -> Enterprise (ascending)',
    test: 'Scale -> Growth -> Starter -> Enterprise (descending)',
    metric: 'Growth plan selection rate',
    impact: '+15-20%',
  },
  {
    id: 'Test 07',
    title: 'Viral Loop � Invite Flow Trigger',
    hypothesis:
      'Prompting team invites before the first meeting ensures the Gap Report has maximum cross-functional data.',
    control: 'Invite team prompt shown after first Gap Report is received.',
    test: 'Invite prompt shown before first meeting: "PreMeet needs your attendees to connect � invite them now."',
    metric: 'Team members connected within 7 days of account creation',
    impact: '+35-50%',
  },
  {
    id: 'Test 08',
    title: 'Conversion � Upgrade Prompt Copy',
    hypothesis:
      'Loss aversion and value realization copy converts better than a simple limit notification.',
    control: `You've used 18 of 20 free Gap Reports. Upgrade for unlimited.`,
    test: `2 Gap Reports left. Your team has saved 12h so far � upgrade to keep going.`,
    metric: 'Free-to-paid conversion rate at limit',
    impact: '+20-30%',
  },
] as const;

function Kit6AbTestingSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">A/B Test Scenarios</div>
        <p className="mt-3 max-w-[980px] text-[16px] leading-8 text-[#667085]">
          Priority growth test scenarios for PREMEET. Each test includes a hypothesis, Variant A, Variant B, success
          metric, and estimated impact. Tests are implemented via PostHog Feature Flags, already available in the stack
          at zero additional cost.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Test execution framework</div>
        <NativeTable
          columns={[
            { key: 'rule', label: 'Rule', className: 'w-[28%]' },
            { key: 'detail', label: 'Detail', className: 'w-[72%]' },
          ]}
          rows={[...preMeetAbFrameworkRows]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Test schedule � first 90 days</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {preMeetAbSchedule.map((item, index) => (
            <div
              key={item.timeline + item.test}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div
                className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${
                  index % 3 === 0 ? 'bg-[#eefec8]' : index % 3 === 1 ? 'bg-[#e6f3ff]' : 'bg-[#ffe2c5]'
                }`}
              >
                {item.timeline}
              </div>
              <div className="mt-4 text-[21px] font-semibold tracking-[-0.04em] text-[#101828]">{item.test}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Test scenarios</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {preMeetAbScenarioCards.map((item, index) => (
            <div
              key={item.id}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                  {item.id}
                </div>
                <div
                  className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${
                    index % 4 === 0
                      ? 'bg-[#eefec8]'
                      : index % 4 === 1
                        ? 'bg-[#ffe2c5]'
                        : index % 4 === 2
                          ? 'bg-[#e6f3ff]'
                          : 'bg-[#f3e8ff]'
                  }`}
                >
                  Experiment card
                </div>
              </div>

              <div className="mt-4 text-[24px] font-semibold tracking-[-0.05em] text-[#101828]">{item.title}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.hypothesis}</p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Variant A � Control</div>
                  <div className="mt-2 text-[15px] leading-7 text-[#475467]">{item.control}</div>
                </div>
                <div className="rounded-[18px] border border-[#dce7ff] bg-[#f6f9ff] px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Variant B � Test</div>
                  <div className="mt-2 text-[15px] leading-7 text-[#101828]">{item.test}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="rounded-full bg-[#f6f8fb] px-3 py-1.5 text-[13px] font-medium text-[#667085]">
                  Success metric: {item.metric}
                </div>
                <div className="rounded-full bg-[#ecfbf4] px-3 py-1.5 text-[13px] font-medium text-[#067647]">
                  Estimated impact: {item.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
          PostHog feature flag � example implementation
        </div>
        <div className="mt-5 overflow-x-auto rounded-[20px] bg-[#0f172a] p-5">
          <pre className="min-w-[680px] whitespace-pre-wrap text-[13px] leading-7 text-[#e2e8f0]">{`// components/Hero.tsx
const { isFeatureEnabled } = useFeatureFlagEnabled('hero-headline-prep-v1')

const headline = isFeatureEnabled
  ? "Your next meeting is 60% preparation. PreMeet handles that part."
  : "Agents sync. You decide."

posthog.capture('hero_viewed', {
  variant: isFeatureEnabled ? 'v2_prep_claim' : 'v1_benefit_short'
})`}</pre>
        </div>
      </div>
    </section>
  );
}

const preMeetCostStage1Rows = [
  { service: 'Vercel', plan: 'Hobby', cost: '$0', notes: 'Preview deploys, serverless free tier' },
  { service: 'Supabase', plan: 'Free', cost: '$0', notes: '500 MB DB, 1 GB storage, pgvector included' },
  { service: 'Modal (LangGraph)', plan: 'Free tier', cost: '$0', notes: '$30 free compute credits/mo � enough for ~300 agent runs' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$15�40/mo', notes: '~500 Gap Reports @ $0.03�0.08 per report (Sonnet)' },
  { service: 'OpenAI Embeddings', plan: 'Pay per use', cost: '~$5�15/mo', notes: 'text-embedding-3-small: $0.02/1M tokens' },
  { service: 'Resend', plan: 'Free tier', cost: '$0', notes: '3,000 emails/mo � sufficient for MVP' },
  { service: 'Inngest', plan: 'Free tier', cost: '$0', notes: '1M events/mo free' },
  { service: 'Stripe', plan: '2.9% + 30�', cost: 'Revenue-based', notes: 'Only cost when revenue arrives' },
  { service: 'Domain (.io)', plan: 'One-time', cost: '~$40/yr', notes: 'premeet.io or alternative' },
] as const;

const preMeetCostStage2Rows = [
  { service: 'Vercel', plan: 'Pro', cost: '$20/mo', notes: 'Bandwidth + unlimited deploys' },
  { service: 'Supabase', plan: 'Pro', cost: '$25/mo', notes: '8 GB DB, daily backups, pgvector at scale' },
  { service: 'Modal', plan: 'Pay per use', cost: '~$80�200/mo', notes: '~5,000 agent runs/mo at $0.016�0.04/run' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$100�300/mo', notes: '10,000+ Gap Reports, batch pricing' },
  { service: 'OpenAI Embeddings', plan: 'Pay per use', cost: '~$30�80/mo', notes: 'Higher index volume' },
  { service: 'Resend', plan: 'Pro', cost: '$20/mo', notes: '50K emails/mo' },
  { service: 'Inngest', plan: 'Pro', cost: '$25/mo', notes: 'High-volume background jobs' },
  { service: 'PostHog', plan: 'Pay per use', cost: '~$20/mo', notes: '~5M events/mo' },
] as const;

const preMeetCostStage3Rows = [
  { service: 'Vercel', plan: 'Pro / Enterprise', cost: '$20�400/mo', notes: 'Bandwidth overage watch' },
  { service: 'Supabase', plan: 'Pro + Add-ons', cost: '$25�200/mo', notes: 'Read replicas, PITR backup at scale' },
  { service: 'Modal', plan: 'Enterprise', cost: '$500�1,500/mo', notes: 'Reserved compute for agent runs SLA' },
  { service: 'Claude API', plan: 'Batch API', cost: '$400�1,200/mo', notes: '50K+ Gap Reports, volume discount' },
  { service: 'Inngest', plan: 'Enterprise', cost: '$150/mo', notes: 'High-concurrency agent orchestration' },
  { service: 'PostHog', plan: 'Scale', cost: '$150/mo', notes: '20M+ events, full session recording' },
] as const;

const preMeetCostRevenueRows = [
  { stage: '0�10 customers', infra: '$20�55/mo', mrr: '$0�$1,990/mo', ratio: '<5% (pre-revenue)' },
  { stage: '10�50 customers', infra: '$55�150/mo', mrr: '$1,990�$9,950/mo', ratio: '~1.5�3%' },
  { stage: '50�200 customers', infra: '$150�350/mo', mrr: '$9,950�$39,800/mo', ratio: '~1%' },
  { stage: '200�500 customers', infra: '$350�700/mo', mrr: '$39,800�$99,500/mo', ratio: '<1%' },
  { stage: '500+ customers', infra: '$700�3,500/mo', mrr: '$99,500+/mo', ratio: '~1�2%' },
] as const;

function Kit6TechStackCostSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Tech Stack Cost Model</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Realistic cost ranges across MVP, growth, and scale for PREMEET. The model shows where infra stays lean and
          where agent-compute and LLM usage become the main variable.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Stage 1 � MVP (0 � first 10 customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Note', className: 'w-[44%]' },
          ]}
          rows={[...preMeetCostStage1Rows]}
        />
        <div className="rounded-[20px] border border-[#dce7ff] bg-[#f6f9ff] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">MVP Monthly Total:</strong> $20�$55/mo.
          <br />
          <strong className="text-[#101828]">Key variable:</strong> LLM costs scale with usage.
          <br />
          <strong className="text-[#101828]">Watch:</strong> Supabase inactivity pause risk � upgrade to Pro ($25/mo)
          before first paying customer.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Stage 2 � Growth (100�500 customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Note', className: 'w-[44%]' },
          ]}
          rows={[...preMeetCostStage2Rows]}
        />
        <div className="rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Growth Monthly Total:</strong> $320�$690/mo.
          <br />
          <strong className="text-[#101828]">Revenue check:</strong> 300 customers � $199 avg = $59,700 MRR � infra
          ratio &lt;1.2%.
          <br />
          <strong className="text-[#101828]">Optimization:</strong> LLM cost is the largest variable � reduce with
          caching and batching.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Stage 3 � Scale (500�2,000 customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Note', className: 'w-[44%]' },
          ]}
          rows={[...preMeetCostStage3Rows]}
        />
        <div className="rounded-[20px] border border-[#f4c68f] bg-[#fff7f0] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Scale Monthly Total:</strong> ~$1,300�$3,500/mo.
          <br />
          <strong className="text-[#101828]">Revenue check:</strong> 1,000 customers � $199 avg = $199,000 MRR �
          infra ratio ~1.5%.
          <br />
          <strong className="text-[#101828]">Critical watch:</strong> Modal compute cost scales with agent run volume �
          optimize indexing schedules and caching.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Cost / Revenue Ratio Summary</div>
        <NativeTable
          columns={[
            { key: 'stage', label: 'Stage', className: 'w-[30%]' },
            { key: 'infra', label: 'Infra Cost', className: 'w-[20%]' },
            { key: 'mrr', label: 'Estimated MRR', className: 'w-[25%]' },
            { key: 'ratio', label: 'Infra / Revenue', className: 'w-[25%]' },
          ]}
          rows={[...preMeetCostRevenueRows]}
        />
      </div>
    </section>
  );
}

const preMeetPrimaryDomains = [
  {
    domain: 'premeet.io',
    recommendation: '? Preferred',
    rationale: 'B2B SaaS standard, full brand match, clean',
    status: 'Check �',
  },
  {
    domain: 'premeet.com',
    recommendation: '?? Ideal',
    rationale: '.com trust signal, enterprise buyer preference',
    status: 'Check �',
  },
  {
    domain: 'premeet.co',
    recommendation: '? Backup',
    rationale: '.co modern, startup-recognizable',
    status: 'Check �',
  },
  {
    domain: 'getpremeet.com',
    recommendation: '? Alt',
    rationale: "Classic 'get' prefix if premeet.com taken",
    status: 'Check �',
  },
  {
    domain: 'premeet.app',
    recommendation: '? Alt',
    rationale: 'Product/platform signal, app store compatible',
    status: 'Check �',
  },
] as const;

const preMeetAltDomains = [
  {
    brand: 'Briefd',
    domains: 'briefd.io / briefd.com / getbriefed.com',
    rationale:
      '"Get briefed before the meeting." Action-oriented, past-tense implies it is done. Short and memorable.',
    strength: '?????',
  },
  {
    brand: 'Pregap',
    domains: 'pregap.io / pregap.com / getpregap.io',
    rationale: 'Pre + gap � exactly what the product does. Technical audience immediately gets it.',
    strength: '?????',
  },
  {
    brand: 'Syncless',
    domains: 'syncless.io / syncless.co',
    rationale: 'No more sync meetings. The negative positioning is powerful and clear.',
    strength: '?????',
  },
  {
    brand: 'Gapify',
    domains: 'gapify.io / gapify.com',
    rationale: 'Verb-based, product-native naming. Modern and SaaS-familiar.',
    strength: '?????',
  },
  {
    brand: 'Briefbot',
    domains: 'briefbot.io / briefbot.com',
    rationale: 'Communicates AI agent nature. More technical feel for developer-tool-adjacent audiences.',
    strength: '?????',
  },
  {
    brand: 'Agentbriefing',
    domains: 'agentbriefing.io',
    rationale: 'Descriptive but long. Strong SEO potential, weaker as a brand name.',
    strength: '?????',
  },
  {
    brand: 'MeetReady',
    domains: 'meetready.io / meetready.com',
    rationale: 'Benefit-forward. "Be meet-ready." Clean, global, but slightly generic.',
    strength: '?????',
  },
  {
    brand: 'Prewise',
    domains: 'prewise.io / prewise.co',
    rationale: 'Pre + wise � prepared and smart. Subtle and premium.',
    strength: '?????',
  },
] as const;

const preMeetNamingFramework = [
  {
    title: 'Pronounceable in English',
    detail: 'Must work in demos, Zoom calls, and word of mouth.',
    tone: 'bg-[#fff7f0]',
  },
  {
    title: '.com available',
    detail: '.com remains the strongest enterprise trust signal; .io is widely accepted in SaaS.',
    tone: 'bg-[#f6f9ff]',
  },
  {
    title: 'Category signal',
    detail: 'The name should suggest "before meeting" or "preparation" without feeling too literal.',
    tone: 'bg-[#f4fbf7]',
  },
  {
    title: 'Trademark clear',
    detail: 'Check USPTO + EUIPO before committing � IC 042 (Software) + IC 035 (Business Services).',
    tone: 'bg-[#fef3f2]',
  },
  {
    title: 'Social handle available',
    detail: 'Twitter/X, LinkedIn, and Instagram consistency helps at launch.',
    tone: 'bg-[#fcf3ff]',
  },
  {
    title: 'International',
    detail: 'Avoid negative connotations in German, French, Spanish, and Japanese.',
    tone: 'bg-[#f8fafc]',
  },
] as const;

function Kit6DomainResearchSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
          Alternative Brand Names &amp; Domain Research
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Check domains on Namecheap or Porkbun before purchasing. .io is typically ~$30�50/yr and .com is usually
          ~$12�15/yr.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Primary Domain Options (PreMeet brand)</div>
        <NativeTable
          columns={[
            { key: 'domain', label: 'Domain', className: 'w-[24%]' },
            { key: 'recommendation', label: 'Recommendation', className: 'w-[18%]' },
            { key: 'rationale', label: 'Rationale', className: 'w-[43%]' },
            { key: 'status', label: 'Status', className: 'w-[15%]' },
          ]}
          rows={[...preMeetPrimaryDomains]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Alternative Brand Names</div>
        <NativeTable
          columns={[
            { key: 'brand', label: 'Brand Name', className: 'w-[18%]' },
            { key: 'domains', label: 'Domain Options', className: 'w-[24%]' },
            { key: 'rationale', label: 'Rationale', className: 'w-[43%]' },
            { key: 'strength', label: 'Strength', className: 'w-[15%]' },
          ]}
          rows={[...preMeetAltDomains]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Naming Framework</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {preMeetNamingFramework.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const preMeetActivationMilestones = [
  { milestone: 'M0', event: 'Signup', description: 'Account created', timing: 'Day 0', benchmark: '100%' },
  { milestone: 'M1', event: 'First Integration', description: 'Gmail or Notion connected and indexing', timing: 'Day 0�1', benchmark: '68%' },
  { milestone: 'M2', event: 'Second Integration', description: 'Second source connected (agent needs ?2 for useful context)', timing: 'Day 1�2', benchmark: '48%' },
  { milestone: 'M3', event: 'First Meeting Created', description: 'Meeting topic + attendees entered', timing: 'Day 1�3', benchmark: '38%' },
  { milestone: 'M4', event: 'Team Invited', description: 'At least one attendee invited and connected', timing: 'Day 2�4', benchmark: '28%' },
  { milestone: 'M5', event: 'First Gap Report', description: 'Gap Report received � AHA MOMENT', timing: 'Day 3�5', benchmark: '22%' },
  { milestone: 'M6', event: 'Meeting Completed', description: 'Actual duration logged � hours saved calculated', timing: 'Day 4�6', benchmark: '18%' },
  { milestone: 'M7', event: 'Second Meeting', description: 'Repeat usage confirms retention', timing: 'Day 7�14', benchmark: '15%' },
  { milestone: 'M8', event: 'Upgraded to Paid', description: 'Free limit hit, team converts', timing: 'Day 14�30', benchmark: '7.5%' },
] as const;

const preMeetOnboardingDays = [
  {
    day: 'Day 0',
    title: 'Signup',
    accent: 'before:bg-[#7c3aed]',
    items: [
      'Welcome email fires immediately. Subject: "Activate your PreMeet agent � connect Gmail in 2 minutes." Single CTA, no feature tour.',
      'Dashboard shows a demo Gap Report with a banner: "This is what your Gap Report will look like. Connect your sources to generate a real one."',
      'Onboarding checklist: 3 steps pinned at top.',
    ],
  },
  {
    day: 'Day 1',
    title: 'No Integration (no-activation trigger)',
    accent: 'before:bg-[#f59e0b]',
    items: [
      'Email: "Your agent is waiting for sources."',
      'In-app: yellow banner "Your agent needs at least 2 connected sources to run a meaningful analysis. Takes 3 minutes total."',
      "Include specific integration buttons � don't make them navigate.",
    ],
  },
  {
    day: 'Day 3',
    title: 'Integration Connected, No Meeting Created',
    accent: 'before:bg-[#10b981]',
    items: [
      'Email: "Your agent indexed 847 emails and 34 Notion pages. Create a meeting to see what it found."',
      'Dashboard shows "Agent Ready" status + prompt: "What\'s your next meeting about?"',
      'CTA opens meeting creation flow pre-filled with calendar events.',
    ],
  },
  {
    day: 'Day 7',
    title: 'First Gap Report Received',
    accent: 'before:bg-[#175cd3]',
    items: [
      'In-app confetti moment + "Your first Gap Report is ready. Share it with your team before the meeting."',
      'Two CTAs: View Gap Report / Invite Attendees.',
      'Hours Saved ticker starts.',
    ],
  },
  {
    day: 'Day 14',
    title: 'Approaching Free Limit',
    accent: 'before:bg-[#ef4444]',
    items: [
      'Banner at 18/20 reports: "2 Gap Reports left. Your team has saved X hours � upgrade to keep going."',
      'Email subject includes "You\'ve saved [X]h with PreMeet."',
      'Money-back guarantee mentioned.',
    ],
  },
] as const;

const preMeetAhaPrinciples = [
  {
    title: 'The aha is the conflict',
    detail:
      `The moment a user reads "Bob says Q2 target is $400K. Alice's email thread shows it was revised to $350K" � that is when they understand the product. Design the Gap Report to surface the first conflict prominently.`,
    tone: 'bg-[#fff7f0]',
  },
  {
    title: 'Multi-user requirement is a risk',
    detail:
      'PreMeet needs at least 2 connected users in a meeting to generate a useful Gap Report. Push team invitation early, and use a demo attendee with synthetic data during onboarding to reduce single-user weakness.',
    tone: 'bg-[#f6f9ff]',
  },
  {
    title: 'The waiting period is an activation risk',
    detail:
      `The gap between "meeting created" and "Gap Report delivered" is churn risk. Fill it with real-time progress: "Scanning Bob's 1,247 emails... found 3 relevant threads."`,
    tone: 'bg-[#f4fbf7]',
  },
  {
    title: 'Celebrate the meeting outcome, not the tool',
    detail:
      'The aha is "our 60-minute meeting took 18 minutes," not "PreMeet generated a great report." Frame every success around the meeting result.',
    tone: 'bg-[#fcf3ff]',
  },
] as const;

function Kit6OnboardingActivationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Onboarding &amp; Activation Flow</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          In PLG products, onboarding determines your fate. PreMeet&apos;s activation window is narrow � users decide
          within 48 hours whether this changes how they run meetings.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-[#667085]">
          PreMeet has one clear activation milestone: first Gap Report received before a real meeting. Everything in
          onboarding is designed to reach that moment as fast as possible. Secondary milestones track meaningful
          engagement after activation.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">The Activation Milestone Framework</div>
        <NativeTable
          columns={[
            { key: 'milestone', label: 'Milestone', className: 'w-[10%]' },
            { key: 'event', label: 'Event', className: 'w-[22%]' },
            { key: 'description', label: 'Description', className: 'w-[38%]' },
            { key: 'timing', label: 'Target Timing', className: 'w-[15%]' },
            { key: 'benchmark', label: 'Benchmark Rate', className: 'w-[15%]' },
          ]}
          rows={[...preMeetActivationMilestones]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Day-by-Day Onboarding Sequence</div>
        <div className="grid gap-5">
          {preMeetOnboardingDays.map((item) => (
            <div
              key={item.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                  {item.day}
                </div>
                <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              </div>
              <div className="mt-5 grid gap-3">
                {item.items.map((line, index) => (
                  <div key={line} className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[15px] leading-8 text-[#475467]">
                    <span className="mr-3 inline-flex size-6 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                      {index + 1}
                    </span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Aha Moment Design Principles</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {preMeetAhaPrinciples.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#d7f0e2] bg-[#f4fbf7] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">Key metric to track</div>
        <p className="mt-3 text-[15px] leading-8 text-[#475467]">
          Median time from signup to first Gap Report received.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Target:</strong> Under 72 hours.
          <br />
          <strong className="text-[#101828]">Bottleneck:</strong> If the median exceeds 5 days, the team invitation step
          is almost always the issue � a second user must connect before useful comparison can happen.
        </p>
      </div>
    </section>
  );
}

const preMeetSeoKeywordRows = [
  {
    keyword: 'how to reduce meeting time',
    volume: '2,900/mo',
    competition: 'Low',
    funnel: 'MOFU',
    type: 'Long-form guide (2,500 words) + PreMeet CTA',
  },
  {
    keyword: 'AI meeting preparation tool',
    volume: '1,800/mo',
    competition: 'Low',
    funnel: 'BOFU',
    type: 'Landing page targeting this exact query',
  },
  {
    keyword: 'meeting prep software',
    volume: '1,400/mo',
    competition: 'Medium',
    funnel: 'BOFU',
    type: 'Comparison page vs Fellow, Notion AI',
  },
  {
    keyword: 'unproductive meetings solutions',
    volume: '1,100/mo',
    competition: 'Low',
    funnel: 'MOFU',
    type: 'Guide + PreMeet CTA',
  },
  {
    keyword: 'async meeting alternative',
    volume: '880/mo',
    competition: 'Low',
    funnel: 'MOFU',
    type: 'Category definition page � PreMeet as the "both" answer',
  },
  {
    keyword: 'meeting cost calculator',
    volume: '720/mo',
    competition: 'Low',
    funnel: 'BOFU',
    type: 'Interactive ROI tool (shareable by CFOs)',
  },
  {
    keyword: 'AI agenda generator',
    volume: '640/mo',
    competition: 'Medium',
    funnel: 'MOFU',
    type: 'Comparison: agenda tools vs. PreMeet gap detection',
  },
  {
    keyword: 'fellow.app alternative',
    volume: '390/mo',
    competition: 'Low',
    funnel: 'BOFU',
    type: 'Comparison: PreMeet adds agent intelligence',
  },
  {
    keyword: 'LangGraph meeting agent',
    volume: '120/mo',
    competition: 'None',
    funnel: 'TOFU',
    type: 'Technical blog � developer audience, SEO long-tail',
  },
  {
    keyword: 'Notion pre-meeting template',
    volume: '90/mo',
    competition: 'None',
    funnel: 'BOFU',
    type: 'Programmatic: Notion integration page',
  },
] as const;

const preMeetSeoArchitectureCards = [
  {
    title: 'Pillar Page',
    subtitle: 'The Definitive Guide to Shorter, Better Meetings',
    description:
      'A 6,000-word comprehensive guide targeting broad meeting-productivity intent. Compares manual preparation-heavy workflows with the PreMeet agent workflow and converts via free Gap Report trial � email capture � onboarding sequence.',
    tone: 'bg-[#fffdf9]',
  },
  {
    title: 'Cluster Content',
    subtitle: '12�15 supporting articles',
    description:
      'Shorter 500�1,200 word articles for long-tail keywords like "How to write a pre-meeting agenda (and why AI can now do it for you)" and "Why your roadmap reviews always run over time." Each piece links back to the pillar page.',
    tone: 'bg-[#f6f9ff]',
  },
  {
    title: 'Comparison Pages',
    subtitle: 'PreMeet vs [Competitor]',
    description:
      'Dedicated pages for PreMeet vs Fellow.app, Notion AI, Otter.ai, and even hiring a meeting facilitator. Targets high-intent alternative and category-comparison searches.',
    tone: 'bg-[#f4fbf7]',
  },
  {
    title: 'Programmatic SEO',
    subtitle: '[Tool] meeting integration',
    description:
      'Auto-generated pages for each supported integration: Linear, Gmail, Notion, Slack, Jira, Confluence, and more. Template-based and scalable to 30+ pages without manual writing.',
    tone: 'bg-[#fcf3ff]',
  },
] as const;

const preMeetSeoCalendarRows = [
  {
    period: 'Month 1�2',
    theme: 'Foundation',
    deliverables: 'Pillar page + 3 cluster articles + programmatic SEO setup (10 integration pages)',
  },
  {
    period: 'Month 3�4',
    theme: 'Authority',
    deliverables: '4 cluster articles + 3 competitor comparison pages + ROI calculator launch',
  },
  {
    period: 'Month 5�6',
    theme: 'Amplification',
    deliverables: '"State of Meetings" original data report (using PreMeet anonymized data) + PR push',
  },
  {
    period: 'Month 7�8',
    theme: 'Integration Pages',
    deliverables: 'Notion, Linear, Slack, Jira, Confluence pages � each targets zero-competition queries',
  },
  {
    period: 'Month 9�12',
    theme: 'Scale',
    deliverables: 'Programmatic expansion to 40+ pages + YouTube: "Real Gap Reports" series + compounding loop',
  },
] as const;

function Kit6SeoContentStrategySection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">SEO &amp; Content Strategy</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Organic search is PreMeet&apos;s highest-ROI long-term acquisition channel. The target keywords are low
          competition, high intent, and tightly aligned with the exact pain the product solves.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-[#667085]">
          A VP Ops searching �how to reduce meeting time� is experiencing the exact problem PreMeet solves � at the
          exact moment they feel it.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Keyword Strategy</div>
        <div className="mt-6">
          <NativeTable
            columns={[
              { key: 'keyword', label: 'Keyword', className: 'w-[28%]' },
              { key: 'volume', label: 'Volume', className: 'w-[12%]' },
              { key: 'competition', label: 'Competition', className: 'w-[14%]' },
              { key: 'funnel', label: 'Funnel', className: 'w-[10%]' },
              { key: 'type', label: 'Content Type', className: 'w-[36%]' },
            ]}
            rows={[...preMeetSeoKeywordRows]}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Content Architecture</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {preMeetSeoArchitectureCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
            >
              <div className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#667085]">{card.title}</div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{card.subtitle}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">12-Month Content Calendar</div>
        <NativeTable
          columns={[
            { key: 'period', label: 'Period', className: 'w-[18%]' },
            { key: 'theme', label: 'Theme', className: 'w-[18%]' },
            { key: 'deliverables', label: 'Deliverables', className: 'w-[64%]' },
          ]}
          rows={[...preMeetSeoCalendarRows]}
        />
      </div>
    </section>
  );
}

const preMeetAgencyStats = [
  { label: 'Agency plan price', value: '$499/mo', className: 'bg-[#eefec8]' },
  { label: "Agency's value to client", value: '$150�300/hr', className: 'bg-[#fff4e5]' },
  { label: 'PreMeet setup per client', value: '~45 min', className: 'bg-[#e6f3ff]' },
  { label: 'Agency payback period', value: '<3 hours', className: 'bg-[#f3e8ff]' },
] as const;

const preMeetAgencyWhyRows = [
  { metric: 'Agency plan price', value: '$499/mo' },
  { metric: "Agency's value to client", value: '"Meeting efficiency consulting" � billed at $150�300/hr' },
  { metric: 'PreMeet setup time per client', value: '~45 minutes (integration config + first Gap Report)' },
  { metric: "Agency's billing per client/mo", value: '$1,500�3,000 for productivity consulting retainer' },
  { metric: 'Clients per agency', value: '5�20 organizations' },
  { metric: 'Agency churn likelihood', value: 'Very low � PreMeet embedded in client workflow' },
  { metric: 'Agency payback period', value: '<3 hours of billable client work' },
] as const;

const preMeetAgencyIcpRows = [
  {
    attribute: 'Agency type',
    description:
      'Operations consultancies, productivity / future-of-work consultants, HR tech advisors, business efficiency agencies. NOT marketing agencies or brand agencies.',
  },
  {
    attribute: 'Client portfolio',
    description:
      'Serves 5�20 B2B SaaS or knowledge-work companies with 20�500 employees. Clients have real meeting problems � not retail or manufacturing.',
  },
  {
    attribute: 'Current offering',
    description:
      'Currently delivers meeting culture workshops, async-first programs, OKR coaching. Pain: one-time deliverables, no recurring product revenue, hard to retain clients.',
  },
  {
    attribute: 'Team size',
    description:
      '2�20 consultants. Small enough that the principal makes tool decisions fast. Large enough to have a client base worth deploying PreMeet into.',
  },
  {
    attribute: 'Discovery channels',
    description:
      `LinkedIn ("future of work consultant"), Twitter/X (#asyncwork community), Lenny's Newsletter readers, SaaSy Sales communities, No-meetings Day advocates.`,
  },
] as const;

const preMeetAgencyOutreachTouches = [
  {
    day: 'Touch 1 � Day 0',
    title: 'LinkedIn Connection + Note',
    copy:
      `"Hey [Name] � I work with ops consultancies on meeting intelligence tooling. Built something that might be relevant if you're doing efficiency work with clients. Happy to share if timing's right." No pitch. No link. Human.`,
    accent: 'before:bg-[#7c3aed]',
  },
  {
    day: 'Touch 2 � Day 2',
    title: 'LinkedIn DM After Connect',
    copy:
      `"Quick context � we built PreMeet, which gives every person in a meeting a personal AI agent that scans their sources before the meeting and surfaces only what needs live discussion. Ops consultancies are deploying it for clients as a persistent tool instead of a one-time workshop. Worth a 15-min call?"`,
    accent: 'before:bg-[#175cd3]',
  },
  {
    day: 'Touch 3 � Day 5',
    title: 'Email (if no LinkedIn response)',
    copy:
      `Subject: "Meeting efficiency tool for [Agency Name] clients." Body: "Noticed [Agency] does productivity work for B2B teams. We work with ops consultancies to deploy AI pre-meeting agents for their clients � runs before every meeting, generates a Gap Report, reduces meeting time by ~60%. One of your clients: 3 meetings per week � 4�5 hours saved � you show the CFO an hours-saved dashboard. Want to see a Gap Report from a real meeting?"`,
    accent: 'before:bg-[#10b981]',
  },
  {
    day: 'Touch 4 � Day 9',
    title: 'Follow-Up with Live Example',
    copy:
      `Share a real PreMeet Gap Report (with beta customer permission). "Here's what the output looks like � this was from a 5-person roadmap review. The meeting took 19 minutes instead of 60. Worth trying with one client team for free?"`,
    accent: 'before:bg-[#f59e0b]',
  },
  {
    day: 'Touch 5 � Day 14',
    title: 'Final Outreach',
    copy:
      `Subject: "Last note on meeting agents." Simple: "Totally understand if the timing isn't right. If you ever want to trial it with one client team for free � just reply and I'll set up a single workspace at no cost." Free trial for 1 client workspace: lowest friction possible.`,
    accent: 'before:bg-[#ef4444]',
  },
] as const;

const preMeetAgencyDemoRows = [
  {
    time: '0:00�2:00',
    stage: 'Qualify',
    script:
      'Ask: "What does meeting efficiency work look like in your current client engagements? How long does a typical engagement last?" Listen and let them describe the current model before showing the solution.',
  },
  {
    time: '2:00�4:00',
    stage: 'Frame the Problem',
    script:
      'Reflect back: "So you typically deliver a program over 8�12 weeks � but once the engagement ends, the client reverts to old patterns. What would it mean if you could leave a tool running inside the client organization instead of a report?"',
  },
  {
    time: '4:00�10:00',
    stage: 'Live Demo',
    script:
      'Screen share. Enter a sample meeting topic ("Q2 roadmap review") and two demo attendees. Show the agent pipeline running in real time. Gap Report appears: 3 gaps, 1 conflict, 18-minute agenda. "That analysis took 90 seconds. In production with real data it takes 3�4 minutes."',
  },
  {
    time: '10:00�12:00',
    stage: 'Agency Economics',
    script:
      `"You charge clients $150�300/hr for consulting. A PreMeet setup takes you 45 minutes. Your first invoice recovers your $499/mo PreMeet cost. Every meeting your client runs after that is pure retained-product value."`,
  },
  {
    time: '12:00�15:00',
    stage: 'Close',
    script:
      `"I can set up one client workspace for free � no credit card. Deploy it on your next client with the most meeting sprawl. After 30 days, we compare hours saved vs. your engagement cost. Hard to say no to a free proof of concept."`,
  },
] as const;

function Kit6AgencyPlaybookSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-4">
        {preMeetAgencyStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[42px] font-semibold tracking-[-0.06em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <p className="text-[16px] leading-8 text-[#475467]">
          The agency channel is PreMeet&apos;s fastest path to meaningful MRR � one ops agency with 10 clients equals
          the revenue of 25 individual Growth accounts.
        </p>
        <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
          <strong className="text-[#101828]">The agency pitch in one sentence:</strong> �PreMeet turns your meeting
          efficiency consulting from a recommendations document into a live product running inside your client&apos;s
          organization � and you charge the same retainer.�
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Why agencies are the ideal early customer</div>
        <NativeTable
          columns={[
            { key: 'metric', label: 'Metric', className: 'w-[38%]' },
            { key: 'value', label: 'Value', className: 'w-[62%]' },
          ]}
          rows={[...preMeetAgencyWhyRows]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Ideal Agency Profile (ICP)</div>
        <NativeTable
          columns={[
            { key: 'attribute', label: 'Attribute', className: 'w-[24%]' },
            { key: 'description', label: 'Description', className: 'w-[76%]' },
          ]}
          rows={[...preMeetAgencyIcpRows]}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Outreach Sequence � 5 Touches</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {preMeetAgencyOutreachTouches.map((item) => (
            <div
              key={item.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                {item.day}
              </div>
              <div className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-[#475467]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Demo Script � 15-Minute Call</div>
        <NativeTable
          columns={[
            { key: 'time', label: 'Time', className: 'w-[16%]' },
            { key: 'stage', label: 'Stage', className: 'w-[18%]' },
            { key: 'script', label: 'Script', className: 'w-[66%]' },
          ]}
          rows={[...preMeetAgencyDemoRows]}
        />
      </div>
    </section>
  );
}

const preMeetObjectionCards = [
  {
    id: '01',
    title: 'We already use Otter.ai / tl;dv for meetings.',
    subtext:
      'They conflate pre-meeting intelligence with post-meeting recording. Common � the category is new.',
    response:
      'Those tools record and transcribe what happened in the meeting, which is valuable for follow-up. PreMeet runs before the meeting starts. By the time you are on the Zoom call, PreMeet has already scanned everyone�s sources, found the gaps, and cut 60% of the agenda. They are not competing products � Otter records the outcome; PreMeet shapes the conversation before it begins. Many teams use both.',
    tip: 'Show the timeline diagram: �Otter starts here [in-meeting]. PreMeet starts here [30 minutes before].�',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    id: '02',
    title: "We have a no-meeting culture. We don't need this.",
    subtext:
      "They are proud of their async culture and think PreMeet is for meeting-heavy organizations. Actually the opposite is true.",
    response:
      'PreMeet is built for async-first teams. The meetings that survive your async filter � the ones that genuinely need live discussion � are exactly the meetings where PreMeet has the most impact. When a meeting is necessary, PreMeet ensures it is as short and high-quality as possible. The Gap Report often confirms that the meeting is not needed at all. PreMeet has a Meeting Necessity Score feature that says �this could be a Slack thread� � async-first teams love that feature most.',
    tip: 'Position PreMeet as the tool that enforces their async culture, not one that adds meetings.',
    accent: 'before:bg-[#175cd3]',
  },
  {
    id: '03',
    title: "I'm worried about giving an AI access to our emails and docs.",
    subtext: "Valid security concern. Don't minimize � address directly with specifics.",
    response:
      'Each person�s agent connects only to their own accounts via read-only OAuth � the same mechanism Calendly or Notion use to connect to your calendar. The agent cannot send emails, create documents, or take any action. All tokens are encrypted at rest using Supabase Vault. Agents are isolated by user � agent A cannot read agent B�s sources under any conditions. Gap Reports contain synthesized insights, never raw email or doc content. We have a DPA covering GDPR, CCPA, and SOC2 compliance available on request.',
    tip: 'Have the one-page security FAQ and DPA ready. Offer a technical call with a security-focused founder if needed.',
    accent: 'before:bg-[#10b981]',
  },
  {
    id: '04',
    title: 'We tried meeting prep tools and nobody used them.',
    subtext:
      'Past failure with manual prep tools like agenda builders or Confluence templates. They think this is the same category.',
    response:
      'Manual meeting prep tools require people to do work before the meeting � fill out a template, write a summary, update a doc. Nobody does this consistently because it is the last thing you want to do 30 minutes before a call. PreMeet does not ask anyone to do anything extra. The agents run automatically when a meeting is scheduled. The Gap Report arrives in email and Slack 30 minutes before. Zero behavior change required from the team � PreMeet does the prep so they do not have to.',
    tip: 'The key differentiator is zero-effort for participants. Emphasize �it just arrives.�',
    accent: 'before:bg-[#f59e0b]',
  },
  {
    id: '05',
    title: "Our meetings aren't the problem. Our execution is.",
    subtext: "They have diagnosed a different root cause. Don't argue with the diagnosis � find the overlap.",
    response:
      'Fair point � and often true simultaneously. If execution is the problem, then decisions are not being tracked and acted on after meetings. PreMeet�s post-meeting write-back feature pushes decisions and action items automatically to Jira, Linear, Notion, and Slack after each meeting. Teams that use that feature report significantly higher action item completion. Would it help to see that in the demo?',
    tip: 'Demo the post-meeting write-back feature specifically for execution-focused buyers.',
    accent: 'before:bg-[#ef4444]',
  },
  {
    id: '06',
    title: 'This seems expensive for what it does.',
    subtext: 'Value has not landed yet. They are comparing to a $10/mo note-taking tool.',
    response:
      'Let�s run the math. Your team has 10 people at an average salary of $100K � that is about $50/hr fully loaded. One 60-minute meeting per week with all 10 costs $500/meeting, or $2,000/month. If PreMeet saves 40% of that, you recover $800/month. PreMeet Growth is $199/month. Net monthly benefit: $601. That is from one recurring meeting. Most teams have four.',
    tip: 'Always open the ROI calculator with their actual team size and salary. Let them input the numbers themselves.',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    id: '07',
    title: "We don't use Linear/Notion/[specific tool].",
    subtext: "Integration mismatch concern. Handle honestly � PreMeet's value degrades without integrations.",
    response:
      'PreMeet works best with at least 2 integrations per user � that is where the agent comparison becomes meaningful. At launch, we support Gmail, Outlook, Notion, Confluence, Google Drive, Jira, Linear, Asana, Slack, and Teams. What does your team�s stack look like? Let me map what is already supported. If you are using a tool we have not integrated yet, we prioritize the roadmap based on customer demand and can tell you the ETA.',
    tip: 'Map their stack before the call. Never discover a missing integration live in a demo.',
    accent: 'before:bg-[#175cd3]',
  },
  {
    id: '08',
    title: "What if my team doesn't want AI reading their emails?",
    subtext: 'Internal cultural concern � employee trust, not IT security.',
    response:
      'Each person connects their own integrations individually � no admin can connect an employee�s Gmail on their behalf. Every employee sees exactly what their agent can access, can revoke any integration instantly, and can delete their agent memory at any time. The consent flow is explicit: �Your agent will read your emails to prepare for meetings you attend.� In practice, teams that frame it as �your personal agent works for you� see very high voluntary adoption. The agents are user-owned, not company-owned.',
    tip: 'Show the employee consent screen. The user-first framing is the most effective trust signal.',
    accent: 'before:bg-[#10b981]',
  },
  {
    id: '09',
    title: 'Can we try it before paying?',
    subtext: 'Risk reduction � positive signal. They are interested.',
    response:
      'Yes � the free plan gives you 20 Gap Reports, no credit card required. That is enough to run PreMeet on every meeting for 2�3 weeks for a small team. After that, if you have not seen a measurable reduction in meeting duration, we do not deserve your money. We also offer a 30-day money-back guarantee on the first paid month.',
    tip: 'Send the signup link immediately during the call. Do not let momentum cool.',
    accent: 'before:bg-[#f59e0b]',
  },
  {
    id: '10',
    title: 'I need to check with my team / IT / manager.',
    subtext: 'Internal buy-in needed. Find the champion.',
    response:
      'Of course. Who else is part of this decision? The IT security question I can answer with our DPA and OAuth-only access doc � that usually closes quickly. For the team lead or COO, the hours-saved dashboard is the most effective tool: �This month your team saved X hours � equivalent to $Y in salary.� I can prepare a one-page brief with your team size and meeting volume to show the expected ROI. Who should I address it to?',
    tip: 'Offer a team demo where the champion can invite stakeholders directly. Offer to join as a supporting resource.',
    accent: 'before:bg-[#ef4444]',
  },
  {
    id: '11',
    title: "We're too early / too small for this.",
    subtext: 'Wrong framing � meeting dysfunction starts early and compounds.',
    response:
      'The best time to install good meeting habits is when your team is small. At 10 people, one bad recurring meeting costs $800/month in salary time. At 50 people, it is $4,000/month from the same meeting. Founders who deployed PreMeet at 15 people are now running it with 80 people without the meeting sprawl that kills most scaling companies. The Starter plan is $49/month � less than one hour of most people�s fully loaded cost.',
    tip: 'The compound growth argument works well for COO/founder buyers who think long-term.',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    id: '12',
    title: 'The Gap Report might create more conflict than it resolves.',
    subtext: "Concern about surfacing organizational conflicts they'd rather leave unaddressed.",
    response:
      'That is a thoughtful concern � and it reveals something important: the conflicts existed before PreMeet. PreMeet simply surfaces them in a structured, neutral format before the meeting, when there is still time to resolve them. A conflict discovered mid-meeting, with everyone present, is much harder to resolve than one that is visible an hour before. PreMeet gives you time to think � and the option to align before the call. The alternative is not no conflict; it is conflict discovered live, in front of everyone.',
    tip: 'Frame the Gap Report as an early warning system, not a conflict machine.',
    accent: 'before:bg-[#175cd3]',
  },
  {
    id: '13',
    title: "We're concerned about GDPR / data compliance.",
    subtext: 'Valid compliance concern � especially for EU customers. Take it seriously.',
    response:
      'PreMeet processes data under GDPR as a Data Processor, with your organization as the Data Controller. We have a full GDPR-compliant DPA available for signature that covers data categories, retention, breach notification, and right to erasure. EU customers can choose EU-region data processing. Each employee�s consent is captured with timestamp and IP address, stored immutably. Employees can request deletion of all their agent data at any time, processed within 30 days. Happy to send the DPA now.',
    tip: 'Attach the DPA from Section 19 to the follow-up email immediately after the call.',
    accent: 'before:bg-[#10b981]',
  },
  {
    id: '14',
    title: 'What if the Gap Report is wrong?',
    subtext: 'Accuracy concern � LLM hallucination risk.',
    response:
      'PreMeet�s agents only synthesize from verified sources � your email threads, your Linear tickets, your Notion docs. The Gap Report cites which source each insight came from, so any claim can be verified in one click. We use strict prompting that prohibits the model from inferring or inventing claims � if the data does not support a statement, the agent omits it. Confidence scores flag lower-certainty items. Early beta feedback: the most common reaction is �this is exactly right� because it is sourced from what people actually wrote.',
    tip: 'Show a Gap Report with source citations highlighted. Traceability is the trust signal.',
    accent: 'before:bg-[#f59e0b]',
  },
  {
    id: '15',
    title: "We're already pretty efficient � we don't have a meeting problem.",
    subtext: 'Self-assessment bias. Almost no team accurately estimates how much time they waste in meetings.',
    response:
      'That is great to hear � and I would love to validate it. Would you be open to running PreMeet on 5 meetings this month at no cost? If the Gap Reports are empty � no conflicts, no gaps � then you are right and you have confirmed you already run exceptional meetings. Most teams are surprised by what surfaces. And if nothing surfaces, you have just confirmed something most companies cannot prove: that your meetings are as efficient as they feel.',
    tip: 'Offer the free trial specifically as validation, not as a sales move.',
    accent: 'before:bg-[#ef4444]',
  },
] as const;

function Kit6ObjectionHandlingSection() {
  return (
    <section className="mt-10 space-y-5">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Objection Handling Guide</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Every objection in a PreMeet sales conversation reveals where the buyer is in their understanding. Map the
          objection, address the real concern, and move forward.
        </p>
      </div>

      {preMeetObjectionCards.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
              Objection {item.id}
            </div>
            <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">Sales handling card</div>
          </div>

          <div className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
          <div className="mt-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[14px] leading-7 text-[#667085]">
            <span className="font-medium text-[#101828]">Subtext:</span> {item.subtext}
          </div>

          <div className="mt-5 border-t border-[#e6eaf2] pt-5">
            <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Recommended response</div>
            <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.response}</p>
          </div>

          <div className="mt-5 rounded-[18px] border border-[#e6eaf2] bg-[#fafbfc] px-4 py-4 text-[14px] leading-7 text-[#667085]">
            <span className="font-medium text-[#101828]">Pro tip:</span> {item.tip}
          </div>
        </div>
      ))}
    </section>
  );
}

export function Kit6BlueprintContent({ sectionId }: { sectionId: string }) {
  if (sectionId === 's01') {
    return <Kit6OpportunityBriefSection />;
  }

  if (sectionId === 's02') {
    return <Kit6ProductSpecSection />;
  }

  if (sectionId === 's03') {
    return <Kit6TargetMarketsSection />;
  }

  if (sectionId === 's05') {
    return <Kit6CompetitorMapSection />;
  }

  if (sectionId === 's06') {
    return <Kit6RevenueModelSection />;
  }

  if (sectionId === 's07') {
    return <Kit6First50CustomersSection />;
  }

  if (sectionId === 's08') {
    return <Kit6ConversionFunnelsSection />;
  }

  if (sectionId === 's09') {
    return <Kit6CodePromptsSection />;
  }

  if (sectionId === 's10') {
    return <Kit6DesignSystemSection />;
  }

  if (sectionId === 's11') {
    return <Kit6UIKitSection />;
  }

  if (sectionId === 's12') {
    return <Kit6PromptPackSection />;
  }

  if (sectionId === 's13') {
    return <Kit6ApiSchemaSection />;
  }

  if (sectionId === 's14') {
    return <Kit6DatabaseSchemaSection />;
  }

  if (sectionId === 's15') {
    return <Kit6LandingCopySection />;
  }

  if (sectionId === 's16') {
    return <Kit6WaitlistEmailSequenceSection />;
  }

  if (sectionId === 's17') {
    return <Kit6BrandingKitSection />;
  }

  if (sectionId === 's18') {
    return <Kit6LaunchChecklistSection />;
  }

  if (sectionId === 's19') {
    return <Kit6PrivacyDataAgreementSection />;
  }

  if (sectionId === 's20') {
    return <Kit6AbTestingSection />;
  }

  if (sectionId === 's21') {
    return <Kit6TechStackCostSection />;
  }

  if (sectionId === 's22') {
    return <Kit6DomainResearchSection />;
  }

  if (sectionId === 's23') {
    return <Kit6OnboardingActivationSection />;
  }

  if (sectionId === 's24') {
    return <Kit6SeoContentStrategySection />;
  }

  if (sectionId === 's25') {
    return <Kit6AgencyPlaybookSection />;
  }

  if (sectionId === 's26') {
    return <Kit6ObjectionHandlingSection />;
  }

  if (sectionId === 's30') {
    return <Kit6AppExperienceSection />;
  }

  if (sectionId === 's04') {
    return <Kit6TechStackSection />;
  }

  return <Kit4BlueprintContent sectionId={sectionId} />;
}




