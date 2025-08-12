import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle, FileText, Users, Zap } from "lucide-react";
import { trackDownload, trackEvent, trackCTA } from './Analytics';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null);

  const leadMagnets = [
    {
      id: 'ux-checklist',
      title: 'UX Design Checklist',
      description: 'Complete 50-point checklist for user experience audits',
      icon: CheckCircle,
      fileName: 'UX-Design-Checklist-2024.pdf',
      benefits: ['Audit any digital product', 'Used by 500+ designers', 'Save 10+ hours per project']
    },
    {
      id: 'design-system-template',
      title: 'Design System Template',
      description: 'Figma template with components, tokens, and documentation',
      icon: FileText,
      fileName: 'Design-System-Template.fig',
      benefits: ['Ready-to-use components', 'Industry best practices', 'Documentation included']
    },
    {
      id: 'user-research-kit',
      title: 'User Research Kit',
      description: 'Templates for interviews, surveys, and usability tests',
      icon: Users,
      fileName: 'User-Research-Toolkit.zip',
      benefits: ['10+ research templates', 'Interview scripts included', 'Analysis frameworks']
    }
  ];

  const handleDownload = (magnetId: string, fileName: string) => {
    if (!email) {
      setSelectedMagnet(magnetId);
      return;
    }

    // Track the download
    trackDownload(fileName, 'lead_magnet');
    trackCTA(`download_${magnetId}`, 'lead_magnet_section');
    
    // In a real implementation, you would:
    // 1. Send email to your CRM/email service
    // 2. Trigger download of actual file
    // 3. Add user to email sequence
    
    setIsSubmitted(true);
    
    // Simulate file download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = `/lead-magnets/${fileName}`;
      link.download = fileName;
      link.click();
    }, 1000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMagnet && email) {
      const magnet = leadMagnets.find(m => m.id === selectedMagnet);
      if (magnet) {
        handleDownload(magnet.id, magnet.fileName);
      }
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 bg-gradient-to-br from-accent/10 to-warm/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-accent/20">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-grotesk font-bold text-foreground mb-4">
              Thank You! Download Starting...
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your download should start automatically. Check your email for additional resources and design insights.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-accent-foreground hover:bg-accent-glow"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resources" className="py-24 px-6 bg-gradient-to-br from-accent/10 to-warm/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-grotesk font-bold text-foreground mb-4">
            Free Design Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven templates and checklists used by 500+ designers and product teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {leadMagnets.map((magnet) => {
            const IconComponent = magnet.icon;
            return (
              <Card key={magnet.id} className="bg-background border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-accent to-accent-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-grotesk text-foreground">
                    {magnet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {magnet.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {magnet.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-card-foreground">
                        <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {selectedMagnet === magnet.id ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent-glow">
                        <Download className="h-4 w-4 mr-2" />
                        Download Now
                      </Button>
                    </form>
                  ) : (
                    <Button 
                      onClick={() => handleDownload(magnet.id, magnet.fileName)}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent-glow"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want custom templates for your team?
          </p>
          <Button 
            onClick={() => {
              trackCTA('custom_templates_inquiry', 'lead_magnet_section');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Get Custom Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;