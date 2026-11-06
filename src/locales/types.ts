export type Locale = "en" | "vi" | "zh";

export interface NavigationContent {
  home: string;
  about: string;
  solutions: string;
  industries: string;
  approach: string;
  contact: string;
  cta: string;
  tagline: string;
}

export interface HeroContent {
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineHighlight: string;
  description: string;
  descriptionSub: string;
  primaryCta: string;
  secondaryCta: string;
  stats: {
    stat1Title: string;
    stat1Desc: string;
    stat2Title: string;
    stat2Desc: string;
    stat3Title: string;
    stat3Desc: string;
  };
  scrollText: string;
  ecosystem: {
    coreTitle: string;
    coreSub: string;
    coreStatus: string;
    liveStatusText: string;
    capabilityText: string;
    nodes: {
      id: string;
      label: string;
      category: string;
      stat?: string;
      sub?: string;
      title: string;
      description: string;
      metrics: string;
      tag: string;
    }[];
  };
}

export interface ChallengeItem {
  id: string;
  number: string;
  title: string;
  problem: string;
  businessImpact: string[];
  potentialSolution: string;
  iconName: string;
}

export interface ChallengesContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  subDescription: string;
  items: ChallengeItem[];
  bannerQuestion: string;
  bannerDesc: string;
  bannerCta: string;
}

export interface SolutionItem {
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

export interface SolutionsContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: SolutionItem[];
  capabilitiesLabel: string;
  businessValueLabel: string;
  implementationLabel: string;
  exploreCta: string;
  philosophyQuote: string;
  philosophyAuthor: string;
}

export interface TransformationContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  currentState: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    footer: string;
  };
  engine: {
    badge: string;
    engineTag: string;
    title: string;
    subtitle: string;
    steps: { num: number; title: string; detail: string }[];
    footer: string;
  };
  futureState: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    footer: string;
  };
  flowSteps: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  capabilities: string[];
  transformationImpact: string;
}

export interface IndustriesContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: IndustryItem[];
  sectorCapabilityLabel: string;
  systemsWeBuildLabel: string;
  impactLabel: string;
  customizationNote: string;
  discussCta: string;
  disclaimer: string;
}

export interface UseCaseItem {
  id: string;
  number: string;
  title: string;
  category: string;
  scenario: string;
  problem: string;
  solutionBreakdown: string[];
  expectedValue: string;
  iconName: string;
}

export interface UseCasesContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: UseCaseItem[];
  blueprintBadge: string;
  situationLabel: string;
  problemLabel: string;
  expectedValueLabel: string;
  howItWorksLabel: string;
  ctaPrompt: string;
  ctaButton: string;
  disclaimer: string;
}

export interface ApproachStepItem {
  number: string;
  step: string;
  title: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface ApproachContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: ApproachStepItem[];
  activitiesLabel: string;
  deliverableLabel: string;
  deliverableNote: string;
  stepCounter: string;
  nextStepBtn: string;
}

export interface WhyReasonItem {
  number: string;
  title: string;
  description: string;
  keyFeature: string;
  iconName: string;
}

export interface WhyContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: WhyReasonItem[];
  commitmentLabel: string;
  statementBadge: string;
  statementTitle: string;
  statementDesc: string;
}

export interface QuizContent {
  badge: string;
  title: string;
  subtitle: string;
  stepsLabel: string[];
  questions: {
    q1: {
      question: string;
      options: { label: string; val: string }[];
    };
    q2: {
      question: string;
      options: { label: string; val: string }[];
    };
    q3: {
      question: string;
      options: { label: string; val: string }[];
    };
  };
  results: {
    badge: string;
    title: string;
    description: string;
    phase1Label: string;
    phase1Val: string;
    impactLabel: string;
    impactVal: string;
    ctaSchedule: string;
    ctaRetake: string;
  };
}

export interface FinalCTAContent {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  assurances: {
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  form: {
    badge: string;
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    servicesList: { label: string; val: string }[];
    challengeLabel: string;
    challengePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    privacyNote: string;
  };
  success: {
    badge: string;
    title: string;
    message: string;
    statusText: string;
  };
}

export interface ModalContent {
  badge: string;
  title: string;
  subtitle: string;
  nameLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  companyLabel: string;
  serviceLabel: string;
  servicesList: { label: string; val: string }[];
  notesLabel: string;
  notesPlaceholder: string;
  submitBtn: string;
  submittingBtn: string;
  ndaNote: string;
  responseNote: string;
  successBadge: string;
  successTitle: string;
  successDesc: string;
  statusText: string;
  doneBtn: string;
}

export interface FooterContent {
  brandDesc: string;
  taglineBadge: string;
  tagline: string;
  supportingStatement: string;
  solutionsTitle: string;
  industriesTitle: string;
  approachTitle: string;
  security: string;
  privacy: string;
  rightsReserved: string;
}

export interface TranslationDictionary {
  nav: NavigationContent;
  hero: HeroContent;
  challenges: ChallengesContent;
  solutions: SolutionsContent;
  transformation: TransformationContent;
  industries: IndustriesContent;
  useCases: UseCasesContent;
  approach: ApproachContent;
  why: WhyContent;
  quiz: QuizContent;
  finalCta: FinalCTAContent;
  modal: ModalContent;
  footer: FooterContent;
}

