export const personalInfo = {
  name: "Padmanava Karmakar",
  role: "Flutter Developer (Mobile App Developer) | AI-Assisted Development",
  headline: "Building High-Performance Cross-Platform Apps with Clean Architecture & AI-Augmented Velocity",
  bio: "Flutter developer with 4.5 years of experience building cross-platform iOS and Android apps for healthcare, fintech, logistics and food delivery. Shipped apps to the App Store and Play Store, led the mobile side of a HIPAA telemedicine product, and use Claude Code and Cursor daily to move faster. Work directly with clients and sit in on technical interviews that help win new projects.",
  location: "Ahmedabad, Gujarat, India",
  availability: "Immediate Joiner • Open to Relocation",
  email: "karpadmanava16@gmail.com",
  phone: "+91-7908767307",
  linkedin: "https://www.linkedin.com/in/padmanava-karmakar-5069641b6",
  github: "https://github.com/padmanava1",
  portfolioUrl: "https://padmanava1.github.io/portfolio",
  resumeUrl: "./Padmanava_Karmakar_Resume.pdf",
  profileImg: "./profile.jpg",
  status: "Immediate Joiner",
};

export const stats = [
  { label: "Production Experience", value: "4.5+ Yrs", sub: "Bacancy & Radixweb" },
  { label: "Production Screens", value: "200+ Screens", sub: "HIPAA, Commerce, Logistics" },
  { label: "Ticket Velocity", value: "50-60/Day", sub: "Claude Code Automated Workflow" },
  { label: "Delivery Multiplier", value: "10x Velocity", sub: "Disciplined AI-Augmented SDLC" },
];

