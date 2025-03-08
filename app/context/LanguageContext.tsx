'use client';

import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  language: 'en';
  t: (key: string) => string;
}

// English translations
const translations = {
  "navbar": {
    "portfolio": "Portfolio",
    "blog": "Blog",
    "gallery": "Gallery",
    "about": "About"
  },
  "home": {
    "title": "Full-Stack Developer & Designer",
    "description": "I develop modern web technologies and user experience-focused software solutions. I work passionately to create minimal, efficient, and impactful digital experiences.",
    "cta": {
      "portfolio": "View My Portfolio",
      "about": "About Me"
    },
    "recentWorks": "Recent Works",
    "viewAll": "View all projects",
    "footer": {
      "rights": "All rights reserved."
    }
  },
  "portfolio": {
    "title": "Portfolio",
    "subtitle": "Here are some projects I've developed so far",
    "filter": {
      "all": "All",
      "webDev": "Web Development",
      "mobileApp": "Mobile App",
      "uiDesign": "UI/UX Design",
      "dataViz": "Data Visualization"
    },
    "projectTitle": "Project Title",
    "shortDesc": "Short project description"
  },
  "blog": {
    "title": "Blog",
    "subtitle": "My thoughts on software, design, and technology",
    "search": "Search articles...",
    "readMore": "Read more",
    "noResults": "No articles found matching your search term.",
    "showAll": "Show all articles",
    "relatedArticles": "Related Articles",
    "author": "About the Author",
    "authorBio": "Batuhan Eroğlu is a full-stack web developer and technology writer. He specializes in modern JavaScript frameworks, performance optimization, and user experience design.",
    "backToAll": "All articles",
    "notFound": "Blog post not found",
    "notFoundDesc": "The blog post you're looking for could not be found.",
    "backToBlog": "Back to blog"
  },
  "gallery": {
    "title": "Gallery",
    "subtitle": "Design works and photography collection",
    "noItems": "There are no images in this category yet.",
    "showAllImages": "Show all images",
    "categories": {
      "design": "Design",
      "photo": "Photography"
    },
    "image": "Image",
    "noImages": "There are no images in this category yet."
  },
  "about": {
    "title": "About Me",
    "subtitle": "Full-stack developer and designer",
    "hello": "Hello, I'm Batuhan!",
    "bio": "I develop modern web technologies and user experience-focused software solutions. I work passionately to create minimal, efficient, and impactful digital experiences. I have been working in software development for 5 years and have been involved in many projects during this time. I have experience in front-end and back-end development, UI/UX design, database management, and server configuration.",
    "skills": "Skills & Technologies",
    "experience": "Experience",
    "education": "Education",
    "contactTitle": "Contact",
    "contact": {
      "message": "You can reach me through the following channels for collaborations, projects, or just to say hello.",
      "email": "Send Email",
      "portfolio": "View My Portfolio"
    }
  },
  "common": {
    "loading": "Loading...",
    "notFound": "Not Found",
    "backToHome": "Back to Home",
    "error": "Error",
    "tryAgain": "Try Again"
  }
};

// Simple translation function
const translate = (key: string): string => {
  const parts = key.split('.');
  let result: any = translations;

  for (const part of parts) {
    if (result[part] === undefined) {
      return key; // Return the key if translation not found
    }
    result = result[part];
  }

  return typeof result === 'string' ? result : key;
};

// Default values
const defaultValue: LanguageContextType = {
  language: 'en',
  t: translate
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageContext.Provider value={defaultValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
}; 