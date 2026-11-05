export interface Challenge {
  id: string;
  number: string;
  title: string;
  problem: string;
  businessImpact: string[];
  potentialSolution: string;
  iconName: string;
}

export interface SolutionService {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  capabilities: string[];
  businessValue: string;
  accentColor: string;
  iconName: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  capabilities: string[];
  transformationImpact: string;
}

export interface UseCase {
  id: string;
  number: string;
  title: string;
  scenario: string;
  problem: string;
  solutionBreakdown: string[];
  expectedValue: string;
  category: string;
  iconName: string;
}

export interface ApproachStep {
  number: string;
  step: string;
  title: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface WhyReason {
  number: string;
  title: string;
  description: string;
  keyFeature: string;
  iconName: string;
}

export const BUSINESS_CHALLENGES: Challenge[] = [
  {
    id: "manual-work",
    number: "01",
    title: "Manual & Repetitive Work",
    problem: "Employees spend valuable hours every day on repetitive manual tasks such as data entry, report preparation, email communication, and administrative paperwork.",
    businessImpact: [
      "Reduced workforce productivity & burnout",
      "Higher operational costs & overhead",
      "Increased rate of human error and rework",
      "Less time for high-value strategic activities"
    ],
    potentialSolution: "Workflow Automation & AI Agents",
    iconName: "Clock"
  },
  {
    id: "disconnected-systems",
    number: "02",
    title: "Disconnected Business Systems",
    problem: "Business information is scattered across isolated spreadsheets, SaaS applications, and legacy platforms that do not communicate with each other.",
    businessImpact: [
      "Costly duplicate data entry across tools",
      "Inconsistent and out-of-sync information",
      "Difficult and error-prone data synchronization",
      "Fragmented, siloed business operations"
    ],
    potentialSolution: "System Integration & Centralized Data Management",
    iconName: "Network"
  },
  {
    id: "operational-visibility",
    number: "03",
    title: "Lack of Operational Visibility",
    problem: "Business executives and managers struggle to track cross-department performance, monitor live operations, and access accurate information for decision-making.",
    businessImpact: [
      "Slow and hesitant decision-making cycles",
      "Limited real-time performance visibility",
      "Blind spots in operational monitoring",
      "Delayed, stale month-end reporting"
    ],
    potentialSolution: "Business Intelligence & Analytics Dashboards",
    iconName: "BarChart3"
  },
  {
    id: "paper-processes",
    number: "04",
    title: "Paper-based & Fragmented Processes",
    problem: "Traditional paperwork, physical signatures, manual email approval chains, and disorganized file systems slow down standard business operations.",
    businessImpact: [
      "Bottlenecks in approval and sign-off processes",
      "Fragile document storage and compliance risk",
      "Severe delays in information retrieval",
      "High administrative overhead and filing costs"
    ],
    potentialSolution: "Digital Workflow & Document Management",
    iconName: "FileText"
  },
  {
    id: "inefficient-customer-ops",
    number: "05",
    title: "Inefficient Customer Operations",
    problem: "Customer service, sales inquiries, and follow-ups depend too heavily on manual handling, leading to delayed replies and inconsistent communication.",
    businessImpact: [
      "Slow response times causing lost sales",
      "Inconsistent customer support experiences",
      "Overwhelming repetitive inquiry volume",
      "Missed lead conversion opportunities"
    ],
    potentialSolution: "AI Customer Support & CRM Automation",
    iconName: "Users"
  },
  {
    id: "difficult-to-scale",
    number: "06",
    title: "Difficult to Scale Operations",
    problem: "Legacy workflows and improvised spreadsheets reach their breaking point as transaction volume, team headcount, and customer demands multiply.",
    businessImpact: [
      "Severe operational bottlenecks under load",
      "Inability to expand into new markets",
      "Exponentially rising administrative headcount",
      "Difficult coordination between business units"
    ],
    potentialSolution: "Scalable Business Applications & Enterprise Systems",
    iconName: "TrendingUp"
  }
];

export const SOLUTIONS_DATA: SolutionService[] = [
  {
    id: "digital-transformation",
    number: "01",
    title: "Digital Transformation",
    headline: "Modernize Core Workflows into Structured Digital Operations",
    description: "Modernize traditional business operations by turning manual, fragmented, and paper-based processes into structured, auditable digital workflows.",
    capabilities: [
      "Business Process Digitization",
      "Custom Business Applications",
      "Internal Management Systems",
      "Digital Document Management",
      "Workflow Management Platforms",
      "Executive Business Dashboards",
      "Operational Management Portals"
    ],
    businessValue: "Simplify complex operations, eliminate process blind spots, and create a scalable, structured working environment across your entire workforce.",
    accentColor: "cyan",
    iconName: "Sparkles"
  },
  {
    id: "ai-solutions",
    number: "02",
    title: "AI Solutions & Intelligent Automation",
    headline: "Empower Your Team with Autonomous Intelligence",
    description: "Apply artificial intelligence and intelligent automation to reduce repetitive work, improve speed of execution, and unlock new operational capabilities.",
    capabilities: [
      "AI-Powered Business Assistants",
      "Autonomous AI Agents for Operations",
      "Intelligent Document Processing (IDP)",
      "AI Customer Support & Smart Routing",
      "Enterprise Knowledge Assistants",
      "Automated AI Reporting & Summaries",
      "Intelligent Workflow Automation",
      "Multi-Agent Collaborative Systems"
    ],
    businessValue: "Radically cut manual workload, accelerate information processing by 10x, and allow knowledge workers to focus on strategic client growth.",
    accentColor: "teal",
    iconName: "Cpu"
  },
  {
    id: "system-integration",
    number: "03",
    title: "System Integration",
    headline: "Unify Your Disconnected Software Ecosystem",
    description: "Connect existing business applications, databases, cloud platforms, and third-party tools into a coherent, seamlessly communicating operational ecosystem.",
    capabilities: [
      "Enterprise API Integration",
      "CRM & ERP Deep Integration",
      "Third-Party SaaS Platform Connectors",
      "Bi-directional Data Synchronization",
      "Legacy System Modernization",
      "Cross-Platform Event Communication",
      "Enterprise Application Connectivity"
    ],
    businessValue: "Eliminate disconnected workflows, remove duplicate data entry forever, and ensure every department works with unified, accurate ground truth.",
    accentColor: "sky",
    iconName: "Workflow"
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software Development",
    headline: "Tailored Architecture Built for Your Exact Business Logic",
    description: "Design and develop high-performance software engineered specifically around your company's proprietary requirements, security needs, and operational workflows.",
    capabilities: [
      "Custom Enterprise Web Applications",
      "Scalable Cloud-Native Architecture",
      "Internal Operations Platforms",
      "Secure Client & Partner Portals",
      "Custom Workflow Engine Development",
      "High-Performance Database Design",
      "Enterprise-Grade Security & RBAC"
    ],
    businessValue: "Build technology around your proven competitive advantages instead of forcing your organization to compromise on off-the-shelf software.",
    accentColor: "cyan",
    iconName: "Code2"
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "education",
    name: "Education & Training",
    tagline: "Modernizing student lifecycles, administrative operations, and intelligent learning systems.",
    iconName: "GraduationCap",
    capabilities: [
      "Learning Management Systems (LMS)",
      "Student Information Management",
      "Automated Scheduling & Class Management",
      "AI Tutoring & Learning Assistants",
      "Administrative Workflow Automation"
    ],
    transformationImpact: "Replaces manual student record management and fragmented communications with a centralized, automated digital campus experience."
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    tagline: "Connecting omnichannel sales, inventory accuracy, and automated customer care.",
    iconName: "ShoppingCart",
    capabilities: [
      "Real-time Inventory Management",
      "Automated Order Processing & Routing",
      "Omnichannel CRM Integration",
      "24/7 AI Customer Support Automation",
      "Predictive Sales & Demand Analytics"
    ],
    transformationImpact: "Eliminates stock discrepancies, syncs marketplace channels automatically, and accelerates customer inquiry resolution."
  },
  {
    id: "healthcare",
    name: "Healthcare & Professional Services",
    tagline: "Securing patient records, streamlining appointments, and automating paperwork.",
    iconName: "HeartPulse",
    capabilities: [
      "Digital Appointment & Queue Management",
      "Compliant Digital Documentation",
      "Administrative Workflow Automation",
      "Clinical Information Management",
      "Inter-departmental Workflow Integration"
    ],
    transformationImpact: "Reduces patient wait times and administrative burden on healthcare staff while ensuring strict regulatory compliance."
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    tagline: "Accelerating reconciliation, document ingestion, and compliance reporting.",
    iconName: "Building2",
    capabilities: [
      "Intelligent Document Processing for Invoices",
      "Automated Financial Reporting & Month-End",
      "Multi-source Data Reconciliation",
      "Multi-level Approval Workflows",
      "Real-time Business Intelligence Dashboards"
    ],
    transformationImpact: "Transforms multi-day reconciliation chores into automated real-time audit trails with zero manual transposition errors."
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "End-to-end freight visibility, automated dispatch, and warehouse synchronization.",
    iconName: "Truck",
    capabilities: [
      "Real-time Shipment & Milestone Tracking",
      "Cross-warehouse Inventory Synchronization",
      "Operational Dispatch Dashboards",
      "Carrier & Vendor Workflow Automation",
      "ERP & Customs System Integration"
    ],
    transformationImpact: "Provides continuous cargo visibility, flags logistical exceptions proactively, and eliminates paper dispatch manifests."
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Digitizing shop-floor operations, production monitoring, and inventory flow.",
    iconName: "Factory",
    capabilities: [
      "Production Line Monitoring & Telemetry",
      "Automated Operational Shift Reporting",
      "Shop Floor Process Digitization",
      "Raw Materials & Inventory Management",
      "Shop Floor to ERP Data Integration"
    ],
    transformationImpact: "Bridges legacy industrial machinery with modern cloud dashboards to pinpoint manufacturing bottlenecks instantly."
  },
  {
    id: "realestate",
    name: "Real Estate",
    tagline: "Unifying lead pipelines, lease document workflows, and property management.",
    iconName: "Home",
    capabilities: [
      "Specialized Real Estate CRM Systems",
      "Automated Lead Capture & Nurturing",
      "Digital Lease & Document Management",
      "Sales Pipeline Automation",
      "Portfolio Performance Business Reporting"
    ],
    transformationImpact: "Accelerates property lease and purchase closing cycles through instant digital document turnaround and automated follow-ups."
  },
  {
    id: "professional",
    name: "Professional & Business Services",
    tagline: "Streamlining client onboarding, project billing, and centralized knowledge.",
    iconName: "Briefcase",
    capabilities: [
      "End-to-end Client Management Portals",
      "Internal Workflow & Task Automation",
      "Document Generation & Review Processing",
      "Enterprise Knowledge Management",
      "Custom Practice Management Applications"
    ],
    transformationImpact: "Enables consulting and legal practices to bill higher margins by automating non-billable administrative and onboarding tasks."
  }
];

export const BUSINESS_USE_CASES: UseCase[] = [
  {
    id: "customer-support",
    number: "01",
    title: "Intelligent Customer Support",
    category: "AI & Customer Operations",
    scenario: "A mid-sized company receives 500+ repetitive customer inquiries every day across email, chat, and tickets, overwhelming staff and delaying response times to high-value leads.",
    problem: "Customer service agents spend 70% of their workday copying standard answers, searching for tracking numbers, and verifying order statuses instead of resolving complex cases.",
    solutionBreakdown: [
      "Understands customer intent and inquiries in natural language with enterprise context",
      "Retrieves exact business information from verified documentation and knowledge bases",
      "Queries order, account, and shipping status through secure, authorized APIs",
      "Provides instant, human-grade answers 24/7 in multiple languages",
      "Seamlessly routes sensitive or escalated edge cases to the right human specialist with complete conversation context"
    ],
    expectedValue: "Faster customer response time (<10 seconds vs. 6 hours) and 65% reduction in routine support ticket volume.",
    iconName: "Headphones"
  },
  {
    id: "document-processing",
    number: "02",
    title: "Automated Document Processing",
    category: "Intelligent Automation",
    scenario: "Finance and logistics teams receive hundreds of vendor invoices, bills of lading, and purchase agreements in disparate PDF, image, and scanned email formats.",
    problem: "Employees spend hours manually typing vendor names, line items, tax IDs, and totals into accounting software, causing data entry bottlenecks and month-end closing delays.",
    solutionBreakdown: [
      "Ingests structured and unstructured documents directly from incoming email inboxes and SFTP servers",
      "Extracts critical metadata, line items, dates, and amounts using computer vision and LLM parsing",
      "Classifies document categories and validates totals against internal purchase orders",
      "Flags anomalies, discrepancies, or missing information for immediate human review",
      "Directly posts verified transactions into the accounting ERP without human manual typing"
    ],
    expectedValue: "90% faster document processing speed and near-zero transposition errors during month-end closing.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "workflow-automation",
    number: "03",
    title: "Business Workflow Automation",
    category: "Process Digitalization",
    scenario: "Capital expenditure requests, vendor approvals, and cross-departmental handoffs rely on loose email chains, paper forms, and verbal agreements.",
    problem: "Requests stall for days in managerial inboxes, visibility into pending bottlenecks is non-existent, and compliance audits require days of manual file digging.",
    solutionBreakdown: [
      "Standardizes request intake through clean, validated digital forms",
      "Enforces role-based dynamic approval hierarchies and spending thresholds",
      "Automatically distributes notifications via email and team messaging channels",
      "Provides real-time dashboard tracking of every active request and approval timestamp",
      "Escalates stalled approvals automatically and logs immutable audit trails for compliance"
    ],
    expectedValue: "75% reduction in internal approval cycle times and full visibility into operational bottlenecks.",
    iconName: "GitMerge"
  },
  {
    id: "knowledge-assistant",
    number: "04",
    title: "Enterprise Knowledge Assistant",
    category: "Enterprise AI",
    scenario: "An organization has accumulated thousands of SOPs, technical guidelines, client contracts, and training materials scattered across Google Drive, SharePoint, and wikis.",
    problem: "Staff spend 4-6 hours per week searching for internal documentation or constantly interrupting senior staff to ask where information is located.",
    solutionBreakdown: [
      "Indexes approved internal knowledge repositories into a secure, private vector database",
      "Enforces strict employee role-based access permissions (RBAC) so sensitive data remains private",
      "Answers complex technical and operational questions in concise, natural language",
      "Cites exact document titles, page numbers, and direct source links for every statement",
      "Continuously synchronizes as internal documentation and policies are updated"
    ],
    expectedValue: "Instant discovery of internal company knowledge and 80% reduction in repeated internal questions to senior personnel.",
    iconName: "Bot"
  },
  {
    id: "system-integration",
    number: "05",
    title: "Connected Business Systems",
    category: "Enterprise Integration",
    scenario: "A business uses Shopify for e-commerce, Salesforce for enterprise sales, QuickBooks for finance, and an on-premise database for warehouse stock.",
    problem: "None of the applications talk to each other. Staff spend Friday afternoons copying customer data and order lines between three different web portals.",
    solutionBreakdown: [
      "Builds robust event-driven API middleware bridging cloud platforms and on-premise databases",
      "Synchronizes customer accounts, order statuses, and inventory counts in real time",
      "Automates notification dispatch and shipping label generation upon payment capture",
      "Eliminates duplicate record creation and cleanses customer data formatting",
      "Provides a centralized telemetry dashboard monitoring sync health and API throughput"
    ],
    expectedValue: "100% unified data flow across sales, warehouse, and accounting with zero manual re-keying.",
    iconName: "Layers"
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    step: "DISCOVER",
    title: "Understand the Business Foundation",
    summary: "We begin by immersing ourselves in your organization's core operations, strategic objectives, existing tooling, and underlying friction points.",
    activities: [
      "Executive stakeholder alignment interviews",
      "Current-state workflow & tooling audit",
      "Identification of operational bottlenecks & blind spots",
      "Definition of key business objectives & success metrics"
    ],
    deliverable: "Operational Assessment & Problem Definition Report"
  },
  {
    number: "02",
    step: "ANALYZE",
    title: "Diagnose Gaps & Value Opportunities",
    summary: "We dissect data flows, departmental dependencies, and process redundancies to quantify where automation and modern tech will deliver maximum return on investment.",
    activities: [
      "Detailed process flow and data mapping",
      "Legacy system dependency analysis",
      "Cost-of-inaction vs. ROI estimation",
      "Feasibility and technology compatibility evaluation"
    ],
    deliverable: "Gap Analysis & Technical Opportunity Matrix"
  },
  {
    number: "03",
    step: "DESIGN",
    title: "Architect Tailored Solutions & Roadmap",
    summary: "We engineer a practical, scalable solution blueprint that fits seamlessly into your operations without causing organizational shock.",
    activities: [
      "Modular system and integration architecture",
      "User journey & administrative interface wireframing",
      "Security, privacy, and compliance framework design",
      "Phased implementation timeline & milestone planning"
    ],
    deliverable: "Solution Architecture Blueprint & Phased Roadmap"
  },
  {
    number: "04",
    step: "IMPLEMENT",
    title: "Build, Integrate & Validate",
    summary: "Our engineering team develops, integrates, and rigorously tests your solution in iterative sprints with ongoing stakeholder demos and feedback.",
    activities: [
      "Agile software engineering and API development",
      "Legacy system data migration and sync testing",
      "End-to-end integration and security hardening",
      "User acceptance testing (UAT) and staff training"
    ],
    deliverable: "Production Deployment & Verified Working Solution"
  },
  {
    number: "05",
    step: "OPTIMIZE",
    title: "Monitor, Refine & Scale",
    summary: "Technology adoption is a living journey. We continuously monitor system telemetry, user feedback, and throughput to drive continuous improvement.",
    activities: [
      "System health and performance telemetry tracking",
      "Post-launch workflow optimization & fine-tuning",
      "Regular strategic review sessions",
      "Continuous feature iteration as business volume scales"
    ],
    deliverable: "Continuous Optimization Reports & Partnership SLA"
  }
];

export const WHY_REASONS: WhyReason[] = [
  {
    number: "01",
    title: "Business-First Approach",
    description: "We start by understanding your real business challenges, profit margins, and operational bottlenecks before writing a single line of code or recommending technology.",
    keyFeature: "Zero tech-for-the-sake-of-tech. We prioritize measurable operational outcomes over industry buzzwords.",
    iconName: "Target"
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description: "Your business has unique competitive advantages. We engineer solutions around your actual workflows rather than forcing you into rigid cookie-cutter software.",
    keyFeature: "Custom-fit architecture built around your exact organizational processes and data models.",
    iconName: "Sliders"
  },
  {
    number: "03",
    title: "Practical AI Adoption",
    description: "We focus on pragmatic, reliable AI applications that reduce manual workload and drive tangible business value — avoiding unstable hype or unreliable demos.",
    keyFeature: "Deterministic, secure, and production-tested AI models with human-in-the-loop oversight.",
    iconName: "CheckCircle2"
  },
  {
    number: "04",
    title: "Seamless Integration",
    description: "You don't need to rip and replace everything. We connect, enhance, and modernize your existing software, ERPs, and databases whenever appropriate.",
    keyFeature: "Maximize the value of your existing infrastructure investments while eliminating friction.",
    iconName: "Share2"
  },
  {
    number: "05",
    title: "Scalable Architecture",
    description: "Every solution is engineered with enterprise-grade security, modular architecture, and scalability so it effortlessly accommodates 10x business growth.",
    keyFeature: "Future-proof foundations that adapt gracefully to higher transaction volumes and teams.",
    iconName: "ShieldCheck"
  },
  {
    number: "06",
    title: "Long-term Partnership",
    description: "We view digital transformation as an ongoing competitive advantage. We provide proactive monitoring, system evolution, and long-term technical guidance.",
    keyFeature: "A reliable technology ally committed to your company's multi-year operational success.",
    iconName: "Handshake"
  }
];