export const featuredProjects = [
  {
    id: "cafeasy",
    title: "Cafeasy",
    tagline: "Location-Aware RAG Recommendation Engine with Vector Search & Maps (Live Product)",
    badge: "Live RAG Product",
    category: "Python & AI",
    featuredRank: 1,
    teamSize: "AI-Assisted Personal Product",
    role: "AI & Full-Stack Developer",
    liveUrl: "https://cafeasy.onrender.com/",
    summary: "A production location-aware Retrieval-Augmented Generation (RAG) recommendation engine built over scraped cafe data. Delivers hallucination-free answers grounded strictly in stored places, each backed by a verified Google Maps link and interactive map view.",
    architectureHighlight: "Hybrid vector search powered by ChromaDB dense embeddings, served through a FastAPI backend and deployed live on Render; guarantees answers only from stored records to eliminate AI hallucinations.",
    techStack: [
      "Python", "FastAPI", "ChromaDB", "RAG Pipeline",
      "Vector Embeddings", "LLMs", "Google Maps API", "Render Deployment"
    ],
    highlights: [
      "Live Production App: Hosted and live at cafeasy.onrender.com with real-time interactive UI.",
      "Hallucination-Free RAG: Dense vector embeddings guarantee LLMs strictly recommend verified, stored places.",
      "Google Maps Integration: Every suggestion includes an authentic, checked Google Maps link and an interactive map view.",
      "End-to-End AI-Assisted Build: Prototyped and shipped rapidly utilizing Claude Code, Cursor, and Antigravity."
    ]
  },
  {
    id: "the-word",
    title: "The Word",
    tagline: "Social Impact Platform with Military-Grade E2EE Messaging & Gemini AI",
    badge: "Security & Real-Time",
    category: "Mobile",
    featuredRank: 2,
    teamSize: "3 developers (scaled to 2)",
    role: "Software Engineer",
    summary: "A comprehensive social impact mobile application connecting donors, charities, and communities through secure real-time communication, donation tracking, and community engagement.",
    architectureHighlight: "Engineered a custom End-to-End Encryption (E2EE) service utilizing PointyCastle and Encrypt with hybrid RSA/AES encryption for text, images, and video files, integrated with Flutter Secure Storage.",
    techStack: [
      "Flutter", "Dart", "Material Design 3", "Riverpod",
      "Firebase (Firestore, Auth, Storage, Functions)",
      "PointyCastle (RSA/AES)", "Flutter Secure Storage",
      "Typesense Search", "Google Gemini AI", "Stripe", "FCM"
    ],
    highlights: [
      "Custom E2EE Messaging: Built military-grade RSA/AES encryption with secure key exchange and optional privacy toggles.",
      "Google Gemini AI & Semantic Search: Integrated Gemini AI features and Typesense search for intelligent cause and charity discovery.",
      "Stripe Payment Gateway: Processed secure credit card donations, receipts, and corporate matching.",
      "Real-Time Chat & Media: Video/photo compression, caching, unread tracking, and push notifications via FCM."
    ]
  },
  {
    id: "telemedicine",
    title: "TeleMedicine Platform",
    tagline: "HIPAA-Compliant Multi-Portal Healthcare System with Video Calling",
    badge: "Healthcare & Fintech",
    category: "Mobile & APIs",
    featuredRank: 3,
    teamSize: "Sole Flutter Dev (1 of 4 Mobile API Developers)",
    role: "Mobile Module Lead & API Developer",
    summary: "A production-grade, HIPAA-compliant telehealth platform with three distinct role-based portals: Patient, Doctor, and Admin, complete with video consultations (Jitsi Meet SDK) and appointment booking.",
    architectureHighlight: "Built 50+ screens for patient, doctor, and admin roles as sole Flutter developer; adapted the platform's Next.js web APIs for mobile compatibility across auth, appointment booking, and admin flows.",
    techStack: [
      "Flutter", "Dart", "Riverpod", "Dio", "GoRouter",
      "Jitsi Meet SDK", "flutter_secure_storage", "Stripe",
      "Next.js API Layer", "Role-Based MFA", "Build Flavors"
    ],
    highlights: [
      "50+ Screens Across 3 Portals: Single codebase catering to Patient, Doctor, and Admin experiences.",
      "Video Consultations: Integrated Jitsi Meet SDK for smooth doctor–patient remote video sessions.",
      "End-to-End Booking Lifecycle: Doctor schedule lookup, slot selection, and Stripe checkout verification.",
      "HIPAA Security Hardening: Email-OTP Multi-Factor Authentication, idle-session auto-logout, and secure token caching.",
      "Flavors & Packaging: Configured dev and prod environments for seamless iOS and Android releases."
    ]
  },
  {
    id: "goldbank",
    title: "GoldBank Ecosystem",
    tagline: "High-Value Parcel Logistics & Luxury Precious Metals Marketplace (London, UK)",
    badge: "Logistics & Fintech",
    category: "Mobile",
    featuredRank: 4,
    teamSize: "2 developers, QA, Manager",
    role: "Software Engineer",
    summary: "A multi-app London-based ecosystem encompassing driver parcel collection/delivery tracking via Mapbox and luxury gold, silver, and platinum trading apps with live foreign exchange pricing.",
    architectureHighlight: "Rebuilt the driver app for a London logistics client with live journey tracking synced to the admin panel; shipped several releases of Goldbank Live on App Store and Play Store and maintained Sell Gold.",
    techStack: [
      "Flutter", "Dart", "Riverpod", "GetX", "Mapbox API",
      "REST APIs", "Live Foreign Exchange Rates", "Real-Time Sync"
    ],
    highlights: [
      "Goldbank Driver: Rebuilt London courier app with live GPS parcel collection/drop-off journeys using Mapbox API.",
      "Goldbank Live: Interactive live showroom on App Store and Play Store featuring luxury jewelry and streaming FX & cryptocurrency price tickers.",
      "Sell Gold: Precision price-locking mechanism enabling customers to lock in real-time gold/silver prices with courier collection."
    ]
  },
  {
    id: "santa-com",
    title: "Santa.com Full Ecosystem",
    tagline: "Full-Stack AI-Powered E-Commerce Ecosystem (Mobile App, Admin & APIs)",
    badge: "Full-Stack Ecosystem",
    category: "Mobile & APIs",
    featuredRank: 5,
    teamSize: "Full Ecosystem Architecture",
    role: "Full-Stack Mobile Engineer",
    summary: "A complete end-to-end commerce ecosystem consisting of a Flutter mobile shopping app, a Node.js/Express REST backend with JWT authentication and PostgreSQL, and a React + Vite admin dashboard.",
    architectureHighlight: "Architected the unified ecosystem: reactive Flutter mobile frontend with flutter_animate and Lottie, connected to a robust Node.js/Express API layer with Supabase/PostgreSQL and a modern React + Tailwind admin portal.",
    techStack: [
      "Flutter", "Riverpod", "GoRouter", "React + Vite",
      "Tailwind CSS", "Node.js", "Express", "JWT Auth",
      "Supabase", "PostgreSQL", "Firebase", "Lottie"
    ],
    highlights: [
      "Full-Stack Ecosystem: Cross-platform Flutter mobile app + React/Vite admin dashboard + Node.js API.",
      "AI & Interactive Shopping: Visual Search (snap-to-shop), AI Stylist, AR Try-On, social Squad Cart, and interactive price-haggle mode.",
      "Admin Operations: Full admin suite for analytics, product/order/vendor management, vendor KYC, coupons, audit logs, and 2FA.",
      "Catalog Depth: 200+ products across 10+ categories with instant search and category filters."
    ]
  },
  {
    id: "diginn",
    title: "DigInn",
    tagline: "Healthy Food Ordering App with Multi-Tier Loyalty Engine (Live on App Store & Play Store)",
    badge: "Commerce & Loyalty",
    category: "Mobile",
    featuredRank: 6,
    teamSize: "2 developers, QA, Tech Lead",
    role: "Software Developer",
    summary: "A restaurant mobile application focused on customized healthy meals, full nutritional and calorie tracking, pickup/delivery scheduling, and a 3-tier customer loyalty rewards system.",
    architectureHighlight: "Structured Clean Architecture with GetX for reactive state management, integrated Thanx SDK for deep linking, and Isar database for offline caching.",
    techStack: [
      "Flutter", "Dart", "GetX", "Dio", "Retrofit",
      "Thanx SDK", "Isar Database", "Firebase (FCM, Analytics)",
      "Clean Architecture", "Unit Testing"
    ],
    highlights: [
      "Multi-Tier Loyalty Engine: Custom reward tiering (Bronze, Silver, Gold) with signup and birthday rewards.",
      "Nutritional Breakdown: Dynamic calorie, protein, and macro calculations updated in real-time as users customize meals.",
      "Production Releases: Shipped multiple live releases to both Apple App Store and Google Play Store."
    ]
  },
  {
    id: "astraquant",
    title: "AstraQuant",
    tagline: "AI Stock Intelligence & Explainable Predictions App (NSE/BSE)",
    badge: "ML & Analytics",
    category: "Python & ML",
    featuredRank: 7,
    teamSize: "AI-Assisted Personal Project",
    role: "Full-Stack Engineer",
    summary: "Market intelligence app delivering ML-driven stock predictions, real-time sentiment analysis, portfolio tracking, and market regime detection for retail investors in Indian equity markets.",
    architectureHighlight: "Flutter frontend communicating over WebSockets; combines XGBoost, LightGBM, and custom expert models with SHAP-based explainability for prediction transparency.",
    techStack: [
      "Flutter", "Riverpod", "fl_chart", "Python", "FastAPI",
      "XGBoost", "LightGBM", "SHAP Explainability", "WebSockets", "Redis", "PostgreSQL"
    ],
    highlights: [
      "Real-Time WebSocket Streams: Ultra-low latency price and sentiment streaming with Redis caching.",
      "Explainable AI with SHAP: Allows investors to inspect exactly which fundamental and technical drivers influenced each forecast.",
      "Interactive Charting: Smooth financial charts powered by fl_chart with custom timeframes and overlays."
    ]
  },
  {
    id: "alankar",
    title: "Alankar",
    tagline: "Indian Classical Music Education with C++ Audio Engine & Pitch Detection",
    badge: "Audio & Algorithms",
    category: "Mobile & Audio",
    featuredRank: 8,
    teamSize: "Independent Project",
    role: "Software Engineer",
    summary: "Hindustani classical music training platform delivering sub-cent pitch detection accuracy, 40+ traditional raags, and zero-latency virtual harmonium with realistic bellow physics.",
    architectureHighlight: "Integrated flutter_soloud C++ audio engine for instantaneous acoustic response combined with FFT pitch detection and offline-first SQLite storage.",
    techStack: [
      "Flutter", "flutter_soloud (C++ Engine)", "FFT Pitch Detection",
      "Provider", "fl_chart", "Supabase", "SQLite", "Google Gemini"
    ],
    highlights: [
      "Zero-Latency C++ Audio Engine: Realistic virtual harmonium with bellow pressure physics.",
      "Sub-Cent FFT Pitch Detection: Live vocal feedback tracking sargam patterns and raag micro-tones.",
      "Offline-First Architecture: SQLite local persistence with cloud sync via Supabase."
    ]
  },
  {
    id: "rider-buddy",
    title: "Rider Buddy",
    tagline: "Real-Time Group Cycling Geolocation & Map Clustering Engine",
    badge: "Geolocation & Maps",
    category: "Mobile",
    featuredRank: 9,
    teamSize: "Mobile Developer",
    role: "Software Engineer",
    summary: "Real-time group cycling application featuring precision location sharing with up to ~10m accuracy, QR-based group management, and dynamic mid-journey meeting point calculation.",
    architectureHighlight: "Optimized Firebase real-time listeners and coordinate caching to support seamless group sync while minimizing battery consumption.",
    techStack: [
      "Flutter", "Firebase", "Google Maps API",
      "Coordinate Clustering", "Compass Navigation", "Offline Sync"
    ],
    highlights: [
      "~10m Precision GPS: Live member status tracking with custom compass navigation and polyline route mapping.",
      "Dynamic Meeting Points: Intelligent algorithm calculating meeting points for riders joining groups mid-ride.",
      "Marker Clustering: Clustered map rendering for smooth 60fps interaction and low battery consumption."
    ]
  }
];

