
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways Automation Can Boost Your Company's Efficiency",
      excerpt: "Discover how implementing automation in key business areas can significantly increase productivity and reduce operational costs.",
      date: "April 10, 2025",
      author: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      readTime: "5 min read"
    },
    {
      title: "Choosing the Right Automation Tools for Your Business",
      excerpt: "A comprehensive guide to selecting automation solutions that align with your specific business needs and objectives.",
      date: "March 28, 2025",
      author: "Sophia Chen",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=2070",
      readTime: "7 min read"
    },
    {
      title: "The Future of Business Process Automation",
      excerpt: "Exploring emerging trends and technologies that will shape the next generation of business automation systems.",
      date: "March 15, 2025",
      author: "Daniel Wilson",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="circuit-bg py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Our Blog</h2>
          <p className="text-lg text-novapro-gray">
            Free articles and insights on simplifying business operations and boosting revenue through automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="card group overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden mb-6 -mx-6 -mt-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center text-sm text-novapro-gray mb-3">
                  <div className="flex items-center mr-4">
                    <CalendarIcon size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-novapro-teal transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-novapro-gray mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <a href="#" className="inline-flex items-center text-novapro-teal hover:underline">
                  Read more <ArrowRightIcon size={16} className="ml-2" />
                </a>
                <span className="text-sm text-novapro-gray">{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="secondary-button">
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
