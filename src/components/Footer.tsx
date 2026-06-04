import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4F140A] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/chit_fund_logo.webp" alt="Aspire" className="h-12 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Trusted savings for every family. Building financial security through transparency and discipline.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map(({ name, ...Icon }, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#CFAF5D]/10 hover:bg-[#CFAF5D]/20 flex items-center justify-center transition-colors">
                  <Icon size={16} className="text-[#CFAF5D]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Chit Schemes', 'Knowledge', 'Investment', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-[#CFAF5D] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-[#CFAF5D] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:9514433333" className="flex items-center gap-2 text-white/60 hover:text-[#CFAF5D] transition-colors">
                <Phone size={14} />
                95144 33333
              </a>
              <a href="mailto:aspirechitfunds@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[#CFAF5D] transition-colors">
                <Mail size={14} />
                aspirechitfunds@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">3rd Floor, Nagammai Building, Coimbatore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* CIN & Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-xs">
            <div className="text-center">
              <p className="text-white/40 mb-1">CIN</p>
              <p className="text-[#CFAF5D] font-semibold">U64199TZ2026PTC039013</p>
            </div>
            <div className="text-center">
              <p className="text-white/40 mb-1">Email</p>
              <p className="text-white/70">aspirechitfunds@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="text-white/40 mb-1">Phone</p>
              <p className="text-white/70">95144 33333</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-xs text-white/40">
            <p>© {currentYear} Aspire Chit Fund India Pvt Ltd. All rights reserved.</p>
            <p className="mt-2">Registered under Companies Act with CIN: U64199TZ2026PTC039013</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#CFAF5D] text-white flex items-center justify-center font-bold hover:scale-110 transition-transform z-50"
      >
        ↑
      </button>
    </footer>
  );
}




