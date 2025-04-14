
import { Settings, Code, Database, LineChart, Users, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="text-novapro-teal" size={40} />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to improve operational efficiency and reduce manual effort."
    },
    {
      icon: <Code className="text-novapro-teal" size={40} />,
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed to address your specific business challenges and requirements."
    },
    {
      icon: <Database className="text-novapro-teal" size={40} />,
      title: "System Integration",
      description: "Seamlessly connect different systems and applications to ensure data flows efficiently across your organization."
    },
    {
      icon: <LineChart className="text-novapro-teal" size={40} />,
      title: "Business Analytics",
      description: "Gain valuable insights from your data to make informed decisions and identify improvement opportunities."
    },
    {
      icon: <Users className="text-novapro-teal" size={40} />,
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to ensure your team maximizes the benefits of automation."
    },
    {
      icon: <FileCheck className="text-novapro-teal" size={40} />,
      title: "Audit & Optimization",
      description: "Thorough analysis of existing processes to identify optimization opportunities and implement improvements."
    }
  ];

  return (
    <section id="services" className="circuit-bg py-20 bg-novapro-lightdark">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-novapro-gray">
            We offer a comprehensive range of automation services designed to transform your business operations
            and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-novapro-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-novapro-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="cta-button">
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
