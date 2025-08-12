import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { useScrollDepthTracking, trackPagePerformance, trackNavigation } from '@/components/Analytics';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Initialize analytics tracking
  useScrollDepthTracking();
  trackPagePerformance();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              trackNavigation(section, 'scroll');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Enhanced Footer with SEO */}
      <footer className="bg-surface border-t border-border py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-grotesk font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <a href="mailto:hello@wanshariff.design" className="hover:text-accent transition-colors">
                    hello@wanshariff.design
                  </a>
                </p>
                <p>
                  <a href="tel:+60123456789" className="hover:text-accent transition-colors">
                    +60 12-345 6789
                  </a>
                </p>
                <p>Kuala Lumpur, Malaysia</p>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-grotesk font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Product Design</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">UX Consulting</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Design Systems</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">User Research</a></li>
              </ul>
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="font-grotesk font-semibold text-foreground mb-4">Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AirAsia SuperApp</li>
                <li>Ernst & Young (EY)</li>
                <li>Malaysia Digital Economy Corporation</li>
                <li>12+ Years in Design</li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="font-grotesk font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://medium.com/@wanshariff" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Medium Articles</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                <p>© 2024 Wan Shariff. All rights reserved. | Product Designer & UX Consultant in Malaysia</p>
              </div>
              <div className="flex gap-4 text-muted-foreground text-sm">
                <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
