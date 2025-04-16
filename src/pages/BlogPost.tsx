
import { useParams } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { CalendarIcon, UserIcon } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  // Find the post that matches the ID
  const post = t.blog.posts.find((post, index) => index.toString() === id);
  
  if (!post) {
    return <div className="min-h-screen bg-novapro-dark flex items-center justify-center">
      <p className="text-novapro-beige text-xl">Post not found</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-novapro-dark">
      <div className="section-container py-20">
        <div className="card max-w-4xl mx-auto">
          <div className="h-[400px] overflow-hidden -mx-6 -mt-6 mb-8">
            <img 
              src={id === "0" ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" :
                   id === "1" ? "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=2070" :
                   "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="px-6">
            <div className="flex items-center text-sm text-novapro-gray mb-4">
              <div className="flex items-center mr-4">
                <CalendarIcon size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon size={14} className="mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 text-novapro-beige">
              {post.title}
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-novapro-gray mb-6">
                {post.excerpt}
              </p>
              {/* Add more content here when available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
