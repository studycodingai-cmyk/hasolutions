import { TranslationDictionary } from "./types";

export const en: TranslationDictionary = {
  nav: {
    home: "Home",
    about: "About Us",
    solutions: "Solutions",
    industries: "Industries",
    approach: "Our Approach",
    contact: "Contact",
    cta: "Schedule a Consultation",
    tagline: "DIGITAL TRANSFORMATION",
  },
  hero: {
    badge: "YOUR DIGITAL TRANSFORMATION PARTNER",
    headlineLine1: "Transform",
    headlineLine2: "Your Business.",
    headlineHighlight: "Unlock Your Potential.",
    description:
      "From disconnected systems and manual processes to intelligent, automated operations.",
    descriptionSub:
      "HA-SOLUTIONS helps businesses modernize their operations, simplify workflows, and unlock growth through digital transformation, AI, and intelligent technology.",
    primaryCta: "Schedule a Free Consultation",
    secondaryCta: "Explore Our Solutions",
    stats: {
      stat1Title: "Enterprise",
      stat1Desc: "Reliable Architecture",
      stat2Title: "Practical",
      stat2Desc: "Real Business AI",
      stat3Title: "End-to-End",
      stat3Desc: "Full Transformation",
    },
    scrollText: "SCROLL TO EXPLORE",
    ecosystem: {
      coreTitle: "HA-SOLUTIONS",
      coreSub: "ENTERPRISE CORE",
      coreStatus: "ACTIVE SYSTEM",
      liveStatusText: "Live Node Status",
      capabilityText: "Capability",
      nodes: [
        {
          id: "ai",
          label: "AI & ML",
          category: "Autonomous Systems",
          stat: "99.9%+",
          sub: "MODEL PRECISION",
          title: "Enterprise AI & Multi-Agent Systems",
          description:
            "Autonomous reasoning agents, domain-specific fine-tuning, and document intelligence with human verification gates.",
          metrics: "99.9%+ Uptime & Guardrails",
          tag: "Agentic AI",
        },
        {
          id: "integration",
          label: "INTEGRATION",
          category: "Unified Operations",
          title: "Bi-Directional System Integration",
          description:
            "Eliminate data silos by interconnecting ERP, CRM, legacy databases, and SaaS tools via event-driven APIs.",
          metrics: "Zero Manual Re-Keying",
          tag: "API Middleware",
        },
        {
          id: "cloud",
          label: "CLOUD",
          category: "Infrastructure",
          stat: "10x",
          sub: "DATA THROUGHPUT",
          title: "Resilient Cloud Architecture",
          description:
            "Fault-tolerant microservices, zero-downtime deployments, and elastic scalability engineered for high transaction loads.",
          metrics: "99.99% Availability",
          tag: "Cloud Native",
        },
        {
          id: "analytics",
          label: "DATA & ANALYTICS",
          category: "Business Intelligence",
          title: "Real-Time Executive Intelligence",
          description:
            "Unified data pipelines, predictive forecasting, and interactive operational BI dashboards for informed decision-making.",
          metrics: "Live Real-Time Telemetry",
          tag: "Data Pipeline",
        },
        {
          id: "automation",
          label: "AUTOMATION",
          category: "Intelligent Workflows",
          stat: "60%+",
          sub: "OPS COST REDUCTION",
          title: "End-to-End Workflow Automation",
          description:
            "Turn multi-step human approvals, reconciliations, and filing chores into self-triggering automated digital pipelines.",
          metrics: "60%+ Routine Overhead Reduced",
          tag: "Process Automation",
        },
        {
          id: "software",
          label: "SOFTWARE",
          category: "Engineering",
          title: "Custom Enterprise Software",
          description:
            "Bespoke internal platforms, customer portals, and high-performance workflow engines tailored to proprietary business models.",
          metrics: "Tailored Architecture",
          tag: "Custom Engineering",
        },
      ],
    },
  },
  challenges: {
    badge: "OPERATIONAL REALITY CHECK",
    title1: "Your Business Is Growing.",
    title2: "Are Your Processes Keeping Up?",
    description:
      "As businesses grow, operational complexity grows with them. Manual processes, disconnected systems, fragmented data, and inefficient workflows can prevent organizations from reaching their full potential.",
    subDescription:
      "The right technology can turn these challenges into opportunities.",
    bannerQuestion: "Recognize any of these operational friction points?",
    bannerDesc:
      "We conduct an initial process audit to pinpoint your highest-ROI automation and integration priorities.",
    bannerCta: "Request a Process Audit",
    items: [
      {
        id: "manual-work",
        number: "01",
        title: "Manual & Repetitive Work",
        problem:
          "Employees spend valuable hours every day on repetitive manual tasks such as data entry, report preparation, email communication, and administrative paperwork.",
        businessImpact: [
          "Reduced workforce productivity & burnout",
          "Higher operational costs & overhead",
          "Increased rate of human error and rework",
          "Less time for high-value strategic activities",
        ],
        potentialSolution: "Workflow Automation & AI Agents",
        iconName: "Clock",
      },
      {
        id: "disconnected-systems",
        number: "02",
        title: "Disconnected Business Systems",
        problem:
          "Business information is scattered across isolated spreadsheets, SaaS applications, and legacy platforms that do not communicate with each other.",
        businessImpact: [
          "Costly duplicate data entry across tools",
          "Inconsistent and out-of-sync information",
          "Difficult and error-prone data synchronization",
          "Fragmented, siloed business operations",
        ],
        potentialSolution: "System Integration & Centralized Data Management",
        iconName: "Network",
      },
      {
        id: "operational-visibility",
        number: "03",
        title: "Lack of Operational Visibility",
        problem:
          "Business executives and managers struggle to track cross-department performance, monitor live operations, and access accurate information for decision-making.",
        businessImpact: [
          "Slow and hesitant decision-making cycles",
          "Limited real-time performance visibility",
          "Blind spots in operational monitoring",
          "Delayed, stale month-end reporting",
        ],
        potentialSolution: "Business Intelligence & Analytics Dashboards",
        iconName: "BarChart3",
      },
      {
        id: "paper-processes",
        number: "04",
        title: "Paper-based Processes",
        problem:
          "Traditional paperwork, physical signatures, manual email approval chains, and disorganized file systems slow down standard business operations.",
        businessImpact: [
          "Bottlenecks in approval and sign-off processes",
          "Fragile document storage and compliance risk",
          "Severe delays in information retrieval",
          "High administrative overhead and filing costs",
        ],
        potentialSolution: "Digital Workflow & Document Management",
        iconName: "FileText",
      },
      {
        id: "inefficient-customer-ops",
        number: "05",
        title: "Inefficient Customer Operations",
        problem:
          "Customer service, sales inquiries, and follow-ups depend too heavily on manual handling, leading to delayed replies and inconsistent communication.",
        businessImpact: [
          "Slow response times causing lost sales",
          "Inconsistent customer support experiences",
          "Overwhelming repetitive inquiry volume",
          "Missed lead conversion opportunities",
        ],
        potentialSolution: "AI Customer Support & CRM Automation",
        iconName: "Users",
      },
      {
        id: "difficult-to-scale",
        number: "06",
        title: "Difficult to Scale Operations",
        problem:
          "Legacy workflows and improvised spreadsheets reach their breaking point as transaction volume, team headcount, and customer demands multiply.",
        businessImpact: [
          "Severe operational bottlenecks under load",
          "Inability to expand into new markets",
          "Exponentially rising administrative headcount",
          "Difficult coordination between business units",
        ],
        potentialSolution: "Scalable Business Applications & Enterprise Systems",
        iconName: "TrendingUp",
      },
    ],
  },
  solutions: {
    badge: "OUR CORE CAPABILITIES",
    title1: "Technology That Solves",
    title2: "Real Business Problems.",
    description:
      "Every business has different challenges. We design practical technology solutions that fit your operations, support your objectives, and grow with your organization.",
    capabilitiesLabel: "Key Capabilities:",
    businessValueLabel: "BUSINESS VALUE",
    implementationLabel: "Enterprise Implementation",
    exploreCta: "Explore Service",
    philosophyQuote:
      '"We believe technology should solve real problems, not create unnecessary complexity. Our implementations prioritize operational reliability, security, and measurable commercial return."',
    philosophyAuthor: "The HA-SOLUTIONS Engineering Standard",
    items: [
      {
        id: "digital-transformation",
        number: "01",
        title: "Digital Transformation",
        headline: "Modernize Core Workflows into Structured Digital Operations",
        description:
          "Modernize traditional business operations by turning manual, fragmented, and paper-based processes into structured, auditable digital workflows.",
        capabilities: [
          "Business Process Digitization",
          "Custom Business Applications",
          "Internal Management Systems",
          "Digital Document Management",
          "Workflow Management Platforms",
          "Executive Business Dashboards",
          "Operational Management Portals",
        ],
        businessValue:
          "Simplify complex operations, eliminate process blind spots, and create a scalable, structured working environment across your entire workforce.",
        accentColor: "cyan",
        iconName: "Sparkles",
      },
      {
        id: "ai-solutions",
        number: "02",
        title: "AI Solutions & Intelligent Automation",
        headline: "Empower Your Team with Autonomous Intelligence",
        description:
          "Apply artificial intelligence and intelligent automation to reduce repetitive work, improve speed of execution, and unlock new operational capabilities.",
        capabilities: [
          "AI-Powered Business Assistants",
          "Autonomous AI Agents for Operations",
          "Intelligent Document Processing (IDP)",
          "AI Customer Support & Smart Routing",
          "Enterprise Knowledge Assistants",
          "Automated AI Reporting & Summaries",
          "Intelligent Workflow Automation",
          "Multi-Agent Collaborative Systems",
        ],
        businessValue:
          "Radically cut manual workload, accelerate information processing by 10x, and allow knowledge workers to focus on strategic client growth.",
        accentColor: "teal",
        iconName: "Cpu",
      },
      {
        id: "system-integration",
        number: "03",
        title: "System Integration",
        headline: "Unify Your Disconnected Software Ecosystem",
        description:
          "Connect existing business applications, databases, cloud platforms, and third-party tools into a coherent, seamlessly communicating operational ecosystem.",
        capabilities: [
          "Enterprise API Integration",
          "CRM & ERP Deep Integration",
          "Third-Party SaaS Platform Connectors",
          "Bi-directional Data Synchronization",
          "Legacy System Modernization",
          "Cross-Platform Event Communication",
          "Enterprise Application Connectivity",
        ],
        businessValue:
          "Eliminate disconnected workflows, remove duplicate data entry forever, and ensure every department works with unified, accurate ground truth.",
        accentColor: "sky",
        iconName: "Workflow",
      },
      {
        id: "custom-software",
        number: "04",
        title: "Custom Software Development",
        headline: "Tailored Architecture Built for Your Exact Business Logic",
        description:
          "Design and develop high-performance software engineered specifically around your company's proprietary requirements, security needs, and operational workflows.",
        capabilities: [
          "Custom Enterprise Web Applications",
          "Scalable Cloud-Native Architecture",
          "Internal Operations Platforms",
          "Secure Client & Partner Portals",
          "Custom Workflow Engine Development",
          "High-Performance Database Design",
          "Enterprise-Grade Security & RBAC",
        ],
        businessValue:
          "Build technology around your proven competitive advantages instead of forcing your organization to compromise on off-the-shelf software.",
        accentColor: "cyan",
        iconName: "Code2",
      },
    ],
  },
  transformation: {
    badge: "THE TRANSFORMATION JOURNEY",
    title1: "From Business Challenges to",
    title2: "Intelligent Operations.",
    description:
      "Successful digital transformation is a structured transition. We take organizations from fragmented, manual pain points to connected, future-ready business ecosystems.",
    currentState: {
      badge: "CURRENT STATE",
      title: "Operational Inefficiencies",
      subtitle:
        "Fragmented workflows that limit team capacity and slow down business momentum.",
      items: [
        {
          title: "Manual Operations",
          desc: "Labor-intensive manual data entry and paperwork",
        },
        {
          title: "Disconnected Systems",
          desc: "Isolated spreadsheets and incompatible software",
        },
        {
          title: "Fragmented Data",
          desc: "No single source of truth across departments",
        },
        {
          title: "Repetitive Tasks",
          desc: "Valuable time wasted on low-value routines",
        },
        {
          title: "Limited Visibility",
          desc: "Blind spots in daily operational performance",
        },
        {
          title: "Inefficient Workflows",
          desc: "Lengthy approval bottlenecks and delayed handoffs",
        },
      ],
      footer: "High friction • Stagnant growth • Siloed data",
    },
    engine: {
      badge: "HA-SOLUTIONS",
      engineTag: "The Transformation Engine",
      title: "Structured Intervention",
      subtitle:
        "Our multidisciplinary engineering and consulting methodology that drives lasting results.",
      steps: [
        {
          num: 1,
          title: "Understand Business Requirements",
          detail: "Deep dive into goals, team workflows, and commercial priorities.",
        },
        {
          num: 2,
          title: "Analyze Existing Processes",
          detail: "Map bottlenecks, redundant steps, and data exchange gaps.",
        },
        {
          num: 3,
          title: "Design the Right Solution",
          detail: "Architect custom software, integrations, and automation roadmaps.",
        },
        {
          num: 4,
          title: "Integrate Digital Technologies",
          detail: "Connect databases, legacy systems, and modern APIs cleanly.",
        },
        {
          num: 5,
          title: "Implement Automation & AI",
          detail: "Deploy intelligent agents, automated routing, and validation tools.",
        },
        {
          num: 6,
          title: "Optimize and Improve Continuously",
          detail:
            "Measure system throughput and refine workflows as the business scales.",
        },
      ],
      footer: "Rigorous Architecture • Zero Vendor Lock-in",
    },
    futureState: {
      badge: "FUTURE STATE",
      title: "Intelligent Operations",
      subtitle:
        "Scalable, automated, and connected foundation ready for continuous business growth.",
      items: [
        {
          title: "Streamlined Workflows",
          desc: "Eliminate bottlenecks with standardized digital execution",
        },
        {
          title: "Connected Systems",
          desc: "Unified data synchronization across all applications",
        },
        {
          title: "Centralized Information",
          desc: "Single source of verified truth accessible to authorized teams",
        },
        {
          title: "Reduced Manual Work",
          desc: "Routine tasks handled autonomously by automation & AI",
        },
        {
          title: "Better Operational Visibility",
          desc: "Real-time executive dashboards and live performance tracking",
        },
        {
          title: "Smarter Business Decisions",
          desc: "Accurate, timely information enabling confident strategic moves",
        },
      ],
      footer: "Agile • Connected • Scalable • Data-driven",
    },
    flowSteps: [
      "Analyze Challenges",
      "Engineer Tailored Architecture",
      "Deploy Automation & AI",
      "Achieve Sustainable Growth",
    ],
  },
  industries: {
    badge: "INDUSTRY-FOCUSED SOLUTIONS",
    title1: "Technology Solutions for",
    title2: "Every Business.",
    description:
      "Different industries face different operational challenges. We adapt our technology solutions to the specific needs, workflows, and objectives of each organization.",
    sectorCapabilityLabel: "SECTOR CAPABILITY",
    systemsWeBuildLabel: "Tailored Systems We Build:",
    impactLabel: "TRANSFORMATION IMPACT",
    customizationNote:
      "Customized for compliance, system security, and proprietary sector business logic.",
    discussCta: "Discuss Solutions",
    disclaimer:
      "* Solutions are adapted to each client's specific operational requirements, workflows, and regulatory constraints.",
    items: [
      {
        id: "education",
        name: "Education & Training",
        tagline:
          "Modernizing student lifecycles, administrative operations, and intelligent learning systems.",
        iconName: "GraduationCap",
        capabilities: [
          "Learning Management Systems (LMS)",
          "Student Information Management",
          "Automated Scheduling & Class Management",
          "AI Tutoring & Learning Assistants",
          "Administrative Workflow Automation",
        ],
        transformationImpact:
          "Replaces manual student record management and fragmented communications with a centralized, automated digital campus experience.",
      },
      {
        id: "retail",
        name: "Retail & E-commerce",
        tagline:
          "Connecting omnichannel sales, inventory accuracy, and automated customer care.",
        iconName: "ShoppingCart",
        capabilities: [
          "Real-time Inventory Management",
          "Automated Order Processing & Routing",
          "Omnichannel CRM Integration",
          "24/7 AI Customer Support Automation",
          "Predictive Sales & Demand Analytics",
        ],
        transformationImpact:
          "Eliminates stock discrepancies, syncs marketplace channels automatically, and accelerates customer inquiry resolution.",
      },
      {
        id: "healthcare",
        name: "Healthcare & Professional Services",
        tagline:
          "Securing patient records, streamlining appointments, and automating paperwork.",
        iconName: "HeartPulse",
        capabilities: [
          "Digital Appointment & Queue Management",
          "Compliant Digital Documentation",
          "Administrative Workflow Automation",
          "Clinical Information Management",
          "Inter-departmental Workflow Integration",
        ],
        transformationImpact:
          "Reduces patient wait times and administrative burden on healthcare staff while ensuring strict regulatory compliance.",
      },
      {
        id: "finance",
        name: "Finance & Accounting",
        tagline:
          "Accelerating reconciliation, document ingestion, and compliance reporting.",
        iconName: "Building2",
        capabilities: [
          "Intelligent Document Processing for Invoices",
          "Automated Financial Reporting & Month-End",
          "Multi-source Data Reconciliation",
          "Multi-level Approval Workflows",
          "Real-time Business Intelligence Dashboards",
        ],
        transformationImpact:
          "Transforms multi-day reconciliation chores into automated real-time audit trails with zero manual transposition errors.",
      },
      {
        id: "logistics",
        name: "Logistics & Supply Chain",
        tagline:
          "End-to-end freight visibility, automated dispatch, and warehouse synchronization.",
        iconName: "Truck",
        capabilities: [
          "Real-time Shipment & Milestone Tracking",
          "Cross-warehouse Inventory Synchronization",
          "Operational Dispatch Dashboards",
          "Carrier & Vendor Workflow Automation",
          "ERP & Customs System Integration",
        ],
        transformationImpact:
          "Provides continuous cargo visibility, flags logistical exceptions proactively, and eliminates paper dispatch manifests.",
      },
      {
        id: "manufacturing",
        name: "Manufacturing",
        tagline:
          "Digitizing shop-floor operations, production monitoring, and inventory flow.",
        iconName: "Factory",
        capabilities: [
          "Production Line Monitoring & Telemetry",
          "Automated Operational Shift Reporting",
          "Shop Floor Process Digitization",
          "Raw Materials & Inventory Management",
          "Shop Floor to ERP Data Integration",
        ],
        transformationImpact:
          "Bridges legacy industrial machinery with modern cloud dashboards to pinpoint manufacturing bottlenecks instantly.",
      },
      {
        id: "realestate",
        name: "Real Estate",
        tagline:
          "Unifying lead pipelines, lease document workflows, and property management.",
        iconName: "Home",
        capabilities: [
          "Specialized Real Estate CRM Systems",
          "Automated Lead Capture & Nurturing",
          "Digital Lease & Document Management",
          "Sales Pipeline Automation",
          "Portfolio Performance Business Reporting",
        ],
        transformationImpact:
          "Accelerates property lease and purchase closing cycles through instant digital document turnaround and automated follow-ups.",
      },
      {
        id: "professional",
        name: "Professional & Business Services",
        tagline:
          "Streamlining client onboarding, project billing, and centralized knowledge.",
        iconName: "Briefcase",
        capabilities: [
          "End-to-end Client Management Portals",
          "Internal Workflow & Task Automation",
          "Document Generation & Review Processing",
          "Enterprise Knowledge Management",
          "Custom Practice Management Applications",
        ],
        transformationImpact:
          "Enables consulting and legal practices to bill higher margins by automating non-billable administrative and onboarding tasks.",
      },
    ],
  },
  useCases: {
    badge: "PRACTICAL IMPLEMENTATIONS",
    title1: "See What's Possible When",
    title2: "Technology Works for You.",
    description:
      "Realistic scenarios demonstrating how digital transformation, system integration, and AI solve everyday operational bottlenecks.",
    blueprintBadge: "Illustrative Operational Blueprint",
    situationLabel: "The Business Situation",
    problemLabel: "Existing Friction Point",
    expectedValueLabel: "Expected Business Value",
    howItWorksLabel: "How The HA-SOLUTIONS System Works:",
    ctaPrompt: "Need a similar implementation in your company?",
    ctaButton: "Explore This Solution",
    disclaimer:
      "* Illustrative scenarios designed to demonstrate technology capabilities and operational architecture.",
    items: [
      {
        id: "customer-support",
        number: "01",
        title: "Intelligent Customer Support",
        category: "AI & Customer Operations",
        scenario:
          "A mid-sized company receives 500+ repetitive customer inquiries every day across email, chat, and tickets, overwhelming staff and delaying response times to high-value leads.",
        problem:
          "Customer service agents spend 70% of their workday copying standard answers, searching for tracking numbers, and verifying order statuses instead of resolving complex cases.",
        solutionBreakdown: [
          "Understands customer intent and inquiries in natural language with enterprise context",
          "Retrieves exact business information from verified documentation and knowledge bases",
          "Queries order, account, and shipping status through secure, authorized APIs",
          "Provides instant, human-grade answers 24/7 in multiple languages",
          "Seamlessly routes sensitive or escalated edge cases to the right human specialist with complete conversation context",
        ],
        expectedValue:
          "Faster customer response time (<10 seconds vs. 6 hours) and 65% reduction in routine support ticket volume.",
        iconName: "Headphones",
      },
      {
        id: "document-processing",
        number: "02",
        title: "Automated Document Processing",
        category: "Intelligent Automation",
        scenario:
          "Finance and logistics teams receive hundreds of vendor invoices, bills of lading, and purchase agreements in disparate PDF, image, and scanned email formats.",
        problem:
          "Employees spend hours manually typing vendor names, line items, tax IDs, and totals into accounting software, causing data entry bottlenecks and month-end closing delays.",
        solutionBreakdown: [
          "Ingests structured and unstructured documents directly from incoming email inboxes and SFTP servers",
          "Extracts critical metadata, line items, dates, and amounts using computer vision and LLM parsing",
          "Classifies document categories and validates totals against internal purchase orders",
          "Flags anomalies, discrepancies, or missing information for immediate human review",
          "Directly posts verified transactions into the accounting ERP without human manual typing",
        ],
        expectedValue:
          "90% faster document processing speed and near-zero transposition errors during month-end closing.",
        iconName: "FileSpreadsheet",
      },
      {
        id: "workflow-automation",
        number: "03",
        title: "Business Workflow Automation",
        category: "Process Digitalization",
        scenario:
          "Capital expenditure requests, vendor approvals, and cross-departmental handoffs rely on loose email chains, paper forms, and verbal agreements.",
        problem:
          "Requests stall for days in managerial inboxes, visibility into pending bottlenecks is non-existent, and compliance audits require days of manual file digging.",
        solutionBreakdown: [
          "Standardizes request intake through clean, validated digital forms",
          "Enforces role-based dynamic approval hierarchies and spending thresholds",
          "Automatically distributes notifications via email and team messaging channels",
          "Provides real-time dashboard tracking of every active request and approval timestamp",
          "Escalates stalled approvals automatically and logs immutable audit trails for compliance",
        ],
        expectedValue:
          "75% reduction in internal approval cycle times and full visibility into operational bottlenecks.",
        iconName: "GitMerge",
      },
      {
        id: "knowledge-assistant",
        number: "04",
        title: "Enterprise Knowledge Assistant",
        category: "Enterprise AI",
        scenario:
          "An organization has accumulated thousands of SOPs, technical guidelines, client contracts, and training materials scattered across Google Drive, SharePoint, and wikis.",
        problem:
          "Staff spend 4-6 hours per week searching for internal documentation or constantly interrupting senior staff to ask where information is located.",
        solutionBreakdown: [
          "Indexes approved internal knowledge repositories into a secure, private vector database",
          "Enforces strict employee role-based access permissions (RBAC) so sensitive data remains private",
          "Answers complex technical and operational questions in concise, natural language",
          "Cites exact document titles, page numbers, and direct source links for every statement",
          "Continuously synchronizes as internal documentation and policies are updated",
        ],
        expectedValue:
          "Instant discovery of internal company knowledge and 80% reduction in repeated internal questions to senior personnel.",
        iconName: "Bot",
      },
      {
        id: "system-integration",
        number: "05",
        title: "Connected Business Systems",
        category: "Enterprise Integration",
        scenario:
          "A business uses Shopify for e-commerce, Salesforce for enterprise sales, QuickBooks for finance, and an on-premise database for warehouse stock.",
        problem:
          "None of the applications talk to each other. Staff spend Friday afternoons copying customer data and order lines between three different web portals.",
        solutionBreakdown: [
          "Builds robust event-driven API middleware bridging cloud platforms and on-premise databases",
          "Synchronizes customer accounts, order statuses, and inventory counts in real time",
          "Automates notification dispatch and shipping label generation upon payment capture",
          "Eliminates duplicate record creation and cleanses customer data formatting",
          "Provides a centralized telemetry dashboard monitoring sync health and API throughput",
        ],
        expectedValue:
          "100% unified data flow across sales, warehouse, and accounting with zero manual re-keying.",
        iconName: "Layers",
      },
    ],
  },
  approach: {
    badge: "METHODOLOGY & EXECUTION",
    title1: "Every Business Is Different.",
    title2: "So Is Every Solution.",
    description:
      "We believe successful digital transformation starts with understanding the business, not choosing technology first.",
    activitiesLabel: "Key Activities in This Phase:",
    deliverableLabel: "TANGIBLE DELIVERABLE",
    deliverableNote:
      "Every phase produces documented blueprints, verifiable code checkpoints, and clear sign-offs before proceeding.",
    stepCounter: "Step",
    nextStepBtn: "Next Step",
    items: [
      {
        number: "01",
        step: "DISCOVER",
        title: "Understand the Business Foundation",
        summary:
          "We begin by immersing ourselves in your organization's core operations, strategic objectives, existing tooling, and underlying friction points.",
        activities: [
          "Executive stakeholder alignment interviews",
          "Current-state workflow & tooling audit",
          "Identification of operational bottlenecks & blind spots",
          "Definition of key business objectives & success metrics",
        ],
        deliverable: "Operational Assessment & Problem Definition Report",
      },
      {
        number: "02",
        step: "ANALYZE",
        title: "Diagnose Gaps & Value Opportunities",
        summary:
          "We dissect data flows, departmental dependencies, and process redundancies to quantify where automation and modern tech will deliver maximum return on investment.",
        activities: [
          "Detailed process flow and data mapping",
          "Legacy system dependency analysis",
          "Cost-of-inaction vs. ROI estimation",
          "Feasibility and technology compatibility evaluation",
        ],
        deliverable: "Gap Analysis & Technical Opportunity Matrix",
      },
      {
        number: "03",
        step: "DESIGN",
        title: "Architect Tailored Solutions & Roadmap",
        summary:
          "We engineer a practical, scalable solution blueprint that fits seamlessly into your operations without causing organizational shock.",
        activities: [
          "Modular system and integration architecture",
          "User journey & administrative interface wireframing",
          "Security, privacy, and compliance framework design",
          "Phased implementation timeline & milestone planning",
        ],
        deliverable: "Solution Architecture Blueprint & Phased Roadmap",
      },
      {
        number: "04",
        step: "IMPLEMENT",
        title: "Build, Integrate & Validate",
        summary:
          "Our engineering team develops, integrates, and rigorously tests your solution in iterative sprints with ongoing stakeholder demos and feedback.",
        activities: [
          "Agile software engineering and API development",
          "Legacy system data migration and sync testing",
          "End-to-end integration and security hardening",
          "User acceptance testing (UAT) and staff training",
        ],
        deliverable: "Production Deployment & Verified Working Solution",
      },
      {
        number: "05",
        step: "OPTIMIZE",
        title: "Monitor, Refine & Scale",
        summary:
          "Technology adoption is a living journey. We continuously monitor system telemetry, user feedback, and throughput to drive continuous improvement.",
        activities: [
          "System health and performance telemetry tracking",
          "Post-launch workflow optimization & fine-tuning",
          "Regular strategic review sessions",
          "Continuous feature iteration as business volume scales",
        ],
        deliverable: "Continuous Optimization Reports & Partnership SLA",
      },
    ],
  },
  why: {
    badge: "THE HA-SOLUTIONS ADVANTAGE",
    title1: "Technology Should Make Business Easier,",
    title2: "Not More Complicated.",
    description:
      "We bridge the divide between complex technology and commercial reality. Here is why forward-thinking companies choose to partner with HA-SOLUTIONS.",
    commitmentLabel: "OUR COMMITMENT",
    statementBadge: "SUPPORTING BRAND STATEMENT",
    statementTitle: '"Intelligent Solutions. Real Business Impact."',
    statementDesc:
      "HA-SOLUTIONS helps organizations simplify complex operations, digitize business processes, integrate existing systems, and leverage AI to create smarter ways of working.",
    items: [
      {
        number: "01",
        title: "Business-First Approach",
        description:
          "We start by understanding your real business challenges, profit margins, and operational bottlenecks before writing a single line of code or recommending technology.",
        keyFeature:
          "Zero tech-for-the-sake-of-tech. We prioritize measurable operational outcomes over industry buzzwords.",
        iconName: "Target",
      },
      {
        number: "02",
        title: "Tailored Technology Solutions",
        description:
          "Every business has its own operational workflows and unique challenges. We design and develop custom software systems, AI applications, and integration solutions tailored to real-world needs, rather than forcing inflexible off-the-shelf products.",
        keyFeature:
          "Solutions built upon real operational workflows, appropriate technology architecture, and scalable alongside your business growth.",
        iconName: "Sliders",
      },
      {
        number: "03",
        title: "Practical AI Adoption",
        description:
          "We focus on pragmatic, reliable AI applications that reduce manual workload and drive tangible business value — avoiding unstable hype or unreliable demos.",
        keyFeature:
          "Deterministic, secure, and production-tested AI models with human-in-the-loop oversight.",
        iconName: "CheckCircle2",
      },
      {
        number: "04",
        title: "Seamless Integration",
        description:
          "You don't need to rip and replace everything. We connect, enhance, and modernize your existing software, ERPs, and databases whenever appropriate.",
        keyFeature:
          "Maximize the value of your existing infrastructure investments while eliminating friction.",
        iconName: "Share2",
      },
      {
        number: "05",
        title: "Scalable Architecture",
        description:
          "Every solution is engineered with enterprise-grade security, modular architecture, and scalability so it effortlessly accommodates 10x business growth.",
        keyFeature:
          "Future-proof foundations that adapt gracefully to higher transaction volumes and teams.",
        iconName: "ShieldCheck",
      },
      {
        number: "06",
        title: "Long-term Partnership",
        description:
          "We view digital transformation as an ongoing competitive advantage. We provide proactive monitoring, system evolution, and long-term technical guidance.",
        keyFeature:
          "A reliable technology ally committed to your company's multi-year operational success.",
        iconName: "Handshake",
      },
    ],
  },
  quiz: {
    badge: "INTERACTIVE ASSESSMENT TOOL",
    title: "Evaluate Your Digital Readiness in 60 Seconds",
    subtitle:
      "Identify hidden operational bottlenecks and discover your highest-impact technology opportunities.",
    stepsLabel: ["Operations", "Systems", "Priority"],
    questions: {
      q1: {
        question:
          "1. How is your team currently handling day-to-day administrative and reporting tasks?",
        options: [
          {
            label: "Predominantly manual (spreadsheets, emails, paper forms)",
            val: "manual",
          },
          {
            label:
              "Mixed tools (several SaaS apps, but with heavy manual copy-pasting)",
            val: "mixed",
          },
          {
            label:
              "Modern tools exist, but lack structured automation and cross-team cohesion",
            val: "partial",
          },
        ],
      },
      q2: {
        question:
          "2. How seamlessly do your current software systems exchange customer & transaction data?",
        options: [
          {
            label: "Siloed: Different departments use separate apps that do not communicate",
            val: "siloed",
          },
          {
            label: "Basic CSV export / import routines done manually by staff",
            val: "export",
          },
          {
            label:
              "Some automated APIs exist, but frequently break or require constant maintenance",
            val: "fragile",
          },
        ],
      },
      q3: {
        question:
          "3. What is your company's highest strategic priority for the next 12 months?",
        options: [
          {
            label:
              "Automate repetitive workflows & document processing to free up staff",
            val: "automation",
          },
          {
            label:
              "Connect our disconnected business systems into a unified operational hub",
            val: "integration",
          },
          {
            label:
              "Deploy practical AI assistants & custom applications to scale revenue",
            val: "ai-scale",
          },
        ],
      },
    },
    results: {
      badge: "DIAGNOSTIC SUMMARY",
      title: "High Opportunity for Process Modernization",
      description:
        "Based on your responses, your organization would experience significant cost savings and capacity expansion by eliminating manual data silos and deploying structured workflow automation.",
      phase1Label: "Recommended Phase 1",
      phase1Val: "Workflow & System Integration Audit",
      impactLabel: "Targeted Impact",
      impactVal: "50%+ Reduction in Manual Overhead",
      ctaSchedule: "Schedule Consultation on This Roadmap",
      ctaRetake: "Retake Diagnostic",
    },
  },
  finalCta: {
    badge: "LET'S BUILD SOMETHING EXTRAORDINARY",
    title1: "Your Next Business",
    title2: "Transformation Starts Here.",
    description:
      "Whether you want to digitize existing processes, integrate disconnected systems, automate repetitive work, or explore the possibilities of AI, let's discuss how technology can help your organization thrive.",
    assurances: {
      item1Title: "30-Minute Architecture Consultation",
      item1Desc:
        "Direct conversation with experienced solution architects, not commissioned sales reps.",
      item2Title: "Strict Confidentiality (NDA Upfront)",
      item2Desc:
        "Your proprietary workflows, data models, and business strategies remain 100% confidential.",
      item3Title: "Practical Roadmap with Zero Obligation",
      item3Desc:
        "Actionable gap assessment and technical options tailored specifically to your budget and stack.",
    },
    form: {
      badge: "REQUEST AN EXECUTIVE BRIEFING",
      title: "Schedule a Consultation",
      nameLabel: "Your Full Name *",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Work Email Address *",
      emailPlaceholder: "alex@company.com",
      companyLabel: "Company / Organization *",
      companyPlaceholder: "Company Ltd.",
      serviceLabel: "Primary Area of Interest",
      servicesList: [
        { label: "Digital Transformation", val: "Digital Transformation" },
        {
          label: "AI Solutions & Intelligent Automation",
          val: "AI Solutions & Automation",
        },
        { label: "System Integration", val: "System Integration" },
        {
          label: "Custom Software Development",
          val: "Custom Software Development",
        },
        {
          label: "Process & Architecture Audit",
          val: "Process & Architecture Audit",
        },
      ],
      challengeLabel: "Tell us about your current operational challenge or goals",
      challengePlaceholder:
        "e.g. We have disconnected spreadsheets and manual document processing that we need to digitize and automate...",
      submitBtn: "Submit Consultation Request",
      submittingBtn: "Transmitting Consultation Request...",
      privacyNote: "Protected by enterprise NDA. We respond within 1 business day.",
    },
    success: {
      badge: "REQUEST RECEIVED",
      title: "Thank You",
      message:
        "A Senior Solutions Consultant at HA-SOLUTIONS will review your request and connect with you within one business day with an initial technical perspective.",
      dispatchedTo: "Consultation request routed to engineering inbox:",
    },
  },
  modal: {
    badge: "STRATEGIC ENGAGEMENT",
    title: "Schedule an Architecture Consultation",
    subtitle:
      "Connect with an enterprise technologist to discuss your operational challenges and feasibility.",
    nameLabel: "Full Name *",
    emailLabel: "Corporate Email *",
    companyLabel: "Company Name *",
    serviceLabel: "Primary Area",
    notesLabel: "Brief Overview of Your Objectives",
    notesPlaceholder:
      "Share any specific workflows, systems, or goals you'd like to modernize...",
    submitBtn: "Confirm Consultation Request",
    submittingBtn: "Scheduling Session...",
    ndaNote: "NDA Protected",
    responseNote: "1-Business-Day Response",
    successBadge: "CONFIRMATION",
    successTitle: "Consultation Requested",
    successDesc:
      "We have received your briefing details. Our architecture team will be in touch shortly.",
    doneBtn: "Done",
  },
  footer: {
    brandDesc:
      "HA-SOLUTIONS helps organizations simplify complex operations, digitize business processes, integrate existing systems, and leverage AI to create smarter ways of working.",
    taglineBadge: "BRAND TAGLINE",
    tagline: '"Transform Your Business. Unlock Your Potential."',
    supportingStatement: "Intelligent Solutions. Real Business Impact.",
    solutionsTitle: "SOLUTIONS",
    industriesTitle: "INDUSTRIES",
    approachTitle: "APPROACH",
    security: "Enterprise Security",
    privacy: "Privacy Framework",
    rightsReserved: "All rights reserved. Technology & Digital Transformation Partner.",
  },
};

