// All site copy lives here so layout files stay clean.

export const site = {
  name: "Muqadas Ibrar",
  role: "Software Engineer",
  pitch:
    "I build AI-powered solutions, modern websites, and practical software applications that turn ideas into useful digital experiences.",
  email: "muqadasibrar746@gmail.com",
  location: "Pakistan",
  github: "https://github.com/Muqadas19",
  // Set a real Upwork URL later — link only shows when filled.
  upwork: "",

  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],

  contact: {
    title: "Got an Idea?",
    blurb: "Tell me briefly what you need. I’ll reply by email and we can plan the next step.",
  },

  about: {
    label: "Skills & Tech Stack",
    body: "I’m a Computer Science student at the University of Central Punjab with a passion for web development and creative digital solutions. I work with modern web technologies to build responsive, functional, and user-friendly websites. I enjoy turning ideas into practical projects while continuously learning new tools and technologies. My approach focuses on clean design, useful functionality, and solutions that are easy for users to understand.",
    // Featured 2×2 tiles (reference layout) + full logo list for small pills.
    techTiles: [
      { name: "JavaScript", icon: "js" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "C++", icon: "cpp" },
    ],
    techLogos: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "WordPress", icon: "wordpress" },
      { name: "C++", icon: "cpp" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
    skills: [
      "AI Development",
      "Software Development",
      "Web Development",
      "HTML & CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "WordPress",
      "C++",
      "Git & GitHub",
      "Photoshop",
      "UI/UX Design",
      "Responsive Web Design",
    ],
    education: {
      title: "Bachelor of Science in Computer Science (BSCS)",
      place: "University of Central Punjab (UCP)",
      year: "2028",
      yearNote: "Expected",
    },
    experience: {
      title: "Software Engineer / Developer",
      place: "Personal & Academic Projects",
      highlight: "Dev",
      body: "AI solutions, web apps, and CS projects — always learning.",
    },
  },

  services: {
    title: "Services I Offer",
    items: [
      {
        id: "01",
        name: "AI Development",
        blurb: "Practical AI-powered solutions built into real digital products.",
        body: "Building practical AI-powered solutions and integrating AI into digital products.",
        focus: "AI",
        focusLabel: "Smart features",
      },
      {
        id: "02",
        name: "Web Development",
        blurb: "Responsive, modern websites that feel clear and easy to use.",
        body: "Creating responsive, modern, and functional websites for individuals and businesses.",
        focus: "Web",
        focusLabel: "Sites & apps",
      },
      {
        id: "03",
        name: "Software Development",
        blurb: "Useful applications and Computer Science solutions that solve real problems.",
        body: "Developing practical software applications and Computer Science-based solutions.",
        focus: "Code",
        focusLabel: "Apps & tools",
      },
      {
        id: "04",
        name: "Digital Design",
        blurb: "Clean posters and visual content that support the product story.",
        body: "Creating professional posters, visual content, and digital designs for different purposes.",
        focus: "Design",
        focusLabel: "Visual craft",
      },
    ],
  },

  work: {
    title: "Featured Work",
    items: [
      {
        id: "nutrition",
        name: "Smart Nutrition Planner",
        type: "Web Application",
        body: "A web-based nutrition planner that calculates BMI and creates meal plans based on users’ fitness goals.",
        tech: "PHP, MySQL, HTML, CSS, JavaScript",
        image: "/projects/smart-nutrition-planner.jpg",
      },
      {
        id: "navigator",
        name: "Shortest Route Navigator",
        type: "Computer Science / DSA",
        body: "A navigation project that uses graph algorithms to find the shortest route between different locations.",
        tech: "C++",
        image: "/projects/shortest-route-navigator.jpg",
      },
      {
        id: "zombie",
        name: "Zombie Arena",
        type: "Game Development",
        body: "An action-based survival game where players fight against waves of zombies using movement and combat mechanics.",
        tech: "Game mechanics · combat · waves",
        image: "/projects/zombie-arena.jpg",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    // Sample quotes for early-career niche — replace anytime in this file.
    items: [
      {
        id: "t1",
        quote:
          "Muqadas built our small business site clear and fast. Clients finally understand what we offer.",
        name: "Sara K.",
        role: "Boutique Owner",
        stars: 5,
      },
      {
        id: "t2",
        quote:
          "She helped turn my student project into something that actually looked finished and easy to present.",
        name: "Hassan A.",
        role: "CS Student",
        stars: 5,
      },
      {
        id: "t3",
        quote:
          "The poster design was clean and professional. Exactly the look we needed for our campus event.",
        name: "Ayesha R.",
        role: "Event Organizer",
        stars: 5,
      },
      {
        id: "t4",
        quote:
          "She added a simple AI feature to our form flow. Communication was clear and the result worked well.",
        name: "Omar F.",
        role: "Startup Founder",
        stars: 4,
      },
      {
        id: "t5",
        quote:
          "Our portfolio site feels modern and easy to use. She listened carefully and delivered on time.",
        name: "Nadia M.",
        role: "Freelance Designer",
        stars: 5,
      },
      {
        id: "t6",
        quote:
          "From idea to working demo, the process was smooth. Great help for a practical software assignment.",
        name: "Bilal S.",
        role: "University Peer",
        stars: 4,
      },
    ],
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "q1",
        question: "What kind of work do you take on?",
        answer:
          "I build practical digital work — modern websites, software and CS projects, simple AI features, and digital designs like posters. If your idea fits those areas, we can shape it into a clear plan.",
      },
      {
        id: "q2",
        question: "Which tools and technologies do you use?",
        answer:
          "I mainly work with HTML, CSS, JavaScript, PHP, MySQL, WordPress, C++, Git, and design tools like Photoshop. I pick the stack that fits the project, not the other way around.",
      },
      {
        id: "q3",
        question: "Do you work with students as well as clients?",
        answer:
          "Yes. I help students with academic and personal projects, and I also take on client work for small businesses and individuals — including remote projects from Pakistan or abroad.",
      },
      {
        id: "q4",
        question: "How long does a small website usually take?",
        answer:
          "A simple site often takes about one to two weeks, depending on pages, content readiness, and revisions. I’ll give you a clearer timeline after we discuss your goals.",
      },
      {
        id: "q5",
        question: "Can you handle both design and development?",
        answer:
          "Yes. I can design visuals and also build the working site or app, so the look and the function stay connected from start to finish.",
      },
      {
        id: "q6",
        question: "How do we start a project?",
        answer:
          "Send a short message about what you need — your goal, timeline, and any examples you like. We’ll align on scope, then I’ll guide the next steps. You can reach me through the contact form or email.",
      },
    ],
  },
} as const;
