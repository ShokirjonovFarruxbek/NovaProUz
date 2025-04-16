
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <section id="blog" className="circuit-bg py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t.blog.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.blog.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <div key={index} className="card group overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden mb-6 -mx-6 -mt-6">
                <img 
                  src={index === 0 ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" :
                       index === 1 ? "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=2070" :
                       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"} 
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
                <Link 
                  to={`/blog/${index}`} 
                  className="inline-flex items-center text-novapro-teal hover:underline"
                >
                  {t.blog.readMore} <ArrowRightIcon size={16} className="ml-2" />
                </Link>
                <span className="text-sm text-novapro-gray">{post.readTime} {t.blog.readTime}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="secondary-button">
            {t.blog.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
