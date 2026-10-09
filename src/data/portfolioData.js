export const personalInfo = {
  name: "Padmanava Karmakar",
  role: "AI Flutter Engineer",
  headline: "Building High-Performance Cross-Platform Apps with Clean Architecture & AI-Augmented Velocity",
  bio: "AI Flutter Engineer with 4.5+ years of production experience shipping high-impact, cross-platform apps for iOS & Android across healthcare (HIPAA), e-commerce, logistics, and real-time systems. Advanced practitioner of AI-assisted development (Claude Code, Cursor, Antigravity)—automated an end-to-end workflow resolving 50–60 tickets/day on deadline-critical client deliveries while enforcing strict Clean Architecture.",
  location: "Ahmedabad, Gujarat, India",
  availability: "Immediate Joiner • Open to Relocation",
  email: "karpadmanava16@gmail.com",
  phone: "+91-7908767307",
  linkedin: "https://www.linkedin.com/in/padmanava-karmakar-5069641b6",
  github: "https://github.com/padmanava1",
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
    id: "the-word",
    title: "The Word",
    tagline: "Social Impact Platform with Military-Grade E2EE Messaging & Gemini AI",
    badge: "Security & Real-Time",
    category: "Mobile",
    featuredRank: 1,
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
    featuredRank: 2,
    teamSize: "Sole Flutter Dev (1 of 4 Mobile API Developers)",
    role: "Mobile Module Lead & API Developer",
    summary: "A production-grade, HIPAA-compliant telehealth platform with three distinct role-based portals: Patient, Doctor, and Admin, complete with video consultations (Jitsi Meet SDK) and appointment booking.",
    architectureHighlight: "Built the entire Flutter frontend from scratch across all 3 portals (50+ screens) and adapted the platform's Next.js web APIs for mobile compatibility across auth, patient, doctor, and admin flows.",
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
    featuredRank: 3,
    teamSize: "2 developers, QA, Manager",
    role: "Software Engineer",
    summary: "A multi-app London-based ecosystem encompassing driver parcel collection/delivery tracking via Mapbox and luxury gold, silver, and platinum trading apps with live foreign exchange pricing.",
    architectureHighlight: "Revamped collection workflow with Riverpod and integrated Mapbox API for live London dispatch tracking mirrored in real-time on the management panel.",
    techStack: [
      "Flutter", "Dart", "Riverpod", "GetX", "Mapbox API",
      "REST APIs", "Live Foreign Exchange Rates", "Real-Time Sync"
    ],
    highlights: [
      "Goldbank Driver: Revamped London courier app with live GPS parcel collection/drop-off journeys using Mapbox API.",
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
    featuredRank: 4,
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
    featuredRank: 5,
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
    id: "cafeasy",
    title: "Cafeasy",
    tagline: "Location-Aware RAG Recommendation Engine with Vector Search & Maps",
    badge: "AI & Retrieval (RAG)",
    category: "Python & AI",
    featuredRank: 6,
    teamSize: "AI-Assisted Personal Project",
    role: "AI Engineer",
    summary: "A location-aware Retrieval-Augmented Generation (RAG) recommendation engine running hybrid vector search over cafe data, grounding LLM outputs to eliminate hallucinations.",
    architectureHighlight: "Grounded LLM responses strictly in retrieved vector records using ChromaDB dense embeddings; every recommended venue is verified against Google Maps coordinates on a real-time map.",
    techStack: [
      "Python", "ChromaDB", "Vector Embeddings", "LLMs",
      "Google Maps API", "AI-Assisted Development"
    ],
    highlights: [
      "Hallucination-Free Recommendations: Dense vector embeddings guarantee LLMs only recommend real, verified venues.",
      "Google Maps Integration: Every recommendation links directly to verified Google Maps locations and displays on an interactive map.",
      "AI-Augmented Build: Engineered end-to-end utilizing Claude Code and Cursor."
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
      "Flutter", "Riverpod", "fl_chart", "Python",
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
  description: "Advanced practitioner of modern AI-assisted engineering with Claude Code, Cursor, and Antigravity. Automated an end-to-end ticket lifecycle (pick up, implement, test, update, close) that resolved 50–60 tickets per day for several months on a deadline-critical client project, without compromising type safety, testability, or Clean Architecture.",
  principles: [
    {
      title: "50-60 Tickets / Day Automation",
      desc: "Proven execution automating ticket resolution pipelines with Claude Code during high-stakes client delivery deadlines."
    },
    {
      title: "Strict Clean Architecture",
      desc: "Separation of Presentation, Domain, and Data layers. AI generates code rapidly; human engineering enforces SOLID design, dependency injection (GetIt), and state isolation."
    },
    {
      title: "Real-Time Debugging & Tests",
      desc: "Writing unit, widget, and integration tests at lightspeed, catching asynchronous race conditions before code touches PR."
    },
    {
      title: "Python Data Scripting",
      desc: "Practical Python proficiency (NumPy, Pandas, Matplotlib) for data manipulation, embedding pipelines, and scripts powered by modern AI dev tools."
    }
  ]
};

export const skillsData = {
  mobile: {
    title: "Flutter & Mobile Core",
    icon: "Smartphone",
    skills: [
      "Flutter 3 & Dart (4.5+ Yrs)", "Riverpod", "BLoC & Cubit", "GetX", "Provider",
      "Clean Architecture", "MVVM & SOLID", "Dependency Injection (GetIt)",
      "Material Design 3", "Responsive / Adaptive UI", "Platform Channels",
      "Video Calling (Jitsi Meet SDK)", "flutter_animate & Lottie",
      "App Performance Optimization", "App Store & Play Store Releases"
    ]
  },
  aiAssisted: {
    title: "AI-Assisted Dev & Integrations",
    icon: "Cpu",
    skills: [
      "Claude Code (Automated Ticket Workflows)", "Cursor IDE", "Google Antigravity",
      "Google Gemini API", "ChromaDB (Vector Search)", "Typesense Semantic Search",
      "ML Integration (XGBoost, LightGBM, SHAP)", "Prompt Engineering & Prototyping"
    ]
  },
  backendData: {
    title: "Backend, Cloud & Databases",
    icon: "Server",
    skills: [
      "Python (NumPy, Pandas, Matplotlib, Data Scripting)",
      "Firebase (Firestore, Auth, Storage, Cloud Functions, FCM)",
      "Supabase", "Node.js & Express", "PostgreSQL", "Redis",
      "SQLite / SQFlite & Isar", "RESTful APIs (Dio, Retrofit)",
      "WebSockets", "Stripe Payment Gateway", "JWT Authentication"
    ]
  },
  securityHardware: {
    title: "Security, Maps & DevOps",
    icon: "Shield",
    skills: [
      "E2EE (PointyCastle RSA/AES)", "HIPAA Compliance", "Flutter Secure Storage", "Role-Based MFA",
      "Google Maps & Places API", "Mapbox & OLA Maps", "flutter_soloud (C++ Audio Engine)",
      "CI/CD (GitHub Actions, Codemagic, Fastlane)", "Firebase Crashlytics", "Git / GitHub"
    ]
  }
};

export const experience = [
  {
    period: "Sept 2023 - Present",
    role: "Software Engineer",
    company: "Bacancy Technology",
    location: "Ahmedabad, India",
    type: "Full-Time",
    description: "Leading mobile modules and developing high-profile Flutter apps across healthcare (HIPAA), social impact, and logistics. Automated ticket lifecycles with Claude Code resolving 50-60 tickets/day during critical deadlines, mentored juniors, and led technical sharing sessions.",
    keyPoints: [
      "Led the mobile module of a HIPAA-compliant telemedicine platform as sole Flutter developer (50+ screens, Jitsi Meet video, adapted Next.js APIs).",
      "Automated ticket lifecycle with Claude Code, resolving 50-60 tickets per day for months on a deadline-critical client project.",
      "Built core features of The Word (E2EE chat with RSA/AES, PointyCastle, Stripe, Gemini AI, Typesense).",
      "Revamped Goldbank Driver with Mapbox live tracking and shipped releases for Goldbank Live & Sell Gold on App Store and Play Store.",
      "Shipped releases via CI/CD pipelines (Codemagic, GitHub Actions, Fastlane) backed by unit, widget, and integration tests."
    ]
  },
  {
    period: "Sept 2022 - Aug 2023",
    role: "Associate Software Engineer",
    company: "Radixweb Pvt Ltd",
    location: "Ahmedabad, India",
    type: "Full-Time",
    description: "Built and shipped production Flutter applications across food ordering and logistics. Enforced Clean Architecture and reactive state patterns with GetX and Cubit.",
    keyPoints: [
      "Built DigInn, a healthy-food ordering app live on App Store and Play Store with 3-tier loyalty (Bronze, Silver, Gold).",
      "Developed meal customization with full nutrition details and integrated Thanx SDK for deep links.",
      "Integrated REST APIs with dio and Retrofit, Firebase Remote Config, Analytics, FCM, and Isar local storage.",
      "Created reusable custom widgets, light/dark theming, shared styles, and wrote unit tests."
    ]
  },
  {
    period: "Feb 2022 - Aug 2022",
    role: "Trainee Software Engineer",
    company: "Radixweb Pvt Ltd",
    location: "Ahmedabad, India",
    type: "Internship",
    description: "Underwent intensive software engineering training focused on Dart, Flutter architecture patterns, responsive UI design, and Clean Architecture.",
    keyPoints: [
      "Built a News App using Cubit, dio, and Clean Architecture with category/country filters and keyword suggestions.",
      "Mastered state management paradigms and REST API consumption."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Parul University, Vadodara",
    year: "2020 - 2022",
    grade: "CGPA: 8.3 / 10"
  },
  {
    degree: "B.Sc. Physics (Honours)",
    institution: "Krishnath College, West Bengal",
    year: "2016 - 2019",
    grade: "Completed with Honours"
  }
];
