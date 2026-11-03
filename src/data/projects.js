/**
 * Centralized Project & Portfolio Data Repository for BENAZIR STUDIO
 * 
 * MASTER DATA FILE
 * Controls all portfolio gallery cards and individual dynamic case study pages.
 * 
 * To add a new project in the future:
 * 1. Add your project images to a new folder in: public/images/projects/<your-project-slug>/
 * 2. Add an object to the PROJECTS array below.
 * That's it! Your new card, filter placement, and dynamic case study page will be generated automatically.
 */

export const PERSONAL_INFO = {
  name: "Benazir",
  wordmark: "BENAZIR · STUDIO",
  badge: "Graphic Designer.Ui Ux Designer",
  role: "Creative Visual Designer",
  disciplines: ["Graphic Design", "UI/UX Design", "Brand Systems", "Packaging Design"],
  heroHeadline: {
    line1: "Creative",
    line2: "Visual Designer"
  },
  heroSupporting: "I cradt distinctive brand identities, creative packaging designs, and intuitive digital experiences. Blending visual creativity with user-centred thinking to create meaningful designs that connect brands with people.",
  aboutParagraph: "I'm a multidisciplinary designer passionate about creating clear visual identities and meaningful digital experiences. My work combines graphic design principles with user-centred thinking to create thoughtful, engaging interfaces.",
  status: "Open to select freelance collaborations",
  email: "theartofbenazir@gmail.com",
  tools: [
    { name: "Figma", category: "UI/UX & Systems" },
    { name: "Adobe Illustrator", category: "Branding & Vectors" },
    { name: "Adobe Photoshop", category: "Visuals & Packaging" },
    { name: "Adobe InDesign", category: "Editorial & Print" },
    { name: "After Effects", category: "Motion & Interaction" },
    { name: "Adobe Animate CC", category: "2D Animation & Interactive Design" }
  ]
};

/**
 * Centralized Social Media Configuration
 * 
 * Paste your real account URLs here.
 * If left empty (""), the footer icon will remain safely inactive without pointing to any fake placeholder.
 */
export const SOCIAL_CONFIG = {
  linkedin: "https://www.linkedin.com/in/benazir-begum-bb812b385/",   
  instagram: "https://www.instagram.com/explore_design_with_bena?cplk=N2ZibjNybWVlMjRi", 
  behance: "https://www.behance.net/benazirbegum2",   
  github: ""      // e.g. "https://github.com/your-username"
};

/**
 * AI Skill Tools & Creative Workflows
 * 9 AI tools utilized for creative brainstorming, design generation, and development.
 */
export const AI_SKILL_TOOLS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    creator: "OpenAI",
    category: "AI Assistance & Research",
    badge: "AI Assistance & Research",
    description: "AI-powered assistance for creative brainstorming, content creation, research, and design workflows."
  },
  {
    id: "nano-banana",
    name: "Nano Banana",
    creator: "Google Nano Banana",
    category: "Generative Visuals & Concept Art",
    badge: "Generative Visuals & Concept Art",
    description: "AI image generation and image editing for creative visual concepts and product imagery."
  },
  {
    id: "google-flow",
    name: "Google Flow",
    creator: "Google Creative AI",
    category: "AI Video Creation",
    badge: "AI Video Creation",
    description: "AI-powered video creation, cinematic storytelling, and visual content generation."
  },
  {
    id: "lovable",
    name: "Lovable",
    creator: "Lovable Labs",
    category: "Natural Language App Prototyping",
    badge: "Natural Language App Prototyping",
    description: "AI-powered website and application development using natural language prompts."
  },
  {
    id: "codex",
    name: "Codex",
    creator: "OpenAI",
    category: "Code Generation & Architecture",
    badge: "Code Generation & Architecture",
    description: "AI-assisted coding, code generation, debugging, and development workflows."
  },
  {
    id: "antigravity",
    name: "Antigravity",
    creator: "Google Antigravity",
    category: "Agentic Development",
    badge: "Agentic Development",
    description: "AI-powered development environment for building, editing, and managing websites and applications."
  },
  {
    id: "framer",
    name: "Framer",
    creator: "Framer",
    category: "AI Website Design & Prototyping",
    badge: "AI Website Design & Prototyping",
    description: "Website design, interactive prototyping, responsive layouts, and website publishing."
  },
  {
    id: "google-stitch",
    name: "Google Stitch",
    creator: "Google Design",
    category: "AI-Powered UI Design",
    badge: "AI-Powered UI Design",
    description: "AI-assisted interface design and rapid UI prototyping from natural language prompts and visual references."
  },
  {
    id: "gemini",
    name: "Gemini",
    creator: "Google DeepMind",
    category: "Multimodal AI Assistant",
    badge: "Multimodal AI Assistant",
    description: "Google's AI assistant for creative brainstorming, research, image generation, and productivity workflows."
  }
];

/**
 * Core Skills Data across Design Disciplines
 */
export const SKILLS_DATA = {
  graphic: [
    "Brand Identity Systems",
    "Packaging Architecture",
    "Editorial & Layout Design",
    "Typography & Grid Systems",
    "Print Production & Dielines",
    "Marketing & Social Collateral"
  ],
  uiux: [
    "Wireframing & Prototyping",
    "Information Architecture",
    "Design Systems & Tokens",
    "User Research & Personas",
    "Mobile & Responsive Design",
    "Usability & Heuristic Evaluation"
  ],
  tools: [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "After Effects",
    "Adobe Animate CC"
  ]
};

/**
 * Achievements & Creative Milestones Data
 * 
 * 1. Currently active: Creative Milestones gallery using actual portfolio project assets.
 * 2. Future Uploads: When you receive your institute certificates and photographs,
 *    simply add them to the certifications, industryVisits, or instituteActivities arrays below!
 */
