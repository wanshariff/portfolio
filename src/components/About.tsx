import { Award, Calendar, Users, Lightbulb, Palette, Code, Search, Presentation } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Product Design', icon: Palette, description: 'End-to-end product design' },
    { name: 'UX Consulting', icon: Users, description: 'Strategic design guidance' },
    { name: 'Design Systems', icon: Code, description: 'Scalable UI libraries' },
    { name: 'Design Thinking', icon: Lightbulb, description: 'Innovation workshops' },
    { name: 'User Research', icon: Search, description: 'Data-driven insights' },
    { name: 'Workshops', icon: Presentation, description: 'Team facilitation' }
  ];

  const technologies = [
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe Illustrator', category: 'Design' },
    { name: 'Adobe Photoshop', category: 'Design' },
    { name: 'Adobe After Effects', category: 'Motion' },
    { name: 'WordPress', category: 'Development' },
    { name: 'WebFlow', category: 'Development' },
    { name: 'Framer', category: 'Prototyping' },
    { name: 'GitHub', category: 'Collaboration' },
    { name: 'VSCode', category: 'Development' },
    { name: 'HTML/CSS', category: 'Development' }
  ];

  const timeline = [
    { year: '2023', title: 'Senior UX Consultant', description: 'Leading design strategy for enterprise clients' },
    { year: '2022', title: 'Product Design Lead', description: 'Built design systems for multiple products' },
    { year: '2021', title: 'UX Designer', description: 'Specialized in user research and interface design' },
    { year: '2020', title: 'Design Thinking Facilitator', description: 'Conducted workshops for innovation teams' }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate designer with a mission to create meaningful digital experiences 
              that solve real problems and delight users.
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-20">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-grotesk font-semibold text-2xl text-primary mb-6">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My design journey began with a simple belief: technology should serve humanity, 
                  not the other way around. Over the years, I've had the privilege of working with 
                  startups and established companies, helping them translate complex problems into 
                  elegant, user-friendly solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of collaborative design, where diverse perspectives 
                  come together to create something truly extraordinary. My approach combines 
                  rigorous research, creative problem-solving, and a deep empathy for the 
                  people who will ultimately use the products we create.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-20">
            <h3 className="font-grotesk font-semibold text-3xl text-center text-primary mb-12">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-item bg-card rounded-xl p-6 text-center border border-border hover:border-accent/30 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-grotesk font-semibold text-lg text-primary mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h3 className="font-grotesk font-semibold text-3xl text-center text-primary mb-12">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-card rounded-lg p-4 text-center border border-border hover:border-accent/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="font-medium text-sm text-primary mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-grotesk font-semibold text-3xl text-center text-primary mb-12">
              Professional Journey
            </h3>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 md:w-24">
                    <div className="font-grotesk font-bold text-accent text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow ml-6 md:ml-8">
                    <div className="bg-card rounded-lg p-6 border border-border">
                      <h4 className="font-grotesk font-semibold text-lg text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;