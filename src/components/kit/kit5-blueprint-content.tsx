import { Kit4BlueprintContent } from '@/components/kit/kit4-blueprint-content';

type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

type TableRow = Record<string, string>;

const stackReaperStats = [
  {
    value: '$1.37B',
    label: 'SaaS Spend Management Market (2025)',
    note: 'A category now large enough to support specialized workflow-led entrants.',
    className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    value: '$7.72B',
    label: 'Market by 2033',
    note: 'Category expansion keeps accelerating as procurement and finance teams tighten controls.',
    className: 'bg-[linear-gradient(135deg,#ffd8ba_0%,#c57aff_100%)]',
  },
  {
    value: '21.2%',
    label: 'CAGR',
    note: 'SaaS waste is no longer a side conversation; it is an operational priority.',
    className: 'bg-[linear-gradient(135deg,#c6e7ff_0%,#f6deff_100%)]',
  },
  {
    value: '90%',
    label: 'Companies overspending on SaaS',
    note: 'The overspend problem is already mainstream, even before automation replacement is solved.',
    className: 'bg-[linear-gradient(135deg,#fdf1e2_0%,#fff9f1_100%)]',
  },
  {
    value: '30%',
    label: 'Employees not using assigned licenses',
    note: 'Unused software hides in plain sight across small teams and enterprise stacks alike.',
    className: 'bg-[linear-gradient(135deg,#f1f5ff_0%,#e5f8ff_100%)]',
  },
  {
    value: '73%',
    label: 'Average SaaS waste (cloud)',
    note: 'Waste compounds because most companies still lack a replacement-first workflow after detection.',
    className: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
];

const stackReaperSignals = [
  '90% of companies overspend on SaaS by 20-30%, and cloud-based SaaS alone saw 33% of all spend go to waste in 2025.',
  "73% of employees don't use their assigned licenses, creating an average of $135,000 per year in unused license waste alone.",
  'The average company now uses 112 SaaS apps and adds 7.6 new applications per month, compounding SaaS sprawl at 33.2% per year.',
  'The SaaS Spend Management market is growing at 21.2% CAGR, from $1.37B in 2025 to $7.72B by 2033.',
  'The SME segment is the fastest-growing part of the market at 22.26% CAGR, which is exactly where StackReaper wins first.',
  'n8n crossed 100M downloads and 5,000+ GitHub stars; the automation layer is mature enough to replace many zombie tools.',
  "Claude 3.5+ can now analyze a SaaS tool's function and generate accurate n8n workflow JSON in a single prompt.",
  'Cledara analyzed 4,000+ vendors and 1.1M purchases, yet nobody is closing the replacement layer with executable automation.',
  'Zapier charges $19-799/month, while an equivalent n8n self-hosted workflow can run for effectively $0 at small scale.',
  'Ramp and Brex can flag waste, but neither tells teams what to replace a tool with or hands over the workflow code.',
];

const stackReaperProductRows = [
  {
    priority: 'P0',
    feature: 'Bank & Card Detection',
    description:
      "Plaid integration connects checking, savings, or credit card accounts. StackReaper identifies all recurring SaaS charges, including shadow IT finance doesn't know about, across daily, weekly, monthly, and annual patterns.",
  },
  {
    priority: 'P0',
    feature: 'Zombie Classification Engine',
    description:
      'Claude classifies each detected SaaS by tool category, function summary, n8n replacement confidence, estimated annual cost, and whether it is duplicate, underused, or fully replaceable.',
  },
  {
    priority: 'P0',
    feature: 'n8n Flow Template Library',
    description:
      '50+ pre-built n8n workflow JSON templates cover the most common replaceable tools. Templates are tested, documented, and maintained monthly.',
  },
  {
    priority: 'P0',
    feature: 'One-Click Import',
    description:
      'Direct n8n API integration imports the selected flow to the user workspace in one click, with existing credentials prefilled whenever possible.',
  },
  {
    priority: 'P0',
    feature: 'Savings Dashboard',
    description:
      "Per-tool ROI math shows the exact swap economics, like 'Cancel Buffer ($99/mo) + import this flow = save $1,188/year,' while the dashboard rolls up total reclaimed spend.",
  },
  {
    priority: 'P1',
    feature: 'Duplicate Stack Detection',
    description:
      'Highlights overlapping tools such as Notion + Confluence or Slack + Teams and shows the overlap cost clearly enough to turn redundancy into action.',
  },
  {
    priority: 'P1',
    feature: 'Monthly Zombie Scan',
    description:
      'Inngest-powered recurring scans detect newly introduced zombie subscriptions and alert users by email or Slack when new recurring spend appears.',
  },
  {
    priority: 'P1',
    feature: 'Cancel Guidance',
    description:
      'For each zombie SaaS, StackReaper provides the exact cancellation URL or workflow and keeps a confirmation record once the subscription is shut down.',
  },
  {
    priority: 'P2',
    feature: 'n8n Cloud Deployment',
    description:
      'Users without an existing n8n instance can one-click deploy a prepared environment on Railway or Render, preloaded with selected flows.',
  },
  {
    priority: 'P2',
    feature: 'Team Collaboration',
    description:
      'Share the zombie report with CTOs or CFOs, comment on tools, and assign ownership so cleanup and replacement happen collaboratively.',
  },
  {
    priority: 'P2',
    feature: 'White-Label (Agency)',
    description:
      'Agencies can run StackReaper audits for client accounts, export branded PDFs, and deliver implementation packages as a service.',
  },
];

const stackReaperFlow = [
  {
    step: '01',
    title: 'Connect Bank',
    subtitle: 'Plaid OAuth',
    detail: 'Link bank account or credit card and sync the last 12 months of transaction history.',
    tone: 'bg-[#eefec8]',
  },
  {
    step: '02',
    title: 'Zombie Scan',
    subtitle: 'AI Classification',
    detail: 'Recurring SaaS charges are labeled as essential, replaceable zombie, cancel-only zombie, or duplicate.',
    tone: 'bg-[#ffe2c5]',
  },
  {
    step: '03',
    title: 'Review Dashboard',
    subtitle: 'ROI Sorted View',
    detail: "See full stack cost, category, replacement confidence, and sort by 'highest ROI to replace.'",
    tone: 'bg-[#e6f3ff]',
  },
  {
    step: '04',
    title: 'Pick a Zombie',
    subtitle: 'Replacement Match',
    detail: "Open 'Replace with n8n' to preview the matched workflow template, what it does, and setup time.",
    tone: 'bg-[#e9e2ff]',
  },
  {
    step: '05',
    title: 'Import the Flow',
    subtitle: 'One Click to n8n',
    detail: 'Send the selected automation into the connected n8n workspace or deploy a fresh instance.',
    tone: 'bg-[#fff4ea]',
  },
  {
    step: '06',
    title: 'Cancel & Save',
    subtitle: 'Recovered Spend',
    detail: "Follow the cancel guide and watch savings roll into the dashboard, like '$1,188/year recovered this month.'",
    tone: 'bg-[#ecfbf4]',
  },
];

const stackReaperProfiles = [
  {
    profile: 'Solo Founder / Indie Hacker',
    stage: '$20K-500K ARR',
    size: '1 person',
    spend: '$300-800/mo',
    risk: 'Very High',
    notes: 'Technical, automation-native, immediately gets n8n value',
  },
  {
    profile: 'Early-Stage Startup (2-10 people)',
    stage: 'Pre-seed to Seed',
    size: '2-10',
    spend: '$800-2,500/mo',
    risk: 'High',
    notes: 'Moving fast, accumulating SaaS debt, CTO doubles as IT',
  },
  {
    profile: 'Growth Startup (10-50 people)',
    stage: 'Seed to Series A',
    size: '10-50',
    spend: '$2,500-8,000/mo',
    risk: 'Very High',
    notes: 'Shadow IT explosion, multiple credit cards, nobody audits',
  },
  {
    profile: 'SMB / Agency (10-50 people)',
    stage: 'Bootstrapped',
    size: '10-50',
    spend: '$2,000-6,000/mo',
    risk: 'High',
    notes: 'Uses SaaS extensively, cost-conscious, wants self-serve',
  },
];

const stackReaperGeoRows = [
  {
    region: 'USA',
    density: '★★★★★',
    n8n: 'High',
    automation: 'Very High',
    spend: 'Highest',
    priority: '9.5/10',
  },
  {
    region: 'UK / Ireland',
    density: '★★★★☆',
    n8n: 'Medium-High',
    automation: 'High',
    spend: 'High',
    priority: '8.5/10',
  },
  {
    region: 'Germany / Netherlands',
    density: '★★★★☆',
    n8n: 'Very High',
    automation: 'High',
    spend: 'High',
    priority: '8.5/10',
  },
  {
    region: 'Canada',
    density: '★★★★☆',
    n8n: 'Medium',
    automation: 'High',
    spend: 'High',
    priority: '8.0/10',
  },
  {
    region: 'Australia / NZ',
    density: '★★★☆☆',
    n8n: 'Medium',
    automation: 'Medium-High',
    spend: 'High',
    priority: '7.5/10',
  },
  {
    region: 'Israel',
    density: '★★★★☆',
    n8n: 'High',
    automation: 'Very High',
    spend: 'Very High',
    priority: '8.0/10',
  },
  {
    region: 'Nordics',
    density: '★★★☆☆',
    n8n: 'High',
    automation: 'High',
    spend: 'High',
    priority: '7.5/10',
  },
  {
    region: 'Eastern Europe (PL, RO, CZ)',
    density: '★★★☆☆',
    n8n: 'Very High (n8n)',
    automation: 'Very High',
    spend: 'Medium',
    priority: '8.0/10',
  },
];

const stackReaperPersonas = [
  {
    icon: '⚙️',
    name: 'The Automation-Native Founder',
    role: 'Primary / Viral Vector',
    detail:
      'Age 24-38. Solo or 2-3 person team. Already uses n8n, Zapier, or Make. Pays for 5-15 SaaS tools that overlap with existing automations and instantly understands the product.',
    discovery:
      "Discovery: Twitter/X, Indie Hackers, n8n community Discord, Product Hunt. Viral hook: 'This tool told me I could cancel 7 SaaS subscriptions and save $3,840/year.'",
  },
  {
    icon: '🧠',
    name: 'The Overwhelmed CTO',
    role: 'Decision Maker at Growth Stage',
    detail:
      "Age 28-42. Runs a 15-50 person startup and knows the team has too many tools. Pain is shadow IT, credit card sprawl, and engineers wasting time on manual SaaS tasks.",
    discovery:
      "Cycle: 1-2 weeks. Budget: $49-199/mo. Discovery: LinkedIn, Hacker News, startup Slack groups. Key message: 'Audit your SaaS stack in 30 minutes. Recover $5,000/year you didn't know you were wasting.'",
  },
  {
    icon: '📊',
    name: 'The Cost-Conscious Ops Lead',
    role: 'Champion / Internal Operator',
    detail:
      "Age 27-40. Works in ops, growth, or product at a 10-50 person startup. Often asked by the CEO or CFO to cut software costs but currently does the job in spreadsheets.",
    discovery:
      'Needs approval, but becomes the internal champion because StackReaper provides a defensible, data-driven audit. Discovery: Lenny’s Newsletter, SaaStr, FinOps community, LinkedIn.',
  },
];

const stackReaperTechRows = [
  {
    layer: 'Frontend',
    recommended: 'Next.js 14',
    host: 'Vercel',
    alternative: 'Retool',
    nocode: 'shadcn/ui + Tailwind',
    rationale: 'SSR, strong DX, and fast free deploys for a product that needs speed plus credibility.',
  },
  {
    layer: 'Bank Connection',
    recommended: 'Plaid API (Transactions)',
    host: 'Plaid Cloud',
    alternative: 'Teller.io',
    nocode: 'N/A',
    rationale: 'Best path to recurring bank and card payment detection with OAuth and broad US coverage.',
  },
  {
    layer: 'AI Classification',
    recommended: 'Claude API (Sonnet)',
    host: 'Anthropic',
    alternative: 'GPT-4o',
    nocode: 'N/A',
    rationale: 'Better at tool analysis, replacement confidence, and structured flow matching outputs.',
  },
  {
    layer: 'Flow Library',
    recommended: 'Static JSON templates (Supabase)',
    host: '-',
    alternative: 'n8n community imports',
    nocode: 'N/A',
    rationale: '50+ tested workflow JSON templates that are versioned, searchable, and easy to update.',
  },
  {
    layer: 'n8n Integration',
    recommended: 'n8n REST API',
    host: 'n8n Cloud or self-hosted',
    alternative: 'Make API',
    nocode: 'N/A',
    rationale: 'Direct import, workflow listing, and execution triggers from the same product surface.',
  },
  {
    layer: 'n8n Deploy',
    recommended: 'Railway one-click template',
    host: 'Railway.app',
    alternative: 'Render.com',
    nocode: 'N/A',
    rationale: 'Fastest way to get non-technical users onto a working n8n instance with minimal setup.',
  },
  {
    layer: 'Backend / API',
    recommended: 'Next.js API + tRPC',
    host: 'Vercel',
    alternative: 'FastAPI',
    nocode: 'N/A',
    rationale: 'Type-safe, unified codebase across dashboard, ingestion, and workflow orchestration.',
  },
  {
    layer: 'Database',
    recommended: 'Supabase (PostgreSQL)',
    host: 'Supabase Cloud',
    alternative: 'PlanetScale',
    nocode: 'Airtable',
    rationale: 'RLS per account, encrypted bank tokens, and enough flexibility for workflow metadata.',
  },
  {
    layer: 'Job Queue',
    recommended: 'Inngest',
    host: 'Inngest Cloud',
    alternative: 'BullMQ',
    nocode: 'N/A',
    rationale: 'Monthly zombie scans, sync jobs, and alert fan-out can all run without extra ops overhead.',
  },
  {
    layer: 'Notifications',
    recommended: 'Resend + Slack webhook',
    host: 'Resend',
    alternative: 'Postmark',
    nocode: 'N/A',
    rationale: 'Handles new zombie alerts, monthly reports, and import confirmations from one notification layer.',
  },
  {
    layer: 'Auth',
    recommended: 'Supabase Auth + Google',
    host: 'Supabase',
    alternative: 'Clerk',
    nocode: 'N/A',
    rationale: 'Fastest onboarding path for startup teams who want to get to the audit immediately.',
  },
  {
    layer: 'Payments',
    recommended: 'Stripe Billing',
    host: 'Stripe',
    alternative: 'Paddle',
    nocode: 'N/A',
    rationale: 'Supports both one-time kit purchases and recurring subscription upgrades cleanly.',
  },
];

const stackReaperArchitecture = [
  {
    layer: 'Layer 1',
    title: 'Transaction Detection & SaaS Recognition',
    detail:
      "Plaid transactions sync first. StackReaper filters recurring payments, cleans merchant names, matches against a known SaaS vendor list, and calls Claude when a vendor isn't recognized. Output includes SaaS status, category, description, website, and monthly cost.",
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    layer: 'Layer 2',
    title: 'Replacement Confidence Scoring',
    detail:
      "Each identified SaaS is passed into Claude with a structured prompt: what the tool does, how replaceable it is, confidence 0-100, a 3-node workflow description, and the best template match. That output maps directly to the n8n flow library in Supabase.",
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    layer: 'Layer 3',
    title: 'n8n Flow Import',
    detail:
      "When the user clicks 'Import to n8n,' StackReaper POSTS the chosen workflow to the n8n API, fills in template variables where possible, stores the workflow ID, and updates the dashboard so the SaaS is marked as pending cancel.",
    tone: 'bg-[linear-gradient(135deg,#eaf3ff_0%,#eefaf6_100%)]',
  },
];

const stackReaperTimeline = [
  {
    week: 'Weeks 1-2',
    title: 'Bank sync and recurring payment detection',
    summary:
      'Plaid OAuth, transaction sync, recurring payment detection, and SaaS vendor matching across the first audit pass.',
    detail: 'This is the truth layer that tells StackReaper what the stack actually is.',
    accent: 'before:bg-[#22c55e]',
  },
  {
    week: 'Week 3',
    title: 'Zombie classification and savings logic',
    summary:
      'Claude zombie classification, replacement confidence scoring, and savings calculation start turning spend into action.',
    detail: 'The dashboard now knows what to replace, not just what exists.',
    accent: 'before:bg-[#4361ee]',
  },
  {
    week: 'Week 4',
    title: 'n8n import and deploy system',
    summary:
      'First 20 templates land, n8n API import is live, and Railway deployment gives non-technical users a working automation runtime.',
    detail: 'This is the moment StackReaper becomes executable rather than diagnostic only.',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    week: 'Week 5',
    title: 'Savings dashboard and cancel layer',
    summary:
      'Savings dashboard, cancel guidance, monthly scan cron, and alerts complete the decision-to-replacement loop.',
    detail: 'Recovered spend becomes visible and trackable immediately.',
    accent: 'before:bg-[#f97316]',
  },
  {
    week: 'Week 6',
    title: 'Collaboration, billing, and beta launch',
    summary:
      'Duplicate detection, team sharing, Stripe billing, and beta launch prepare the product for real startup teams.',
    detail: 'The product is now sellable, shareable, and measurable.',
    accent: 'before:bg-[#06b6d4]',
  },
];

const stackReaperCompetitorRows = [
  {
    product: 'Ramp / Brex',
    price: '$0 (card fee)',
    strength: 'Spend tracking, duplicate alerts',
    weakness: 'No replacement guidance. No automation templates. Card-only.',
    aiDetect: '1/10',
    flowReplace: '2/10',
    automation: '7/10',
    smbFit: '5/10',
  },
  {
    product: 'Cledara',
    price: '$99-499/mo',
    strength: 'SaaS management, usage tracking',
    weakness: 'Enterprise pricing. No n8n flows. No automation conversion.',
    aiDetect: '2/10',
    flowReplace: '6/10',
    automation: '6/10',
    smbFit: '3/10',
  },
  {
    product: 'Torii / BetterCloud',
    price: '$200-500+/mo',
    strength: 'Enterprise SaaS management, SSO',
    weakness: 'Enterprise only. No automation replacement. Way expensive.',
    aiDetect: '3/10',
    flowReplace: '7/10',
    automation: '5/10',
    smbFit: '1/10',
  },
  {
    product: 'Zylo',
    price: '$1,000+/mo',
    strength: 'Enterprise SaaS management',
    weakness: 'Enterprise only. Consulting-heavy. No automation conversion.',
    aiDetect: '2/10',
    flowReplace: '7/10',
    automation: '4/10',
    smbFit: '1/10',
  },
  {
    product: 'Zapier / Make',
    price: '$19-799/mo',
    strength: 'Automation platform',
    weakness: "Doesn't detect zombies. Starts from scratch. No bank data.",
    aiDetect: '1/10',
    flowReplace: '1/10',
    automation: '8/10',
    smbFit: '6/10',
  },
  {
    product: 'n8n (alone)',
    price: '$0-20/mo',
    strength: 'Self-hosted automation',
    weakness: 'No zombie detection. No SaaS analysis. Requires manual work.',
    aiDetect: '1/10',
    flowReplace: '1/10',
    automation: '9/10',
    smbFit: '7/10',
  },
  {
    product: 'Productiv / Spendflo',
    price: '$500+/mo',
    strength: 'SaaS management + negotiation',
    weakness: 'Enterprise pricing. No automation templates.',
    aiDetect: '3/10',
    flowReplace: '7/10',
    automation: '5/10',
    smbFit: '2/10',
  },
  {
    product: 'STACKREAPER',
    price: '$29-199/mo',
    strength: 'Detect + replace + import',
    weakness: 'Our product',
    aiDetect: '9/10',
    flowReplace: '9/10',
    automation: '9/10',
    smbFit: '9/10',
  },
];

const stackReaperPricingRows = [
  {
    plan: 'KIT',
    price: '$299 one-time',
    connections: 'Full audit',
    library: '50 templates',
    import: 'Manual',
    monitoring: '-',
    support: 'Email',
  },
  {
    plan: 'STARTER',
    price: '$29/mo',
    connections: '1 connection',
    library: '20 templates',
    import: 'Manual import',
    monitoring: 'Monthly scan',
    support: 'Email',
  },
  {
    plan: 'PRO',
    price: '$79/mo',
    connections: '3 connections',
    library: 'All 50+ templates',
    import: 'One-click import',
    monitoring: 'Weekly scan',
    support: 'Priority',
  },
  {
    plan: 'TEAM',
    price: '$149/mo',
    connections: '5 connections',
    library: 'All + custom',
    import: 'One-click + deploy',
    monitoring: 'Daily + Slack',
    support: 'CSM',
  },
  {
    plan: 'AGENCY',
    price: '$199/mo',
    connections: 'Unlimited clients',
    library: 'White-label',
    import: 'Full automation',
    monitoring: 'Client dashboards',
    support: 'Dedicated',
  },
];

const stackReaperRevenueCards = [
  {
    title: 'Premium flow templates',
    value: '$29-49',
    detail: 'Specialty template packs for enterprise replacements and niche workflow categories.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'n8n deployment service',
    value: '$99',
    detail: 'One-time setup where StackReaper deploys and configures a dedicated n8n instance on Railway.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    title: 'SaaS audit report PDF',
    value: '$19',
    detail: 'Board- or investor-ready audit export sold as an add-on after the initial analysis.',
    tone: 'bg-[linear-gradient(135deg,#eaf3ff_0%,#eefaf6_100%)]',
  },
  {
    title: 'Affiliate + API access',
    value: '20% / $49',
    detail: 'Recurring n8n Cloud referral commissions plus a dev-facing API plan for community builders.',
    tone: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
];

const stackReaperProjection = [
  { month: 'M1', mrr: 580, label: '$580' },
  { month: 'M2', mrr: 1200, label: '' },
  { month: 'M3', mrr: 4200, label: '$4,200' },
  { month: 'M4', mrr: 8200, label: '' },
  { month: 'M5', mrr: 14000, label: '$14,000' },
  { month: 'M6', mrr: 22000, label: '' },
  { month: 'M7', mrr: 30000, label: '$30,000' },
  { month: 'M8', mrr: 42000, label: '' },
  { month: 'M9', mrr: 52000, label: '$52,000' },
  { month: 'M10', mrr: 66000, label: '' },
  { month: 'M11', mrr: 80000, label: '$80,000' },
  { month: 'M12', mrr: 96000, label: '$96,000' },
];

const stackReaperProjectionRows = [
  {
    month: 'M1',
    starterPro: 'Kit×8 + 10 S + 3 Pro',
    team: '-',
    agency: '-',
    notes: '-',
    total: '$780',
    mom: '-',
  },
  {
    month: 'M2',
    starterPro: 'Kit×20 + 30S + 10P',
    team: '5T',
    agency: '2A',
    notes: '-',
    total: '$2,450',
    mom: '+214%',
  },
  {
    month: 'M3',
    starterPro: 'Kit×40 + 70S + 25P',
    team: '12T',
    agency: '5A',
    notes: '-',
    total: '$6,545',
    mom: '+167%',
  },
  {
    month: 'M6',
    starterPro: 'Kit×30/mo + 200S + 80P',
    team: '35T',
    agency: '15A',
    notes: '-',
    total: '$25,900',
    mom: '+78%',
  },
  {
    month: 'M9',
    starterPro: 'Kit×25/mo + 400S + 180P',
    team: '70T',
    agency: '30A',
    notes: '-',
    total: '$58,450',
    mom: '+50%',
  },
  {
    month: 'M12',
    starterPro: 'Kit×20/mo + 600S + 300P',
    team: '120T',
    agency: '50A',
    notes: '-',
    total: '$99,400',
    mom: '+27%',
  },
];

const stackReaperFirst50Cards = [
  {
    day: 'Day 1-30',
    title: 'Seed the Viral Hook in the Right Communities',
    items: [
      "Twitter/X: post the viral hook as a thread - 'This tool told me I was paying for 7 SaaS tools that n8n flows can replace for free. Cancelled them all. $3,840/year stays in my pocket. Here's the breakdown ->'",
      "Indie Hackers: post 'Show IH: Built a tool that finds your zombie SaaS subscriptions and gives you n8n flows to replace them'",
      "n8n community Discord (50,000+ members): 'I built a tool that finds which of your SaaS subscriptions can be replaced with n8n flows. Free audit this week.'",
      "Hacker News Ask HN: 'What's your biggest regret SaaS subscription? (Building tool to identify them)'",
      "r/startups, r/entrepreneur: 'I analyzed 200 startup SaaS stacks. Here are the 12 tools almost everyone is overpaying for in 2025.'",
      "Reddit r/n8n, r/automation: 'These are the 10 SaaS tools you can cancel today if you use n8n'",
    ],
    goal: 'Goal: 50 free accounts, 10 kit purchases ($2,990), 5 Pro subscribers ($395 MRR)',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
    accent: 'before:bg-[#22c55e]',
  },
  {
    day: 'Day 31-60',
    title: 'Product Hunt + Twitter Content Engine',
    items: [
      "Product Hunt launch: 'StackReaper - Cancel 7 SaaS subscriptions. Import the n8n flows. Keep $5,000.'",
      "Twitter content series: weekly 'zombie of the week' - one SaaS tool + its n8n replacement, detailed breakdown",
      "LinkedIn: post targeting CTOs at Series A companies - 'How much of your $6,000 monthly SaaS spend is zombie?'",
      'n8n community: publish top 10 replacement flows as free templates in n8n marketplace',
      "AppSumo submission - 'cancel SaaS and get n8n flows' is a perfect lifetime deal narrative",
    ],
    goal: 'Goal: 200 free, 50 kit purchases, 30 Pro subs, $2,500+ MRR',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
    accent: 'before:bg-[#4361ee]',
  },
  {
    day: 'Day 61-90',
    title: 'Scale with SEO + Community Flywheel',
    items: [
      "SEO: 'cancel Buffer alternative', 'replace Zapier with n8n', 'SaaS audit tool', 'zombie subscription finder'",
      "Free public tool: 'Is [SaaS Tool] replaceable with n8n?' - one-input analyzer, no signup required, viral",
      'Agency program: 10 agencies doing SaaS audits for clients - white-label StackReaper',
      "Case study: 'How [startup] cancelled 8 SaaS tools and saved $4,200/year using StackReaper'",
      'n8n marketplace: all 50 flow templates published free, StackReaper linked as the discovery layer',
    ],
    goal: 'Goal: 500 free, 80 kit, 100 Pro, 15 Team, 5 Agency, $10,000+ MRR',
    tone: 'bg-[linear-gradient(135deg,#eaf3ff_0%,#eefaf6_100%)]',
    accent: 'before:bg-[#7c3aed]',
  },
];

const stackReaperFunnelCards = [
  {
    title: 'Funnel 1: Viral / Community',
    steps: [
      { label: 'Viral / Community Reach', count: '15,000', pct: '100%', color: '#11180f' },
      { label: 'Clicks to Landing Page', count: '1,200', pct: '8%', color: '#3465e1' },
      { label: 'Starts Free Audit', count: '480', pct: '3.2%', color: '#ea8600' },
      { label: 'Connects Bank (Plaid)', count: '320', pct: '2.1%', color: '#16a34a' },
      { label: 'Sees Zombie List', count: '295', pct: '1.97%', color: '#ea8600' },
      { label: 'Kit Purchase or Pro Signup', count: '92', pct: '0.61%', color: '#d0a11a' },
    ],
  },
  {
    title: 'Funnel 2: SEO / Direct',
    steps: [
      { label: 'SEO / Direct Visitors', count: '5,000', pct: '100%', color: '#11180f' },
      { label: 'Starts Free Audit', count: '250', pct: '5%', color: '#3465e1' },
      { label: 'Connects Bank', count: '180', pct: '3.6%', color: '#ea8600' },
      { label: 'Sees Savings Estimate', count: '165', pct: '3.3%', color: '#16a34a' },
      { label: "Clicks 'Import n8n Flow'", count: '90', pct: '1.8%', color: '#ea8600' },
      { label: 'Converts to Pro', count: '42', pct: '0.84%', color: '#d0a11a' },
    ],
  },
];

const stackReaperActivation = [
  { label: 'Signs Up (Free)', value: 1000, pct: '100%', color: '#11180f' },
  { label: 'Connects Bank via Plaid', value: 680, pct: '68%', color: '#3465e1' },
  { label: 'Zombie Scan Complete', value: 640, pct: '64%', color: '#ea8600' },
  { label: 'Views Zombie List (OMG moment)', value: 600, pct: '60%', color: '#16a34a' },
  { label: 'Clicks a Zombie Tool', value: 480, pct: '48%', color: '#ea8600' },
  { label: 'Views n8n Flow Template', value: 360, pct: '36%', color: '#7c3aed' },
  { label: "Clicks 'Import to n8n'", value: 260, pct: '26%', color: '#ea8600' },
  { label: 'Hits Free Tier Import Limit', value: 200, pct: '20%', color: '#ea8600' },
  { label: 'Upgrades to Pro / Buys Kit', value: 128, pct: '12.8%', color: '#16a34a' },
];

const stackReaperWaterfall = [
  { label: 'Total SaaS Spend/mo', value: '$4,800', amount: 4800, color: '#475467' },
  { label: 'Essential Tools', value: '$1,800', amount: 1800, color: '#3465e1' },
  { label: 'Zombie (Replace)', value: '$1,200', amount: 1200, color: '#ef4444' },
  { label: 'Zombie (Cancel)', value: '$900', amount: 900, color: '#ef4444' },
  { label: 'Overlap (Dedupe)', value: '$600', amount: 600, color: '#ea8600' },
  { label: 'Remaining After Reap', value: '$300', amount: 300, color: '#16a34a' },
];

const stackReaperSavings = [
  { label: 'Buffer / Hootsuite -> n8n', value: '$1,188/yr saved', amount: 1188, color: '#16a34a' },
  { label: 'Zapier (Basic) -> n8n', value: '$2,388/yr saved', amount: 2388, color: '#16a34a' },
  { label: 'Typeform -> n8n form', value: '$396/yr saved', amount: 396, color: '#16a34a' },
  { label: 'PDF tools -> n8n+Claude', value: '$588/yr saved', amount: 588, color: '#16a34a' },
  { label: 'Email marketing -> n8n+Resend', value: '$1,788/yr saved', amount: 1788, color: '#16a34a' },
  { label: 'Scheduling tool -> n8n', value: '$348/yr saved', amount: 348, color: '#16a34a' },
  { label: 'Analytics overlay -> n8n', value: '$588/yr saved', amount: 588, color: '#ea8600' },
  { label: 'CRM basic -> n8n+Airtable', value: '$1,188/yr saved', amount: 1188, color: '#ea8600' },
];

const stackReaperPrompts = [
  {
    id: 'Prompt 1',
    title: 'Plaid Transaction Sync + Recurring Detection (Node.js)',
    category: 'Detection',
    code: `Node.js ile Plaid API recurring SaaS subscription detector yaz.
Plaid OAuth flow:
POST /link/token/create -> link token
POST /item/public_token/exchange -> access token (kaydet encrypted)
GET /transactions/get -> son 12 ay transactions

Recurring payment detection algorithm:
1. Group transactions by merchant_name (normalized)
2. For each merchant: check if payments occur at regular intervals
   Monthly: within 3-day window each month for 3+ months
   Annual: one payment per year with consistent amount
3. Calculate: {merchant_name, amount, frequency, total_annual_cost, first_seen, last_seen}
4. Filter: only charges > $5/mo (ignore micro-transactions)

SaaS vendor recognition:
- Match against Supabase saas_vendors table (500+ entries):
  {name, canonical_name, category, description, website, avg_monthly_cost}
- For unrecognized: Claude API classify: "Is this a SaaS subscription? What does it do?"

Output per detected subscription:
{vendor, amount, frequency, is_saas, category, description}

Save to 'subscriptions' table. TypeScript, Inngest background job.`,
  },
  {
    id: 'Prompt 2',
    title: 'Zombie Classification Engine (Claude API)',
    category: 'AI',
    code: `Node.js ile Claude API zombie classification service yaz.
Input: {subscription} per subscription from Plaid detection

Claude Sonnet API call (temperature: 0.3):
System: "You are a SaaS tool analyst specializing in automation replacement.
Rate replacement confidence objectively. Don't oversell automation capabilities."

User: "Analyze this SaaS subscription:
Tool: {name}
Category: {category}
Description: {description}
Monthly cost: \${amount}
Return JSON:
{
  replacement_confidence: 0-100,
  primary_function: string,
  replacement_type: 'n8n_flow'|'cancel_no_replacement'|'essential'|'duplicate_check',
  n8n_flow_description: string,
  estimated_setup_hours: 0.5|1|2|4|8,
  template_match: string,
  notes: string
}"

Match template_match against flow_templates table in Supabase.
Update subscriptions.zombie_analysis jsonb column.
TypeScript.`,
  },
  {
    id: 'Prompt 3',
    title: 'n8n Flow Import API (Node.js)',
    category: 'Automation',
    code: `Node.js ile n8n API workflow import servisi yaz.
User's n8n instance: {n8n_url, n8n_api_key} stored in Supabase (encrypted)
Endpoint: POST /api/flows/import
Input: {subscription_id, template_id, user_id}

Step 1: Fetch flow template JSON from Supabase flow_templates table
Step 2: Fetch user's n8n credentials (decrypt from Supabase Vault)
Step 3: Prepare workflow JSON:
- Replace template placeholder credentials with user values where auto-detectable
- Set workflow name: "[StackReaper] Replacing {tool_name}"
Step 4: POST to n8n API:
POST {n8n_url}/api/v1/workflows
Headers: X-N8N-API-KEY: {api_key}
Body: workflow JSON

On success: store workflow_id in subscriptions.n8n_workflow_id
Show user: workflow imported + link to open in n8n
TypeScript.`,
  },
  {
    id: 'Prompt 4',
    title: 'Savings Dashboard (React + Recharts)',
    category: 'Frontend',
    code: `React + Recharts ile StackReaper savings dashboard yaz.
Main sections:
1. Header KPIs:
- Total Monthly SaaS Spend
- Zombie Spend Identified (amber)
- Savings Captured This Month (green)
- Flows Imported (blue)

2. Zombie Stack Table: sortable by savings potential
Columns: Tool name, Monthly cost, Zombie type, Replacement confidence %, n8n template, Action
Row color: red=pure zombie, amber=replaceable, gray=essential

3. Savings Timeline: area chart - 12 months of zombie spend vs actual spend after StackReaper
4. Duplicate Groups: visual groups showing overlapping tools
5. Monthly Scan History

Light mode, Inter font, Tailwind, green (#16A34A) primary.
TypeScript, react-query.`,
  },
  {
    id: 'Prompt 5',
    title: 'n8n Deploy Button (Railway One-Click)',
    category: 'Infra',
    code: `Next.js ile Railway one-click n8n deployment flow yaz.
For users who don't have n8n: 'Deploy Your Free n8n Instance'

Step 1: Check if user already has n8n connected
If yes: skip to import flow
If no: show 'Deploy n8n on Railway (free tier)'

Step 2: Railway API integration:
POST https://backboard.railway.app/graphql/v2
Mutation: serviceCreate with n8n template

Template: pre-configured n8n Docker image with:
- N8N_BASIC_AUTH_ACTIVE=true
- N8N_BASIC_AUTH_USER={generated_user}
- N8N_BASIC_AUTH_PASSWORD={generated_password}
- WEBHOOK_URL=https://{railway_domain}

Step 3: Poll deployment status (30s intervals, max 5 min)
Step 4: Auto-connect to StackReaper and auto-import selected flow templates
UI: progress bar "Deploying your n8n... 47%" with live status
TypeScript, Next.js API routes.`,
  },
  {
    id: 'Prompt 6',
    title: 'Monthly Zombie Scan (Inngest Cron)',
    category: 'Jobs',
    code: `Inngest ile monthly zombie scan cron job yaz.
Runs: 1st of every month at 09:00 UTC

For each account with active Plaid connection:
1. Fetch new transactions since last scan (Plaid /transactions/sync)
2. Identify any NEW recurring payments not in subscriptions table
3. For new SaaS subscriptions: run zombie classification (Claude API)
4. For existing subscriptions: check if amount changed
5. Generate monthly summary
6. Send summary email via Resend + Slack webhook if configured

Alert triggers:
- New zombie detected > $50/mo: immediate Slack/email alert
- Price increase detected: immediate alert
- Total zombie spend > $500/mo threshold: urgent alert

TypeScript, Inngest.`,
  },
  {
    id: 'Prompt 7',
    title: 'Stripe One-Time + Subscription Billing',
    category: 'Billing',
    code: `Next.js + Stripe ile StackReaper billing yaz.
Products:
1. Kit ($299 one-time)
2. Starter ($29/mo)
3. Pro ($79/mo)
4. Team ($149/mo)
5. Agency ($199/mo)

/api/checkout/kit: Stripe payment_intent for one-time $299
/api/checkout/subscription: Stripe Checkout for monthly plans
/api/webhook: payment_intent.succeeded -> grant access
subscription.created/updated -> update accounts.plan
subscription.deleted -> downgrade

Feature gates:
- plaid_connections_limit per plan
- flow_imports_this_month
- one_click_import_enabled: pro+ only

Upgrade prompt: triggered when one_click_import clicked on starter
TypeScript.`,
  },
  {
    id: 'Prompt 8',
    title: 'Supabase Database Schema',
    category: 'Database',
    code: `StackReaper icin Supabase PostgreSQL semasi yaz:

accounts:
id, plan (kit|starter|pro|team|agency),
plaid_connection_limit int, flow_imports_this_month int,
one_click_import_enabled bool, stripe_ids jsonb

plaid_connections:
id, account_id, plaid_access_token encrypted,
plaid_item_id, institution_name, last_synced, status

subscriptions:
id, account_id, plaid_connection_id,
merchant_name text, canonical_name text, amount_monthly numeric,
frequency text (monthly|annual|weekly),
first_detected date, last_seen date,
is_saas bool, category text,
zombie_analysis jsonb,
status text (active|cancelled|monitoring),
n8n_workflow_id text,
annual_savings numeric,
cancelled_at timestamptz

flow_templates, n8n_connections, scan_history
RLS: accounts see only their own data.
Supabase Vault for Plaid tokens and n8n API keys.
Index: account_id, merchant_name, status.`,
  },
];

const stackReaperPromptPack = [
  {
    title: 'Zombie Detection & Analysis',
    accent: 'bg-[#fff4ea] text-[#b54708]',
    prompts: [
      `\"We're paying $99/month for Buffer. We only use it to schedule 5 LinkedIn posts per week. Can n8n replace this?\"`,
      `\"Scan my SaaS stack and rank the top 10 tools by 'easiest to replace with n8n + highest cost savings'\"`,
      `\"We have both Notion and Confluence in our stack ($30/mo combined). Which one should we keep and which can we replace?\"`,
      `\"We're paying $199/month for Zapier with 15 active Zaps. What would the migration to n8n look like?\"`,
      `\"Identify any tools in our stack that are just doing file conversion, PDF processing, or data extraction - all replaceable.\"`,
    ],
  },
  {
    title: 'Flow Architecture',
    accent: 'bg-[#eef4ff] text-[#2563EB]',
    prompts: [
      `\"Design an n8n workflow that does exactly what Buffer does for us: schedule LinkedIn + Twitter posts from a Google Sheet queue\"`,
      `\"Build an n8n flow that replaces our Typeform -> HubSpot -> Slack notification pipeline\"`,
      `\"We use Zapier to: (1) new Stripe payment -> add row to Airtable, (2) email -> Slack notification. Write both as n8n flows.\"`,
      `\"Design an n8n workflow that automates our weekly PDF report extraction and populates Google Sheets\"`,
      `\"Build an n8n + Claude flow that replaces our Jasper subscription for generating our weekly LinkedIn content\"`,
    ],
  },
  {
    title: 'ROI & Business Case',
    accent: 'bg-[#ecfbf4] text-[#067647]',
    prompts: [
      `\"Calculate the total annual savings if we replaced our top 5 zombie SaaS tools with n8n flows\"`,
      `\"How long would it take to set up the n8n replacement for Mailchimp given our current tech stack?\"`,
      `\"What are the risks of replacing Zapier with n8n for a non-technical team? How do we mitigate them?\"`,
      `\"We're presenting a SaaS audit to our board. Summarize our zombie stack in 3 bullet points with total savings.\"`,
    ],
  },
];

const stackReaperApiRows = [
  {
    method: 'POST',
    endpoint: '/connections/plaid',
    description: 'Connect bank/card via Plaid OAuth',
    params: '{"public_token":"link_public_token"}',
  },
  {
    method: 'POST',
    endpoint: '/connections/n8n',
    description: 'Connect n8n instance',
    params: '{"n8n_url":"https://...","api_key":"..."}',
  },
  {
    method: 'POST',
    endpoint: '/scan',
    description: 'Trigger zombie scan on connected accounts',
    params: '-',
  },
  {
    method: 'GET',
    endpoint: '/subscriptions',
    description: 'List all detected subscriptions',
    params: '?type=zombie&sort=savings_desc',
  },
  {
    method: 'GET',
    endpoint: '/subscriptions/:id',
    description: 'Get subscription detail with zombie analysis',
    params: '-',
  },
  {
    method: 'POST',
    endpoint: '/subscriptions/:id/analyze',
    description: 'Re-run AI analysis on subscription',
    params: '-',
  },
  {
    method: 'GET',
    endpoint: '/flows',
    description: 'List flow templates',
    params: '?category=social_media&replaces=buffer',
  },
  {
    method: 'GET',
    endpoint: '/flows/:id',
    description: 'Get flow template with workflow JSON',
    params: '-',
  },
  {
    method: 'POST',
    endpoint: '/flows/:id/import',
    description: 'Import flow to connected n8n',
    params: '{"subscription_id":"uuid"}',
  },
  {
    method: 'POST',
    endpoint: '/n8n/deploy',
    description: 'Deploy fresh n8n on Railway',
    params: '-',
  },
  {
    method: 'GET',
    endpoint: '/savings',
    description: 'Get savings summary',
    params: '?period=month&year=2025',
  },
  {
    method: 'GET',
    endpoint: '/scan/history',
    description: 'List scan history',
    params: '-',
  },
  {
    method: 'GET',
    endpoint: '/usage',
    description: 'Current connection count vs plan limit',
    params: '-',
  },
];

const stackReaperLandingSections = [
  {
    title: 'Viral Hook (The Pattern Interrupt)',
    tone: 'bg-[#fff4ea] text-[#b54708]',
    items: [
      {
        label: 'Option A · The Shock Factor',
        copy: `"My SaaS bill was a $12,000/year crime scene. This tool identified 9 'zombie' apps, built the n8n workflows to kill them, and put $540/mo back in my pocket. Watch the audit ->"`,
      },
      {
        label: "Option B · The 'How-To' Tease",
        copy: `"Stop paying for buttons you can build. I replaced 6 of my most expensive SaaS tools with 1-click n8n templates. Total time: 15 mins. Total savings: $4,200/year. See the list ->"`,
      },
      {
        label: 'Option C · The Minimalist',
        copy: `"SaaS companies hope you never find this tool. It scans your bank, finds the bloat, and gives you the automation to replace it for free. I saved $320 this morning. Here's how ->"`,
      },
    ],
  },
  {
    title: 'Hero Section',
    tone: 'bg-[#eef4ff] text-[#2563EB]',
    items: [
      {
        label: 'The Aggressive',
        copy: `Headline: Stop Paying the "Lazy Tax" on Your SaaS Stack.\nSubheadline: Most of your subscriptions are just fancy wrappers for simple automations. We find the waste and give you the n8n flows to replace it instantly.`,
      },
      {
        label: 'The Tech-Forward',
        copy: `Headline: Self-Host Your Stack. Keep Your Revenue.\nSubheadline: Transition from expensive SaaS to lean, self-hosted n8n workflows. StackReaper audits your spend and hands you the blueprints to automate your overhead away.`,
      },
      {
        label: 'The Result-Oriented',
        copy: `Headline: Turn Your SaaS Expenses into Profit Margins.\nSubheadline: Your bank account is leaking cash to tools you don't need. Connect your card, identify the "zombies," and import n8n flows that do the same job for $0.`,
      },
    ],
  },
  {
    title: 'Pain Section',
    tone: 'bg-[#fff1f3] text-[#dc2626]',
    items: [
      {
        label: 'Option A · Death by 1000 Cuts',
        copy: `Your profit margin is being eaten by $49 buttons.\nYou're paying for a "Platform" when all you need is a webhook. A third of your stack exists simply because you didn't have the n8n flow to replace it. Until now.`,
      },
      {
        label: 'Option B · Hidden Waste',
        copy: `You are subsidizing SaaS companies' marketing budgets.\n73% of SaaS licenses go unused. You're paying for seats that haven't been logged into since 2024. StackReaper exposes the ghost-towns in your tech stack.`,
      },
      {
        label: 'Option C · Modern Reality',
        copy: `In 2026, paying for "Form Parsers" is a choice, not a necessity.\nWhy pay $100/month for a tool that n8n handles in 3 nodes? Most founders stay on the subscription treadmill because they don't know the alternative exists. We show you the exit.`,
      },
    ],
  },
  {
    title: 'Solution (The 4-Step Process)',
    tone: 'bg-[#ecfbf4] text-[#067647]',
    items: [
      {
        label: 'Option 1 · Simple & Clean',
        copy: `Sync: Connect Plaid in 60 seconds.\nExpose: AI flags "Zombie" tools and overlaps.\nDeploy: One-click n8n flow imports to your instance.\nReclaim: Cancel the sub and watch your savings meter rise.`,
      },
      {
        label: 'Option 2 · Technical / Power-User',
        copy: `Audit: Secure OAuth scan of your recurring expenses.\nClassify: Tools categorized by "Replaceable vs. Essential."\nAutomate: Get the JSON blueprints for your exact use case.\nOptimize: Continuous monitoring for new SaaS bloat.`,
      },
      {
        label: 'Option 3 · Zero-Effort',
        copy: `The Scan: We find the tools you forgot you were paying for.\nThe Logic: We match your spend against our library of 500+ n8n flows.\nThe Switch: Swap the $99/mo tool for a $0/mo workflow.\nThe Win: Immediate ROI. Your first scan pays for the year.`,
      },
    ],
  },
  {
    title: 'Social Proof & Viral Section',
    tone: 'bg-[#f5f0ff] text-[#7c3aed]',
    items: [
      {
        label: 'Option A · Bragging Rights',
        copy: `"The Profit Audit" — Share your "Savings Score" on LinkedIn. Show your peers exactly how many zombies you killed and how much runway you added to your startup.`,
      },
      {
        label: 'Option B · Transparency',
        copy: `"Don't Gatekeep the Savings." — Generate a public "Kill List" of the tools you replaced with n8n. Let other founders see your architecture and copy your efficiency.`,
      },
      {
        label: 'Option C · Wall of ROI',
        copy: `"Real Results, Real Flows." — "StackReaper didn't just tell me I was wasting money; it gave me the file to fix it. Saved $600/month in under an hour." — Alex M., Founder.`,
      },
    ],
  },
];

const stackReaperPricingAlternatives = [
  {
    tier: 'Option 1 · The Bounty',
    price: '$299 One-Time',
    bestFor: 'One-and-done cleanup.',
    value: 'Get the 50 "Classic" flows.',
  },
  {
    tier: 'Option 2 · The Pro',
    price: '$79 / month',
    bestFor: 'Scaling teams with new apps.',
    value: 'Weekly "Zombie Alerts."',
  },
  {
    tier: 'Option 3 · The Enterprise',
    price: 'Custom / % of Savings',
    bestFor: 'VCs / Portfolios.',
    value: 'Audit 10+ startups at once.',
  },
];

const stackReaperWaitlistEmails = [
  {
    day: 'Day 0',
    subject: "You're on the StackReaper waitlist",
    preview: 'Confirm the signup, frame the zombie SaaS problem, and ask for a quick reply to personalize the follow-up.',
    body: `Hi [First Name],

You just joined the StackReaper waitlist - and you're one of 600+ founders and CTOs who are done watching $3,000-8,000/month disappear into zombie SaaS subscriptions.

Here's what you get when your slot opens:
-> Connect your bank/card (2 min) -> full zombie scan
-> AI classifies every recurring SaaS by replacement confidence
-> 50 tested n8n flow templates to replace the zombies
-> One-click import to your n8n instance
-> Monthly scan to catch new zombies before they compound

Quick question: how many SaaS tools do you think your company is paying for right now? Take a guess - I'll tell you the average for your company size when I reply.

- [Founder Name], StackReaper`,
    cta: 'Reply with your guess',
  },
  {
    day: 'Day 3',
    subject: 'The zombie stack math most CTOs ignore',
    preview: 'Turn the average startup stack into concrete annual savings and push the reader toward a self-recognition moment.',
    body: `The average 20-person startup: 35-50 active SaaS subscriptions.

Let me show you what that looks like in dollars:

Buffer/Hootsuite: $99/mo -> 3-node n8n flow: $0
Zapier (basic): $49/mo -> n8n migration: $0
Typeform: $29/mo -> n8n webhook: $0
PDF parsing tool: $39/mo -> n8n + Claude: $0
Email newsletter basic: $29/mo -> n8n + Resend: $0
Scheduling tool: $10/mo -> Cal.com + n8n: $0
Analytics overlay: $19/mo -> n8n + Sheets: $0

Annual zombie savings: $3,288

These are tools almost every startup has.
Almost none of them know they could be $0.

[Is this your stack? Check in 3 minutes ->]`,
    cta: 'Check my stack',
  },
  {
    day: 'Day 7',
    subject: 'What happens when you connect your bank',
    preview: 'Explain the product UI, classification colors, and the first action the user should take after a scan.',
    body: `When you connect StackReaper, here's what you see:

A table of every recurring payment from the last 12 months.
Green: Essential (keep it).
Amber: Zombie - can be replaced with n8n flow.
Red: Pure zombie - cancel, no replacement even needed.

For every amber tool, you see:
- Exactly what n8n flow replaces it
- The setup time (usually 30-60 min)
- A one-click import button

Most users have their first flow imported and their first SaaS cancelled within 45 minutes.

[Watch a real StackReaper scan in 90 seconds ->]`,
    cta: 'Watch the scan',
  },
  {
    day: 'Day 11',
    subject: 'One question before we give you access',
    preview: 'Segment the user by n8n familiarity so onboarding can be adapted before access opens.',
    body: `[First Name],

We're opening accounts this week. Quick question:

Do you currently use n8n?

a) Yes, actively - I know my way around
b) I've tried it but haven't gone deep
c) No, but I'm interested in starting
d) I use Zapier or Make instead

Reply with a letter. I'll customize your onboarding accordingly - including a 'getting started with n8n' guide if you need it.`,
    cta: 'Reply with a letter',
  },
  {
    day: 'Day 14',
    subject: 'Your StackReaper account is ready',
    preview: 'Open the account, reduce friction to the first scan, and point the user to the highest-confidence first win.',
    body: `[First Name] - you're in.

[Connect Your Bank and Find Your Zombies ->]

Start here: connect one bank account or credit card.
Takes 2 minutes. The scan runs automatically.
Your first zombie list will be ready in about 5 minutes.

When you see it, click the highest-confidence amber tool first.
Import the n8n flow. Cancel the subscription.

That first one is the dopamine hit that makes the rest easy.

Questions? Reply here.

- [Founder Name], StackReaper`,
    cta: 'Connect your bank',
  },
];

const stackReaperBrandVoicePrinciples = [
  {
    title: 'Direct & Blunt',
    detail: 'Founders waste money on SaaS. Name it without euphemisms. "That is a zombie. Cancel it."',
    icon: '!',
    tone: 'bg-[#fff4ea] text-[#b54708]',
  },
  {
    title: 'Slightly Dark',
    detail: 'The zombie / reaper metaphor is the identity. Use it confidently: survivors, zombies, harvest, kill list.',
    icon: '☾',
    tone: 'bg-[#f5f0ff] text-[#7c3aed]',
  },
  {
    title: 'Technically Credible',
    detail: 'The audience understands n8n. Speak in the language of APIs, imports, webhooks, and actual operator steps.',
    icon: '</>',
    tone: 'bg-[#eef4ff] text-[#2563EB]',
  },
  {
    title: 'ROI-Obsessed',
    detail: 'Lead with the money every time. Put "$3,840/year" before any feature explanation.',
    icon: '$',
    tone: 'bg-[#ecfbf4] text-[#067647]',
  },
  {
    title: 'Witty',
    detail: 'Zombie finds are surprising and satisfying. Let the copy feel sharp, memorable, and a little dangerous.',
    icon: ':)',
    tone: 'bg-[#fff1d6] text-[#ca8a04]',
  },
];

const stackReaperLogoSpecRows = [
  {
    element: 'Symbol',
    specification:
      "A stylized scythe blade that doubles as a downward graph line. Neon green (#16A34A), geometric, clean, slightly edgy.",
  },
  {
    element: 'Wordmark',
    specification:
      "STACKREAPER in uppercase monospace or near-monospace. 'STACK' in green, 'REAPER' in near-black.",
  },
  {
    element: 'Icon-only',
    specification:
      'Scythe / graph symbol inside a dark rounded square with green accent for app icon, favicon, and social avatar.',
  },
  {
    element: 'Dark variant',
    specification: 'Full white wordmark on near-black green (#0A0F06) for cover pages and dark mode UI.',
  },
  {
    element: 'Minimum size',
    specification: 'Wordmark: 120px. Symbol: 24px.',
  },
];

const stackReaperLanguageGuideRows = [
  {
    do: `"Your stack is bleeding cash. We're here to cauterize it."`,
    dont: `"We help you manage your business expenses more effectively."`,
  },
  {
    do: `"That's a zombie. Kill the sub, import the flow, keep the $89."`,
    dont: `"A user-friendly solution for digital organization."`,
  },
  {
    do: `"Stop paying for UI you don't use. Take the logic, ditch the bill."`,
    dont: `"Please review these suggestions to potentially reduce your overhead."`,
  },
  {
    do: `"We found $6,400 in ghost subscriptions. Here is your harvest."`,
    dont: `"We're a SaaS management partner."`,
  },
  {
    do: `"POST to your n8n instance. One click. Zero bloat."`,
    dont: `"Saving a little bit every month is a great habit!"`,
  },
  {
    do: `"Audit. Replace. Reclaim. Repeat."`,
    dont: `"Modern AI for modern businesses."`,
  },
];

const stackReaperLaunchChecklistGroups = [
  {
    title: 'Technical Readiness',
    tone: 'bg-[#eef4ff] text-[#2563EB]',
    items: [
      'Plaid OAuth: connect, sync 12 months transactions, recurring detection algorithm tested with 10 real accounts.',
      "Zombie classification: Claude API tested for 50 known SaaS tools, output quality QA'd against manual classification.",
      'n8n API import: test import for 20 templates into n8n Cloud + self-hosted instances.',
      'Railway n8n deploy: one-click deployment tested, takes under 5 minutes.',
      'All 50 flow templates: tested and importable in n8n 1.x, no deprecated nodes.',
      'Savings dashboard: calculations accurate, matches manual calculation for 10 test accounts.',
      'Monthly cron: Inngest job tested, alerts sending correctly via Resend + Slack.',
      'Stripe: kit ($299) + all subscription plans + feature gates tested.',
    ],
  },
  {
    title: 'Content & Flow Library',
    tone: 'bg-[#ecfbf4] text-[#067647]',
    items: [
      'All 50 n8n flow templates published in n8n community marketplace (free, StackReaper linked).',
      'Each template has README with setup instructions, required credentials, and expected outcome.',
      'Zombie vendor database: 500+ SaaS tools with canonical names, categories, descriptions.',
      'Cancel guides: step-by-step cancellation process for top 50 zombie tools, URL included.',
      "Demo scan data: 10 'sample accounts' ready for live demos with varied zombie profiles.",
    ],
  },
  {
    title: 'Marketing & Launch',
    tone: 'bg-[#fff4ea] text-[#b54708]',
    items: [
      'Landing page live with viral hook + all copy sections from Section 16.',
      'Waitlist email sequence live in Loops.so (5 emails from Section 17).',
      'Product Hunt assets: tagline, description, 5 screenshots including zombie list screen, 90-second demo video.',
      "Twitter thread drafted: 'This tool found 7 SaaS tools I should cancel...' - the viral hook.",
      'n8n community Discord post ready: free templates + StackReaper announcement.',
      "Indie Hackers launch post: 'Show IH: Built the SaaS zombie detector'.",
      "Hacker News 'Ask HN' strategy: 'What's your biggest regret SaaS subscription?' lead post.",
      "Free one-input tool: 'Is [tool name] replaceable with n8n?' - no signup, viral top-of-funnel.",
    ],
  },
];

const stackReaperDpaSections = [
  {
    number: '1',
    title: 'Overview and Acceptance',
    body:
      'This Privacy and Data Processing Agreement outlines how STACKREAPER collects, processes, and protects the financial and operational data of its users. By connecting a bank account via Plaid or integrating an n8n instance, the user explicitly consents to these data practices.',
  },
  {
    number: '2',
    title: 'Data Collection and Access',
    body:
      'STACKREAPER accesses financial transaction data via Plaid OAuth, syncing up to 12 months of history to identify recurring SaaS charges. It may also access n8n instance URL and API key solely to enable one-click flow import, and it stores account identity plus billing details via Stripe.',
  },
  {
    number: '3',
    title: 'Data Processing and AI Analysis',
    body:
      'Claude API analyzes merchant names and amounts to classify tool categories, zombie status, and n8n replacement confidence. Sensitive tokens such as Plaid access tokens and n8n API keys are stored with AES-256 encryption in Supabase Vault. Personal identity is not shared with AI models; only merchant strings and transaction amounts are processed.',
  },
  {
    number: '4',
    title: 'Data Retention and Deletion',
    body:
      'Transaction summaries are retained while the account is active to power the Savings Dashboard and monthly zombie scans. Users may disconnect their bank account or delete their account at any time, after which synced transaction data and encrypted tokens are permanently purged from PostgreSQL / Supabase within 30 days.',
  },
  {
    number: '5',
    title: 'Security Measures',
    body:
      'STACKREAPER uses OAuth-only bank connections via Plaid, Row Level Security in Supabase to ensure users can access only their own data, and encryption in transit (TLS) plus encryption at rest (AES-256).',
  },
  {
    number: '6',
    title: 'Third-Party Sub-Processors',
    body:
      'Approved sub-processors include Plaid for financial data aggregation, Anthropic for AI classification, Supabase for database and vault storage, Vercel for hosting, Stripe for payment processing, and Railway / Render for optional n8n cloud deployments.',
  },
  {
    number: '7',
    title: 'Contact',
    body:
      'For data-related inquiries or to exercise GDPR / CCPA rights, the user may contact the Data Privacy Officer at privacy@stackreaper.io.',
  },
];

const stackReaperSubProcessors = [
  { provider: 'Plaid', role: 'Financial data aggregation' },
  { provider: 'Anthropic (Claude)', role: 'AI-driven SaaS classification' },
  { provider: 'Supabase', role: 'Database and encrypted vault storage' },
  { provider: 'Vercel', role: 'Application hosting' },
  { provider: 'Stripe', role: 'Payment processing' },
  { provider: 'Railway / Render', role: 'Optional n8n cloud deployments' },
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

const stackReaperAbFrameworkRows = [
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
];

const stackReaperAbSchedule = [
  { timeline: 'Weeks 1-2', test: 'Test 04 — Onboarding: Plaid connection timing', reason: 'Critical path to the first aha moment.' },
  { timeline: 'Weeks 3-4', test: 'Test 02 — Landing: Hero headline', reason: 'Highest traffic, biggest narrative swing.' },
  { timeline: 'Weeks 5-6', test: 'Test 01 — Landing: CTA copy optimization', reason: 'Refine conversion after headline winner.' },
  { timeline: 'Weeks 7-8', test: 'Test 06 — Email: Zombie Alert subject line', reason: 'Open rate directly influences activation.' },
  { timeline: 'Weeks 9-10', test: 'Test 10 — In-app: Replacement flow upsell timing', reason: 'Moment of product value should drive paid conversion.' },
  { timeline: 'Weeks 11-12', test: 'Test 08 — Pricing: Plan anchor order', reason: 'Improve MRR mix between one-time and recurring plans.' },
];

const stackReaperAbScenarioCards = [
  {
    id: 'Test 01',
    title: 'Landing Page — CTA Copy',
    hypothesis: 'Direct benefit-oriented CTAs generate higher signups than generic action-oriented CTAs.',
    control: 'Find Your Zombie Subscriptions Free ->',
    test: 'Connect Bank. Kill Your First Zombie in 3 min ->',
    metric: 'Free signup rate',
    impact: '+15-25%',
  },
  {
    id: 'Test 02',
    title: 'Landing Page — Hero Headline',
    hypothesis: 'A headline using the zombie metaphor converts better than a standard SaaS management headline.',
    control: "Manage and Optimize Your Startup's SaaS Spend.",
    test: 'Your SaaS stack has zombies. We find them. We replace them.',
    metric: 'Time on page + CTA click rate',
    impact: '+20-35%',
  },
  {
    id: 'Test 03',
    title: 'Landing Page — Social Proof Format',
    hypothesis: 'Displaying a specific dollar amount saved is more trustworthy than a general quote.',
    control: 'Standard customer quote: "Great tool for saving money!"',
    test: 'Verified Saving Card: "$4,620/year saved by James T. (CTO)"',
    metric: 'Scroll depth + CTA conversion',
    impact: '+10-20%',
  },
  {
    id: 'Test 04',
    title: 'Onboarding — Plaid Trigger',
    hypothesis: 'Making the bank connection the immediate first step increases the aha moment frequency.',
    control: "Signup -> Dashboard -> 'Connect Bank' button in center.",
    test: 'Signup -> Immediate Plaid OAuth screen (Full-screen focus).',
    metric: 'Bank connection rate (Day 1)',
    impact: '+25-45%',
  },
  {
    id: 'Test 05',
    title: 'Onboarding — Empty State',
    hypothesis: 'Showing a simulated audit reduces bounce rates for users hesitant to connect real banks.',
    control: 'Empty screen with "Connect your bank to see data."',
    test: `Demo Mode dashboard showing 7 common zombies (Slack, Zoom, etc.) with 'Replace' buttons active.`,
    metric: 'Conversion to real bank connection',
    impact: '+30% improvement',
  },
  {
    id: 'Test 06',
    title: 'Engagement Email — Subject Line',
    hypothesis: 'Subject lines that mention a specific kill list increase open rates.',
    control: 'Your weekly StackReaper SaaS audit is ready.',
    test: 'Kill List: We found 3 zombies costing you $189/mo.',
    metric: 'Email open rate + flow import rate',
    impact: '+25-40%',
  },
  {
    id: 'Test 07',
    title: 'Viral Share — Card Format',
    hypothesis: 'Highlighting runway added is more shareable than money saved.',
    control: 'I saved $500/mo using StackReaper.',
    test: 'I just added 1.5 months of runway to my startup by killing SaaS zombies.',
    metric: 'Social share clicks (Twitter/LinkedIn)',
    impact: '+30-50%',
  },
  {
    id: 'Test 08',
    title: 'Pricing Page — Plan Anchor',
    hypothesis: 'Presenting the Pro subscription before the one-time audit increases recurring revenue.',
    control: 'One-time Audit ($299) -> Pro Subscription ($79/mo)',
    test: 'Pro Subscription ($79/mo) -> One-time Audit ($299)',
    metric: 'Monthly subscription selection rate',
    impact: '+15-20%',
  },
  {
    id: 'Test 09',
    title: 'Pricing Page — Value Framing',
    hypothesis: 'Framing the price against the waste makes the cost feel negligible.',
    control: 'Get StackReaper for $299.',
    test: 'Spend $299 once. Save $3,800 every year.',
    metric: 'Checkout initiation rate',
    impact: '+20-25%',
  },
  {
    id: 'Test 10',
    title: 'In-App — Upgrade Prompt Timing',
    hypothesis: 'Prompting for the Pro plan during the second n8n flow import is the peak moment of value.',
    control: 'Upgrade prompt after the first scan completes.',
    test: 'Upgrade prompt specifically when clicking "Import 2nd n8n Flow Template."',
    metric: 'Free -> paid conversion rate',
    impact: '+20-35%',
  },
  {
    id: 'Test 11',
    title: 'Retention — Savings Milestone',
    hypothesis: 'Celebrating total savings triggers loss aversion and reduces churn.',
    control: 'Your account is active. Monthly scan running.',
    test: `You've officially killed $5,000 in waste since joining. Don't let new zombies creep back in.`,
    metric: 'Churn rate reduction',
    impact: '-15% churn',
  },
  {
    id: 'Test 12',
    title: 'Replacement Flow — Complexity Level',
    hypothesis: 'Simpler 3-node n8n flows have a higher import rate than mega-flows.',
    control: 'Full enterprise-grade workflow (15+ nodes).',
    test: `Lean MVP workflow (3-5 nodes) with an 'Extend Later' guide.`,
    metric: 'Successful n8n import + SaaS cancellation',
    impact: '+40-60%',
  },
];

const stackReaperCostStage1Rows = [
  { service: 'Vercel', plan: 'Hobby', cost: '$0', notes: 'Frontend hosting & Serverless API routes.' },
  { service: 'Supabase', plan: 'Free', cost: '$0', notes: '500MB DB, Auth, and Vault for encrypted API keys.' },
  { service: 'Plaid', plan: 'Development', cost: '$0', notes: 'Up to 100 items (bank connections) for free in Sandbox/Dev.' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$15-40/mo', notes: 'Scanning 1K transactions @ ~$0.02 per classification.' },
  { service: 'Railway / n8n', plan: 'Trial/Starter', cost: '$5/mo', notes: 'Hosting the reference n8n instance for template testing.' },
  { service: 'Loops.so', plan: 'Free', cost: '$0', notes: 'Up to 1,000 contacts for Zombie Alert emails.' },
  { service: 'PostHog', plan: 'Free tier', cost: '$0', notes: '1M events/mo + Feature Flags for A/B testing.' },
  { service: 'Domain (.io)', plan: 'One-time', cost: '~$40/yr', notes: 'stackreaper.io or similar.' },
];

const stackReaperCostStage2Rows = [
  { service: 'Vercel', plan: 'Pro', cost: '$20/mo', notes: 'Required for commercial use and team collaboration.' },
  { service: 'Supabase', plan: 'Pro', cost: '$25/mo', notes: 'Daily backups, PITR, and increased storage for audit logs.' },
  { service: 'Plaid', plan: 'Launch', cost: '~$150-300/mo', notes: 'Volume-based pricing for bank auth + transaction pulls.' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$100-250/mo', notes: 'Deep analysis of 50k+ transactions for 500 users.' },
  { service: 'Railway / n8n', plan: 'Pro', cost: '$20/mo', notes: 'Scaling the template testing environment.' },
  { service: 'Loops.so', plan: 'Growth', cost: '$49/mo', notes: 'Automated SaaS Waste weekly reporting.' },
  { service: 'Stripe', plan: '2.9% + 30¢', cost: '~$1,150/mo', notes: 'Based on 400 users × $79/mo = $31,600 MRR.' },
  { service: 'PostHog', plan: 'Paid', cost: '~$30/mo', notes: 'Session recordings to identify onboarding friction.' },
];

const stackReaperCostStage3Rows = [
  { service: 'Vercel', plan: 'Pro/Ent.', cost: '$40-200/mo', notes: 'High bandwidth for dashboard data visualization.' },
  { service: 'Supabase', plan: 'Pro + Compute', cost: '$100-250/mo', notes: 'Optimized instances for heavy JSON processing.' },
  { service: 'Plaid', plan: 'Scale', cost: '$500-800/mo', notes: 'High-volume transaction syncs and webhooks.' },
  { service: 'Claude API', plan: 'Batch API', cost: '$300-600/mo', notes: 'Using Batch API (50% cheaper) for non-instant audits.' },
  { service: 'Stripe', plan: 'Custom', cost: '~$5,800/mo', notes: 'Based on 2,000 users × $99 avg = $198,000 MRR.' },
  { service: 'Inngest', plan: 'Pro', cost: '$95/mo', notes: 'Managing complex Scan -> Classify -> Suggest job queues.' },
  { service: 'Cloudflare', plan: 'Business', cost: '$200/mo', notes: 'Advanced WAF and DDoS protection for financial data.' },
];

const stackReaperCostRevenueRows = [
  { stage: '0 - 10 customers', infra: '$5 - 50/mo', mrr: '$0 - $790/mo', ratio: '< 6%' },
  { stage: '10 - 100 customers', infra: '$150 - 350/mo', mrr: '$790 - $7,900/mo', ratio: '~4%' },
  { stage: '100 - 500 customers', infra: '$400 - 700/mo', mrr: '$7,900 - $39,500/mo', ratio: '~1.8%' },
  { stage: '500 - 1000 customers', infra: '$700 - 1,200/mo', mrr: '$39,500 - $79,000/mo', ratio: '~1.5%' },
  { stage: '2000+ customers', infra: '$2,000+/mo', mrr: '$150,000+/mo', ratio: '< 1.3%' },
];

const stackReaperDecisionPoints = [
  {
    title: 'Plaid vs. Manual CSV Upload',
    detail:
      'Plaid costs ~$1.50 - $4.00 per user connection. For low-margin one-time audits, this is expensive. Offer direct bank link for Pro users and a manual CSV drag-and-drop option for free / low-tier users to keep COGS down.',
    tone: 'bg-[#fff4ea]',
  },
  {
    title: 'Claude 3.5 Sonnet vs. Haiku',
    detail:
      "Classifying 100 transactions does not require a god-tier model. Use Claude 3 Haiku for initial merchant classification and escalate to Sonnet only for deeper replacement logic where reasoning quality matters.",
    tone: 'bg-[#eef4ff]',
  },
  {
    title: 'Managed n8n vs. Self-hosted Templates',
    detail:
      "Do not host users' n8n instances. Keep your automation cost near zero and focus on JSON export plus setup guidance. Push users toward n8n Cloud or Railway where affiliate economics and liability are better.",
    tone: 'bg-[#ecfbf4]',
  },
];

const stackReaperPrimaryDomains = [
  {
    domain: 'stackreaper.io',
    recommendation: 'Recommended',
    rationale: 'The standard for modern SaaS / DevTools. Perfect fit for the hacker and automation audience.',
  },
  {
    domain: 'stackreaper.com',
    recommendation: 'Professional',
    rationale: 'Important for long-term trust. Financial tools benefit from the authority of a .com.',
  },
  {
    domain: 'stackreaper.app',
    recommendation: 'Alternative',
    rationale: 'Strong if the product is framed as a continuous monitoring dashboard.',
  },
  {
    domain: 'getstackreaper.com',
    recommendation: 'Fallback',
    rationale: 'Classic SaaS prefix if the main .com is parked or overpriced.',
  },
];

const stackReaperAltDomains = [
  {
    brand: 'SaaSReaper',
    domains: 'saasreaper.io / .com',
    rationale: 'More specific to the SaaS niche. Highly descriptive.',
    power: '★★★★★',
  },
  {
    brand: 'ZombieKill',
    domains: 'zombiekill.io / .app',
    rationale: 'Leans fully into the SaaS Zombie metaphor. Aggressive and viral.',
    power: '★★★★',
  },
  {
    brand: 'StackKill',
    domains: 'stackkill.io / .com',
    rationale: 'Short, punchy, and sharp in a cost-cutting context.',
    power: '★★★★',
  },
  {
    brand: 'BurnReaper',
    domains: 'burnreaper.com / .io',
    rationale: 'Speaks directly to monthly burn and founder pain.',
    power: '★★★★',
  },
  {
    brand: 'FlowReaper',
    domains: 'flowreaper.io / .net',
    rationale: 'Emphasizes the transition from SaaS to n8n flows.',
    power: '★★★★',
  },
  {
    brand: 'SaaSHarvest',
    domains: 'saasharvest.com / .io',
    rationale: 'Cleaner variation on the reaper idea, focused on harvesting savings.',
    power: '★★★',
  },
  {
    brand: 'ZeroStack',
    domains: 'zerostack.io / .ai',
    rationale: 'Suggests a lean, automation-first architecture with zero waste.',
    power: '★★★',
  },
];

const stackReaperDomainNotes = [
  {
    title: '.io Preference',
    detail:
      'For n8n users and technical product buyers, .io is more than a TLD. It is a tribal signal that says this tool is built for builders.',
    tone: 'bg-[#eef4ff]',
  },
  {
    title: 'Trust Factor',
    detail:
      'Because StackReaper asks for Plaid-linked bank access, the domain must feel serious and credible. Avoid anything that reads as shady, cheap, or over-optimized.',
    tone: 'bg-[#fff4ea]',
  },
  {
    title: 'Verb Test',
    detail:
      `"I'm going to StackReaper my bank statement" already sounds like a high-intensity audit action. The brand should carry that weight naturally.`,
    tone: 'bg-[#ecfbf4]',
  },
];

const stackReaperActivationMilestones = [
  { milestone: 'M0', event: 'Signup (Account created)', timing: 'Day 0', benchmark: '100%' },
  { milestone: 'M1', event: 'Bank Connected (Plaid OAuth success)', timing: 'Day 0 (Hour 0)', benchmark: '68%' },
  { milestone: 'M2', event: 'First Audit Complete (AI identifies Zombies)', timing: 'Day 0 (Minute 5)', benchmark: '62%' },
  { milestone: 'M3', event: 'Flow Selected (User views n8n template for a tool)', timing: 'Day 0-1', benchmark: '45%' },
  { milestone: 'M4', event: 'n8n Instance Linked (Webhook/API connected)', timing: 'Day 1-2', benchmark: '31%' },
  { milestone: 'M5', event: 'First Flow Imported (The Aha! Moment)', timing: 'Day 1-2', benchmark: '24%' },
  { milestone: 'M6', event: 'Subscription Cancelled (User marks tool as Killed)', timing: 'Day 2-3', benchmark: '19%' },
  { milestone: 'M7', event: 'Total Savings Shared (Viral loop triggered)', timing: 'Day 3-5', benchmark: '12%' },
  { milestone: 'M8', event: 'Pro Upgrade (Continuous monitoring enabled)', timing: 'Day 7-30', benchmark: '7.2%' },
];

const stackReaperOnboardingDays = [
  {
    day: 'Day 0',
    title: 'The Scan',
    accent: 'before:bg-[#2563EB]',
    items: [
      'Trigger: Account created.',
      `Welcome Email: "Your Reaper is ready. Connect your bank to find the $3,000+ you're burning."`,
      `Empty State Dashboard: Show a blurred audit of common SaaS zombies (Slack, Adobe, Calendly) with a "Reveal Your Zombies" CTA.`,
      'Onboarding Checklist: Connect Bank / Audit Results / Import First Flow / Kill First Zombie.',
    ],
  },
  {
    day: 'Day 1',
    title: 'The Money on the Table Nudge',
    accent: 'before:bg-[#d97706]',
    items: [
      "Trigger: User signed up but hasn't connected Plaid yet.",
      `Re-engagement Email: "We found an average of 6 zombie tools per startup this week. Don't let your bank account bleed for another 24 hours."`,
      `In-app Nudge: Red banner: "You're 60 seconds away from potentially saving $400/mo. Start the scan."`,
    ],
  },
  {
    day: 'Day 3',
    title: 'The Ready-to-Deploy Alert',
    accent: 'before:bg-[#16A34A]',
    items: [
      'Trigger: Bank connected and audit done, but no n8n flow imported.',
      `Logic Preview Email: "We found a replacement for your [SaaS Tool Name] subscription. Here is the 3-node n8n logic that saves you $49/mo. Import it now."`,
      `In-app Prompt: One-Click Deployment modal for the user's most expensive replaceable tool.`,
    ],
  },
  {
    day: 'Day 7',
    title: 'The Victory Lap',
    accent: 'before:bg-[#7C3AED]',
    items: [
      'Trigger: M6 reached (First subscription cancelled).',
      `Activation Celebration: Digital "Scythe" animation + "You just reclaimed $XXX/year for your runway."`,
      `Social Share Prompt: "I just killed 3 SaaS zombies and saved $1,200 with StackReaper. See how much you're burning -> [Link]"`,
      'Continuous Guard Email: Invitation to the Pro plan for 24/7 Zombie Monitoring.',
    ],
  },
  {
    day: 'Day 14',
    title: 'The Retention Hook',
    accent: 'before:bg-[#CA8A04]',
    items: [
      'Trigger: 3 flows imported (Approaching free audit limit).',
      `Upgrade Prompt: "You've saved $2,400/year so far. Upgrade to Pro to unlock 50+ advanced templates and 24/7 bank monitoring."`,
      `ROI Math: Show the cost of the Pro plan ($79) vs. the user's identified potential savings ($400+).`,
    ],
  },
];

const stackReaperAhaPrinciples = [
  {
    title: 'Eliminate Dashboard Paralysis',
    detail: `Don't show a blank chart. Show exactly which merchant names from the bank statement are zombies immediately after Plaid sync.`,
    tone: 'bg-[#eef4ff]',
  },
  {
    title: 'Make the Logic Visible, Not Scary',
    detail: `n8n can intimidate first-time users. Show a simplified preview of the nodes inside StackReaper before exporting JSON.`,
    tone: 'bg-[#fff4ea]',
  },
  {
    title: 'Real-Time Savings Counter',
    detail: `As the user clicks "Mark as Cancelled," a global Runway Added counter should tick upward and gamify cost-cutting.`,
    tone: 'bg-[#ecfbf4]',
  },
  {
    title: 'Security First, Metadata Second',
    detail: 'Always emphasize that StackReaper sees merchant names and amounts, not bank login credentials.',
    tone: 'bg-[#f5f0ff]',
  },
];

const stackReaperSeoKeywordRows = [
  { keyword: 'n8n templates for business', volume: '1,800/mo', competition: 'Low', funnel: 'BOFU', type: 'Template gallery / Download page' },
  { keyword: 'how to reduce saas spend', volume: '1,400/mo', competition: 'Medium', funnel: 'MOFU', type: 'Long-form guide (3,000 words)' },
  { keyword: 'saas management software', volume: '1,200/mo', competition: 'High', funnel: 'BOFU', type: 'Comparison page (Reaper vs. Blissfully)' },
  { keyword: 'replace zapier with n8n', volume: '950/mo', competition: 'Low', funnel: 'BOFU', type: 'Migration guide + ROI math' },
  { keyword: 'how to cancel [SaaS Name]', volume: '800/mo*', competition: 'Low', funnel: 'BOFU', type: 'Programmatic How to Kill guides' },
  { keyword: 'startup cost cutting tips', volume: '720/mo', competition: 'Low', funnel: 'MOFU', type: 'Checklist / Listicle' },
  { keyword: 'n8n vs make vs zapier', volume: '650/mo', competition: 'Medium', funnel: 'MOFU', type: 'Comparison / Technical breakdown' },
  { keyword: 'zombie saas subscriptions', volume: '450/mo', competition: 'Low', funnel: 'MOFU', type: 'Category definition / Awareness piece' },
  { keyword: 'automated expense audit', volume: '320/mo', competition: 'Low', funnel: 'BOFU', type: 'Product landing page' },
  { keyword: 'self-hosted saas alternatives', volume: '280/mo', competition: 'Low', funnel: 'BOFU', type: 'List of n8n-replaceable tools' },
  { keyword: 'plaid integration for startups', volume: '120/mo', competition: 'Low', funnel: 'BOFU', type: 'Technical / Trust-building page' },
];

const stackReaperSeoArchitectureCards = [
  {
    title: 'Pillar Page',
    subtitle: 'The Comprehensive Guide to SaaS De-bloating',
    description:
      'A 5,000-word master manual for founders covering SaaS auditing, zombie detection, and the shift to self-hosted automation. Converts via a Free Zombie Audit lead magnet.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'Cluster Content',
    subtitle: 'The Zombie Hunter Series',
    description:
      '15+ supporting articles targeting long-tail queries like whether a tool is worth its monthly cost and the hidden cost of seat-based pricing. Each one links back to the pillar page and teases a matching n8n flow.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    title: 'Comparison Pages',
    subtitle: 'StackReaper vs. The Giants',
    description:
      'Dedicated comparison pages against Ramp, Brex, and Cledara. The contrast is simple: they track spend, StackReaper replaces it.',
    tone: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]',
  },
  {
    title: 'Programmatic SEO',
    subtitle: 'The Replacement Library',
    description:
      'Template-based pages for 500+ SaaS tools under URLs like /replace/intercom-with-n8n, powered by the zombie vendor database.',
    tone: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
  {
    title: 'Kill List Gallery',
    subtitle: 'Recent Harvests Feed',
    description:
      'A public-facing stream of anonymized replacement wins: which tool was killed, how much was saved, and which flow replaced it.',
    tone: 'bg-[linear-gradient(135deg,#eef4ff_0%,#fdf2ff_100%)]',
  },
  {
    title: 'ROI Calculator',
    subtitle: 'The Runway Extender',
    description:
      'Interactive tool that turns current SaaS burn into runway gained from n8n replacements. Built for sharing on LinkedIn and X.',
    tone: 'bg-[linear-gradient(135deg,#ecfbf4_0%,#e6f3ff_100%)]',
  },
];

const stackReaperSeoCalendarRows = [
  { period: 'Month 1-2', theme: 'Foundation', deliverables: 'Pillar page + Top 10 Zombie Tools list + Programmatic SEO (first 20 tools).' },
  { period: 'Month 3-4', theme: 'Authority', deliverables: '5 how-to-replace technical guides + comparison pages vs. legacy spend management.' },
  { period: 'Month 5-6', theme: 'Amplification', deliverables: 'Launch Runway Extender calculator + PR push to Startup / FinTech newsletters.' },
  { period: 'Month 7-8', theme: 'Integration', deliverables: 'n8n community templates + guest posts on the rise of the self-hosted stack.' },
  { period: 'Month 9-10', theme: 'Scale', deliverables: 'Expand programmatic SEO to 200+ vendors + video tutorials for complex n8n flows.' },
  { period: 'Month 11-12', theme: 'Compounding', deliverables: 'Refresh Zombie Database with 2026 trends + link reclamation from tech forums.' },
];

const stackReaperSeoDistributionCards = [
  {
    channel: 'n8n & Self-Hosted Communities',
    strategy:
      'Post free, high-value JSON templates in n8n forums and self-hosted subreddits. Each template links back to StackReaper as the source of the full blueprint.',
    accent: 'before:bg-[#2563EB]',
  },
  {
    channel: 'Hacker News & Indie Hackers',
    strategy:
      'Show HN / Show IH posts around replacing expensive SaaS with generated n8n flows. This attracts technical operators and high-authority backlinks.',
    accent: 'before:bg-[#d97706]',
  },
  {
    channel: 'Product Hunt & Ship Logs',
    strategy:
      'Launch the Free Zombie Scanner as a standalone hook to drive traffic to the core domain and get listed in best DevTools collections.',
    accent: 'before:bg-[#16A34A]',
  },
  {
    channel: 'The Anti-SaaS Newsletter Strategy',
    strategy:
      'Contribute to founder and startup newsletters about the Great Unbundling of SaaS, positioning StackReaper as the operator tool for the shift.',
    accent: 'before:bg-[#7C3AED]',
  },
  {
    channel: 'X (Twitter) Threads',
    strategy:
      'Run viral teardown threads like scanning 100 startup bank statements and revealing the top zombie tools everyone overpays for plus the flows that replace them.',
    accent: 'before:bg-[#CA8A04]',
  },
  {
    channel: 'Affiliate / Partner Loops',
    strategy:
      'Partner with Railway or DigitalOcean. As StackReaper encourages self-hosting, those infra platforms benefit too, creating a natural backlink and referral loop.',
    accent: 'before:bg-[#344054]',
  },
];

const stackReaperAgencyStats = [
  { value: '$499', label: 'Agency Plan /mo', className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]' },
  { value: '~$10', label: 'Cost per audit', className: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]' },
  { value: '$1,500–5,000', label: 'Agency fee to client / audit', className: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]' },
  { value: '< 1 day', label: 'Payback period', className: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]' },
];

const stackReaperAgencyWhyRows = [
  { metric: "Agency's cost per audit", value: '~$10' },
  { metric: "Agency's price to client", value: '$1,500 - $5,000 (Value-based pricing)' },
  { metric: 'Agency gross margin', value: '99%+ (Post-tool cost)' },
  { metric: 'Clients per agency', value: '10 - 50 portfolio companies' },
  { metric: 'Churn likelihood', value: 'Near-Zero — It becomes their proprietary Health Check tool.' },
];

const stackReaperAgencyIcpRows = [
  { attribute: 'Agency Type', description: 'Fractional CTO firms, RevOps consultancies, VC Operating Partners, Exit-Ready advisors.' },
  { attribute: 'Client Portfolio', description: 'Series A-C startups ($2M-$50M ARR) with high SaaS bloat and 20+ active subscriptions.' },
  { attribute: 'Current Process', description: 'Manually exporting CSVs from QuickBooks / Ramp and guessing which tools are used.' },
  { attribute: 'Geography', description: 'US / UK / Europe with the highest concentration of high-cost SaaS stacks.' },
];

const stackReaperAgencyOutreachTouches = [
  {
    day: 'Day 0',
    title: 'LinkedIn Connection',
    copy:
      `Note: "Hey [Name] - I see you're doing RevOps for high-growth SaaS. We built a 'Scythe' for SaaS bloat that automates the audit and hands you the n8n flows to replace the waste. Thought it might fit your workflow."`,
    accent: 'before:bg-[#2563EB]',
  },
  {
    day: 'Day 2',
    title: 'The Margin DM',
    copy:
      `Message: "Quick context: Agencies are using StackReaper to perform $3k audits in 5 minutes. We link the bank, find the zombies, and give you the JSON blueprints to deploy for the client. Want to see the agency dashboard?"`,
    accent: 'before:bg-[#d97706]',
  },
  {
    day: 'Day 5',
    title: 'Email (The Manual Work Pain)',
    copy:
      `Subject: "Stop auditing SaaS stacks manually for [Client Name] portfolio"\nBody: "I noticed your firm specializes in GTM efficiency. Usually, that involves a painful manual audit of SaaS spend. We've automated the Scan -> Identify -> Replace loop. One Plaid connection and you have a full Kill List and the n8n flows to fix it. Worth a 10-min demo?"`,
    accent: 'before:bg-[#16A34A]',
  },
];

const stackReaperAgencyDemoRows = [
  {
    time: '0:00-2:00',
    stage: 'Qualify',
    script: `"How long does it currently take your team to audit a client's tech stack and identify redundant tools?"`,
    notes: 'Let them admit it takes 10-20 hours of manual work.',
  },
  {
    time: '2:00-4:00',
    stage: 'The Gap',
    script: `"So you're charging for hours spent in spreadsheets instead of the $50k in annual savings you're finding. That's a bottleneck for your scaling."`,
    notes: 'Frame the manual work as a profit-killer.',
  },
  {
    time: '4:00-10:00',
    stage: 'Live Demo',
    script:
      'Connect a demo bank account. Show AI identifying a zombie tool and instantly generating the n8n replacement flow.',
    notes: 'Aha moment: this audit took 4 minutes and saved 15 hours.',
  },
  {
    time: '10:00-12:00',
    stage: 'Economics',
    script:
      `"The Agency plan is $499/mo. If you use this for 10 clients and charge just $2k per audit, that's $20k in revenue for ~1 hour of total work."`,
    notes: 'Let the margin math sink in.',
  },
  {
    time: '12:00-15:00',
    stage: 'Close',
    script:
      `"I'll give you one Master Workspace for free to run on your own internal stack. If you find $500 in savings today, we move to the Agency plan."`,
    notes: 'Low-friction proof of concept.',
  },
];

const stackReaperWhiteLabelRows = [
  { feature: 'Branded PDF Reports', benefit: 'Efficiency Audit PDFs with the agency logo and recommended Kill List.' },
  { feature: 'Custom Flow Vault', benefit: 'Agency can upload proprietary n8n templates and package them into delivery.' },
  { feature: 'Multi-Tenant Dashboard', benefit: 'Toggle between 50+ client bank feeds from a single reaper-view.' },
  { feature: 'Verified Savings Badge', benefit: 'Audited by [Agency Name] badge for client stakeholders and internal trust.' },
];

const stackReaperAgencyTiers = [
  {
    tier: 'Tier 1 (Boutique)',
    price: '$499/mo',
    note: 'Up to 10 clients.',
  },
  {
    tier: 'Tier 2 (Growth)',
    price: '$899/mo',
    note: 'Up to 30 clients + custom n8n logic.',
  },
  {
    tier: 'Tier 3 (VC / PE)',
    price: '$1,999/mo',
    note: 'Unlimited portfolio scans + priority replacement engineering.',
  },
];

const stackReaperObjectionCards = [
  {
    id: '01',
    title: "I don't feel comfortable connecting my bank account.",
    subtext: 'Security anxiety. The user perceives a high risk in sharing financial data with a new startup.',
    response:
      'We use Plaid (OAuth), the same bank-grade security used by Venmo and Robinhood. We never see or store login credentials. Our AI only scans merchant names and transaction amounts to identify zombies, and nothing is killed or replaced without the user clicking approve.',
    accent: 'before:bg-[#2563EB]',
  },
  {
    id: '02',
    title: 'I already use Ramp / Brex to track my spend.',
    subtext: 'Overlap bias. The user thinks spend management is the same as spend replacement.',
    response:
      "Ramp and Brex are useful for tracking bleed, but they do not stop it. They can flag a $500/mo tool, but they will not generate the n8n JSON to replace it. StackReaper is the action layer that turns wasted spend into working automation.",
    accent: 'before:bg-[#16A34A]',
  },
  {
    id: '03',
    title: 'I can just build these n8n flows myself.',
    subtext: "The Maker's Trap. The user underestimates the time cost of research and testing.",
    response:
      'You probably can, but the question is whether you should. Each template is battle-tested, debugged, and mapped to specific vendor APIs. The product is not just code, it is the 100+ hours of research and troubleshooting you do not have to repeat.',
    accent: 'before:bg-[#d97706]',
  },
  {
    id: '04',
    title: 'Is n8n really powerful enough to replace [Enterprise Tool]?',
    subtext: 'Technical skepticism. Fear that a self-hosted flow will be fragile compared to polished SaaS UI.',
    response:
      'In 2026, many SaaS products are just UI wrappers around simple API logic. StackReaper does not tell users to replace mission-critical CRMs. It targets the zombies: PDF parsers, image processors, routing tools, and single-purpose subscriptions charging $49/mo for logic n8n already handles.',
    accent: 'before:bg-[#7C3AED]',
  },
  {
    id: '05',
    title: 'This seems expensive for a one-time audit.',
    subtext: 'Value has not landed. They are comparing the price to a $10 utility, not the annual waste.',
    response:
      'Run the zombie math. The average startup saves $3,840/year after the first StackReaper audit. At a $299 one-time cost, the tool pays for itself within weeks and every dollar after that becomes reclaimed runway.',
    accent: 'before:bg-[#CA8A04]',
  },
  {
    id: '06',
    title: 'What if the n8n flow breaks?',
    subtext: "Maintenance fear. The user doesn't want to become a full-time admin for their own stack.",
    response:
      'The templates are designed for set-and-forget operation. Because they are self-hosted in the user’s own n8n, they also gain data sovereignty. If a vendor API changes, the canonical template library is updated, which is still less fragile than being trapped inside a vendor price hike or outage.',
    accent: 'before:bg-[#344054]',
  },
  {
    id: '07',
    title: 'Can I try it for free first?',
    subtext: 'Risk reduction. The buyer wants to see the zombies before paying to reap them.',
    response:
      'Yes. The free scan identifies the top three most expensive zombie subscriptions and shows exactly how much is burning right now. No credit card required. Payment starts only when the user wants the full kill list and downloadable n8n replacement templates.',
    accent: 'before:bg-[#16A34A]',
  },
];

const stackReaperColorPalette = [
  { name: 'Warm Off-White', hex: '#F7F8F4', usage: 'App background', swatch: 'bg-[#F7F8F4]' },
  { name: 'Surface White', hex: '#FFFFFF', usage: 'Cards, modals', swatch: 'bg-white' },
  { name: 'Olive Gray', hex: '#F0F2EC', usage: 'Table rows, inputs', swatch: 'bg-[#F0F2EC]' },
  { name: 'Money Green', hex: '#16A34A', usage: 'Saved, converted, success', swatch: 'bg-[#16A34A]' },
  { name: 'Zombie Amber', hex: '#D97706', usage: 'Zombie status, detected, warning', swatch: 'bg-[#D97706]' },
  { name: 'Automation Blue', hex: '#2563EB', usage: 'n8n, flows, active automation', swatch: 'bg-[#2563EB]' },
  { name: 'AI Violet', hex: '#7C3AED', usage: 'Claude AI, analysis, classification', swatch: 'bg-[#7C3AED]' },
  { name: 'Burn Red', hex: '#DC2626', usage: 'Wasted money, overdue cancel', swatch: 'bg-[#DC2626]' },
  { name: 'Gold', hex: '#CA8A04', usage: 'Savings highlight, ROI numbers', swatch: 'bg-[#CA8A04]' },
];

const stackReaperTypographyRows = [
  { style: 'Display', font: 'Geist ExtraBold / Vercel Sans', size: '38px / 44px', usage: 'Hero, savings numbers' },
  { style: 'H1', font: 'Geist Bold', size: '26px / 32px', usage: 'Page titles' },
  { style: 'H2', font: 'Geist SemiBold', size: '18px / 24px', usage: 'Section headers' },
  { style: 'H3', font: 'Inter SemiBold', size: '14px / 19px', usage: 'Card titles' },
  { style: 'Body', font: 'Inter Regular', size: '14px / 22px', usage: 'Content' },
  { style: 'Caption', font: 'Inter Regular', size: '12px / 16px', usage: 'Metadata' },
  { style: 'Mono / Savings', font: 'JetBrains Mono', size: '15px', usage: 'Dollar amounts, savings figures' },
  { style: 'Badge', font: 'Inter Bold', size: '11px', usage: 'Zombie status, category' },
];

const stackReaperStarterPrompt = `"Light mode finops/automation SaaS. Product: StackReaper — zombie SaaS detector. Colors: bg #F7F8F4,
cards white with subtle border, money green #16A34A (savings, positive), zombie amber #D97706 (detected,
warning), burn red #DC2626 (wasted spend), automation blue #2563EB. Layout: left sidebar (Dashboard,
Subscriptions, Flows, Savings, Settings), main area with: KPI row ($4,800 total spend / $2,100 zombies
detected / $890 saved this month), zombie stack table with tool name, monthly cost, zombie type badge,
replacement confidence %, and action button. Zombie type badges: red=Cancel, amber=Replace with n8n,
blue=Duplicate. Style: slightly hacker/terminal aesthetic meets clean SaaS. Think Linear × Cursor. Geist
font. Card radius 8px. Numbers in monospace font."`;

const stackReaperZombieTypes = [
  {
    key: 'replaceable',
    label: 'Replace with n8n',
    cls: 'text-[#b54708] bg-[#fff4ea] border-[#f4c68f]',
    toolName: 'Buffer',
    monthlyAmount: '$99/mo',
    annualSavings: '$1,188/yr',
    confidence: '92%',
    template: 'buffer_social_to_n8n',
  },
  {
    key: 'cancel',
    label: 'Cancel - No Replacement',
    cls: 'text-[#dc2626] bg-[#fff1f3] border-[#f5b6c3]',
    toolName: 'PDFMonkey',
    monthlyAmount: '$75/mo',
    annualSavings: '$900/yr',
    confidence: '41%',
    template: 'No flow needed',
  },
  {
    key: 'duplicate',
    label: 'Duplicate Tool',
    cls: 'text-[#2563EB] bg-[#eef4ff] border-[#bfd3ff]',
    toolName: 'Calendly',
    monthlyAmount: '$30/mo',
    annualSavings: '$360/yr',
    confidence: '54%',
    template: 'Duplicate coverage',
  },
  {
    key: 'essential',
    label: 'Essential',
    cls: 'text-[#475467] bg-[#f5f7fb] border-[#e4e7ec]',
    toolName: 'Stripe',
    monthlyAmount: '$0 usage-based',
    annualSavings: '-',
    confidence: '-',
    template: 'Keep active',
  },
];

function Kit5OpportunityBriefSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Why StackReaper, Why Now?</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          The SaaS market hit $145 billion in 2025 and is projected to reach $793 billion by 2029. Meanwhile,
          organizations use only 47% of their SaaS licenses, leading to waste estimated at $21 million annually per
          company at enterprise scale. For startups and SMBs, the waste is proportionally worse: the average 20-person
          startup is paying for 30-50 SaaS tools, with $3,000-8,000/month burning on tools that automate tasks an n8n
          flow handles for $0. The 2025 shift that makes this moment unique: n8n, Claude, and Make have reached the
          skill level where they genuinely replace single-button SaaS tools, but nobody has built the product that closes
          the loop: detect the zombie, show the replacement, hand over the flow, execute the cancel.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stackReaperStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[42px] font-semibold tracking-[-0.025em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
            <div className="mt-2 text-[14px] leading-7 text-[#475467]">{stat.note}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">The Zombie SaaS Stack Crisis</div>
          <p className="mt-4 text-[15px] leading-8 text-[#475467]">
            A zombie SaaS subscription has four characteristics: it does one simple repetitive task, auto-renews every
            month without human review, was set up by someone who has since left or forgotten about it, and can be
            replaced by a 3-node n8n workflow. The average 20-person startup has 8-12 of these. At $49-199/month per
            zombie, the annual burn becomes $4,800-$28,800 on tools that are functionally free to replicate. The obstacle
            is not technical ability; it is discovery and translation. Nobody has a clear map of which SaaS tools can be
            replaced with n8n, and nobody delivers that map alongside ready-to-import workflow templates. That is the
            StackReaper insight.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Market Signals</div>
          <div className="mt-5 grid gap-3">
            {stackReaperSignals.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit5ProductSpecSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">StackReaper: Product Definition</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          One-Sentence Value Prop: &quot;Connect your bank account - StackReaper finds every zombie SaaS subscription,
          tells you exactly which n8n flow can replace it, and imports the flow with one click. Cancel the SaaS. Keep
          the $5,000.&quot;
        </p>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[760px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2]">
              <th className="w-[14%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Pri</th>
              <th className="w-[26%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Feature</th>
              <th className="w-[60%] px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Description</th>
            </tr>
          </thead>
          <tbody>
            {stackReaperProductRows.map((row, index) => (
              <tr key={row.feature} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                <td className="px-6 py-6 align-top text-[15px] font-medium text-[#4361ee]">{row.priority}</td>
                <td className="px-6 py-6 align-top text-[15px] font-semibold text-[#101828]">{row.feature}</td>
                <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Core User Flow</div>
        <div className="mt-6 grid gap-4 xl:grid-cols-6">
          {stackReaperFlow.map((item) => (
            <div
              key={item.step}
              className={`rounded-[22px] border border-[#e8edf5] p-5 shadow-[0_4px_12px_rgba(15,23,42,0.03)] ${item.tone}`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#667085]">Step {item.step}</div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <div className="mt-1 text-[14px] font-medium text-[#4361ee]">{item.subtitle}</div>
              <p className="mt-4 text-[14px] leading-7 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5TargetMarketsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Target Markets, Startup Profiles &amp; Buyer Personas
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          StackReaper serves two overlapping audiences: the CTO or ops lead who owns the SaaS stack decision at a
          5-50 person startup, and the automation-native solo founder or indie hacker who already uses n8n or Zapier
          and immediately understands the value. The viral mechanism targets the second group to reach the first.
        </p>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Company Size &amp; Stage Profiles</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[920px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2] bg-[#11180f]">
                {['Profile', 'Stage', 'Size', 'SaaS Spend', 'Zombie Risk', 'Notes'].map((label) => (
                  <th key={label} className="px-6 py-5 text-left text-[14px] font-semibold text-white">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stackReaperProfiles.map((row, index) => (
                <tr key={row.profile} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                  <td className="px-6 py-5 align-top text-[15px] font-semibold text-[#101828]">{row.profile}</td>
                  <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#475467]">{row.stage}</td>
                  <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#475467]">{row.size}</td>
                  <td className="px-6 py-5 align-top text-[15px] font-medium text-[#f04438]">{row.spend}</td>
                  <td
                    className={`px-6 py-5 align-top text-[15px] font-medium ${
                      row.risk === 'Very High' ? 'text-[#f04438]' : 'text-[#f79009]'
                    }`}
                  >
                    {row.risk}
                  </td>
                  <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#667085]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Geographic Priority</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[960px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2] bg-[#11180f]">
                {['Region', 'Startup Density', 'n8n Adoption', 'Automation Culture', 'SaaS Spend Level', 'Priority'].map(
                  (label) => (
                    <th key={label} className="px-6 py-5 text-left text-[14px] font-semibold text-white">
                      {label}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {stackReaperGeoRows.map((row, index) => (
                <tr key={row.region} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                  <td className="px-6 py-5 align-top text-[15px] font-semibold text-[#101828]">{row.region}</td>
                  <td className="px-6 py-5 align-top text-[15px] font-medium tracking-[0.08em] text-[#16a34a]">
                    {row.density}
                  </td>
                  <td className="px-6 py-5 align-top text-[15px] text-[#475467]">{row.n8n}</td>
                  <td className="px-6 py-5 align-top text-[15px] text-[#475467]">{row.automation}</td>
                  <td className="px-6 py-5 align-top text-[15px] text-[#475467]">{row.spend}</td>
                  <td className="px-6 py-5 align-top text-[15px] font-semibold text-[#16a34a]">{row.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Buyer Persona Profiles</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {stackReaperPersonas.map((persona, index) => (
            <div
              key={persona.name}
              className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${
                index === 0
                  ? 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]'
                  : index === 1
                    ? 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]'
                    : 'bg-[linear-gradient(135deg,#f4f7ff_0%,#eefaf6_100%)]'
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-[16px] bg-white/80 text-[22px] shadow-[0_4px_10px_rgba(15,23,42,0.06)]">
                {persona.icon}
              </div>
              <div className="mt-5 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{persona.name}</div>
              <div className="mt-1 text-[14px] font-medium text-[#4361ee]">{persona.role}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{persona.detail}</p>
              <div className="mt-5 rounded-[18px] border border-white/70 bg-white/70 px-4 py-4 text-[14px] leading-7 text-[#667085]">
                {persona.discovery}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5TechStackSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Technical Architecture</div>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[1080px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2]">
              {['Layer', 'Recommended', 'Host', 'Alternative', 'No-Code', 'Rationale'].map((label) => (
                <th key={label} className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stackReaperTechRows.map((row, index) => (
              <tr key={row.layer} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                <td className="px-6 py-6 align-top text-[15px] font-semibold text-[#101828]">{row.layer}</td>
                <td className="px-6 py-6 align-top text-[15px] font-medium text-[#4361ee]">{row.recommended}</td>
                <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.host}</td>
                <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.alternative}</td>
                <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.nocode}</td>
                <td className="px-6 py-6 align-top text-[15px] leading-7 text-[#475467]">{row.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">AI Classification Architecture</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {stackReaperArchitecture.map((card) => (
            <div
              key={card.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">{card.layer}</div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{card.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Build Timeline</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {stackReaperTimeline.map((item) => (
            <div
              key={item.week}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 pl-9 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-20 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">{item.week}</div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.summary}</p>
              <div className="mt-5 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[14px] leading-7 text-[#667085]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function scoreClass(value: string, winner?: boolean) {
  if (winner) return 'text-[#16a34a] font-semibold';
  const score = Number.parseInt(value, 10);
  if (score >= 7) return 'text-[#b54708] font-medium';
  if (score >= 4) return 'text-[#475467] font-medium';
  return 'text-[#344054]';
}

function Kit5CompetitorMapSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Competitive Landscape</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          StackReaper sits in the gap between SaaS spend visibility tools and automation platforms. The category is
          crowded on tracking and workflow execution, but almost nobody combines detection, replacement logic, ready
          templates, and one-click import into the same product.
        </p>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[1080px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2] bg-[#11180f]">
              {['Product', 'Price', 'Strength', 'Weakness', 'AI Detect', 'Flow Replace', 'Automation', 'SMB Fit'].map(
                (label) => (
                  <th key={label} className="px-6 py-5 text-left text-[14px] font-semibold text-white">
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {stackReaperCompetitorRows.map((row, index) => {
              const winner = row.product === 'STACKREAPER';
              return (
                <tr
                  key={row.product}
                  className={`${index === 0 ? '' : 'border-t border-[#e6eaf2]'} ${winner ? 'bg-[#f2fff7]' : ''}`}
                >
                  <td className={`px-6 py-5 align-top text-[15px] font-semibold ${winner ? 'text-[#16a34a]' : 'text-[#101828]'}`}>
                    {row.product}
                  </td>
                  <td className={`px-6 py-5 align-top text-[15px] ${winner ? 'font-medium text-[#16a34a]' : 'text-[#667085]'}`}>
                    {row.price}
                  </td>
                  <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#344054]">{row.strength}</td>
                  <td className="px-6 py-5 align-top text-[15px] leading-7 text-[#667085]">{row.weakness}</td>
                  <td className={`px-6 py-5 align-top text-[15px] ${scoreClass(row.aiDetect, winner)}`}>{row.aiDetect}</td>
                  <td className={`px-6 py-5 align-top text-[15px] ${scoreClass(row.flowReplace, winner)}`}>{row.flowReplace}</td>
                  <td className={`px-6 py-5 align-top text-[15px] ${scoreClass(row.automation, winner)}`}>{row.automation}</td>
                  <td className={`px-6 py-5 align-top text-[15px] ${scoreClass(row.smbFit, winner)}`}>{row.smbFit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="rounded-[24px] border border-[#d7f0e2] bg-[linear-gradient(135deg,#f2fff8_0%,#effbf6_100%)] px-6 py-5 text-[15px] leading-7 text-[#475467] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <span className="font-semibold text-[#067647]">StackReaper moat:</span> most competitors either identify SaaS
        waste without replacement, or automate workflows without telling you what to kill. StackReaper closes the loop:
        detect the zombie, recommend the replacement, import the flow, and make the savings visible.
      </div>
    </section>
  );
}

function Kit5RevenueModelSection() {
  const maxValue = Math.max(...stackReaperProjection.map((item) => item.mrr));

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Revenue Model &amp; Pricing</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          StackReaper pricing is anchored to ROI: most users save $3,000-8,000 per year from their first audit. The
          $299 kit already feels like a 10x purchase, while the subscription tiers keep compounding value as new zombie
          subscriptions appear over time.
        </p>
      </div>

      <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <table className="min-w-[980px] w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e6eaf2]">
              {['Plan', 'Price', 'Connections', 'Flow Library', 'Import', 'Monitoring', 'Support'].map((label) => (
                <th key={label} className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stackReaperPricingRows.map((row, index) => (
              <tr key={row.plan} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                <td className="px-6 py-6 align-top text-[15px] font-semibold text-[#101828]">{row.plan}</td>
                <td className="px-6 py-6 align-top text-[15px] font-medium text-[#4361ee]">{row.price}</td>
                <td className="px-6 py-6 align-top text-[15px] text-[#475467]">{row.connections}</td>
                <td className="px-6 py-6 align-top text-[15px] text-[#475467]">{row.library}</td>
                <td className="px-6 py-6 align-top text-[15px] text-[#475467]">{row.import}</td>
                <td className="px-6 py-6 align-top text-[15px] text-[#475467]">{row.monitoring}</td>
                <td className="px-6 py-6 align-top text-[15px] text-[#475467]">{row.support}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        {stackReaperRevenueCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#667085]">{card.title}</div>
            <div className="mt-3 text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">{card.value}</div>
            <p className="mt-3 text-[15px] leading-8 text-[#475467]">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-center text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">
          MRR Projection - 12 Months
        </div>

        <div className="mt-8">
          <div className="relative h-[320px] rounded-[24px] bg-[linear-gradient(180deg,#ffffff_0%,#fcfefb_100%)] px-10 py-8">
            {[0, 24000, 48000, 72000, 96000].map((value, index) => (
              <div
                key={value}
                className="absolute left-10 right-10 border-t border-[#e8edf5]"
                style={{ top: `${40 + index * 54}px` }}
              >
                <span className="absolute -left-1 top-[-12px] -translate-x-full text-[13px] text-[#98a2b3]">
                  ${value.toLocaleString()}
                </span>
              </div>
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="stackreaperArea" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#c9f0d7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c9f0d7" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d={`M 80 270 ${stackReaperProjection
                  .map((point, index) => {
                    const x = 80 + index * 76;
                    const y = 270 - (point.mrr / maxValue) * 220;
                    return `L ${x} ${y}`;
                  })
                  .join(' ')} L ${80 + (stackReaperProjection.length - 1) * 76} 270 Z`}
                fill="url(#stackreaperArea)"
              />
              <path
                d={`${stackReaperProjection
                  .map((point, index) => {
                    const x = 80 + index * 76;
                    const y = 270 - (point.mrr / maxValue) * 220;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  })
                  .join(' ')}`}
                fill="none"
                stroke="#16a34a"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {stackReaperProjection.map((point, index) => {
                const x = 80 + index * 76;
                const y = 270 - (point.mrr / maxValue) * 220;
                return (
                  <g key={point.month}>
                    <circle cx={x} cy={y} r="7" fill="#16a34a" stroke="white" strokeWidth="3" />
                    {point.label ? (
                      <text
                        x={x}
                        y={y - 16}
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="700"
                        fill="#16a34a"
                      >
                        {point.label}
                      </text>
                    ) : null}
                    <text x={x} y="300" textAnchor="middle" fontSize="13" fill="#667085">
                      {point.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[24px] border border-[#e6eaf2]">
          <table className="min-w-[880px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2] bg-[#11180f]">
                {['Month', 'Starter + Pro', 'Team', 'Agency', 'Notes', 'Total MRR', 'MoM'].map((label) => (
                  <th key={label} className="px-5 py-4 text-left text-[14px] font-semibold text-white">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stackReaperProjectionRows.map((row, index) => (
                <tr
                  key={row.month}
                  className={`${index === 0 ? '' : 'border-t border-[#e6eaf2]'} ${row.month === 'M12' ? 'bg-[#f2fff7]' : ''}`}
                >
                  <td className="px-5 py-4 text-[15px] font-semibold text-[#101828]">{row.month}</td>
                  <td className="px-5 py-4 text-[15px] text-[#475467]">{row.starterPro}</td>
                  <td className="px-5 py-4 text-[15px] text-[#475467]">{row.team}</td>
                  <td className="px-5 py-4 text-[15px] text-[#475467]">{row.agency}</td>
                  <td className="px-5 py-4 text-[15px] text-[#475467]">{row.notes}</td>
                  <td className={`px-5 py-4 text-[15px] font-medium ${row.month === 'M12' ? 'text-[#16a34a]' : 'text-[#101828]'}`}>
                    {row.total}
                  </td>
                  <td className={`px-5 py-4 text-[15px] ${row.mom.startsWith('+') ? 'text-[#16a34a]' : 'text-[#667085]'}`}>
                    {row.mom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Kit5First50CustomersSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">First 50 Customers Playbook</div>
      </div>

      <div className="grid gap-5">
        {stackReaperFirst50Cards.map((card) => (
          <div
            key={card.day}
            className={`relative rounded-[32px] border border-[#e6eaf2] p-7 pl-9 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-24 before:w-1 before:rounded-full ${card.tone} ${card.accent}`}
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">{card.day}</div>
            <div className="mt-3 text-[28px] font-semibold tracking-[-0.025em] text-[#101828]">{card.title}</div>

            <div className="mt-6 grid gap-3">
              {card.items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-white/75 bg-white/70 px-4 py-4 shadow-[0_4px_12px_rgba(15,23,42,0.03)]"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7ff] text-[12px] font-semibold text-[#4361ee]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d7f0e2] bg-[#f3fbf7] px-5 py-4 text-[15px] font-medium leading-7 text-[#067647]">
              {card.goal}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FunnelShape({
  title,
  steps,
}: {
  title: string;
  steps: { label: string; count: string; pct: string; color: string }[];
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
      <div className="text-center text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{title}</div>
      <div className="mt-6 flex flex-col items-center gap-0">
        {steps.map((step, index) => {
          const width = 92 - index * 11;
          const clipLeft = 12 + index * 1.5;
          const clipRight = 88 - index * 1.5;
          return (
            <div
              key={step.label}
              className="flex h-[74px] items-center justify-center text-center text-white"
              style={{
                width: `${width}%`,
                background: step.color,
                clipPath: `polygon(${clipLeft}% 0, ${clipRight}% 0, 100% 100%, 0 100%)`,
              }}
            >
              <div className="px-3">
                <div className="text-[17px] font-semibold leading-6">{step.label}</div>
                <div className="mt-1 text-[14px] text-white/85">
                  {step.count} ({step.pct})
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Kit5ConversionFunnelsSection() {
  const activationMax = Math.max(...stackReaperActivation.map((item) => item.value));
  const savingsMax = Math.max(...stackReaperSavings.map((item) => item.amount));

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">
          Acquisition Funnels, Savings Waterfall &amp; ROI Charts
        </div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          StackReaper has two growth engines: viral/community content and PLG via free audit. Both lead users to the
          same &quot;oh sh*t&quot; moment: seeing their zombie list and realizing how much waste is recoverable.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {stackReaperFunnelCards.map((funnel) => (
          <FunnelShape key={funnel.title} title={funnel.title} steps={funnel.steps} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#16a34a]">Free-to-Paid Activation Journey</div>
        <div className="mt-6 space-y-4">
          {stackReaperActivation.map((item, index) => (
            <div key={item.label} className="grid items-center gap-4 md:grid-cols-[260px_42px_minmax(0,1fr)_110px]">
              <div className="text-right text-[15px] text-[#344054]">{item.label}</div>
              <div
                className="flex size-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                style={{ background: item.color }}
              >
                {index + 1}
              </div>
              <div className="h-7 rounded-[10px] bg-[#f5f7fa]">
                <div
                  className="h-full rounded-[10px]"
                  style={{ width: `${(item.value / activationMax) * 100}%`, background: item.color }}
                />
              </div>
              <div className="text-[14px] font-semibold" style={{ color: item.color }}>
                {item.value.toLocaleString()} {item.pct}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#16a34a]">
          Where Your $4,800/Month SaaS Budget Actually Goes
        </div>
        <div className="mt-10">
          <div className="flex items-end justify-between gap-3 overflow-x-auto pb-4">
            {stackReaperWaterfall.map((item) => (
              <div key={item.label} className="flex min-w-[120px] flex-1 flex-col items-center">
                <div className="mb-3 text-[15px] font-semibold" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div
                  className="w-full max-w-[98px]"
                  style={{
                    height: `${Math.max(18, (item.amount / 4800) * 360)}px`,
                    background: item.color,
                  }}
                />
                <div className="mt-3 text-center text-[13px] leading-6 text-[#475467]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[15px] leading-8 text-[#667085]">
          Average 20-person startup SaaS spend: $4,800/month. Essential tools: ~$1,800. Replaceable with n8n:
          ~$1,200. Pure zombie spend (cancel, no replacement): ~$900. Overlapping duplicates: ~$600. Remaining after
          reaping: ~$300/month optimized.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#16a34a]">
          Annual Savings Per n8n Replacement (Top 8)
        </div>
        <div className="mt-6 space-y-4">
          {stackReaperSavings.map((item) => (
            <div key={item.label} className="grid items-center gap-4 md:grid-cols-[260px_minmax(0,1fr)_140px]">
              <div className="text-right text-[15px] text-[#344054]">{item.label}</div>
              <div className="h-9 rounded-[10px] bg-[#f5f7fa]">
                <div
                  className="h-full rounded-[10px]"
                  style={{ width: `${(item.amount / savingsMax) * 100}%`, background: item.color }}
                />
              </div>
              <div className="text-[14px] font-semibold" style={{ color: item.color }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5CodePromptsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">AI Build Prompts</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          8 copy-paste prompts for Claude or GPT-4o. Each one maps to a real StackReaper surface: detection,
          classification, import, billing, jobs, and schema.
        </p>
      </div>

      <div className="grid gap-5">
        {stackReaperPrompts.map((prompt, index) => (
          <div
            key={prompt.id}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex rounded-full bg-[#f5f7fb] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                  {prompt.id} · {prompt.category}
                </div>
                <div className="mt-3 text-[26px] font-semibold tracking-[-0.025em] text-[#101828]">{prompt.title}</div>
              </div>
              <div
                className={`inline-flex rounded-[12px] px-3 py-2 text-[13px] font-medium ${
                  index % 4 === 0
                    ? 'bg-[#eef4ff] text-[#4361ee]'
                    : index % 4 === 1
                      ? 'bg-[#ecfbf4] text-[#067647]'
                      : index % 4 === 2
                        ? 'bg-[#fff4ea] text-[#b54708]'
                        : 'bg-[#f5f0ff] text-[#7c3aed]'
                }`}
              >
                Copy-ready
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#1e293b] bg-[#0f172a]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ef4444]" />
                  <span className="size-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="size-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-slate-400">{prompt.category}</div>
              </div>
              <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-7 text-slate-200">
                <code>{prompt.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Kit5DesignSystemSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Design System - Hacker Amber</div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Color Palette</div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stackReaperColorPalette.map((color) => (
            <div
              key={color.name}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div className={`h-24 rounded-[18px] border border-[#e6eaf2] ${color.swatch}`} />
              <div className="mt-5 text-[20px] font-semibold tracking-[-0.025em] text-[#101828]">{color.name}</div>
              <div className="mt-1 font-mono text-[14px] text-[#667085]">{color.hex}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#475467]">{color.usage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Typography</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[860px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                {['Style', 'Font', 'Size / Leading', 'Usage'].map((label) => (
                  <th key={label} className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stackReaperTypographyRows.map((row, index) => (
                <tr key={row.style} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                  <td className="px-6 py-5 text-[15px] font-semibold text-[#101828]">{row.style}</td>
                  <td className="px-6 py-5 text-[15px] text-[#475467]">{row.font}</td>
                  <td className="px-6 py-5 font-mono text-[14px] text-[#667085]">{row.size}</td>
                  <td className="px-6 py-5 text-[15px] text-[#475467]">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        <div className="rounded-[28px] border border-[#1e293b] bg-[#0f172a] shadow-[0_12px_24px_rgba(15,23,42,0.16)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ef4444]" />
              <span className="size-2.5 rounded-full bg-[#f59e0b]" />
              <span className="size-2.5 rounded-full bg-[#22c55e]" />
            </div>
            <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-slate-400">Figma / v0.dev Starter Prompt</div>
          </div>
            <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-7 text-slate-200">
              <code>{stackReaperStarterPrompt}</code>
            </pre>
        </div>
      </section>
    );
  }

function Kit5UiKitSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">UI Kit - Dashboard Components</div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">1. Zombie Subscription Card</div>
        <div className="grid gap-4 xl:grid-cols-2">
          <div className="grid gap-4">
            {stackReaperZombieTypes.map((item) => {
              const isZombie = item.key !== 'essential';
              return (
                <div
                  key={item.key}
                  className={`rounded-[24px] border bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${
                    isZombie ? 'border-[#f4c68f] hover:border-[#d97706]' : 'border-[#e4e7ec]'
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#f7f8f4] text-[15px] font-semibold text-[#101828]">
                        {item.toolName.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[15px] font-semibold text-[#101828]">{item.toolName}</p>
                        <p className="text-[12px] text-[#98a2b3]">Recurring · Monthly</p>
                      </div>
                    </div>
                    <span className={`rounded-full border px-2.5 py-1 text-[12px] font-semibold ${item.cls}`}>{item.label}</span>
                  </div>

                  <div className={`mb-4 grid gap-3 ${isZombie ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    <div>
                      <p className="font-mono text-[24px] font-bold text-[#dc2626]">{item.monthlyAmount}</p>
                      <p className="text-[12px] text-[#98a2b3]">Monthly Burn</p>
                    </div>
                    {isZombie ? (
                      <>
                        <div>
                          <p className="font-mono text-[24px] font-bold text-[#16a34a]">{item.annualSavings}</p>
                          <p className="text-[12px] text-[#98a2b3]">Annual Savings</p>
                        </div>
                        <div>
                          <p className="text-[24px] font-bold text-[#d97706]">{item.confidence}</p>
                          <p className="text-[12px] text-[#98a2b3]">Replace Confidence</p>
                        </div>
                      </>
                    ) : null}
                  </div>

                  {item.key === 'replaceable' ? (
                    <div className="space-y-2">
                      <p className="rounded-[12px] bg-[#f5f7fb] px-3 py-2 font-mono text-[12px] text-[#667085]">{item.template}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 rounded-[12px] bg-[#2563EB] px-4 py-2.5 text-[14px] font-semibold text-white">
                          Import n8n Flow →
                        </button>
                        <button className="rounded-[12px] border border-[#e4e7ec] px-4 py-2.5 text-[14px] font-medium text-[#667085]">
                          Cancel Guide
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#1e293b] bg-[#0f172a] shadow-[0_12px_24px_rgba(15,23,42,0.16)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ef4444]" />
                <span className="size-2.5 rounded-full bg-[#f59e0b]" />
                <span className="size-2.5 rounded-full bg-[#22c55e]" />
              </div>
              <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-slate-400">ZombieCard.tsx</div>
            </div>
            <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-7 text-slate-200">
              <code>{`const zombieConfig = {
  replaceable: { label: "Replace with n8n", cls: "text-amber-700 bg-amber-50 border-amber-300" },
  cancel: { label: "Cancel - No Replacement", cls: "text-red-700 bg-red-50 border-red-200" },
  duplicate: { label: "Duplicate Tool", cls: "text-blue-700 bg-blue-50 border-blue-200" },
  essential: { label: "Essential", cls: "text-gray-600 bg-gray-50 border-gray-200" },
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">2. Savings Counter (Viral Component)</div>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,#15803d_0%,#22c55e_100%)] p-6 text-white shadow-[0_12px_24px_rgba(34,197,94,0.22)]">
            <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.08em] text-white/75">Recovered This Month</p>
            <p className="mb-1 font-mono text-[52px] font-bold tracking-[-0.025em]">$890</p>
            <p className="mb-6 text-[14px] text-white/80">$10,680/year at this rate</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[16px] bg-white/10 p-4">
                <p className="text-[28px] font-bold">6</p>
                <p className="text-[12px] text-white/75">Tools Cancelled</p>
              </div>
              <div className="rounded-[16px] bg-white/10 p-4">
                <p className="text-[28px] font-bold">11</p>
                <p className="text-[12px] text-white/75">Flows Imported</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-[16px] bg-white py-3 text-[14px] font-semibold text-[#15803d]">
              Share My Savings →
            </button>
          </div>

          <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Component Notes</div>
            <div className="mt-5 grid gap-3">
              {[
                'The savings counter is the key shareable moment in the product.',
                'Monthly and annual numbers should always be rendered in a monospace font.',
                'Positive performance uses money green, while zombie risk uses amber or red.',
                'The share CTA should feel lightweight and celebratory, not enterprise-heavy.',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ecfbf4] text-[12px] font-semibold text-[#16a34a]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit5PromptPackSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Zombie Analysis & Flow Recommendation Prompts</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Prompts shown in the UI and reused as product marketing content. Each block is written to be copy-paste
          ready for Claude or GPT-4o while staying tightly aligned with the StackReaper story.
        </p>
      </div>

      <div className="grid gap-5">
        {stackReaperPromptPack.map((group, index) => (
          <div
            key={group.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${group.accent}`}>
                  Prompt Pack
                </div>
                <div className="mt-3 text-[26px] font-semibold tracking-[-0.025em] text-[#101828]">{group.title}</div>
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
                UI + marketing ready
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
                  <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-7 text-slate-200">
                    <code>{prompt}</code>
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

function methodClass(method: string) {
  if (method === 'GET') return 'bg-[#eef4ff] text-[#2563EB]';
  if (method === 'POST') return 'bg-[#ecfbf4] text-[#067647]';
  return 'bg-[#f5f7fb] text-[#475467]';
}

function Kit5ApiSchemaSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">REST API Schema</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Base URL: <span className="font-mono text-[#101828]">https://api.stackreaper.io/v1</span> {' '}• Auth:{' '}
          <span className="font-mono text-[#101828]">Bearer (Supabase JWT)</span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Auth model', 'Bearer token via Supabase JWT'],
          ['Primary consumer', 'Dashboard, scan jobs, n8n import surfaces'],
          ['Design principle', 'Thin REST layer over classified subscription state'],
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
        <table className="min-w-[940px] w-full border-collapse">
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
            {stackReaperApiRows.map((row, index) => (
              <tr key={`${row.method}-${row.endpoint}`} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                <td className="px-6 py-5 align-top">
                  <span className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold ${methodClass(row.method)}`}>
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

function Kit5LandingCopySection() {
  const previewHeadlineByIndex = [
    'A viral audit story founders will instantly want to share',
    'Kill waste before the next renewal hits your card',
    'Your margin is hiding behind a pile of forgotten SaaS',
    'From scan to switch in four clean product moments',
    'Savings people actually want to brag about publicly',
  ];

  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Landing Page Copy Alternatives</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Strategic copy options for StackReaper&apos;s landing flow. Each block is structured like a real section system
          so the messaging can be tested visually, not just reviewed in a doc.
        </p>
      </div>

      <div className="grid gap-5">
        {stackReaperLandingSections.map((section, groupIndex) => (
          <div
            key={section.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${section.tone}`}>
                  Landing block
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.025em] text-[#101828]">{section.title}</div>
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
                        ? 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]'
                        : optionIndex === 1
                          ? 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]'
                          : 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]'
                    }`}
                  >
                    <div className="inline-flex rounded-[10px] bg-white/70 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                      Option {String.fromCharCode(65 + optionIndex)}
                    </div>
                    <div className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.label}</div>
                  </div>

                  <div className="p-6">
                    <div className="rounded-[20px] bg-[#fcfdff] p-5">
                      <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Landing section preview</div>
                      <div className="mt-3 text-[30px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#101828]">
                        {previewHeadlineByIndex[groupIndex]}
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
                Pricing
              </div>
              <div className="mt-3 text-[28px] font-semibold tracking-[-0.025em] text-[#101828]">Pricing Alternatives</div>
            </div>
            <div className="rounded-full bg-[#f6f8fb] px-4 py-2 text-[13px] font-medium text-[#667085]">
              3 alternatives
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {stackReaperPricingAlternatives.map((item, index) => (
              <div
                key={item.tier}
                className="overflow-hidden rounded-[26px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
              >
                <div
                  className={`p-6 ${
                    index === 0
                      ? 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]'
                      : index === 1
                        ? 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]'
                        : 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]'
                  }`}
                >
                  <div className="inline-flex rounded-[10px] bg-white/70 px-3 py-1 text-[12px] font-semibold text-[#101828]">
                    Option {String.fromCharCode(65 + index)}
                  </div>
                  <div className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.tier}</div>
                  <div className="mt-3 text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">{item.price}</div>
                </div>
                <div className="p-6">
                  <div className="rounded-[20px] bg-[#fcfdff] p-5">
                    <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Pricing section preview</div>
                    <div className="mt-3 space-y-3 text-[15px] leading-8 text-[#475467]">
                      <p><span className="font-semibold text-[#101828]">Best for:</span> {item.bestFor}</p>
                      <p><span className="font-semibold text-[#101828]">Value prop:</span> {item.value}</p>
                    </div>
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
      </div>
    </section>
  );
}

function Kit5WaitlistEmailSequenceSection() {
  return (
    <section className="mt-10 space-y-5">
      {stackReaperWaitlistEmails.map((email, index) => (
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
                  <div className="mt-1 text-[14px] text-[#101828]">founder@stackreaper.io</div>
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

function Kit5BrandingKitSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Brand Name</div>
          <div className="mt-6 text-[48px] font-semibold tracking-[-0.025em]">
            <span className="text-[#16A34A]">STACK</span>
            <span className="text-[#101828]">REAPER</span>
          </div>
          <div className="mt-5 space-y-3 text-[15px] leading-8 text-[#475467]">
            <p>
              <strong className="text-[#101828]">Stack</strong> is the exact term founders and CTOs already use daily:
              SaaS stack, tool stack, our stack. It gives instant context.
            </p>
            <p>
              <strong className="text-[#101828]">Reaper</strong> is the harvester. It cuts what needs to go. Dark,
              memorable, slightly menacing, and perfectly aligned with the zombie metaphor.
            </p>
            <p>
              <strong className="text-[#101828]">Together</strong> the name becomes the thing that harvests your bloated
              SaaS stack: short, verbal, global, and memorable enough to become a verb.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Domain</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">stackreaper.io</div>
            </div>
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Tagline</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">Find the zombies. Import the flows. Keep the money.</div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Brand Voice</div>
          <div className="mt-6 grid gap-4">
            {stackReaperBrandVoicePrinciples.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-[12px] text-[16px] font-semibold ${item.tone}`}>
                    {item.icon}
                  </div>
                  <div className="text-[18px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Logo Specification</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Element</th>
                <th className="px-6 py-5 text-left text-[14px] font-medium text-[#667085]">Specification</th>
              </tr>
            </thead>
            <tbody>
              {stackReaperLogoSpecRows.map((row, index) => (
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
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Language Guide - Do / Don&apos;t</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#067647]">DO SAY</th>
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#d92d20]">DON&apos;T SAY</th>
              </tr>
            </thead>
            <tbody>
              {stackReaperLanguageGuideRows.map((row, index) => (
                <tr key={`${row.do}-${index}`} className="border-t border-[#e6eaf2] first:border-t-0">
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

function Kit5LaunchChecklistSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="max-w-[980px]">
        <div className="text-[34px] font-semibold tracking-[-0.025em] text-[#101828]">Launch Checklist</div>
      </div>

      <div className="grid gap-5">
        {stackReaperLaunchChecklistGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className="flex items-center gap-3">
              <div className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${group.tone}`}>
                Checklist
              </div>
              <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{group.title}</div>
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
                    <span className="mt-1 text-[16px] text-[#16a34a]">■</span>
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

function Kit5PrivacyAgreementSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[32px] border border-[#dfe4ea] bg-[linear-gradient(180deg,#fffefb_0%,#ffffff_100%)] shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
        <div className="border-b border-[#e6eaf2] px-8 py-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Legal Agreement</div>
              <div className="mt-3 max-w-[820px] text-[32px] font-semibold tracking-[-0.025em] text-[#101828]">
                Privacy and Data Processing Agreement (DPA)
              </div>
              <p className="mt-4 max-w-[860px] text-[15px] leading-8 text-[#667085]">
                This agreement defines how STACKREAPER collects, processes, stores, and protects user financial and
                operational data across Plaid, n8n, Supabase, Anthropic, and related platform services.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e6eaf2] bg-[#fcfdff] px-5 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Last Updated</div>
              <div className="mt-2 text-[15px] font-medium text-[#101828]">April 1, 2026</div>
              <div className="mt-4 text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Product</div>
              <div className="mt-2 text-[15px] font-medium text-[#101828]">STACKREAPER · stackreaper.io</div>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
            <div className="space-y-0">
              {stackReaperDpaSections.map((item, index) => (
                <div
                  key={item.number}
                  className={`py-7 ${index === 0 ? '' : 'border-t border-[#eceff4]'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d0d5dd] bg-white text-[13px] font-semibold text-[#344054]">
                      {item.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#98a2b3]">Section {item.number}</div>
                      <div className="mt-2 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
                      <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t border-[#eceff4] py-7">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#98a2b3]">Appendix A</div>
                <div className="mt-2 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Third-Party Sub-Processors</div>
                <div className="mt-5 overflow-x-auto rounded-[24px] border border-[#e6eaf2] bg-white">
                  <table className="min-w-[640px] w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e6eaf2]">
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Provider</th>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stackReaperSubProcessors.map((row, index) => (
                        <tr key={row.provider} className={index === 0 ? '' : 'border-t border-[#e6eaf2]'}>
                          <td className="px-5 py-5 text-[15px] font-medium text-[#101828]">{row.provider}</td>
                          <td className="px-5 py-5 text-[15px] leading-7 text-[#667085]">{row.role}</td>
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
                <div className="mt-2 text-[16px] font-medium text-[#101828]">Operational Privacy + Processing</div>
              </div>
              <div className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Primary Systems</div>
                <div className="mt-3 space-y-2 text-[15px] leading-7 text-[#475467]">
                  <div>Plaid OAuth</div>
                  <div>Supabase Vault</div>
                  <div>Anthropic / Claude</div>
                  <div>Stripe Billing</div>
                  <div>n8n Import Access</div>
                </div>
              </div>
              <div className="rounded-[24px] border border-[#d7f0e2] bg-[#f4fbf7] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#067647]">User Right to Delete</div>
                <div className="mt-3 text-[15px] leading-8 text-[#475467]">
                  Upon account deletion, synced transaction data and encrypted tokens are permanently purged within 30
                  days.
                </div>
              </div>
              <div className="rounded-[24px] border border-[#e6eaf2] bg-white p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#98a2b3]">Contact</div>
                <div className="mt-2 text-[16px] font-medium text-[#101828]">privacy@stackreaper.io</div>
                <div className="mt-3 text-[14px] leading-7 text-[#667085]">
                  For GDPR / CCPA rights requests, deletion requests, or sub-processor inquiries.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kit5AbTestingSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">A/B Test Scenarios</div>
        <p className="mt-3 max-w-[980px] text-[16px] leading-8 text-[#667085]">
          Priority growth test scenarios for STACKREAPER. Each test includes a hypothesis, Variant A, Variant B,
          success metric, and estimated impact. Tests run through PostHog Feature Flags, already available in the
          stack at zero additional cost.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Test execution framework</div>
        <NativeTable
          columns={[
            { key: 'rule', label: 'Rule', className: 'w-[28%]' },
            { key: 'detail', label: 'Detail', className: 'w-[72%]' },
          ]}
          rows={stackReaperAbFrameworkRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Test schedule — first 90 days</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {stackReaperAbSchedule.map((item, index) => (
            <div
              key={item.timeline}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div
                className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${
                  index % 3 === 0 ? 'bg-[#eefec8]' : index % 3 === 1 ? 'bg-[#e6f3ff]' : 'bg-[#ffe2c5]'
                }`}
              >
                {item.timeline}
              </div>
              <div className="mt-4 text-[21px] font-semibold tracking-[-0.025em] text-[#101828]">{item.test}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Test scenarios</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {stackReaperAbScenarioCards.map((item, index) => (
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

              <div className="mt-4 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.hypothesis}</p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Variant A · Control</div>
                  <div className="mt-2 text-[15px] leading-7 text-[#475467]">{item.control}</div>
                </div>
                <div className="rounded-[18px] border border-[#dce7ff] bg-[#f6f9ff] px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Variant B · Test</div>
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
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">PostHog feature flag — example implementation</div>
        <div className="mt-5 overflow-x-auto rounded-[20px] bg-[#0f172a] p-5">
          <pre className="min-w-[680px] whitespace-pre-wrap text-[13px] leading-7 text-[#e2e8f0]">{`// pages/dashboard.tsx
const { isFeatureEnabled } = useFeatureFlagEnabled('aggressive-zombie-headline')

const headline = isFeatureEnabled
  ? "Your SaaS stack has zombies. Let's harvest them."
  : "Optimize your SaaS subscriptions and save money."

posthog.capture('hero_headline_viewed', {
  variant: isFeatureEnabled ? 'reaper_vibe' : 'standard_vibe'
})`}</pre>
        </div>
      </div>
    </section>
  );
}

function Kit5TechStackCostSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Tech Stack Cost Model</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Realistic cost brackets from MVP to growth stage for STACKREAPER. All figures below are monthly USD estimates
          and are designed to map infrastructure cost against the revenue curve.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Stage 1 — MVP (0 - First 10 Customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Notes', className: 'w-[44%]' },
          ]}
          rows={stackReaperCostStage1Rows}
        />
        <div className="rounded-[20px] border border-[#dce7ff] bg-[#f6f9ff] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">MVP Monthly Total:</strong> $5 - $50/mo
          <br />
          <strong className="text-[#101828]">Insight:</strong> Cost is negligible until the first bank scans happen.
          <br />
          <strong className="text-[#101828]">Risk:</strong> Plaid production access may require a minimum commitment,
          so proving the first 10-customer hook in Dev mode is critical.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Stage 2 — Growth (100 - 500 Customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Notes', className: 'w-[44%]' },
          ]}
          rows={stackReaperCostStage2Rows}
        />
        <div className="rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Growth Monthly Total:</strong> ~$400 - $700/mo (Infrastructure)
          <br />
          <strong className="text-[#101828]">Insight:</strong> At $31,600 MRR, the infra-to-revenue ratio is ~2%.
          <br />
          <strong className="text-[#101828]">Note:</strong> Plaid and Stripe fees become the dominant cost lines as user
          volume increases.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Stage 3 — Scale (500 - 2,000 Customers)</div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[18%]' },
            { key: 'notes', label: 'Notes', className: 'w-[44%]' },
          ]}
          rows={stackReaperCostStage3Rows}
        />
        <div className="rounded-[20px] border border-[#f4c68f] bg-[#fff7f0] p-5 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Scale Monthly Total:</strong> ~$1,300 - $2,100/mo (Infrastructure)
          <br />
          <strong className="text-[#101828]">Insight:</strong> At $198k MRR, the core infra remains remarkably lean.
          <br />
          <strong className="text-[#101828]">Reality:</strong> Security overhead around bank data becomes more expensive
          than raw compute itself.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Cost / Revenue Ratio Summary</div>
        <NativeTable
          columns={[
            { key: 'stage', label: 'Stage', className: 'w-[30%]' },
            { key: 'infra', label: 'Infra Cost Estimate', className: 'w-[20%]' },
            { key: 'mrr', label: 'Estimated MRR', className: 'w-[25%]' },
            { key: 'ratio', label: 'Infra / Revenue Ratio', className: 'w-[25%]' },
          ]}
          rows={stackReaperCostRevenueRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Critical Decision Points</div>
        <div className="grid gap-5 xl:grid-cols-3">
          {stackReaperDecisionPoints.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5DomainResearchSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Domain Research</div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Primary Domains (STACKREAPER brand)</div>
        <NativeTable
          columns={[
            { key: 'domain', label: 'Domain', className: 'w-[24%]' },
            { key: 'recommendation', label: 'Recommendation', className: 'w-[18%]' },
            { key: 'rationale', label: 'Rationale', className: 'w-[58%]' },
          ]}
          rows={stackReaperPrimaryDomains}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Alternative Brand Names & Domains</div>
        <NativeTable
          columns={[
            { key: 'brand', label: 'Brand Name', className: 'w-[18%]' },
            { key: 'domains', label: 'Domains', className: 'w-[24%]' },
            { key: 'rationale', label: 'Rationale', className: 'w-[43%]' },
            { key: 'power', label: 'Power', className: 'w-[15%]' },
          ]}
          rows={stackReaperAltDomains}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Domain Strategy Notes</div>
        <div className="grid gap-5 xl:grid-cols-3">
          {stackReaperDomainNotes.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5OnboardingActivationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Onboarding & Activation Flow</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          In PLG products like STACKREAPER, onboarding is a race against the subscription clock. Most users decide to
          continue or drop within the first 24 hours of scanning their bank data. The goal is to compress the time
          between signup and the first Zombie Kill.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">The Activation Milestone Framework</div>
        <p className="text-[15px] leading-8 text-[#667085]">
          STACKREAPER has one primary North Star metric: the first confirmed saving. Every onboarding touchpoint moves
          the user from curiosity to manual cancellation plus n8n replacement.
        </p>
        <NativeTable
          columns={[
            { key: 'milestone', label: 'Milestone', className: 'w-[12%]' },
            { key: 'event', label: 'Event Description', className: 'w-[48%]' },
            { key: 'timing', label: 'Typical Timing', className: 'w-[20%]' },
            { key: 'benchmark', label: 'Benchmark Rate', className: 'w-[20%]' },
          ]}
          rows={stackReaperActivationMilestones}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Day-by-Day Onboarding Sequence</div>
        <div className="grid gap-5">
          {stackReaperOnboardingDays.map((item) => (
            <div
              key={item.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                  {item.day}
                </div>
                <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
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
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Aha Moment Design Principles</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {stackReaperAhaPrinciples.map((item) => (
            <div
              key={item.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${item.tone}`}
            >
              <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#d7f0e2] bg-[#f4fbf7] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">Key metric to track</div>
        <p className="mt-3 text-[15px] leading-8 text-[#475467]">
          Median time from Signup to First n8n Flow Export.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-[#475467]">
          <strong className="text-[#101828]">Benchmark target:</strong> Under 45 minutes.
          <br />
          <strong className="text-[#101828]">Bottleneck audit:</strong> If M1 is low, simplify Plaid intro copy. If M5
          is low, simplify the n8n setup guide.
        </p>
      </div>
    </section>
  );
}

function Kit5SeoContentStrategySection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">SEO & Content Strategy</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Organic search is STACKREAPER&apos;s primary engine for capturing high-intent traffic from founders and CTOs
          trying to extend runway. The strategy targets the exact frustration moment: when someone realizes the SaaS bill
          is too high or asks if the task can just be automated.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Keyword Strategy Overview</div>
        <p className="mt-3 text-[15px] leading-8 text-[#667085]">
          Three keyword tiers guide the engine: bottom-of-funnel tool replacements, middle-of-funnel cost-cutting
          research, and programmatic n8n blueprint pages.
        </p>
        <div className="mt-6">
          <NativeTable
            columns={[
              { key: 'keyword', label: 'Keyword', className: 'w-[28%]' },
              { key: 'volume', label: 'Volume', className: 'w-[12%]' },
              { key: 'competition', label: 'Competition', className: 'w-[14%]' },
              { key: 'funnel', label: 'Funnel', className: 'w-[10%]' },
              { key: 'type', label: 'Content Type', className: 'w-[36%]' },
            ]}
            rows={stackReaperSeoKeywordRows}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Content Architecture</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {stackReaperSeoArchitectureCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
            >
              <div className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#667085]">{card.title}</div>
              <div className="mt-3 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{card.subtitle}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">12-Month Content Calendar</div>
        <NativeTable
          columns={[
            { key: 'period', label: 'Period', className: 'w-[18%]' },
            { key: 'theme', label: 'Theme', className: 'w-[18%]' },
            { key: 'deliverables', label: 'Deliverables', className: 'w-[64%]' },
          ]}
          rows={stackReaperSeoCalendarRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Distribution & Link Building</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {stackReaperSeoDistributionCards.map((item) => (
            <div
              key={item.channel}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.channel}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.strategy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kit5AgencyPlaybookSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-4">
        {stackReaperAgencyStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[42px] font-semibold tracking-[-0.025em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <p className="text-[16px] leading-8 text-[#475467]">
          The agency channel is STACKREAPER&apos;s fastest path to high-tier MRR. One agency on the $499/mo plan
          represents the same revenue as 6 Pro accounts. More importantly, each agency brings 10-50 portfolio
          companies, turning every agency sale into a multiplier for the Zombie Database and n8n template adoption.
        </p>
        <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
          <strong className="text-[#101828]">The Pitch:</strong> StackReaper turns a 20-hour manual billable audit into
          a 5-minute automated report, allowing the agency to charge for the value of savings rather than spreadsheet
          hours.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Why agencies are the ideal early customer</div>
        <NativeTable
          columns={[
            { key: 'metric', label: 'Metric', className: 'w-[38%]' },
            { key: 'value', label: 'Value', className: 'w-[62%]' },
          ]}
          rows={stackReaperAgencyWhyRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Ideal Agency Profile (ICP)</div>
        <NativeTable
          columns={[
            { key: 'attribute', label: 'Attribute', className: 'w-[24%]' },
            { key: 'description', label: 'Description', className: 'w-[76%]' },
          ]}
          rows={stackReaperAgencyIcpRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Outreach Sequence</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {stackReaperAgencyOutreachTouches.map((item) => (
            <div
              key={item.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                {item.day}
              </div>
              <div className="mt-5 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-[#475467]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Demo Script (15-minute call)</div>
        <NativeTable
          columns={[
            { key: 'time', label: 'Time', className: 'w-[16%]' },
            { key: 'stage', label: 'Stage', className: 'w-[18%]' },
            { key: 'script', label: 'Script', className: 'w-[46%]' },
            { key: 'notes', label: 'Notes', className: 'w-[20%]' },
          ]}
          rows={stackReaperAgencyDemoRows}
        />
      </div>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">White-label Pitch (Agency Plan Features)</div>
          <NativeTable
            columns={[
              { key: 'feature', label: 'Feature', className: 'w-[40%]' },
              { key: 'benefit', label: 'Agency Benefit', className: 'w-[60%]' },
            ]}
            rows={stackReaperWhiteLabelRows}
          />
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Agency Expansion Revenue</div>
          <div className="mt-5 space-y-4">
            {stackReaperAgencyTiers.map((item) => (
              <div key={item.tier} className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                <div className="text-[13px] uppercase tracking-[0.08em] text-[#98a2b3]">{item.tier}</div>
                <div className="mt-2 text-[22px] font-semibold tracking-[-0.025em] text-[#101828]">{item.price}</div>
                <div className="mt-2 text-[15px] leading-7 text-[#667085]">{item.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
            <strong className="text-[#101828]">Why this matters:</strong> agencies become boots on the ground. They do
            not just use the tool; they evangelize n8n-first architecture across dozens of startups, making STACKREAPER
            the standard for lean GTM operations.
          </div>
        </div>
      </section>
    </section>
  );
}

function Kit5ObjectionHandlingSection() {
  return (
    <section className="mt-10 space-y-5">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">Objection Handling</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Handling objections for STACKREAPER means shifting the conversation from another tool I have to pay for to the
          tool that deletes my other bills. The language stays anchored in zombie detection, n8n superiority, and immediate ROI.
        </p>
      </div>

      {stackReaperObjectionCards.map((item) => (
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

          <div className="mt-5 text-[24px] font-semibold tracking-[-0.025em] text-[#101828]">{item.title}</div>
          <div className="mt-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[14px] leading-7 text-[#667085]">
            <span className="font-medium text-[#101828]">Subtext:</span> {item.subtext}
          </div>

          <div className="mt-5 border-t border-[#e6eaf2] pt-5">
            <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Recommended response</div>
            <p className="mt-3 text-[15px] leading-8 text-[#475467]">{item.response}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export function Kit5BlueprintContent({ sectionId }: { sectionId: string }) {
  if (sectionId === 's01') {
    return <Kit5OpportunityBriefSection />;
  }

  if (sectionId === 's02') {
    return <Kit5ProductSpecSection />;
  }

  if (sectionId === 's03') {
    return <Kit5TargetMarketsSection />;
  }

  if (sectionId === 's04') {
    return <Kit5TechStackSection />;
  }

  if (sectionId === 's05') {
    return <Kit5CompetitorMapSection />;
  }

  if (sectionId === 's06') {
    return <Kit5RevenueModelSection />;
  }

  if (sectionId === 's07') {
    return <Kit5First50CustomersSection />;
  }

  if (sectionId === 's08') {
    return <Kit5ConversionFunnelsSection />;
  }

  if (sectionId === 's09') {
    return <Kit5CodePromptsSection />;
  }

  if (sectionId === 's10') {
    return <Kit5DesignSystemSection />;
  }

  if (sectionId === 's11') {
    return <Kit5UiKitSection />;
  }

  if (sectionId === 's12') {
    return <Kit5PromptPackSection />;
  }

  if (sectionId === 's13') {
    return <Kit5ApiSchemaSection />;
  }

  if (sectionId === 's15') {
    return <Kit5LandingCopySection />;
  }

  if (sectionId === 's16') {
    return <Kit5WaitlistEmailSequenceSection />;
  }

  if (sectionId === 's17') {
    return <Kit5BrandingKitSection />;
  }

  if (sectionId === 's18') {
    return <Kit5LaunchChecklistSection />;
  }

  if (sectionId === 's19') {
    return <Kit5PrivacyAgreementSection />;
  }

  if (sectionId === 's20') {
    return <Kit5AbTestingSection />;
  }

  if (sectionId === 's21') {
    return <Kit5TechStackCostSection />;
  }

  if (sectionId === 's22') {
    return <Kit5DomainResearchSection />;
  }

  if (sectionId === 's23') {
    return <Kit5OnboardingActivationSection />;
  }

  if (sectionId === 's24') {
    return <Kit5SeoContentStrategySection />;
  }

  if (sectionId === 's25') {
    return <Kit5AgencyPlaybookSection />;
  }

  if (sectionId === 's26') {
    return <Kit5ObjectionHandlingSection />;
  }

  return <Kit4BlueprintContent sectionId={sectionId} />;
}
