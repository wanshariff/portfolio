import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative geometric-pattern">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <div className="mb-8 animate-float">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-grotesk font-bold text-3xl shadow-strong animate-glow">
              WS
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl text-primary mb-6 animate-fade-in">
            Wan Shariff
          </h1>
          
          <div className="font-grotesk font-semibold text-2xl md:text-3xl text-accent mb-8 animate-slide-up">
            Product Designer & UX Consultant
          </div>

          {/* Professional Statement */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
            Crafting digital experiences that bridge human needs with business goals. 
            Specializing in design systems, user research, and strategic design thinking 
            to create meaningful, accessible, and beautiful products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Button 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-background font-semibold px-8 py-4 rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-background font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-warm/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-4 h-4 rounded-full bg-primary/20"></div>
      <div className="absolute top-1/3 right-32 w-6 h-6 rounded-full bg-accent/20"></div>
    </section>
  );
};

export default Hero;