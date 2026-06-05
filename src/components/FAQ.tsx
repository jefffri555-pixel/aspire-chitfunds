import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is a Chit Fund?',
    a: 'A chit fund is a rotating savings and credit system where members contribute fixed amounts monthly. Each month, one member receives the combined pool through an auction, and others receive dividends. It combines savings discipline with financial access.',
  },
  {
    q: 'How Does a Chit Fund Work?',
    a: 'Members join a scheme, contribute monthly installments, and participate in monthly auctions. Winners receive the pool amount (with a discount), and non-winners earn dividends. By the end of the tenure, all members receive the full value of their contributions.',
  },
  {
    q: 'How Do I Join a Chit Scheme?',
    a: 'Contact us with your basic information, select a suitable scheme, complete simple documentation, and begin monthly contributions. Our team at the Coimbatore office will guide you through the entire enrollment process.',
  },
  {
    q: 'Is Aspire Registered and Regulated?',
    a: 'Yes! Aspire Chit Fund India Pvt Ltd is fully registered under the Companies Act with CIN: U64199TZ2026PTC039013. We operate with complete transparency and regulatory compliance.',
  },
  {
    q: 'What Documents Are Required?',
    a: 'Standard KYC documents including PAN, Aadhar, bank account details, and identification proof. We keep the process simple and hassle-free.',
  },
  {
    q: 'How Are Payments Managed?',
    a: 'Payments are collected through bank transfers, making the process secure and transparent. You can track all transactions in real-time through our system.',
  },
  {
    q: 'How Can I Contact Aspire?',
    a: 'Phone: 95144 33333 | Email: aspirechitfunds@gmail.com | Office: 3rd Floor, Nagammai Building, New VOC Park Roundana, Coimbatore – 641018',
  },
  {
    q: 'What Schemes Do You Offer?',
    a: 'We offer three main schemes: Silver (₹5 Lakh, 20 months), Gold (₹10 Lakh, 40 months), and Platinum (₹25 Lakh, 40 months). Each offers different benefits and returns.',
  },
];

interface FAQItem {
  q: string;
  a: string;
}

function FAQItem({ item, open, onToggle }: { item: FAQItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#CFAF5D]/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between hover:bg-[#CFAF5D]/10 transition-colors px-4 -mx-4"
      >
        <span className="font-semibold text-[#232323] text-left">{item.q}</span>
        <ChevronDown
          size={20}
          className={`text-[#082340] flex-shrink-0 ml-3 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`accordion-content ${open ? 'open' : ''}`}
        style={{ maxHeight: open ? '200px' : '0' }}
      >
        <p className="text-[#232323]/75 leading-relaxed px-4 pb-5 text-sm">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section id="faq" ref={sectionRef} className="section-padding bg-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 reveal">
          <p className="text-[#082340] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Common Questions</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#232323] mb-5">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider mb-5" />
        </div>

        <div className="reveal bg-white rounded-2xl border border-[#CFAF5D]/20 overflow-hidden shadow-sm">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className="text-center text-[#232323]/65 text-sm mt-8 reveal">
          Can't find the answer you're looking for? Contact our team at 95144 33333
        </p>
      </div>
    </section>
  );
}





