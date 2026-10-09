export const personalInfo = {
  name: "Padmanava Karmakar",
  role: "Flutter Software Engineer",
  headline: "Building High-Performance Cross-Platform Apps with Clean Architecture & AI-Augmented Velocity",
  bio: "Software Engineer with 4.5+ years of production experience shipping high-impact, cross-platform apps for iOS & Android. Specialized in Clean Architecture, real-time encrypted communications, high-concurrency geolocation systems, and Python backend integration. Known for accelerating the SDLC by 10x through rigorous engineering and modern AI-augmented workflows.",
  location: "Ahmedabad, India",
  email: "karpadmanava16@gmail.com",
  phone: "+91-7908767307",
  linkedin: "https://www.linkedin.com/in/padmanava-karmakar-5069641b6",
  github: "https://github.com/padmanava1",
  resumeUrl: "./Padmanava_Karmakar_Resume.pdf",
  profileImg: "./profile.jpg",
  status: "Open to Opportunities",
};

export const stats = [
  { label: "Production Experience", value: "4.5+ Yrs", sub: "Bacancy & Radixweb" },
  { label: "Production Screens", value: "50+ Screens", sub: "HIPAA & Enterprise" },
  { label: "Concurrent Scale", value: "1,000+ Users", sub: "Real-time Sockets & Maps" },
  { label: "Delivery Velocity", value: "10x Faster", sub: "Disciplined AI-Augmented SDLC" },
];

