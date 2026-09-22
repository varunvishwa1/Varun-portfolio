/**
 * VARUN VISHWA — PORTFOLIO DATA ARCHITECTURE
 * Clean Data Store with Real Links
 */

export const portfolioData = {
  personal: {
    fullName: "Varun Vishwa",
    displayName: "Varun",
    role: "AI PRODUCT ENGINEER",
    subRoles: ["PRODUCT BUILDER", "CREATIVE TECHNOLOGIST", "ENTREPRENEUR"],
    headline: "AI PRODUCT\nENGINEER",
    tagline: "Technology-focused builder who loves turning ideas into real products.",
    identity: "CURIOUS. CREATIVE. AMBITIOUS.",
    careerDirection: "AI PRODUCT ENGINEER → PRODUCT BUILDER → ENTREPRENEUR",
    supportingLabel: "AI • PRODUCT ENGINEERING • EMERGING TECHNOLOGY",
    heroParagraph: "Technology-focused builder who loves turning ideas into real products. Exploring AI, product engineering, and emerging technologies to transform ideas into useful experiences.",
    location: "INDIA",
    mindset: "BUILD • LEARN • EXPLORE",
    status: "OPEN FOR COLLABORATION & BUILD OPPORTUNITIES",
    brandStatement: "Varun Vishwa is a curious, creative and ambitious technology-focused builder who explores AI, product engineering and emerging technologies to turn ideas into real products.",
    philosophyQuote: "EXPLORE DIFFERENT FIELDS. TURN IDEAS INTO SOMETHING REAL. KEEP BUILDING."
  },

  hudProfile: {
    focus: "AI + PRODUCT ENGINEERING",
    build: "AI APPLICATIONS + SAAS",
    explore: "LLMS + AR/VR + EMERGING TECH",
    vision: "TECHNOLOGY PRODUCTS + ENTREPRENEURSHIP"
  },

  about: {
    sectionId: "01 // ABOUT",
    headline: "WHO IS VARUN?",
    paragraphs: [
      "Varun Vishwa is a Computer Science Engineering student and technology-focused builder interested in AI, product engineering, emerging technologies and turning ideas into real products.",
      "He enjoys exploring different technical fields rather than staying inside a single technology area, combining engineering, product thinking and creativity to experiment with ideas and build useful experiences."
    ],
    metadata: [
      { label: "BASED IN", value: "INDIA" },
      { label: "FOCUS", value: "AI + PRODUCT" },
      { label: "MINDSET", value: "BUILD • LEARN • EXPLORE" },
      { label: "STATUS", value: "BUILDING IN PUBLIC" }
    ]
  },

  philosophy: {
    sectionId: "02 // BUILD",
    headline: "IDEAS → SYSTEMS → PRODUCTS",
    subheadline: "A deliberate engineering approach to turning raw sparks into scalable reality.",
    stages: [
      {
        number: "01",
        title: "EXPLORE",
        subtitle: "FIRST PRINCIPLES & DISCOVERY",
        description: "Understanding problems, technologies and possibilities from first principles.",
        tags: ["Problem Framing", "Emerging Tech", "Spike"]
      },
      {
        number: "02",
        title: "BUILD",
        subtitle: "RAPID PROTOTYPING & ENGINEERING",
        description: "Turning concepts into working prototypes, robust software and scalable systems.",
        tags: ["Architecture", "Full-Stack AI", "UX"]
      },
      {
        number: "03",
        title: "EVOLVE",
        subtitle: "ITERATION & REAL-WORLD VALUE",
        description: "Improving products through experimentation, real feedback loops and learning.",
        tags: ["User Feedback", "Refinement", "Growth"]
      }
    ]
  },

  projects: [
    {
      id: "studymate",
      number: "BUILD-01",
      title: "STUDYMATE",
      category: "AI / EDUCATION",
      shortDesc: "AI-powered PDF-based Q&A system designed to help students interact with their study material.",
      featured: true,
      badge: "FEATURED CASE STUDY",
      problem: "Students face cognitive overload when reading dense 100+ page academic texts and struggle to extract specific contextual answers quickly.",
      solution: "Engineered a Retrieval-Augmented Generation (RAG) system that parses multi-page PDFs, chunks semantic blocks, creates dense vector embeddings, and performs localized contextual retrieval with LLM reasoning.",
      role: "Lead AI Engineer & Full-Stack Developer",
      technologies: [
        "Python",
        "Streamlit",
        "IBM Watson",
        "HuggingFace",
        "PyMuPDF",
        "Mistral",
        "FAISS",
        "Sentence Transformers"
      ],
      highlights: [
        "Semantic document chunking with PyMuPDF",
        "Fast local vector similarity indexing using FAISS",
        "Context-grounded answering powered by Mistral and HuggingFace",
        "Interactive Streamlit interface with instant source citation"
      ],
      architecture: "PDF Ingestion -> Text Extraction (PyMuPDF) -> Semantic Chunking -> Sentence Transformers Embedding -> FAISS Vector DB -> Hybrid Retrieval -> Mistral LLM Inference -> Response UI",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "vedcrop",
      number: "BUILD-02",
      title: "VEDCROP",
      category: "AI / AGRITECH",
      shortDesc: "AI-powered mobile application concept for crop disease detection, designed around offline and multilingual use cases.",
      featured: true,
      badge: "AGRITECH INNOVATION",
      problem: "Farmers in remote agricultural zones frequently lack reliable internet connectivity and multilingual technical support when dealing with rapid crop disease spread.",
      solution: "Designed an edge-optimized computer vision and multimodal diagnosis pipeline that can identify plant pathologies and provide actionable remedies in regional languages with offline-first support.",
      role: "Concept Architect & AI Product Designer",
      technologies: [
        "Python",
        "Computer Vision",
        "Mobile AI / TFLite",
        "Multilingual NLP",
        "Edge Computing",
        "FastAPI"
      ],
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
      id: "campus-freelance-hub",
      number: "BUILD-03",
      title: "CAMPUS FREELANCE HUB",
      category: "PRODUCT / SAAS",
      shortDesc: "A student-focused freelancing platform designed around verified student users.",
      featured: true,
      badge: "PRODUCT / MARKETPLACE",
      problem: "Student freelancers struggle to build trusted client relationships without prior industry track records, while campus clients need affordable, verified peer talent.",
      solution: "Architected a closed-loop campus talent marketplace featuring institutional domain verification, portfolio skill validation, milestone escrow logic, and project matchmaking.",
      role: "Product Builder & Full-Stack Developer",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Authentication",
        "Tailored UI/UX",
        "REST APIs"
      ],
      highlights: [
        "Verified campus identity authentication gateway",
        "Milestone-based project submission & review workflow",
        "Direct peer-to-peer collaboration boards",
        "Clean, distraction-free product interface"
      ],
      architecture: "Student Auth -> Profile & Portfolio Store -> Matching Engine -> Milestone Escrow -> Project Review Pipeline",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "mithrai-digimatrix",
      number: "BUILD-04",
      title: "MITHRAI / DIGIMATRIX",
      category: "AR / 3D / IMMERSIVE TECHNOLOGY",
      shortDesc: "3D and AR experience platform exploring immersive digital experiences.",
      featured: false,
      badge: "CREATIVE TECH",
      problem: "Traditional 2D digital interfaces lack spatial depth and tactile immersion for showcasing futuristic product designs and digital twins.",
      solution: "Developed interactive 3D web viewports and augmented reality anchors that let users inspect digital artifacts in real-time space with spatial lighting and responsive shaders.",
      role: "Creative Technologist & 3D Interactive Builder",
      technologies: [
        "Three.js",
        "WebXR / AR",
        "WebGL",
        "3D Asset Pipelines",
        "JavaScript",
        "Interactive Shaders"
      ],
      highlights: [
        "Real-time 60fps 3D asset rendering in the browser",
        "Spatial AR model placement using WebXR standards",
        "Dynamic lighting and custom metallic/glass shaders",
        "Responsive camera controls and gesture interaction"
      ],
      architecture: "3D Model Pipeline -> GLTF/GLB Compression -> WebGL Renderer -> WebXR Session -> Dynamic Shader Matrix",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "tunekit",
      number: "BUILD-05",
      title: "TUNEKIT",
      category: "LLM / AI ENGINEERING",
      shortDesc: "An experimental project exploring how large language models can be built and understood through Python.",
      featured: false,
      badge: "CORE LLM EXPERIMENT",
      problem: "Understanding modern LLM mechanics often gets obscured by heavy enterprise wrapper frameworks, making fundamental architectural insights difficult to master.",
      solution: "Created an experimental modular laboratory in pure Python implementing tokenization, attention layers, multi-head mechanisms, positional embeddings, and loss computation from first principles.",
      role: "AI Developer & Researcher",
      technologies: [
        "Python",
        "PyTorch / NumPy",
        "Self-Attention",
        "Tokenization",
        "Transformers",
        "CUDA Acceleration"
      ],
      highlights: [
        "Clean-room implementation of Scaled Dot-Product Attention",
        "Custom BPE / Byte-Pair Tokenizer training script",
        "Interactive weight inspector and attention matrix visualizer",
        "Documented step-by-step educational architecture notes"
      ],
      architecture: "Raw Text Corpus -> Custom Tokenizer -> Positional & Token Embeddings -> Multi-Head Self Attention Blocks -> Feedforward Layers -> Softmax Logits",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    },
    {
      id: "secure-fine-tuning",
      number: "BUILD-06",
      title: "SECURE LOCAL FINE-TUNING PIPELINE",
      category: "AI RESEARCH / LLM",
      shortDesc: "Research/project direction exploring secure local fine-tuning workflows.",
      featured: false,
      badge: "SECURITY & PRIVACY",
      problem: "Organizations and individuals handling sensitive proprietary data cannot safely send domain datasets to public cloud training endpoints without privacy leakage risks.",
      solution: "Explored an air-gapped, on-premise fine-tuning pipeline utilizing parameter-efficient fine-tuning (PEFT/LoRA) and quantized weights (QLoRA) to fine-tune open models securely on local hardware.",
      role: "Research & Systems Architect",
      technologies: [
        "Python",
        "LoRA / QLoRA",
        "HuggingFace Transformers",
        "PEFT",
        "BitsAndBytes",
        "Local Compute"
      ],
      highlights: [
        "Zero data transmission outside the local hardware boundary",
        "Quantized 4-bit/8-bit memory-efficient model adaptation",
        "Automated dataset sanitization and validation scripts",
        "Inference benchmarking comparing base vs fine-tuned checkpoints"
      ],
      architecture: "Sanitized Local Dataset -> 4-bit Quantized Base LLM -> LoRA Adapter Injection -> Gradient Checkpointed Training -> Merged Local Weights",
      github: "https://github.com/varunvishwa1",
      demo: "https://github.com/varunvishwa1"
    }
  ],

  skills: {
    sectionId: "04 // SKILLS",
    headline: "THE TOOLS I BUILD WITH",
    subheadline: "Categorized technical stack focused on AI systems, scalable software, and immersive interfaces.",
    categories: [
      {
        id: "ai-ml",
        name: "AI / MACHINE LEARNING",
        icon: "cpu",
        summary: "Modern AI stacks, embedding search, and generative pipelines.",
        items: [
          "Generative AI",
          "LLMs",
          "RAG Systems",
          "Embeddings",
          "Vector Search",
          "AI APIs",
          "Machine Learning",
          "HuggingFace",
          "Mistral",
          "FAISS",
          "Sentence Transformers"
        ]
      },
      {
        id: "software-eng",
        name: "SOFTWARE ENGINEERING",
        icon: "terminal",
        summary: "Core programming languages, reactive frameworks, and APIs.",
        items: [
          "Python",
          "Java",
          "JavaScript (ES6+)",
          "Dart",
          "React",
          "Flutter",
          "FastAPI",
          "Streamlit"
        ]
      },
      {
        id: "database",
        name: "DATABASE & STORAGE",
        icon: "database",
        summary: "Relational, document, and high-dimensional vector databases.",
        items: [
          "PostgreSQL",
          "MongoDB",
          "SQL",
          "Vector Databases"
        ]
      },
      {
        id: "cloud-devops",
        name: "CLOUD / DEVOPS",
        icon: "server",
        summary: "Infrastructure, edge deployment, containerization, and automation.",
        items: [
          "AWS",
          "Linux",
          "Nginx",
          "Cloudflare",
          "Git & GitHub",
          "CI/CD Deployment",
          "Automation"
        ]
      },
      {
        id: "creative-tech",
        name: "CREATIVE TECHNOLOGY",
        icon: "layers",
        summary: "Immersive spatial media, design systems, and visual storytelling.",
        items: [
          "AR / VR / MR",
          "3D / WebGL",
          "UI / UX Design",
          "Figma",
          "Canva",
          "Adobe Tools",
          "Video Editing"
        ]
      }
    ]
  },

  journey: {
    sectionId: "05 // JOURNEY",
    headline: "MORE THAN A DEVELOPER",
    subheadline: "Leadership, technical community stewardship, and peer mentoring.",
    timeline: [
      {
        period: "ACTIVE LEADERSHIP",
        role: "Developer Hub Lead",
        badge: "COMMUNITY & INNOVATION",
        description: "Leading technical community initiatives, organizing hackathon squads, fostering student builder culture, and coordinating hands-on coding sessions.",
        impact: [
          "Organized collaborative peer coding sessions and tech buildathons",
          "Mentored junior developers on Git workflows and full-stack basics",
          "Built a culture centered on shipping real projects"
        ]
      },
      {
        period: "DEPARTMENT COUNCIL",
        role: "Student Secretary — CSE Department",
        badge: "ACADEMIC GOVERNANCE",
        description: "Representing student interests, organizing department symposiums, and facilitating communication between faculty and student engineers.",
        impact: [
          "Coordinated department technical symposiums and workshop logistics",
          "Represented student feedback in academic planning discussions",
          "Spearheaded tech events connecting industry trends with classroom learning"
        ]
      },
      {
        period: "MENTORSHIP & SKILLS",
        role: "Technical Training & Mentorship",
        badge: "KNOWLEDGE TRANSFER",
        description: "Helping juniors learn and build practical software projects, demystifying programming paradigms and guiding initial product builds.",
        impact: [
          "Conducted hands-on sessions on Python programming and AI tools",
          "Assisted students with project debugging and architecture design",
          "Created starter templates to speed up student project creation"
        ]
      },
      {
        period: "MEDIA & DESIGN",
        role: "Content & Design Strategy",
        badge: "CREATIVE STORYTELLING",
        description: "Directing technical content, social media narratives, graphic design, and creative media to communicate complex engineering ideas simply.",
        impact: [
          "Crafted visual posters, presentation decks, and event graphics",
          "Experimented with video storytelling for technical demos",
          "Designed intuitive visual summaries for engineering topics"
        ]
      }
    ]
  },

  education: {
    sectionId: "06 // EDUCATION",
    headline: "THE FOUNDATION",
    degree: "B.E. COMPUTER SCIENCE AND ENGINEERING",
    institution: "DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING",
    university: "ANNA UNIVERSITY",
    regulation: "REGULATION 2021",
    status: "FINAL YEAR / 7TH SEMESTER",
    details: [
      { label: "DEGREE", value: "B.E. Computer Science & Engineering" },
      { label: "COLLEGE", value: "Dhanalakshmi Srinivasan College of Engineering" },
      { label: "AFFILIATION", value: "Anna University" },
      { label: "CURRICULUM", value: "Regulation 2021" },
      { label: "STATUS", value: "Final Year / 7th Semester" },
      { label: "GRADUATION YEAR", value: "[ADD GRADUATION YEAR]" },
      { label: "CGPA", value: "[ADD CGPA]" },
      { label: "RELEVANT COURSEWORK", value: "Data Structures & Algorithms, Operating Systems, Database Systems, Artificial Intelligence, Computer Networks, Software Engineering" }
    ]
  },

  achievements: {
    sectionId: "07 // ACHIEVEMENTS",
    headline: "CREDENTIAL ARCHIVE",
    subheadline: "Documented technical engagements, hackathon builds, and continuous learning tracks.",
    categories: [
      {
        category: "HACKATHONS & BUILDATHONS",
        items: [
          {
            title: "OpenAI Academy / NxtWave Buildathon",
            status: "PARTICIPANT / BUILDER",
            description: "Built and submitted generative AI experiments focusing on rapid prototyping and LLM workflows.",
            credentialId: "[ADD CREDENTIAL ID]"
          },
          {
            title: "IBM Hackathon Work",
            status: "TECHNICAL CHALLENGE",
            description: "Explored enterprise AI models, Watson services, and cloud data integration.",
            credentialId: "[ADD CREDENTIAL ID]"
          }
        ]
      },
      {
        category: "INDUSTRY TRACKS & CERTIFICATIONS",
        items: [
          {
            title: "ServiceNow Technical Track",
            status: "EXPLORING",
            description: "Studying workflow automation, enterprise service management, and low-code integrations.",
            credentialId: "[ADD CREDENTIAL ID]"
          },
          {
            title: "Deloitte Data Analytics",
            status: "VIRTUAL EXPERIENCE",
            description: "Completed analytics simulations focusing on business intelligence and data-driven insights.",
            credentialId: "[ADD CREDENTIAL ID]"
          },
          {
            title: "AWS & Cloud Learning Path",
            status: "CONTINUOUS LEARNING",
            description: "Hands-on exploration of cloud infrastructure, compute instances, S3, and serverless architectures.",
            credentialId: "[ADD CREDENTIAL ID]"
          }
        ]
      }
    ]
  },

  currentlyExploring: {
    sectionId: "08 // NOW",
    headline: "CURRENTLY EXPLORING",
    subheadline: "Active frontiers under experimentation and deliberate practice.",
    topics: [
      { name: "AI PRODUCT ENGINEERING", status: "BUILDING" },
      { name: "LLM ENGINEERING & FINE-TUNING", status: "ACTIVE" },
      { name: "GENERATIVE AI & AGENTIC FLOWS", status: "BUILDING" },
      { name: "DSA & OPTIMIZATION", status: "LEARNING" },
      { name: "SYSTEM DESIGN & ARCHITECTURE", status: "EXPLORING" },
      { name: "CLOUD INFRASTRUCTURE & DEVOPS", status: "ACTIVE" },
      { name: "FULL STACK WEB DEVELOPMENT", status: "BUILDING" },
      { name: "AR / VR / 3D SPATIAL COMPUTING", status: "EXPLORING" },
      { name: "PRODUCT DEVELOPMENT & METRICS", status: "ACTIVE" }
    ]
  },

  beyondCode: {
    sectionId: "09 // BEYOND",
    headline: "TECHNOLOGY IS WHAT I BUILD.\nCURIOSITY IS WHAT DRIVES ME.",
    subheadline: "The multidisciplinary dimensions shaping perspective, creativity, and drive.",
    cards: [
      {
        id: "content",
        number: "01",
        title: "CONTENT",
        tagline: "DIGITAL STORYTELLING",
        description: "Creating technical content and exploring digital storytelling to translate complex ideas into intuitive visual narratives."
      },
      {
        id: "design",
        number: "02",
        title: "DESIGN",
        tagline: "AESTHETICS & INTERACTION",
        description: "Exploring visual design, sleek dark aesthetics, micro-interactions, and creative technology that bring interfaces to life."
      },
      {
        id: "travel",
        number: "03",
        title: "TRAVEL",
        tagline: "PERSPECTIVE & PLACES",
        description: "Exploring new places, diverse people, and living cultures to broaden empathy and world view."
      },
      {
        id: "food",
        number: "04",
        title: "FOOD",
        tagline: "CULINARY EXPERIENCES",
        description: "Discovering regional cuisines, flavors, and the rich cultural traditions embedded in food."
      },
      {
        id: "nature",
        number: "05",
        title: "NATURE & WILDLIFE",
        tagline: "ORGANIC EQUILIBRIUM",
        description: "Finding inspiration in the intricate systems of nature, biodiversity, and the balance of the living world."
      },
      {
        id: "space",
        number: "06",
        title: "SPACE & COSMOS",
        tagline: "THE INFINITE HORIZON",
        description: "Endless fascination with astrophysics, orbital mechanics, planetary science, and humanity's future in the stars."
      }
    ]
  },

  contact: {
    sectionId: "11 // CONTACT",
    headline: "LET'S BUILD\nSOMETHING REAL.",
    subheadline: "Have an idea, product, experiment, or problem worth exploring?",
    links: [
      { name: "LINKEDIN", url: "https://www.linkedin.com/in/varunvishwa/", icon: "linkedin" },
      { name: "GITHUB", url: "https://github.com/varunvishwa1", icon: "github" },
      { name: "EMAIL", url: "mailto:contact@varunvishwa.dev", icon: "mail" }
    ]
  }
};
