import { blueprintSections } from '@/components/kit/kit4-blueprint-sections';
import { Kit4AdContentPlannerSection } from '@/components/kit/kit4-ad-content-planner-section';
import { getBlueprintSectionMarkup } from '@/components/kit/kit4-blueprint-html';

type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

type TableRow = Record<string, string>;

const opportunityStats = [
  {
    value: '97%',
    label: 'B2B buyers trust customer evidence',
    note: 'Verified proof still wins the deal review.',
    className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    value: '+34%',
    label: 'Conversion lift from testimonials',
    note: 'Story-backed pages outperform generic proof.',
    className: 'bg-[linear-gradient(135deg,#ffd8ba_0%,#c57aff_100%)]',
  },
  {
    value: '+380%',
    label: 'High-value product conversion lift',
    note: 'The bigger the ask, the more proof matters.',
    className: 'bg-[linear-gradient(135deg,#c6e7ff_0%,#f6deff_100%)]',
  },
  {
    value: '3 min',
    label: 'ProveKit vs 3-4 wks manual',
    note: 'From connected data to publish-ready story.',
    className: 'bg-[linear-gradient(135deg,#fdf1e2_0%,#fff9f1_100%)]',
  },
];

const marketSignals = [
  '97% of B2B buyers say customer evidence is the most reliable content type.',
  'Testimonials increase conversion rates by 34%; high-value products can see lifts up to 380%.',
  '58% of buyers start research with AI tools, which amplifies the need for verified proof points.',
  'UserEvidence raising a Series A validates the category, but SMB pricing is still open.',
  '$0-$299/mo customer evidence tooling is still largely unserved.',
  'Blind-but-verified testimonials are now trusted nearly as much as named testimonials.',
  'CRM closed-lost reasons are wrong most of the time, which makes direct customer evidence even more valuable.',
];

