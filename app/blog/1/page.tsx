'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import FadeIn from '../../components/animations/FadeIn';
import BlurIn from '../../components/animations/BlurIn';

export default function BlogPost1() {
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="mb-2">
              <Link href="/blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors flex items-center">
                <svg className="mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All articles
              </Link>
            </div>

            <div className="mb-6">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Web Development
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 mx-2">•</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                March 6, 2025
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 mx-2">•</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                10 min read
              </span>
            </div>
          </FadeIn>

          <BlurIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Next.js 15.0: New Features and Performance Improvements
            </h1>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="lead text-xl">
                Next.js 15.0 has arrived with innovations that are creating a lot of excitement in the web development world. Here are the key features and improvements in the latest version of this powerful framework.
              </p>

              <h2>
                Turbopack: Faster Compilation Times
              </h2>
              <p>
                One of the most notable improvements in Next.js 15.0 is that Turbopack is now stable. Written in Rust, Turbopack runs 10 times faster than webpack and significantly improves the local development experience. This means significant gains in compilation times for developers working on large projects.
              </p>

              <h2>
                React Server Components: Full Integration
              </h2>
              <p>
                React Server Components (RSC) are now at the heart of Next.js. This technology seamlessly combines server-rendered components with interactive client-side components. As a result, initial loading times are accelerated and the user experience is improved. With Next.js 15.0, you can take advantage of the full potential of RSC.
              </p>

              <h2>
                Enhanced Image Optimization
              </h2>
              <p>
                The Next.js Image component is now smarter and more efficient. In the new version, automatic image resizing and format conversion capabilities have been improved. Also, a new blur-up technique offers a better user experience while images are loading.
              </p>

              <h2>
                Middleware Improvements
              </h2>
              <p>
                Middleware is now more powerful and flexible. With new APIs, you can more easily manipulate, redirect, or block requests. This will be very useful in scenarios such as authentication, authorization, and A/B testing.
              </p>

              <h2>
                Automatic Code Splitting and Tree Shaking
              </h2>
              <p>
                Next.js 15.0 brings significant improvements in automatic code splitting and tree shaking. Bundle sizes are optimized and only truly needed code is loaded. This significantly reduces page loading times, especially for mobile users.
              </p>

              <h2>
                Enhanced TypeScript Support
              </h2>
              <p>
                TypeScript integration is now more seamless. Next.js 15.0 supports all features of TypeScript 5.0 and provides better type inference. This increases code safety and improves the development experience.
              </p>

              <h2>
                Conclusion: Next.js Is Ready for the Future
              </h2>
              <p>
                Next.js 15.0 offers a more powerful, faster, and more useful framework for modern web development. With new features and performance improvements, Next.js makes web developers' daily workflows more efficient. If you haven't switched to Next.js 15.0 yet, we highly recommend giving it a try.
              </p>

              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h3>
                  About the Author
                </h3>
                <p>
                  Batuhan Eroğlu is a full-stack web developer and technology writer. He specializes in modern JavaScript frameworks, performance optimization, and user experience design.
                </p>
              </div>
            </div>
          </BlurIn>
          
          <FadeIn delay={0.2} className="mt-12">
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <h3 className="text-xl font-bold mb-4">
                Related Articles
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <Link 
                  href="/blog/2" 
                  className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <h4 className="font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    React 19: The New Features You Should Use
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Innovations with React 19 and best usage practices
                  </p>
                </Link>
                <Link 
                  href="/blog/3" 
                  className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <h4 className="font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    Web Performance: What to Watch Out for in 2025
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Tips and strategies to increase web performance in 2025
                  </p>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
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