export const workflowHighlights = {
  title: "The AI-Assisted Workflow Edge",
  subtitle: "50–60 Tickets/Day Velocity with Strict Clean Architecture",
  description: "Advanced practitioner of modern AI-assisted engineering with Claude Code, Cursor, and Antigravity. Automated an end-to-end ticket lifecycle (pick up, implement, test, update, close) that resolved 50–60 tickets per day for several months on a tight client deadline, while maintaining pre-sales excellence, technical client demos, and strict Clean Architecture.",
  principles: [
    {
      title: "50-60 Tickets / Day Automation",
      desc: "Proven execution setting up Claude Code workflows that cleared 50-60 tickets a day for several months on a deadline-critical client project."
    },
    {
      title: "Pre-Sales & Client Interviews",
      desc: "Actively involved in client technical interviews and live demos that help win new enterprise projects, explaining architecture with clarity."
    },
    {
      title: "Strict Clean Architecture",
      desc: "Separation of Presentation, Domain, and Data layers. AI generates code rapidly; human engineering enforces SOLID design, dependency injection (GetIt), and state isolation."
    },
    {
      title: "Technical Mentorship & Articles",
      desc: "Led Bacancy's Stack Overflow group, authored Medium technical articles, mentored juniors, and joined the company AI program on Claude Code, Codex, and Cursor."
    }
  ]
};