const targetMarketCards = [
  {
    title: 'B2B SaaS (10-200 emp)',
    price: '$49-$99/mo',
    desc: 'For lean marketing teams with 50-2,000 customer accounts and very few published stories today.',
    bullets: [
      'Decision maker: VP Marketing / Founder',
      'Cycle: 1-2 weeks',
      'Best fit: early PMM motion',
    ],
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'Mid-Market SaaS (200-2K)',
    price: '$99-$299/mo',
    desc: 'For teams currently using agencies and needing segment-specific proof with higher story volume.',
    bullets: [
      '2-5 person PMM team',
      'Current spend: $500-$2K / story',
      'Cycle: 2-4 weeks',
    ],
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    title: 'Content / GTM Agencies',
    price: '$299/mo',
    desc: 'For agencies packaging verified customer stories across multiple B2B SaaS clients at strong margin.',
    bullets: [
      '5-20 active clients',
      'Extreme margin opportunity',
      'Strong fit: USA, UK, AU, NL, CA',
    ],
    tone: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
];

const geographicPriorityRows: TableRow[] = [
  { region: 'USA', density: '★★★★★', stripe: 'Very High', culture: 'Very High', speed: 'Fast', priority: '9.5/10' },
  { region: 'UK / Ireland', density: '★★★★', stripe: 'High', culture: 'High', speed: 'Medium-Fast', priority: '8.8/10' },
  { region: 'Canada', density: '★★★★', stripe: 'High', culture: 'High', speed: 'Fast', priority: '8.5/10' },
  { region: 'Israel', density: '★★★★', stripe: 'High', culture: 'Very High', speed: 'Very Fast', priority: '8.0/10' },
  { region: 'Germany / Austria', density: '★★★★', stripe: 'Medium-High', culture: 'Medium', speed: 'Medium', priority: '7.5/10' },
  { region: 'Netherlands', density: '★★★', stripe: 'High', culture: 'High', speed: 'Fast', priority: '7.5/10' },
  { region: 'Australia / NZ', density: '★★★', stripe: 'High', culture: 'High', speed: 'Fast', priority: '7.8/10' },
  { region: 'Singapore / SEA', density: '★★★', stripe: 'Medium', culture: 'Medium', speed: 'Medium', priority: '6.5/10' },
];

const buyerPersonas = [
  {
    icon: '🎯',
    name: 'Head of Marketing / VP Marketing',
    role: 'Primary buyer · age 30-42',
    detail:
      'Runs a 1-5 person team. Pain is sales repeatedly asking for case studies. Budget is usually easy to approve if the ROI is visible.',
    tag: 'Key message: 10 verified case studies this quarter instead of 2.',
  },
  {
    icon: '🚀',
    name: 'Founder / CEO (Smaller SaaS)',
    role: 'Direct economic buyer',
    detail:
      'Wants proof assets that make the product feel more credible in sales, fundraising, and partnership conversations without hiring a writer.',
    tag: 'Key message: prove value without adding another team member.',
  },
  {
    icon: '🤝',
    name: 'Agency / Fractional GTM Lead',
    role: 'Expansion buyer',
    detail:
      'Needs repeatable case study output for multiple client accounts, faster approvals, and white-label delivery that scales margin.',
    tag: 'Key message: turn one workflow into proof for every client workspace.',
  },
];

const productSpecRows: TableRow[] = [
  {
    priority: 'P0',
    feature: 'Data Integration Hub',
    description:
      'Connect Stripe, PostHog, Mixpanel, Amplitude, HubSpot, and Salesforce so each customer story starts from real product and revenue data.',
  },
  {
    priority: 'P0',
    feature: 'AI Metric Extraction',
    description:
      'Identify the most story-worthy customer outcomes like MRR growth, churn reduction, and feature adoption without manual analyst work.',
  },
  {
    priority: 'P0',
    feature: 'Customer Approval Workflow',
    description:
      'Send branded approval emails that let customers approve, edit, or hide specific metrics in two clicks.',
  },
  {
    priority: 'P0',
    feature: 'AI Story Generation',
    description:
      'Generate full case studies, short testimonials, LinkedIn posts, and quote blocks grounded in approved numbers.',
  },
  {
    priority: 'P0',
    feature: 'Verified Badge System',
    description:
      "Each published story carries a timestamped Verified by ProveKit badge that reinforces trust and traceability.",
  },
  {
    priority: 'P1',
    feature: 'Multi-Format Output',
    description:
      'Publish web stories, PDFs, Notion docs, stat cards, and embed widgets from the same approval event.',
  },
  {
    priority: 'P1',
    feature: 'Story Library',
    description:
      'Keep a searchable archive by industry, use case, metric type, and account segment for marketing and sales reuse.',
  },
  {
    priority: 'P1',
    feature: 'Embeddable Widgets',
    description:
      'Drop rotating proof widgets and stat blocks into the site with a lightweight snippet and auto-refresh.',
  },
  {
    priority: 'P2',
    feature: 'Sales-Ready Packages',
    description:
      'Surface the best matching verified stories by vertical or ICP directly inside the sales workflow.',
  },
  {
    priority: 'P2',
    feature: 'White-Label Agency Workspaces',
    description:
      'Run multiple client accounts with separate branding, approvals, and story libraries on one billing account.',
  },
  {
    priority: 'P2',
    feature: 'NPS to Story Pipeline',
    description:
      'Turn positive NPS moments into instant approval requests while customer sentiment is at its peak.',
  },
];

const storyFlow = [
  { step: '01', title: 'Connect', subtitle: 'Stripe + Analytics', detail: 'Read customer revenue and usage truth directly from source systems.', tone: 'bg-[#eefec8]' },
  { step: '02', title: 'Select', subtitle: 'Choose Customer', detail: 'Pick the account with the strongest signal or let the score engine surface one.', tone: 'bg-[#ffe2c5]' },
  { step: '03', title: 'Send', subtitle: 'Approval Email', detail: 'Share a branded request with the exact metrics the customer will approve.', tone: 'bg-[#e6f3ff]' },
  { step: '04', title: 'Approve', subtitle: '2 Clicks · <60s', detail: 'Customers approve, edit, or redact numbers without scheduling a call.', tone: 'bg-[#e9e2ff]' },
  { step: '05', title: 'Generate', subtitle: 'Claude API', detail: 'Create case study, testimonial, social copy, and stat cards in one pass.', tone: 'bg-[#fff4ea]' },
  { step: '06', title: 'Publish', subtitle: 'Verified Badge', detail: 'Ship the finished proof asset to web, PDF, widgets, and sales enablement.', tone: 'bg-[#ecfbf4]' },
];

const techStackColumns: TableColumn[] = [
  { key: 'layer', label: 'Layer', className: 'w-[18%]' },
  { key: 'recommended', label: 'Recommended', className: 'w-[22%]' },
  { key: 'alternative', label: 'Alternative', className: 'w-[18%]' },
  { key: 'rationale', label: 'Rationale', className: 'w-[42%]' },
];

const techStackRows: TableRow[] = [
  { layer: 'Frontend', recommended: 'Next.js 14', alternative: 'Retool', rationale: 'SSR, auth support, analytics, and a single product shell.' },
  { layer: 'Data Integration', recommended: 'Unified.to API', alternative: 'Merge.dev', rationale: 'One SDK for CRM and analytics connectors with less ops overhead.' },
  { layer: 'Stripe', recommended: 'Stripe API (direct)', alternative: '-', rationale: 'Per-customer MRR, expansion, and churn data directly from source.' },
  { layer: 'Analytics', recommended: 'PostHog + Mixpanel + Amplitude', alternative: 'Segment', rationale: 'Usage events, retention, and adoption across multiple customer views.' },
  { layer: 'AI / Story Gen', recommended: 'Claude API (Sonnet)', alternative: 'GPT-4o', rationale: 'Long-form B2B writing quality and metric citation accuracy.' },
  { layer: 'Approval Workflow', recommended: 'Resend + Supabase', alternative: 'Postmark', rationale: 'Branded approvals, timestamped records, and flexible customer forms.' },
  { layer: 'Widget', recommended: 'Vanilla JS', alternative: '-', rationale: 'Lightweight script snippet with no framework dependency.' },
  { layer: 'PDF Generation', recommended: 'Puppeteer / React-PDF', alternative: 'wkhtmltopdf', rationale: 'Reliable branded document output from the same story templates.' },
  { layer: 'Backend / API', recommended: 'Next.js API + tRPC', alternative: 'FastAPI', rationale: 'Type-safe full-stack surface inside one codebase.' },
  { layer: 'Database', recommended: 'Supabase (PostgreSQL)', alternative: 'PlanetScale', rationale: 'Workspace isolation and RLS matter for customer evidence workflows.' },
  { layer: 'Job Queue', recommended: 'Inngest', alternative: 'BullMQ', rationale: 'Sync jobs, reminders, and webhooks without heavy infra.' },
  { layer: 'Auth', recommended: 'Supabase Auth + Google SSO', alternative: 'Clerk', rationale: 'Fast trial onboarding with SSO and magic-link support.' },
  { layer: 'Payments', recommended: 'Stripe Billing', alternative: 'Paddle', rationale: 'Monthly, annual, and agency seat logic align well with roadmap.' },
];

const buildTimeline = [
  {
    week: 'Weeks 1-2',
    title: 'Foundations and Stripe truth layer',
    summary: 'Stand up auth, workspace data model, and Stripe-backed customer metrics so the product starts from clean evidence.',
    detail: 'Per-customer metric extraction from Stripe, Supabase schema, and baseline auth.',
    accent: 'before:bg-[#22c55e]',
  },
  {
    week: 'Week 3',
    title: 'Approval workflow system',
    summary: 'Launch branded approval emails and hosted approval forms so customer consent is frictionless and timestamped.',
    detail: 'Resend email flow, Supabase approval records, and edit controls for approved claims.',
    accent: 'before:bg-[#4361ee]',
  },
  {
    week: 'Week 4',
    title: 'Claude-powered story generation',
    summary: 'Generate case study, testimonial, and LinkedIn-ready outputs from approved metrics using one story engine.',
    detail: 'Case study, testimonial, and social templates grounded in approved data.',
    accent: 'before:bg-[#7c3aed]',
  },
  {
    week: 'Week 5',
    title: 'Story library and publish layer',
    summary: 'Ship the internal library, PDF generation, embeddable widget, and visible Verified badge experience.',
    detail: 'End-to-end publish pipeline from raw data to usable sales and marketing proof.',
    accent: 'before:bg-[#f97316]',
  },
  {
    week: 'Week 6',
    title: 'Beta analytics and monetization',
    summary: 'Add product analytics, Stripe billing, and agency workspace support so the beta is monetizable from day one.',
    detail: 'Launch-ready billing, workspace controls, and instrumentation for activation and conversion.',
    accent: 'before:bg-[#06b6d4]',
  },
];

const competitorMapColumns: TableColumn[] = [
  { key: 'product', label: 'Product', className: 'w-[16%]' },
  { key: 'price', label: 'Price', className: 'w-[12%]' },
  { key: 'strength', label: 'Strength', className: 'w-[18%]' },
  { key: 'weakness', label: 'Weakness', className: 'w-[24%]' },
  { key: 'liveData', label: 'Live Data', className: 'w-[7%]' },
  { key: 'verified', label: 'Verified', className: 'w-[7%]' },
  { key: 'quality', label: 'Quality', className: 'w-[8%]' },
  { key: 'smbFit', label: 'SMB Fit', className: 'w-[8%]' },
];

const competitorMapRows: TableRow[] = [
  {
    product: 'Testimonial.to',
    price: '$50-400/mo',
    strength: 'Video testimonials',
    weakness: 'No data, no AI, no verification',
    liveData: '1/10',
    verified: '1/10',
    quality: '5/10',
    smbFit: '8/10',
  },
  {
    product: 'UserEvidence',
    price: '$1,000+/mo',
    strength: 'Verified stats via survey',
    weakness: 'Survey-based, no Stripe, enterprise-only',
    liveData: '7/10',
    verified: '4/10',
    quality: '7/10',
    smbFit: '2/10',
  },
  {
    product: 'Jasper / Copy.ai',
    price: '$39-125/mo',
    strength: 'AI copy generation',
    weakness: 'No data, nothing verified',
    liveData: '2/10',
    verified: '1/10',
    quality: '8/10',
    smbFit: '6/10',
  },
  {
    product: 'Manual / Agency',
    price: '$500-2,500/story',
    strength: 'Full custom case studies',
    weakness: '3-4 weeks, expensive, unscalable',
    liveData: '6/10',
    verified: '3/10',
    quality: '9/10',
    smbFit: '1/10',
  },
  {
    product: 'ReferenceEdge',
    price: '$20k+/yr',
    strength: 'Reference management',
    weakness: 'Enterprise only, no AI, no data',
    liveData: '4/10',
    verified: '5/10',
    quality: '6/10',
    smbFit: '1/10',
  },
  {
    product: 'PROVEKIT',
    price: '$49-299/mo',
    strength: 'Verified story engine: data to story',
    weakness: '-',
    liveData: '9/10',
    verified: '9/10',
    quality: '9/10',
    smbFit: '9/10',
  },
];

const competitorMatrixPoints = [
  {
    name: 'Manual Case Studies',
    subtitle: 'Expensive, 4 Weeks',
    short: 'Manual / Agency',
    x: 10,
    y: 30,
    provekit: false,
  },
  {
    name: 'Video Testimonials',
    subtitle: 'Low Verification',
    short: 'Testimonial.to',
    x: 40,
    y: 15,
    provekit: false,
  },
  {
    name: 'AI Copy Tools',
    subtitle: 'Fast but Unverified',
    short: 'Jasper / Copy.ai',
    x: 85,
    y: 10,
    provekit: false,
  },
  {
    name: 'Survey-based Stats',
    subtitle: 'Enterprise, Slow',
    short: 'UserEvidence',
    x: 25,
    y: 70,
    provekit: false,
  },
  {
    name: 'Interactive Demos',
    subtitle: 'Product only',
    short: 'Storylane',
    x: 50,
    y: 20,
    provekit: false,
  },
  {
    name: 'Enterprise Reference',
    subtitle: 'Legacy',
    short: 'ReferenceEdge',
    x: 15,
    y: 50,
    provekit: false,
  },
  {
    name: 'ProveKit: The Verified Story Engine',
    subtitle: 'Winner',
    short: 'PROVEKIT',
    x: 95,
    y: 95,
    provekit: true,
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$49',
    suffix: '/mo',
    desc: 'For lean founder-led teams that need their first verified proof assets live quickly.',
    items: ['1-3 seats', '5 stories / month', 'Stripe only', '3 output formats', 'Basic embed', 'Email support'],
    emphasized: false,
  },
  {
    name: 'Growth',
    price: '$99',
    suffix: '/mo',
    desc: 'Best fit for PMM and demand gen teams turning customer wins into weekly GTM proof.',
    items: ['Up to 8 seats', 'Unlimited stories', 'All integrations', 'All formats', 'Full widget', 'Priority support'],
    emphasized: true,
  },
  {
    name: 'Scale',
    price: '$199',
    suffix: '/mo',
    desc: 'For multi-segment SaaS teams that need CRM context, custom styling, and bigger story throughput.',
    items: ['Up to 20 seats', 'Unlimited stories', 'All + CRM', 'Custom CSS', 'White-label embed', 'CSM access'],
    emphasized: false,
  },
  {
    name: 'Agency',
    price: '$299',
    suffix: '/mo',
    desc: 'For agencies producing customer evidence at scale across multiple client workspaces.',
    items: ['Unlimited seats', 'Unlimited stories', 'All integrations', 'All formats', 'White-label full', 'Dedicated support'],
    emphasized: false,
  },
];

const projectionColumns: TableColumn[] = [
  { key: 'month', label: 'Month' },
  { key: 'starter', label: 'Starter' },
  { key: 'growth', label: 'Growth' },
  { key: 'scale', label: 'Scale' },
  { key: 'agency', label: 'Agency' },
  { key: 'total', label: 'Total MRR' },
  { key: 'mom', label: 'MoM' },
];

const projectionRows: TableRow[] = [
  { month: 'M1', starter: '12', growth: '2', scale: '0', agency: '0', total: '$588', mom: '-' },
  { month: 'M2', starter: '25', growth: '6', scale: '2', agency: '1', total: '$1,915', mom: '+226%' },
  { month: 'M3', starter: '50', growth: '18', scale: '5', agency: '3', total: '$5,147', mom: '+169%' },
  { month: 'M6', starter: '120', growth: '50', scale: '18', agency: '12', total: '$22,982', mom: '+75%' },
  { month: 'M9', starter: '220', growth: '90', scale: '35', agency: '25', total: '$52,230', mom: '+44%' },
  { month: 'M12', starter: '350', growth: '140', scale: '60', agency: '45', total: '$95,650', mom: '+27%' },
];

const expansionRows: TableRow[] = [
  { stream: 'Story overage', value: '$8 / story over plan limit' },
  { stream: 'PDF branding add-on', value: 'Custom PDF templates - $19 / mo' },
  { stream: 'Done-for-you onboarding', value: '$299 one-time for first 5 stories' },
  { stream: 'Agency white-label seats', value: '$25 / workspace / mo over base plan' },
  { stream: 'Integration marketplace', value: 'Custom CRM adapters and revenue share' },
  { stream: 'Enterprise', value: 'Custom pricing, SSO, and compliance onboarding' },
];

const launchChecklistGroups = [
  {
    title: 'Technical Readiness',
    tone: 'bg-[#eefec8]',
    items: [
      'Stripe OAuth integration tested with 5 real customers',
      'PostHog integration: per-customer metrics normalized',
      'Approval email (Resend): branded, token-based link works',
      'Approval form: approve, edit metrics, digital signature',
      'Claude API story generation: tested 10 metric combinations',
      'Embeddable widget: renders on WP, Webflow, React',
      'PDF generation: branded with company logo',
      'Stripe billing: all plans + story limit enforcement',
      'Story library: accessible, filterable, shareable',
    ],
  },
  {
    title: 'Legal & Trust',
    tone: 'bg-[#e6f3ff]',
    items: [
      'Customer approval terms: legal language in approval form',
      'Privacy policy updated: Stripe/analytics data access explained',
      'Data encryption: tokens/API keys encrypted (Supabase Vault)',
      'GDPR compliance: customer can request deletion',
      'Verified badge terms: clear explanation of data source/date',
      'RLS tested: Account A cannot access Account B data',
    ],
  },
  {
    title: 'Marketing & Launch',
    tone: 'bg-[#ffe2c5]',
    items: [
      'Landing page live (Section 15 copy)',
      'Waitlist email sequence live in Loops.so',
      'Product Hunt assets: tagline, screenshots, 3-min demo',
      'Stripe App Marketplace submitted (2-4 week review)',
      'Indie Hackers launch post drafted',
      '10 beta case studies generated for demos',
      'ROI calculator: manual case study cost tool',
      'Day 1 email: auto after Stripe connection (not just signup)',
      'Onboarding 3-step checklist in dashboard',
      'Approval reminder: 48h auto-reminder if no response',
    ],
  },
];

const waitlistEmails = [
  {
    day: 'Day 0',
    subject: "You're on the ProveKit waitlist",
    preview: 'Welcome email that frames the whole promise and asks how many stories the team has today.',
    cta: 'Reply with your case study count',
    body: `Hi [First Name],

You just joined the ProveKit waitlist — and you're one of 600+ B2B SaaS founders and marketers who are done with the 3-week case study process.

Here's what you'll get when we open your slot:
→ Connect Stripe in 2 minutes — ProveKit reads your customer metrics immediately
→ Customer approval in 2 clicks — most customers respond in under 24 hours
→ Verified case study, testimonial, LinkedIn post — all generated automatically
→ Embeddable widget for your website — ship it today

Quick question: How many case studies does your company have published?
Reply and I'll tell you how many you could have with ProveKit this month.

— [Founder Name], ProveKit`,
  },
  {
    day: 'Day 3',
    subject: 'The math behind your missing case studies',
    preview: 'Turns story production into a concrete cost model and highlights the value gap.',
    cta: 'Watch how it works in 3 minutes',
    body: `Your customers are already giving you the data.

Let's say you have 200 customers.
Average MRR growth for healthy B2B SaaS customers: ~30% in first year.
20% of your customers had exceptional results (+80% growth, -60% churn, etc.)
= ~40 customers with incredible stories
= 40 potential case studies
→ You've published: maybe 3.

Each case study (manually): 20–30 hours × $80/hr = $1,600–$2,400 to produce.
40 case studies manually: $64,000–$96,000 in team time.
ProveKit: $99/month.`,
  },
  {
    day: 'Day 7',
    subject: "Why 'verified' changes everything with buyers",
    preview: 'Explains why verified proof is stronger than generic testimonial copy.',
    cta: 'See a real ProveKit-verified story',
    body: `There's a difference between:
'Revenue increased significantly' (unverified testimonial)
and
'MRR grew 127% in 8 months — verified from Stripe data on Jan 14, 2025' (ProveKit)

97% of B2B buyers say customer evidence is the most reliable content type.
But they also know when evidence is vague and unverified.

With the ProveKit Verified badge:
→ Buyers can trust the exact numbers
→ You differentiate from competitors using generic testimonials
→ Your case studies hold up in competitive deal conversations`,
  },
  {
    day: 'Day 11',
    subject: 'One thing before we give you access',
    preview: 'Short segmentation email so the product can be configured to the team’s current process.',
    cta: 'Reply with a, b, c, or d',
    body: `[First Name], we're rolling out accounts this week. One quick question:

What's your current case study production process?
a) We have a dedicated writer or agency
b) Marketing does it manually — takes weeks
c) We barely have any case studies — it never gets prioritized
d) We use a tool (Jasper, etc.) but the output isn't verified

Reply with a letter. I'll make sure ProveKit is configured for your exact situation when you log in.`,
  },
  {
    day: 'Day 14',
    subject: 'Your ProveKit account is ready',
    preview: 'Launch email that turns the waitlist into activation with a clear first action.',
    cta: 'Connect Stripe and generate your first case study',
    body: `[First Name] — you're in.

Start here: connect your Stripe account. Takes 2 minutes.
Then pick your happiest customer — one with strong MRR growth or clear product adoption.

ProveKit will show you their metrics and suggest the most compelling story angles.
Send the approval email. Most customers respond within 24 hours.
When they do, your first verified case study is waiting.

Questions? Reply here — I respond same day.
— [Founder Name], ProveKit`,
  },
];

const landingCopyAlternatives = [
  {
    section: 'Hero section',
    theme: 'Launch entry point',
    options: [
      {
        title: 'The Efficiency Angle',
        audience: 'Overwhelmed marketing managers and content leads',
        purpose: 'Position ProveKit as the time-saving engine that removes the operational drag of case study production.',
        copy:
          'Stop chasing quotes. Start publishing proof. Turn Stripe data into verified case studies in 3 minutes—no writers, no interviews, no delays.',
      },
      {
        title: 'The Authority Angle',
        audience: 'Founders and sales leaders in skeptical markets',
        purpose: 'Make the verified trust layer feel like a real closing advantage, not just a nice feature.',
        copy:
          "Don't just claim value. Prove it with live data. Generate 'Verified by Stripe' case studies that B2B buyers actually trust.",
      },
      {
        title: 'The Growth Angle',
        audience: 'Growth and demand generation teams',
        purpose: 'Frame the product as a revenue and conversion engine instead of a documentation workflow tool.',
        copy:
          'Your best sales assets are hiding in your data. Unlock a 127% increase in trust with automated, data-backed success stories.',
      },
    ],
  },
  {
    section: 'Pain section',
    theme: 'Why the old approach fails',
    options: [
      {
        title: 'The Bottleneck Pain',
        audience: 'Mid-market SaaS companies with slow internal processes',
        purpose: 'Highlight the opportunity cost of a manual workflow that only creates a few stories every quarter.',
        copy:
          'The old way: 4 weeks of back-and-forth emails, ghosted interview requests, and expensive freelancers. The result? One case study per quarter. Your sales team deserves better.',
      },
      {
        title: 'The Skepticism Pain',
        audience: 'High-ticket B2B enterprise SaaS teams',
        purpose: 'Show that current testimonials are too vague to move serious buying decisions.',
        copy:
          "Generic testimonials like 'Great product!' don't close six-figure deals anymore. Buyers want hard numbers, specific timelines, and verified sources.",
      },
      {
        title: 'The Dark Assets Pain',
        audience: 'Rapidly scaling startups with high customer volume',
        purpose: 'Trigger urgency around all the customer wins that already exist but are not being turned into proof.',
        copy:
          'You have hundreds of successful customers, but only three published stories. Every day a success story goes unwritten is a day you lose a potential lead.',
      },
    ],
  },
  {
    section: 'Solution section',
    theme: 'How ProveKit works',
    options: [
      {
        title: 'The Plug & Play Solution',
        audience: 'PLG teams and solo founders',
        purpose: 'Lower activation friction by making setup feel tiny and immediate.',
        copy:
          'Connect. Sync. Done. ProveKit integrates with your stack to identify your happiest customers and draft their stories automatically.',
      },
      {
        title: 'The Customer-First Solution',
        audience: 'Customer success teams protecting relationships',
        purpose: 'Reduce fear that asking for proof will create customer friction or damage trust.',
        copy:
          'Get approval without the friction. We send a 2-click branded form that respects your customer’s time, resulting in a 90% higher response rate.',
      },
      {
        title: 'The Multi-Channel Solution',
        audience: 'Social and multi-channel marketers',
        purpose: 'Show that a single approved metric can generate many useful assets, not just one story.',
        copy:
          'One data point, infinite assets. Automatically turn one verified metric into a website case study, a LinkedIn post, and a sales slide.',
      },
    ],
  },
  {
    section: 'Verified badge section',
    theme: 'Trust signal framing',
    options: [
      {
        title: 'The New Standard Message',
        audience: 'Modern, tech-savvy buyers',
        purpose: 'Create the feeling that verified proof is the next default standard for serious B2B teams.',
        copy:
          "The Blue Checkmark for B2B. In a world of AI-generated fluff, the 'Verified' badge tells buyers your numbers are the real deal.",
      },
      {
        title: 'The Data Integrity Message',
        audience: 'CFOs, technical buyers, and analytical personas',
        purpose: 'Emphasize that the proof comes directly from trusted systems and cannot be casually rewritten.',
        copy:
          'Hard-coded Truth. Our badges pull directly from Stripe timestamps. No manual edits, no exaggerated claims, just pure proof.',
      },
      {
        title: 'The Conversion Catalyst Message',
        audience: 'Marketing directors focused on KPIs',
        purpose: 'Tie verification directly to click-through, sharing, and performance outcomes.',
        copy:
          'Increase Click-Through Rates by 40%. Verified evidence is 3x more likely to be shared and cited by industry leaders.',
      },
    ],
  },
  {
    section: 'Pricing / CTA section',
    theme: 'Close and activation',
    options: [
      {
        title: 'The Zero Risk CTA',
        audience: 'Small teams and try-before-you-buy users',
        purpose: 'Remove financial friction and maximize trial volume.',
        copy:
          "Generate your first 5 stories for free. No credit card, no commitment. Only pay when you're ready to scale your proof.",
      },
      {
        title: 'The Instant Gratification CTA',
        audience: 'High-intent users looking for a quick win',
        purpose: 'Drive immediate product entry with a near-instant aha moment.',
        copy:
          'See your data in action. Connect Stripe and preview your first verified story in the next 60 seconds.',
      },
      {
        title: 'The ROI Guarantee CTA',
        audience: 'Skeptical corporate buyers',
        purpose: 'Show confidence in the approval workflow and reduce perceived downside.',
        copy:
          "Start Free. If your customers don't approve their first story within 7 days, we’ll give you a month of Pro for free.",
      },
    ],
  },
];

const databaseTables = [
  {
    table: 'accounts',
    subtitle: 'The SaaS vendor',
    fields: [
      'id: UUID (Primary Key)',
      'company_name: String',
      'brand_settings: JSONB',
      'plan_type: Enum (Free, Pro, Enterprise)',
      'stripe_account_id: String',
    ],
  },
  {
    table: 'integrations',
    subtitle: 'The data sources',
    fields: [
      'id: UUID',
      'account_id: ForeignKey -> accounts.id',
      'provider: Enum (Stripe, Segment, PostHog, ProfitWell)',
      'access_token: Encrypted String',
      'status: Enum (Connected, Error, Disconnected)',
    ],
  },
  {
    table: 'customers',
    subtitle: "The vendor's clients",
    fields: [
      'id: UUID',
      'account_id: ForeignKey -> accounts.id',
      'external_id: String',
      'email: String',
      'company_name: String',
      'industry: String',
    ],
  },
  {
    table: 'metrics_snapshots',
    subtitle: 'The raw data',
    fields: [
      'id: UUID',
      'customer_id: ForeignKey -> customers.id',
      'mrr_growth: Decimal',
      'usage_increase: Decimal',
      'time_period: String',
      'raw_data_json: JSONB',
    ],
  },
  {
    table: 'approval_requests',
    subtitle: 'The workflow tracker',
    fields: [
      'id: UUID',
      'customer_id: ForeignKey -> customers.id',
      'secure_token: UUID',
      'status: Enum (Draft, Sent, Viewed, Approved, Rejected)',
      'expires_at: Timestamp',
    ],
  },
  {
    table: 'case_studies',
    subtitle: 'The final output',
    fields: [
      'id: UUID',
      'approval_id: ForeignKey -> approval_requests.id',
      'headline: String',
      'content_body: Text',
      'testimonial_quote: Text',
      'is_published: Boolean',
    ],
  },
  {
    table: 'verified_badges',
    subtitle: 'The trust layer',
    fields: [
      'id: UUID',
      'case_study_id: ForeignKey -> case_studies.id',
      'verification_hash: String',
      'view_count: Integer',
    ],
  },
  {
    table: 'social_assets',
    subtitle: 'Distribution',
    fields: [
      'id: UUID',
      'case_study_id: ForeignKey -> case_studies.id',
      'platform: Enum (LinkedIn, X, PDF)',
      'generated_copy: Text',
    ],
  },
];

const architectureHighlights = [
  { label: 'Engine', value: 'PostgreSQL', note: 'Chosen for relational integrity and JSONB flexibility.' },
  { label: 'Core tables', value: '8', note: 'Everything centers around account -> customer -> proof chain.' },
  { label: 'Primary logic', value: 'Account -> Customers -> Metrics -> Stories', note: 'Each company manages many customers and many story outputs.' },
];

const relationshipRows: TableRow[] = [
  { type: 'One-to-many', relation: 'Account -> Customers', detail: 'One company has many clients and each client is isolated by account_id.' },
  { type: 'One-to-many', relation: 'Customer -> Metrics', detail: 'A customer can accumulate multiple metric snapshots across different periods.' },
  { type: 'One-to-one', relation: 'ApprovalRequest -> CaseStudy', detail: 'A specific approval event should produce a single canonical story record.' },
  { type: 'JSONB flexibility', relation: 'brand_settings + metrics', detail: 'New data types and brand options can be added without constant schema migrations.' },
];

const dataFlowSteps = [
  'User connects Stripe in the integrations table.',
  'A worker fetches source data and creates metrics_snapshots.',
  'The user selects a customer and sends an approval request.',
  'The customer approves the story metrics via the secure token flow.',
  'AI reads the approved snapshot and creates the case study record.',
  'The system creates a verification hash and linked social assets for distribution.',
];

const objectionCards = [
  {
    id: '01',
    title: "Our customers won't share their data.",
    subtext: "Fear, not fact. They usually haven't asked customers in a low-friction way yet.",
    response:
      "The customer only approves what they're comfortable sharing. They see every metric before it goes live and can hide any number they want. In beta, 18 of the first 20 customers approved within 48 hours. Happy customers often want to be featured when the ask is easy.",
    accent: 'before:bg-[#f43f5e]',
  },
  {
    id: '02',
    title: 'We already have a writer / agency.',
    subtext: "Status quo bias. The value of volume hasn't been compared to the current process cost.",
    response:
      'Great — that means the team already believes in customer stories. ProveKit is not replacing quality storytelling where human polish matters; it is increasing throughput. Most teams use ProveKit to produce volume and let writers focus on the handful of stories that need a custom touch.',
    accent: 'before:bg-[#f59e0b]',
  },
  {
    id: '03',
    title: 'We use Jasper / Copy.ai already.',
    subtext: 'This objection usually confuses AI writing tools with verified customer evidence products.',
    response:
      "Jasper writes from prompts; there is no proof layer behind the words. ProveKit reads real Stripe and analytics data, gets explicit customer approval, and attaches a verification trail to the published asset. It's evidence, not just generated copy.",
    accent: 'before:bg-[#4361ee]',
  },
  {
    id: '04',
    title: 'UserEvidence does this.',
    subtext: 'This comes from incomplete competitive knowledge, especially around surveys vs direct data sources.',
    response:
      "UserEvidence relies on surveys. ProveKit reads what actually happened from Stripe and analytics, with no survey, no manual data entry, and no enterprise-only barrier. If a team is under 200 employees, that price and workflow difference matters immediately.",
    accent: 'before:bg-[#28b483]',
  },
  {
    id: '08',
    title: 'This seems expensive for what it does.',
    subtext: 'Value has not landed yet. The comparison is still against writing tool pricing, not manual production cost.',
    response:
      "Run the math: one manual case study usually costs 20–30 hours at roughly $80/hour, or $1,600–$2,400 for one story. Growth is $99/month for unlimited stories. If the team publishes even two stories in a month, ProveKit has already paid for itself.",
    accent: 'before:bg-[#101828]',
  },
  {
    id: '11',
    title: 'Can we try it for free first?',
    subtext: 'This is a positive buying signal. The buyer wants to reduce risk before committing.',
    response:
      "Yes. The free plan gives teams 5 fully verified stories with no credit card required. Connect Stripe today and the first story can be live before the end of the day. If the first five stories do not prove value, the team walks away with zero downside.",
    accent: 'before:bg-[#10b981]',
  },
];

const agencyPlaybookStats = [
  { value: '$299', label: 'Agency plan/mo', className: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]' },
  { value: '~$10', label: 'Cost per story', className: 'bg-[linear-gradient(135deg,#ffd8ba_0%,#c57aff_100%)]' },
  { value: '$800-2,500', label: 'Agency charges client/story', className: 'bg-[linear-gradient(135deg,#c6e7ff_0%,#f6deff_100%)]' },
  { value: '<1 day', label: 'Payback period', className: 'bg-[linear-gradient(135deg,#fdf1e2_0%,#fff9f1_100%)]' },
];

const agencyWhyRows: TableRow[] = [
  { metric: 'Agency plan price', value: '$299/mo' },
  { metric: "Agency's cost per story (ProveKit)", value: '~$10 (299/mo / 30 stories avg)' },
  { metric: "Agency's price to client per story", value: '$800 - $2,500' },
  { metric: 'Agency gross margin per story', value: '~$790 - $2,490' },
  { metric: 'Stories per client per month', value: '2-4' },
  { metric: 'Clients per agency', value: '5-20' },
  { metric: 'Agency payback period', value: '< 1 day of billable work' },
  { metric: 'Churn likelihood', value: 'Very low - deeply embedded in workflow' },
];

const agencyIcpRows: TableRow[] = [
  {
    attribute: 'Agency type',
    description:
      'B2B content agencies, GTM agencies, demand gen agencies, marketing ops consultancies. Not brand agencies or creative studios.',
  },
  {
    attribute: 'Client portfolio',
    description:
      'Serves 5-20 B2B SaaS companies with $1M-$50M ARR. Clients have real Stripe revenue and real customer success stories.',
  },
  {
    attribute: 'Current process',
    description:
      'Currently produces case studies manually: 3-4 weeks, $500-2,500 per story. This pain is known and felt.',
  },
  {
    attribute: 'Team size',
    description:
      '5-50 people. Small enough that founder/CEO makes tool decisions fast. Large enough to have a dedicated content team that will use ProveKit daily.',
  },
  {
    attribute: 'Geography',
    description: 'USA-first (most Stripe-native clients), then UK, Canada, Australia.',
  },
  {
    attribute: 'Discovery channels',
    description:
      "Agency Slack groups (GYDA, Agency Life, MicroConf Slack), LinkedIn (search 'B2B content agency founder'), referrals from SaaS clients.",
  },
];

const agencyOutreachTouches = [
  {
    day: 'Day 0',
    title: 'LinkedIn Connection + Note',
    copy:
      "Send connection request with note: 'Hey [Name] - I work with content agencies serving B2B SaaS. Built something that might be relevant to your case study workflow. Happy to share if timing is right.' No pitch. No link. Human.",
    accent: 'before:bg-[#f97316]',
  },
  {
    day: 'Day 2',
    title: 'LinkedIn DM after connect',
    copy:
      "Once connected: 'Quick context - we built ProveKit, which connects to Stripe and generates verified case studies in 3 minutes. Agencies are using it to produce stories for clients without the 3-week cycle. Worth a 15-min call?'",
    accent: 'before:bg-[#4361ee]',
  },
  {
    day: 'Day 5',
    title: 'Email (if no LinkedIn response)',
    copy:
      "Subject: 'Case study production for [Agency Name] clients'. Body: 'I noticed [Agency Name] does GTM content for B2B SaaS companies. We work with agencies to eliminate the 3-4 week case study production cycle. One of your clients grows MRR, connects Stripe, approves in 2 clicks - story is published. Want to see it live on a test account?'",
    accent: 'before:bg-[#28b483]',
  },
  {
    day: 'Day 9',
    title: 'Follow-up with proof',
    copy:
      "Share a live ProveKit-generated story (your own beta story or a consenting customer). 'Here is what the output looks like - this took 3 minutes from Stripe connect to publish. Worth trying with one of your clients?'",
    accent: 'before:bg-[#7c3aed]',
  },
  {
    day: 'Day 14',
    title: 'Final outreach',
    copy:
      "Subject: 'Last note on case studies'. Keep it simple: 'Totally understand if this is not the right time. If you ever want to trial it with one client account for free, just reply and I will set it up.' Offer a free trial for 1 client workspace.",
    accent: 'before:bg-[#101828]',
  },
];

const agencyDemoRows: TableRow[] = [
  {
    time: '0:00 - 2:00',
    stage: 'Qualify',
    script:
      "Ask: 'How many case studies does your team produce per month, and how long does each take?' Listen first. Let them describe the pain before you show the solution.",
    notes: 'Surface the cost in their own words.',
  },
  {
    time: '2:00 - 4:00',
    stage: 'Frame the problem',
    script:
      "Reflect it back: 'So roughly X hours per story, at Y rate, that's $Z in team cost per quarter. And you probably have 10x more customers with strong stories that never get produced.'",
    notes: 'Make the production gap tangible.',
  },
  {
    time: '4:00 - 10:00',
    stage: 'Live demo',
    script:
      'Screen share. Connect a demo Stripe account. Select a customer with strong MRR growth. Show AI metric extraction, send a test approval email, approve it, and watch the story generate.',
    notes: "Say: 'That was 6 minutes. In production it is 3.'",
  },
  {
    time: '10:00 - 12:00',
    stage: 'Agency economics',
    script:
      "Show the math: '$299/mo. You charge clients $800-2,500 per story. At 2 stories per client per month across 5 clients, that's $8,000-25,000 in billable work that now takes your team 30 minutes instead of 3 weeks.'",
    notes: 'Let them do the margin math themselves.',
  },
  {
    time: '12:00 - 15:00',
    stage: 'Close',
    script:
      "Offer: 'I can set up one client workspace for free - no credit card. Run it on your messiest case study client. If it works, we talk about the agency plan. If not, no harm done.'",
    notes: 'Free proof-of-concept keeps the close easy.',
  },
];

const whiteLabelRows: TableRow[] = [
  { feature: 'Branded approval emails', benefit: "Sent from agency's sender name and domain" },
  { feature: 'Custom story templates', benefit: 'Agency logo, colors, and typography on published stories' },
  { feature: 'White-label Verified badge', benefit: "'Verified by [Agency Name]' instead of 'Verified by ProveKit'" },
  { feature: 'Client workspace isolation', benefit: 'Each client gets its own dashboard, library, and embed widget' },
  { feature: 'Agency billing consolidation', benefit: 'One invoice for all client workspaces, simpler ops' },
];

const first50CustomerCards = [
  {
    phase: 'Day 1-30',
    title: 'Seed',
    accent: 'before:bg-[#f97316]',
    badge: 'Goal: 20 free beta - 5 paying - $300+ MRR',
    items: [
      "LinkedIn: 'Head of Marketing B2B SaaS' + 10-200 emp",
      "Hook: 'Your sales team is asking for case studies...'",
      'Product Hunt upcoming page',
      "Indie Hackers 'Show IH' post",
      'Twitter/X targeting @YCombinator founders',
      "Hacker News 'Ask HN' pain surfacing",
    ],
  },
  {
    phase: 'Day 31-60',
    title: 'Product Hunt',
    accent: 'before:bg-[#f59e0b]',
    badge: 'Goal: 50 free - 20 paid - $2,500+ MRR',
    items: [
      "Product Hunt launch: 'Case studies from Stripe data in 3 minutes, Verified'",
      'Convert 8/20 beta to paid (30-day MBG)',
      "SEO content: 'how to write a B2B case study'",
      'LinkedIn content series',
      'AppSumo lifetime deal',
      '10 B2B agencies for Agency plan trial',
    ],
  },
  {
    phase: 'Day 61-90',
    title: 'Integrations',
    accent: 'before:bg-[#28b483]',
    badge: 'Goal: 200 free - 50 paid - $7,500+ MRR',
    items: [
      'Stripe App Marketplace listing',
      'PostHog/Amplitude marketplace',
      'HubSpot App Marketplace',
      "'Case study of case study' content",
      'Referral: $20/mo credit per conversion',
      'Target YC S25 + W26 cohort',
    ],
  },
];

const aiBuildPrompts = [
  {
    id: 'Prompt 1',
    title: 'Stripe Per-Customer Metric Extraction (Node.js)',
    category: 'Data extraction',
    accent: 'bg-[#eefec8]',
    body: `Node.js ile Stripe API'den per-customer metric extraction yaz.
Input: {stripe_customer_id, account_id, lookback_months: 12}

Metrics to extract:
1. MRR at signup vs current MRR (Stripe Subscriptions API)
2. MRR growth % (((current - initial) / initial) * 100)
3. Plan upgrades: count of subscription plan upgrades since signup
4. Payment success rate: successful payments / total payment attempts
5. Lifetime value so far: sum of all successful payments
6. Active since: months since first payment

Stripe API calls:
- /v1/customers/:id -> customer metadata
- /v1/subscriptions?customer=:id -> subscription history
- /v1/invoices?customer=:id -> payment history

Save to Supabase 'customer_metrics' table:
{account_id, stripe_customer_id, mrr_initial, mrr_current, mrr_growth_pct, upgrades_count, ltv, active_months, extracted_at}

TypeScript, Inngest background job wrapper.`,
  },
  {
    id: 'Prompt 2',
    title: 'PostHog/Amplitude Usage Metrics (Node.js)',
    category: 'Analytics',
    accent: 'bg-[#e6f3ff]',
    body: `Node.js ile analytics platform per-customer usage metrics cek.
Support three providers with unified output:

POSTHOG:
GET /api/projects/{id}/persons -> filter by email
GET /api/projects/{id}/persons/{id}/activity -> usage events
Calculate: DAU/WAU ratio, top features used, sessions last 30 days

AMPLITUDE:
GET /2/users/search?user={email}
GET /2/events/segmentation -> event counts per user
Calculate: active days, core event frequency, retention score

MIXPANEL:
GET /api/2.0/engage -> get user profile by email
GET /api/2.0/events -> get events for user
Calculate: last active date, event counts, feature adoption

Unified output per customer:
{email, monthly_active_days, top_features: string[], sessions_per_week, retention_score, last_active_date}

TypeScript, handles missing/null data gracefully.`,
  },
  {
    id: 'Prompt 3',
    title: 'Customer Approval Flow (Resend + Next.js)',
    category: 'Workflow',
    accent: 'bg-[#ffe2c5]',
    body: `Node.js ile customer approval workflow yaz.
Trigger: POST /api/approvals/send with {customer_id, metrics_snapshot}

Step 1: Generate unique approval token (UUID, stored in Supabase with 7-day TTL)
approval_requests: {id, customer_id, token, metrics_snapshot jsonb, status: pending|approved|edited|expired, expires_at}

Step 2: Send branded approval email via Resend:
Subject: "[Your Company] wants to share your success story"
Body: personalized with customer name + metric previews
CTA: "Review and Approve Your Story" -> link to /approve/{token}

Step 3: Approval page (Next.js /approve/[token]):
Show each metric with edit button
Checkbox: "I approve these metrics being published"
Optional: "Add your own quote" textarea
Submit -> PATCH /api/approvals/{token}/complete

Step 4: On approval:
Update approval_requests.status = 'approved'
Store approved_metrics + customer_quote
Trigger Inngest job: generate_story

TypeScript, Resend SDK, Supabase.`,
  },
  {
    id: 'Prompt 4',
    title: 'AI Story Generator (Claude API)',
    category: 'AI generation',
    accent: 'bg-[#f3e8ff]',
    body: `Node.js ile Claude API story generation service yaz.
Input: {approval_id} -> fetch approved_metrics + customer_quote + company_info

Claude Sonnet API call:
System: "You are a B2B case study writer. Rules:
1. ONLY use metrics that are in the approved_metrics object. Never invent claims.
2. Write in Challenge-Solution-Results structure
3. Results section leads with the most impressive verified metric
4. Tone: professional but human. Not corporate-speak.
5. Do not use 'leverage', 'synergy', 'seamless', 'robust'
6. The [VERIFIED] tag after each metric will be replaced with the badge in the UI"

User: "Write a B2B case study for a company using {product_name}.
Approved metrics: {approved_metrics}
Customer quote (if provided): {customer_quote}
Industry: {industry}, Company size: {size}
Target length: 650-850 words."

Outputs:
1. case_study_html: full article in HTML
2. testimonial_quote: 2-3 sentence first-person quote
3. linkedin_post: 80-word post with metrics highlighted
4. stat_cards: array of {metric, value, context}

Save all to 'stories' table. TypeScript.`,
  },
  {
    id: 'Prompt 5',
    title: 'Embeddable Widget (Vanilla JS)',
    category: 'Distribution',
    accent: 'bg-[#eefec8]',
    body: `Vanilla JavaScript embeddable widget yaz.
Usage: <script src="https://cdn.provekit.io/widget.js" data-account="abc123" data-theme="light"></script>

Widget types (data-type attribute):
1. 'rotating-testimonials': carousel of approved quotes
2. 'story-cards': grid of case study preview cards
3. 'stat-bar': horizontal row of key metrics

Features:
- Lazy loads via IntersectionObserver (performance)
- No framework dependency - pure DOM manipulation
- Fetches from ProveKit CDN (cached, 15-min TTL)
- Responds to data-primary-color for brand colors
- Includes "Verified by ProveKit" badge with tooltip
- GDPR: no cookies, no tracking pixels

Shadow DOM for style isolation.
TypeScript, compiled to single ES5 bundle.`,
  },
  {
    id: 'Prompt 6',
    title: 'Story Library Dashboard (Next.js + shadcn/ui)',
    category: 'App shell',
    accent: 'bg-[#e6f3ff]',
    body: `Next.js 14 + shadcn/ui ile ProveKit story library dashboard yaz.

Pages:
1. /dashboard: KPI row (Total Stories, Pending Approvals, Stories This Month, Avg MRR Growth) + recent stories table + approval queue
2. /customers: list with metric snapshots + story status + "Generate Story" button
3. /stories: published library - filterable by industry, company size, metric type + story preview card with edit/share/download
4. /stories/[id]: full story editor - edit AI output, preview all formats, publish
5. /approvals: pending/approved/expired approval requests table
6. /embed: widget configuration + embed code generator + preview

Light mode: bg-gray-50, teal (#0D9488) primary accent.
Verified badge component: green check + 'Verified by ProveKit'
TypeScript, react-query, Tailwind.`,
  },
  {
    id: 'Prompt 7',
    title: 'Stripe Billing',
    category: 'Billing',
    accent: 'bg-[#ffe2c5]',
    body: `Next.js + Stripe ile ProveKit billing yaz.

Plans:
- starter: $49/mo, 5 stories/mo limit
- growth: $99/mo, unlimited
- scale: $199/mo, unlimited + CRM
- agency: $299/mo, unlimited + multi-workspace

/api/checkout: plan select -> Stripe Checkout
/api/webhook: subscription.created/updated -> update accounts.plan + story_limit
subscription.deleted -> downgrade (retain stories, disable new generation)
/api/portal: Stripe Customer Portal for self-service

Story overage (Starter plan):
- Track stories_generated_this_month per account
- On 5th story: show upgrade prompt before generation
- If agrees: charge $8 via Stripe payment_intent or move to Growth

Feature gates: check accounts.plan on POST /api/stories/generate
Agency workspace creation: only allowed on agency plan. TypeScript.`,
  },
  {
    id: 'Prompt 8',
    title: 'Supabase Database Schema',
    category: 'Database',
    accent: 'bg-[#f3e8ff]',
    body: `ProveKit icin Supabase PostgreSQL semasi yaz:

accounts: id, name, plan, story_limit_per_month, stories_this_month, stripe_ids jsonb, brand_settings jsonb (logo, colors, sender_name), created_at

stripe_connections: id, account_id, stripe_access_token encrypted, stripe_account_id, connected_at, last_synced

analytics_connections: id, account_id, provider (posthog|amplitude|mixpanel), api_key encrypted, project_id, last_synced

customers: id, account_id, stripe_customer_id, email, company_name, industry, company_size, contact_name, contact_email

customer_metrics: id, customer_id, account_id, stripe_metrics jsonb (mrr_initial, mrr_current, mrr_growth_pct, ltv), analytics_metrics jsonb (active_days, top_features, retention_score), extracted_at, valid_until

approval_requests: id, account_id, customer_id, token text UNIQUE, metrics_snapshot jsonb, status (pending|approved|edited|expired), customer_quote text, approved_at, expires_at

stories: id, account_id, customer_id, approval_id, title text, case_study_html text, testimonial_quote text, linkedin_post text, stat_cards jsonb, status (draft|published|archived), is_public bool, slug text UNIQUE, verified_at timestamptz, published_at, created_at

RLS: accounts see only their own data.
Index: account_id, customer_id, slug, status.`,
  },
];

const brandVoicePrinciples = [
  {
    icon: '🎯',
    title: 'Evidence-First',
    detail: "Never make claims we can't back up. Every statement references real data.",
    tone: 'bg-[#eefec8]',
  },
  {
    icon: '⚡',
    title: 'Direct',
    detail: 'Get to the outcome in the first sentence.',
    tone: 'bg-[#ffe2c5]',
  },
  {
    icon: '✅',
    title: 'Credible',
    detail: 'No superlatives without data. No hype.',
    tone: 'bg-[#e6f3ff]',
  },
  {
    icon: '💙',
    title: 'Empathetic',
    detail: "We understand the case study process is painful. We're solving it.",
    tone: 'bg-[#f3e8ff]',
  },
  {
    icon: '🔢',
    title: 'Specific',
    detail: "'23 case studies in one afternoon' beats 'dramatically accelerate your evidence program'.",
    tone: 'bg-[#edf9f2]',
  },
];

const languageGuideRows: TableRow[] = [
  { do: 'Verified from Stripe data', dont: 'Data-driven insights' },
  { do: '3 minutes to publish', dont: 'Streamline your evidence workflow' },
  { do: 'Your customer grew 127% MRR', dont: 'Significant revenue impact' },
  { do: '2-click customer approval', dont: 'Frictionless approval process' },
  { do: '5 case studies free, no credit card', dont: 'Start your free trial today' },
  { do: 'Your sales team needs this today', dont: 'Accelerate your GTM motion' },
];

const seoKeywordRows: TableRow[] = [
  { keyword: 'b2b case study template', volume: '2,400/mo', competition: 'Low', funnel: 'BOFU', type: 'Template download page' },
  { keyword: 'how to write a b2b case study', volume: '1,900/mo', competition: 'Low', funnel: 'MOFU', type: 'Long-form guide (2,500 words)' },
  { keyword: 'customer success story template', volume: '1,600/mo', competition: 'Low', funnel: 'BOFU', type: 'Free template + ProveKit CTA' },
  { keyword: 'case study software', volume: '1,200/mo', competition: 'Medium', funnel: 'BOFU', type: 'Comparison page vs Jasper etc.' },
  { keyword: 'testimonial automation', volume: '900/mo', competition: 'Low', funnel: 'BOFU', type: 'Landing page targeting this exact query' },
  { keyword: 'b2b testimonial examples', volume: '880/mo', competition: 'Low', funnel: 'MOFU', type: 'Examples page with Verified badge demo' },
  { keyword: 'case study examples saas', volume: '720/mo', competition: 'Low', funnel: 'MOFU', type: 'Gallery of ProveKit-generated stories' },
  { keyword: 'how to get customer testimonials', volume: '650/mo', competition: 'Low', funnel: 'MOFU', type: 'Guide + approval workflow explanation' },
  { keyword: 'customer evidence b2b', volume: '480/mo', competition: 'Low', funnel: 'BOFU', type: 'Category definition page' },
  { keyword: 'verified testimonial', volume: '320/mo', competition: 'Low', funnel: 'BOFU', type: 'Verified badge explainer' },
  { keyword: 'stripe case study integration', volume: '90/mo', competition: 'None', funnel: 'BOFU', type: 'Programmatic: Stripe integration page' },
  { keyword: 'posthog case study integration', volume: '60/mo', competition: 'None', funnel: 'BOFU', type: 'Programmatic: PostHog integration page' },
];

const seoArchitectureCards = [
  {
    title: 'Pillar Page',
    subtitle: 'The Definitive Guide to B2B Case Studies',
    description:
      "6,000-word comprehensive guide targeting broad-match 'b2b case study'. Links to all cluster content and converts via free template download -> email capture -> onboarding sequence.",
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'Cluster Content',
    subtitle: '12-15 supporting articles',
    description:
      "500-1,200 word articles targeting long-tail keywords like approval process, production timing, and testimonial vs case study. Every piece links back to the pillar page and carries a ProveKit CTA.",
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    title: 'Comparison Pages',
    subtitle: 'ProveKit vs [Competitor]',
    description:
      'Dedicated pages for Testimonial.to, UserEvidence, Jasper, and hiring a writer. High-intent BOFU content for buyers already evaluating solutions.',
    tone: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f3e8ff_100%)]',
  },
  {
    title: 'Programmatic SEO',
    subtitle: '[Tool] case study integration',
    description:
      'Template-based pages for Stripe, PostHog, HubSpot and every supported integration. Scales to 50+ pages without manual writing and captures zero-competition search demand.',
    tone: 'bg-[linear-gradient(135deg,#fff1d6_0%,#ffd089_100%)]',
  },
  {
    title: 'Story Library',
    subtitle: 'Verified customer stories',
    description:
      'Public story pages indexed by search engines. Each story compounds social proof and SEO by indexing company, industry, and metric-specific proof.',
    tone: 'bg-[linear-gradient(135deg,#f4fbf7_0%,#dcfae6_100%)]',
  },
  {
    title: 'ROI Calculator',
    subtitle: 'Case study cost calculator',
    description:
      "Interactive tool estimating manual case study cost vs ProveKit. High-shareability asset that targets 'case study ROI' and 'marketing efficiency' searches.",
    tone: 'bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)]',
  },
];

