import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Film } from 'lucide-react';
import { EDITORIAL_NAV, PROFILE } from '../data-editorial';

interface NavProps {
  onReplayIntro?: () => void;
}

export const Nav: React.FC<NavProps> = ({ onReplayIntro }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionIds = EDITORIAL_NAV.map((n) => n.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topVisible = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(`#${topVisible.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Lock body scroll on mobile open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-[#9E2939] text-[#F2EBDD] font-mono-meta text-xs px-4 py-2 border border-[#D8CEBA] font-bold shadow-lg"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#F2EBDD]/92 backdrop-blur-md border-b border-[#D8CEBA]' : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar in Oxblood */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#9E2939] origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Identity Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-1 focus-visible:outline-[#9E2939]"
            aria-label="Return to top"
          >
            <div className="w-8 h-8 bg-[#FAF6EE] border border-[#D8CEBA] group-hover:border-[#9E2939] flex items-center justify-center transition-colors shadow-xs">
              <span className="font-display font-black text-sm text-[#242424] group-hover:text-[#9E2939]">SSN</span>
            </div>
            <div>
              <span className="font-display font-black text-base tracking-tight text-[#242424] group-hover:text-[#9E2939] transition-colors block leading-tight">
                SANJAY SHRIRAM N
              </span>
              <span className="hidden sm:block font-mono-meta text-[10px] text-[#8A8981]">
                [EXP-MONOGRAPH // 2026]
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Primary"
            className="hidden md:flex items-center gap-6 font-sans text-xs"
          >
            {EDITORIAL_NAV.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`group relative py-1 transition-colors ${
                    isActive ? 'text-[#242424] font-bold' : 'text-[#5A5954] hover:text-[#242424]'
                  }`}
                >
                  <span className="font-mono-meta text-[10px] text-[#9E2939] mr-1.5 opacity-90 group-hover:opacity-100 font-bold">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="monograph-nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9E2939]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Status Meta / Intro Replay / Mobile Trigger */}
          <div className="flex items-center gap-3">
            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono-meta text-[#5A5954] hover:text-[#242424] border border-[#D8CEBA] hover:border-[#9E2939] transition-colors bg-[#FAF6EE] cursor-pointer shadow-xs"
                title="Replay introductory sequence"
                aria-label="Replay intro sequence"
              >
                <Film className="w-3.5 h-3.5 text-[#9E2939]" />
                <span>PROLOGUE</span>
              </button>
            )}

            <span className="hidden lg:inline-flex items-center gap-2 font-mono-meta text-[10px] text-[#5A5954] border border-[#D8CEBA] px-3 py-1 bg-[#FAF6EE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2939] animate-pulse" />
              <span>CHENNAI // 2026–2028</span>
            </span>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 text-[#242424] hover:text-[#9E2939] border border-[#D8CEBA] bg-[#FAF6EE] transition-colors cursor-pointer"
              aria-label={mobileOpen ? 'Close index navigation' : 'Open index navigation'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#F2EBDD]/98 p-6 pt-24 md:hidden flex flex-col justify-between border-b border-[#D8CEBA]"
          >
            <div className="space-y-6">
              <div className="font-mono-meta text-[10px] uppercase text-[#9E2939] tracking-widest pb-3 border-b border-[#D8CEBA] font-bold">
                PORTFOLIO DIRECTORY
              </div>
              <div className="flex flex-col space-y-3">
                {EDITORIAL_NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="font-display font-black text-3xl text-[#242424] hover:text-[#9E2939] flex items-baseline justify-between transition-colors py-2 border-b border-[#D8CEBA]/60"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono-meta text-xs text-[#9E2939]">{item.index}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="font-mono-meta text-xs text-[#5A5954] space-y-2 pt-6 border-t border-[#D8CEBA]">
              <p className="text-[#242424] font-sans font-semibold">{PROFILE.fullName}</p>
              <p>{PROFILE.institution}</p>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9E2939] inline-flex items-center gap-1 hover:underline pt-2 font-bold"
              >
                <span>github.com/sanjayshriram2025</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
