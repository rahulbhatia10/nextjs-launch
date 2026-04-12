export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first application.",
    content:
      "Next.js is a powerful React framework that enables server-side rendering, static site generation, and more. In this post, we walk through setting up your first project, understanding the file-based routing system, and deploying to production.",
    date: "2026-03-15",
    author: "Alice Chen",
  },
  {
    slug: "static-site-generation-deep-dive",
    title: "Static Site Generation Deep Dive",
    excerpt: "Understand how SSG works under the hood in Next.js.",
    content:
      "Static Site Generation (SSG) pre-renders pages at build time. This means the HTML is generated once and reused on each request, making it incredibly fast. Next.js uses generateStaticParams to determine which pages to pre-render for dynamic routes.",
    date: "2026-03-20",
    author: "Bob Martinez",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    excerpt: "Tips and tricks for writing clean Tailwind CSS code.",
    content:
      "Tailwind CSS provides utility-first styling that keeps your CSS maintainable. Key practices include extracting components, using consistent spacing scales, leveraging dark mode utilities, and organizing your design tokens in the config.",
    date: "2026-04-01",
    author: "Carol Nguyen",
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
