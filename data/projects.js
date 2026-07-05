export const projects = [
  {
    id: 1,
    title: "Lumberwiz",
    description:
      "Full-stack timber e-commerce store built with Next.js and Supabase. Features SSR for SEO, role-based auth (admin/customer), a Supabase-driven product catalog, interactive star-rating review system, custom Swiper.js carousel, and a full security audit addressing client-side gating, missing middleware, and session handling.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Swiper.js"],
    type: "Web App",
    status: "Completed",
    link: "https://lumberwiz-2-0.vercel.app/",
    github: "https://github.com/mrayyan6/lumberwiz-2.0",
  },
  {
    id: 2,
    title: "Anchor Associates & Builders",
    description:
      "Portfolio management system for an Islamabad-based contractor firm. Built an automated Node.js import pipeline that processed 36 project folders and 386 images into Supabase Storage. Implemented RLS policies, admin/customer RBAC, and a public-facing project gallery with dynamic category routing.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Node.js"],
    type: "Web App",
    status: "Completed",
    link: "https://anchor-builders.vercel.app/",
    github: "https://github.com/mrayyan6/anchor-builders",
  },
  {
    id: 3,
    title: "AI Lead Research Pipeline",
    description:
      "Local n8n automation workflow that scrapes company websites, processes raw HTML, and sends it to Claude Haiku via OpenRouter to extract structured intelligence fields (company size, tech stack, pain points, decision-makers). Results are written back to Google Sheets and feed into a downstream personalized AI cold-email workflow.",
    stack: ["n8n", "OpenRouter", "API", "Google Sheets", "JavaScript", "Web Scrappers", "Serp API", "Google Maps Scrapper"],
    type: "AI Automation",
    status: "Completed",
    link: null,
    github: null,
  },
  {
    id: 4,
    title: "KHUD",
    description:
      "Production-ready full-stack clothing e-commerce platform. Features secure Supabase Auth, PostgreSQL with Row-Level Security, an admin dashboard for product/inventory/category management, Supabase Storage for product images, and a responsive shopping experience with filtering and cart functionality. Deployed on Vercel with automated GitHub-based CI/CD.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    type: "Web App",
    status: "Completed",
    link: "https://khud-clothing.vercel.app/",
    github: "https://github.com/mrayyan6/Khud-Clothing",
  },
];
