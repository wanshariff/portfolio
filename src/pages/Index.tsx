import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-grotesk font-bold text-2xl mb-4 text-primary">Wan Shariff</div>
            <p className="text-muted-foreground mb-6">
              Product Designer & UX Consultant
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:syazwanshariff@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Email
              </a>
              <a 
                href="https://medium.com/@syazwanshariff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Medium
              </a>
              <a 
                href="https://linkedin.com/in/syazwanshariff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="text-muted-foreground/60 text-sm">
              © 2024 Wan Shariff. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
