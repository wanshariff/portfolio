import { ExternalLink, ArrowRight, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Fixing Hotel Content Gaps for a Better Booking Experience',
      category: 'Case Study',
      description: 'Inspired by real user feedback, this project focused on addressing hotel content gaps and improving localisation quality to enhance booking experience.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*oHRKpwQWbAr9MIKH.png',
      tags: ['User Research', 'Content Strategy', 'UX Improvement'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@syazwanshariff/fixing-hotel-content-gaps-for-a-better-booking-experience-88cf7853e5da',
      date: 'Feb 21, 2024'
    },
    {
      id: 2,
      title: 'Designing the SME Digital Experience for MDEC\'s Virtual DX Platform',
      category: 'Case Study',
      description: 'Sprint 0 UX: Designing and validating the core mobile-first experience for MDEC\'s platform supporting Malaysian SMEs.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Z0CpqaLp04p3taky323Dlw.png',
      tags: ['Mobile Design', 'SME Experience', 'Government Platform'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@syazwanshariff/case-study-designing-the-sme-digital-experience-for-mdecs-virtual-dx-platform-a4963cb4b500',
      date: 'May 2, 2024'
    },
    {
      id: 3,
      title: 'Making Flight+Hotel Deals Clearer for Everyone',
      category: 'Case Study',
      description: 'Improving Clarity and Trust in AirAsia\'s SNAP Deals through enhanced user experience and clearer communication.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*by8ZGp43En3bcOZJW2vEZQ.png',
      tags: ['Travel UX', 'Deal Clarity', 'Trust Building'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@syazwanshariff/case-study-making-flight-hotel-deals-clearer-for-everyone-6053c05369dd',
      date: 'Apr 8, 2024'
    },
    {
      id: 4,
      title: 'Streamlining Farm Management & myGAP Certification',
      category: 'Case Study',
      description: 'Boosting Farmer Efficiency Through a Streamlined App Experience for agricultural management and certification.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*742jbvUnod0rw4JK_TGMBw.png',
      tags: ['AgTech', 'Mobile App', 'Certification Process'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@syazwanshariff/empowering-farmers-through-digital-innovation-d84f2d592400',
      date: 'Feb 21, 2024'
    },
    {
      id: 5,
      title: 'PETRONAS Upstream',
      category: 'Project Showcase',
      description: 'Diverse Creative Support for Corporate Communications including design systems and digital communications.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U3HI8sFe2qiVqG0nz6mtcg.png',
      tags: ['Corporate Design', 'Brand Identity', 'Communications'],
      type: 'project',
      mediumLink: 'https://medium.com/@syazwanshariff/project-showcase-petronas-upstream-c7dda061bcae',
      date: '4 days ago'
    },
    {
      id: 6,
      title: 'Building a Lemang Ordering & Delivery System',
      category: 'Project Showcase',
      description: 'Digitising order and delivery operations for a family lemang business, all built with Google tools.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*8rXeBfI3-XXnRxV0grgaCQ.jpeg',
      tags: ['Google Tools', 'Small Business', 'Digital Transformation'],
      type: 'project',
      mediumLink: 'https://medium.com/@syazwanshariff/building-a-lemang-ordering-delivery-system-powered-by-google-tools-7f4b3a7679dd',
      date: 'Apr 30, 2024'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my approach to solving complex design challenges 
              through research, strategy, and thoughtful execution.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card rounded-xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-surface overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 hidden items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-warm-accent flex items-center justify-center">
                        {project.type === 'case-study' ? (
                          <FileText className="w-8 h-8 text-background" />
                        ) : (
                          <Globe className="w-8 h-8 text-background" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button 
                      size="sm"
                      className="bg-accent text-white hover:bg-accent-glow hover:text-white font-medium rounded-lg px-4 py-2"
                      onClick={() => window.open(project.mediumLink, '_blank')}
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-accent">
                      {project.category}
                    </span>
                    <div className="text-xs text-muted-foreground">
                      {project.type === 'case-study' ? 'Case Study' : 'Project'}
                    </div>
                  </div>
                  
                  <h3 className="font-grotesk font-semibold text-lg text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-surface text-xs font-medium text-primary rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-accent hover:text-accent-glow transition-colors cursor-pointer">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Work CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View All Projects on Medium
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;