export const featuredProjects = [
  {
    id: "the-word",
    title: "The Word",
    tagline: "Social Impact & Community Platform with Military-Grade E2EE Messaging",
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
      "Typesense Search", "Stripe", "FCM"
    ],
    highlights: [
      "Custom E2EE Messaging: Built military-grade RSA/AES encryption with secure key exchange and optional privacy toggles.",
      "Stripe Payment Gateway: Processed secure credit card donations, receipts, and corporate matching.",
      "Typesense Semantic Search: Ultra-fast discovery filtering across causes, geographical locations, and charity verification.",
      "Real-Time Chat & Media: Video/photo compression, caching, unread tracking, and push notifications via FCM."
    ]
  },
  {
    id: "telemedicine",
    title: "TeleMedicine Platform",
    tagline: "HIPAA-Compliant Multi-Portal Healthcare System (50+ Screens)",
    badge: "Healthcare & Fintech",
    category: "Mobile & APIs",
    featuredRank: 2,
    teamSize: "Sole Flutter Dev (1 of 4 Backend API Devs)",
    role: "Mobile & Backend API Developer",
    summary: "A production-grade, HIPAA-compliant telehealth platform with three distinct role-based portals: Patient, Doctor, and Admin, complete with end-to-end appointment scheduling, video consultation flow, and earnings management.",
    architectureHighlight: "Built the entire Flutter frontend from scratch across all 3 portals (50+ screens) and designed the full 60+ endpoint /api/mobile/* REST API layer.",
    techStack: [
      "Flutter", "Dart", "Riverpod", "Dio", "GoRouter",
      "flutter_secure_storage", "Stripe", "REST APIs",
      "Role-Based Access (MFA)", "Multi-flavor Builds"
    ],
    highlights: [
      "50+ Screens Across 3 Portals: Single codebase catering to Patient, Doctor, and Admin experiences.",
      "60+ Endpoint REST API: Designed and implemented secure endpoints consumed by the mobile apps.",
      "End-to-End Booking Lifecycle: Doctor schedule lookup, appointment reservation, and Stripe checkout verification.",
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
    architectureHighlight: "Refactored collection workflow with Riverpod and integrated Mapbox API for live London dispatch tracking mirrored in real-time on the management panel.",
    techStack: [
      "Flutter", "Dart", "Riverpod", "GetX", "Mapbox API",
      "REST APIs", "Live Foreign Exchange Rates", "Real-Time Sync"
    ],
    highlights: [
      "Goldbank Driver: Revamped London courier app with live GPS parcel collection/drop-off journeys using Mapbox API.",
      "Goldbank Live: Interactive live showroom featuring luxury jewelry catalogues and streaming FX & cryptocurrency price tickers.",
      "Sell Gold: Precision price-locking mechanism enabling customers to lock in real-time gold/silver prices with courier collection."
    ]
  },
  {
    id: "astraquant",
    title: "AstraQuant",
    tagline: "AI-Driven Trading Intelligence & Predictive Analytics Platform (NSE/BSE)",
    badge: "Python & ML Integration",
    category: "Python & ML",
    featuredRank: 4,
    teamSize: "Independent Project (AI-Augmented)",
    role: "Full-Stack Engineer",
    summary: "Market intelligence app delivering ML-driven stock predictions, real-time sentiment analysis, portfolio tracking, and market regime detection for retail investors in Indian equity markets.",
    architectureHighlight: "Flutter frontend communicating over WebSockets with a Python FastAPI backend; combines XGBoost, LightGBM, and custom expert models with SHAP-based explainability for prediction transparency.",
    techStack: [
      "Flutter", "Riverpod", "fl_chart", "Python", "FastAPI",
      "XGBoost", "LightGBM", "SHAP Explainability", "WebSockets", "Redis", "PostgreSQL"
    ],
    highlights: [
      "Real-Time WebSocket Streams: Ultra-low latency price and sentiment streaming with Redis caching.",
      "Explainable AI with SHAP: Allows investors to inspect exactly which fundamental and technical drivers influenced each forecast.",
      "Interactive Charting: Smooth financial charts powered by fl_chart with custom timeframes and overlays.",
      "Vibe Coded Architecture: Built organically and rapidly through disciplined AI-augmented prompting and iterative debugging."
    ]
  },
  {
    id: "rider-buddy",
    title: "Rider Buddy",
    tagline: "High-Accuracy Real-Time Group Cycling & Geolocation Engine",
    badge: "Geolocation & Scale",
    category: "Mobile",
    featuredRank: 5,
    teamSize: "Lead Developer",
    role: "Software Engineer",
    summary: "Real-time group cycling application featuring precision location sharing with up to 10m accuracy, QR-based group management, and dynamic mid-journey meeting point calculation.",
    architectureHighlight: "Optimized Firebase real-time listeners and coordinate caching to support up to 1,000 concurrent riders while safeguarding mobile battery life.",
    techStack: [
      "Flutter", "Dart", "Firebase Firestore", "Google Maps API",
      "Clustering Algorithms", "Compass Navigation", "Offline Sync"
    ],
    highlights: [
      "10m High-Precision GPS: Live member status tracking with custom compass navigation and polyline route mapping.",
      "Dynamic Meeting Points: Intelligent algorithm calculating meeting points for riders joining groups mid-ride.",
      "Battery-Optimized Concurrency: Scaled to 1,000 simultaneous riders with clustered map rendering and offline sync."
    ]
  },
  {
    id: "alankar",
    title: "Alankar",
    tagline: "Indian Classical Music Education with C++ Audio Engine & Pitch Detection",
    badge: "Audio & Algorithms",
    category: "Mobile & Audio",
    featuredRank: 6,
    teamSize: "Independent Project",
    role: "Software Engineer",
    summary: "Hindustani classical music training platform delivering sub-cent pitch detection accuracy, 40+ traditional raags, and zero-latency virtual harmonium with realistic bellow physics.",
    architectureHighlight: "Integrated flutter_soloud C++ audio engine for instantaneous acoustic response combined with FFT pitch detection and offline-first SQLite storage.",
    techStack: [
      "Flutter", "flutter_soloud (C++ Engine)", "FFT Pitch Detection",
      "Provider", "fl_chart", "Supabase", "SQLite", "Material 3"
    ],
    highlights: [
      "Zero-Latency C++ Audio Engine: Realistic virtual harmonium with bellow pressure physics.",
      "Sub-Cent FFT Pitch Detection: Live vocal feedback tracking sargam patterns and raag micro-tones.",
      "Offline-First Architecture: SQLite local persistence with cloud sync via Supabase."
    ]
  },
  {
    id: "diginn-santa",
    title: "DigInn & Santa.com",
    tagline: "Modern Nutrition Commerce & AI-Enhanced Retail Platforms",
    badge: "Commerce & Loyalty",
    category: "Mobile",
    featuredRank: 7,
    teamSize: "Cross-functional Team",
    role: "Software Developer",
    summary: "DigInn healthy restaurant ordering system with multi-tier loyalty rewards (Bronze, Silver, Gold), and Santa.com modern Indian retail platform with smart catalog filters.",
    architectureHighlight: "Implemented Clean Architecture with GetX and Riverpod, modular theme management, and integrated Thanx SDK deep linking.",
    techStack: [
      "Flutter", "GetX", "Riverpod", "Dio", "Retrofit", "Isar Database", "Thanx SDK"
    ],
    highlights: [
      "Multi-Tier Loyalty Engine: Custom reward accrual and redemption logic across 3 tiers.",
      "Nutritional Breakdown Customizer: Dynamic macro and calorie calculations updated in real-time as users customize meals."
    ]
  }
];