export const skillsData = {
  mobile: {
    title: "Flutter & Mobile",
    icon: "Smartphone",
    skills: [
      "Flutter & Dart (4.5 Yrs)", "Material Design 3", "Responsive / Adaptive UI",
      "Custom Widgets & Animations", "Isolates", "Localization (i18n)",
      "Flutter Web", "In-App Purchases", "Platform Channels (Kotlin, Swift)",
      "Deep Links", "Push Notifications", "Offline Sync", "Build Flavors",
      "Performance Optimization"
    ]
  },
  architecture: {
    title: "State Management & Architecture",
    icon: "Layers",
    skills: [
      "Bloc & Cubit", "Riverpod", "Provider", "GetX",
      "Clean Architecture", "MVVM & SOLID", "Dependency Injection (GetIt)",
      "GoRouter", "Code Generation (build_runner)"
    ]
  },
  backendData: {
    title: "Backend, Data & Cloud",
    icon: "Server",
    skills: [
      "Firebase (Firestore, Auth, Cloud Functions, FCM, Remote Config, Crashlytics)",
      "Supabase", "REST APIs", "JSON & dio", "Retrofit", "WebSockets",
      "Node.js", "Python", "FastAPI", "PostgreSQL", "SQLite & Isar"
    ]
  },
  integrationsTools: {
    title: "Integrations, AI & DevOps",
    icon: "Cpu",
    skills: [
      "Google Maps & Mapbox", "Stripe Payments", "Video Calling (Jitsi Meet SDK)",
      "RSA/AES Encryption & Secure Storage", "MFA & HIPAA Compliance",
      "Google Gemini API & ChromaDB", "App Store & Play Store Deployment",
      "Web Deployment (Vercel, GitHub Pages)", "CI/CD (GitHub Actions, Codemagic, Fastlane)",
      "Claude Code, Codex, Cursor & Antigravity"
    ]
  }
};

