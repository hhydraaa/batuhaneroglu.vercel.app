'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'framer-motion';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-zinc dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6" 
              {...props} 
            />
          ),
          h2: ({ node, ...props }) => (
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold mt-8 mb-4" 
              {...props} 
            />
          ),
          h3: ({ node, ...props }) => (
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl sm:text-2xl font-bold mt-6 mb-3" 
              {...props} 
            />
          ),
          p: ({ node, ...props }) => (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="my-4" 
              {...props} 
            />
          ),
          ul: ({ node, ...props }) => (
            <motion.ul 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="list-disc pl-6 my-4" 
              {...props} 
            />
          ),
          ol: ({ node, ...props }) => (
            <motion.ol 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="list-decimal pl-6 my-4" 
              {...props} 
            />
          ),
          blockquote: ({ node, ...props }) => (
            <motion.blockquote 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic my-6" 
              {...props} 
            />
          ),
          code: ({ node, inline, ...props }) => (
            inline ? (
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm" {...props} />
            ) : (
              <motion.pre 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto my-6"
              >
                <code className="font-mono text-sm" {...props} />
              </motion.pre>
            )
          ),
          img: ({ node, ...props }) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="my-8"
            >
              <img className="w-full rounded-lg shadow-sm" {...props} alt={props.alt || 'Blog görseli'} />
              {props.alt && <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">{props.alt}</p>}
            </motion.div>
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-zinc-200 dark:border-zinc-800" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="border border-zinc-200 dark:border-zinc-800 px-4 py-2 bg-zinc-100 dark:bg-zinc-800" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-zinc-200 dark:border-zinc-800 px-4 py-2" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 