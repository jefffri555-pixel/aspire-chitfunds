import { useEffect, useRef } from 'react';
import { ArrowDown, Shield, Eye, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Shield, label: 'Registered Company', sub: 'Govt. of India' },
  { icon: Eye, label: 'Transparent Operations', sub: '100% Clear Process' },
  { icon: Users, label: 'Customer-Centric', sub: 'Family First' },
  { icon: TrendingUp, label: 'Trusted Solutions', sub: 'Smart Savings' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const orbs = heroRef.current.querySelectorAll<HTMLElement>('.parallax-orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#082340]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#082340]/80 via-transparent to-[#082340]/90" />

      <div className="parallax-orb orb absolute top-1/4 right-1/4 w-80 h-80 bg-[#CFAF5D]/10 transition-transform duration-300 ease-out" />
      <div className="parallax-orb orb absolute bottom-1/3 left-1/6 w-60 h-60 bg-[#CFAF5D]/8 transition-transform duration-300 ease-out" style={{ animationDelay: '2s' }} />
      <div className="parallax-orb orb absolute top-1/2 left-1/2 w-40 h-40 bg-[#082340]/60 transition-transform duration-300 ease-out" style={{ animationDelay: '4s' }} />

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="gold-particle absolute w-1.5 h-1.5 bg-[#CFAF5D] rounded-full opacity-40"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
            '--duration': `${3 + i * 0.7}s`,
            '--delay': `${i * 0.5}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 hero-content max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-up mx-auto">
            <div className="w-2 h-2 rounded-full bg-[#CFAF5D] animate-pulse" />
            <span className="text-[#E4C77A] text-sm font-medium tracking-wide">
              CIN: U64199TZ2026PTC039013
            </span>
          </div>

          <p className="text-[#CFAF5D]/90 text-base font-semibold tracking-[0.5px] uppercase mb-4 font-serif italic animate-fade-up" style={{ animationDelay: '0.1s' }}>
            நம்பிக்கையான சேமிப்பு · ஒளிவான குடும்ப எதிர்காலம்
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-up text-center" style={{ animationDelay: '0.2s' }}>
            Secure Savings.<br />
            <span className="text-gold-gradient">Stronger Futures.</span>
          </h1>

          <p className="text-[#FAFAF8]/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 animate-fade-up mx-auto text-center" style={{ animationDelay: '0.3s' }}>
            A trusted partner for disciplined savings, financial growth, and future planning.
            Building wealth for families across Tamil Nadu with transparency and integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up justify-center items-center mx-auto" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => document.getElementById('schemes')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold px-8 py-4 rounded-full text-base font-semibold"
            >
              Join a Chit Scheme
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-emerald px-8 py-4 rounded-full text-base"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {stats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="glass px-4 py-4 rounded-xl group hover:border-[#CFAF5D]/40 transition-all duration-300 text-center">
                <Icon size={22} className="text-[#CFAF5D] mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                <p className="text-[#CFAF5D]/70 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#CFAF5D]/60 hover:text-[#CFAF5D] transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}






