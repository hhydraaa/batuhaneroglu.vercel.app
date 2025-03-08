'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import FadeIn from '../components/animations/FadeIn';
import AnimatedContent from '../components/animations/AnimatedContent';
import { motion } from 'framer-motion';
import { getAllBlogPosts } from '../lib/blog-client';
import type { BlogPost } from '../lib/blog-client';

export default function BlogPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Load blog posts
  useEffect(() => {
    setLoading(true);
    // Get blog posts
    const posts = getAllBlogPosts('en');
    setBlogPosts(posts);
    setLoading(false);
  }, [language]);
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="space-y-4 mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Blog</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  My thoughts on software, design, and technology
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <input 
                    type="search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search articles..."
                    className="block w-full p-3 pl-10 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                  />
                </div>
              </div>
            </FadeIn>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <motion.div 
                  className="w-10 h-10 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-100 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
              </div>
            ) : (
              <div className="space-y-10">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <FadeIn key={post.slug} delay={index * 0.1}>
                      <article className="border-b border-zinc-200 dark:border-zinc-800 pb-10">
                        <Link href={`/blog/${post.slug}`} className="block group">
                          <div className="mb-2">
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                              {post.category}
                            </span>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 mx-2">•</span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {post.date}
                            </span>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 mx-2">•</span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              {post.readTime}
                            </span>
                          </div>
                          
                          <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-zinc-600 dark:text-zinc-400">
                            {post.excerpt}
                          </p>
                          
                          <div className="mt-4 text-sm font-medium flex items-center text-black dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                            Read more
                            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </Link>
                      </article>
                    </FadeIn>
                  ))
                ) : (
                  <FadeIn>
                    <div className="text-center py-10">
                      <p className="text-zinc-600 dark:text-zinc-400">No articles found matching your search term.</p>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="mt-4 text-sm font-medium text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                      >
                        Show all articles
                      </button>
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
          </div>
        </AnimatedContent>
      </div>
      
      <footer className="border-t border-zinc-800 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Batuhan Eroğlu. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/hhydraaa" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com/batuhan13485" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.568.568.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.8c-.568.568-1.132.902-1.8 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.8-1.153 4.903 4.903 0 01-1.152-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.903 4.903 0 011.153-1.8A4.903 4.903 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 