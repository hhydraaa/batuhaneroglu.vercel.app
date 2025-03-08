'use client';

import Link from 'next/link';
import FadeIn from '../components/animations/FadeIn';
import BlurIn from '../components/animations/BlurIn';
import AnimatedContent from '../components/animations/AnimatedContent';

export default function AboutPage() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Express', 'TailwindCSS', 'UI/UX Design', 'MongoDB', 
    'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Git'
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <AnimatedContent>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Full-stack developer and designer
              </p>
            </div>
          </FadeIn>
          
          <div className="space-y-12">
            <BlurIn>
              <section>
                <h2 className="text-2xl font-bold mb-4">Hello, I&apos;m Batuhan!</h2>
                <div className="prose prose-zinc dark:prose-invert">
                  <p className="mb-4">
                    I develop modern web technologies and user experience-focused software solutions. 
                    I work passionately to create minimal, efficient, and impactful digital experiences.
                  </p>
                  <p className="mb-4">
                    I have been working in software development for 2 years and have participated in many projects during this time. 
                    I have experience in front-end and back-end development, UI/UX design, database management, and server configuration.
                  </p>
                  <p>
                    I focus on creating user-friendly and accessible websites and applications. 
                    I enjoy writing clean code, learning new technologies, and constantly improving myself.
                  </p>
                </div>
              </section>
            </BlurIn>
            
            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 pb-2">
                    <h3 className="font-bold">Junior Full-Stack Developer</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Invidual • 2025 - ...</p>
                    <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                      Developing modern web applications, designing architectures, and team leadership
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 pb-2">
                    <h3 className="font-bold">Front-End Developer</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Invidual • 2024 - 2025</p>
                    <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                      Modern website development with HTML, CSS, and JavaScript
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 pb-2">
                  <h3 className="font-bold">Computer Engineering</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Özdemir Bayraktar Havacılık ve Uzay Teknolojileri Mesleki ve Teknik Anadolu Lisesi • 2025 - ...</p>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                    Education focused on software development, algorithms, and data structures
                  </p>
                </div>
              </section>
            </FadeIn>
            
            <BlurIn delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  You can contact me through the channels below for collaborations, projects, or just to say hello.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:batuhaneroglu145@gmail.com" 
                    className="flex items-center justify-center h-12 px-6 font-medium rounded-md bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                  >
                    Send Email
                  </a>
                  
                  <Link 
                    href="/portfolio" 
                    className="flex items-center justify-center h-12 px-6 font-medium rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    View Portfolio
                  </Link>
                </div>
                
                <div className="mt-6 flex items-center space-x-6">
                  <a href="https://github.com/hhydraaa" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/batuhan13485" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.568.568.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.8c-.568.568-1.132.902-1.8 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.8-1.153 4.903 4.903 0 01-1.152-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.903 4.903 0 011.153-1.8A4.903 4.903 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </section>
            </BlurIn>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}