export const ACHIEVEMENTS_DATA = {
  heading: "Achievements & Recognition",
  subtitle: "Every milestone represents a step forward in my creative journey.",
  
  // Temporary Showcase: Creative Milestones using actual project images
  milestones: [
    {
      id: "milestone-1",
      title: "Certificate of Appreciation",
      category: "Achievements",
      caption: "Recognised for creative contribution in Movie poster Design at creators Thiruvizha 2025",
      image: "./images/projects/achievements/certificate1.jpeg",
      tag: "Creative Recognition"
    },
    {
      id: "milestone-2",
      title: "Certificae of Participation",
      category: "Participation",
      caption: "Participated at one day industrial visit at Abservetech, gaining practical industry insights and exposure to Ui/Ux design, and professional workflows.",
      image: "./images/projects/achievements/certificate2.jpeg",
      tag: "Industry Exposure"
    },
    {
      id: "milestone-3",
      title: "Certificate of Appreciation",
      category: "Achievements",
      caption: "Recognised as a Consistent Queen at creators Thiruvizha 2025 for demonstrating dedication, consistency, and creative contribution.",
      image: "./images/projects/achievements/certificate3.jpeg",
      tag: "Creative Achievement"
    },
    {
      id: "milestone-4",
      title: "Industrial Visit to Abservetech",
      category: "Industrial Visit",
      caption: "Participated at one day industrial visit at Abservetech, gaining practical industry insights and exposure to Ui/Ux design, and professional workflows",
      image: "./images/projects/achievements/Achievements 4.jpeg",
      tag: "Industry Exposure"
    },
    {
      id: "milestone-5",
      title: "Industrial Visit to Ridha Prints",
      category: "Industrial Visit",
      caption: "Partcipated in an industrial visit to Ridha prints, gaining hands-on exposure to professional priniting processes, production workflows, and real world industry practices.",
      image: "./images/projects/achievements/Achievements.jpeg",
      tag: "Industry Exposure"
    }
  ],

  // Future Ready Structure: Place your certificates here once available
  certifications: [
    // Example format for future use:
    // {
    //   id: "cert-graphic",
    //   title: "Professional Graphic Design Certificate",
    //   issuer: "Institute Name",
    //   year: "2026",
    //   image: "./images/certificates/graphic-design-certificate.jpg"
    // }
  ],
  industryVisits: [
    // Example format for future use:
    // {
    //   id: "visit-1",
    //   company: "Design Studio / Agency Name",
    //   date: "Month Year",
    //   description: "Industry immersion and packaging production facility walkthrough.",
    //   images: ["./images/visits/visit-01.jpg"]
    // }
  ],
  instituteActivities: [
    // Example format for future use:
    // {
    //   id: "activity-1",
    //   title: "Design Workshop & Exhibition",
    //   caption: "Presenting interactive design systems and student showcase.",
    //   images: ["./images/institute/workshop-01.jpg"]
    // }
  ]
};

export const CATEGORIES = [
  "All",
  "Packaging Design",
  "UI/UX Design",
  "Branding",
  "Brand Identity",
  "Graphic Design"
];

export const SERVICES = [
  {
    number: "01",
    title: "Graphic Design",
    description: "Visual communication, editorial typography, marketing collateral, and high-impact design compositions tailored for print and screen.",
    deliverables: ["Editorial Layouts", "Posters & Collateral", "Digital Creatives", "Typographic Systems"]
  },
  {
    number: "02",
    title: "Brand Identity Design",
    description: "Comprehensive visual identity suites that establish emotional resonance, timeless authority, and coherent multi-touchpoint brand guides.",
    deliverables: ["Logomark Systems", "Colour & Typography Standards", "Brand Guidelines", "Stationery"]
  },
  {
    number: "03",
    title: "Packaging Design",
    description: "Tactile structural packaging concepts, dieline planning, and shelf-presence strategy engineered for luxury hand-feel and retail unboxing.",
    deliverables: ["Structural Dielines", "Label Architecture", "Finishing & Foil Specs", "3D Shelf Mockups"]
  },
  {
    number: "04",
    title: "UI/UX Design",
    description: "User-centred digital experiences rooted in thorough research, intuitive navigation structures, ergonomic interaction flows, and clarity.",
    deliverables: ["User Personas", "Journey Mapping", "Wireframes", "Interactive Prototypes"]
  },
  {
    number: "05",
    title: "Website Design",
    description: "Modern, responsive, and art-directed digital flagships that harmonize oversized editorial typography with fluid layout choreography.",
    deliverables: ["Desktop & Mobile Layouts", "Design Systems", "Component Libraries", "Motion Specifications"]
  },
  {
    number: "06",
    title: "Mobile App Design",
    description: "Ergonomic mobile interfaces with focus on touch comfort, cognitive ease, clean component hierarchy, and platform guidelines.",
    deliverables: ["iOS & Android Screens", "Design Tokens", "Micro-interactions", "Handoff Documentation"]
  }
];

export const PROCESS_STAGES = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, research the audience, and identify opportunities through analytical and visual observation."
  },
  {
    number: "02",
    title: "Define",
    description: "Organise insights, identify user needs, and establish the design direction, tonal anchors, and visual constraints."
  },
  {
    number: "03",
    title: "Design",
    description: "Develop concepts, build visual systems, and create interfaces with deliberate hierarchy, whitespace, and craft."
  },
  {
    number: "04",
    title: "Refine",
    description: "Evaluate the experience, improve usability, test edge cases, and polish the final design into production-ready assets."
  }
];

