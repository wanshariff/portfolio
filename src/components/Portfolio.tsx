import { ExternalLink, ArrowRight, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'Case Study',
      description: 'Complete UX overhaul of a major e-commerce platform, resulting in 40% increase in conversion rates.',
      image: '/api/placeholder/600/400',
      tags: ['User Research', 'Prototyping', 'Design System'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@wanshariff/ecommerce-redesign-case-study'
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      category: 'Product Design',
      description: 'Designed an intuitive mobile banking experience with focus on accessibility and security.',
      image: '/api/placeholder/600/400',
      tags: ['Mobile Design', 'Accessibility', 'User Testing'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@wanshariff/fintech-mobile-app-design'
    },
    {
      id: 3,
      title: 'Design System Creation',
      category: 'System Design',
      description: 'Built a comprehensive design system for a SaaS platform serving 10,000+ users.',
      image: '/api/placeholder/600/400',
      tags: ['Design System', 'Component Library', 'Documentation'],
      type: 'case-study',
      mediumLink: 'https://medium.com/@wanshariff/building-scalable-design-systems'
    },
    {
      id: 4,
      title: 'Healthcare Dashboard',
      category: 'Data Visualization',
      description: 'Complex data visualization tool for healthcare professionals.',
      image: '/api/placeholder/600/400',
      tags: ['Data Viz', 'Healthcare', 'Dashboard'],
      type: 'project',
      mediumLink: 'https://medium.com/@wanshariff/healthcare-dashboard-design'
    },
    {
      id: 5,
      title: 'Educational Platform',
      category: 'Learning Experience',
      description: 'Interactive learning platform design for online education.',
      image: '/api/placeholder/600/400',
      tags: ['EdTech', 'Interactive Design', 'Gamification'],
      type: 'project',
      mediumLink: 'https://medium.com/@wanshariff/educational-platform-ux'
    },
    {
      id: 6,
      title: 'Smart Home Interface',
      category: 'IoT Design',
      description: 'Voice and touch interface design for smart home ecosystem.',
      image: '/api/placeholder/600/400',
      tags: ['IoT', 'Voice UI', 'Smart Home'],
      type: 'project',
      mediumLink: 'https://medium.com/@wanshariff/smart-home-interface-design'
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
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-warm flex items-center justify-center">
                        {project.type === 'case-study' ? (
                          <FileText className="w-8 h-8 text-white" />
                        ) : (
                          <Globe className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button 
                      size="sm"
                      className="bg-white text-primary hover:bg-accent hover:text-white"
                      onClick={() => window.open(project.mediumLink, '_blank')}
                    >
                      Read on Medium
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
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
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