const seoCalendarRows: TableRow[] = [
  { period: 'Month 1-2', theme: 'Foundation', deliverables: 'Pillar page + 3 cluster articles + programmatic SEO setup (10 pages)' },
  { period: 'Month 3-4', theme: 'Authority', deliverables: '4 more cluster articles + 2 comparison pages + story library launch (public)' },
  { period: 'Month 5-6', theme: 'Amplification', deliverables: 'ROI calculator + 4 cluster articles + PR push (link building from SaaS press)' },
  { period: 'Month 7-8', theme: 'Integration', deliverables: 'Stripe App Marketplace content + HubSpot listing page optimized' },
  { period: 'Month 9-10', theme: 'Scale', deliverables: 'Programmatic SEO expansion to 50 pages + video content (YouTube/LinkedIn)' },
  { period: 'Month 11-12', theme: 'Compounding', deliverables: 'Refresh top-performing articles + link reclamation + user-generated stories indexed' },
];

const seoDistributionCards = [
  {
    channel: 'Indie Hackers',
    strategy: "Post a 'Show IH' thread when each major piece publishes. High-domain community links and founder-adjacent distribution.",
    accent: 'before:bg-[#f97316]',
  },
  {
    channel: 'Hacker News',
    strategy: "\"Ask HN: How long does it take your company to produce a case study?\" surfaces the pain behind ProveKit and attracts the exact audience feeling it.",
    accent: 'before:bg-[#101828]',
  },
  {
    channel: 'Product Hunt',
    strategy: 'Launch day should drive the biggest backlink spike. Submit to 5-10 relevant collections to compound discovery.',
    accent: 'before:bg-[#4361ee]',
  },
  {
    channel: 'Integration Partners',
    strategy: 'Ask Stripe, PostHog, and HubSpot to feature ProveKit inside their integration directories and marketplace content.',
    accent: 'before:bg-[#28b483]',
  },
  {
    channel: 'SaaS Newsletters',
    strategy: "Sponsor or contribute to TLDR, SaaS Weekly, and Lenny's Newsletter where the readership already buys growth tools.",
    accent: 'before:bg-[#7c3aed]',
  },
  {
    channel: 'Guest Posts + X',
    strategy: "Publish on high-authority SaaS blogs and convert wins into founder-style Twitter/X threads like 'How we generated 23 case studies in one afternoon.'",
    accent: 'before:bg-[#f59e0b]',
  },
];

