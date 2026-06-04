import { useEffect, useRef } from 'react';
import { Search, UserPlus, IndianRupee, Gift } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Choose a Scheme',
    desc: 'Browse our curated chit schemes. Select the one that matches your financial goals.',
    color: 'from-[#FF0000] to-[#FF0000]',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Enroll Easily',
    desc: 'Complete simple enrollment with minimal documentation. Our team guides you through every step.',
    color: 'from-[#FF0000] to-[#FF0000]',
  },
  {
    number: '03',
    icon: IndianRupee,
    title: 'Monthly Contribution',
    desc: 'Make your monthly instalment on time. Participate in monthly auctions.',
    color: 'from-[#FF0000] to-[#FF0000]',
  },
  {
    number: '04',
    icon: Gift,
    title: 'Receive Chit Benefits',
    desc: 'Win the auction amount or accumulate dividends. Get full value by the end.',
    color: 'from-[#FF0000] to-[#FF0000]',
  },
];

export default function HowItWorks() {
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
    <section ref={sectionRef} className="section-padding bg-[#FF0000] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(18,53,36,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(207,175,93,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Simple Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            How Chit Funds Work
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-[#E4C77A]/80 text-lg max-w-2xl mx-auto">
            A time-tested savings mechanism made simple. Transparent, structured, and beneficial for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative stagger">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#CFAF5D]/40 to-transparent z-0" />

          {steps.map(({ number, icon: Icon, title, desc, color }, i) => (
            <div key={number} className="reveal relative z-10 group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#CFAF5D]/15 hover:border-[#CFAF5D]/40 hover:shadow-gold transition-all duration-400 premium-card h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-emerald`}>
                    <Icon className="text-[#CFAF5D]" size={24} />
                  </div>
                  <span className="font-serif text-5xl font-bold text-[#CFAF5D]/50 leading-none">{number}</span>
                </div>

                <span className="text-[#CFAF5D] text-xs font-bold tracking-widest uppercase mb-3 block">
                  Step {i + 1}
                </span>

                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#E4C77A]">
                  {title}
                </h3>
                <p className="text-[#E4C77A]/80 text-sm leading-relaxed">{desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <div className="w-0.5 h-6 bg-[#CFAF5D]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <p className="text-[#E4C77A]/80 mb-5 text-lg">Ready to start your savings journey?</p>
          <button
            onClick={() => document.getElementById('schemes')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-8 py-4 rounded-full text-base font-semibold"
          >
            View All Schemes
          </button>
        </div>
      </div>
    </section>
  );
}