export const PROJECTS = [
  /* -------------------------------------------------------------
     1. PRODUCT PACKAGING COLLECTION (MASTER TEMPLATE CASE STUDY)
     ------------------------------------------------------------- */
  {
    id: "product-packaging",
    slug: "product-packaging",
    behanceUrl: "https://www.behance.net/gallery/257728045/Gucci-perfume-website-landing-page-Redesign",
    title: "Website landing page",
    subtitle: "Structural Box & Shelf Appeal",
    category: "Ui Ux Design",
    filterCategory: "Packaging Design",
    year: "2026",
    featured: true,
    gridSize: "large",
    shortDescription: "A luxurious and elegant perfume website landing page designed to reflect Gucci's iconic brand identity. ",
    image: "./images/projects/product-packaging/new mockup 1.jpg",
    visualType: "packaging-dipline",
    role: "Ui/Ux Designer",
    timeline: "2 Weeks",
    deliverables: ["Structural Dielines", "3D Box Renders", "Foil Stamping Specs", "Shelf Impact Studies"],
    tools: ["Figma", "Photoshop"],
    overview: "This project explores a redesigned landing page for Gucci perfume, combining bold visuals, sophisticated typography, and a premium aesthetic to reflect the timeless elegance of the gucci brand.",
    problem: "Existing landing page Reduce the visual appeal, all products receive equal emphasis, No dedicated perfume web page.",
    goals: [
      "Visually captivating first impression.",
      "Highlight the allure of luxury fragrences.",
      "Engaging browsing experience through a refined layout and thoughtful visual hierarchy."
    ],
    targetAudience: "Luxury consumer brands, specialty gift producers, and premium lifestyle retailers.",
    designDirection: "Minimal dark luxury with metallic foil reflections, crisp dieline callouts, and clean geometric proportions.",
    colorPalette: [
      { name: "Matte Charcoal", hex: "#15151A", role: "Outer Box Stock" },
      { name: "Reflective Lime Foil", hex: "#C7FF3D", role: "Foil Stamping" },
      { name: "Crisp Chalk", hex: "#F2F2F2", role: "Embossed Typography" },
      { name: "Inner Velvet", hex: "#23232C", role: "Interior Tray Insert" }
    ],
    typography: "Manrope and refined monospace callouts for dieline measurements and batch certifications.",
    keyDecisions: [
      {
        title: "Magnetic Flap Unboxing",
        desc: "Engineered a magnetic closure that creates an audible, tactile click when opened."
      },
      {
        title: "Sustainable Single-Stock Dielines",
        desc: "Formulated patterns cut from a single sheet of recycled paperboard with zero plastic lamination."
      }
    ],
    process: [
      { step: "01", title: "Research & Discovery", desc: "Studied luxury perfume brands, target audiences, and competitor websites to understand premium fragrence aesthetics." },
      { step: "02", title: "Wireframing & Layout", desc: "Planned the website structure, navigation, hero section, product highlights, and user journey." },
      { step: "03", title: "Visual design & Branding", desc: "Created an elegant visual direction using sophisticated typography, premium imagery, and a refined colour pallete." },
      { step: "04", title: "Ui Design & Protyping", desc: "Designed responsive website screens and interactive elements to deliver a seamless browsing experience." }
    ],
    gallery: [
      {
        url: "./images/projects/product-packaging/new mockup 3.jpg",
        caption: "Luxury Confectionery Packaging Box — 3D Rendered Perspective",
        tag: "Desktop View",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/product-packaging/perfume website mobile mockup 9.jpg",
        caption: "Festive Edition Packaging with Gold Geometric Patterning",
        tag: "Mobile View"
      },
      {
        url: "./images/projects/product-packaging/perfume website mockup 7.jpg",
        caption: "Structural Gift Box Edition — Angle Perspective",
        tag: "Desktop View"
      },
      {
        url: "./images/projects/product-packaging/new ipad mockup 1.jpg",
        caption: "Holiday Edition Packaging Suite — Complete Layout",
        tag: "ipad View",
      },
      {url: "./images/projects/product-packaging/phone.jpg",
        caption: "Holiday Edition Packaging Suite — Complete Layout",
        tag: "Mobile View"}
    ],
  },

  /* -------------------------------------------------------------
     2. ARTISANAL FOOD PACKAGING (PACKAGING DESIGN)
     ------------------------------------------------------------- */
  {
    id: "food-packaging",
    slug: "food-packaging",
    behanceUrl: "https://www.behance.net/benazirbegum2",
    title: "Packaging Designs",
    subtitle: "Creative Packaging Concepts",
    category: "Packaging Design",
    filterCategory: "Packaging Design",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A diverse collection of creative packaging solutions designed to bring brands to life through thoughtful visuals , distinctive identities, and functional design.From Retail products to lifestyle packaging, each project explores the balance between creativity,aesthetics, and practical functionality",
    image: "./images/projects/food-packaging/cover.jpg",
    visualType: "packaging-dipline",
    role: "Packaging & Graphic Designer",
    timeline: "Multiple projects",
    deliverables: ["Packaging Dielines", "3D Box Mockups", "Festive Motifs", "Print Production Specs"],
    tools: ["Illustrator", "Photoshop"],
    overview: "A diverse collection of creative packaging solutions designed to bring brands to life through thoughtful visuals , distinctive identities, and functional design.From Retail products to lifestyle packaging, each project explores the balance between creativity,aesthetics, and practical functionality.",
    problem: "Every product deserves packaging that captures attention and communicates its identity.The challenge was to create diverse packaging solutions that balance visual appeal, brand story telling, structural functionality, and customer experience across different product categories.",
    goals: [
      " Create distinctive visual identities that reflects each product's personality and brand identity.",
      "Balance attractive visuals with practical and User-friendly packaging structures.",
      "Explore creative materials. colours, typography, layouts, textures, and packaging formats."
    ],
    gallery: [
      {
        url: "./images/projects/food-packaging/cover.jpg",
        caption: "Artisanal Sweet Box — 3D Studio Mockup",
        tag: "Primary Cover"
      },
      {
        url: "./images/projects/food-packaging/mockup-01.jpg",
        caption: "Festive Variant 3 — Gold Detailing & Geometric Borders",
        tag: "Festive Edition"
      },
      {
        url: "./images/projects/food-packaging/mockup-02.jpg",
        caption: "Gift Box Variant 4 — High-Impact Silhouette",
        tag: "Box Design"
      },
      {
        url: "./images/projects/food-packaging/christmas-edition.jpg",
        caption: "Holiday Celebration Packaging — Full Set Presentation",
        tag: "Holiday Collection",
      },
      {
        url: "./images/projects/food-packaging/pongal-edition.jpg",
        caption: "Harvest Celebration Packaging Edition",
        tag: "Cultural Edition"
      },
      {
        url: "./images/projects/food-packaging/special-edition.jpg",
        caption: "Contemporary Special Edition Packaging",
        tag: "Special Release"
      },
      {url: "./images/projects/food-packaging/headphonebox.jpg",
        caption: "Headphone box Packaging",
        tag: "Premium package"},
        {url: "./images/projects/food-packaging/car hardner label.jpg",
        caption: "paint tin Packaging",
        tag: "Premium package"},
        {url: "./images/projects/food-packaging/car hardner label 1.jpg",
        caption: "paint tin Packaging",
        tag: "Premium package"},
        {url: "./images/projects/food-packaging/car hardner label 2.jpg",
        caption: "paint tin Packaging",
        tag: "Premium package"},
        {url: "./images/projects/food-packaging/car hardner label 3.jpg",
        caption: "paint tin Packaging",
        tag: "Premium package"}
    ],
  },

  /* -------------------------------------------------------------
     3. FACTSY (UI/UX DESIGN)
     ------------------------------------------------------------- */
  {
    id: "factsy",
    slug: "factsy",
    behanceUrl: "https://www.behance.net/",
    title: "Factsy",
    subtitle: "Food Packaging Scanner App",
    category: "UI/UX Design",
    filterCategory: "UI/UX Design",
    year: "2026",
    featured: true,
    gridSize: "large",
    shortDescription: "A mobile wellness scanner app designed to decode complex ingredients and nutritional labels into clear health choices in seconds.",
    image: "./images/projects/factsy/cover.png",
    visualType: "factsy-scanner",
    role: "Lead UI/UX Designer",
    timeline: "4 Weeks",
    deliverables: ["User Research", "User Flows", "Design System", "Interactive Prototype", "Usability Audit"],
    tools: ["Figma", "Illustrator"],
    overview: "Factsy is a smart food-scanning application designed to help consumers make informed food choices. By scanning packaged food products, users can understand ingredients, nutrition values, health indicators, and product suitability. Factsy also connects users with healthier alternatives and trusted homemade food vendors.",
    problem: "Consumers often struggle to understand complex ingredient lists, nutritional information, and food additives on packaged products. Important health information is difficult to interpret, making it challenging to identify healthier food choices. At the same time, discovering trustworthy homemade food alternatives is not always easy.",
    goals: [
      "Simplify complex food and nutrition information.",
      "Help users understand ingredients, additives, and allergens.",
      "Present an easy-to-understand health score with colour indicators.",
      "Show food suitability for different age groups.",
      "Recommend healthier food alternatives.",
      "Connect consumers with verified homemade food vendors.",
      "Build trust through vendor information and manufacturing transparency."
    ],
    targetAudience: "Health-conscious parents, fitness enthusiasts, and people managing dietary restrictions.",
    designDirection: "High-contrast dark mode interface with radial score dials, clean data hierarchy, and electric lime indicators.",
    colorPalette: [
      { name: "Obsidian Canvas", hex: "#101014", role: "Dark Canvas" },
      { name: "Electric Lime", hex: "#C7FF3D", role: "Clean Choice & Action" },
      { name: "Elevated Slate", hex: "#1F1F2A", role: "Card Surface" },
      { name: "Warning Amber", hex: "#FFB800", role: "Additive Warning" }
    ],
    typography: "Space Grotesk for prominent nutritional scores paired with Inter for high-density ingredient tables.",
    keyDecisions: [
      {
        title: "Radial Health Score",
        desc: "Replaced cluttered nutritional tables with an immediate glanceable circular dial."
      },
      {
        title: "Allergen Warning Chips",
        desc: "Designed high-contrast tags for rapid identification of gluten, soy, nuts, and palm oil."
      },
      {
        title: "Proactive Alternative Feed",
        desc: "Ensured users aren't left stranded when an item scores low by suggesting cleaner snacks immediately."
      }
    ],
    research: {
      personas: [
        {
          name: "Pooja Sharma",
          role: "Health-conscious Parent",
          quote: "I want to be sure the snacks I buy for my kids don't contain harmful synthetic additives or excessive hidden sugars.",
          needs: "Fast scanning in supermarket aisles, kid-safe food verification, clear allergen warnings."
        },
        {
          name: "Rohan Patel",
          role: "Fitness Enthusiast",
          quote: "I need honest protein-to-carb ratios and zero deceptive front-of-pack claims.",
          needs: "Macro breakdowns, ingredient transparency, clean alternative suggestions."
        }
      ]
    },
    gallery: [
      {
        url: "./images/projects/factsy/cover.png",
        caption: "Factsy Mobile Experience — High-Fidelity Interface Overview",
        tag: "Interface Overview",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/factsy/scan-flow.jpg",
        caption: "Barcode and Packaging Scanner Viewfinder",
        tag: "Scan Flow"
      },
      {
        url: "./images/projects/factsy/health-score.jpg",
        caption: "Nutritional Health Scorecard & Ingredient Flags",
        tag: "Health Score"
      },
      {
        url: "./images/projects/factsy/alternatives.jpg",
        caption: "Healthy Alternatives & Cleaner Snack Recommendations",
        tag: "Alternatives"
      },
      {
        url: "./images/projects/factsy/child-safe.jpg",
        caption: "Child-Safe Food Verification & Allergen Detection",
        tag: "Allergen Filter"
      },
      {
        url: "./images/projects/factsy/vendor-profile.jpg",
        caption: "Brand Transparency & Manufacturer Profile",
        tag: "Vendor Page"
      },
      {
        url: "./images/projects/factsy/onboarding.jpg",
        caption: "Minimalist Brand Onboarding Screen",
        tag: "Onboarding",
      }
    ],
  },

  /* -------------------------------------------------------------
     4. PAUDHEWALE (UI/UX DESIGN)
     ------------------------------------------------------------- */
  {
    id: "paudhewale",
    slug: "paudhewale",
    behanceUrl: "https://www.behance.net/gallery/255768435/Paudhewale-App-Redesign",
    title: "Paudhewale",
    subtitle: "Gardening App Redesign",
    category: "UI/UX Design",
    filterCategory: "UI/UX Design",
    year: "2026",
    featured: true,
    gridSize: "large",
    shortDescription: "A gardening app redesign focused on improving botanical navigation, simplifying care categories, and clearer shopping.",
    image: "./images/projects/paudhewale/cover.png",
    visualType: "paudhewale-botanical",
    role: "Product & UI/UX Designer",
    timeline: "3.5 Weeks",
    deliverables: ["Heuristic Analysis", "Information Architecture", "Component Library", "High-fidelity Mockups"],
    tools: ["Figma", "Photoshop"],
    overview: "Paudhewale is a plant and gardening appthat helps users discover and shop for plants and gardening Essentials..",
    problem: "Cluttered interface, Too many categories, poor information hierarchy, overload information.",
    goals: [
      "Simplified the interface to create a clean and less cluttered experience.",
      "Improved information Hierarchy.",
      "Created a consistent visual system for headings, cards, categories and buttons."
    ],
    targetAudience: "Urban apartment dwellers, beginner plant parents, and botanical enthusiasts.",
    designDirection: "Deep botanical dark canvas with lush verdant accents, organic pill navigation, and spacious card layouts.",
    colorPalette: [
      { name: "Deep Charcoal", hex: "#121413", role: "App Canvas" },
      { name: "Lush Moss", hex: "#2B5E41", role: "Botanical Primary" },
      { name: "Electric Sprout", hex: "#C7FF3D", role: "Care Alert & Accent" },
      { name: "Soft Clay", hex: "#E5DDD0", role: "Planter Neutral" }
    ],
    typography: "Manrope for modern, organic readability across varied screen densities.",
    keyDecisions: [
      {
        title: "3-Metric Glanceable Care System",
        desc: "Standardized care into Sunlight, Water, and Difficulty icons with visual level meters."
      },
      {
        title: "One-Tap Planter Matcher",
        desc: "Allowed buyers to visualize their selected plant inside ceramic, terracotta, or fiber planters before checkout."
      }
    ],
    gallery: [
      {
        url: "./images/projects/paudhewale/cover.png",
        caption: "Paudhewale Redesign — Primary Showcase on iPhone 16",
        tag: "Hero Screen",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/paudhewale/mockup-triple.png",
        caption: "Multi-Screen Interface Flow on iPhone 17 Pro Mockups",
        tag: "Overview Flow"
      },
      {
        url: "./images/projects/paudhewale/mockup-standing.png",
        caption: "Standing Dual Phone Perspective Presentation",
        tag: "Perspective"
      },
      {
        url: "./images/projects/paudhewale/screen-discovery.png",
        caption: "Plant Discovery & Curated Botanical Categories",
        tag: "Catalog"
      },
      {
        url: "./images/projects/paudhewale/screen-detail.png",
        caption: "Botanical Detail View & Pot Customizer",
        tag: "Product Page"
      },
      {
        url: "./images/projects/paudhewale/screen-care.png",
        caption: "Care Reminders & Watering Schedule Dashboard",
        tag: "Care Hub"
      },
      {
        url: "./images/projects/paudhewale/screen-cart.png",
        caption: "Cart and Order Confirmation Screen",
        tag: "Checkout Flow",
      }
    ],
  },

  /* -------------------------------------------------------------
     5. BEAUTY SALON APP (UI/UX DESIGN)
     ------------------------------------------------------------- */
  {
    id: "beauty-salon-app",
    slug: "beauty-salon-app",
    behanceUrl: "https://www.behance.net/gallery/257199439/Beauty-Salon-App-Redesign",
    title: "Beauty Salon App",
    subtitle: "Luxury Service Discovery & Booking Flow",
    category: "UI/UX Design",
    filterCategory: "UI/UX Design",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A mobile interface concept focused on presenting beauty services, stylist portfolios, and making appointment booking seamless.",
    image: "./images/projects/beauty-salon-app/cover.jpg",
    visualType: "factsy-scanner",
    role: "UI/UX Designer",
    timeline: "2 Weeks",
    deliverables: ["User Journey Mapping", "Wireframes", "Interactive App Screens", "Booking Flow System"],
    tools: ["Figma", "Photoshop"],
    overview: "A sleek, modern mobile application concept designed for premier aesthetic salons and spa studios, enabling clients to effortlessly explore treatments, view stylist portfolios, and book appointments in a few seamless taps.",
    problem: "Complex service discovery, Unclear booking process, Limited beautician information, Overcrowded homepage, Unclear payment & confirmation experience.",
    goals: [
      "Simplified service discovery.",
      "Streamlined booking flow.",
      "Improved beautician profiles.",
      "Tranparent payment and confirmation.",
      "Simplified home page." 
    ],
    targetAudience: "Working professionals and personal care enthusiasts seeking effortless appointment scheduling.",
    designDirection: "Dark editorial luxury with clean card boundaries, crisp treatment photography, and subtle electric accents.",
    colorPalette: [
      { name: "Obsidian Noir", hex: "#121216", role: "App Ground" },
      { name: "Electric Lime", hex: "#C7FF3D", role: "Selected Slot & CTA" },
      { name: "Warm Slate", hex: "#22222D", role: "Card Surface" },
      { name: "Soft Silk", hex: "#EDE8E1", role: "Primary Text" }
    ],
    typography: "Space Grotesk headers paired with Inter body for effortless booking flow clarity.",
    keyDecisions: [
      {
        title: "Visual Treatment Cards",
        desc: "Each service card showcases duration, pricing, and stylist ratings upfront."
      },
      {
        title: "Unified 3-Step Booking Sheet",
        desc: "Avoided multi-page redirects in favor of an ergonomic bottom sheet keeping context visible."
      }
    ],
    gallery: [
      {
        url: "./images/projects/beauty-salon-app/cover.jpg",
        caption: "Beauty Salon App — Hero Interface Banner & Overview",
        tag: "Hero Banner",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/beauty-salon-app/service-catalog.jpg",
        caption: "Service Catalog & Category Exploration",
        tag: "Service Catalog"
      },
      {
        url: "./images/projects/beauty-salon-app/stylist-detail.jpg",
        caption: "Treatment Detail Screen & Stylist Portfolio",
        tag: "Stylist Detail"
      },
      {
        url: "./images/projects/beauty-salon-app/booking-flow.jpg",
        caption: "Interactive Appointment Booking & Time Slot Selection",
        tag: "Booking Flow"
      },
      {
        url: "./images/projects/beauty-salon-app/confirmation.jpg",
        caption: "Booking Confirmation & Appointment Summary",
        tag: "Confirmation"
      },
      {
        url: "./images/projects/beauty-salon-app/splash.jpg",
        caption: "Minimalist Brand Splash Screen",
        tag: "Splash Screen"
      }
    ],
  },

  /* -------------------------------------------------------------
     6. RAIN & BREW (BRANDING)
     ------------------------------------------------------------- */
  {
    id: "rain-and-brew",
    slug: "rain-and-brew",
    behanceUrl: "https://www.behance.net/",
    title: "Rain & Brew",
    subtitle: "Café Brand Identity & Roastery",
    category: " Ai Branding",
    filterCategory: " Ai Branding",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A rain-inspired boutique café brand identity combining warm coffee tones, tactile typography, and a cozy atmosphere.",
    image: "./images/projects/rain-and-brew/cover.png",
    visualType: "rain-brew-board",
    role: "Brand Identity Designer",
    timeline: "2 Days",
    deliverables: ["Visual Identity System", "Logomark Suite", "Packaging Collateral", "Menu Typography", "Merchandise"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    overview: "Rain & Brew is an artisanal roastery and café concept rooted in the comfort of a rainy afternoon accompanied by freshly brewed pour-over coffee. The brand identity pairs earthy warmth with minimalist editorial discipline.",
    problem: "Most boutique coffee shops mimic generic monochromatic minimalism or heavy vintage hipster clichés. Rain & Brew needed an identity that felt contemporary, sensory, and evocative of petrichor and contemplative warmth.",
    goals: [
      "Craft an iconic geometric logomark uniting a falling raindrop with an espresso coffee bean.",
      "Build a tactile packaging system for specialty cold brews and single-origin coffee bean bags.",
      "Establish an unhurried, editorial menu typography hierarchy."
    ],
    targetAudience: "Coffee connoisseurs, urban creatives, and patrons seeking a serene, warm sanctuary to read or work.",
    designDirection: "Rich espresso tones, warm oatmeal neutrals, and gentle petrichor slate accents with delicate geometric hairline motifs.",
    colorPalette: [
      { name: "Roasted Espresso", hex: "#1E1510", role: "Primary Identity Ground" },
      { name: "Warm Oat", hex: "#E8DFD5", role: "Kraft Label Packaging" },
      { name: "Petrichor Slate", hex: "#4E5D68", role: "Secondary Accent" },
      { name: "Electric Lime", hex: "#C7FF3D", role: "Limited Edition Stamp" }
    ],
    typography: "Refined high-contrast serif display font contrasted with utilitarian mono details for roasting dates and origins.",
    keyDecisions: [
      {
        title: "Sensory Paper Stocks",
        desc: "Specified unbleached, textured cotton cardstock with debossed logos to evoke tactile warmth."
      },
      {
        title: "Adaptive Logo Lockups",
        desc: "Designed horizontal and vertical marks suitable for takeaway sleeves, glass cold brew bottles, and neon signage."
      }
    ],
    gallery: [
      {
        url: "./images/projects/rain-and-brew/logo.png",
        caption: "Brand Identity & Logo Design",
        tag: "Brand Identity"
      },
      {
        url: "./images/projects/rain-and-brew/social media.png",
        caption: "social media poster",
        tag: "social media"
      },
      {
        url: "./images/projects/rain-and-brew/social media poster.png",
        caption: "social media poster",
        tag: "Social media"
      },
      {url: "./images/projects/rain-and-brew/Takeaway bag.png",
        caption: "Rain & Brew premium Branded Takeaway paper Bag Design",
        tag: "Takeaway Packaging"
      },
      {url: "./images/projects/rain-and-brew/coldcoffee.png",
        caption: "Rain & Brew premium Branded Takeaway paper Bag Design",
        tag: "Takeaway Packaging"},
        {url: "./images/projects/rain-and-brew/coffeekit.png",
        caption: "Rain & Brew premium Branded coffeekit Design",
        tag: "Branded Packaging"},
        {url: "./images/projects/rain-and-brew/coffeebean.png",
        caption: "Rain & Brew premium Branded packaging Design",
        tag: "Branded Packaging"},
        {url: "./images/projects/rain-and-brew/coffeebean jar.png",
        caption: "Rain & Brew premium Branded packaging Design",
        tag: "Branded Packaging"},
        {url: "./images/projects/rain-and-brew/coffee tumbler.png",
        caption: "Rain & Brew premium merchandise Design",
        tag: "Branded merchandise"},
        {url: "./images/projects/rain-and-brew/coaster.png",
        caption: "Rain & Brew premium Tableware Design",
        tag: "Branded Tableware"},
        {url: "./images/projects/rain-and-brew/cafe tableware.png",
        caption: "Rain & Brew premium Tableware Design",
        tag: "Branded Tableware"},
        {url: "./images/projects/rain-and-brew/cafe interior.png",
        caption: "Rain & Brew premium interior Design",
        tag: "Branded Interior"},
        {url: "./images/projects/rain-and-brew/barista apron.png",
        caption: "Rain & Brew premium Apron Design",
        tag: "Branded Apron"},
        {url: "./images/projects/rain-and-brew/Thankyou card.png",
        caption: "Rain & Brew premium Thnakyou card Design",
        tag: "Branded Card"}
    ],
  },

  /* -------------------------------------------------------------
     7. ECO EDGE (BRAND IDENTITY)
     ------------------------------------------------------------- */
  {
    id: "eco-edge",
    slug: "eco-edge",
    behanceUrl: "https://www.behance.net/benazirbegum2",
    title: "Eco Edge",
    subtitle: "Import/Export Sustainable Identity",
    category: "Brand Identity",
    filterCategory: "Brand Identity",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A brand identity concept for an import-export business specializing in packaging and sustainable product solutions.",
    image: "./images/projects/eco-edge/cover.jpeg",
    visualType: "eco-edge-logistics",
    role: "Brand Identity Designer",
    timeline: "2 Weeks",
    deliverables: ["Brand Identity Concept", "Logo Variations", "Stationery & Visiting Cards", "Corporate Guidelines"],
    tools: ["Illustrator", "Photoshop"],
    overview: "Eco Edge is an international B2B trading and sustainable packaging export enterprise. The identity balances global logistics precision with uncompromising environmental responsibility.",
    problem: "ECO EDGE needed a strong, professional brand identity that communicates its global trading capabilities, business reliability, and versatility across diverse product categories in the import and export industry.",
    goals: [
      "Create a distinctive corporate identity that reflects professionalism, trust, and global business connectivity.",
      "Develop cohesive branding across visiting cards, billboards, standees, T-shirts, mugs, and fleet wraps.",
      "Build a recognizable visual presence across corporate, promotional, and outdoor advertising materials."
    ],
    targetAudience: "Global enterprise supply chain executives, wholesale distributors, and retail procurement teams.",
    designDirection: "Architectural grid lines, technical data readouts, dark forest greens, and electric lime indicators.",
    colorPalette: [
      { name: "Industrial Dark", hex: "#0E1210", role: "Corporate Ground" },
      { name: "Forest Canopy", hex: "#1C3B2B", role: "Brand Primary" },
      { name: "Sustainable Lime", hex: "#C7FF3D", role: "Eco Accent & Mark" },
      { name: "Clean Kraft", hex: "#D6CCC2", role: "Unbleached Stock" }
    ],
    typography: "Space Grotesk paired with technical monospace labels for container specifications and certifications.",
    keyDecisions: [
      {
        title: "Dual-Tone Visiting Card Suite",
        desc: "Designed contrast front/back cards with debossed environmental ISO certification seals."
      },
      {
        title: "Container Markings Dieline",
        desc: "Created bold, high-contrast stencils for international shipping crates and pallet wraps."
      }
    ],
    gallery: [
      {
        url: "./images/projects/eco-edge/cover.jpeg",
        caption: "Eco Edge Corporate Visiting Card Suite — Editorial Presentation",
        tag: "Visiting Cards",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/eco-edge/idcard.png",
        caption: "Corporate ID Card Front Layout with High-Fidelity Finish",
        tag: "Card Front"
      },
      {
        url: "./images/projects/eco-edge/billboard.png",
        caption: "A billboard design combining impactful typography and striking visuals to enhance Eco Edge's brand visibility",
        tag: "Outdoor Advertising"
      },
      {url: "./images/projects/eco-edge/bag.jpg",
        caption: "Eco Edge Merchandise",
        tag: "Merchandise"},
        {url: "./images/projects/eco-edge/envelope.jpg",
        caption: "Eco Edge Envelope",
        tag: "Envelope Design"},
        {url: "./images/projects/eco-edge/fleet wrap.jpg",
        caption: "Eco Edge Fleet wrap",
        tag: "Fleet Wrap"},
        {url: "./images/projects/eco-edge/newsletter.jpg",
        caption: "Eco Edge Newsletter",
        tag: "Newsletter"},
        {url: "./images/projects/eco-edge/tshirt.jpg",
        caption: "Eco Edge Merchandise",
        tag: "Merchandise"},
        {url: "./images/projects/eco-edge/mug.jpg",
        caption: "Eco Edge Merchandise",
        tag: "Merchandise"},
        {url: "./images/projects/eco-edge/standee.jpg",
        caption: "Eco Edge standee",
        tag: "Outdoor Advertising"}
    ],
  },

  /* -------------------------------------------------------------
     8. CREATIVE POSTER COLLECTION (GRAPHIC DESIGN)
     ------------------------------------------------------------- */
  {
    id: "creative-posters",
    slug: "creative-posters",
    behanceUrl: "https://www.behance.net/benazirbegum2",
    title: "Creative Poster Collection",
    subtitle: "Swiss Typographic Explorations",
    category: "Graphic Design",
    filterCategory: "Graphic Design",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A series of editorial and Swiss-style poster designs exploring asymmetric grids, oversized typography, and visual tension.",
    image: "./images/projects/posters/movie poster.jpeg",
    visualType: "swiss-poster",
    role: "Graphic & Poster Designer",
    timeline: "Ongoing Exploration",
    deliverables: ["Editorial Posters", "Typographic Compositions", "Grid Studies", "Exhibition Prints"],
    tools: ["Illustrator", "Photoshop"],
    overview: "A self-initiated collection of contemporary posters investigating the limits of typography, negative space, and chromatic contrast. The series blends brutalist Swiss discipline with dynamic digital art direction.",
    targetAudience: "Art directors, creative studios, typography enthusiasts, and cultural institutions.",
    designDirection: "High-contrast monochrome foundations electrified by sharp #C7FF3D lime accents and bold brutalist type.",
    colorPalette: [
      { name: "Deep Ink", hex: "#0A0A0D", role: "Poster Canvas" },
      { name: "Electric Lime", hex: "#C7FF3D", role: "Graphic Slash & Tension" },
      { name: "Pure Titanium", hex: "#FFFFFF", role: "Display Headline" },
      { name: "Muted Chrome", hex: "#7A7A85", role: "Grid Lines & Microtext" }
    ],
    typography: "Oversized Space Grotesk display forms set in extreme weights, anchored by dense Swiss grid captions.",
    keyDecisions: [
      {
        title: "Intentional Asymmetry",
        desc: "Arranged elements off-center to produce optical tension while preserving reading flow."
      },
      {
        title: "Layered Texture Overlays",
        desc: "Integrated subtle paper grain and halftone dot matrices to evoke tactile silkscreen printing."
      }
    ],
    gallery: [
      {
        url: "./images/projects/posters/movie poster.jpeg",
        caption: "A cinematic poster capturing the timeless romance and emotional beauty of Sita Ramam.",
        tag: "Movie Poster",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/posters/text poster.jpeg",
        caption: "A bold promotional poster highlighting UNIQLO's vibrant fashion and contemporary style.",
        tag: "Text Poster"
      },
      {
        url: "./images/projects/posters/movie poster 2.jpeg",
        caption: " A cinematic poster showcasing powerful storytelling, and an intense police Drama",
        tag: "Movie poster"
      },
      {
        url: "./images/projects/posters/vector ad poster.jpeg",
        caption: "A vibrant vector travel poster showcasing exciting adventures across the world.",
        tag: "Vector poster",
      },
      {
        url: "./images/projects/posters/double exposure.jpeg",
        caption: "A captivating double-exposure poster blending layered imagery, dramatic lighting, and cinematic storytelling.",
        tag: "Double exposure"
      },
      {
        url: "./images/projects/posters/product manipulation poster.jpeg",
        caption: "A creative product manipulation poster showcassing jasminr perfume through a refreshing blend of nature and elegance.",
        tag: "Product manipulation poster"
      },
      {url: "./images/projects/posters/creative poster.jpeg",
        caption: "A luxurious creative advertising poster highlighting Royla elegance, rich tones and premium typography",
        tag: "creative poster"},
        {url: "./images/projects/posters/ad poster.jpeg",
        caption: "Premium jewellery promotional poster ",
        tag: "Jewellery poster"}
    ],
  },

  /* -------------------------------------------------------------
     9. ADVERTISING BANNER DESIGN (GRAPHIC DESIGN)
     ------------------------------------------------------------- */
  {
    id: "advertising-banner",
    slug: "advertising-banner",
    behanceUrl: "https://www.behance.net/benazirbegum2",
    title: "Advertising Banner Design",
    subtitle: "Product Campaigns & Visual Redesigns",
    category: "Graphic Design",
    filterCategory: "Graphic Design",
    year: "2026",
    featured: false,
    gridSize: "medium",
    shortDescription: "A series of high-impact advertising banners presenting product compositions, flavor variants, and luxury brand redesigns.",
    image: "./images/projects/advertising-banner/cover.jpg",
    visualType: "packaging-dipline",
    role: "Advertising & Visual Designer",
    timeline: "2.5 Weeks",
    deliverables: ["Product Campaign Banners", "Flavor Variations", "Typography System", "Digital Display Creatives"],
    tools: ["Photoshop", "Illustrator","fFigma"],
    overview: "A collection of creative advertising banners designed for digital platforms and promotional campaigns.",
    targetAudience: "Food & beverage brands, luxury lifestyle publications, and digital ad agencies.",
    designDirection: "Bold product-first composition, deep contrast shadows, and appetizing chromatic accents.",
    colorPalette: [
      { name: "Obsidian Backdrop", hex: "#141418", role: "Negative Space" },
      { name: "Electric Lime", hex: "#C7FF3D", role: "Call-to-Action Focus" },
      { name: "Warm Gold", hex: "#C8A97E", role: "Luxury Fragrance Accent" },
      { name: "Sriracha Red", hex: "#D62828", role: "Chili Flavor Banner" }
    ],
    typography: "High-fashion Roman serif typography paired with punchy geometric sans-serif for product callouts.",
    keyDecisions: [
      {
        title: "Product-First Hero Staging",
        desc: "Positioned bottles with subtle dynamic splash elements to convey freshness without visual clutter."
      },
      {
        title: "Generous Negative Space in Luxury Ads",
        desc: "Surrounded the perfume bottle with expansive editorial margin to immediately command prestige."
      }
    ],
    gallery: [
      {
        url: "./images/projects/advertising-banner/cover.jpg",
        caption: "Primary Gusto Sauce Campaign Banner — Dynamic Product Staging",
        tag: "Hero Banner",
        span: "gallery-span-2"
      },
      {
        url: "./images/projects/advertising-banner/flavor-variant-2.jpg",
        caption: "Primary Gusto Sauce Campaign Banner — Dynamic Product Staging",
        tag: "Hero Banner"
      },
      {
        url: "./images/projects/advertising-banner/sauce 5.jpg",
        caption: "Primary Gusto Sauce Campaign Banner — Dynamic Product Staging",
        tag: "Hero Banner"
      },
      {
        url: "./images/projects/advertising-banner/sauce 4.jpg",
        caption: "Primary Gusto Sauce Campaign Banner — Dynamic Product Staging",
        tag: "Hero Banner",
      },
      {
        url: "./images/projects/advertising-banner/gucci-perfume-cover.jpg",
        caption: "Editorial Luxury Perfume Hero Banner — Concept Redesign",
        tag: "Luxury Redesign"
      },
      {
        url: "./images/projects/advertising-banner/gucci-perfume-banner.jpg",
        caption: "Editorial Luxury Perfume Hero Banner — Concept Redesign",
        tag: "Luxury Redesign"
      },
      { url: "./images/projects/advertising-banner/perfume banner 4.jpg",
        caption: "Editorial Luxury Perfume Hero Banner — Concept Redesign",
        tag: "Luxury Redesign"},
      {url: "./images/projects/advertising-banner/perfume banner 3.jpg",
        caption: "Editorial Luxury Perfume Hero Banner — Concept Redesign",
        tag: "Luxury Redesign"},
        {url: "./images/projects/advertising-banner/cake mockup 2.jpg",
        caption: "Wedding cake web banner Design",
        tag: "Premium Web banner"},
        {url: "./images/projects/advertising-banner/cake mockup 4.jpg",
        caption: "Wedding cake web banner Design",
        tag: "Premium Web banner"},
        {url: "./images/projects/advertising-banner/cake mockup 3.jpg",
        caption: "Wedding cake web banner Design",
        tag: "Premium Web banner"},
        {url: "./images/projects/advertising-banner/perfume website banner.jpg",
        caption: "Premium perfume web banner",
        tag: "Web banner"}
    ],

  }
];
