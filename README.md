# Next.js Portfolio & Blog

A modern, responsive personal portfolio and blog website built with Next.js 14 and Tailwind CSS. This minimalist design showcases my work, skills, and blog articles with elegant animations and a clean interface.

![https://imgur.com/3ZakYVR](https://imgur.com/3ZakYVR.png)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist interface with smooth animations
- **Portfolio Section**: Showcase your projects and skills
- **Blog Platform**: Share your thoughts and expertise with a built-in blog
- **About Page**: Tell visitors about yourself and your background
- **Gallery**: Display visual content in an elegant gallery format
- **Social Media Integration**: Connect with GitHub and Instagram
- **Animations**: Beautiful page transitions and content animations using Framer Motion
- **Performance Optimized**: Fast loading and rendering

## Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Content Rendering**: Markdown for blog posts
- **Icons**: SVG icons

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/next-app-v3.git
   ```

2. Navigate to the project directory:
   ```bash
   cd next-app-v3
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
next-app-v3/
├── app/
│   ├── about/                  # About page
│   ├── blog/                   # Blog pages
│   │   ├── [slug]/             # Individual blog post pages
│   │   └── page.tsx            # Blog list page
│   ├── components/             # Reusable components
│   │   ├── animations/         # Animation components
│   │   └── ...
│   ├── context/                # React context providers
│   ├── data/                   # Static data (blog posts, etc.)
│   ├── gallery/                # Gallery page
│   ├── lib/                    # Utility functions
│   ├── portfolio/              # Portfolio pages
│   ├── favicon.ico             # Site favicon
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/                     # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```

## Pages

- **Home**: Introduction and recent works
- **Portfolio**: Showcase of projects
- **Blog**: Articles on web development and technology
- **Gallery**: Visual content display
- **About**: Personal information and skills

## Blog Features

- Markdown support for rich content
- Categories for organization
- Reading time estimation
- Related posts
- Publish dates

## Customization

### Social Media Links

Edit the footer component to update your social media links:

```tsx
// Update these links with your profiles
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
<a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
  Instagram
</a>
```

### Blog Content

Blog posts are stored in JSON format in `app/data/blog-en.json`. Add new posts by appending to this file:

```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "date": "YYYY-MM-DD",
  "excerpt": "Brief description of your post",
  "category": "Category",
  "author": "Your Name",
  "readTime": "X min read",
  "content": "# Your Markdown Content Here"
}
```

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js:

```bash
# For Vercel
vercel

# For Netlify
netlify deploy
```

## License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the animation library
