import { TranslationDictionary } from "./types";

export const zh: TranslationDictionary = {
  nav: {
    home: "首页",
    about: "关于我们",
    solutions: "解决方案",
    industries: "行业领域",
    approach: "实施流程",
    contact: "联系我们",
    cta: "预约战略咨询",
    tagline: "数字化转型技术伙伴",
  },
  hero: {
    badge: "企业数字化转型与智能技术伙伴",
    headlineLine1: "重塑业务流程.",
    headlineLine2: "赋能企业增长.",
    headlineHighlight: "激发无限潜能.",
    description:
      "从孤立分散的旧系统与繁琐的手工流程，走向端到端智能化、全面自动化的现代企业运营新范式。",
    descriptionSub:
      "HA-SOLUTIONS 携手企业推进业务现代化、流程精益化与架构升级，通过定制化数字化转型、企业级 AI 与前沿智能技术实现业务确定性增长。",
    primaryCta: "获取免费战略咨询",
    secondaryCta: "探索核心解决方案",
    stats: {
      stat1Title: "企业级",
      stat1Desc: "高可用弹性技术架构",
      stat2Title: "实战化",
      stat2Desc: "可量化的商业 AI 落地",
      stat3Title: "全链路",
      stat3Desc: "端到端交钥匙转型交付",
    },
    scrollText: "下滑探索",
    ecosystem: {
      coreTitle: "HA-SOLUTIONS",
      coreSub: "企业数字化中枢",
      coreStatus: "系统运行稳定",
      liveStatusText: "实时节点状态",
      capabilityText: "核心技术能力",
      nodes: [
        {
          id: "ai",
          label: "AI 与机器学习",
          category: "自主智能系统",
          stat: "99.9%+",
          sub: "模型推理精度",
          title: "企业级 AI 与多智能体系统",
          description:
            "自主推理智能体、垂直领域模型微调，以及具备人机协同安全审核护栏的企业级智能文档处理平台。",
          metrics: "99.9%+ 稳定运行与合规防护",
          tag: "Agentic AI",
        },
        {
          id: "integration",
          label: "系统深度集成",
          category: "统一运营协同",
          title: "双向数据流与企业级 API 中间件",
          description:
            "彻底消除数据孤岛，通过事件驱动 API 将 ERP、CRM、遗留数据库与现代 SaaS 平台无缝互通。",
          metrics: "100% 告别手工二次录入",
          tag: "API 中间件",
        },
        {
          id: "cloud",
          label: "弹性云架构",
          category: "基础设施",
          stat: "10x",
          sub: "数据吞吐效能",
          title: "高韧性分布式云原生架构",
          description:
            "微服务容灾高可用架构、零停机平滑部署，专为高并发交易与突发业务峰值设计。",
          metrics: "99.99% 服务可用性 SLA",
          tag: "Cloud Native",
        },
        {
          id: "analytics",
          label: "数据与商业智能",
          category: "商业智能 BI",
          title: "实时高管运营决策洞察看板",
          description:
            "端到端实时数据流管道、预测性业务建模与沉浸式 BI 数据大屏，为战略决策提供即时数字依据。",
          metrics: "实时全息数据流",
          tag: "数据管道",
        },
        {
          id: "automation",
          label: "流程超级自动化",
          category: "智能业务流",
          stat: "60%+",
          sub: "运营成本降低",
          title: "端到端业务流全自动化",
          description:
            "将繁杂的多级人工审批、财务对账与报表整理转化为自动化数字作业流水线。",
          metrics: "削减 60%+ 重复作业耗时",
          tag: "流程自动化",
        },
        {
          id: "software",
          label: "定制软件系统",
          category: "系统工程",
          title: "定制化企业核心软件系统",
          description:
            "针对企业专有业务逻辑量身定制的内部运营中台、客户协同门户与全流程数字化管理系统。",
          metrics: "独家专属定制架构",
          tag: "定制工程",
        },
      ],
    },
  },
  challenges: {
    badge: "企业运营现实洞察",
    title1: "业务规模正在高速扩张.",
    title2: "您的运营系统跟上了吗？",
    description:
      "当企业规模持续扩大，运营复杂度呈指数级上升。手工流程、系统割裂、数据孤岛与低效沟通将成为束缚企业盈利潜力的最大瓶颈。",
    subDescription:
      "引入量身定制的智能技术架构，即可将这些沉重负担转化为领先同行的核心竞争优势。",
    bannerQuestion: "您的企业当前是否也面临这些难以突破的运营痛点？",
    bannerDesc:
      "我们提供全面的业务流程诊断服务，帮助您精准锁定 ROI 最高的自动化与系统集成突破口。",
    bannerCta: "申请业务流程诊断",
    items: [
      {
        id: "manual-work",
        number: "01",
        title: "繁重的手工作业与重复劳动",
        problem:
          "核心团队每天消耗大量宝贵时间在表格手动录入、报表数据搬运、邮件人工收发与繁琐事务性审批中。",
        businessImpact: [
          "关键团队生产力受限，人效低下且疲劳感加剧",
          "运营与人力成本逐年攀升，吞噬利润空间",
          "人工操作失误率高，容易产生关键业务脏数据",
          "团队缺乏精力聚焦于业务开拓与客户经营",
        ],
        potentialSolution: "工作流超级自动化与定制 AI 智能体",
        iconName: "Clock",
      },
      {
        id: "disconnected-systems",
        number: "02",
        title: "孤岛式系统割裂，数据无法互通",
        problem:
          "客户数据分散在不同 Excel、孤立的 CRM、旧 ERP 以及各类独立软件中，彼此信息脱节，业务严重割裂。",
        businessImpact: [
          "各部门之间在不同软件间来回重复录入",
          "数据口径不一致，跨部门对账矛盾频发",
          "缺乏实时全局数据视图，无法做出精准预判",
          "业务流在部门交界处断层，协作效率极其缓慢",
        ],
        potentialSolution: "企业级 API 集成与统一数据中台",
        iconName: "Network",
      },
      {
        id: "operational-visibility",
        number: "03",
        title: "缺乏全局可视性与实时经营洞察",
        problem:
          "管理层难以实时掌控跨部门运转效率与财务现金流动态，日常决策往往依赖滞后数周的手工汇总报表。",
        businessImpact: [
          "商业决策迟缓，难以及时应对市场突发变动",
          "无法精准识别导致利润流失的隐性堵点",
          "部门绩效与业务进展缺乏可信数字度量",
          "月度/季度经营分析报表制作周期过长",
        ],
        potentialSolution: "实时商业智能看板与预测性分析",
        iconName: "BarChart3",
      },
      {
        id: "paper-processes",
        number: "04",
        title: "传统纸质流程与冗长审批流",
        problem:
          "纸质单据流转、手工签字盖章、冗长邮件群发以及分散归档，严重拖慢了日常业务推进节奏。",
        businessImpact: [
          "关键采购与付款流程在审批环节长期滞留",
          "合同文件易遗失，存在重大审计与合规风险",
          "历史档案检索极其耗时，协同阻力重重",
          "纸质打印、实物邮寄与仓储管理开销庞大",
        ],
        potentialSolution: "全流程数字凭证与无纸化智能归档",
        iconName: "FileText",
      },
      {
        id: "inefficient-customer-ops",
        number: "05",
        title: "客户服务与线索跟进响应迟缓",
        problem:
          "售前咨询接待、商机线索分发与售后响应过度依赖人工坐席，导致非工作时间响应断档、服务品质良莠不齐。",
        businessImpact: [
          "响应延误导致高价值潜在商机流向竞争对手",
          "客户体验参差不齐，复购率与净推荐值下滑",
          "坐席团队疲于应付 80% 高频基础重复咨询",
          "商机漏斗流失严重，难以精准沉淀客户资产",
        ],
        potentialSolution: "24/7 AI 智能客服中枢与 CRM 自动化流",
        iconName: "Users",
      },
      {
        id: "difficult-to-scale",
        number: "06",
        title: "系统脆弱，业务规模难以平滑扩张",
        problem:
          "东拼西凑的临时工具与缺乏顶层设计的土方法，一旦面临订单暴增或多区域扩张便迅速陷入崩溃瘫痪。",
        businessImpact: [
          "业务放量时爆发严重运营瓶颈与交付延误",
          "新市场、新业务线拓展受制于现有 IT 瓶颈",
          "管理管理费用与人员配置过度线性膨胀",
          "跨区域、多团队协同成本呈指数级失控",
        ],
        potentialSolution: "高内聚可伸缩企业级软件与标准化中台",
        iconName: "TrendingUp",
      },
    ],
  },
  solutions: {
    badge: "我们的核心服务能力",
    title1: "以务实技术解决",
    title2: "企业真实商业课题.",
    description:
      "每一家企业都有其独特的行业特性与业务壁垒。我们拒绝生搬硬套死板的标准化套件，而是为您的运营模式量身筑造高适配、高韧性、伴随企业共同演进的技术解决方案。",
    capabilitiesLabel: "核心交付能力清单：",
    businessValueLabel: "商业价值体现",
    implementationLabel: "企业级交付标准",
    exploreCta: "深入了解详情",
    philosophyQuote:
      '"我们坚信：技术的使命是解决真实商业问题，而不是制造不必要的复杂混乱。我们的解决方案始终将业务稳定性、数据合规安全与显著的投资回报率（ROI）置于首位。"',
    philosophyAuthor: "HA-SOLUTIONS 工程哲学标准",
    items: [
      {
        id: "digital-transformation",
        number: "01",
        title: "企业数字化转型",
        headline: "将传统低效操作重构为标准化数字运营流水线",
        description:
          "对传统业务流程进行系统性现代化再造，将分散、手工及基于纸质的作业模式升级为高协同、可量化、具备完整数字审计痕迹的现代业务流。",
        capabilities: [
          "核心业务流程端到端数字化",
          "企业级定制化业务应用研发",
          "内部一体化运营协同中台",
          "数字化档案与电子凭证管理",
          "跨部门任务调度协同引擎",
          "管理层经营全息决策看板",
          "安全合规的多角色权限矩阵",
        ],
        businessValue:
          "化繁为简，彻底消除业务流转中的操作盲区，构建敏捷、高效、易于跨团队规模化复制的现代化数字组织。",
        accentColor: "cyan",
        iconName: "Sparkles",
      },
      {
        id: "ai-solutions",
        number: "02",
        title: "专属定制技术解决方案",
        headline: "专为解决企业实际业务痛点而生的定制科技体系",
        description:
          "每一家企业都有独特的运作流程与业务痛点。我们深入现场设计与研发契合实际业务场景的软件系统、垂直行业 AI 智能体与跨平台集成方案，拒绝推销僵化且不合脚的标准化包装产品。",
        capabilities: [
          "业务驱动型软件工程研发",
          "场景化垂直领域 AI 算法微调",
          "企业专属自动化执行流程",
          "高弹性微服务技术中台",
          "异构老旧系统数据平滑打通",
          "企业全生命周期架构演进",
          "伴随业务发展的持续弹性扩展",
        ],
        businessValue:
          "方案完全立足于企业真实业务逻辑构建，兼具领先技术架构与无缝扩展能力，让技术真正转化为核心商业护城河。",
        accentColor: "teal",
        iconName: "Cpu",
      },
      {
        id: "system-integration",
        number: "03",
        title: "企业系统深度集成",
        headline: "连接割裂的软件孤岛，实现全局数据实时同频",
        description:
          "将企业现有存量软件、核心数据库、公有云基础设施与第三方 SaaS 平台无缝串联，打造浑然一体、数据零延迟交互的高效运转生态。",
        capabilities: [
          "企业级 API 网关设计与研发",
          "ERP 与 CRM 深度双向互通",
          "第三方供应链 SaaS 无缝直连",
          "全库双向数据实时可靠同步",
          "老旧核心遗留系统平滑现代化",
          "事件驱动型跨平台消息总线",
          "异构企业应用即插即用集成",
        ],
        businessValue:
          "彻底斩断跨系统断层，终结人工反复录入导致的错漏，确保企业所有部门时刻基于同一份最新真实数据协同工作。",
        accentColor: "sky",
        iconName: "Workflow",
      },
      {
        id: "custom-software",
        number: "04",
        title: "高端定制软件工程",
        headline: "完全贴合您专有商业逻辑量身定制的数字底座",
        description:
          "面向有严苛安全合规要求、特有业务逻辑与战略壁垒的企业，提供从架构咨询、UI/UX 体验设计到全栈落地的定制化软件开发服务。",
        capabilities: [
          "高性能高可用 Web 企业级中台",
          "敏捷弹性云原生（Cloud-Native）底座",
          "专属复杂业务流处理引擎",
          "面向客户与供应商的高安全门户",
          "高性能关系型与时序数据库优化",
          "高等级数据加密与颗粒度权限防护",
          "全生命周期自动化 CI/CD 交付体系",
        ],
        businessValue:
          "让软件完全适配并放大您的核心竞争壁垒，而不是强迫您的成熟团队去屈就功能残缺的外部通用软件。",
        accentColor: "cyan",
        iconName: "Code2",
      },
    ],
  },
  transformation: {
    badge: "数字化演进全景图",
    title1: "从深陷运营泥潭",
    title2: "迈向自驱动智能企业.",
    description:
      "成功的数字化转型是一段具有清晰阶段目标的工程化旅程。我们指引企业一步步跨越手工作业的瓶颈，稳健构筑面向未来的智能化生态中枢。",
    currentState: {
      badge: "现状阶段",
      title: "粗放割裂的运营困境",
      subtitle: "东拼西凑的作业方式严重制约员工潜能并拖累企业扩张步伐。",
      items: [
        {
          title: "全人工重度依赖",
          desc: "大量人力消耗在电子表格手工誊抄与纸张单据传递",
        },
        {
          title: "系统割裂各行其是",
          desc: "各类管理软件独立运行，彼此之间毫无数据联动",
        },
        {
          title: "数据碎片化孤岛",
          desc: "缺乏统一权威的数据源，各部门口径不一频发争执",
        },
        {
          title: "重复无价值搬运",
          desc: "高薪核心专业人才的时间被机械性的事务严重浪费",
        },
        {
          title: "运营盲区四伏",
          desc: "缺乏实时全局监控，无法实时洞悉业务流转卡点",
        },
        {
          title: "流程严重迟缓",
          desc: "审批链条冗长曲折，跨部门业务交接经常停摆延期",
        },
      ],
      footer: "高内耗摩擦 • 增长迟缓乏力 • 决策缺乏数据",
    },
    engine: {
      badge: "HA-SOLUTIONS",
      engineTag: "核心转型引擎",
      title: "结构化工程介入",
      subtitle: "融合严谨工程学方法论与深厚跨行业经验，确保成果确定性落地。",
      steps: [
        {
          num: 1,
          title: "业务真实诉求深度梳理",
          detail: "穿透表面现象，深度挖掘企业战略目标、核心商业模式与真实痛点。",
        },
        {
          num: 2,
          title: "全景流程诊断与瓶颈量化",
          detail: "绘制跨部门详细业务流与数据走向，精准测算自动化转型的 ROI 潜力。",
        },
        {
          num: 3,
          title: "量身定制技术架构方案",
          detail: "规划微服务架构、数据模型设计、系统集成拓扑及分步实施路线图。",
        },
        {
          num: 4,
          title: "核心系统无感深度集成",
          detail: "安全打通核心数据库、存量 ERP 软件及主流第三方云端标准 API。",
        },
        {
          num: 5,
          title: "智能化流程与 AI 赋能落地",
          detail: "部署场景化智能体、审批自动化规则引擎与智能数据对账质检网关。",
        },
        {
          num: 6,
          title: "数据驱动持续优化演进",
          detail: "持续监测系统吞吐量指标与业务反馈，伴随业务规模增长平滑扩容。",
        },
      ],
      footer: "标准企业级规范 • 开放架构 • 零厂商技术绑架",
    },
    futureState: {
      badge: "终态愿景",
      title: "敏捷自驱智能企业",
      subtitle: "自动化、全连接且极易弹性扩展的数字底盘，从容承载长期业务跃迁。",
      items: [
        {
          title: "精益极速工作流",
          desc: "消除流转障碍，实现多部门协同作业端到端秒级响应",
        },
        {
          title: "全局全域全连接",
          desc: "所有业务节点实时同频，上下游业务数据无缝即时互通",
        },
        {
          title: "权威唯一定理中台",
          desc: "为所有经授权的决策层与员工提供统一、精准的实时看板",
        },
        {
          title: "全面释放人力资本",
          desc: "重复机械工作由自动化流水线接管，员工聚焦创新业务",
        },
        {
          title: "全景全维运营可视",
          desc: "管理层可随时通过大屏掌握全公司现金流、交付与效能指标",
        },
        {
          title: "数据洞察辅助决策",
          desc: "基于实时准确的大数据与 AI 预测模型，决策底气十足",
        },
      ],
      footer: "敏捷弹性 • 全网互联 • 智能扩展 • 数据筑底",
    },
    flowSteps: [
      "深度业务诊断",
      "定制架构设计",
      "AI 与系统集成落地",
      "达成确定性增长",
    ],
  },
  industries: {
    badge: "垂直行业赋能方案",
    title1: "精准贴合行业特性的",
    title2: "数字化落地之道.",
    description:
      "不同行业具有截然不同的监管要求、业务逻辑与协作流程。我们为细分行业量体裁衣，让技术真正融入业务脉络。",
    sectorCapabilityLabel: "垂直行业核心技术能力",
    systemsWeBuildLabel: "我们专注研发的系统：",
    impactLabel: "转型效益提升",
    customizationNote:
      "严格依据不同行业的法律合规监管、数据安全准则与专有业务逻辑提供深度定制。",
    discussCta: "洽谈行业定制方案",
    disclaimer:
      "* 所有方案均根据企业的实际运营现状与相关法律合规要求量身定制落地。",
    items: [
      {
        id: "education",
        name: "教育与专业培训",
        tagline: "学员全生命周期数字化、教务办公自动化与智能混合式教学中台。",
        iconName: "GraduationCap",
        capabilities: [
          "定制学习管理系统（LMS）研发",
          "全生命周期学员学籍档案数字化中台",
          "排课算法与教室资源智能调度",
          "AI 专属学习伴学与答疑辅助系统",
          "招生线索转化与学费自动对账核验",
        ],
        transformationImpact:
          "彻底摆脱传统纸质与零碎表格档案，打造安全透明、智能集约、高效专业的现代化数字学堂体验。",
      },
      {
        id: "retail",
        name: "零售与跨境电商",
        tagline: "全渠道全域库存实时统一、订单高效分拨与全天候智能客户服务。",
        iconName: "ShoppingCart",
        capabilities: [
          "多仓多渠道全域实时库存中心",
          "智能订单自动化路由与物流拆分",
          "全渠道客户数据平台（CDP/CRM）",
          "7×24 小时全时段多语种 AI 导购与客服",
          "多维销售趋势预测与智能补货算法",
        ],
        transformationImpact:
          "根除线上线下渠道库存脱节超卖问题，多平台订单自动合单流转，客户服务秒级响应。",
      },
      {
        id: "healthcare",
        name: "医疗大健康与专业门诊",
        tagline: "高安全电子病历管理、智能就诊预约调度与日常行政流转自动化。",
        iconName: "HeartPulse",
        capabilities: [
          "多渠道分时段预约与排队叫号中枢",
          "高等级合规电子病历（EMR）系统",
          "门诊耗材申领与结算自动化流水线",
          "实验室检验数据（LIS）集成流转",
          "科室间患者诊疗数据安全互联互通",
        ],
        transformationImpact:
          "大幅压缩患者院内无谓等候时间，将医护团队从繁重的文档书写中解放出来，全力聚焦治病救人。",
      },
      {
        id: "finance",
        name: "金融科技与专业财会",
        tagline: "凭证票据自动识别校验、跨行多账户智能对账与合规风控报表。",
        iconName: "Building2",
        capabilities: [
          "基于 AI 的票据智能识别与验真（IDP）",
          "月度/季度财报自动化结转与一键出表",
          "多银行流水与交易数据跨源自动对账",
          "多层级智能预算控制与审批流转引擎",
          "高管实时现金流与流动性风险 BI 监控大屏",
        ],
        transformationImpact:
          "将需要数天人工对账核验的繁琐工作转变为近乎实时的全自动审计流，杜绝财务差错隐患。",
      },
      {
        id: "logistics",
        name: "现代物流与供应链",
        tagline: "全程可视化货运跟踪、跨区域多仓联动与运力资源自动化调度。",
        iconName: "Truck",
        capabilities: [
          "运单端到端轨迹高频实时监控",
          "分布式多仓分布式协同调度系统",
          "可视化智慧运力与装载匹配看板",
          "承运商协同平台与线上电子签收（e-POD）",
          "ERP 深度直连与报关数据自动申报接口",
        ],
        transformationImpact:
          "货物流向全链路清晰透明，异常滞留主动智能告警，全面取代脆弱的手工纸质交接凭证。",
      },
      {
        id: "manufacturing",
        name: "高端制造与工业生产",
        tagline: "车间生产节拍数字化、工单工时统计与物料全流程追踪溯源。",
        iconName: "Factory",
        capabilities: [
          "车间产线运行参数实时采集监控",
          "班次产量与设备停机异常一键报表",
          "现场作业指导书（SOP）数字化流转",
          "原材料批次追踪与在制品精细化盘点",
          "工单数据与企业 ERP/MES 实时同步",
        ],
        transformationImpact:
          "老旧工控设备与现代化云端监控无缝连接，产线瓶颈即刻显形，助力企业降本增效。",
      },
      {
        id: "realestate",
        name: "商业地产与资产管理",
        tagline: "高意向客户资产沉淀、电子租赁合同签署与资产经营收益分析。",
        iconName: "Home",
        capabilities: [
          "商业地产专业全流程租售 CRM",
          "多渠道拓客线索自动化清洗与派发",
          "租赁合同电子签约与租期租金预警",
          "中介经纪人佣金自动核算流水线",
          "商业物业出租率与收缴率经营看板",
        ],
        transformationImpact:
          "借助自动化电子合同与意向客户即时追踪，显著缩短签约交付周期，资产运营效益最大化。",
      },
      {
        id: "professional",
        name: "专业咨询与企业服务",
        tagline: "客户入驻全流程提速、精细化工时项目计费与企业专属智库。",
        iconName: "Briefcase",
        capabilities: [
          "客户协同与项目资料互通专属门户",
          "内部任务自动化派发与工时核算引擎",
          "合规法务文书与合同模板自动化生成",
          "企业专有知识资产库与智能检索中台",
          "项目里程碑交付管理与服务计费结算",
        ],
        transformationImpact:
          "帮助咨询、律所及各类专业服务机构削减无产出的事务性开销，专注高附加值核心交付。",
      },
    ],
  },
  useCases: {
    badge: "实战业务场景示例",
    title1: "探索当技术真正",
    title2: "为您所用时的无限可能.",
    description:
      "以下真实场景展示了通过数字化转型、系统深度集成与 AI 技术，如何精准化解企业日常面临的运营堵点。",
    blueprintBadge: "实战解决方案蓝图",
    situationLabel: "真实业务现状",
    problemLabel: "当下面临的运营堵点",
    expectedValueLabel: "预期可量化的商业回报",
    howItWorksLabel: "HA-SOLUTIONS 系统的运转逻辑：",
    ctaPrompt: "您的企业是否也面临相似的痛点？",
    ctaButton: "申请定制类似方案",
    disclaimer:
      "* 以上业务场景示意仅供阐明技术架构落地可行性与商业价值，具体功能依据企业实际需求定制。",
    items: [
      {
        id: "customer-support",
        number: "01",
        title: "全天候多语言智能客户服务助手",
        category: "AI 与客户运营",
        scenario:
          "一家中型出海与跨区域企业每天通过官网、社交媒体与邮件接收 500+ 条多语种咨询，客服团队不堪重负，关键 VIP 大客户经常得不到及时回复。",
        problem:
          "一线客服高达 70% 的精力消耗在机械性复制常见问题模板、手动查询物流系统与翻找产品规格书上，无暇跟进高意向商机。",
        solutionBreakdown: [
          "通过大语言模型精准解析客户用语意图，理解不同语种与行业专业术语",
          "毫秒级从企业经审核的官方知识库、政策手册与产品库中检索权威准确答案",
          "通过受保护的 API 接口实时调取客户账户资产状态、在途订单与最新物流轨迹",
          "全天候 24/7 提供自然、严谨、得体的高水准多语种应答服务",
          "遇复杂争议或大额商机时，自动附带完整历史会话上下文无缝转接至最合适的资深业务人员",
        ],
        expectedValue:
          "平均回复时间由过去的 6 小时骤降至 10 秒以内，同时过滤消除 65% 的常见人工工单负荷。",
        iconName: "Headphones",
      },
      {
        id: "document-processing",
        number: "02",
        title: "财务发票与纸质凭证智能流转中台",
        category: "智能超级自动化",
        scenario:
          "财务部与采购部每月必须集中处理数千份来自全球供应商的发票、签收单及合同，格式涵盖扫描件、手机拍照、PDF 与纸张单据。",
        problem:
          "财务人员必须加班逐字逐句核对并手动誊抄税号、明细金额与银行账号至财务软件，耗时费力且极易出现输错数字的合规风险。",
        solutionBreakdown: [
          "通过邮件机器人、SFTP 共享文件夹与移动拍照接口自动汇总各类凭证",
          "结合计算机视觉与定制文档大模型，毫秒级提取关键字段、税号、日期及多行列项明细",
          "自动匹配比对采购订单（PO）与系统合同，验证总金额与发票真伪一致性",
          "一旦发现金额不符或缺少必要附件，立刻在待办中心向负责人发出高亮预警",
          "校验无误的数据自动生成标准凭证写入 ERP 财务系统，全流程无需人工敲键盘二次录入",
        ],
        expectedValue:
          "单据处理效率提升 90% 以上，同时彻底清零因手工敲错数字导致的对账与审计纠纷。",
        iconName: "FileSpreadsheet",
      },
      {
        id: "workflow-automation",
        number: "03",
        title: "跨部门多级智能审批与业务协同流",
        category: "流程规范数字化",
        problem:
          "重要采购申请与财务预支单沉没在管理层的收件箱里，业务卡死却无人知晓堵在哪个节点，每逢财务审计查账如同大海捞针。",
        scenario:
          "固定资产申购、跨部门借支以及重大业务呈批过度依赖口头约定、纸质填表或冗长的邮件链条传递。",
        solutionBreakdown: [
          "通过具备格式校验的标准化表单，统一所有业务事项的申请入口与数据规范",
          "依据金额阈值、申请人所属部门及职务级别，动态激活智能路由多级审批路径",
          "自动通过邮件、企业微信等即时通讯工具向审批人推送一键审批卡片",
          "管理大屏实时展现每一张单据所处的具体环节、处理人与当前停留等待时长",
          "超时未处理自动触发分级催办机制，所有审批日志与签署时间戳永久存证备查",
        ],
        expectedValue:
          "将跨部门审批流转周期缩短 75%，同时实现组织内所有业务事项进度 100% 透明可溯。",
        iconName: "GitMerge",
      },
      {
        id: "knowledge-assistant",
        number: "04",
        title: "企业私有知识库与智能内控助手",
        category: "企业级 AI 智库",
        scenario:
          "企业历经多年积累了成千上万份技术规程、法务合同模版、培训手册与管理制度，散落在不同网盘、员工电脑及邮件附件中。",
        problem:
          "新员工平均每周要花 4-6 个小时到处找文件，或者不得不频繁打断核心业务骨干的工作来询问琐碎规章。",
        solutionBreakdown: [
          "将企业所有公开与受控文档安全向量化索引进私有安全向量知识数据库中",
          "实施严苛的企业级角色权限控制（RBAC），严格杜绝越权访问机密资料",
          "支持员工使用自然语言直接提问，即刻输出精炼、准确且贴合公司规章的专业答复",
          "每条回答均显式标注源文件的确切名称、章节及对应页码，支持一键溯源查验",
          "制度文件每次更新自动触发增量同步学习，确保全公司始终获取唯一最新版本",
        ],
        expectedValue:
          "内部规章检索效率提升至秒级，大幅减少老员工被重复问题打扰的时间达 80% 以上。",
        iconName: "Bot",
      },
      {
        id: "system-integration",
        number: "05",
        title: "全渠道全业务软件系统深度互联互通",
        category: "企业系统集成",
        scenario:
          "企业前台运营零售商城，中台使用国际知名 CRM 管理大客户，后台则依托定制财务软件与线下工厂库房系统。",
        problem:
          "各大系统完全独立割裂。每周五团队必须专门抽调人手，在几个互不通气的软件后台之间反复搬运录入订单。",
        solutionBreakdown: [
          "基于事件驱动机制搭建高可用企业 API 中间件，打通本地服务器与云端系统桥梁",
          "实现客户基础档案、订单流转状态及实际库存数量的毫秒级双向自动实时同频",
          "前台一旦付款成功，后台即刻自动触发运单打印并向终端客户发送通知短信",
          "内置强大的数据清洗引擎，自动规范手机号格式、修正地址错漏并去重合并客户记录",
          "中央监控台实时侦测各 API 链路健康度，遭遇网络波动自动智能重试并告警",
        ],
        expectedValue:
          "销售、仓储与财务之间的数据流转实现 100% 全流程自动化，彻底告别重复人工搬运。",
        iconName: "Layers",
      },
    ],
  },
  approach: {
    badge: "实施方法论与交付准则",
    title1: "每一家企业都有其独特基因.",
    title2: "技术解决方案更应量体裁衣.",
    description:
      "我们坚信：一次成功的数字化转型，始于对企业商业模式与核心壁垒的深刻理解，而非盲目跟风采购某种热门软件工具。",
    activitiesLabel: "本阶段核心执行事项：",
    deliverableLabel: "阶段实质性交付物",
    deliverableNote:
      "每个实施阶段均具备详尽的技术文档、严格的代码质量评审与双方共同签字验收的里程碑节点，确保推进确定性。",
    stepCounter: "阶段",
    nextStepBtn: "查看下一阶段",
    items: [
      {
        number: "01",
        step: "调研与诊断 (DISCOVER)",
        title: "深入业务肌理，理解商业全貌",
        summary:
          "我们深入企业一线，深度探究其核心商业模式、战略规划目标、现有软硬件环境以及团队日常面临的最紧迫挑战。",
        activities: [
          "与管理高层及核心业务部门主管展开深度一对一访谈，对齐预期目标",
          "实地勘察各部门现有业务流转过程与正在使用的所有软件工具链",
          "梳理现存关键瓶颈节点、潜在财务合规风险与信息断层点",
          "确立清晰量化的数字化转型目标及明确的衡量指标体系（KPIs）",
        ],
        deliverable: "企业数字化现状评估诊断报告与核心业务问题定义书",
      },
      {
        number: "02",
        step: "分析与对齐 (ANALYZE)",
        title: "定位业务堵点，量化重构价值",
        summary:
          "通过详尽剖析业务流程中的数据流动拓扑与跨部门交接逻辑，科学量化通过技术升级可获得的最高商业投资回报率（ROI）。",
        activities: [
          "测绘跨部门业务全景数据走向图与关键审批流转路径",
          "评估现有存量老系统的技术债务、对外扩展性及潜在兼容性风险",
          "对比维持当前低效手工作业的隐性消耗与实施技术自动化后的收益预估",
          "论证系统改造的技术可行性方案与数据安全合规准则",
        ],
        deliverable: "流程断点全景分析矩阵与自动化预期收益经济可行性测算模型",
      },
      {
        number: "03",
        step: "架构与蓝图 (DESIGN)",
        title: "设计专属技术架构与演进路线图",
        summary:
          "规划切实可行、具备高度弹性的技术架构蓝图与分阶段实施路径，确保新系统能够在不干扰日常生产经营的前提下平滑落地。",
        activities: [
          "设计高内聚低耦合的模块化系统架构、微服务拓扑与 API 规范",
          "绘制全套界面原型设计与沉浸式操作体验蓝图（UI/UX Wireframes）",
          "构建高等级数据安全保障框架、容灾备份机制及权限访问控制体系",
          "制定细化到周的敏捷迭代开发计划、里程碑排期与资源配置清单",
        ],
        deliverable: "全套技术解决方案架构设计书与数字化落地实施里程碑路线图",
      },
      {
        number: "04",
        step: "敏捷交付 (IMPLEMENT)",
        title: "严谨工程研发、深度集成与极限测试",
        summary:
          "资深工程师团队遵循敏捷开发标准，以快速交付的小迭代推进代码开发与系统集成，保持与客户管理团队的高频同步验证。",
        activities: [
          "遵循顶级行业标准的敏捷迭代代码编写与企业级 API 开发",
          "历史存量业务数据的清洗平滑迁移与多源双向对齐验证",
          "端到端集成测试、极限高并发压力测试与全维度安全渗透扫描",
          "组织用户验收测试（UAT）、关键岗位实操培训与完整知识转移交付",
        ],
        deliverable: "生产环境正式部署上线的数字化系统与完整技术交接文档",
      },
      {
        number: "05",
        step: "长效护航 (OPTIMIZE)",
        title: "系统健康监控、精细调优与演进护航",
        summary:
          "系统上线绝非终点，而是企业数字飞轮运转的开端。我们持续监测运行指标并搜集一线反馈，帮助企业持续挖掘效能上限。",
        activities: [
          "7×24 小时全时段系统运行负载监测与潜在故障主动排查告警",
          "根据真实业务跑通后的数据瓶颈，对数据库与算法规则精细化调优",
          "每季度与企业决策层召开数字化成效复盘会议，对齐下一阶段优化重点",
          "紧跟企业全球化扩张步伐，快速迭代扩充新系统能力与新模块",
        ],
        deliverable: "季度运营优化审计报告与高水准服务等级协议（SLA）保障",
      },
    ],
  },
  why: {
    badge: "为什么选择 HA-SOLUTIONS",
    title1: "技术应该让商业更加轻松,",
    title2: "而不是增添更多烦恼.",
    description:
      "我们致力于抹平高深复杂技术与真实商业利润之间的鸿沟。以下是众多成长型企业与行业翘楚坚定信赖 HA-SOLUTIONS 的核心理由。",
    commitmentLabel: "我们的庄严承诺",
    statementBadge: "品牌核心主张",
    statementTitle: '"务实智能方案. 创造确定价值."',
    statementDesc:
      "HA-SOLUTIONS 帮助现代企业化繁为简，重塑业务流程，打通割裂软件孤岛，并引入实用 AI 技术，构建更敏捷、更高效的现代化工作方式。",
    items: [
      {
        number: "01",
        title: "以商业价值为先的工程思维",
        description:
          "在编写任何一行代码或推荐任何一款架构前，我们始终将理解企业的商业模式、利润空间与真实运营瓶颈置于首位。",
        keyFeature:
          "拒绝为了技术而炫技的技术崇拜。我们只用实实在在的降本增效指标衡量自身交付价值。",
        iconName: "Target",
      },
      {
        number: "02",
        title: "量身定制的专属技术体系",
        description:
          "每家企业都有独一无二的业务护城河。我们为客户定制专属的软件架构、AI 应用与数据总线，坚决不向您推销功能残缺又笨重的通用模板软件。",
        keyFeature:
          "所有方案严格立足于您的实际业务流构建，架构先进且能伴随企业规模无限弹性扩容。",
        iconName: "Sliders",
      },
      {
        number: "03",
        title: "扎实可靠、可落地的实战 AI",
        description:
          "我们深耕于真正能够替代人工机械劳动、产生直接财务回报的实战型 AI 工具，远离华而不实且缺乏生产可用性的概念演示。",
        keyFeature:
          "模型经过极限业务测试，设置完备的人机审核双保险机制，确保 100% 安全可控。",
        iconName: "CheckCircle2",
      },
      {
        number: "04",
        title: "平滑承继现有存量资产",
        description:
          "数字化不代表将以往的软硬件投入全盘推倒重来。我们擅长在企业现存的核心系统之上搭建桥梁，实现利旧升级与资产最大化利用。",
        keyFeature:
          "最大化盘活既有 IT 基础设施投入，同时彻底消除跨系统协作的摩擦阻力。",
        iconName: "Share2",
      },
      {
        number: "05",
        title: "高可用企业级安全扩展架构",
        description:
          "每一套交付系统均遵循高等级信息安全规范打造，采用模块化设计，具备轻松承载企业未来 10 倍业务体量跃升的弹性扩展能力。",
        keyFeature:
          "坚如磐石的技术底座，自如应对高频海量交易与组织架构快速扩张需求。",
        iconName: "ShieldCheck",
      },
      {
        number: "06",
        title: "风雨同舟的长期战略伙伴",
        description:
          "我们将数字化转型视作一场持续进化的长跑。我们不仅负责系统开发，更为企业提供长期的前瞻技术咨询与全生命周期运维保障。",
        keyFeature:
          "做企业最值得托付后背的技术盟友，坚定致力于陪伴企业实现跨越式成长与成功。",
        iconName: "Handshake",
      },
    ],
  },
  quiz: {
    badge: "在线自测评估工具",
    title: "60 秒测测您企业的数字化成熟度与提效潜力",
    subtitle:
      "快速厘清潜在的运营堵点，发现能为贵司带来最高投资回报率的技术突破口。",
    stepsLabel: ["运营模式", "系统现状", "战略重心"],
    questions: {
      q1: {
        question:
          "1. 您的团队目前主要通过何种方式处理日常内部审批与跨部门报表？",
        options: [
          {
            label: "高度依赖人工操作（如各自独立的 Excel 表格、繁琐邮件与纸质单据）",
            val: "manual",
          },
          {
            label: "虽然采购了若干软件工具，但各部门间依然需要人工频繁复制粘贴数据",
            val: "mixed",
          },
          {
            label: "拥有相对完善的信息化系统，但各部门软件间彼此割裂，缺乏自动化流转",
            val: "partial",
          },
        ],
      },
      q2: {
        question:
          "2. 贵公司当前正在运行的各项业务软件之间，数据互通情况如何？",
        options: [
          {
            label: "完全孤岛化：各个部门各用各的独立系统，彼此数据完全不通",
            val: "siloed",
          },
          {
            label: "手工导出：先将 A 系统的 Excel/CSV 导出来，再人工导入整理到 B 系统",
            val: "export",
          },
          {
            label: "具备部分接口：存在一些定制接口，但故障频发且后期维护极为痛苦",
            val: "fragile",
          },
        ],
      },
      q3: {
        question:
          "3. 在未来 12 个月内，贵公司在技术改造方面的头号战略目标是什么？",
        options: [
          {
            label: "实现高频重复流程与单据审批的全面自动化，彻底释放员工生产力",
            val: "automation",
          },
          {
            label: "彻底打通所有分散软件与数据孤岛，建立企业统一的实时经营看板",
            val: "integration",
          },
          {
            label: "深度引入实用 AI 智能体与定制化中台系统，倍增服务能力并扩大业务规模",
            val: "ai-scale",
          },
        ],
      },
    },
    results: {
      badge: "初步评估诊断结果",
      title: "您的企业蕴藏着极高的运营优化与降本潜力",
      description:
        "依据您的测评选项，贵公司通过破除数据孤岛、建立结构化流程超级自动化，预计可显著缩减不必要的经常性运营支出，并极大拓宽产能承载上限。",
      phase1Label: "首期推荐实施路径",
      phase1Val: "端到端业务流诊断与系统集成拓扑规划",
      impactLabel: "预期达成效益指标",
      impactVal: "削减 50%+ 机械性人工操作耗时",
      ctaSchedule: "与架构师预约探讨该实施路线",
      ctaRetake: "重新测试评估",
    },
  },
  finalCta: {
    badge: "携手开创卓越商业新格局",
    title1: "属于您的数字化跃迁,",
    title2: "从这里正式启航.",
    description:
      "无论您是渴望重构业务流程、打通分散软件系统、实现日常繁重工作超级自动化，还是深度引入实战 AI 赋能增长，欢迎与我们的专家团队开启深度对话。",
    assurances: {
      item1Title: "30 分钟 1对1 专家战略咨询",
      item1Desc:
        "直接与拥有深厚实战经验的解决方案架构师沟通，拒绝套路化的销售推销话术。",
      item2Title: "严苛保密机制（签约前签署 NDA）",
      item2Desc:
        "您的核心业务流程、经营数据与商业机密受到具有法律效力的严格保密协议 100% 保护。",
      item3Title: "清晰可行蓝图，无任何捆绑承诺",
      item3Desc:
        "获得客观中立的技术可行性诊断与务实的技术选型建议，充分尊重您的预算与资源现状。",
    },
    form: {
      badge: "预约 1对1 战略方案研讨会",
      title: "预约技术专家咨询",
      nameLabel: "您的姓名 *",
      namePlaceholder: "例如：张明 (David Zhang)",
      phoneLabel: "联系电话 / 微信 *",
      phonePlaceholder: "请输入手机号或微信号",
      emailLabel: "企业工作邮箱 *",
      emailPlaceholder: "david.zhang@company.com",
      companyLabel: "企业/机构全称 *",
      companyPlaceholder: "例如：卓越创新科技有限公司",
      serviceLabel: "您重点关注的技术领域",
      servicesList: [
        { label: "企业业务流程数字化转型", val: "Digital Transformation" },
        { label: "企业级 AI 解决方案与智能自动化", val: "AI Solutions & Automation" },
        { label: "异构多系统深度集成与数据打通", val: "System Integration" },
        { label: "专属核心业务系统定制开发", val: "Custom Software Development" },
        { label: "全景流程与系统架构诊断咨询", val: "Process & Architecture Audit" },
      ],
      challengeLabel: "简要描述您面临的运营挑战或期望达成的目标",
      challengePlaceholder:
        "例如：我们目前各部门之间有大量 Excel 割裂对账，发票和单据处理耗时严重，希望通过定制方案实现全面数字化与自动化...",
      submitBtn: "提交专家咨询申请",
      submittingBtn: "正在加密提交申请...",
      privacyNote: "受到企业级保密协议（NDA）严格保护。我们将在 1 个工作日内给予正式响应。",
    },
    success: {
      badge: "已成功接收您的咨询请求",
      title: "衷心感谢您的信任",
      message:
        "资深解决方案架构师正在审阅您的业务背景，并将在 1 个工作日内与您取得联系，开展专属深度探讨。",
      statusText: "咨询请求已成功同步至专家团队接单系统。",
    },
  },
  modal: {
    badge: "高层战略对接",
    title: "预约数字化转型架构咨询",
    subtitle:
      "与资深技术专家直接对话，论证技术可行性并量身规划破局方案。",
    nameLabel: "您的姓名 *",
    phoneLabel: "联系电话 / 微信 *",
    phonePlaceholder: "请输入手机号或微信号",
    emailLabel: "企业工作邮箱 *",
    companyLabel: "企业/公司名称 *",
    serviceLabel: "重点关注领域",
    servicesList: [
      { label: "企业业务流程数字化转型", val: "Digital Transformation" },
      { label: "企业级 AI 解决方案与智能自动化", val: "AI Solutions & Intelligent Automation" },
      { label: "异构多系统深度集成与数据打通", val: "System Integration" },
      { label: "专属核心业务系统定制开发", val: "Custom Software Development" },
      { label: "全景流程与系统架构诊断咨询", val: "Operational Readiness Audit" },
    ],
    notesLabel: "核心需求或待解决的业务课题",
    notesPlaceholder:
      "简要阐述您希望优化打通的业务流程、现有系统或期望达成的商业目标...",
    submitBtn: "确认预约专家时段",
    submittingBtn: "正在锁定专家日程...",
    ndaNote: "签署严格 NDA 商业保密承诺",
    responseNote: "1 个工作日内专人快速响应",
    successBadge: "预约确认成功",
    successTitle: "已收到您的对接需求",
    successDesc:
      "我们已妥善记录您的业务诉求，资深技术架构师团队将尽快与您对接。",
    statusText: "咨询请求已成功同步至专家团队接单系统。",
    doneBtn: "完成",
  },
  footer: {
    brandDesc:
      "HA-SOLUTIONS 致力于协助现代企业化繁为简，重塑业务流程，深度打通割裂软件系统，并稳健引入实用 AI 力量，构筑更具竞争力、更高效的现代化运作体系。",
    taglineBadge: "品牌战略口号",
    tagline: '"重塑业务流程. 赋能企业增长."',
    supportingStatement: "务实智能方案. 创造确定价值.",
    solutionsTitle: "解决方案",
    industriesTitle: "行业赋能",
    approachTitle: "实施流程",
    security: "企业级安全与合规",
    privacy: "数据隐私保护政策",
    rightsReserved: "版权所有。企业数字化转型与前沿科技战略伙伴。",
  },
};

