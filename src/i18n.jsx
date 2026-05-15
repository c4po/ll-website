import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'll-advisory-lang';
const DEFAULT_LANG = 'en';
const SUPPORTED = ['en', 'zh'];

export const translations = {
  en: {
    nav: { home: 'Home', team: 'Founders', links: 'Resources', partners: 'Partners', contact: 'Contact Us' },
    hero: {
      title1: 'Cross-Border Business & Tax Advisory',
      title2: 'Connecting opportunities, supporting sustainable growth',
      firm: 'L&L Business Solutions · Toronto Tax & Advisory Firm',
      languages: 'One-stop solutions for entrepreneurs and enterprises — from incorporation and tax management to international expansion',
      ctaPrimary: 'Book a Consultation',
      ctaSecondary: 'Get an Initial Assessment',
      badges: [
        '20+ years of experience at local public accounting firms',
        'Deep expertise in Canadian tax and corporate compliance',
        'China–Canada resource integration for cross-border business',
      ],
    },
    about: {
      heading: 'About L&L Business Solutions',
      paragraphs: [
        'L&L Business Solutions is a professional firm focused on enterprise services and cross-border development, providing entrepreneurs and businesses with one-stop solutions spanning company formation, tax and financial management, and international expansion.',
        'Our core team members bring 20+ years of professional accounting experience at local public accounting firms, with deep familiarity in the Canadian tax system and corporate compliance requirements.',
        'We don’t just ensure compliant operations — we deliver actionable growth strategies that help businesses achieve long-term success.',
      ],
      statYears: '20+',
      statLabel: 'Years of professional accounting experience',
    },
    founders: {
      heading: 'Our Founding Partners',
      subtitle:
        'Led by senior advisors with backgrounds spanning multinational enterprises, government, and top-tier accounting firms',
      li: {
        title: 'Business & Tax Advisory Lead',
        bio: '20+ years of Canadian tax and business advisory experience, including time at public accounting firms. A long-standing advisor to enterprise clients and non-profit organizations, currently leading finance and tax for an education-focused group of 20+ companies...',
      },
      lyu: {
        title: 'Accounting & Compliance Lead',
        bio: '20+ years of finance and accounting experience, starting in the Chinese government finance system. Deep expertise in compliance, institutionalized financial management, risk control, and process standardization...',
      },
      viewProfile: 'View full profile',
    },
    services: {
      heading: 'Our Services',
      items: [
        {
          title: 'Business Investment & Startup Advisory',
          bullets: ['Investment feasibility analysis', 'Business model design', 'Market research & analysis'],
        },
        {
          title: 'Startup Coaching',
          bullets: ['End-to-end support from 0 to 1', 'Corporate structure design', 'Operations strategy & risk control'],
        },
        {
          title: 'Investment Attraction',
          bullets: ['Government resource liaison', 'Project landing support', 'Partnership channel development'],
        },
        {
          title: 'China Outbound Services',
          bullets: [
            'Entry into Canada / North American markets',
            'Incorporation & compliance support',
            'Local resource liaison',
            'Market entry strategy',
          ],
        },
        {
          title: 'Government Grant Applications',
          bullets: [
            'Policy analysis & matching',
            'Grant / funding applications',
            'Business plan support',
            'Improve application success rate',
          ],
        },
        {
          title: 'Financial & Accounting Services',
          bullets: [
            'Company registration (Federal / Ontario)',
            'Tax number registration (GST/HST, Payroll)',
            'Bookkeeping & financial reporting',
            'Personal income tax filing',
            'Corporate income tax filing (T2)',
          ],
        },
      ],
    },
    advantages: {
      heading: 'Why Choose Us',
      subtitle: 'A high standard of professional capability defines the long-term value we deliver.',
      items: [
        { title: '20+ Years of Experience', desc: 'Locally rooted and trustworthy — deeply established in the Canadian market.' },
        { title: 'Expert in Tax & Compliance', desc: 'Deep understanding of the Canadian tax system and corporate compliance requirements.' },
        { title: 'China–Canada Resource Integration', desc: 'Resource matching and project landing across both markets.' },
        { title: 'Dual Professional Background', desc: 'Combining accounting expertise with business operations experience.' },
      ],
    },
    philosophy: {
      quote: '“We don’t just manage your books — we drive your growth.”',
      subtitle: 'From compliance to growth strategy, we partner with our clients for the long term.',
    },
    team: {
      pageTitle: 'Our Founders',
      pageSubtitle: 'L&L Business Solutions Founding Partners',
      sections: {
        skills: 'Core Capabilities',
        background: 'Professional Background',
        scope: 'Current Scope of Work',
        industries: 'Key Industries Served',
        community: 'Community & Organizations',
        value: 'Core Value',
        organizations: 'Organizations Served',
      },
      li: {
        skills: [
          'Corporate tax planning and optimization',
          'Business structure design and adjustment',
          'Financial strategy and growth advisory',
          'Cross-industry complex financial experience',
          'Trilingual service (CN / EN / FR)',
        ],
        background:
          'CoCo Li has 20+ years of Canadian tax and business advisory experience, including time at public accounting firms. A long-serving advisor to enterprise clients and non-profits, she has strong expertise in tax planning and business structure design.',
        scope:
          'Leads finance and tax management for an education-focused group of 20+ companies, and serves multiple Toronto industries and non-profit organizations.',
        industries: [
          'Education & training institutions',
          'Real estate & investment',
          'Construction & engineering',
          'Restaurants & retail',
          'Immigration & consulting',
          'Non-profits & industry associations',
        ],
        community: [
          'Shandong Community Service Association of Canada',
          'York Region Caring Lions Club',
          'Multiple Chinese-Canadian community and industry organizations',
        ],
        value:
          'Drive enterprises along the full path from compliance → tax optimization → business growth.',
      },
      lyu: {
        skills: [
          'Multi-entity financial system management',
          'Financial process standardization',
          'Compliance and risk control',
          'Non-profit financial management',
          'Group accounting consolidation',
        ],
        background:
          'CoCo Lyu has 20+ years of finance and accounting experience, beginning in the Chinese government finance system. She specializes in compliance, institutionalized financial management, and structured financial operations.',
        scope:
          'Leads finance and tax filings for an education-focused group of 20+ companies, and serves multiple Toronto non-profit organizations and associations.',
        organizations: ['Shandong Community Service Association of Canada', 'York Region Caring Lions Club'],
        value:
          'Build stable, structured, and sustainable financial systems that safeguard long-term compliance.',
      },
    },
    links: {
      pageTitle: 'Useful Resources',
      pageSubtitle: 'Tax, compliance, and business-formation links our clients use most often',
      groups: [
        {
          heading: 'Government & Tax',
          items: [
            { name: 'Canada Revenue Agency (CRA)', url: '#', desc: 'Federal tax filing, GST/HST, payroll, and business accounts.' },
            { name: 'Ontario Ministry of Finance', url: '#', desc: 'Provincial tax programs and employer health tax.' },
            { name: 'Service Ontario', url: '#', desc: 'Business registry, licensing, and compliance filings.' },
          ],
        },
        {
          heading: 'Compliance & Professional Bodies',
          items: [
            { name: 'CPA Canada', url: '#', desc: 'Standards, publications, and practitioner resources.' },
            { name: 'WSIB Ontario', url: '#', desc: 'Workplace safety and insurance for Ontario employers.' },
          ],
        },
        {
          heading: 'Business Formation',
          items: [
            { name: 'Federal Incorporation', url: '#', desc: 'Incorporate a business under the Canada Business Corporations Act.' },
            { name: 'Ontario Business Registry', url: '#', desc: 'Register, renew, and update an Ontario business or corporation.' },
          ],
        },
      ],
    },
    partners: {
      pageTitle: 'Our Partners',
      pageSubtitle: 'Trusted professionals and organizations we collaborate with to serve our clients',
      items: [
        { name: 'Partner Firm A', tag: 'Legal & Corporate', desc: 'Corporate counsel and contract advisory for growth-stage clients.' },
        { name: 'Partner Firm B', tag: 'Banking & Finance', desc: 'Commercial banking and credit facilities for SMEs and enterprise groups.' },
        { name: 'Partner Firm C', tag: 'Immigration & Cross-Border', desc: 'Immigration, work permit, and cross-border structuring advisory.' },
        { name: 'Partner Firm D', tag: 'Insurance & Risk', desc: 'Commercial insurance, group benefits, and risk management.' },
        { name: 'Partner Firm E', tag: 'Technology & Operations', desc: 'Cloud accounting, ERP, and finance automation implementation.' },
        { name: 'Partner Firm F', tag: 'Real Estate & Investment', desc: 'Commercial real estate, leasing, and investment advisory.' },
      ],
    },
    footer: {
      taglineLines: [
        'Toronto-based tax and business advisory firm.',
        'Serving enterprise and institutional clients in Chinese, English, and French.',
      ],
      contactHeading: 'Contact',
      address: ['7050 Woodbine Ave, Unit 300', 'Markham, ON L3R 4G8, Canada'],
      phone: 'Phone / WeChat / WhatsApp: 416-206-0168',
      ctaHeading: 'Build Long-Term Business Growth',
      ctaBody:
        'Share your contact details and our founding partners will reach out with an initial financial assessment.',
      ctaButton: 'Book a Consultation',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    common: { switchTo: '中文' },
  },

  zh: {
    nav: { home: '首页', team: '合伙人团队', links: '实用链接', partners: '合作伙伴', contact: '联系我们' },
    hero: {
      title1: '跨境商业与财税咨询',
      title2: '连接机会，助力企业稳健成长',
      firm: 'L&L Business Solutions｜多伦多专业财税事务所',
      languages: '从公司设立、财税管理到国际拓展，为创业者与企业提供一站式解决方案',
      ctaPrimary: '预约专业咨询',
      ctaSecondary: '获取初步评估',
      badges: [
        '20+年当地会计师事务所专业经验',
        '深度熟悉加拿大财税体系与合规要求',
        '中加资源整合，连接跨境商业机会',
      ],
    },
    about: {
      heading: '关于我们',
      paragraphs: [
        'L&L Business Solutions 是一家专注于企业服务与跨境发展的专业机构，为创业者及企业提供从设立、财税管理到国际拓展的一站式解决方案。',
        '团队核心成员拥有当地会计师事务所20年以上专业会计经验，深度熟悉加拿大财税体系及企业合规要求。',
        '我们不仅确保企业合规运营，更为客户提供可落地的增长策略，助力企业实现长期发展。',
      ],
      statYears: '20+',
      statLabel: '年专业会计经验',
    },
    founders: {
      heading: '我们的创始合伙人',
      subtitle: '由具备跨国企业、政府体系及顶级会计师事务所背景的资深专家领衔',
      li: {
        title: 'Business & Tax Advisory Lead',
        bio: '拥有20+年加拿大财税与商业咨询经验，曾在会计师事务所任职，长期服务企业客户及非盈利组织。目前负责教育相关集团旗下20余家公司财务与税务管理工作...',
      },
      lyu: {
        title: 'Accounting & Compliance Lead',
        bio: '拥有20+年财务与会计经验，职业生涯始于中国政府财务体系，长期从事财务合规与制度化管理工作，具备扎实的风险控制与财务规范能力...',
      },
      viewProfile: '查看完整履历',
    },
    services: {
      heading: '我们的服务',
      items: [
        {
          title: '企业投资与创业咨询',
          bullets: ['投资可行性分析', '商业模式设计', '市场研究与分析'],
        },
        {
          title: '创业辅导',
          bullets: ['从 0 到 1 全程陪跑', '公司架构设计', '运营策略与风险控制'],
        },
        {
          title: '招商引资',
          bullets: ['政府资源对接', '项目落地支持', '合作渠道拓展'],
        },
        {
          title: '国内企业出海服务',
          bullets: [
            '进入加拿大 / 北美市场',
            '公司设立与合规支持',
            '本地资源对接',
            '市场进入策略',
          ],
        },
        {
          title: '政府补助申请',
          bullets: [
            '政策解读与匹配',
            '补助项目申请 (Grant / Funding)',
            '商业计划书支持',
            '提高申请成功率',
          ],
        },
        {
          title: '财会服务',
          bullets: [
            '公司注册（联邦 / 安省）',
            '税号申请 (GST/HST、Payroll)',
            '记账与财务报表',
            '个人所得税申报',
            '企业所得税申报 (T2)',
          ],
        },
      ],
    },
    advantages: {
      heading: '我们的优势',
      subtitle: '高标准的专业能力，决定了我们能为您创造的长期价值。',
      items: [
        { title: '20+年专业经验', desc: '扎根本地，值得信赖，深耕加拿大市场多年。' },
        { title: '精通财税与合规', desc: '深度理解加拿大税务体系与企业合规要求。' },
        { title: '中加资源整合', desc: '资源对接，项目落地，跨境业务高效推进。' },
        { title: '双专业背景', desc: '会计专业能力 + 商业运营经验深度结合。' },
      ],
    },
    philosophy: {
      quote: '"我们不仅管理账务，更助力企业成长。"',
      subtitle: '从合规到增长策略，我们与客户长期同行。',
    },
    team: {
      pageTitle: 'Our Founders',
      pageSubtitle: 'L&L Business Solutions 创始合伙人',
      sections: {
        skills: '核心能力',
        background: '专业背景',
        scope: '当前工作范围',
        industries: '重点服务行业',
        community: '社区与组织参与',
        value: '核心价值',
        organizations: '服务机构',
      },
      li: {
        skills: [
          '企业税务规划与优化',
          '商业结构设计与调整',
          '财务战略与增长支持',
          '跨行业复杂财务经验',
          '中 / 英 / 法三语服务能力',
        ],
        background:
          'CoCo Li拥有20+年加拿大财税与商业咨询经验，曾在会计师事务所任职，长期服务企业客户及非盈利组织，具备扎实的税务与商业结构设计能力。',
        scope: '负责教育相关集团旗下20余家公司财务与税务管理，同时服务多伦多多个行业及公益组织。',
        industries: [
          '教育与培训机构',
          '房地产与投资行业',
          '建筑与工程企业',
          '餐饮与零售行业',
          '移民与咨询行业',
          '非盈利组织与协会',
        ],
        community: [
          '齐鲁同乡会 (Shandong Community Service Association of Canada)',
          '加拿大关爱狮子会 (York Region Caring Lions Club)',
          '多个华人社区及行业组织',
        ],
        value: '推动企业实现从财务合规 → 税务优化 → 商业增长的完整路径。',
      },
      lyu: {
        skills: [
          '多公司财务体系管理',
          '财务流程标准化建设',
          '财务合规与风险控制',
          '非盈利组织财务管理',
          '集团账务整合',
        ],
        background:
          'CoCo Lyu拥有20+年财务与会计经验，职业起点为中国政府财务体系，长期从事财务合规与制度化管理，具备高度规范化的财务管理能力。',
        scope: '负责教育相关集团旗下20余家公司财务与税务申报，同时服务多伦多多个非盈利组织及社团机构。',
        organizations: ['齐鲁同乡会', '加拿大关爱狮子会'],
        value: '构建稳定、规范、可持续的财务体系，保障企业长期合规运营。',
      },
    },
    links: {
      pageTitle: '实用链接',
      pageSubtitle: '客户最常用的税务、合规与公司设立资源',
      groups: [
        {
          heading: '政府与税务',
          items: [
            { name: '加拿大税务局 (CRA)', url: '#', desc: '联邦报税、GST/HST、薪资税及企业税务账户。' },
            { name: '安省财政部', url: '#', desc: '省级税务项目及雇主健康税。' },
            { name: '安省政府服务 (Service Ontario)', url: '#', desc: '企业登记、牌照及合规申报。' },
          ],
        },
        {
          heading: '合规与专业机构',
          items: [
            { name: 'CPA Canada 加拿大注册会计师协会', url: '#', desc: '准则、出版物及从业资源。' },
            { name: 'WSIB Ontario 安省工伤保险', url: '#', desc: '安省雇主的工作场所安全与保险。' },
          ],
        },
        {
          heading: '公司设立',
          items: [
            { name: '联邦公司注册', url: '#', desc: '依据《加拿大商业公司法》注册公司。' },
            { name: '安省企业注册系统', url: '#', desc: '安省企业及公司的注册、续期与变更。' },
          ],
        },
      ],
    },
    partners: {
      pageTitle: '合作伙伴',
      pageSubtitle: '我们与多家专业机构长期合作，共同服务客户',
      items: [
        { name: '合作机构 A', tag: '法律与公司事务', desc: '为成长型客户提供企业法律顾问及合同咨询服务。' },
        { name: '合作机构 B', tag: '银行与金融', desc: '面向中小企业及集团客户的商业银行及信贷服务。' },
        { name: '合作机构 C', tag: '移民与跨境', desc: '移民、工签及跨境架构咨询。' },
        { name: '合作机构 D', tag: '保险与风险', desc: '商业保险、团体福利及风险管理。' },
        { name: '合作机构 E', tag: '科技与运营', desc: '云端账务、ERP 及财务自动化部署。' },
        { name: '合作机构 F', tag: '房地产与投资', desc: '商业地产、租赁及投资顾问。' },
      ],
    },
    footer: {
      taglineLines: ['多伦多专业财税事务所。', '中 · 英 · 法三语服务企业与机构客户。'],
      contactHeading: '联系方式',
      address: ['7050 Woodbine Ave, Unit 300', 'Markham, ON L3R 4G8, Canada'],
      phone: '电话 / 微信 / WhatsApp: 416-206-0168',
      ctaHeading: '开启长期商业增长',
      ctaBody: '留下您的联系方式，我们的创始合伙人将为您提供初步的财务评估与咨询。',
      ctaButton: '预约专业咨询',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    common: { switchTo: 'EN' },
  },
};

const I18nContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: translations[DEFAULT_LANG],
});

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  });

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = { lang, setLang: setLangState, t: translations[lang] };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