const costModelStage1Rows: TableRow[] = [
  { service: 'Vercel', plan: 'Hobby', cost: '$0', notes: 'Preview deploys, serverless functions (free tier)' },
  { service: 'Supabase', plan: 'Free', cost: '$0', notes: '500 MB DB, 1 GB storage, 5 GB bandwidth' },
  { service: 'Resend', plan: 'Free tier', cost: '$0', notes: '3,000 emails/mo - sufficient for starting' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$10-30/mo', notes: '~1K story generation @ $0.01-0.03/story' },
  { service: 'Stripe', plan: '2.9% + 30¢', cost: 'Usage-based', notes: 'Costs occur only when revenue is generated' },
  { service: 'Inngest', plan: 'Free tier', cost: '$0', notes: '1M events/mo free' },
  { service: 'PostHog', plan: 'Free tier', cost: '$0', notes: '1M events/mo free, session recording disabled' },
  { service: 'Unified.to', plan: 'Free (3 conn)', cost: '$0', notes: 'Stripe + 2 analytics connectors free' },
  { service: 'Domain (.io)', plan: 'One-time', cost: '~$40/yr', notes: 'provekit.io or alternative' },
];

const costModelStage2Rows: TableRow[] = [
  { service: 'Vercel', plan: 'Pro', cost: '$20/mo', notes: 'Bandwidth included, unlimited preview deploys' },
  { service: 'Supabase', plan: 'Pro', cost: '$25/mo', notes: '8 GB DB, 250 GB bandwidth, daily backups' },
  { service: 'Resend', plan: 'Pro', cost: '$20/mo', notes: '50K emails/mo - sufficient for approval flows' },
  { service: 'Claude API', plan: 'Pay per use', cost: '~$50-150/mo', notes: '10K+ story generation, batch pricing enabled' },
  { service: 'Stripe', plan: '2.9% + 30¢', cost: '~$580/mo', notes: 'Based on 200 customers × $99 = $19,800 MRR' },
  { service: 'Inngest', plan: 'Pro', cost: '$25/mo', notes: 'Background jobs, retries, fan-out patterns' },
  { service: 'PostHog', plan: 'Pay per use', cost: '~$20/mo', notes: '~5M events/mo, session recording enabled' },
  { service: 'Unified.to', plan: 'Startup', cost: '$99/mo', notes: 'All CRM + analytics connectors unlocked' },
  { service: 'Cloudflare', plan: 'Free/Pro', cost: '$0-20/mo', notes: 'CDN + widget delivery + DNS management' },
];

const costModelStage3Rows: TableRow[] = [
  { service: 'Vercel', plan: 'Pro / Ent.', cost: '$20-400/mo', notes: 'Bandwidth overages + edge function execution' },
  { service: 'Supabase', plan: 'Pro + Add-ons', cost: '$25-200/mo', notes: 'Read replicas, PITR backup, compute boost' },
  { service: 'Resend', plan: 'Scale', cost: '$80/mo', notes: '200K+ emails/mo - transactional + sequences' },
  { service: 'Claude API', plan: 'Batch API', cost: '$200-500/mo', notes: 'Volume discount, async generation queue' },
  { service: 'Stripe', plan: '2.9% + 30¢', cost: '~$2,900/mo', notes: 'Based on 1,000 customers × $99 = $99,000 MRR' },
  { service: 'Inngest', plan: 'Enterprise', cost: '$150/mo', notes: 'High-volume background jobs' },
  { service: 'PostHog', plan: 'Scale', cost: '$150/mo', notes: '20M+ events, full session recording' },
  { service: 'Unified.to', plan: 'Growth', cost: '$299/mo', notes: 'Unlimited connectors, priority support' },
  { service: 'Cloudflare', plan: 'Business', cost: '$200/mo', notes: 'WAF + Bot protection + Advanced Analytics' },
];

const costRatioRows: TableRow[] = [
  { stage: '0 - 10 customers', infra: '$0 - 75/mo', mrr: '$0 - $990/mo', ratio: '< 10% (pre-revenue)' },
  { stage: '10 - 50 customers', infra: '$75 - 150/mo', mrr: '$990 - $4,950/mo', ratio: '~3-5%' },
  { stage: '50 - 200 customers', infra: '$150 - 280/mo', mrr: '$4,950 - $19,800/mo', ratio: '~1-2%' },
  { stage: '200 - 500 customers', infra: '$280 - 400/mo', mrr: '$19,800 - $49,500/mo', ratio: '< 1%' },
  { stage: '500+ customers', infra: '$400 - 800/mo', mrr: '$49,500+/mo', ratio: '< 1%' },
];

const criticalDecisionCards = [
  {
    title: 'Unified.to vs. Direct Integration',
    detail:
      'Unified.to costs $99-299/mo, while writing each connector yourself takes 2-3 weeks. It is worth it up to 100 customers; after that, build the 3 most used connectors (Stripe, PostHog, HubSpot) directly. Break-even is roughly 18 months.',
    accent: 'before:bg-[#4361ee]',
  },
  {
    title: 'Vercel vs. AWS',
    detail:
      'At 500+ customers, Vercel may become expensive. Prepare for AWS ECS + RDS migration, but delay it as long as possible because Vercel still wins on preview deployments, edge functions, and zero-config velocity. Re-evaluate once infra exceeds $1,000/mo.',
    accent: 'before:bg-[#f97316]',
  },
  {
    title: 'Claude API vs. Self-hosted LLM',
    detail:
      'Evaluate alternatives like Mistral or Llama 3.1 once Claude API approaches $500/mo. However, story quality matters more than marginal cost savings in B2B customer proof, so do not sacrifice output quality too early.',
    accent: 'before:bg-[#28b483]',
  },
];

const activationMilestoneRows: TableRow[] = [
  { milestone: 'M0', event: 'Signup (Account created)', timing: 'Day 0', benchmark: '100%' },
  { milestone: 'M1', event: 'Stripe Connected (At least one integration live)', timing: 'Day 0-1', benchmark: '72%' },
  { milestone: 'M2', event: 'First Customer Selected (User previews AI metric extraction)', timing: 'Day 1', benchmark: '58%' },
  { milestone: 'M3', event: 'Approval Email Sent (Customer receives approval request)', timing: 'Day 1-2', benchmark: '36%' },
  { milestone: 'M4', event: 'Customer Approves (First approval received)', timing: 'Day 2-4', benchmark: '29%' },
  { milestone: 'M5', event: 'First Story Published (Verified story live - AHA MOMENT)', timing: 'Day 3-5', benchmark: '27%' },
  { milestone: 'M6', event: 'Story Shared with Sales (User sends story link to sales team)', timing: 'Day 5-7', benchmark: '19%' },
  { milestone: 'M7', event: 'Second Story Generated (Repeat usage confirms retention)', timing: 'Day 7-14', benchmark: '16%' },
  { milestone: 'M8', event: 'Upgraded to Paid (Free limit hit, user converts)', timing: 'Day 14-30', benchmark: '8.4%' },
];

const onboardingDayCards = [
  {
    day: 'Day 0',
    title: 'Signup',
    accent: 'before:bg-[#4361ee]',
    steps: [
      "Trigger: Account created (not just email confirmed).",
      "Welcome Email: 'Your ProveKit account is ready - connect Stripe in 2 minutes'. One CTA. No feature tour.",
      "Empty State Dashboard: show a demo story library with a 'This is what your library will look like' banner.",
      "Onboarding Checklist: Connect Stripe / Select your first customer / Send approval email. Disappears after M5.",
    ],
  },
  {
    day: 'Day 1',
    title: 'No Stripe Connect',
    accent: 'before:bg-[#f59e0b]',
    steps: [
      'Trigger: User signed up but has not connected Stripe after 24 hours.',
      "Re-engagement Email: 'Your customers already gave you the data'. Show the math and one CTA: Connect Stripe.",
      "In-app Nudge: yellow banner 'You're 2 minutes away from your first verified story'. Dismissible, not aggressive.",
    ],
  },
  {
    day: 'Day 3',
    title: 'Stripe Connected, No Story Sent',
    accent: 'before:bg-[#28b483]',
    steps: [
      'Trigger: Stripe connected but no approval email sent after 48 hours.',
      "Metric Preview Email: 'We found 8 customers with strong story potential' with a real teaser metric.",
      "In-app Prompt: 'Story Opportunities' card ranks top 3 customers by metric strength and supports one-click start.",
    ],
  },
  {
    day: 'Day 7',
    title: 'First Story Published',
    accent: 'before:bg-[#7c3aed]',
    steps: [
      'Trigger: M5 reached and the story is live.',
      "Activation Celebration: brief confetti + CTAs to copy story link or embed on website.",
      "Sales Enablement Email: sends story link, embed code snippet, and suggested LinkedIn post.",
      "Day 7 Check-in Email: asks how the customer responded and opens a founder-reply loop.",
    ],
  },
  {
    day: 'Day 14',
    title: 'Approaching Free Limit',
    accent: 'before:bg-[#f97316]',
    steps: [
      'Trigger: 4th story generated (1 remaining on free plan).',
      "Upgrade Prompt In-app: 'You have 1 story left on your free plan. Upgrade to Growth for unlimited stories.'",
      'Show ROI: manual case study cost ($1,600) vs Growth plan ($99/mo).',
      "Upgrade Email: 'You have 1 free story left' plus social proof and money-back guarantee.",
    ],
  },
];

const ahaPrinciples = [
  {
    title: 'Compress Time to Value',
    detail:
      'Every extra hour between signup and first published story increases churn risk. Strip onboarding back to: Connect Stripe -> Select Customer -> Send Approval.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'Make the Approval Wait Productive',
    detail:
      'The 24-48 hour approval gap is dangerous if nothing happens. Fill it with widget setup, LinkedIn copy generation, and sales enablement tasks.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
  {
    title: 'Use Real Data in Every Touchpoint',
    detail:
      "Don't say 'your customers may have grown'. Say 'Acme grew 94% MRR'. Use actual Stripe data in emails, nudges, and prompts.",
    tone: 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f3e8ff_100%)]',
  },
  {
    title: 'Celebrate the Customer, not ProveKit',
    detail:
      "The aha is not that ProveKit generated copy. The aha is that the customer's result is live and usable by sales.",
    tone: 'bg-[linear-gradient(135deg,#f4fbf7_0%,#dcfae6_100%)]',
  },
];

