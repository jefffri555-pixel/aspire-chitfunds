import { useEffect, useRef } from 'react';
import { BookOpen, TrendingUp, Target, Clock, CheckCircle2, BarChart3, Lightbulb, Repeat } from 'lucide-react';

const articles = [
  {
    icon: TrendingUp,
    title: 'Maximize Your Savings & Grow Wealth',
    topics: ['Financial Discipline', 'Wealth Creation', 'Goal-Based Saving', 'Future Planning'],
    desc: 'Discover how disciplined monthly contributions can systematically build lasting wealth for your family.',
  },
  {
    icon: BookOpen,
    title: 'Unveiling Chit Funds',
    topics: ['What is a Chit Fund', 'How It Works', 'Benefits', 'Trust-Based Finance'],
    desc: 'A complete guide to understanding one of India\'s oldest and most trusted savings mechanisms.',
  },
  {
    icon: CheckCircle2,
    title: 'The Chit Fund Saving Advantage',
    topics: ['Regular Savings', 'Fund Accessibility', 'Financial Flexibility', 'Wealth Accumulation'],
    desc: 'Explore the unique advantages chit funds offer over traditional savings methods.',
  },
  {
    icon: Target,
    title: 'Flexible Saving Options',
    topics: ['Education Planning', 'Business Growth', 'Home Improvements', 'Emergency Planning'],
    desc: 'Whether planning for education or business expansion, chit funds adapt to your goals.',
  },
  {
    icon: Clock,
    title: 'Boost Your Short-Term Savings',
    topics: ['Festival Expenses', 'Vehicle Purchase', 'Family Functions', 'Education Needs'],
    desc: 'Short-term schemes designed to help you meet near-term financial needs.',
  },
  {
    icon: Repeat,
    title: 'Consistency is the Key',
    topics: ['Discipline', 'Habit Building', 'Long-Term Success'],
    desc: 'Building the habit of regular savings is the single most powerful financial decision.',
  },
  {
    icon: BarChart3,
    title: 'Strategic Saving: Time is Money',
    topics: ['Start Early', 'Build Wealth', 'Financial Preparedness'],
    desc: 'The earlier you start saving systematically, the greater your financial security.',
  },
  {
    icon: Lightbulb,
    title: 'Responsible Borrowing',
    topics: ['Smart Borrowing', 'Debt Management', 'Repayment Planning'],
    desc: 'Learn how accessing chit fund amounts can serve as a smarter alternative to loans.',
  },
  {
    icon: TrendingUp,
    title: 'Tips to Maximize Returns',
    topics: ['Choose Correct Scheme', 'Pay On Time', 'Plan Wisely', 'Stay Consistent'],
    desc: 'Practical tips to ensure you get the maximum benefit from your participation.',
  },
];

export default function Knowledge() {
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
    <section id="knowledge" ref={sectionRef} className="section-padding bg-[#FF0000] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #CFAF5D 0, #CFAF5D 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Financial Education</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Learn. Save. <span className="text-gold-gradient">Grow.</span>
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Helping families make informed financial decisions through knowledge and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {articles.map(({ icon: Icon, title, topics, desc }, i) => (
            <div key={i} className="reveal group p-6 rounded-2xl bg-[#FF0000]/20 border border-[#CFAF5D]/15 hover:bg-[#FF0000]/40 hover:border-[#CFAF5D]/35 transition-all duration-400 premium-card">
              <div className="w-12 h-12 rounded-xl bg-[#CFAF5D]/15 flex items-center justify-center mb-4 group-hover:bg-[#CFAF5D]/25 transition-colors">
                <Icon className="text-[#CFAF5D]" size={22} />
              </div>

              <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#E4C77A] transition-colors">
                {title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>

              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#CFAF5D]/10 text-[#CFAF5D]/80 border border-[#CFAF5D]/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



