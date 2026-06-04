import { useEffect, useRef } from 'react';
import { ShieldCheck, Eye, Layers, Zap, HeartHandshake, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Government Registered',
    desc: 'Fully registered with CIN U64199TZ2026PTC039013. Complete legal compliance and regulatory adherence.',
    tag: 'Certified & Compliant',
  },
  {
    icon: Eye,
    title: 'Transparent Operations',
    desc: 'Every transaction, every dividend — completely transparent. No hidden charges or surprise deductions.',
    tag: '100% Open Process',
  },
  {
    icon: Layers,
    title: 'Flexible Chit Plans',
    desc: 'Multiple scheme values from ₹5 Lakh to ₹25 Lakh designed for different financial goals.',
    tag: 'Tailored for You',
  },
  {
    icon: Zap,
    title: 'Quick Fund Access',
    desc: 'Access large sums early through monthly auction. Financial help when you need it most.',
    tag: 'Fast Disbursement',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Centric Service',
    desc: 'Dedicated support team in Coimbatore. Personalized guidance for every member.',
    tag: 'Personal Attention',
  },
  {
    icon: TrendingUp,
    title: 'Secure Financial Planning',
    desc: 'Structured, disciplined savings with dividend returns. A proven method for building wealth.',
    tag: 'Wealth Building',
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#4F140A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFAF5D]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#CFAF5D]/5 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Why Aspire</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Why Choose <span className="text-gold-gradient">Aspire?</span>
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We combine the trust of traditional values with the transparency of modern finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {features.map(({ icon: Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="reveal group p-7 rounded-2xl border border-[#CFAF5D]/15 bg-[#4F140A]/40 hover:bg-[#4F140A]/60 hover:border-[#CFAF5D]/40 transition-all duration-400 premium-card"
            >
              <div className="w-14 h-14 rounded-xl bg-[#CFAF5D]/10 flex items-center justify-center mb-5 group-hover:bg-[#CFAF5D]/20 transition-colors duration-300">
                <Icon className="text-[#CFAF5D]" size={26} />
              </div>

              <span className="text-[#CFAF5D]/70 text-xs font-semibold tracking-widest uppercase mb-2 block">
                {tag}
              </span>

              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#CFAF5D] transition-colors duration-300">
                {title}
              </h3>

              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>

              <div className="mt-5 h-0.5 w-0 bg-gold-gradient group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




