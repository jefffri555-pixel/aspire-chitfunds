import { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

function Shield2({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const values = [
  { icon: Shield2, label: 'Trust', desc: 'Every transaction backed by complete transparency' },
  { icon: Eye, label: 'Transparency', desc: 'Clear operations, no hidden charges' },
  { icon: Target, label: 'Discipline', desc: 'Structured savings for consistent growth' },
  { icon: Users, label: 'Community', desc: 'Collective growth through mutual benefit' },
  { icon: Heart, label: 'Family Security', desc: 'Protecting futures for generations' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-cream-pearl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFAF5D]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#123524]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#123524] mb-5">
            About Aspire Chit Fund
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-[#232323]/65 text-lg max-w-2xl mx-auto leading-relaxed">
            A modern financial services company committed to helping families and businesses build a secure future through structured savings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp_Image_2026-06-01_at_11.35.19_AM.jpeg"
                alt="Aspire Chit Funds"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass px-5 py-4 rounded-xl">
                  <p className="text-[#CFAF5D] font-serif italic text-lg font-semibold">
                    "நம்பிக்கையான சேமிப்பு"
                  </p>
                  <p className="text-white/80 text-sm mt-1">Trusted Savings for Every Family</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#4F140A] px-5 py-4 rounded-xl shadow-gold text-center">
              <p className="text-[#CFAF5D] font-serif text-2xl font-bold">2026</p>
              <p className="text-white text-xs mt-0.5">Established</p>
            </div>
          </div>

          <div className="reveal-right">
            <h3 className="font-serif text-3xl font-bold text-[#123524] mb-6">
              Building Trust Through Transparency
            </h3>
            <p className="text-[#232323]/70 leading-relaxed mb-6">
              Aspire Chit Fund India Pvt Ltd was founded with a singular vision — to bring modern, transparent, and disciplined financial solutions to families and businesses across Tamil Nadu.
            </p>
            <p className="text-[#232323]/70 leading-relaxed mb-8">
              Registered under the Companies Act, our operations are fully compliant, transparent, and customer-centric. We combine the trust of traditional chit fund practices with modern financial standards.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 rounded-xl bg-[#123524]/5 border border-[#123524]/10">
                <Target className="text-[#CFAF5D] mt-1 flex-shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-[#123524] mb-1">Our Mission</p>
                  <p className="text-[#232323]/65 text-sm leading-relaxed">
                    Helping families build a financially secure future through structured savings.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-[#CFAF5D]/8 border border-[#CFAF5D]/20">
                <Eye className="text-[#CFAF5D] mt-1 flex-shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-[#123524] mb-1">Our Vision</p>
                  <p className="text-[#232323]/65 text-sm leading-relaxed">
                    To become the most trusted financial service provider through transparency and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-[#4F140A] px-5 py-3 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#CFAF5D] animate-pulse" />
              <span className="text-white text-sm font-medium">CIN: U64199TZ2026PTC039013</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="font-serif text-2xl font-bold text-[#123524] text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 stagger">
            {values.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="reveal text-center p-5 rounded-xl bg-white border border-[#CFAF5D]/15 premium-card shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#CFAF5D]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#CFAF5D]" />
                </div>
                <p className="font-semibold text-[#123524] text-sm mb-1">{label}</p>
                <p className="text-[#232323]/55 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

