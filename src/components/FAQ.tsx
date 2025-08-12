import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "What is your experience as a Product Designer?",
      answer: "I have 12+ years of experience in product design, having worked with high-growth companies like AirAsia SuperApp where I contributed to 29% GBV growth. I specialize in UX strategy, design systems, and cross-functional collaboration across travel, finance, and government sectors."
    },
    {
      question: "Do you work with startups or only large companies?",
      answer: "I work with organizations of all sizes - from early-stage startups needing foundational design strategy to large enterprises requiring digital transformation. My experience at companies like AirAsia, EY, and MDEC gives me insights into scaling design across different organizational contexts."
    },
    {
      question: "What's your process for a new project?",
      answer: "I start with understanding your business goals and user needs through stakeholder interviews and user research. Then I create detailed user flows, wireframes, and prototypes. Throughout the process, I run usability tests and iterate based on feedback to ensure the final design meets both user needs and business objectives."
    },
    {
      question: "Can you help with design systems and team mentoring?",
      answer: "Absolutely! I have extensive experience building and maintaining design systems that ensure consistency across all touchpoints. I also enjoy mentoring junior designers and have led design teams at multiple organizations, helping them refine their skills and align with product vision."
    },
    {
      question: "Do you offer remote consulting services?",
      answer: "Yes, I offer both on-site (Malaysia) and remote consulting services. Having worked in agile environments across different time zones, I'm comfortable collaborating with distributed teams and can adapt to your preferred working arrangements."
    },
    {
      question: "What industries do you have experience in?",
      answer: "I have experience across multiple industries including travel & hospitality (AirAsia), financial services, telecommunications, e-commerce, utilities, healthcare, and government sectors. This diverse background helps me bring unique perspectives to any project."
    },
    {
      question: "How do you measure design success?",
      answer: "I believe in data-driven design decisions. I use a combination of quantitative metrics (conversion rates, task completion, user engagement) and qualitative insights (user feedback, usability testing) to measure success. Every project includes clear KPIs that align with business objectives."
    },
    {
      question: "What tools and technologies do you use?",
      answer: "I'm proficient in industry-standard tools like Figma, Adobe Creative Suite, and prototyping tools. I also have front-end development experience with HTML/CSS and platforms like OutSystems, which helps me bridge the gap between design and development teams."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-grotesk font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Common questions from recruiters, business owners, and potential collaborators
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have a specific question about your project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent-glow transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;