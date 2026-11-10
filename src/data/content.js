/**
 * =========================================================================
 * PORTFOLIO CONTENT & CONFIGURATION
 * =========================================================================
 * Edit any details below to customize the portfolio.
 * All sections (Hero, About, Skills, Projects, Journey, Contact, Footer)
 * read directly from this single file.
 */

export const personalInfo = {
  name: "Akshay Krishna K S",
  signature: "Akshay Krishna",
  role: "B.Tech CS (Artificial Intelligence) Student",
  college: "Thejus Engineering College",
  location: "Thrissur, Kerala, India",
  tagline: "Learning, building, and growing with AI.",
  heroHeadline: "Crafting intelligent solutions with code and curiosity.",
  heroSubheadline: "First-year computer science student specializing in Artificial Intelligence. Passionate about algorithms, modern web interfaces, and building machine learning models that solve real-world problems.",
  
  // Replace with your real photo path: e.g. "/profile.jpg" in the `public` folder
  // Or provide an external image URL
  photoUrl: "/profile.jpg",
  photoAlt: "Portrait of Akshay Krishna K S",

  // Social & Contact Links (edit these with your own handles)
  email: "akshaykrishnaks.ai@gmail.com",
  phone: "+91 98765 43210", // optional, can be hidden
  github: "https://github.com/akshaykrishnaks",
  linkedin: "https://linkedin.com/in/akshaykrishnaks",
  instagram: "https://instagram.com/akshaykrishna_ai",
  resumeUrl: "#resume", // link to your uploaded PDF e.g. "/Akshay_Krishna_Resume.pdf"
  
  // Formspree or EmailJS endpoint for contact form:
  // e.g., "https://formspree.io/f/your_form_id"
  formspreeEndpoint: "https://formspree.io/f/placeholder",
};

