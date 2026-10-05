// make all of the descriptions below in simple english, add the details and those things in commenst

export const projects = [
  {
    id: 1,
    title: "KHUD",
    description:
      "Production-ready full-stack clothing e-commerce platform. Features secure Supabase Auth, PostgreSQL with Row-Level Security, an admin dashboard for product/inventory/category management, Supabase Storage for product images, and a responsive shopping experience with filtering and cart functionality. Deployed on google with automated GitHub-based CI/CD. Currently Undergoing a name change.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    type: "Web App",
    status: "Completed",
    link: "https://khud-clothing-eight.vercel.app",
    github: "https://github.com/khudclothes-spec/Khud-Clothing",
    image: "/projects/charmeem.png",
  },
  {
    id: 2,
    title: "Anchor Associates & Builders",
    description:
      "Portfolio management system for an Islamabad-based contractor firm. Built an automated Node.js import pipeline that processed 36 project folders and 386 images into Supabase Storage. Implemented RLS policies, admin/customer RBAC, and a public-facing project gallery with dynamic category routing.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Node.js"],
    type: "Web App",
    status: "Completed",
    link: "https://www.anchorassociatesandbuilders.com/",
    github: "https://github.com/anchorassociatesbuilder-ai/anchor-builders",
    image: "/projects/anchor.jpg",
  },
  {
    id: 3,
    title: "AI Lead Research Pipeline",
    description:
      "Local n8n automation workflow that scrapes company websites, processes raw HTML, and sends it to Claude Haiku via OpenRouter to extract structured intelligence fields (company size, tech stack, pain points, decision-makers). Results are written back to Google Sheets and feed into a downstream personalized AI cold-email workflow.",
    stack: ["n8n", "OpenRouter", "API", "Google Sheets", "JavaScript", "Web Scrappers", "Serp API", "Google Maps Scrapper"],
    type: "AI Automation",
    status: "Completed",
    link: "https://leads-website-alpha.vercel.app/",
    github: "https://github.com/automationsquadteam-ux/leads-website",
    image: "/projects/lead-gen.jpeg",
  },
  {
    id: 4,
    title: "Lumberwiz",
    description:
    "Full-stack timber e-commerce store built with Next.js and Supabase. Features SSR for SEO, role-based auth (admin/customer), a Supabase-driven product catalog, interactive star-rating review system, custom Swiper.js carousel, and a full security audit addressing client-side gating, missing middleware, and session handling.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Swiper.js"],
    type: "Web App",
    status: "Completed",
    link: "https://lumberwiz-2-0.vercel.app/",
    github: "https://github.com/mrayyan6/lumberwiz-2.0",
    image: "/projects/lumberwiz.png",
  },
  {
    id: 5,
    title: "Match Outcome Predictor",
    description:
      " Hobby Project that predicts football match outcomes for Premier League and La Liga fixtures from recent form, Elo ratings, home advantage and head-to-head record. A leakage-free feature pipeline (verified by tests) feeds balanced XGBoost and Random Forest models with Platt and isotonic calibration, reaching 52% accuracy on an unseen La Liga season against 54% for the bookmakers. The static site runs the exported trees in the browser with live fixture odds and form sliders, and retrains daily from a scheduled refresh.",
    stack: ["Python", "XGBoost", "scikit-learn", "pandas", "JavaScript", "Vercel"],
    type: "Machine Learning",
    status: "Completed",
    link: "https://match-outcome-predictor.vercel.app/",
    github: "https://github.com/mrayyan6/match-outcome-predictor",
    image: "/projects/match-outcome-predictor.png",
  },
  {
    id: 6,
    title: "Player Similarity Scout",
    description:
      "Finds each Premier League and La Liga player's closest statistical twins from 14 per-90 stats using standardised features and cosine similarity within position groups. K-Means clustering (K chosen with silhouette and inertia analysis) sorts 800+ players into eight named playing-style archetypes, and PCA projects them onto an interactive style map. The static site offers player search, radar chart comparisons and archetype cards, refreshed weekly by a scheduled pipeline.",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "JavaScript", "Vercel"],
    type: "Machine Learning",
    status: "Completed",
    link: "https://player-similarity-scout.vercel.app/",
    github: "https://github.com/mrayyan6/player-similarity-scout",
    image: "/projects/player-similarity-scout.png",
  },
  {
    id: 7,
    title: "Transfer Value Predictor",
    description:
      "Estimates Premier League and La Liga players' market value from their season stats and flags who the market over or undervalues. Linear Regression and Random Forest models on log value, judged with out-of-fold predictions from 5-fold cross validation (R² 0.79). A fuzzy name-matching pipeline joins Sofascore stats to Transfermarkt values for 726 of 727 players. The site runs the models in the browser with what-if sliders, a build-your-own player tool and a mispricing leaderboard.",
    stack: ["Python", "scikit-learn", "pandas", "RapidFuzz", "JavaScript", "Vercel"],
    type: "Machine Learning",
    status: "Completed",
    link: "https://transfer-value-predictor.vercel.app/",
    github: "https://github.com/mrayyan6/transfer-value-predictor",
    image: "/projects/transfer-value-predictor.png",
  },
  {
    id: 8,
    title: "Offline Voice Translator",
    description:
      "English to Russian (and back) voice translator that runs entirely on the phone, built as an installable PWA for iOS and Android. Speech recognition (Whisper), OPUS-MT translation and speech output all run on-device through Transformers.js and ONNX Runtime WASM, so it works in Airplane Mode and no audio leaves the device. Includes a hallucination gate for Whisper, resumable model downloads stored in IndexedDB, and cross-origin isolation for multi-threaded WASM on Cloudflare Pages.",
    stack: ["TypeScript", "React", "Vite", "Transformers.js", "ONNX Runtime", "PWA", "Cloudflare Pages"],
    type: "On-Device AI",
    status: "Field Testing",
    link: "https://ru-translator.pages.dev/",
    github: "https://github.com/mrayyan6/ru-translator",
    image: "/projects/translator.png",
  },
];
