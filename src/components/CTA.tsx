import { useEffect, useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.3 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#4F140A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(207,175,93,0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 reveal">
          Start Your Financial Growth Journey Today
        </h2>
        <p className="text-[#E4C77A]/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto reveal">
          Whether you are planning savings, building wealth, or preparing for future goals, Aspire Chit Fund is here to support your financial journey with transparency, trust, and proven results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <button
            onClick={() => document.getElementById('schemes')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-8 py-4 rounded-full font-semibold"
          >
            Explore Schemes
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-emerald px-8 py-4 rounded-full font-semibold"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