export const experience = [
  {
    period: "Sep 2023 - Present",
    role: "Software Engineer",
    company: "Bacancy Technology",
    location: "Ahmedabad, India",
    type: "Full-Time",
    description: "Leading mobile modules, handling pre-sales technical interviews, client demos, and setting up AI-assisted workflows. Automated ticket resolution with Claude Code clearing 50-60 tickets/day during critical deadlines.",
    keyPoints: [
      "Worked on solo and team projects, handling estimates, development, CI/CD pipelines, and App Store/Play Store deployment.",
      "Part of the pre-sales team: joined client technical interviews that helped win new projects, and handled regular client calls and demos.",
      "Set up a Claude Code workflow that picked up, fixed, tested, and closed tickets, clearing 50-60 tickets a day for several months on a tight client deadline.",
      "Led the Stack Overflow answering group, took internal technical sessions, mentored juniors, reviewed code, wrote Medium articles for Bacancy, and joined the company AI program on Claude Code, Codex, and Cursor.",
      "Telemedicine app (HIPAA): Mobile lead and only Flutter developer; built 50+ screens for patient, doctor, and admin, including video consultations (Jitsi), Stripe, OTP MFA, and adapted Next.js web APIs.",
      "The Word: Built encrypted chat (RSA/AES), real-time messaging, Stripe donations, search, and Gemini-based features.",
      "Goldbank Driver, Goldbank Live & Sell Gold: Rebuilt driver app for London logistics with live journey tracking; shipped several releases of Goldbank Live and maintained Sell Gold."
    ]
  },
  {
    period: "Feb 2022 - Aug 2023",
    role: "Associate Software Engineer",
    company: "Radixweb",
    location: "Ahmedabad, India",
    type: "Full-Time (Started as Trainee Feb 2022)",
    description: "Built and shipped production Flutter applications across food ordering and logistics. Enforced Clean Architecture and reactive state patterns with GetX and Cubit.",
    keyPoints: [
      "Built DigInn (live on App Store & Play Store): built screens, reusable widgets, light/dark themes, meal customisation, and a 3-tier loyalty program; shipped several releases and wrote unit tests.",
      "Integrated REST APIs with dio and Retrofit, Firebase Remote Config, Analytics, FCM, and Isar local storage.",
      "Started as a trainee; learned code review, Flutter good practices, and client communication from the senior team."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Parul University",
    year: "2020 - 2022",
    grade: "CGPA 8.3 / 10"
  },
  {
    degree: "B.Sc. Physics (Hons)",
    institution: "Krishnath College",
    year: "2016 - 2019",
    grade: "Completed with Honours"
  }
];
