import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Business Owner',
    image: '/chit_fund_logo.webp',
    rating: 5,
    quote: 'Aspire helped me save consistently for my business expansion. The transparency and regular dividends were exceptional. I now recommend them to all my friends.',
  },
  {
    name: 'Priya Sharma',
    role: 'Homemaker',
    image: '/chit_fund_logo.webp',
    rating: 5,
    quote: 'Finally, a chit fund I can trust completely. The process is so clear, and the team in Coimbatore is incredibly supportive. Worth every penny!',
  },
  {
    name: 'Arjun Nair',
    role: 'IT Professional',
    image: '/chit_fund_logo.webp',
    rating: 5,
    quote: "Aspire's Gold Scheme helped me finance my home renovation. Disciplined savings with real returns. Highly recommended for young professionals.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#FF0000] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFAF5D]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-[#CFAF5D] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Member Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Voices of <span className="text-gold-gradient">Trust</span>
          </h2>
          <div className="gold-divider mb-5" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real families sharing their success stories with Aspire Chit Fund.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {testimonials.map(({ name, role, rating, quote }, i) => (
            <div key={i} className="reveal testimonial-card p-8 rounded-2xl bg-white">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#CFAF5D] text-[#CFAF5D]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#232323] leading-relaxed mb-6 font-light text-sm">
                "{quote}"
              </p>

              {/* Author */}
              <div className="border-t border-[#CFAF5D]/20 pt-4">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-[#CFAF5D] text-sm">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


