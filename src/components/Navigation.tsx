import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Chit Schemes', href: '#schemes' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Investment', href: '#investment' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 60);
      setProgress((scrollTop / docHeight) * 100);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-emerald py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/chit_fund_logo.webp"
              alt="Aspire"
              className="h-12 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'text-[#CFAF5D]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9514433333"
              className="flex items-center gap-2 text-sm font-medium text-[#CFAF5D] hover:text-white transition-colors"
            >
              <Phone size={15} />
              95144 33333
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-gold px-5 py-2.5 rounded-full text-sm"
            >
              Join Now
            </button>
          </div>

          <button
            className="lg:hidden text-[#CFAF5D] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-dark px-6 py-6 flex flex-col gap-4 border-t border-gold-rich/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-cream-pearl hover:text-[#CFAF5D] font-medium py-2 border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-gold px-6 py-3 rounded-full text-sm mt-2 w-full"
            >
              Join a Chit Scheme
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
