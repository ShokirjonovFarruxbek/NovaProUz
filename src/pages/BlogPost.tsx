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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  const post = t.blog.posts.find((post, index) => index.toString() === id);
  
  const images = [
    id === "0" ? [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2070"
    ] : id === "1" ? [
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2070"
    ] : [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070"
    ]
  ][0];
  
  if (!post) {
    return <div className="min-h-screen bg-novapro-dark flex items-center justify-center">
      <p className="text-novapro-beige text-xl">Post not found</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-novapro-dark">
      <Navbar />
      
      <div className="section-container py-12">
        <Button 
          variant="outline" 
          className="mb-8 text-novapro-beige hover:text-novapro-accent"
          onClick={() => navigate('/')}
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          {t.nav.about}
        </Button>

        <div className="bg-novapro-lightdark rounded-xl overflow-hidden max-w-4xl mx-auto shadow-lg">
          <div className="h-[600px] overflow-hidden mb-8">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="h-[600px] w-full">
                      <img 
                        src={image}
                        alt={`${post.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-novapro-beige hover:text-novapro-accent ml-4" />
              <CarouselNext className="text-novapro-beige hover:text-novapro-accent mr-4" />
            </Carousel>
          </div>
          
          <div className="px-8 pb-8">
            <div className="flex items-center text-sm text-novapro-gray mb-4">
              <div className="flex items-center mr-6">
                <CalendarIcon size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 text-novapro-beige">
              {post.title}
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-novapro-gray text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