const legalOverviewCards = [
  {
    title: 'Agreement 1',
    subtitle: 'Customer Data Processing Agreement (DPA)',
    detail: 'Executed between ProveKit and its SaaS / Enterprise clients to govern processing, storage, approval, and deletion of customer-linked data.',
    tone: 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]',
  },
  {
    title: 'Agreement 2',
    subtitle: 'Story Publication Consent Form',
    detail: 'Sent by the client to their own customer inside the approval flow, then stored with timestamp, IP, and user agent for auditability.',
    tone: 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]',
  },
];

const dpaSectionCards = [
  {
    number: '1',
    title: 'Parties and Scope',
    body:
      'This Data Processing Agreement is entered into between ProveKit as the Data Processor and the client as the Data Controller. It governs rights and obligations for all personal data processed through the ProveKit platform.',
  },
  {
    number: '2',
    title: 'Categories of Processed Data',
    body:
      'Via Stripe: customer IDs, MRR values, payment history, plan changes. Full credit card numbers are never accessed. Via analytics: feature adoption, user activity, retention metrics. Via CRM (optional): company name, industry, and contact information.',
  },
  {
    number: '3',
    title: 'Data Security and Storage',
    body:
      'API keys and tokens are encrypted with Supabase Vault. Account-level Row Level Security prevents cross-account access. Data can be processed in the EU or US depending on preference. Generated stories include only explicitly approved metrics.',
  },
  {
    number: '4',
    title: 'Client Approval Process',
    body:
      'Before publication, all content is sent to the client for review. The client can review, edit, approve, or reject metrics. Approval is recorded with checkbox, timestamp, and IP. Stories can be removed from publication at any time.',
  },
  {
    number: '5',
    title: 'Data Usage Rights and Restrictions',
    body:
      'The Data Controller allows ProveKit to read integrated data sources, normalize metrics for storytelling, and store or publish approved content. ProveKit cannot share data with third parties, use it for advertising or model training, or sell aggregated data.',
  },
  {
    number: '6',
    title: 'Deletion and Portability',
    body:
      'The controller may request deletion of a single story or all account data within 30 days, export approved stories in JSON, and receive permanent deletion of all data within 90 days after account closure.',
  },
  {
    number: '7',
    title: 'Breach Notification',
    body:
      'ProveKit will notify the Data Controller in writing within 72 hours of becoming aware of a breach, including breach nature, affected data categories, estimated affected individuals, and mitigation measures.',
  },
  {
    number: '8',
    title: 'Governing Law',
    body:
      'GDPR applies to EU clients, CCPA applies to California-based clients, and KVKK applies to clients based in Türkiye.',
  },
];

const dpaSignatureRows: TableRow[] = [
  {
    party: 'DATA PROCESSOR (ProveKit)',
    name: 'ProveKit, Inc.',
    signature: '_______________________',
    date: '_______________________',
  },
  {
    party: 'DATA CONTROLLER (Client)',
    name: '_______________________',
    signature: '_______________________',
    date: '_______________________',
  },
];

const consentFieldRows: TableRow[] = [
  { field: 'FORM HEADER', content: '[COMPANY NAME] wants to share your success story' },
  {
    field: 'INTRODUCTION',
    content:
      "Hello [CUSTOMER NAME], we at [COMPANY NAME] would like to share the results you've achieved while using [PRODUCT NAME] with our potential customers. Please review, approve, or edit the metrics below.",
  },
  {
    field: 'EXAMPLE METRICS',
    content:
      '- MRR Growth: +127% (Jan-Sept 2024)\n- Reporting Time: Reduced by 80%\n- Onboarding Time: Dropped from 3 days to 4 hours\nSource: Automatically retrieved from Stripe and PostHog data.',
  },
  {
    field: 'CONSENT TEXT',
    content:
      '[ ] I confirm that the metrics above are accurate and that [COMPANY NAME] may use this information in marketing materials and on social media.\n[ ] I understand that this information is processed via the ProveKit platform.\n[ ] I acknowledge and agree that I can withdraw this consent at any time.',
  },
  {
    field: 'LEGAL NOTE',
    content:
      'This consent was digitally signed on [DATE] via [IP ADDRESS] and is securely stored in ProveKit systems. To withdraw consent: privacy@[domain].com',
  },
];

