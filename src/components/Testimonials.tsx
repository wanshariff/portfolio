import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Tech Startup",
      content: "Wan's strategic thinking and attention to user experience details helped us increase our conversion rate by 40%. His design system work created consistency across our entire product suite.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Ahmad Rahman", 
      role: "CEO",
      company: "E-commerce Platform",
      content: "Working with Wan was transformative for our business. He understood our users deeply and created solutions that perfectly balanced business goals with user needs. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Jennifer Liu",
      role: "Design Director", 
      company: "Financial Services",
      content: "Wan's expertise in user research and design systems is exceptional. He mentored our team while delivering outstanding results. His collaborative approach made the entire project smooth.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "David Tan",
      role: "CTO",
      company: "SaaS Company",
      content: "The UX improvements Wan implemented led to a 35% reduction in support tickets and significantly improved user satisfaction. His data-driven approach to design is impressive.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-grotesk font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What business leaders and teams say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <p className="text-card-foreground leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent-glow transition-colors text-lg"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;