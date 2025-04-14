
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Manufacturing Process Optimization",
      client: "MetalTech Industries",
      description: "Implemented automated inventory tracking and production scheduling, reducing operational costs by 30% and improving delivery times by 45%.",
      tags: ["1C", "Process Automation", "Manufacturing"],
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3700ef96?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Retail Chain Management System",
      client: "GlobeMart Retail",
      description: "Developed an integrated solution for managing 50+ retail locations, centralizing inventory, sales data, and customer information.",
      tags: ["MySklad", "Retail", "Inventory Management"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "HR Process Automation",
      client: "Innovate Consulting Group",
      description: "Streamlined recruitment, onboarding, and payroll processes, reducing administrative time by 65% and paperwork by 85%.",
      tags: ["HR Solutions", "Recruitment", "Payroll"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <section id="case-studies" className="circuit-bg py-20 bg-novapro-lightdark">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="text-lg text-novapro-gray">
            Explore how our automation solutions have transformed businesses across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card group overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden mb-6 -mx-6 -mt-6">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1">
                <div className="mb-2">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} className="mr-2 mb-2 bg-novapro-dark text-novapro-gray">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-novapro-teal transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-sm text-novapro-teal mb-3">Client: {study.client}</p>
                
                <p className="text-novapro-gray mb-4">
                  {study.description}
                </p>
              </div>
              
              <a href="#" className="inline-flex items-center text-novapro-teal hover:underline mt-4">
                Read full case study <ArrowRightIcon size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            View all case studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
