'use client';

import Link from 'next/link';
import { useEffect, useState, use } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import FadeIn from '../../components/animations/FadeIn';
import BlurIn from '../../components/animations/BlurIn';
import AnimatedContent from '../../components/animations/AnimatedContent';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getBlogPost, getRelatedPosts } from '../../lib/blog-client';
import type { BlogPost } from '../../lib/blog-client';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { language, t } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Blog gönderisini getir
    const blogPost = getBlogPost(slug, language);
    setPost(blogPost);
    
    if (blogPost) {
      const related = getRelatedPosts(slug, language, 2);
      setRelatedPosts(related);
    }
    
    setLoading(false);
  }, [slug, language]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <motion.div 
          className="w-10 h-10 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-100 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'tr' ? 'Blog yazısı bulunamadı' : 'Blog post not found'}
          </h1>
          <p className="mb-6">
            {language === 'tr' 
              ? 'Aradığınız blog yazısı bulunamadı veya başka bir dilde mevcut olabilir.' 
              : 'The blog post you are looking for was not found or may be available in another language.'}
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            {language === 'tr' ? 'Blog sayfasına dön' : 'Back to blog'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <AnimatedContent>
          <FadeIn>
            <div className="mb-2">
              <Link href="/blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors flex items-center">
                <svg className="mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('blog.backToAll')}
              </Link>
            </div>

            <div className="mb-6">
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
          </FadeIn>

          <BlurIn delay={0.1}>
            <MarkdownRenderer content={post.content} />
          </BlurIn>
          
          <FadeIn delay={0.2} className="mt-12">
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <h3 className="text-xl font-bold mb-4">
                {t('blog.relatedArticles')}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`} 
                    className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <h4 className="font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </AnimatedContent>
      </div>
    </div>
  );
} 