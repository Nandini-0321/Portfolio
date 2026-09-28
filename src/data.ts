import { PersonalInfo, HeroData, AboutData, Project, Experience, Education, Certification, Achievement } from './types';

export const personalInfo: PersonalInfo = {
  name: "Nandini R",
  title: "Aspiring Software Engineer | AI/ML & Full Stack Developer",
  headline: "Building Intelligent Software for Real-World Problems.",
  location: "Bangalore, Karnataka, India",
  email: "nandini.33218@gmail.com",
  phone: "+91 7204385773",
  whatsapp: "+91 7204385773",
  linkedin: "http://www.linkedin.com/in/nandini3",
  github: "https://github.com/Nandini-0321",
  resumeUrl: "/Nandini R.pdf",
  defaultContactMessage: "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!",
  defaultContactSubject: "Portfolio Inquiry — Let's Connect",
};

export const quickContactTemplates = [
  {
    label: "💼 Job Opportunity",
    subject: "Full-Time Role Inquiry — Software Engineer / AI/ML",
    message: "Hi Nandini, I visited your portfolio and was impressed by your AI/ML projects and credentials. We have an exciting engineering opportunity at our company and would love to connect!",
  },
  {
    label: "🎓 Internship",
    subject: "Internship Opportunity — AI/ML / Full Stack",
    message: "Hi Nandini, I came across your portfolio and would like to discuss an internship role with our engineering team.",
  },
  {
    label: "🚀 Project Collaboration",
    subject: "Project Collaboration Proposal",
    message: "Hi Nandini, I visited your portfolio and would love to collaborate with you on a software / AI project.",
  },
  {
    label: "👋 General Connect",
    subject: "Connecting from Portfolio — Let's Talk",
    message: "Hi Nandini, I visited your portfolio and would like to connect with you regarding an opportunity / project collaboration!",
  },
];

export const heroData: HeroData = {
  statusBadge: "AVAILABLE FOR FULL-TIME & INTERNSHIP ROLES",
  tagline: "Building Intelligent Software for Real-World Problems.",
  subheadline: "Aspiring Software Engineer specializing in AI/ML engineering, scalable full-stack architecture, computer vision, and applied data science.",
  stats: [
    { label: "Projects", value: "11+", subtext: "AI, ML & Full-Stack" },
    { label: "Internships", value: "3", subtext: "Industry Roles" },
    { label: "CGPA", value: "9.34", subtext: "B.E. Computer Science" },
    { label: "Certifications", value: "9+", subtext: "Verified Technical" }
  ]
};

export const aboutData: AboutData = {
  summary: "Computer Science & Engineering student at Beary's Institute of Technology (BIT), Mangalore (Affiliated to VTU) with a CGPA of 9.34 / 10 and 3 industry internships spanning Machine Learning, Artificial Intelligence, and Data Science. Passionate about bridging cutting-edge AI/ML research with robust, production-ready full-stack architectures to solve meaningful real-world challenges.",
  careerObjective: "To engineer intelligent software systems that bridge cutting-edge AI/ML research with production-ready full-stack architecture, optimizing for clarity, performance, and scalability to solve complex real-world problems.",
  strengths: [
    "End-to-End AI/ML Engineering & Deep Learning Pipelines",
    "Computer Vision & Facial Landmark Recognition Systems",
    "Full-Stack Web Architecture (React, Next.js, Node.js, Express, Flask)",
    "Data Science, Feature Engineering & Statistical Modeling",
    "Relational & NoSQL Database Design (MySQL, MongoDB, PostgreSQL)",
    "Clean Architecture, Agile Collaboration & Defensive Coding"
  ],
  highlights: [
    "B.E. in CS & Engineering — CGPA: 9.34 / 10 (Beary's Institute of Technology, Mangalore)",
    "3 Industry Internships completed & active in Machine Learning & AI",
    "11+ End-to-End Projects built across AI/ML, Full-Stack & Data Science",
    "National Level Technical Symposium presenter & hackathon participant"
  ],
  languages: ["English", "Kannada", "Telugu", "Hindi"]
};

