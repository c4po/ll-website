import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, CheckCircle2, Calculator, Briefcase, 
  Globe, Users, TrendingUp, Building2, MapPin, Mail, Phone, 
  Award, Shield, FileText, ArrowRight, Landmark
} from 'lucide-react';

// --- 共享组件 ---

const SectionHeading = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
    <div className={`w-20 h-1 bg-amber-500 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const Button = ({ children, primary = true, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-3.5 font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
      primary 
        ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-amber-500/30' 
        : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
    } ${className}`}
  >
    {children}
  </button>
);

// --- 首页视图 ---

const HomeView = ({ navigateTo }) => {
  const services = [
    { title: '财务管理', desc: '企业记账、财务报表、多公司财务整合', icon: <FileText className="w-8 h-8" /> },
    { title: '税务服务', desc: '企业税、个人税、HST、Payroll', icon: <Calculator className="w-8 h-8" /> },
    { title: '税务规划', desc: '企业结构优化、节税策略设计', icon: <TrendingUp className="w-8 h-8" /> },
    { title: '商业咨询', desc: '企业增长支持、财务战略规划', icon: <Briefcase className="w-8 h-8" /> },
    { title: '公司设立', desc: '公司注册、结构设计、股权规划', icon: <Building2 className="w-8 h-8" /> },
    { title: '非盈利组织服务', desc: '社团 / 协会 / 公益组织财务管理', icon: <Users className="w-8 h-8" /> },
    { title: '跨境业务支持', desc: '中国 ↔ 加拿大财税与结构规划', icon: <Globe className="w-8 h-8" /> },
  ];

  const industries = [
    '教育与培训集团', '房地产与投资行业', '建筑与工程企业', 
    '餐饮与零售行业', '移民与咨询行业', '科技与初创企业', '非盈利组织与行业协会'
  ];

  const advantages = [
    '管理20+公司集团财务经验',
    '非盈利组织财务管理经验',
    '政府体系 + 会计师事务所背景',
    '多行业复杂财务处理能力',
    '中 / 英 / 法三语服务能力',
    '财务 + 税务 + 商业咨询一体化支持'
  ];

  return (
    <div className="animate-fadeIn">
      {/* 1. HERO 首屏 */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507676184212-d0330a151f84?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              专业财税与商业咨询服务<br />
              <span className="text-amber-500">助力企业稳健增长与长期合规</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 border-l-4 border-amber-500 pl-4">
              L&L Advisory｜多伦多专业财税事务所<br />
              <span className="text-lg">中 · 英 · 法三语服务企业与机构客户</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                预约专业咨询 <ArrowRight className="w-5 h-5" />
              </Button>
              <Button primary={false} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="!bg-transparent border-slate-400 text-white hover:!bg-white/10 hover:text-white">
                获取初步财务评估
              </Button>
            </div>

            {/* 核心信任标签 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium">20+年财税与企业管理经验</span>
              </div>
              <div className="flex items-center gap-3">
                <Landmark className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium">管理20+公司集团财务体系</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium">服务企业 / 非盈利组织 / 行业协会</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 关于我们 */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="关于 L&L Advisory" />
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  L&L Advisory是一家位于多伦多的专业财税与商业咨询事务所，由两位拥有超过20年经验的资深专业人士共同创立。
                </p>
                <p>
                  我们专注于企业财务管理、税务规划及商业结构优化，服务客户涵盖企业集团、成长型企业及非盈利组织。
                </p>
                <p className="font-medium text-slate-800 border-l-4 border-amber-500 pl-4 py-2 bg-slate-50">
                  我们不仅提供基础会计与报税服务，更致力于帮助客户建立清晰、规范且可持续的财务体系，以支持长期业务发展。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Professional Consulting" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-8 rounded-lg shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="text-sm font-medium">年行业资深经验</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 创始合伙人概览 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="我们的创始合伙人" 
            subtitle="由具备跨国企业、政府体系及顶级会计师事务所背景的资深专家领衔"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* CoCo Li */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">CoCo Li</h3>
              <p className="text-amber-600 font-medium mb-6">Business & Tax Advisory Lead</p>
              <p className="text-slate-600 mb-6 line-clamp-3">
                拥有20+年加拿大财税与商业咨询经验，曾在会计师事务所任职，长期服务企业客户及非盈利组织。目前负责教育相关集团旗下20余家公司财务与税务管理工作...
              </p>
              <button 
                onClick={() => navigateTo('team')}
                className="text-slate-900 font-semibold flex items-center gap-2 hover:text-amber-600 transition-colors group"
              >
                查看完整履历 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* CoCo Lyu */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">CoCo Lyu</h3>
              <p className="text-amber-600 font-medium mb-6">Accounting & Compliance Lead</p>
              <p className="text-slate-600 mb-6 line-clamp-3">
                拥有20+年财务与会计经验，职业生涯始于中国政府财务体系，长期从事财务合规与制度化管理工作，具备扎实的风险控制与财务规范能力...
              </p>
              <button 
                onClick={() => navigateTo('team')}
                className="text-slate-900 font-semibold flex items-center gap-2 hover:text-amber-600 transition-colors group"
              >
                查看完整履历 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 核心服务 */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="我们的专业服务" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 group bg-slate-50 hover:bg-white">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 行业覆盖 & 6. 为什么选择我们 */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 行业覆盖 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">我们服务的行业领域</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span key={index} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* 为什么选择我们 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">为什么选择 L&L Advisory</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <p className="text-slate-400 mb-8 italic">高标准的专业能力，决定了我们能为您创造的长期价值。</p>
              <div className="space-y-4">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-200">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. 品牌理念 */}
      <section className="py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-amber-100 opacity-50">
          <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-relaxed">
            "We don’t just manage numbers — we build financial clarity and long-term business growth."
          </p>
          <p className="text-lg text-slate-600">
            我们不仅处理账务，更帮助客户建立清晰、合规且可持续发展的财务体系。
          </p>
        </div>
      </section>
    </div>
  );
};

// --- 合伙人独立页面视图 ---

const TeamView = () => {
  return (
    <div className="animate-fadeIn pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Founders</h1>
          <p className="text-lg text-slate-600">L&L Advisory 创始合伙人</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-20">
          {/* CoCo Li */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-center">
              <div className="w-24 h-24 bg-amber-500 rounded-full mb-6 flex items-center justify-center text-3xl font-bold">CL</div>
              <h2 className="text-3xl font-bold mb-2">CoCo Li</h2>
              <p className="text-amber-400 font-medium text-lg mb-8">Business & Tax Advisory Lead</p>
              
              <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4 font-semibold">核心能力</h4>
              <ul className="space-y-3 mb-8">
                {['企业税务规划与优化', '商业结构设计与调整', '财务战略与增长支持', '跨行业复杂财务经验', '中 / 英 / 法三语服务能力'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-2/3 p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">专业背景</h3>
                <p className="text-slate-600 leading-relaxed">
                  CoCo Li拥有20+年加拿大财税与商业咨询经验，曾在会计师事务所任职，长期服务企业客户及非盈利组织，具备扎实的税务与商业结构设计能力。
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">当前工作范围</h3>
                <p className="text-slate-600 leading-relaxed">
                  负责教育相关集团旗下20余家公司财务与税务管理，同时服务多伦多多个行业及公益组织。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">重点服务行业</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 教育与培训机构</li>
                    <li>• 房地产与投资行业</li>
                    <li>• 建筑与工程企业</li>
                    <li>• 餐饮与零售行业</li>
                    <li>• 移民与咨询行业</li>
                    <li>• 非盈利组织与协会</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">社区与组织参与</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 齐鲁商会 (Toronto Qilu Assoc.)</li>
                    <li>• 加拿大狮子会 (Lions Club)</li>
                    <li>• 多个华人社区及行业组织</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-amber-800 font-bold mb-2">核心价值</h3>
                <p className="text-amber-900">推动企业实现从财务合规 → 税务优化 → 商业增长的完整路径。</p>
              </div>
            </div>
          </div>

          {/* CoCo Lyu */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse border border-slate-100">
            <div className="lg:w-1/3 bg-slate-800 text-white p-10 flex flex-col justify-center">
              <div className="w-24 h-24 bg-amber-500 rounded-full mb-6 flex items-center justify-center text-3xl font-bold">CL</div>
              <h2 className="text-3xl font-bold mb-2">CoCo Lyu</h2>
              <p className="text-amber-400 font-medium text-lg mb-8">Accounting & Compliance Lead</p>
              
              <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4 font-semibold">核心能力</h4>
              <ul className="space-y-3 mb-8">
                {['多公司财务体系管理', '财务流程标准化建设', '财务合规与风险控制', '非盈利组织财务管理', '集团账务整合'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-2/3 p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">专业背景</h3>
                <p className="text-slate-600 leading-relaxed">
                  CoCo Lyu拥有20+年财务与会计经验，职业起点为中国政府财务体系，长期从事财务合规与制度化管理，具备高度规范化的财务管理能力。
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">当前工作范围</h3>
                <p className="text-slate-600 leading-relaxed">
                  负责教育相关集团旗下20余家公司财务与税务申报，同时服务多伦多多个非盈利组织及社团机构。
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">服务机构</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 齐鲁商会</li>
                  <li>• 加拿大狮子会（Lions Club）</li>
                </ul>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-600 p-6 rounded-r-lg mt-auto">
                <h3 className="text-slate-800 font-bold mb-2">核心价值</h3>
                <p className="text-slate-700">构建稳定、规范、可持续的财务体系，保障企业长期合规运营。</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


// --- 主应用入口 ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-amber-200 selection:text-slate-900">
      {/* 导航栏 */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-slate-900/95 backdrop-blur-sm py-5 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className={`text-2xl font-bold cursor-pointer transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => navigateTo('home')}
            >
              L&L <span className="text-amber-500">Advisory</span>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateTo('home')} 
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'home' && '!text-amber-500'}`}
              >
                首页
              </button>
              <button 
                onClick={() => navigateTo('team')} 
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'team' && '!text-amber-500'}`}
              >
                合伙人团队
              </button>
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="!py-2 !px-5 text-sm">
                联系我们
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单下拉 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full left-0 border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <button 
                onClick={() => navigateTo('home')} 
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'home' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                首页
              </button>
              <button 
                onClick={() => navigateTo('team')} 
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'team' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                合伙人团队
              </button>
              <div className="pt-4 px-3">
                <Button className="w-full" onClick={() => {setIsMobileMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });}}>
                  预约咨询
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 动态渲染视图内容 */}
      <main>
        {currentView === 'home' ? <HomeView navigateTo={navigateTo} /> : <TeamView />}
      </main>

      {/* 8. 联系方式 (通用 Footer) */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* 品牌信息 */}
            <div>
              <div className="text-3xl font-bold text-white mb-6">
                L&L <span className="text-amber-500">Advisory</span>
              </div>
              <p className="text-slate-400 mb-6">
                多伦多专业财税事务所。<br/>中 · 英 · 法三语服务企业与机构客户。
              </p>
            </div>

            {/* 联系方式 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Toronto / Markham, ON<br/>Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="mailto:info@lladvisory.ca" className="hover:text-amber-400 transition-colors">contact@lladvisory.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>Phone / WeChat: 提供后补充</span>
                </div>
              </div>
            </div>

            {/* CTA区域 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">开启长期商业增长</h3>
              <p className="text-slate-400 mb-6">
                留下您的联系方式，我们的创始合伙人将为您提供初步的财务评估与咨询。
              </p>
              <Button className="w-full">
                预约专业咨询
              </Button>
            </div>

          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} L&L Advisory. All rights reserved.</p>
            <div className="flex space-x-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* 注入全局动画样式 */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}} />
    </div>
  );
}

