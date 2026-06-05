import { ShieldCheck, Eye, Shield, Users, BarChart3, Handshake } from 'lucide-react';

const values = [
  { title: 'Trust', icon: ShieldCheck, description: 'We build confidence through reliable services and honest communication.' },
  { title: 'Transparency', icon: Eye, description: 'Clear processes and open information are at the heart of every interaction.' },
  { title: 'Compliance', icon: Shield, description: 'We follow strict regulations and ethical standards to protect your investment.' },
  { title: 'Customer Focus', icon: Users, description: 'Your goals guide our solutions, support, and personalized advice.' },
  { title: 'Financial Discipline', icon: BarChart3, description: 'We encourage smart savings and disciplined planning for steady growth.' },
  { title: 'Integrity', icon: Handshake, description: 'We act responsibly with fairness, respect, and accountability.' },
];

export default function MissionValues() {
  return (
    <section id="mission-values" className="section-padding bg-[#EAF7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#388087] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#082340] mb-4">Our Mission & Our Values</h2>
          <p className="max-w-2xl mx-auto text-[#264D55] text-base md:text-lg leading-relaxed">
            Aspire Chit Funds is committed to delivering a premium chit fund experience with a focus on trust, discipline, and purpose.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] border border-[#D9E9E1] shadow-lg p-8 md:p-10 min-h-[240px] flex flex-col justify-center">
              <p className="text-[#388087] uppercase tracking-[0.2em] text-xs font-semibold mb-4">Mission</p>
              <h3 className="font-serif text-3xl font-bold text-[#082340] mb-4">Our Mission</h3>
              <p className="text-[#2A3E40] leading-relaxed text-base md:text-lg">
                To provide secure, transparent, and accessible chit fund solutions that help families and businesses achieve their financial goals with trust, discipline, and growth.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] border border-[#D9E9E1] shadow-lg p-8 md:p-10 min-h-[240px] flex flex-col justify-center">
              <p className="text-[#388087] uppercase tracking-[0.2em] text-xs font-semibold mb-4">Vision</p>
              <h3 className="font-serif text-3xl font-bold text-[#082340] mb-4">Our Vision</h3>
              <p className="text-[#2A3E40] leading-relaxed text-base md:text-lg">
                To become a trusted financial partner across Tamil Nadu by empowering people with disciplined savings, transparent processes, and long-term financial security.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-[#D9E9E1] shadow-lg p-8 md:p-10">
            <p className="text-[#388087] uppercase tracking-[0.2em] text-xs font-semibold mb-4">Values</p>
            <h3 className="font-serif text-3xl font-bold text-[#082340] mb-6">Our Values</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-3xl bg-[#F4FBF8] border border-[#C5E6DD] p-4 text-center min-h-[150px] flex flex-col justify-center items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#D4EEE4] text-[#388087] shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#082340] font-semibold text-base mb-2">{title}</h4>
                    <p className="text-[#385C5D] text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
