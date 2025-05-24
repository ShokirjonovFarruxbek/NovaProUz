import { FaCalendarAlt, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const handleArticleClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="articles" 
      className="py-20 bg-novapro-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-novapro-beige mb-4">{t.blog.title}</h2>
          <p className="text-lg text-novapro-gray max-w-2xl mx-auto">{t.blog.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-novapro-teal/20 hover:border-novapro-teal"
              onClick={() => handleArticleClick(post.id)}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-48 overflow-hidden"
              >
                <img
                  src={post.image || "/images/OurProducts.avif"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/OurProducts.avif";
                  }}
                />
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {post.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-4"
                >
                  {post.excerpt}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between text-sm text-gray-400 mb-4"
                >
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center text-sm text-gray-400">
                    <FaClock className="mr-2" />
                    <span>{post.readTime} {t.blog.readTime}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-novapro-teal hover:text-novapro-accent flex items-center"
                  >
                    {t.blog.readMore} <FaArrowRight className="ml-2" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="bg-novapro-teal hover:bg-novapro-accent text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            {t.blog.viewAll}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
