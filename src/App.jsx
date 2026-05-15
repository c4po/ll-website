import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, CheckCircle2, Calculator, Briefcase,
  Globe, Users, TrendingUp, Building2, MapPin, Mail, Phone,
  Award, Shield, FileText, ArrowRight, Landmark
} from 'lucide-react';
import cocoLiPhoto from './assets/cocoli.jpg';
import cocoLyuPhoto from './assets/cocolyu.jpg';
import logo from './assets/logo.png';
import { useI18n } from './i18n.jsx';

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

const SERVICE_ICONS = [
  <FileText className="w-8 h-8" />,
  <Calculator className="w-8 h-8" />,
  <TrendingUp className="w-8 h-8" />,
  <Briefcase className="w-8 h-8" />,
  <Building2 className="w-8 h-8" />,
  <Users className="w-8 h-8" />,
  <Globe className="w-8 h-8" />,
];

const HomeView = ({ navigateTo }) => {
  const { t } = useI18n();

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
            <img
              src={logo}
              alt="L&L Business Solutions"
              className="w-full max-w-[260px] h-auto mb-8 bg-white rounded-lg p-3"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.hero.title1}<br />
              <span className="text-amber-500">{t.hero.title2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 border-l-4 border-amber-500 pl-4">
              {t.hero.firm}<br />
              <span className="text-lg">{t.hero.languages}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </Button>
              <Button primary={false} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="!bg-transparent border-slate-400 text-white hover:!bg-white/10 hover:text-white">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              {[Award, Landmark, Shield].map((Icon, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.hero.badges[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 关于我们 */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title={t.about.heading} />
              <div className="space-y-6 text-lg text-slate-600">
                <p>{t.about.paragraphs[0]}</p>
                <p>{t.about.paragraphs[1]}</p>
                <p className="font-medium text-slate-800 border-l-4 border-amber-500 pl-4 py-2 bg-slate-50">
                  {t.about.paragraphs[2]}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Professional Consulting" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-8 rounded-lg shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">{t.about.statYears}</p>
                <p className="text-sm font-medium">{t.about.statLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 创始合伙人概览 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t.founders.heading}
            subtitle={t.founders.subtitle}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* CoCo Li */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={cocoLiPhoto}
                  alt="CoCo Li"
                  className="w-20 h-20 rounded-full object-cover object-top shadow-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">CoCo Li</h3>
                  <p className="text-amber-600 font-medium">{t.founders.li.title}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-3">{t.founders.li.bio}</p>
              <button
                onClick={() => navigateTo('team')}
                className="text-slate-900 font-semibold flex items-center gap-2 hover:text-amber-600 transition-colors group"
              >
                {t.founders.viewProfile} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* CoCo Lyu */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={cocoLyuPhoto}
                  alt="CoCo Lyu"
                  className="w-20 h-20 rounded-full object-cover object-[center_10%] shadow-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">CoCo Lyu</h3>
                  <p className="text-amber-600 font-medium">{t.founders.lyu.title}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-3">{t.founders.lyu.bio}</p>
              <button
                onClick={() => navigateTo('team')}
                className="text-slate-900 font-semibold flex items-center gap-2 hover:text-amber-600 transition-colors group"
              >
                {t.founders.viewProfile} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 核心服务 */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.services.heading} centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {t.services.items.map((service, index) => (
              <div key={index} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl hover:border-amber-200 transition-all duration-300 group bg-slate-50 hover:bg-white">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {SERVICE_ICONS[index]}
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
            
            {/* Industries */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.industries.heading}</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <div className="flex flex-wrap gap-3">
                {t.industries.items.map((industry, index) => (
                  <span key={index} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.advantages.heading}</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <p className="text-slate-400 mb-8 italic">{t.advantages.subtitle}</p>
              <div className="space-y-4">
                {t.advantages.items.map((adv, index) => (
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
            {t.philosophy.quote}
          </p>
          <p className="text-lg text-slate-600">{t.philosophy.subtitle}</p>
        </div>
      </section>
    </div>
  );
};

// --- 合伙人独立页面视图 ---

const TeamView = () => {
  const { t } = useI18n();
  const team = t.team;
  return (
    <div className="animate-fadeIn pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{team.pageTitle}</h1>
          <p className="text-lg text-slate-600">{team.pageSubtitle}</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-20">
          {/* CoCo Li */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-center">
              <img
                src={cocoLiPhoto}
                alt="CoCo Li"
                className="w-40 h-40 rounded-full object-cover object-top mb-6 ring-4 ring-amber-500/40 shadow-xl"
              />
              <h2 className="text-3xl font-bold mb-2">CoCo Li</h2>
              <p className="text-amber-400 font-medium text-lg mb-8">{t.founders.li.title}</p>

              <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4 font-semibold">{team.sections.skills}</h4>
              <ul className="space-y-3 mb-8">
                {team.li.skills.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/3 p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{team.sections.background}</h3>
                <p className="text-slate-600 leading-relaxed">{team.li.background}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{team.sections.scope}</h3>
                <p className="text-slate-600 leading-relaxed">{team.li.scope}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{team.sections.industries}</h3>
                  <ul className="space-y-2 text-slate-600">
                    {team.li.industries.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{team.sections.community}</h3>
                  <ul className="space-y-2 text-slate-600">
                    {team.li.community.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="text-amber-800 font-bold mb-2">{team.sections.value}</h3>
                <p className="text-amber-900">{team.li.value}</p>
              </div>
            </div>
          </div>

          {/* CoCo Lyu */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse border border-slate-100">
            <div className="lg:w-1/3 bg-slate-800 text-white p-10 flex flex-col justify-center">
              <img
                src={cocoLyuPhoto}
                alt="CoCo Lyu"
                className="w-40 h-40 rounded-full object-cover object-[center_10%] mb-6 ring-4 ring-amber-500/40 shadow-xl"
              />
              <h2 className="text-3xl font-bold mb-2">CoCo Lyu</h2>
              <p className="text-amber-400 font-medium text-lg mb-8">{t.founders.lyu.title}</p>

              <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-4 font-semibold">{team.sections.skills}</h4>
              <ul className="space-y-3 mb-8">
                {team.lyu.skills.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/3 p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{team.sections.background}</h3>
                <p className="text-slate-600 leading-relaxed">{team.lyu.background}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{team.sections.scope}</h3>
                <p className="text-slate-600 leading-relaxed">{team.lyu.scope}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{team.sections.organizations}</h3>
                <ul className="space-y-2 text-slate-600">
                  {team.lyu.organizations.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-600 p-6 rounded-r-lg mt-auto">
                <h3 className="text-slate-800 font-bold mb-2">{team.sections.value}</h3>
                <p className="text-slate-700">{team.lyu.value}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


// --- 实用链接视图 ---

const LinksView = () => {
  const { t } = useI18n();
  const page = t.links;
  return (
    <div className="animate-fadeIn pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{page.pageTitle}</h1>
          <p className="text-lg text-slate-600">{page.pageSubtitle}</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-12">
          {page.groups.map((group, gi) => (
            <div key={gi} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                {group.heading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, ii) => (
                  <a
                    key={ii}
                    href={item.url}
                    className="block p-5 rounded-lg border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group bg-slate-50 hover:bg-white"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 合作伙伴视图 ---

const PartnersView = () => {
  const { t } = useI18n();
  const page = t.partners;
  return (
    <div className="animate-fadeIn pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{page.pageTitle}</h1>
          <p className="text-lg text-slate-600">{page.pageSubtitle}</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all"
            >
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-2">
                {item.tag}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
  const { t, lang, setLang } = useI18n();
  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

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
            <button
              onClick={() => navigateTo('home')}
              aria-label="L&L Business Solutions home"
              className={`cursor-pointer transition-colors ${
                scrolled ? '' : 'bg-white rounded-md px-2 py-1'
              }`}
            >
              <img
                src={logo}
                alt="L&L Business Solutions"
                className="h-10 md:h-12 w-auto block"
              />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigateTo('home')}
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'home' && '!text-amber-500'}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => navigateTo('team')}
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'team' && '!text-amber-500'}`}
              >
                {t.nav.team}
              </button>
              <button
                onClick={() => navigateTo('links')}
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'links' && '!text-amber-500'}`}
              >
                {t.nav.links}
              </button>
              <button
                onClick={() => navigateTo('partners')}
                className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-700' : 'text-slate-300'} ${currentView === 'partners' && '!text-amber-500'}`}
              >
                {t.nav.partners}
              </button>
              <button
                onClick={toggleLang}
                aria-label="Toggle language"
                className={`text-sm font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  scrolled
                    ? 'border-slate-300 text-slate-700 hover:border-amber-500 hover:text-amber-600'
                    : 'border-slate-500 text-slate-200 hover:border-amber-500 hover:text-amber-400'
                }`}
              >
                {t.common.switchTo}
              </button>
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="!py-2 !px-5 text-sm">
                {t.nav.contact}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                aria-label="Toggle language"
                className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${
                  scrolled
                    ? 'border-slate-300 text-slate-700'
                    : 'border-slate-500 text-white'
                }`}
              >
                {t.common.switchTo}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full left-0 border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <button
                onClick={() => navigateTo('home')}
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'home' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => navigateTo('team')}
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'team' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {t.nav.team}
              </button>
              <button
                onClick={() => navigateTo('links')}
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'links' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {t.nav.links}
              </button>
              <button
                onClick={() => navigateTo('partners')}
                className={`block px-3 py-4 text-left font-medium border-b border-slate-50 ${currentView === 'partners' ? 'text-amber-600' : 'text-slate-700'}`}
              >
                {t.nav.partners}
              </button>
              <div className="pt-4 px-3">
                <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>
                  {t.hero.ctaPrimary}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 动态渲染视图内容 */}
      <main>
        {currentView === 'team' && <TeamView />}
        {currentView === 'links' && <LinksView />}
        {currentView === 'partners' && <PartnersView />}
        {currentView === 'home' && <HomeView navigateTo={navigateTo} />}
      </main>

      {/* 8. 联系方式 (通用 Footer) */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold text-white mb-6">
                L&L Business <span className="text-amber-500">Solutions</span>
              </div>
              <p className="text-slate-400 mb-6">
                {t.footer.taglineLines[0]}<br />{t.footer.taglineLines[1]}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">{t.footer.contactHeading}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span>{t.footer.address[0]}<br />{t.footer.address[1]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="mailto:coco@llbsolution.com" className="hover:text-amber-400 transition-colors">coco@llbsolution.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>{t.footer.phone}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">{t.footer.ctaHeading}</h3>
              <p className="text-slate-400 mb-6">{t.footer.ctaBody}</p>
              <Button className="w-full">{t.footer.ctaButton}</Button>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} L&L Business Solutions. {t.footer.rights}</p>
            <div className="flex space-x-6">
              <span className="hover:text-white cursor-pointer transition-colors">{t.footer.privacy}</span>
              <span className="hover:text-white cursor-pointer transition-colors">{t.footer.terms}</span>
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

