'use client';

import enBlogs from '../data/blog-en.json';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  content: string;
}

export function getBlogSlugs(language: 'en'): string[] {
  return enBlogs.map(blog => blog.slug);
}

export function getBlogPost(slug: string, language: 'en'): BlogPost | null {
  const post = enBlogs.find(blog => blog.slug === slug);
  return post || null;
}

export function getAllBlogPosts(language: 'en'): BlogPost[] {
  // Sort by date, newest at the top
  return [...enBlogs].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getRelatedPosts(currentSlug: string, language: 'en', count: number = 2): BlogPost[] {
  const filteredBlogs = enBlogs.filter(blog => blog.slug !== currentSlug);
  // Get related posts in random order
  return filteredBlogs
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
} 