import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

interface SchemeRow {
  month: number;
  instalment: number;
  dividend: number;
  prize: number;
  total: number;
}

interface Scheme {
  id: string;
  tier: string;
  name: string;
  value: number;
  formula: string;
  months: number;
  monthly: number;
  highlight: string;
  rows: SchemeRow[];
}

const scheme500k: SchemeRow[] = [
  { month: 1, instalment: 25000, dividend: 0, prize: 0, total: 25000 },
  { month: 2, instalment: 20000, dividend: 5000, prize: 365000, total: 45000 },
  { month: 5, instalment: 20000, dividend: 5000, prize: 365000, total: 105000 },
  { month: 10, instalment: 21250, dividend: 3750, prize: 395000, total: 208750 },
  { month: 15, instalment: 22750, dividend: 2250, prize: 430000, total: 319000 },
  { month: 20, instalment: 25000, dividend: 0, prize: 485000, total: 440000 },
];

const scheme1M: SchemeRow[] = [
  { month: 1, instalment: 25000, dividend: 0, prize: 0, total: 25000 },
  { month: 5, instalment: 16250, dividend: 8750, prize: 580000, total: 90000 },
  { month: 10, instalment: 16250, dividend: 8750, prize: 580000, total: 171250 },
  { month: 15, instalment: 16250, dividend: 8750, prize: 580000, total: 252500 },
  { month: 20, instalment: 17500, dividend: 7500, prize: 640000, total: 340000 },
  { month: 40, instalment: 17500, dividend: 7500, prize: 640000, total: 1000000 },
];

const scheme2_5M: SchemeRow[] = [
  { month: 1, instalment: 62500, dividend: 0, prize: 0, total: 62500 },
  { month: 5, instalment: 40625, dividend: 21875, prize: 1450000, total: 225000 },
  { month: 10, instalment: 40625, dividend: 21875, prize: 1450000, total: 428125 },
  { month: 15, instalment: 40625, dividend: 21875, prize: 1450000, total: 631250 },
  { month: 20, instalment: 43750, dividend: 18750, prize: 1600000, total: 850000 },
  { month: 40, instalment: 43750, dividend: 18750, prize: 1600000, total: 2500000 },
];

const schemes: Scheme[] = [
  {
    id: 'silver',
    tier: 'Silver',
    name: 'Silver Scheme',
    value: 500000,
    formula: '₹25,000 × 20 Months',
    months: 20,
    monthly: 25000,
    highlight: 'Perfect for short-term goals',
    rows: scheme500k,
  },
  {
    id: 'gold',
    tier: 'Gold',
    name: 'Gold Scheme',
    value: 1000000,
    formula: '₹25,000 × 40 Months',
    months: 40,
    monthly: 25000,
    highlight: 'Most Popular Choice',
    rows: scheme1M,
  },
  {
    id: 'platinum',
    tier: 'Platinum',
    name: 'Platinum Scheme',
    value: 2500000,
    formula: '₹62,500 × 40 Months',
    months: 40,
    monthly: 62500,
    highlight: 'Maximum wealth creation',
    rows: scheme2_5M,
  },
];

const fmt = (n: number) => n.toLocaleString('en-IN');

function SchemeCard({ scheme, active, onToggle }: { scheme: Scheme; active: boolean; onToggle: () => void }) {
  const isGold = scheme.id === 'gold';

  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-400 premium-card ${
      isGold
        ? 'border-[#CFAF5D] shadow-gold-lg scale-[1.02]'
        : 'border-[#CFAF5D]/20 bg-white shadow-sm hover:border-[#CFAF5D]/40'
    }`}>
      <div className={`relative px-7 py-6 ${isGold ? 'bg-gradient-to-br from-[#4F140A] via-[#4F140A] to-[#4F140A]' : 'bg-[#4F140A]'}`}>
        {isGold && (
          <div className="absolute top-4 right-4 bg-[#CFAF5D] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
            MOST POPULAR
          </div>
        )}
        <span className="text-[#CFAF5D]/70 text-xs font-bold tracking-widest uppercase">{scheme.tier}</span>
        <h3 className="font-serif text-2xl font-bold text-white mt-1">{scheme.name}</h3>
        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-4xl font-bold text-[#CFAF5D]">₹{fmt(scheme.value)}</span>
        </div>
        <p className="text-white/60 text-sm mt-1">{scheme.formula}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#CFAF5D]" />
          <span className="text-[#CFAF5D]/80 text-xs">{scheme.highlight}</span>
        </div>
      </div>

      <div className="px-7 py-5 bg-white">
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-[#F7F2E8] rounded-lg p-3 text-center">
            <p className="text-[#232323] font-bold text-lg">₹{fmt(scheme.monthly)}</p>
            <p className="text-white/70 text-xs">Monthly</p>
          </div>
          <div className="bg-[#F7F2E8] rounded-lg p-3 text-center">
            <p className="text-[#232323] font-bold text-lg">{scheme.months}</p>
            <p className="text-[#E4C77A]/80 text-xs">Months</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-[#CFAF5D]/25 hover:border-[#CFAF5D]/60 hover:bg-[#CFAF5D]/5 transition-all mb-4"
        >
          <span className="text-white text-sm font-semibold">View Scheme Details</span>
          {active ? <ChevronUp size={16} className="text-[#CFAF5D]" /> : <ChevronDown size={16} className="text-[#CFAF5D]" />}
        </button>

        <div className={`accordion-content ${active ? 'open' : ''}`}>
          <div className="overflow-x-auto rounded-xl border border-[#CFAF5D]/15 mb-4">
            <table className="scheme-table w-full text-center">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Instalment</th>
                  <th>Dividend</th>
                  <th>Prize</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {scheme.rows.map((row) => (
                  <tr key={row.month}>
                    <td className="font-semibold text-[#232323]">{row.month}</td>
                    <td>₹{fmt(row.instalment)}</td>
                    <td className="text-[#CFAF5D] font-medium">₹{fmt(row.dividend)}</td>
                    <td className="text-[#1E4A34] font-medium">₹{fmt(row.prize)}</td>
                    <td className="font-semibold text-[#232323]">₹{fmt(row.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isGold
              ? 'btn-gold'
              : 'border border-[#CFAF5D] text-white hover:bg-[#CFAF5D] hover:text-[#4F140A]'
          }`}
        >
          <Phone size={15} />
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export default function ChitSchemes() {
  const [activeTable, setActiveTable] = useState<string | null>(null);
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
    <section id="schemes" ref={sectionRef} className="section-padding bg-[#4F140A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(207,175,93,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Offerings</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Chit Schemes
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-[#E4C77A]/80 text-lg max-w-2xl mx-auto">
            Choose the scheme that fits your financial goals. All plans include dividend returns and flexible access.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start reveal">
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              active={activeTable === scheme.id}
              onToggle={() => setActiveTable(activeTable === scheme.id ? null : scheme.id)}
            />
          ))}
        </div>

        <p className="text-center text-[#E4C77A]/60 text-sm mt-10 reveal">
          * Scheme amounts and dividends are for illustration. Actual amounts may vary.
        </p>
      </div>
    </section>
  );
}