export const aboutData = {
  badge: "About Me",
  title: "A curious mind exploring the frontiers of Artificial Intelligence",
  bioParagraphs: [
    "Hello! I am Akshay Krishna K S, a first-year Computer Science and Engineering student specializing in Artificial Intelligence at Thejus Engineering College in Thrissur, Kerala.",
    "My journey in technology began with a fascination for how logic turns into interactive experiences. Today, I am deeply engrossed in mastering Python, core data structures in C, modern frontend development, and foundational mathematical principles behind neural networks.",
    "Outside lecture halls and IDEs, I enjoy tech community meetups, exploring open-source AI papers, tinkering with responsive web design, and brainstorming creative software ideas with peers."
  ],
  quickFacts: [
    { label: "Institution", value: "Thejus Engineering College" },
    { label: "Degree & Spec", value: "B.Tech in CS (Artificial Intelligence)" },
    { label: "Academic Year", value: "1st Year (2024 - 2028)" },
    { label: "Location", value: "Thrissur, Kerala, India" },
    { label: "Current Focus", value: "Data Structures, Python & ML Math" },
    { label: "Spoken Languages", value: "English, Malayalam, Hindi" }
  ],
  stats: [
    { value: 12, suffix: "+", label: "Projects & Labs Built" },
    { value: 500, suffix: "+", label: "Hours of Learning & Code" },
    { value: 10, suffix: "+", label: "Core Tech & Tools" },
    { value: 100, suffix: "%", label: "Dedication & Curiosity" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Foundational and scripting languages for problem solving and backend logic.",
    skills: [
      { name: "Python", level: 85, badge: "Proficient", icon: "Code2", note: "Scripting, NumPy basics, OOP" },
      { name: "C Language", level: 78, badge: "Core", icon: "Terminal", note: "Pointers, Data Structures, Memory" },
      { name: "JavaScript (ES6+)", level: 80, badge: "Modern", icon: "FileCode", note: "Async/Await, DOM, APIs" },
      { name: "SQL Basics", level: 70, badge: "Learning", icon: "Database", note: "Queries, Relational schemas" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Early-stage exploration into intelligent models, data handling, and neural foundations.",
    skills: [
      { name: "NumPy & Pandas", level: 75, badge: "Data Ops", icon: "Binary", note: "Array manipulation, cleaning" },
      { name: "Scikit-Learn Basics", level: 65, badge: "Exploratory", icon: "Cpu", note: "Linear Regression, KNN" },
      { name: "Matplotlib & Seaborn", level: 72, badge: "Visualization", icon: "BarChart3", note: "Data storytelling & graphs" },
      { name: "ML Math & Logic", level: 70, badge: "Theory", icon: "Brain", note: "Linear algebra, probability" }
    ]
  },
  {
    category: "Web & Frontend",
    description: "Building responsive, aesthetically pleasing interfaces and interactive client apps.",
    skills: [
      { name: "HTML5 & Semantic Web", level: 90, badge: "Standard", icon: "Layout", note: "Accessibility & structure" },
      { name: "CSS3 & Modern Tailwind", level: 88, badge: "Aesthetic", icon: "Palette", note: "Flexbox, Grid, Animations" },
      { name: "React.js", level: 75, badge: "Component-driven", icon: "Atom", note: "Hooks, State, Props" },
      { name: "Responsive Design", level: 88, badge: "Mobile-first", icon: "Smartphone", note: "Cross-device layouts" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Developer tooling for version control, collaboration, and rapid prototyping.",
    skills: [
      { name: "Git & GitHub", level: 82, badge: "Essential", icon: "GitBranch", note: "Commits, branches, PRs" },
      { name: "VS Code & Extensions", level: 90, badge: "Primary IDE", icon: "Monitor", note: "Productivity & debugging" },
      { name: "Jupyter Notebooks", level: 80, badge: "Interactive", icon: "BookOpen", note: "Model experimentation" },
      { name: "Linux / Bash Basics", level: 70, badge: "Shell", icon: "CommandLine", note: "CLI commands, navigation" }
    ]
  }
];

export const projects = [
  {
    id: "ai-disease-predictor",
    title: "HealthPredict AI: Early Risk Classifier",
    subtitle: "Machine Learning & Streamlit Web App",
    description: "An intuitive diagnostic tool trained on clinical parameters to evaluate early risks for cardiovascular and diabetic markers. Built using Python and Scikit-Learn with an interactive frontend.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
    category: "AI / ML",
    featured: true,
    github: "https://github.com/akshaykrishnaks/healthpredict-ai",
    liveDemo: "https://healthpredict-demo.vercel.app",
    gradient: "from-[#8FA892]/20 via-[#DFE9E1]/30 to-[#E6DFD6]/20",
    imageCaption: "Predictive Analytics Dashboard"
  },
  {
    id: "campus-bot",
    title: "Thejus Academic Hub & Query Assistant",
    subtitle: "Full-Stack Portal with Smart Search",
    description: "A centralized campus portal for first-year engineering students to browse semester syllabus notes, KTU exam timetables, and ask course queries through a keyword matching engine.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Python API"],
    category: "Web App",
    featured: true,
    github: "https://github.com/akshaykrishnaks/thejus-academic-hub",
    liveDemo: "https://thejus-hub.vercel.app",
    gradient: "from-[#DFE9E1]/40 via-[#F7F6F3] to-[#E6DFD6]/40",
    imageCaption: "Academic Resource Platform"
  },
  {
    id: "algo-visualizer",
    title: "Interactive Sorting & Search Visualizer",
    subtitle: "Data Structures & Algorithm Animation",
    description: "A web-based visualizer designed to help CS peers understand time complexity and stepwise execution of Bubble, Merge, Quick Sort, and Binary Search with custom speed controls.",
    tech: ["HTML5 Canvas", "JavaScript (ES6)", "CSS3 Animations"],
    category: "Algorithm",
    featured: false,
    github: "https://github.com/akshaykrishnaks/algorithm-visualizer",
    liveDemo: "https://algo-visualizer-demo.vercel.app",
    gradient: "from-[#E6DFD6]/30 via-[#8FA892]/15 to-[#DFE9E1]/30",
    imageCaption: "Interactive Data Structures"
  },
  {
    id: "linear-regression-from-scratch",
    title: "Pure C Linear Regression Engine",
    subtitle: "Low-Level Mathematical Implementation",
    description: "Implemented gradient descent and ordinary least squares linear regression from scratch in C without third-party ML libraries to deeply master loss minimization and pointer math.",
    tech: ["C Language", "GCC", "Linear Algebra", "File I/O"],
    category: "AI / ML",
    featured: false,
    github: "https://github.com/akshaykrishnaks/c-linear-regression",
    liveDemo: "https://github.com/akshaykrishnaks/c-linear-regression#readme",
    gradient: "from-[#8FA892]/25 via-[#E6DFD6]/30 to-[#F7F6F3]",
    imageCaption: "Math-First Machine Learning"
  }
];

export const journeyTimeline = [
  {
    period: "2024 — Present",
    title: "B.Tech in Computer Science & Engineering (AI)",
    institution: "Thejus Engineering College, Thrissur (APJ Abdul Kalam Technological University)",
    badge: "Current Milestone",
    type: "education",
    description: "Specializing in Artificial Intelligence and Machine Learning. Immersing in foundational engineering coursework, C programming, discrete mathematics, and building student community initiatives.",
    highlights: [
      "Active participant in technical symposiums and AI workshops",
      "Hands-on practice in engineering labs and algorithmic problem solving",
      "Exploring neural network architectures and data science libraries"
    ]
  },
  {
    period: "2022 — 2024",
    title: "Higher Secondary Education (Computer Science & Science Stream)",
    institution: "Kerala State Higher Secondary Board",
    badge: "Completed with Distinction",
    type: "education",
    description: "Studied Physics, Chemistry, Mathematics, and Computer Science (Python & SQL). Discovered a passion for programming through school computing projects.",
    highlights: [
      "Built first desktop database project in Python with SQLite",
      "Represented school in regional IT & Science exhibitions",
      "Strong grounding in analytical mathematics and logic"
    ]
  },
  {
    period: "2024",
    title: "First Open Source & AI Explorations",
    institution: "Self-Directed Learning & Hackathons",
    badge: "Growth",
    type: "milestone",
    description: "Began version-controlling personal projects with Git, completing online certifications in Python for Data Science and collaborating with fellow freshmen.",
    highlights: [
      "Completed 50+ coding challenges on LeetCode / HackerRank",
      "Built modern responsive web portfolio and small utility tools",
      "Mentored peers during introductory coding bootcamps"
    ]
  }
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" }
];

