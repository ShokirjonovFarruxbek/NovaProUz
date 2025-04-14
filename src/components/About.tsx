
import { CheckCircle, BarChart, Clock, Coins } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="circuit-bg py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="text-lg text-novapro-gray">
            NovaPro is a leading provider of business automation solutions dedicated to optimizing processes, 
            reducing operational costs, and increasing profitability for B2B clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-subtitle">Our Mission</h3>
            <p className="mb-6 text-novapro-gray">
              We strive to empower businesses through innovative automation solutions that streamline operations, 
              enhance productivity, and drive sustainable growth.
            </p>
            
            <h3 className="section-subtitle">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-novapro-teal mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Expert team with deep industry knowledge</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-novapro-teal mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Customized solutions tailored to your specific needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-novapro-teal mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Comprehensive support and maintenance services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-novapro-teal mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Proven track record of successful implementations</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="card flex flex-col items-center text-center p-6">
              <BarChart className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">Efficiency</h4>
              <p className="text-novapro-gray text-sm">Streamline operations and eliminate redundancies</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <Clock className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">Time Saving</h4>
              <p className="text-novapro-gray text-sm">Reduce manual tasks and focus on core activities</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <Coins className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">Cost Reduction</h4>
              <p className="text-novapro-gray text-sm">Lower operational expenses and resource utilization</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <BarChart className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">Growth</h4>
              <p className="text-novapro-gray text-sm">Scale your business with automated processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