export const skillsCategories = [
  {
    name: "AI / Machine Learning",
    description: "Deep learning, supervised learning, neural network pipelines",
    skills: ["Python", "TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV", "NLP", "Deep Learning", "CNN"]
  },
  {
    name: "Computer Vision",
    description: "Real-time object detection, face recognition, facial landmark tracking",
    skills: ["OpenCV", "YOLO", "Computer Vision", "Haar Cascades", "dlib", "EAR Fatigue Tracking"]
  },
  {
    name: "Programming Languages",
    description: "Core algorithmic & systems languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript"]
  },
  {
    name: "Web Development",
    description: "End-to-end full stack architecture & microservices",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "MERN Stack", "REST APIs"]
  },
  {
    name: "Frontend",
    description: "Tactile, responsive user interfaces & design systems",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "JavaScript"]
  },
  {
    name: "Backend",
    description: "Scalable servers, routing, authentication, API design",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Auth"]
  },
  {
    name: "Databases",
    description: "Relational schema design & NoSQL stores",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL"]
  },
  {
    name: "Data Science",
    description: "Statistical analysis, preprocessing, feature extraction",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Feature Engineering"]
  },
  {
    name: "Cloud / Deployment",
    description: "Cloud platforms, API integration, and deployment workflows",
    skills: ["AWS", "Git", "GitHub", "Postman"]
  },
  {
    name: "Developer Tools",
    description: "Version control, testing, API documentation, design",
    skills: ["VS Code", "Git", "GitHub", "Postman", "Figma"]
  },
  {
    name: "Other Technologies",
    description: "Cross-functional tooling & design collaboration",
    skills: ["REST APIs", "MERN Stack", "Recharts", "Agile / Scrum"]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Machine Learning Intern",
    company: "Inventeron Technologies",
    location: "Bengaluru, Karnataka",
    duration: "Jan 2026 – Present",
    isCurrent: true,
    points: [
      "Developed production-ready ML models for real-world applications using Python and supervised learning algorithms.",
      "Performed rigorous data preprocessing, feature engineering, and model evaluation across multiple benchmark datasets.",
      "Collaborated closely with senior engineers on deployment strategies and optimized project workflows."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow"]
  },
  {
    role: "Artificial Intelligence Intern",
    company: "iStudio",
    location: "Remote",
    duration: "Oct 2025 – Mar 2026",
    isCurrent: false,
    points: [
      "Selected via iCAT competitive assessment for a structured AI internship program.",
      "Built end-to-end AI/ML models through intensive project-based learning and real-time assignments.",
      "Mastered data preprocessing pipelines, model implementation, and evaluation frameworks."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"]
  },
  {
    role: "Machine Learning Intern",
    company: "Teachnook (Teachscape Pvt. Ltd.)",
    location: "Remote",
    duration: "Dec 2023 – Jan 2024",
    isCurrent: false,
    points: [
      "Implemented regression and classification models from scratch in Python for domain-specific problem sets.",
      "Used the NumPy / Pandas / Matplotlib / Scikit-learn stack for exploratory data analysis and reporting.",
      "Delivered graded mini-projects with comprehensive model evaluation and hyperparameter tuning."
    ],
    technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib"]
  }
];

export const educationData: Education[] = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Beary's Institute of Technology, Mangalore (VTU)",
    duration: "2022 – 2026",
    score: "CGPA: 9.34 / 10",
    details: [
      "Department of Computer Science and Engineering with consistent high academic standing.",
      "Core coursework: Data Structures & Algorithms, Operating Systems, DBMS, Machine Learning, Computer Networks, AI Systems.",
      "Presented AI-based projects at National Level Technical Symposiums and participated in coding competitions."
    ]
  },
  {
    degree: "Pre-University College (PCMB)",
    institution: "Aacharya Institute of Management & Science, Bengaluru",
    duration: "2021 – 2022",
    score: "80.67%",
    markcardImage: "/certificates/12th_Markscard.jpeg",
    details: [
      "Physics, Chemistry, Mathematics, Biology (PCMB) stream under Karnataka State Board.",
      "Strong analytical foundation in mathematics, physical sciences, and logical problem solving."
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Shushruthi Vidhya Samsthe, Bengaluru",
    duration: "2019 – 2020",
    score: "91.36%",
    markcardImage: "/certificates/SSLC_Markscard.jpeg",
    details: [
      "Graduated with First Class Distinction (91.36%) under Karnataka State Board.",
      "Academic excellence across mathematics, physical sciences, and computer fundamentals."
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "National Level Technical Symposium",
    organization: "Beary's Institute of Technology",
    description: "Presented AI-based project and actively competed in technical symposium coding and hackathon challenge rounds.",
    category: "Technical Symposium",
    iconName: "Trophy"
  },
  {
    title: "Tata Crucible Campus Quiz 2025",
    organization: "Tata Group",
    description: "Participated in prestigious national corporate business & technical campus quiz challenge against engineering students across India.",
    category: "National Competition",
    iconName: "Medal"
  },
  {
    title: "AI & Emerging Technologies Workshop",
    organization: "iCAT",
    description: "Completed intensive technical program in AI model building, production data pipelines, and deployment practices.",
    category: "Technical Workshop",
    iconName: "Users"
  }
];

export const certificationsData: Certification[] = [
  // ── CERTIFICATIONS ──────────────────────────────────────────────────────────
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    category: "AI & Machine Learning",
    date: "2026",
    description: "Oracle Certified Foundations Associate credential in Agentic AI, demonstrating knowledge of AI agent architectures, agentic workflows, and Oracle AI ecosystem fundamentals.",
    pdf: "/certificates/eCertificate(ORACLE).pdf",
    file: "/certificates/eCertificate(ORACLE).pdf",
    thumbnail: "/certificates/thumbnails/eCertificateORACLE.webp",
    previewImage: "/certificates/thumbnails/eCertificateORACLE.webp",
    badgeImage: "/certificates/ORACLE_Badge.jpg",
    credentialId: undefined,
    verifyUrl: undefined,
  },

  // ── COURSE CERTIFICATES ──────────────────────────────────────────────────────
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    category: "Generative AI",
    date: "Jun 2026",
    description: "Completed the Introduction to Prompt Engineering for Generative AI course through LinkedIn Learning, covering prompt design principles, chain-of-thought reasoning, and practical LLM application techniques.",
    pdf: "/certificates/LinkedIn_Introduction to Prompt Engineering for Generative AI.pdf",
    file: "/certificates/LinkedIn_Introduction to Prompt Engineering for Generative AI.pdf",
    thumbnail: "/certificates/thumbnails/LinkedIn_Introduction_to_Prompt_Engineering_for_Generative_AI.webp",
    previewImage: "/certificates/thumbnails/LinkedIn_Introduction_to_Prompt_Engineering_for_Generative_AI.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },
  {
    title: "CyberSmart: Your Gateway to Cybersecurity Fundamentals",
    issuer: "CySecK — Govt. of Karnataka",
    category: "Cybersecurity",
    date: "2024",
    description: "Completed the CyberSmart cybersecurity fundamentals program by the Karnataka government's Centre of Excellence for Cyber Security (CySecK), covering core cyber threat awareness and security practices.",
    pdf: "/certificates/CyberSmart_-_Your_Gateway_to_Cybersecurity_Fundamentals_.pdf",
    file: "/certificates/CyberSmart_-_Your_Gateway_to_Cybersecurity_Fundamentals_.pdf",
    thumbnail: "/certificates/thumbnails/CyberSmart__Your_Gateway_to_Cybersecurity_Fundamentals_.webp",
    previewImage: "/certificates/thumbnails/CyberSmart__Your_Gateway_to_Cybersecurity_Fundamentals_.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn",
    category: "Cybersecurity",
    date: "Sep 2025",
    description: "Completed the Introduction to Cyber Security course by Simplilearn, covering network security, threat analysis, encryption fundamentals, and security best practices.",
    pdf: "/certificates/Simplilearn_Introduction to Cyber Security.pdf",
    file: "/certificates/Simplilearn_Introduction to Cyber Security.pdf",
    thumbnail: "/certificates/thumbnails/Simplilearn_Introduction_to_Cyber_Security.webp",
    previewImage: "/certificates/thumbnails/Simplilearn_Introduction_to_Cyber_Security.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },
  {
    title: "Course Completion Certificate",
    issuer: "Teachnook (IIT Indore Program)",
    category: "Professional Development",
    date: "2024",
    description: "Completed a technical course under the Teachnook program (associated with IIT Indore new course curriculum), earning a course completion certificate.",
    pdf: "/certificates/Teachnook COURSE Completion Certificate _ Nandini.R (1).pdf",
    file: "/certificates/Teachnook COURSE Completion Certificate _ Nandini.R (1).pdf",
    thumbnail: "/certificates/thumbnails/Teachnook_COURSE_Completion_Certificate__Nandini.R_1.webp",
    previewImage: "/certificates/thumbnails/Teachnook_COURSE_Completion_Certificate__Nandini.R_1.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },
  {
    title: "Web Development Certificate",
    issuer: "Udemy",
    category: "Web Development",
    date: "2024",
    description: "Completed a web development course on Udemy covering modern web technologies including CSS and JavaScript for building interactive, responsive web applications.",
    pdf: "/certificates/Udemy.pdf",
    file: "/certificates/Udemy.pdf",
    thumbnail: "/certificates/thumbnails/Udemy.webp",
    previewImage: "/certificates/thumbnails/Udemy.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },

  // ── INTERNSHIP CERTIFICATES ──────────────────────────────────────────────────
  {
    title: "Internship Completion Certificate",
    issuer: "Inventeron Technologies",
    category: "Internship",
    date: "2025",
    description: "Certificate of completion for an internship at Inventeron Technologies in the field of AI/ML engineering.",
    pdf: "/certificates/Inventeron_CERTIFICATE OF INTERNSHIP .pdf",
    file: "/certificates/Inventeron_CERTIFICATE OF INTERNSHIP .pdf",
    thumbnail: "/certificates/thumbnails/Inventeron_CERTIFICATE_OF_INTERNSHIP.webp",
    previewImage: "/certificates/thumbnails/Inventeron_CERTIFICATE_OF_INTERNSHIP.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },

  // ── COMPETITIONS / PARTICIPATION ─────────────────────────────────────────────
  {
    title: "Tata Crucible Campus Quiz — Prelims Level 1",
    issuer: "Tata Group",
    category: "Competitions",
    date: "Feb 2026",
    description: "Participated and cleared the Prelims Level 1 of the Tata Crucible Campus Quiz 2026, one of India's premier business and general knowledge quiz competitions for campus students.",
    pdf: "/certificates/Tata_Cruible_Prelims_Level1.pdf",
    file: "/certificates/Tata_Cruible_Prelims_Level1.pdf",
    thumbnail: "/certificates/thumbnails/Tata_Cruible_Prelims_Level1.webp",
    previewImage: "/certificates/thumbnails/Tata_Cruible_Prelims_Level1.webp",
    credentialId: undefined,
    verifyUrl: undefined,
  },
  {
    title: "Certificate of Participation — Swach Sagar Abhiyan",
    issuer: "Bearys Institute of Technology (NSS)",
    category: "Community Service",
    date: "Aug 27, 2023",
    description: "Participated in the Swach Sagar Abhiyan Programme (beach cleaning drive) conducted under the NSS Swachh Sagar Surakshith Sagar initiative at Bearys Institute of Technology, Mangalore.",
    pdf: undefined,
    file: undefined,
    thumbnail: "/certificates/BEACH CLEANING.jpg",
    previewImage: "/certificates/BEACH CLEANING.jpg",
    credentialId: undefined,
    verifyUrl: undefined,
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Brain Tumor Classification",
    category: "AI / ML",
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "OpenCV"],
    description: "Deep learning model to classify medical images and detect brain tumors with high accuracy. End-to-end pipeline: image preprocessing, feature extraction, model evaluation.",
    githubLink: "https://github.com/Nandini-0321/Brain-tumor-classification",
    projectUrl: "#",
    image: "/projects/brain_tumor.png",
    featured: true,
    problem: "Early clinical detection of brain tumors requires high-accuracy triage from complex MRI scans without excessive latency or risk of false positives.",
    solution: "Developed a CNN-based deep learning solution with data augmentation, transfer learning backbone (VGG16/ResNet), CLAHE contrast enhancement, and cross-validation reaching 94%+ accuracy.",
    features: [
      "Multi-class MRI pathology classification (Glioma, Meningioma, Pituitary, No Tumor)",
      "Data augmentation and CLAHE image preprocessing pipeline",
      "Cross-validated evaluation with high clinical precision and recall"
    ],
    architecture: "MRI Scans → CLAHE Preprocessing & Augmentation → CNN / Transfer Backbone → Dense Softmax Classifier → Diagnostic Report",
    role: "Deep Learning Engineer"
  },
  {
    id: 2,
    title: "HeyGen AI Avatar Generator",
    category: "AI / ML",
    tech: ["Next.js", "Python", "API", "Generative AI", "Media Processing"],
    description: "AI-driven system for generating and processing digital avatars using HeyGen API and media transformation pipelines for automated video synthesis.",
    githubLink: "https://github.com/Nandini-0321/HeyGen-AI-Avatar-Generator",
    projectUrl: "#",
    image: "/projects/ai_avatar.png",
    featured: true,
    problem: "Producing studio-grade personalized video content and multilingual avatars requires expensive camera setups and manual video editing.",
    solution: "Architected a full-stack generative AI system with Next.js and Python that orchestrates HeyGen APIs, automated script narration, and media queue processing.",
    features: [
      "Dynamic text-to-speech video avatar generation with lip-sync synchronization",
      "Multilingual narration and background asset customization",
      "Scalable backend media queue with asynchronous webhook notifications"
    ],
    architecture: "User Script & Persona → Next.js Frontend → Python API Orchestrator → HeyGen Generative API → Webhook Processing → Rendered MP4 Asset",
    role: "Full Stack AI Developer"
  },
  {
    id: 3,
    title: "OmniDetect AI: Real-Time Object Detection",
    category: "AI / ML",
    tech: ["Python", "OpenCV", "YOLO", "Deep Learning", "Computer Vision"],
    description: "A high-performance real-time object detection system using computer vision and YOLO deep learning architecture for multi-class detection in live video streams.",
    githubLink: "https://github.com/Nandini-0321/OmniDetect-AI",
    projectUrl: "#",
    image: "/assets/projects/omnidetect.png",
    featured: true,
    problem: "Real-time edge video monitoring demands low inference latency and high multi-class detection precision across variable lighting conditions.",
    solution: "Built an optimized computer vision pipeline powered by YOLO architecture with custom class training, Non-Maximum Suppression (NMS), and live webcam streaming.",
    features: [
      "Real-time multi-class object detection from webcam feed and recorded video files",
      "Optimized NMS and confidence threshold filtering for high FPS inference",
      "Spatial bounding-box tracking and telemetry event logging"
    ],
    architecture: "Live RTSP/Webcam Stream → OpenCV Frame Pipeline → YOLO Inference Engine → NMS & Tracking → Real-Time Visual Overlay",
    role: "Computer Vision Engineer"
  },
  {
    id: 4,
    title: "Student Performance Tracker",
    category: "Full Stack",
    tech: ["React", "Flask", "Tailwind CSS", "MySQL", "REST APIs"],
    description: "A comprehensive SaaS application to track and analyze student academic performance with real-time analytics, longitudinal trends, and role-based access.",
    githubLink: "https://github.com/Nandini-0321/Student-Performance-Tracker",
    projectUrl: "#",
    image: "/projects/student_tracker.png",
    problem: "Educational institutions lack unified, visual tools to monitor student performance trends across semesters and detect academic decline early.",
    solution: "Engineered a full-stack platform featuring a React dashboard, Flask RESTful backend, normalized MySQL schema, and automated report generation.",
    features: [
      "Role-based authentication for Faculty, Administrators, and Students",
      "Interactive grade tracking, attendance monitoring, and longitudinal analytics",
      "CSV bulk data import and automated PDF report card exports"
    ],
    architecture: "React SPA → Flask REST API → MySQL Relational DB → Analytics & Visualization Engine",
    role: "Full Stack Developer"
  },
  {
    id: 5,
    title: "Spam Classifier",
    category: "Data Science",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Naive Bayes"],
    description: "NLP-based model to detect and filter spam messages efficiently using natural language processing pipelines and supervised machine learning algorithms.",
    githubLink: "https://github.com/Nandini-0321/Spam-Classifier",
    projectUrl: "#",
    image: "/projects/spam_classifier.png",
    problem: "Spam and phishing messages disrupt communication channels and present security risks across mobile and email platforms.",
    solution: "Implemented a full NLP pipeline with custom text cleaning, TF-IDF vectorization, Multinomial Naive Bayes, and SVM classifiers for robust spam filtering.",
    features: [
      "Comprehensive text preprocessing (tokenization, stopword removal, lemmatization)",
      "TF-IDF feature extraction with high precision/recall balance",
      "Fast classification inference ready for API microservice integration"
    ],
    architecture: "Raw Text Messages → Text Cleaning & Lemmatization → TF-IDF Matrix → Naive Bayes / SVM Classifier → Spam/Ham Prediction",
    role: "Data Scientist / NLP Developer"
  },
  {
    id: 6,
    title: "AI Resume Builder",
    category: "Web Development",
    tech: ["React", "Tailwind CSS", "Framer Motion", "PDF Generation"],
    description: "Web app for creating and customizing professional ATS-friendly resumes with structured templates, micro-interactions, and AI-powered phrasing suggestions.",
    githubLink: "https://github.com/Nandini-0321/AI-Resume-Builder",
    projectUrl: "#",
    image: "/projects/resume_builder.png",
    problem: "Job applicants often struggle with ATS formatting guidelines and phrasing impactful technical accomplishments on resumes.",
    solution: "Created a responsive React application featuring live WYSIWYG preview, section reordering with Framer Motion, and client-side vector PDF generation.",
    features: [
      "ATS-optimized structured templates with customizable color schemes",
      "Live real-time preview and instant PDF export without server roundtrips",
      "AI-assisted bullet point suggestions to elevate technical impact"
    ],
    architecture: "React State & Form Management → Framer Motion Drag/Drop → Template Engine → Client-Side PDF Renderer",
    role: "Frontend Engineer"
  },
  {
    id: 7,
    title: "Personal Finance Tracker",
    category: "Full Stack",
    tech: ["MERN Stack", "Recharts", "Tailwind CSS", "JWT Auth"],
    description: "A premium dashboard for tracking personal expenses, income, monthly budgets, and financial goals with visual analytics and secure authentication.",
    githubLink: "https://github.com/Nandini-0321/Personal-Finance-Tracker",
    projectUrl: "#",
    image: "/projects/finance_tracker.png",
    problem: "Individuals struggle to monitor multi-category spending, recurring bills, and savings trajectories across disparate bank records.",
    solution: "Developed a full-stack MERN dashboard with JWT session security, categorized transaction logging, budget threshold alerts, and Recharts visual breakdowns.",
    features: [
      "Secure JWT authentication and encrypted transaction management",
      "Interactive monthly budget charts, cashflow breakdown, and spending distribution",
      "Financial goal progress indicators and CSV data statement exports"
    ],
    architecture: "React + Recharts Frontend → Express / Node.js API → MongoDB Document Store → Aggregation Pipelines",
    role: "Full Stack Engineer"
  },
  {
    id: 8,
    title: "House Price Prediction",
    category: "Data Science",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Regression"],
    description: "Multivariate regression model predicting real estate prices using historical housing data, rigorous feature engineering, and ensemble algorithms.",
    githubLink: "https://github.com/Nandini-0321/House-Price-Prediction",
    projectUrl: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
    problem: "Property valuations fluctuate based on multi-dimensional variables that simple linear models fail to estimate accurately.",
    solution: "Engineered an end-to-end regression pipeline incorporating feature encoding, outlier removal, and gradient-boosted / random forest ensemble modeling.",
    features: [
      "Extensive exploratory data analysis and correlation heatmaps",
      "Feature engineering on locality density, square footage, and property amenities",
      "Hyperparameter tuning with cross-validation achieving low RMSE error"
    ],
    architecture: "Housing Dataset → Data Cleansing & Feature Engineering → Model Training (RF / Gradient Boosting) → Validation & Evaluation",
    role: "Data Scientist"
  },
  {
    id: 9,
    title: "Face Recognition Attendance System",
    category: "AI / ML",
    tech: ["Python", "OpenCV", "Machine Learning", "Haar Cascades"],
    description: "Automated contactless attendance tracking using computer vision and facial recognition for accurate, tamper-proof student and employee logging.",
    githubLink: "https://github.com/Nandini-0321/Face-Recognition-Attendance-System",
    projectUrl: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop",
    problem: "Manual attendance systems are slow, prone to proxy logging, and create bottlenecks in academic and office settings.",
    solution: "Engineered a contactless computer vision pipeline using Haar Cascades for face detection and ML classification embeddings with automated CSV logging.",
    features: [
      "Real-time face detection and identity recognition from webcam video",
      "Automated timestamped attendance logging into structured CSV files",
      "Lightweight execution designed to run efficiently on commodity hardware"
    ],
    architecture: "Camera Feed → Haar Cascade Face Detection → Face Embedding Extraction → Classifier → Automated CSV Logger",
    role: "Computer Vision Developer"
  },
  {
    id: 10,
    title: "Driver Drowsiness Detection",
    category: "AI / ML",
    tech: ["Python", "OpenCV", "Computer Vision", "dlib", "EAR"],
    description: "Real-time vehicular safety monitoring system detecting driver fatigue through facial landmark analysis, Eye Aspect Ratio (EAR), and auditory warnings.",
    githubLink: "https://github.com/Nandini-0321/Driver-Drowsiness-Detection",
    projectUrl: "#",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1064&auto=format&fit=crop",
    problem: "Driver fatigue is a leading cause of highway collisions, requiring instant non-intrusive alertness monitoring.",
    solution: "Designed a real-time computer vision system tracking 68 facial landmarks to calculate the Eye Aspect Ratio (EAR) and sound alerts when drowsiness is detected.",
    features: [
      "Real-time 68-point facial landmark tracking via dlib and OpenCV",
      "Continuous EAR mathematical calculation detecting closed eye duration",
      "Instant audible warning trigger to alert drowsy drivers before incidents occur"
    ],
    architecture: "Video Feed → dlib 68-point Landmark Detector → Eye Aspect Ratio (EAR) Calculation → Fatigue Threshold Logic → Auditory Alarm",
    role: "Computer Vision Engineer"
  },
  {
    id: 11,
    title: "FoodShare: Collaborative Food Donation Platform",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Maps"],
    description: "An impact-driven platform connecting food donors, NGOs, and volunteers to distribute surplus food efficiently and eliminate urban food waste.",
    githubLink: "https://github.com/Nandini-0321/FoodShare-Platform",
    projectUrl: "#",
    image: "/assets/projects/foodshare.png",
    featured: true,
    problem: "Restaurants and events generate surplus food daily while local shelters face shortages due to lack of coordination and logistics.",
    solution: "Built an end-to-end MERN stack platform featuring role-based dashboards for Donors, NGOs, and Volunteers with geolocation-assisted donation claims.",
    features: [
      "Three role-based user interfaces: Donors, NGOs, and Community Volunteers",
      "Location-based surplus food listings with pickup scheduling and status tracking",
      "MongoDB aggregation dashboards tracking meals saved and community impact"
    ],
    architecture: "React Frontend → Express / Node.js API Gateway → MongoDB Collections → Role-Based Dispatch & Tracking",
    role: "Lead Full Stack Developer"
  }
];