const abFrameworkRows: TableRow[] = [
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

const abSchedule = [
  { timeline: 'Weeks 1-2', test: 'Test 04 — Onboarding: Stripe trigger timing', reason: 'Critical signup-to-activation metric' },
  { timeline: 'Weeks 3-4', test: 'Test 02 — Landing: Hero headline', reason: 'Highest traffic, fastest results' },
  { timeline: 'Weeks 5-6', test: 'Test 01 — Landing: CTA copy', reason: 'Optimization based on headline winner' },
  { timeline: 'Weeks 7-8', test: 'Test 06 — Email: Approval subject line', reason: 'Approval rate directly impacts revenue' },
  { timeline: 'Weeks 9-10', test: 'Test 10 — In-app: Upgrade prompt timing', reason: 'Critical for the first conversion wave' },
  { timeline: 'Weeks 11-12', test: 'Test 08 — Pricing: Plan anchor order', reason: 'Increase Growth plan selection rate' },
];

const abScenarioCards = [
  {
    id: 'Test 01',
    title: 'Landing Page — CTA Copy',
    hypothesis: 'Outcome-oriented CTAs generate higher signups than action-oriented CTAs.',
    control: 'Generate Your First Case Study Free ->',
    test: 'Connect Stripe. Get a Verified Story in 3 min ->',
    metric: 'Free signup rate',
    impact: '+15-25%',
  },
  {
    id: 'Test 02',
    title: 'Landing Page — Hero Headline',
    hypothesis: 'A headline containing concrete numbers converts better than an abstract benefit headline.',
    control: "Your customers' results. Verified. Published. Closing deals.",
    test: "Your customer grew 127% with your product. They don't know they're a case study yet.",
    metric: 'Time on page + CTA click rate',
    impact: '+20-35%',
  },
  {
    id: 'Test 03',
    title: 'Landing Page — Social Proof Format',
    hypothesis: 'A verified stat badge appears more trustworthy than a text testimonial.',
    control: 'Text testimonial cards (quote format)',
    test: 'Verified badge + card format with metrics emphasized',
    metric: 'Scroll depth + CTA conversion',
    impact: '+10-20%',
  },
  {
    id: 'Test 04',
    title: 'Onboarding — Stripe Trigger',
    hypothesis: 'Making the Stripe connection the first step increases signup-to-activation rate.',
    control: "Signup -> Dashboard -> Show 'Connect Stripe' as the next step",
    test: 'Signup -> Immediate Stripe connect screen (with skip option)',
    metric: 'Stripe connection rate (Day 1)',
    impact: '+20-40%',
  },
  {
    id: 'Test 05',
    title: 'Onboarding — Empty State',
    hypothesis: 'Showing demo data facilitates faster activation than an empty dashboard.',
    control: "Empty dashboard + 'Connect Stripe to get started' message",
    test: "Demo story library appears populated + 'This is how your library will look' banner",
    metric: 'Time to first real story generated',
    impact: '-30% faster',
  },
  {
    id: 'Test 06',
    title: 'Approval Email — Subject Line',
    hypothesis: 'A subject line highlighting metrics generates a higher open rate than a generic one.',
    control: '[Company] would love to feature your success story',
    test: 'Your +127% MRR growth story — 2-click approval needed',
    metric: 'Email open rate + approval rate',
    impact: '+25-40%',
  },
  {
    id: 'Test 07',
    title: 'Approval Email — Sender Name',
    hypothesis: 'Emails sent from a familiar name are opened more frequently.',
    control: 'ProveKit',
    test: '[User Name] via ProveKit',
    metric: 'Open rate + approve within 24h',
    impact: '+30-50%',
  },
  {
    id: 'Test 08',
    title: 'Pricing Page — Plan Anchor',
    hypothesis: 'Presenting the Agency plan first increases the perceived value of the Growth plan.',
    control: 'Starter -> Growth -> Scale -> Agency',
    test: 'Agency -> Scale -> Growth -> Starter',
    metric: 'Growth plan selection rate',
    impact: '+10-20%',
  },
  {
    id: 'Test 09',
    title: 'Pricing Page — Free Tier Framing',
    hypothesis: "A '5 stories free' frame creates stronger intent than a generic 'Free tier' frame.",
    control: "Free tier: 'Start Free — No credit card required'",
    test: "Outcome: '5 Verified Stories Free — Connect Stripe in 2 min'",
    metric: 'Free signup -> Stripe connect rate',
    impact: '+15-25%',
  },
  {
    id: 'Test 10',
    title: 'In-App — Upgrade Prompt Timing',
    hypothesis: 'Showing a prompt at the 4th story is more effective than showing it at the 5th story.',
    control: "At the 5th story: 'You've reached your free limit. Upgrade to continue.'",
    test: "At the 4th story: 'You have 1 story left. Upgrade now for unlimited.'",
    metric: 'Free -> paid conversion rate',
    impact: '+20-35%',
  },
  {
    id: 'Test 11',
    title: 'Retention — Week 2 Email',
    hypothesis: 'A specific-result reminder retains better than a generic nurture email.',
    control: "Generic: 'Don't forget — you have more customer stories to tell'",
    test: "Specific: 'Your [Company X] story was viewed 12 times this week by your sales team'",
    metric: 'Week 4 login rate + story generation rate',
    impact: '+25-40%',
  },
  {
    id: 'Test 12',
    title: 'Embeddable Widget — Display Format',
    hypothesis: 'A widget with a verified badge and highlighted metric generates more clicks than a generic testimonial.',
    control: 'Rotating customer quotes (text only)',
    test: 'Verified card + headline metric (+127% MRR) + company name',
    metric: 'Widget click-through rate',
    impact: '+40-60%',
  },
];

const funnelContent: Record<
  string,
  { title: string; steps: { label: string; count: string; pct: string; color: string }[] }[]
> = {
  s08: [
    {
      title: 'Funnel 1: PLG / Inbound (Month 6)',
      steps: [
        { label: 'Website Visitors', count: '8,000', pct: '100%', color: '#fff4ea' },
        { label: 'Free Signups', count: '640', pct: '72%', color: '#ffe2c5' },
        { label: 'Connected Stripe', count: '384', pct: '58%', color: '#f5f0ff' },
        { label: 'Generated First Story', count: '256', pct: '42%', color: '#e9e2ff' },
        { label: 'Sent Customer Approval', count: '180', pct: '28%', color: '#eef8ff' },
        { label: 'Upgraded to Paid', count: '62', pct: '16%', color: '#ecfbf4' },
      ],
    },
    {
      title: 'Funnel 2: Agency Channel',
      steps: [
        { label: 'Agency Outreach / Demo', count: '60', pct: '100%', color: '#fff4ea' },
        { label: 'Demo Attended', count: '45', pct: '82%', color: '#ffe2c5' },
        { label: 'Trial Started', count: '32', pct: '64%', color: '#f5f0ff' },
        { label: 'First Story Generated', count: '26', pct: '48%', color: '#e9e2ff' },
        { label: 'Paid (Agency Plan)', count: '18', pct: '32%', color: '#eef8ff' },
        { label: 'Added 3+ Workspaces', count: '12', pct: '20%', color: '#ecfbf4' },
      ],
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[920px]">
      {eyebrow ? <div className="text-[18px] font-medium text-[#28b483]">{eyebrow}</div> : null}
      {description ? <p className="mt-3 text-[18px] leading-8 text-[#475467]">{description}</p> : null}
      <h2 className={`${description || eyebrow ? 'mt-6' : ''} text-[34px] font-semibold tracking-[-0.05em] text-[#101828]`}>
        {title}
      </h2>
    </div>
  );
}

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

function FunnelVisual({
  title,
  steps,
}: {
  title: string;
  steps: { label: string; count: string; pct: string; color: string }[];
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
      <div className="text-[20px] font-semibold tracking-[-0.04em] text-[#101828]">{title}</div>
      <div className="mt-5 flex flex-col gap-3">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="rounded-[16px] px-4 py-4"
            style={{ width: `${100 - index * 10}%`, background: step.color }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[15px] font-medium text-[#101828]">{step.label}</span>
              <span className="font-mono text-[13px] text-[#667085]">{step.count}</span>
            </div>
            <div className="mt-1 text-[12px] font-medium text-[#667085]">{step.pct} of previous stage</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OpportunityBriefSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-4">
        {opportunityStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[48px] font-semibold tracking-[-0.06em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
            <div className="mt-2 text-[14px] leading-7 text-[#475467]">{stat.note}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
          <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Market Signals</div>
            <p className="mt-4 text-[15px] leading-8 text-[#475467]">
              The Case Study Production Crisis. The gap between having happy customers and having their stories published
              is enormous. A B2B SaaS company with 200 customers might have 5 published case studies. The other 195
              success stories are locked in Slack messages, Zoom calls, and customer success notes. The production barrier
              is not a shortage of willing customers, it&apos;s the cost of production. The manual process requires a
              customer success call, a writer, internal review, customer approval rounds, a designer, and website
              publishing. That&apos;s 20-30 hours of internal time and 3-4 weeks elapsed. ProveKit compresses this to 3
              minutes by replacing steps 1-4 with live data integration and a two-click approval form.
            </p>
            <div className="mt-5 grid gap-3">
              {marketSignals.map((item, index) => (
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

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">The Production Gap</div>
          <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-5">
              <div className="rounded-[22px] bg-[#fff4ea] p-5">
                <div className="flex items-center justify-between gap-4 text-[14px] font-medium text-[#101828]">
                  <span>Manual process</span>
                  <span className="text-[#f97316]">20-30 hrs · 3-4 weeks</span>
                </div>
                <div className="mt-3 h-5 rounded-full bg-[#ff9966] px-3 text-[11px] font-semibold leading-5 text-white">
                  $1,600-$2,400 per story
                </div>
              </div>
              <div className="rounded-[22px] bg-[#ecfbf4] p-5">
                <div className="flex items-center justify-between gap-4 text-[14px] font-medium text-[#101828]">
                  <span>ProveKit</span>
                  <span className="text-[#12b76a]">~20 minutes</span>
                </div>
                <div className="mt-3 h-5 w-[18%] rounded-full bg-[#12b76a]" />
              </div>
              <div className="rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
                B2B SaaS teams may have 200 happy customers and only 5 published stories. The other 195 wins are still trapped
                in Slack threads, CS notes, and call recordings.
              </div>
            </div>

            <div className="rounded-[24px] bg-[#f8fafc] p-6">
              <div className="text-[18px] font-semibold tracking-[-0.04em] text-[#101828]">Manual Steps ProveKit Replaces</div>
              <div className="mt-4 space-y-3">
                {[
                  ['Customer success call', 'Data integration'],
                  ['Writer draft', 'Claude story generation'],
                  ['Internal marketing review', 'AI metric extraction'],
                  ['Customer approval (2-3 rounds)', '2-click approval'],
                  ['Designer formatting', 'PDF auto-gen'],
                  ['Website publish', 'One-click publish'],
                ].map(([oldStep, newStep]) => (
                  <div key={oldStep} className="rounded-[18px] border border-[#e6eaf2] bg-white px-4 py-4">
                    <div className="text-[13px] uppercase tracking-[0.08em] text-[#98a2b3]">Before</div>
                    <div className="mt-1 text-[15px] text-[#667085] line-through">{oldStep}</div>
                    <div className="mt-3 text-[13px] uppercase tracking-[0.08em] text-[#98a2b3]">Now</div>
                    <div className="mt-1 text-[16px] font-medium text-[#101828]">{newStep}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSpecSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[24px] border border-[#d7f0e2] bg-[#f4fbf7] px-6 py-5 text-[15px] leading-7 text-[#475467]">
        <strong className="text-[#101828]">One-sentence value prop:</strong> Connect Stripe and your analytics, let ProveKit
        read the real customer metrics, get two-click approval, and publish a verified case study in minutes.
      </div>

      <NativeTable
        columns={[
          { key: 'priority', label: 'Priority', className: 'w-[12%]' },
          { key: 'feature', label: 'Feature', className: 'w-[28%]' },
          { key: 'description', label: 'Description', className: 'w-[60%]' },
        ]}
        rows={productSpecRows}
      />

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">End-to-End Story Generation Flow</div>
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {storyFlow.map((item) => (
            <div key={item.step} className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5">
              <div className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${item.tone}`}>
                Step {item.step}
              </div>
              <div className="mt-4 text-[24px] font-semibold tracking-[-0.05em] text-[#101828]">{item.title}</div>
              <div className="mt-1 text-[15px] font-medium text-[#4361ee]">{item.subtitle}</div>
              <div className="mt-4 text-[15px] leading-7 text-[#667085]">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetMarketsSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-3">
        {targetMarketCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="text-[24px] font-semibold tracking-[-0.05em] text-[#101828]">{card.title}</div>
            <div className="mt-3 text-[32px] font-semibold tracking-[-0.06em] text-[#101828]">{card.price}</div>
            <p className="mt-3 text-[15px] leading-7 text-[#475467]">{card.desc}</p>
            <ul className="mt-5 space-y-3 border-t border-white/60 pt-5 text-[14px] leading-7 text-[#344054]">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5">
                  <span className="size-2.5 rounded-full bg-[#4361ee]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Geographic priority matrix</div>
        <NativeTable
          columns={[
            { key: 'region', label: 'Region', className: 'w-[22%]' },
            { key: 'density', label: 'SaaS Density', className: 'w-[14%]' },
            { key: 'stripe', label: 'Stripe Adoption', className: 'w-[18%]' },
            { key: 'culture', label: 'Case Study Culture', className: 'w-[18%]' },
            { key: 'speed', label: 'Decision Speed', className: 'w-[14%]' },
            { key: 'priority', label: 'Priority', className: 'w-[14%]' },
          ]}
          rows={geographicPriorityRows}
        />
      </div>

        <section className="space-y-6">
          <div>
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Buyer Persona Profiles</div>
            <p className="mt-2 max-w-[760px] text-[15px] leading-7 text-[#667085]">
              The core buyers sit closest to the proof bottleneck: marketing leaders, PMMs, and founders who feel the
              pain when sales asks for more usable customer evidence.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
          {buyerPersonas.map((persona, index) => (
            <div
              key={persona.name}
              className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${
                index === 0
                  ? 'bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)]'
                  : index === 1
                    ? 'bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ec_100%)]'
                    : 'bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf9_100%)]'
              }`}
            >
              <div
                className={`flex size-12 items-center justify-center rounded-[14px] text-[22px] ${
                  index === 0 ? 'bg-[#eef4ff]' : index === 1 ? 'bg-[#fff1e8]' : 'bg-[#edf9f2]'
                }`}
              >
                {persona.icon}
              </div>
              <div className="mt-5 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{persona.name}</div>
              <div className="mt-2 text-[14px] font-medium text-[#4361ee]">{persona.role}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#667085]">{persona.detail}</p>
              <div
                className={`mt-5 rounded-[18px] border px-4 py-4 text-[14px] leading-7 ${
                  index === 0
                    ? 'border-[#dce7ff] bg-[#f6f9ff] text-[#34508c]'
                    : index === 1
                      ? 'border-[#ffe3cf] bg-[#fff7f0] text-[#8a4b24]'
                      : 'border-[#d9f0e2] bg-[#f4fbf7] text-[#23614b]'
                }`}
              >
                {persona.tag}
              </div>
            </div>
          ))}
          </div>
        </section>
      </section>
  );
}

function TechStackSection() {
  return (
    <section className="mt-10 space-y-8">
      <NativeTable columns={techStackColumns} rows={techStackRows} />

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Build Timeline - 6 Weeks to Beta</div>
        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {buildTimeline.map((item) => (
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

function scoreTone(value: string) {
  const numeric = Number.parseInt(value, 10);
  if (numeric >= 8) {
    return 'bg-[#ecfbf4] text-[#067647]';
  }
  if (numeric >= 5) {
    return 'bg-[#fff4ea] text-[#b54708]';
  }
  return 'bg-[#fff1f3] text-[#c01048]';
}

function CompetitorMapSection() {
  return (
    <section className="mt-10 space-y-8">
      <NativeTable columns={competitorMapColumns} rows={competitorMapRows} />

      <div className="rounded-[28px] border border-[#d7f0e9] bg-[linear-gradient(135deg,#f2fffb_0%,#eff6ff_100%)] px-6 py-5 text-[15px] leading-7 text-[#475467] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <span className="font-semibold text-[#0f766e]">ProveKit&apos;s moat:</span> Live data verification. Every other
        tool either asks customers what they experienced or relies on generic claims. ProveKit reads the same Stripe
        and analytics data the story references, then turns it into buyer-trusted proof.
      </div>

      <div className="rounded-[32px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-[#f5f7fb] px-3 py-1 text-[12px] font-medium text-[#667085]">
              Vibe Code Teknik Prompt
            </div>
            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">
              Automation vs trust strategy matrix
            </h3>
            <p className="mt-2 max-w-[760px] text-[15px] leading-7 text-[#475467]">
              A direct visual of the competitive set: most tools sit on either speed or trust, while ProveKit owns the
              top-right winning zone where automation and verified proof meet.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[13px] text-[#667085] sm:grid-cols-4">
            {['Live Data', 'Verified', 'Quality', 'SMB Fit'].map((label) => (
              <div key={label} className="rounded-[16px] border border-[#edf1f7] bg-[#fcfdff] px-3 py-3">
                <div className="font-medium text-[#101828]">{label}</div>
                <div className="mt-1 text-[#667085]">Scored in table above</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-[#edf1f7] bg-[#fbfcfe] p-5 md:p-8">
          <div className="relative h-[560px] overflow-hidden rounded-[24px] border border-[#e6eaf2] bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:56px_56px]" />
            <div className="absolute right-0 top-0 h-[48%] w-[48%] rounded-bl-[40px] bg-[radial-gradient(circle_at_top_right,rgba(67,97,238,0.16)_0%,rgba(72,207,173,0.14)_35%,rgba(255,255,255,0)_75%)]" />
            <div className="absolute right-8 top-6 rounded-full bg-[linear-gradient(135deg,#eff6ff_0%,#ecfbf4_100%)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4361ee]">
              Winning zone
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] font-medium text-[#667085]">
              Automation &amp; Speed
            </div>
            <div className="absolute bottom-9 left-6 text-[12px] text-[#98a2b3]">Manual / Slow</div>
            <div className="absolute bottom-9 right-6 text-[12px] text-[#98a2b3]">Instant / AI-Driven</div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[13px] font-medium text-[#667085]">
              Data Verification &amp; Trust
            </div>
            <div className="absolute left-10 bottom-10 text-[12px] text-[#98a2b3]">Subjective Claims</div>
            <div className="absolute left-10 top-8 text-[12px] text-[#98a2b3]">API-Verified Live Data</div>

            <div className="absolute inset-x-10 bottom-12 top-10">
              {competitorMatrixPoints.map((point) => (
                <div
                  key={point.short}
                  className="absolute"
                  style={{
                    left: `${point.x}%`,
                    bottom: `${point.y}%`,
                    transform: 'translate(-50%, 50%)',
                  }}
                >
                  {point.provekit ? (
                    <div className="relative">
                      <div className="absolute inset-0 scale-[1.7] rounded-full bg-[radial-gradient(circle,rgba(67,97,238,0.32)_0%,rgba(72,207,173,0.12)_45%,rgba(255,255,255,0)_70%)] animate-pulse" />
                      <div className="relative flex size-6 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#4361ee_0%,#48cfad_100%)] shadow-[0_16px_35px_rgba(67,97,238,0.35)]" />
                      <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-[#48cfad] ring-4 ring-white" />
                      <div className="mt-4 w-[220px] rounded-[20px] border border-[#dbe7ff] bg-[linear-gradient(135deg,#eff4ff_0%,#f4fffb_100%)] p-4 shadow-[0_12px_24px_rgba(67,97,238,0.12)]">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4361ee]">
                          {point.short}
                        </div>
                        <div className="mt-1 text-[16px] font-semibold leading-6 text-[#101828]">{point.name}</div>
                        <div className="mt-1 text-[13px] text-[#667085]">{point.subtitle}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="size-4 rounded-full border-2 border-white bg-[#98a2b3]/70 shadow-[0_6px_14px_rgba(15,23,42,0.12)]" />
                      <div className="mt-3 w-[170px] rounded-[16px] border border-[#edf1f7] bg-white/92 px-3 py-3 text-center shadow-[0_8px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                        <div className="text-[12px] font-semibold text-[#344054]">{point.short}</div>
                        <div className="mt-1 text-[12px] leading-5 text-[#667085]">{point.name}</div>
                        <div className="mt-1 text-[11px] text-[#98a2b3]">{point.subtitle}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { label: 'Manual / Slow', text: 'Agencies and bespoke workflows still own quality, but time-to-proof is broken.' },
            { label: 'Fast but unverified', text: 'AI copy tools ship quickly yet lack evidence buyers can actually trust.' },
            { label: 'Enterprise trust layer', text: 'Legacy reference platforms prove data slowly, expensively, and mostly for large teams.' },
            { label: 'ProveKit position', text: 'Instant generation plus API-verified metrics creates a distinctly stronger strategic wedge.' },
          ].map((item, index) => (
            <div key={item.label} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] px-5 py-4">
              <div className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                index === 3 ? 'bg-[#eef4ff] text-[#4361ee]' : 'bg-[#f5f7fb] text-[#667085]'
              }`}>
                {item.label}
              </div>
              <p className="mt-3 text-[14px] leading-6 text-[#475467]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoiCalculationSection() {
  return (
    <section className="rounded-[36px] bg-[#f8fafc] p-3">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-[28px] bg-white p-7 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="inline-flex items-center gap-2 rounded-[9px] bg-[#eef7ff] px-2.5 py-1.5 text-[12px] font-medium text-[#475467]">
            <span className="size-2 rounded-full bg-[#667085]" />
            ROI calculation
          </div>
          <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">How fast the model pays back</h3>
          <p className="mt-2 text-[15px] leading-7 text-[#667085]">
            One manual case study usually costs $1,600-$2,400 in team time. Growth pays back the moment a team ships even
            one or two verified stories a month.
          </p>
          <div className="mt-8 border-b border-[#e6eaf2] pb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#98a2b3]">Your monthly story need</div>
            <div className="mt-4 h-2 w-full rounded-full bg-[#e9eef8]">
              <div className="h-2 w-[62%] rounded-full bg-[#4361ee]" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[13px] text-[#98a2b3]">
              <span>0</span>
              <span>12 stories</span>
              <span>20 stories</span>
            </div>
          </div>
          <div className="mt-7">
            <div className="text-[16px] font-medium text-[#101828]">What you gain</div>
            <ul className="mt-4 space-y-3 text-[15px] text-[#475467]">
              <li className="flex items-center gap-2.5">
                <span className="size-3 rounded-full bg-[#1fc16b]" />
                8-10x more customer stories than a manual process
              </li>
              <li className="flex items-center gap-2.5">
                <span className="size-3 rounded-full bg-[#1fc16b]" />
                24-hour approval turnaround instead of multi-week coordination
              </li>
              <li className="flex items-center gap-2.5">
                <span className="size-3 rounded-full bg-[#1fc16b]" />
                Verified proof assets for site, sales, PDF, and social in one pass
              </li>
            </ul>
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-6 p-5.5 lg:gap-5 xl:gap-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] font-medium text-[#101828]">Growth plan snapshot</h5>
            <p className="text-[14px] font-medium leading-7 text-[#667085]">
              The blueprint assumes Growth becomes the primary self-serve tier because it maps best to PMM and demand gen teams.
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-[#101828]">
            <span className="text-[44px] font-semibold tracking-[-0.05em]">$99</span>
            <span className="text-[15px] text-[#667085]">/mo</span>
          </div>
          <ul className="border-t border-[#e6eaf2] pt-6 text-[15px] text-[#475467]">
            {[
              'Unlimited stories',
              'All integrations',
              'All formats',
              'Full widget',
              'Priority support',
              'Fastest path to repeatable social proof',
            ].map((item) => (
              <li key={item} className="mb-3 flex items-center gap-2.5 last:mb-0">
                <span className="size-3 rounded-full bg-[#335cff]" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full rounded-[12px] bg-[#4361ee] px-5 py-3 text-[15px] font-medium text-white">
            Start with Growth
          </button>
        </div>
      </div>
    </section>
  );
}

function RevenueModelSection() {
  return (
    <section className="mt-10 space-y-12">
      <RoiCalculationSection />

      <section>
        <div className="inline-flex items-center rounded-[9px] bg-[#f6f8fb] px-2.5 py-1.5 text-[13px] text-[#667085]">
          Flexible plans for every stage
        </div>
        <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.05em] text-[#101828]">Smart pricing for verified story production</h3>
        <p className="mt-2 max-w-[700px] text-[16px] leading-7 text-[#667085]">
          Same blueprint pricing, rebuilt in the cleaner pricing card system we use across the product.
        </p>
        <div className="mt-8 grid gap-4 xl:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.emphasized
                  ? 'rounded-[28px] bg-[#f8fafc] p-6'
                  : 'rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]'
              }
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-[16px] font-medium text-[#101828]">{tier.name}</h5>
                <p className="text-[14px] leading-7 text-[#667085]">{tier.desc}</p>
              </div>
              <div className="mt-6 flex items-end gap-2.5 text-[#101828]">
                <span className="text-[38px] font-semibold tracking-[-0.05em]">{tier.price}</span>
                <span className="text-[15px] text-[#667085]">{tier.suffix}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-4 border-t border-[#e6eaf2] pt-5 text-[15px] text-[#475467]">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className={`size-3 rounded-full ${tier.emphasized ? 'bg-[#4361ee]' : 'bg-[#335cff]'}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className={
                  tier.emphasized
                    ? 'mt-6 w-full rounded-[12px] bg-[#4361ee] px-5 py-3 text-[15px] font-medium text-white'
                    : 'mt-6 w-full rounded-[12px] border border-[#d0d5dd] bg-white px-5 py-3 text-[15px] font-medium text-[#101828]'
                }
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">12-Month MRR Projection</div>
          <NativeTable columns={projectionColumns} rows={projectionRows} />
        </div>
        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Additional Revenue Streams</div>
          <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="space-y-4">
              {expansionRows.map((item) => (
                <div key={item.stream} className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
                  <div className="text-[15px] font-medium text-[#101828]">{item.stream}</div>
                  <div className="mt-1 text-[14px] leading-7 text-[#667085]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
              <strong className="text-[#101828]">Agency expansion math:</strong> 10 client workspaces turn the Agency plan into
              roughly $549/mo with white-label seat expansion layered on top.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function LaunchChecklistSection() {
  return (
    <section className="mt-10 space-y-5">
      {launchChecklistGroups.map((group, groupIndex) => (
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
                key={item}
                className="flex cursor-pointer items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 transition-colors hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-[#cfd6e4] accent-[#12b76a]"
                  defaultChecked={index < (groupIndex === 1 ? 2 : 3)}
                />
                <span className="text-[15px] leading-7 text-[#475467]">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function WaitlistEmailSequenceSection() {
  return (
    <section className="mt-10 space-y-5">
      {waitlistEmails.map((email, index) => (
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
                  <div className="mt-1 text-[14px] text-[#101828]">founder@provekit.io</div>
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

function LandingCopyAlternativesSection() {
  return (
    <section className="mt-10 space-y-8">
      {landingCopyAlternatives.map((group, groupIndex) => (
        <div key={group.section} className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">{group.theme}</div>
              <div className="mt-2 text-[28px] font-semibold tracking-[-0.05em] text-[#101828]">{group.section}</div>
            </div>
            <div className="rounded-full bg-[#f6f8fb] px-4 py-2 text-[13px] font-medium text-[#667085]">
              3 alternatives
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {group.options.map((option, optionIndex) => (
              <div
                key={option.title}
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
                  <div className="mt-4 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{option.title}</div>
                  <div className="mt-2 text-[14px] leading-7 text-[#475467]">{option.audience}</div>
                </div>

                <div className="p-6">
                  <div className="rounded-[20px] bg-[#fcfdff] p-5">
                    <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Landing section preview</div>
                    <div className="mt-3 text-[32px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#101828]">
                      {groupIndex === 0
                        ? 'Verified customer proof, generated in minutes'
                        : groupIndex === 1
                          ? 'The cost of waiting is higher than the cost of proof'
                          : groupIndex === 2
                            ? 'From raw metrics to publish-ready proof'
                            : groupIndex === 3
                              ? 'The badge that turns proof into trust'
                              : 'Start with proof, not another promise'}
                    </div>
                    <p className="mt-4 text-[16px] leading-8 text-[#475467]">{option.copy}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <button className="rounded-[12px] bg-[#4361ee] px-4 py-2.5 text-[14px] font-medium text-white">
                        {groupIndex === 4 ? 'Start free' : 'Preview section'}
                      </button>
                      <button className="rounded-[12px] border border-[#d0d5dd] bg-white px-4 py-2.5 text-[14px] font-medium text-[#101828]">
                        Save alternative
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[18px] border border-[#edf1f7] bg-white px-4 py-4">
                    <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Strategic intent</div>
                    <div className="mt-2 text-[14px] leading-7 text-[#667085]">{option.purpose}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function DatabaseSchemaSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-3">
        {architectureHighlights.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${
              index === 0
                ? 'bg-[linear-gradient(135deg,#eefec8_0%,#d7f0ff_100%)]'
                : index === 1
                  ? 'bg-[linear-gradient(135deg,#ffe2c5_0%,#f6deff_100%)]'
                  : 'bg-[linear-gradient(135deg,#e6f3ff_0%,#f7f2ff_100%)]'
            }`}
          >
            <div className="text-[13px] uppercase tracking-[0.08em] text-[#667085]">{item.label}</div>
            <div className="mt-3 text-[30px] font-semibold tracking-[-0.05em] text-[#101828]">{item.value}</div>
            <div className="mt-3 text-[14px] leading-7 text-[#475467]">{item.note}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Database architecture overview</div>
        <p className="mt-3 max-w-[920px] text-[16px] leading-8 text-[#667085]">
          ProveKit needs multi-tenancy, secure API integrations, and a reliable approval workflow. The database model uses
          account_id as the security root, while flexible JSONB fields absorb evolving metrics and branding needs.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {databaseTables.map((table, index) => (
          <div key={table.table} className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <div className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${
                index % 4 === 0
                  ? 'bg-[#eefec8]'
                  : index % 4 === 1
                    ? 'bg-[#ffe2c5]'
                    : index % 4 === 2
                      ? 'bg-[#e6f3ff]'
                      : 'bg-[#f3e8ff]'
              }`}>
                table
              </div>
              <div>
                <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">{table.table}</div>
                <div className="text-[14px] text-[#667085]">{table.subtitle}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {table.fields.map((field) => (
                <div key={field} className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 text-[14px] leading-7 text-[#475467]">
                  {field}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Key technical relationships</div>
          <NativeTable
            columns={[
              { key: 'type', label: 'Relationship', className: 'w-[24%]' },
              { key: 'relation', label: 'Schema link', className: 'w-[28%]' },
              { key: 'detail', label: 'Why it matters', className: 'w-[48%]' },
            ]}
            rows={relationshipRows}
          />
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">How they connect</div>
          <div className="mt-5 space-y-4">
            {[
              'Account is the root. Every production record is filtered by account_id via RLS.',
              'Integrations hydrate customers and metrics snapshots from source systems.',
              'Approval requests act as the bridge between raw data and public proof.',
              'Approved stories generate both a verified badge and distribution-ready social assets.',
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
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Data flow</div>
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {dataFlowSteps.map((step, index) => (
            <div key={step} className="rounded-[24px] border border-[#e6eaf2] bg-[#fcfdff] p-5">
              <div className="inline-flex rounded-[10px] bg-[#eef7ff] px-3 py-1 text-[12px] font-semibold text-[#4361ee]">
                Step {index + 1}
              </div>
              <div className="mt-4 text-[15px] leading-7 text-[#475467]">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AbTestingSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">A/B test scenarios</div>
        <p className="mt-3 max-w-[980px] text-[16px] leading-8 text-[#667085]">
          Priority growth test scenarios for ProveKit. Each test includes a hypothesis, Variant A (control), Variant B (test),
          success metric, and estimated impact. Tests are implemented via PostHog Feature Flags, already available in the stack
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
          rows={abFrameworkRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Test schedule — first 90 days</div>
        <div className="grid gap-4 xl:grid-cols-3">
          {abSchedule.map((item, index) => (
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
              <div className="mt-4 text-[21px] font-semibold tracking-[-0.04em] text-[#101828]">{item.test}</div>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Test scenarios</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {abScenarioCards.map((item, index) => (
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
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">PostHog feature flag — example implementation</div>
        <div className="mt-5 overflow-x-auto rounded-[20px] bg-[#0f172a] p-5">
          <pre className="min-w-[680px] whitespace-pre-wrap text-[13px] leading-7 text-[#e2e8f0]">{`// pages/index.tsx
const { isFeatureEnabled } = useFeatureFlagEnabled('hero-headline-v2')

const headline = isFeatureEnabled
  ? "Your customer grew 127% with your product. They don't know they're a case study yet."
  : "Your customers' results. Verified. Published. Closing deals."

posthog.capture('hero_headline_viewed', {
  variant: isFeatureEnabled ? 'v2_specific' : 'v1_generic'
})`}</pre>
        </div>
      </div>
    </section>
  );
}

function ObjectionHandlingSection() {
  return (
    <section className="mt-10 space-y-5">
      {objectionCards.map((item) => (
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
        </div>
      ))}
    </section>
  );
}

function AgencySalesPlaybookSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-4 xl:grid-cols-4">
        {agencyPlaybookStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border border-[#e6eaf2] p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${stat.className}`}
          >
            <div className="text-[48px] font-semibold tracking-[-0.06em] text-[#101828]">{stat.value}</div>
            <div className="mt-3 text-[17px] font-medium text-[#101828]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <p className="text-[16px] leading-8 text-[#475467]">
          The agency channel is ProveKit&apos;s fastest path to meaningful MRR. One agency on the $299/mo plan represents
          the same revenue as 6 Starter accounts. More importantly, each agency brings 5-20 client accounts, turning every
          agency sale into a multiplier on ProveKit&apos;s total story volume and social proof. This playbook is built to
          close the first 10 agencies.
        </p>
        <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
          <strong className="text-[#101828]">The agency pitch in one sentence:</strong> &ldquo;ProveKit turns your most
          time-consuming deliverable into a 3-minute task and you still charge the same price for it.&rdquo; That is a 40x
          margin improvement on case study production. No agency CFO says no to that.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Why agencies are the ideal early customer</div>
        <NativeTable
          columns={[
            { key: 'metric', label: 'Metric', className: 'w-[38%]' },
            { key: 'value', label: 'Value', className: 'w-[62%]' },
          ]}
          rows={agencyWhyRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Ideal agency profile (ICP)</div>
        <NativeTable
          columns={[
            { key: 'attribute', label: 'Attribute', className: 'w-[24%]' },
            { key: 'description', label: 'Description', className: 'w-[76%]' },
          ]}
          rows={agencyIcpRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Outreach sequence</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {agencyOutreachTouches.map((item) => (
            <div
              key={item.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                {item.day}
              </div>
              <div className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Demo script (15-minute call)</div>
        <NativeTable
          columns={[
            { key: 'time', label: 'Time', className: 'w-[16%]' },
            { key: 'stage', label: 'Stage', className: 'w-[18%]' },
            { key: 'script', label: 'Script', className: 'w-[46%]' },
            { key: 'notes', label: 'Notes', className: 'w-[20%]' },
          ]}
          rows={agencyDemoRows}
        />
      </div>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">White-label pitch (Agency plan feature)</div>
          <NativeTable
            columns={[
              { key: 'feature', label: 'Feature', className: 'w-[40%]' },
              { key: 'benefit', label: 'Agency Benefit', className: 'w-[60%]' },
            ]}
            rows={whiteLabelRows}
          />
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Agency expansion revenue</div>
          <div className="mt-5 space-y-4">
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[13px] uppercase tracking-[0.08em] text-[#98a2b3]">10 clients</div>
              <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">$299 + (10 x $25) = $549/mo</div>
              <div className="mt-2 text-[15px] leading-7 text-[#667085]">Base agency plan plus 10 client workspaces.</div>
            </div>
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[13px] uppercase tracking-[0.08em] text-[#98a2b3]">20 clients</div>
              <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#101828]">$299 + (20 x $25) = $799/mo</div>
              <div className="mt-2 text-[15px] leading-7 text-[#667085]">Natural seat expansion with near-zero churn once embedded.</div>
            </div>
          </div>
          <div className="mt-5 rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
            <strong className="text-[#101828]">Why this matters:</strong> agency accounts naturally expand over time, so the
            channel compounds MRR while also increasing total story output across multiple client brands.
          </div>
        </div>
      </section>
    </section>
  );
}

function First50CustomersSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-5 xl:grid-cols-3">
        {first50CustomerCards.map((card, index) => (
          <div
            key={card.phase}
            className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${card.accent}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <div
                className={`inline-flex rounded-[10px] px-3 py-1 text-[12px] font-semibold text-[#101828] ${
                  index === 0 ? 'bg-[#ffe2c5]' : index === 1 ? 'bg-[#fff4cc]' : 'bg-[#dcfae6]'
                }`}
              >
                {card.phase}
              </div>
              <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">Acquisition phase</div>
            </div>

            <div className="mt-5 text-[26px] font-semibold tracking-[-0.05em] text-[#101828]">{card.title}</div>
            <div className="mt-5 space-y-3">
              {card.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4"
                >
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-[#4361ee]" />
                  <div className="text-[15px] leading-7 text-[#475467]">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[18px] border border-[#d7f0e2] bg-[#f4fbf7] px-4 py-4 text-[14px] font-medium leading-7 text-[#23614b]">
              {card.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AiBuildPromptsSection() {
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
          Core build prompts for implementing the ProveKit product surface. Each prompt is preserved from the blueprint,
          but repackaged in the cleaner project card language so the section feels like a build system rather than a plain
          code dump.
        </p>
      </div>

      <div className="space-y-5">
        {aiBuildPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="overflow-hidden rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <div className={`border-b border-[#e6eaf2] p-6 ${prompt.accent}`}>
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
                <pre className="min-w-[700px] whitespace-pre-wrap text-[13px] leading-7 text-[#e2e8f0]">{prompt.body}</pre>
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

function BrandingKitSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Brand Name Rationale</div>
          <div className="mt-6 text-[48px] font-semibold tracking-[-0.07em]">
            <span className="text-[#28b483]">PROVE</span>
            <span className="text-[#101828]">KIT</span>
          </div>
          <div className="mt-5 space-y-3 text-[15px] leading-8 text-[#475467]">
            <p>
              <strong className="text-[#101828]">Prove</strong> is the core action. B2B marketing wins by proving value,
              not just describing it.
            </p>
            <p>
              <strong className="text-[#101828]">Kit</strong> signals a complete system for a job, not a one-off feature
              or another writing tool.
            </p>
            <p>
              <strong className="text-[#101828]">Together</strong> it becomes the toolkit for proving your product&apos;s
              value with evidence.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Domain</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">provekit.io</div>
            </div>
            <div className="rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4">
              <div className="text-[12px] uppercase tracking-[0.08em] text-[#98a2b3]">Tagline</div>
              <div className="mt-2 text-[16px] font-medium text-[#101828]">
                Your customers&apos; results. Verified. Published. Closing deals.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Brand Voice Principles</div>
          <div className="mt-6 grid gap-4">
            {brandVoicePrinciples.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#edf1f7] bg-[#fcfdff] p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-[12px] text-[18px] ${item.tone}`}>
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
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Language Guide - Do / Don&apos;t</div>
        <div className="overflow-x-auto rounded-[28px] border border-[#e6eaf2] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e6eaf2]">
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#067647]">DO SAY</th>
                <th className="px-6 py-5 text-left text-[14px] font-semibold text-[#d92d20]">DON&apos;T SAY</th>
              </tr>
            </thead>
            <tbody>
              {languageGuideRows.map((row, index) => (
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

function PrivacyDataAgreementSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Privacy &amp; Data Agreement</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          This section contains two essential agreements: the Customer Data Processing Agreement between ProveKit and its
          clients, and the Story Publication Consent Form that the client sends to its own customers. Both are structured
          to align with GDPR, CCPA, and KVKK. Final binding execution should be reviewed by a legal professional.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {legalOverviewCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-[28px] border border-[#e6eaf2] p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)] ${card.tone}`}
          >
            <div className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#667085]">{card.title}</div>
            <div className="mt-3 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{card.subtitle}</div>
            <p className="mt-4 text-[15px] leading-8 text-[#475467]">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Agreement 1: Customer Data Processing Agreement (DPA)</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {dpaSectionCards.map((item, index) => (
            <div
              key={item.number}
              className="rounded-[28px] border border-[#e6eaf2] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-[12px] text-[14px] font-semibold text-[#101828] ${
                    index % 3 === 0 ? 'bg-[#eefec8]' : index % 3 === 1 ? 'bg-[#e6f3ff]' : 'bg-[#ffe2c5]'
                  }`}
                >
                  {item.number}
                </div>
                <div className="text-[20px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              </div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">DPA signature block</div>
        <NativeTable
          columns={[
            { key: 'party', label: 'Party', className: 'w-[26%]' },
            { key: 'name', label: 'Name / Title', className: 'w-[28%]' },
            { key: 'signature', label: 'Signature', className: 'w-[23%]' },
            { key: 'date', label: 'Date', className: 'w-[23%]' },
          ]}
          rows={dpaSignatureRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Agreement 2: Story Publication Consent Form</div>
        <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <p className="text-[15px] leading-8 text-[#475467]">
            This form is sent inline within the approval email. When the customer clicks the approval button, consent is
            recorded in Supabase together with timestamp, IP, and user agent. To preserve digital signature validity, all
            metrics at approval time are saved in a non-modifiable format.
          </p>
        </div>
        <NativeTable
          columns={[
            { key: 'field', label: 'Field', className: 'w-[22%]' },
            { key: 'content', label: 'Content', className: 'w-[78%]' },
          ]}
          rows={consentFieldRows}
        />
      </div>
    </section>
  );
}

function SeoContentStrategySection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">SEO &amp; Content Strategy</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Organic search is ProveKit&apos;s highest-ROI long-term acquisition channel. The target keywords are low
          competition, high intent, and tightly aligned with the pain ProveKit solves. A founder searching for
          &ldquo;how to write a B2B case study&rdquo; is already feeling the production bottleneck in real time.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Keyword Strategy Overview</div>
        <p className="mt-3 text-[15px] leading-8 text-[#667085]">
          Three keyword tiers guide the content engine: bottom-of-funnel solution searches, middle-of-funnel problem
          research, and programmatic integration pages that scale without bespoke writing.
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
            rows={seoKeywordRows}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Content Architecture</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {seoArchitectureCards.map((card) => (
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
          rows={seoCalendarRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Distribution &amp; Link Building</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {seoDistributionCards.map((item) => (
            <div
              key={item.channel}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.channel}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.strategy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackCostSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Tech Stack Cost Model</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          Realistic cost brackets from MVP to growth stage. All figures below are monthly USD estimates and are designed to
          help map infrastructure cost against the revenue curve of ProveKit.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#ecfbf4] px-3 py-1 text-[12px] font-semibold text-[#067647]">
            Stage 1
          </div>
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">MVP (0 - First 10 Customers)</div>
        </div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[16%]' },
            { key: 'notes', label: 'Notes', className: 'w-[46%]' },
          ]}
          rows={costModelStage1Rows}
        />
        <div className="rounded-[20px] border border-[#d7f0e2] bg-[#f4fbf7] p-5 text-[15px] leading-7 text-[#475467]">
          <strong className="text-[#101828]">MVP Monthly Total:</strong> $0 - $75/mo
          <br />
          <strong className="text-[#101828]">Insight:</strong> Cost is nearly zero until the first revenue.
          <br />
          <strong className="text-[#101828]">Risk:</strong> Supabase inactivity pause - upgrade to Pro ($25/mo) before the
          first customer arrives.
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#fff4cc] px-3 py-1 text-[12px] font-semibold text-[#b54708]">
            Stage 2
          </div>
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Growth (100 - 500 Customers)</div>
        </div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[16%]' },
            { key: 'notes', label: 'Notes', className: 'w-[46%]' },
          ]}
          rows={costModelStage2Rows}
        />
        <div className="rounded-[20px] border border-[#ffe3cf] bg-[#fff7f0] p-5 text-[15px] leading-7 text-[#8a4b24]">
          <strong className="text-[#101828]">Growth Monthly Total:</strong> ~$260 - $380/mo (Infrastructure)
          <br />
          <strong className="text-[#101828]">Insight:</strong> At 500 customers × $99 average = $49,500 MRR, the
          infra-to-revenue ratio is ~0.7%.
          <br />
          <strong className="text-[#101828]">Note:</strong> Stripe transaction fees (~$1,450/mo) become the largest
          infrastructure line item.
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-[10px] bg-[#ffe4e8] px-3 py-1 text-[12px] font-semibold text-[#d92d20]">
            Stage 3
          </div>
          <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Scale (500 - 2,000 Customers)</div>
        </div>
        <NativeTable
          columns={[
            { key: 'service', label: 'Service', className: 'w-[20%]' },
            { key: 'plan', label: 'Plan', className: 'w-[18%]' },
            { key: 'cost', label: 'Cost', className: 'w-[16%]' },
            { key: 'notes', label: 'Notes', className: 'w-[46%]' },
          ]}
          rows={costModelStage3Rows}
        />
        <div className="rounded-[20px] border border-[#dce7ff] bg-[#f6f9ff] p-5 text-[15px] leading-7 text-[#34508c]">
          <strong className="text-[#101828]">Scale Monthly Total:</strong> ~$1,700 - $2,200/mo (Infrastructure)
          <br />
          <strong className="text-[#101828]">Insight:</strong> At $99,000 MRR, the infra ratio is ~2%.
          <br />
          <strong className="text-[#101828]">Reality:</strong> Stripe API fees (~$2,900/mo) remain the largest fixed cost
          item.
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Cost / Revenue Ratio Summary</div>
        <NativeTable
          columns={[
            { key: 'stage', label: 'Stage', className: 'w-[28%]' },
            { key: 'infra', label: 'Infra Cost Estimate', className: 'w-[22%]' },
            { key: 'mrr', label: 'Estimated MRR', className: 'w-[24%]' },
            { key: 'ratio', label: 'Infra / Revenue Ratio', className: 'w-[26%]' },
          ]}
          rows={costRatioRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Critical Decision Points</div>
        <div className="grid gap-5 xl:grid-cols-3">
          {criticalDecisionCards.map((item) => (
            <div
              key={item.title}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${item.accent}`}
            >
              <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{item.title}</div>
              <p className="mt-4 text-[15px] leading-8 text-[#475467]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnboardingActivationSection() {
  return (
    <section className="mt-10 space-y-8">
      <div className="rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Onboarding &amp; Activation Flow</div>
        <p className="mt-4 text-[16px] leading-8 text-[#475467]">
          In PLG products, onboarding decides the outcome early. Most users make a continue-or-drop decision within 48
          hours, so every touchpoint from signup to first live verified story must compress time to value.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">The Activation Milestone Framework</div>
        <p className="text-[15px] leading-8 text-[#667085]">
          ProveKit has one primary milestone: the first verified story published. Everything else in onboarding exists to
          move the user toward that moment and then reinforce repeat usage after it happens.
        </p>
        <NativeTable
          columns={[
            { key: 'milestone', label: 'Milestone', className: 'w-[12%]' },
            { key: 'event', label: 'Event Description', className: 'w-[52%]' },
            { key: 'timing', label: 'Typical Timing', className: 'w-[18%]' },
            { key: 'benchmark', label: 'Benchmark Rate', className: 'w-[18%]' },
          ]}
          rows={activationMilestoneRows}
        />
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Day-by-Day Onboarding Sequence</div>
        <div className="grid gap-5 xl:grid-cols-2">
          {onboardingDayCards.map((card) => (
            <div
              key={card.day}
              className={`relative rounded-[28px] border border-[#e6eaf2] bg-white p-7 shadow-[0_8px_18px_rgba(15,23,42,0.04)] before:absolute before:left-0 before:top-8 before:h-16 before:w-1 before:rounded-full ${card.accent}`}
            >
              <div className="inline-flex rounded-[10px] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#667085]">
                {card.day}
              </div>
              <div className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">{card.title}</div>
              <div className="mt-5 space-y-3">
                {card.steps.map((step) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-[18px] border border-[#edf1f7] bg-[#fcfdff] px-4 py-4"
                  >
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-[#4361ee]" />
                    <div className="text-[15px] leading-7 text-[#475467]">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Aha Moment Design Principles</div>
        <div className="grid gap-4 xl:grid-cols-2">
          {ahaPrinciples.map((item) => (
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

      <div className="rounded-[28px] border border-[#dce7ff] bg-[#f6f9ff] p-6 text-[15px] leading-8 text-[#34508c]">
        <strong className="text-[#101828]">Key metric to track:</strong> Median time from signup to first story published.
        <br />
        <strong className="text-[#101828]">Benchmark target:</strong> Under 72 hours.
        <br />
        If median time exceeds 5 days, audit each step. The bottleneck is usually Stripe connect friction or approval
        wait time, and both can be improved with better trigger timing and tighter copy.
      </div>
    </section>
  );
}

function GenericRawSection({ sectionMarkup }: { sectionMarkup: string | null }) {
  if (!sectionMarkup) {
    return (
      <section className="mt-10 rounded-[28px] border border-[#e6eaf2] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        <h3 className="text-[24px] font-semibold tracking-[-0.04em] text-[#101828]">Section content unavailable</h3>
        <p className="mt-4 text-[16px] leading-8 text-[#667085]">This section could not be extracted from the HTML source.</p>
      </section>
    );
  }

  return (
    <section className="kit4-html-content mt-10">
      <div dangerouslySetInnerHTML={{ __html: sectionMarkup }} />
    </section>
  );
}

  function contentBySection(sectionId: string, sectionMarkup: string | null) {
    switch (sectionId) {
      case 's01':
        return <OpportunityBriefSection />;
      case 's02':
        return <ProductSpecSection />;
      case 's03':
        return <TargetMarketsSection />;
      case 's04':
        return <TechStackSection />;
      case 's05':
        return <CompetitorMapSection />;
    case 's06':
      return <RevenueModelSection />;
      case 's07':
        return <First50CustomersSection />;
        case 's09':
          return <AiBuildPromptsSection />;
        case 's17':
          return <BrandingKitSection />;
        case 's19':
          return <PrivacyDataAgreementSection />;
        case 's21':
          return <TechStackCostSection />;
        case 's23':
          return <OnboardingActivationSection />;
        case 's24':
          return <SeoContentStrategySection />;
        case 's14':
          return <DatabaseSchemaSection />;
    case 's15':
      return <LandingCopyAlternativesSection />;
    case 's16':
      return <WaitlistEmailSequenceSection />;
    case 's18':
      return <LaunchChecklistSection />;
    case 's20':
      return <AbTestingSection />;
    case 's25':
      return <AgencySalesPlaybookSection />;
    case 's26':
      return <ObjectionHandlingSection />;
    case 's27':
      return <Kit4AdContentPlannerSection />;
    case 's28':
      return <Kit4AdContentPlannerSection mode="content-only" />;
    default:
      return <GenericRawSection sectionMarkup={sectionMarkup} />;
  }
}

export function Kit4BlueprintContent({ sectionId }: { sectionId: string }) {
  const section = blueprintSections.find((item) => item.id === sectionId) ?? blueprintSections[0];
  const sectionMarkup = getBlueprintSectionMarkup(section.id);
  const funnels = funnelContent[section.id];
  const headingEyebrow = '';
  const headingTitle = section.id === 's01' ? 'Why ProveKit, Why Now?' : section.title;
  const headingDescription =
    section.id === 's01'
      ? 'Why ProveKit, Why Now? Customer evidence - case studies, testimonials, verified ROI stats - is the highest-converting content in B2B SaaS. It sits at the bottom of the funnel where deals close. Yet it is paradoxically the hardest content to produce. The average B2B case study takes 3-4 weeks, requires customer coordination, a writer, a designer, internal reviews, and customer approval. Most companies have fewer than 10 published case studies regardless of their customer base size. Meanwhile, buyers are using AI tools to research software and AI-driven research prioritizes specific, verified, indexable proof points. Generic testimonials no longer cut it. ProveKit solves both problems simultaneously: it produces case studies in 3 minutes using real data, and the Verified 3 badge makes claims credible to increasingly skeptical buyers.'
      : section.id === 's03'
      ? 'ProveKit targets three primary customer types across four key geographies. The primary buyer is always the person closest to the evidence problem: the Head of Marketing, Content Marketing Manager, Product Marketing Manager, or (at smaller companies) the founder themselves. The trigger moment for purchase is usually a sales team complaint: "I need more case studies."'
      : '';

  return (
      <div className="pb-4">
        <SectionHeading
          eyebrow={headingEyebrow}
          title={headingTitle}
          description={headingDescription}
        />

      {funnels ? (
        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          {funnels.map((item) => (
            <FunnelVisual key={item.title} title={item.title} steps={item.steps} />
          ))}
        </section>
      ) : null}

      {contentBySection(section.id, sectionMarkup)}

      <style>{`
        .kit4-html-content .section {
          display: block !important;
        }

        .kit4-html-content .section-header {
          display: none !important;
        }

        .kit4-html-content .grid-2,
        .kit4-html-content .grid-3,
        .kit4-html-content .grid-4 {
          display: grid;
          gap: 16px;
          margin-top: 16px;
        }

        .kit4-html-content .grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .kit4-html-content .grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .kit4-html-content .grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .kit4-html-content .card,
        .kit4-html-content .persona,
        .kit4-html-content .price-card {
          border: 1px solid #e6eaf2;
          background: white;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
        }

        .kit4-html-content .persona {
          border-radius: 24px;
          background: linear-gradient(180deg, #ffffff 0%, #fcfdff 100%);
          padding: 24px;
        }

        .kit4-html-content .persona .persona-avatar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #f6f8fb;
          font-size: 20px;
          margin-bottom: 14px;
        }

        .kit4-html-content .persona .persona-name {
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -0.04em;
          font-weight: 600;
          color: #101828;
        }

        .kit4-html-content .persona .persona-role {
          margin-top: 6px;
          font-size: 14px;
          color: #4361ee;
        }

        .kit4-html-content .persona .persona-detail {
          margin-top: 14px;
          font-size: 15px;
          line-height: 1.8;
          color: #667085;
        }

        .kit4-html-content .price-card.featured {
          background: #f8fafc;
          border-color: transparent;
        }

        .kit4-html-content .card-title,
        .kit4-html-content .plan-name {
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -0.04em;
          font-weight: 600;
          color: #101828;
          margin-bottom: 14px;
        }

        .kit4-html-content .kpi {
          min-height: 140px;
          background: linear-gradient(135deg, #eefec8 0%, #d7f0ff 100%);
        }

        .kit4-html-content .kpi:nth-child(2) {
          background: linear-gradient(135deg, #ffd8ba 0%, #c57aff 100%);
        }

        .kit4-html-content .kpi:nth-child(3) {
          background: linear-gradient(135deg, #c6e7ff 0%, #f6deff 100%);
        }

        .kit4-html-content .kpi:nth-child(4) {
          background: linear-gradient(135deg, #fdf1e2 0%, #fff9f1 100%);
        }

        .kit4-html-content .kpi-value {
          font-size: 34px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 600;
          color: #101828;
        }

        .kit4-html-content .kpi-label,
        .kit4-html-content .section-desc,
        .kit4-html-content p,
        .kit4-html-content li,
        .kit4-html-content .text-copy,
        .kit4-html-content .timeline-desc {
          font-size: 16px;
          line-height: 1.8;
          color: #667085;
        }

        .kit4-html-content .table-wrap {
          overflow-x: auto;
          margin-top: 16px;
        }

        .kit4-html-content table {
          width: 100%;
          border-collapse: collapse;
          min-width: 820px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid #e6eaf2;
          background: white;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
        }

        .kit4-html-content thead tr {
          border-bottom: 1px solid #e6eaf2;
        }

        .kit4-html-content th {
          padding: 20px 24px;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          color: #667085;
          background: white;
        }

        .kit4-html-content td {
          padding: 24px;
          vertical-align: top;
          font-size: 15px;
          line-height: 1.7;
          color: #475467;
          border-top: 1px solid #e6eaf2;
        }

        .kit4-html-content tbody tr:first-child td {
          border-top: 0;
        }

        .kit4-html-content .tag {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 600;
          background: #f2f4f7;
          color: #667085;
        }

        .kit4-html-content .tag-teal {
          background: #ecfdf3;
          color: #067647;
        }

        .kit4-html-content .tag-coral {
          background: #fff1f3;
          color: #d92d20;
        }

        .kit4-html-content .tag-amber,
        .kit4-html-content .tag-emerald {
          background: #fff7ed;
          color: #b54708;
        }

        .kit4-html-content .alert {
          margin-top: 16px;
          border-radius: 20px;
          padding: 18px 20px;
          border: 1px solid #d9f1e7;
          background: #f3fbf7;
          color: #475467;
          font-size: 15px;
          line-height: 1.7;
        }

        .kit4-html-content .flow-step {
          min-width: 160px;
          border: 1px solid #e6eaf2;
          background: white;
          border-radius: 18px;
          padding: 16px;
          font-size: 15px;
          line-height: 1.5;
          color: #475467;
        }

        .kit4-html-content .flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #98a2b3;
          font-size: 20px;
          min-width: 24px;
        }

        .kit4-html-content .copy-btn {
          display: none;
        }

        .kit4-html-content #funnel1,
        .kit4-html-content #funnel2 {
          display: none;
        }

        @media (max-width: 1100px) {
          .kit4-html-content .grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .kit4-html-content .grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .kit4-html-content .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .kit4-html-content .grid-4,
          .kit4-html-content .grid-3 {
            grid-template-columns: 1fr;
          }

          .kit4-html-content .card,
          .kit4-html-content .persona,
          .kit4-html-content .price-card {
            padding: 20px;
            border-radius: 24px;
          }

          .kit4-html-content th,
          .kit4-html-content td {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
}
