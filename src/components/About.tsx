import { Award, Calendar, Users, Lightbulb, Palette, Code, Search, Presentation } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Digital Transformation', icon: Lightbulb, description: 'Strategic digital evolution' },
    { name: 'Experience Design', icon: Palette, description: 'End-to-end user experiences' },
    { name: 'Team Leadership', icon: Users, description: 'Cross-functional collaboration' },
    { name: 'UX Strategy', icon: Search, description: 'Systems thinking approach' },
    { name: 'User Research', icon: Presentation, description: 'Data-driven insights' },
    { name: 'Design Systems', icon: Code, description: 'Scalable UI libraries' }
  ];

  const technologies = [
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe XD', category: 'Design' },
    { name: 'Adobe Illustrator', category: 'Design' },
    { name: 'Adobe Photoshop', category: 'Design' },
    { name: 'Adobe After Effects', category: 'Motion' },
    { name: 'OutSystems', category: 'Development' },
    { name: 'WordPress', category: 'Development' },
    { name: 'HTML/CSS', category: 'Development' },
    { name: 'PowerPoint', category: 'Presentation' },
    
  ];

  const timeline = [
    { year: '2022-2024', title: 'AirAsia Super App - Senior Product Designer', description: 'Led design for SNAP and Hotel sections, contributing to 29% GBV growth. Mentored junior designers and maintained design system consistency.' },
    { year: '2021-2022', title: 'MDEC - Senior UI/UX Designer', description: 'Led design and front-end development for unified SME platform. Learned OutSystems on the fly to accelerate development.' },
    { year: '2019-2021', title: 'EY - Senior Experience Design Consultant', description: 'Partnered with clients across finance, telecom, e-commerce, and health sectors. Delivered impactful user experiences and measurable outcomes.' },
    { year: '2018-2019', title: 'Digital Art Director & Senior Designer', description: 'Led creative teams at 9 Lives Digital and Havas. Managed Unilever brand campaigns and comprehensive rebranding initiatives.' },
    { year: '2014-2018', title: 'Early Career - Designer & Developer', description: 'Built foundation at PETRONAS, IPG Mediabrands, and Stampede Design. Developed skills in corporate design and web development.' }
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
              Senior Product Designer with 12+ years of experience creating intuitive, impactful digital experiences. 
              Proven track record leading design for high-growth products across travel, finance, and government sectors.
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-20">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-grotesk font-semibold text-2xl text-primary mb-6">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From designing for AirAsia's SuperApp to helping Malaysia's SMEs through MDEC's platform, 
                  my 12+ year journey has been about creating digital experiences that truly matter. I specialize 
                  in translating complex business challenges into intuitive user experiences that drive measurable growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines strategic UX thinking with hands-on design execution. Whether leading 
                  cross-functional teams at EY or mentoring junior designers, I believe in collaborative design 
                  that puts users first while achieving business objectives. I'm fluent in both Malay and English, 
                  bringing cultural insights to every project.
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