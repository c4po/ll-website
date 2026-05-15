import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'll-advisory-lang';
const DEFAULT_LANG = 'en';
const SUPPORTED = ['en', 'zh'];

export const translations = {
  en: {
    nav: { home: 'Home', team: 'Founders', links: 'Resources', partners: 'Partners', contact: 'Contact Us' },
    hero: {
      title1: 'Professional Tax & Business Advisory',
      title2: 'Built for sustainable growth and long-term compliance',
      firm: 'L&L Business Solutions · Toronto Tax & Advisory Firm',
      languages: 'Serving enterprise and institutional clients in Chinese, English, and French',
      ctaPrimary: 'Book a Consultation',
      ctaSecondary: 'Get an Initial Financial Assessment',
      badges: [
        '20+ years of tax and business management experience',
        'Managing finance for a 20+ company group',
        'Serving enterprises, non-profits, and associations',
      ],
    },
    about: {
      heading: 'About L&L Business Solutions',
      paragraphs: [
        'L&L Business Solutions is a Toronto-based professional tax and business advisory firm, founded by two senior practitioners with more than 20 years of experience each.',
        'We specialize in corporate financial management, tax planning, and business structure optimization — serving enterprise groups, growth-stage companies, and non-profit organizations.',
        'We don’t just provide bookkeeping and tax filing. We help our clients build clear, well-structured, and sustainable financial systems that support long-term business growth.',
      ],
      statYears: '20+',
      statLabel: 'Years of senior industry experience',
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
      heading: 'Our Professional Services',
      items: [
        { title: 'Financial Management', desc: 'Bookkeeping, financial reporting, multi-entity consolidation' },
        { title: 'Tax Services', desc: 'Corporate tax, personal tax, HST, payroll' },
        { title: 'Tax Planning', desc: 'Corporate structure optimization and tax-saving strategy' },
        { title: 'Business Advisory', desc: 'Growth support and financial strategy planning' },
        { title: 'Company Formation', desc: 'Incorporation, structure design, and shareholding planning' },
        { title: 'Non-Profit Services', desc: 'Financial management for associations, societies, and charities' },
        { title: 'Cross-Border Support', desc: 'Canada ↔ China tax and structuring advisory' },
      ],
    },
    industries: {
      heading: 'Industries We Serve',
      items: [
        'Education & Training',
        'Real Estate & Investment',
        'Construction & Engineering',
        'Restaurants & Retail',
        'Immigration & Consulting',
        'Technology & Startups',
        'Non-Profits & Industry Associations',
      ],
    },
    advantages: {
      heading: 'Why Choose L&L Business Solutions',
      subtitle: 'A high standard of professional capability defines the long-term value we deliver.',
      items: [
        'Experience managing finance for a 20+ company group',
        'Hands-on non-profit financial management',
        'Public sector + public accounting firm background',
        'Capability to handle complex multi-industry financials',
        'Trilingual service: Chinese, English, French',
        'Integrated finance, tax, and business advisory',
      ],
    },
    philosophy: {
      quote:
        '“We don’t just manage numbers — we build financial clarity and long-term business growth.”',
      subtitle:
        'Beyond bookkeeping — we help our clients build clear, compliant, and sustainable financial systems.',
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
      title1: '专业财税与商业咨询服务',
      title2: '助力企业稳健增长与长期合规',
      firm: 'L&L Business Solutions｜多伦多专业财税事务所',
      languages: '中 · 英 · 法三语服务企业与机构客户',
      ctaPrimary: '预约专业咨询',
      ctaSecondary: '获取初步财务评估',
      badges: [
        '20+年财税与企业管理经验',
        '管理20+公司集团财务体系',
        '服务企业 / 非盈利组织 / 行业协会',
      ],
    },
    about: {
      heading: '关于 L&L Business Solutions',
      paragraphs: [
        'L&L Business Solutions是一家位于多伦多的专业财税与商业咨询事务所，由两位拥有超过20年经验的资深专业人士共同创立。',
        '我们专注于企业财务管理、税务规划及商业结构优化，服务客户涵盖企业集团、成长型企业及非盈利组织。',
        '我们不仅提供基础会计与报税服务，更致力于帮助客户建立清晰、规范且可持续的财务体系，以支持长期业务发展。',
      ],
      statYears: '20+',
      statLabel: '年行业资深经验',
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
      heading: '我们的专业服务',
      items: [
        { title: '财务管理', desc: '企业记账、财务报表、多公司财务整合' },
        { title: '税务服务', desc: '企业税、个人税、HST、Payroll' },
        { title: '税务规划', desc: '企业结构优化、节税策略设计' },
        { title: '商业咨询', desc: '企业增长支持、财务战略规划' },
        { title: '公司设立', desc: '公司注册、结构设计、股权规划' },
        { title: '非盈利组织服务', desc: '社团 / 协会 / 公益组织财务管理' },
        { title: '跨境业务支持', desc: '中国 ↔ 加拿大财税与结构规划' },
      ],
    },
    industries: {
      heading: '我们服务的行业领域',
      items: [
        '教育与培训集团',
        '房地产与投资行业',
        '建筑与工程企业',
        '餐饮与零售行业',
        '移民与咨询行业',
        '科技与初创企业',
        '非盈利组织与行业协会',
      ],
    },
    advantages: {
      heading: '为什么选择 L&L Business Solutions',
      subtitle: '高标准的专业能力，决定了我们能为您创造的长期价值。',
      items: [
        '管理20+公司集团财务经验',
        '非盈利组织财务管理经验',
        '政府体系 + 会计师事务所背景',
        '多行业复杂财务处理能力',
        '中 / 英 / 法三语服务能力',
        '财务 + 税务 + 商业咨询一体化支持',
      ],
    },
    philosophy: {
      quote: '"We don’t just manage numbers — we build financial clarity and long-term business growth."',
      subtitle: '我们不仅处理账务，更帮助客户建立清晰、合规且可持续发展的财务体系。',
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
