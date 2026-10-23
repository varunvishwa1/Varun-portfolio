/**
 * VARUN VISHWA — EDITABLE PORTFOLIO DATA CONFIGURATION
 * Dark Editorial Personal Brand Data Store
 */

export const portfolioData = {
  personal: {
    fullName: "Varun Vishwa",
    displayName: "Varun",
    role: "AI Product Engineer",
    subRoles: [
      "Software Developer",
      "Creative Technologist",
      "Digital Creator"
    ],
    tagline: "I build AI-powered products, software experiences, and interactive digital solutions that connect technology with real-world problems.",
    heroGreeting: "Hello, I'm",
    headlineTitle: "AI PRODUCT ENGINEER &\nCREATIVE TECHNOLOGIST",
    location: "Coimbatore, India",
    educationBrief: "B.E. Computer Science & Engineering",
    college: "Dhanalakshmi Srinivasan College of Engineering, Coimbatore",
    university: "Anna University",
    company: "Digimatrix",
    companyRole: "Founder",
    statusBadge: "AVAILABLE FOR HIGH-IMPACT ROLES & COLLABORATION",
    email: "varunvishwa169@gmail.com",
    contactEmailAlt: "contact@varunvishwa.dev",
    linkedin: "https://www.linkedin.com/in/varunvishwa/",
    github: "https://github.com/varunvishwa1",
    companyWebsite: "https://digimartrix.com/",
    resumeUrl: "./assets/varun-resume.pdf"
  },

  heroTelemetry: [
    { label: "01 // FOCUS", value: "AI & Software Engineering" },
    { label: "02 // COMPANY", value: "Founder / Digimatrix" },
    { label: "03 // ARCHITECTURE", value: "Product Development & RAG" },
    { label: "04 // IMMERSIVE", value: "Creative Tech & WebXR" }
  ],

  about: {
    sectionTag: "01 // ABOUT",
    title: "BUILDING AT THE INTERSECTION OF AI, SOFTWARE & EXPERIENCE.",
    paragraphs: [
      "I engineer AI-driven software, robust full-stack applications, and interactive digital systems designed to solve concrete problems.",
      "My technical focus bridges modern machine learning pipelines (RAG, localized vector embeddings, LLM orchestration) with high-performance web engineering and spatial 3D interfaces.",
      "As the founder of Digimatrix and community lead at Developer Hub, I combine end-to-end product architecture with practical developer mentorship and collaborative execution."
    ],
    facts: [
      { label: "ENGINEERING FOCUS", value: "AI Systems • Full-Stack Architectures • WebXR" },
      { label: "CORE STACK", value: "Python • Fastify/Node • React • Three.js • Vector DBs" },
      { label: "VENTURE", value: "Founder @ Digimatrix (Digital Products & 3D Web)" },
      { label: "COMMUNITY LEAD", value: "Organizer @ Developer Hub & Tech Symposia" },
      { label: "ACADEMICS", value: "B.E. Computer Science & Engineering (Anna University)" },
      { label: "BUILD PHILOSOPHY", value: "First-Principles • Rapid Prototyping • Production Polish" }
    ]
  },

  projects: [
    {
      id: "vsafe",
      number: "01",
      title: "Vsafe",
      badge: "SECURITY / EXTENSION",
      category: "CHROME EXTENSION",
      status: "COMPLETED PRODUCT",
      isConcept: false,
      image: "./assets/project-vsafe.jpg",
      problem: "Users are routinely exposed to deceptive phishing links, suspicious URL redirects, and malicious web domains without instant, transparent safety feedback.",
      solution: "Engineered a lightweight Chrome browser extension that performs real-time URL inspection, domain reputation analysis, heuristic risk scoring, and instant visual threat warnings.",
      shortDesc: "A Chrome extension designed to help users identify potentially malicious URLs and phishing links in real-time.",
      technologies: ["JavaScript (ES6+)", "Chrome Extension APIs", "Cybersecurity Heuristics", "URL Analysis", "REST APIs", "Modern UI"],
      highlights: [
        "Real-time tab URL inspection and safety scoring",
        "Visual threat severity indicators (Phishing, Malware, Unverified SSL)",
        "Zero-latency lightweight extension manifest v3 architecture",
        "Clean, dark-mode browser telemetry drawer"
      ],
      architecture: "Browser Navigation Event -> URL Domain Parse -> Heuristic Threat Engine -> Score Calculation -> Visual Warning Overlay",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "studymate",
      number: "02",
      title: "StudyMate",
      badge: "AI / EDUCATION",
      category: "AI PRODUCT",
      status: "COMPLETED PRODUCT",
      isConcept: false,
      image: "./assets/project-studymate.jpg",
      problem: "Students experience cognitive overload when navigating lengthy 100+ page academic textbooks and technical papers to find precise answers with contextual sources.",
      solution: "Engineered a Retrieval-Augmented Generation (RAG) system that ingests multi-page PDFs, chunks semantic blocks, computes dense embeddings, and performs localized vector retrieval with LLM reasoning.",
      shortDesc: "An AI-powered PDF question-answering system for students to study, query, and understand academic documents efficiently.",
      technologies: ["Python", "Streamlit", "Mistral LLM", "HuggingFace", "PyMuPDF", "FAISS", "Sentence Transformers"],
      highlights: [
        "Semantic document chunking with PyMuPDF",
        "High-performance local vector similarity indexing using FAISS",
        "Context-grounded answering powered by Mistral and HuggingFace",
        "Interactive Streamlit interface with instant source citation"
      ],
      architecture: "PDF Ingestion -> PyMuPDF Text Chunker -> Sentence Transformers Embeddings -> FAISS Vector DB -> Similarity Search -> Mistral LLM Synthesis -> Source-Cited Answer",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "vedcrop",
      number: "03",
      title: "VedCrop",
      badge: "AGRITECH / EDGE AI",
      category: "MOBILE AI APPLICATION",
      status: "COMPLETED PRODUCT",
      isConcept: false,
      image: "./assets/project-vedcrop.jpg",
      problem: "Farmers in remote agricultural zones frequently lack reliable internet connectivity, expert agronomists, and multilingual technical tools when dealing with sudden crop disease outbreaks.",
      solution: "Designed an edge-optimized computer vision and multimodal diagnosis pipeline that identifies plant pathologies from photos and provides actionable remedies in regional languages with offline-first support.",
      shortDesc: "An AI-powered crop disease detection application, designed around offline usage and multilingual farmer accessibility.",
      technologies: ["Python", "Computer Vision", "TensorFlow Lite", "Multilingual NLP", "FastAPI", "Edge Computing"],
      highlights: [
        "Offline-first edge model inference architecture",
        "Multilingual UI and acoustic feedback for regional accessibility",
        "Pathogen severity mapping and localized treatment recommendations",
        "Low-latency response on constrained mobile hardware"
      ],
      architecture: "Camera Input -> Edge Preprocessing -> Lightweight CNN Classifier -> Disease Knowledge Base -> Multilingual Local Output",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "focusmate",
      number: "04",
      title: "FocusMate Study Copilot",
      badge: "PRODUCTIVITY CONCEPT",
      category: "BROWSER EXTENSION CONCEPT",
      status: "PRODUCT CONCEPT",
      isConcept: true,
      image: "./assets/project-focusmate.jpg",
      problem: "Modern students and developers encounter constant digital fragmentation, lacking structured focus blocks, task clarity, and intelligent scheduling tailored to academic workloads.",
      solution: "Architected a minimalist dark-mode productivity extension concept featuring adaptive pomodoro session timers, distraction site-blocking, task priority trees, and weekly focus metrics.",
      shortDesc: "A productivity extension concept for structured study planning, distraction management, and focus tracking.",
      technologies: ["JavaScript (ES6+)", "Browser Storage APIs", "UI/UX Design", "Productivity Analytics", "CSS Architecture"],
      highlights: [
        "Structured interval study blocks with custom audio cues",
        "Task prioritization dashboard with progress breakdown",
        "Distraction shield with configurable tab limiter",
        "Clean, dark editorial telemetry layout"
      ],
      architecture: "Session Engine -> Local Storage State -> Active Tab Monitor -> Distraction Interceptor -> Analytics Aggregator",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "mithrai-digimatrix",
      number: "05",
      title: "Mithrai / Digimatrix",
      badge: "3D / SPATIAL TECH",
      category: "IMMERSIVE WEB PLATFORM",
      status: "COMPLETED PRODUCT",
      isConcept: false,
      image: "./assets/project-mithrai.jpg",
      problem: "Traditional 2D digital interfaces lack spatial depth and tactile immersion for showcasing futuristic product designs, digital prototypes, and interactive exhibits.",
      solution: "Developed interactive 3D web viewports and augmented reality anchors that let users inspect digital artifacts in real-time space with spatial lighting and responsive shaders.",
      shortDesc: "A 3D and augmented-reality experience platform exploring interactive digital spatial computing.",
      technologies: ["Three.js", "WebXR", "WebGL", "GLTF Pipelines", "Interactive Shaders", "JavaScript"],
      highlights: [
        "Real-time 60fps 3D asset rendering directly in the browser",
        "Spatial AR model placement using WebXR standards",
        "Dynamic lighting and custom metallic/glass reflections",
        "Smooth gesture and camera orbit interaction"
      ],
      architecture: "3D Asset Compression -> WebGL Scene Engine -> WebXR Session Manager -> Shader Pipeline -> Interactive Canvas",
      github: "https://github.com/varunvishwa1",
      demo: "https://digimartrix.com/"
    },
    {
      id: "campus-freelance-hub",
      number: "06",
      title: "Campus Freelance Hub",
      badge: "MARKETPLACE CONCEPT",
      category: "STUDENT PLATFORM CONCEPT",
      status: "PRODUCT CONCEPT",
      isConcept: true,
      image: "./assets/project-freelance.jpg",
      problem: "Student freelancers struggle to build credible track records and find fair opportunities, while peers and campus clubs need verified, affordable talent.",
      solution: "Architected a closed-loop campus talent marketplace featuring institutional domain verification, portfolio skill validation, milestone escrow logic, and direct project matchmaking.",
      shortDesc: "A student-focused freelancing platform concept designed around verified student users and peer project collaboration.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT Authentication", "REST APIs", "Modern UI"],
      highlights: [
        "Verified campus student authentication gateway",
        "Milestone-based project submission and review workflow",
        "Direct peer-to-peer collaboration and skill tags",
        "Clean, distraction-free product interface"
      ],
      architecture: "Student Auth -> Profile Store -> Matching Engine -> Milestone Escrow -> Project Review Pipeline",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    }
  ],

  digimatrix: {
    sectionTag: "03 // COMPANY",
    title: "BUILDING WITH DIGIMATRIX",
    badge: "MY COMPANY // FOUNDER",
    tagline: "Exploring AI, digital products, and immersive technology through practical software experiences.",
    description: "Digimatrix is the studio and technical platform through which I design, build, and explore next-generation software products. Bridging applied artificial intelligence, scalable web architectures, and immersive interactive technology, Digimatrix represents my commitment to shipping tangible digital products that solve real problems.",
    website: "https://digimartrix.com/",
    pillars: [
      {
        number: "01",
        title: "AI PRODUCTS & AUTOMATION",
        desc: "Engineering custom LLM workflows, retrieval-augmented generation pipelines, and pragmatic automation engines."
      },
      {
        number: "02",
        title: "ROBUST WEB ARCHITECTURE",
        desc: "Designing fast, responsive, and secure full-stack web applications with modern frontend engineering and scalable backends."
      },
      {
        number: "03",
        title: "SPATIAL & CREATIVE TECH",
        desc: "Building interactive 3D interfaces, WebGL environments, and augmented reality prototypes that push visual boundaries."
      }
    ]
  },

  workProcess: {
    sectionTag: "04 // PROCESS",
    title: "STRUCTURED WORK PROCESS",
    subtitle: "From first-principles discovery to production-ready deployment.",
    stages: [
      {
        number: "01",
        name: "DISCOVER",
        subtitle: "PROBLEM & REQUIREMENTS",
        description: "Understand the core problem, user needs, domain constraints, and technical feasibility before writing code."
      },
      {
        number: "02",
        name: "DESIGN",
        subtitle: "ARCHITECTURE & EXPERIENCE",
        description: "Define the data flow, component boundaries, UX workflows, and responsive visual hierarchy."
      },
      {
        number: "03",
        name: "BUILD",
        subtitle: "ENGINEERING & INTEGRATION",
        description: "Implement clean, modular software and seamlessly connect AI models, APIs, and interactive frontends."
      },
      {
        number: "04",
        name: "TEST",
        subtitle: "VALIDATION & BENCHMARKING",
        description: "Validate functionality, error boundaries, performance benchmarks, responsiveness, and security constraints."
      },
      {
        number: "05",
        name: "SHIP",
        subtitle: "DEPLOYMENT & ITERATION",
        description: "Document architecture, deploy through robust pipelines, gather feedback, and continuously refine."
      }
    ]
  },

  experience: {
    sectionTag: "05 // EXPERIENCE & BUILDING",
    title: "EXPERIENCE & BUILDING",
    subtitle: "Product creation, technical leadership, and community stewardship.",
    timeline: [
      {
        period: "COMMUNITY & MENTORSHIP",
        role: "Community Lead & Technical Organizer",
        organization: "Developer Hub",
        type: "Builder Community",
        description: "Founded and scaled an active peer developer collective. Curated hands-on coding bootcamps, organized collegiate buildathons, and mentored aspiring engineers in Git collaboration, modern web frameworks, and API integrations.",
        skills: ["Developer Community", "Technical Mentorship", "Open Source Workflows", "Buildathons"]
      },
      {
        period: "LEADERSHIP & GOVERNANCE",
        role: "Student Secretary & Technical Lead",
        organization: "Department of Computer Science & Engineering",
        type: "Institutional Governance",
        description: "Appointed to head the departmental student council. Spearheaded state-level technical symposiums, managed multi-track hackathons, and facilitated industry speaker sessions spanning artificial intelligence and cloud computing.",
        skills: ["Executive Leadership", "Symposium Management", "Technical Logistics", "Industry Liaison"]
      },
      {
        period: "COMPETITIVE ENGINEERING",
        role: "Autonomous Systems & AI Prototyper",
        organization: "National & Regional Hackathons",
        type: "Sprint Engineering",
        description: "Competed in rapid 24-48 hour engineering hackathons. Prototyped high-impact solutions addressing agricultural disease triage, assistive educational agents, and cyber threat detection under tight time constraints.",
        skills: ["Rapid Prototyping", "RAG Pipelines", "Edge Computer Vision", "System Integration"]
      },
      {
        period: "CREATIVE DIRECTION",
        role: "UI/UX & Creative Technologist",
        organization: "Independent & Department Media",
        type: "Design Engineering",
        description: "Created high-fidelity interaction prototypes, editorial design systems, brand guidelines, and visual telemetry dashboards that elevate raw engineering into intuitive, memorable user products.",
        skills: ["Figma Systems", "Interaction Design", "Visual Architecture", "Design Tokens"]
      }
    ]
  },

  skills: {
    sectionTag: "06 // SKILLS & TECH",
    title: "SKILLS & TECHNOLOGIES",
    subtitle: "A disciplined technical stack centered on AI systems, full-stack software, and creative technology.",
    categories: [
      {
        id: "ai-ml",
        name: "AI & MACHINE LEARNING",
        icon: "cpu",
        description: "Core AI engineering, modern LLM orchestration, and dense retrieval systems.",
        items: [
          "Python",
          "Machine Learning",
          "LLM Applications",
          "Retrieval-Augmented Generation (RAG)",
          "Hugging Face",
          "FAISS",
          "Sentence Transformers",
          "Mistral AI"
        ]
      },
      {
        id: "software-dev",
        name: "SOFTWARE DEVELOPMENT",
        icon: "code",
        description: "Scalable frontend architectures, backend APIs, and cross-platform clients.",
        items: [
          "JavaScript (ES6+)",
          "React",
          "Python",
          "FastAPI",
          "Flutter",
          "Dart",
          "REST APIs",
          "HTML5 / Modern CSS"
        ]
      },
      {
        id: "databases-cloud",
        name: "DATABASES & CLOUD",
        icon: "database",
        description: "Structured storage, edge networking, and server deployment.",
        items: [
          "PostgreSQL",
          "MongoDB",
          "AWS Lightsail",
          "Nginx",
          "Cloudflare Tunnel",
          "WireGuard",
          "Linux"
        ]
      },
      {
        id: "tools-creative",
        name: "TOOLS & CREATIVE TECH",
        icon: "layers",
        description: "Product design systems, automation pipelines, and immersive media.",
        items: [
          "Git & GitHub",
          "Figma",
          "Adobe Photoshop",
          "Canva",
          "n8n Automation",
          "Unity & AR/VR",
          "Three.js / WebGL"
        ]
      }
    ]
  },

  contact: {
    sectionTag: "07 // CONTACT",
    title: "LET'S BUILD\nSOMETHING MEANINGFUL.",
    subtitle: "Have a product vision, technical challenge, or innovative collaboration in mind? Let's connect.",
    email: "varunvishwa169@gmail.com",
    links: [
      { name: "EMAIL DIRECT", val: "varunvishwa169@gmail.com", href: "mailto:varunvishwa169@gmail.com", label: "START CONVERSATION" },
      { name: "LINKEDIN", val: "linkedin.com/in/varunvishwa", href: "https://www.linkedin.com/in/varunvishwa/", label: "PROFESSIONAL PROFILE" },
      { name: "GITHUB", val: "github.com/varunvishwa1", href: "https://github.com/varunvishwa1", label: "CODE REPOSITORIES" },
      { name: "DIGIMATRIX", val: "digimartrix.com", href: "https://digimartrix.com/", label: "COMPANY WEBSITE" },
      { name: "CURRICULUM VITAE", val: "Download Varun's Resume (PDF)", href: "./assets/varun-resume.pdf", label: "DOWNLOAD RESUME", download: true }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}

