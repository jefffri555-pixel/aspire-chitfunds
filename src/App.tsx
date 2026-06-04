import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import ChitSchemes from './components/ChitSchemes';
import Knowledge from './components/Knowledge';
import Investment from './components/Investment';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, input, select, textarea, .premium-card, .nav-link');
      setHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#FF0000] overflow-x-hidden">
      {/* Luxury Cursor */}
      <div
        className="cursor-dot"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <HowItWorks />
      <ChitSchemes />
      <Knowledge />
      <Investment />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;



