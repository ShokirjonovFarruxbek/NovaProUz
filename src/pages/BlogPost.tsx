
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  // Find the post that matches the ID
  const post = t.blog.posts.find((post, index) => index.toString() === id);
  
  const images = [
    id === "0" ? [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
    ] : id === "1" ? [
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070"
    ] : [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070"
    ]
  ][0];
  
  if (!post) {
    return <div className="min-h-screen bg-novapro-dark flex items-center justify-center">
      <p className="text-novapro-beige text-xl">Post not found</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-novapro-dark">
      <div className="section-container py-20">
        <Button 
          variant="outline" 
          className="mb-6 text-novapro-beige hover:text-novapro-teal"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="card max-w-4xl mx-auto">
          <div className="h-[400px] overflow-hidden -mx-6 -mt-6 mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-[400px] object-cover object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-novapro-beige hover:text-novapro-teal" />
              <CarouselNext className="text-novapro-beige hover:text-novapro-teal" />
            </Carousel>
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