export const workflowHighlights = {
  title: "The Workflow Edge: AI-Augmented Engineering",
  subtitle: "Accelerating the SDLC by 10x without compromising Clean Architecture",
  description: "I leverage cutting-edge AI dev tools (Cursor, Claude Code, Antigravity) as force multipliers. This isn't just generating code—it's disciplined 'Vibe Coding', where product ideas and architecture patterns are iterated at lightspeed while strict engineering rigor governs state management, type safety, and production scalability.",
  principles: [
    {
      title: "10x Fast Prototyping",
      desc: "Transforming ambiguous product specs into working, reactive Flutter UIs in hours instead of days."
    },
    {
      title: "Disciplined Clean Architecture",
      desc: "Strict separation between UI, domain logic, and data layers. AI generates boilerplates, while human architecture guarantees maintainability."
    },
    {
      title: "Rapid Real-Time Debugging",
      desc: "Instant reproduction of edge cases, asynchronous concurrency bugs, and state desyncs using conversational AI tools."
    },
    {
      title: "Cross-Stack Fluidity",
      desc: "Effortlessly bridging Flutter frontend with Python/FastAPI backends, scrapers, and data services."
    }
  ]
};

export const skillsData = {
  mobile: {
    title: "Flutter & Mobile Core",
    icon: "Smartphone",
    skills: [
      "Flutter & Dart (4.5+ Yrs)", "Riverpod", "BLoC & Cubit", "GetX", "Provider",
      "Clean Architecture", "MVVM Pattern", "Material Design 3", "flutter_animate & Lottie",
      "Cross-Platform (iOS & Android)", "App Performance Optimization"
    ]
  },
  backend: {
    title: "Backend, APIs & Databases",
    icon: "Server",
    skills: [
      "Python (FastAPI)", "Firebase Firestore", "Firebase Auth & Functions",
      "Supabase", "SQLite & Isar", "PostgreSQL", "REST APIs (Dio/Retrofit)",
      "WebSockets", "Typesense Search", "Stripe Payment Gateway"
    ]
  },
  securityHardware: {
    title: "Security, Geolocation & Audio",
    icon: "Shield",
    skills: [
      "E2EE (PointyCastle RSA/AES)", "HIPAA Compliance Best Practices",
      "Mapbox API", "Google Maps & OLA Maps", "10m GPS Geolocation",
      "flutter_soloud (C++ Audio Engine)", "FFT Pitch Detection Algorithms"
    ]
  },
  tools: {
    title: "Tools, AI Workflow & DevOps",
    icon: "Cpu",
    skills: [
      "Cursor & Claude Code", "Google Antigravity", "Git & GitHub",
      "CI/CD Pipelines", "App Store Connect", "Google Play Console",
      "Postman", "Agile & Jira"
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
    description: "Developing scalable, production-grade Flutter applications for global enterprise clients. Leading architectural refactoring towards Clean Architecture, optimizing state management with Riverpod, and integrating robust backend services.",
    keyPoints: [
      "Spearheaded core feature development on high-profile cross-platform mobile apps.",
      "Optimized app startup time and frame rendering rates to achieve steady 60fps animations.",
      "Accelerated team sprint velocity by standardizing reusable Flutter widgets and AI-assisted workflows."
    ]
  },
  {
    period: "Sept 2022 - Aug 2023",
    role: "Associate Software Engineer",
    company: "Radixweb Pvt Ltd",
    location: "Ahmedabad, India",
    type: "Full-Time",
    description: "Engineered complex client applications across fintech, delivery logistics, and restaurant hospitality. Built custom reactive state pipelines and integrated location-based services.",
    keyPoints: [
      "Delivered production features for logistics and ecommerce apps using GetX and Riverpod.",
      "Integrated third-party REST APIs and local database caching layers using Isar and SQLite.",
      "Collaborated closely with QA, UI/UX designers, and backend teams in rapid sprint cycles."
    ]
  },
  {
    period: "Feb 2022 - Aug 2022",
    role: "Trainee Software Engineer",
    company: "Radixweb Pvt Ltd",
    location: "Ahmedabad, India",
    type: "Internship",
    description: "Underwent rigorous software engineering training focused on Dart, Flutter architecture patterns, responsive UI design, and Git version control.",
    keyPoints: [
      "Built multi-screen test applications adhering to Clean Architecture principles.",
      "Mastered state management paradigms and REST API consumption."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Parul University",
    year: "2020 - 2022",
    grade: "CGPA: 8.3 / 10"
  },
  {
    degree: "B.Sc Physics (Honours)",
    institution: "Krishnath College",
    year: "2016 - 2019",
    grade: "Completed with Honours"
  }
];
