import { useEffect, useRef } from 'react';
import { Lightbulb, TrendingUp, PieChart, Target, Shield, Clock } from 'lucide-react';

const investmentTypes = [
  { icon: Target, title: 'Chit Funds', desc: 'Community-based savings with regular returns and liquidity options.' },
  { icon: Shield, title: 'Fixed Deposits', desc: 'Safe, guaranteed returns with predetermined interest rates.' },
  { icon: TrendingUp, title: 'Mutual Funds', desc: 'Market-linked investments for long-term wealth creation.' },
  { icon: PieChart, title: 'Gold Investments', desc: 'Tangible asset investment for portfolio diversification.' },
  { icon: Clock, title: 'Retirement Planning', desc: 'Strategic long-term savings for secure retirement.' },
  { icon: Lightbulb, title: 'Emergency Fund', desc: 'Quick-access reserves for unexpected financial needs.' },
];

const strategies = [
  { name: 'Conservative', risk: 'Low', return: '6-8%', desc: 'Emphasis on capital preservation' },
  { name: 'Balanced', risk: 'Medium', return: '10-12%', desc: 'Mix of safety and growth' },
  { name: 'Growth', risk: 'High', return: '14-16%+', desc: 'Maximum wealth accumulation' },
];

const benefits = [
  'Wealth Creation',
  'Inflation Protection',
  'Financial Independence',
  'Goal Achievement',
  'Future Security',
];

export default function Investment() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="investment" ref={sectionRef} className="section-padding bg-[#4F140A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(207,175,93,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* What is Investment */}
        <div className="mb-20 reveal">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Investment Fundamentals</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              What is Investment?
            </h2>
            <div className="gold-divider mb-5" />
            <p className="text-[#E4C77A]/80 text-lg leading-relaxed">
              Investment is the strategic allocation of your resources — money, time, and effort — toward assets that have the potential to grow in value. Whether through chit funds, deposits, or mutual funds, smart investing helps you build wealth, achieve financial goals, and secure your family's future.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Wealth Creation', val: 'Build lasting assets' },
              { label: 'Goal Planning', val: 'Achieve life milestones' },
              { label: 'Long-Term Growth', val: 'Compound returns' },
              { label: 'Financial Freedom', val: 'Independence & security' },
            ].map(({ label, val }) => (
              <div key={label} className="p-4 rounded-xl bg-[#2B0F0B] border border-[#CFAF5D]/15">
                <p className="font-semibold text-white text-sm mb-1">{label}</p>
                <p className="text-[#E4C77A]/80 text-xs">{val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="mb-20 reveal">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-12">Investment Strategies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map(({ name, risk, return: ret, desc }) => (
              <div key={name} className="p-6 rounded-2xl bg-[#2B0F0B] border border-[#CFAF5D]/15 premium-card">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-serif text-xl font-bold text-white">{name}</h4>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#CFAF5D]/10 text-[#CFAF5D]">{risk} Risk</span>
                </div>
                <p className="text-2xl font-bold text-[#1E4A34] mb-2">{ret}</p>
                <p className="text-[#E4C77A]/80 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Options */}
        <div className="reveal">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-12">Investment Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger mb-12">
            {investmentTypes.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal p-6 rounded-2xl bg-[#2B0F0B] border border-[#CFAF5D]/15 premium-card">
                <div className="w-12 h-12 rounded-xl bg-[#CFAF5D]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#CFAF5D]" size={24} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">{title}</h4>
                <p className="text-[#E4C77A]/80 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="reveal bg-[#4F140A] rounded-3xl px-8 py-12 text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-8">Benefits of Smart Investing</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass px-4 py-3 rounded-xl">
                <p className="text-white font-semibold text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
