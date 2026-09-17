export const site = {
  name: "Muqadas",
  fullName: "Muqadas Ibrar",
  role: "SOFTWARE ENGINEER",
  email: "muqadasibrar746@gmail.com",
  github: "https://github.com/Muqadas19",
  eyebrow: "I Am Muqadas Ibrar",
  subline:
    "Passionate about web development and creating useful digital solutions.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  footerExplore: [
    { label: "Services", href: "#services" },
    { label: "Recent Projects", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Photoshop"],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Photoshop",
    "AI",
    "Cursor",
  ],
  about: [
    "Hi, I’m Muqadas Ibrar, a Computer Science student passionate about web development and creating useful digital solutions.",
    "I have experience working with HTML, CSS, JavaScript, PHP, and MySQL. I also enjoy designing creative visuals using Photoshop and exploring modern tools like AI and Cursor to improve my development workflow.",
    "I’m continuously learning new technologies and looking for opportunities to build practical projects, improve my skills, and work with clients on meaningful digital solutions.",
  ],
  aboutHeadline: "Computer Science student",
  services: [
    {
      title: "Web Development",
      description:
        "Websites and web pages built with HTML, CSS, JavaScript, PHP, and MySQL — clear structure, useful features, and a clean layout.",
    },
    {
      title: "UI & Visual Design",
      description:
        "Creative visuals and interface layout in Photoshop, so the site looks intentional, not like a default template.",
    },
    {
      title: "Practical Web Apps",
      description:
        "Small tools that solve a real task — like a nutrition planner or a shortest-path navigator — not just a static page.",
    },
  ],
  projects: [
    {
      category: "Web Development",
      name: "Smart Nutrition Planner",
      description:
        "A web-based application that helps users calculate BMI and create nutrition plans based on their goals.",
      tags: ["HTML", "CSS", "JavaScript"],
      mock: "nutrition" as const,
    },
    {
      category: "Web Development",
      name: "Shortest Route Navigator",
      description:
        "A navigation project that finds the shortest path between two locations using graph algorithms. It demonstrates concepts such as graphs, nodes, edges, and pathfinding.",
      tags: ["JavaScript", "Graphs", "Pathfinding"],
      mock: "navigator" as const,
    },
  ],
  testimonials: [
    {
      initials: "AK",
      name: "Ayesha K.",
      role: "Project partner",
      quote:
        "The Smart Nutrition Planner was easy to follow. BMI and the plan were clear, and the layout felt simple to use.",
    },
    {
      initials: "HR",
      name: "Hassan R.",
      role: "Class teammate",
      quote:
        "Shortest Route Navigator made the graph idea click. You could see the path, not just the theory.",
    },
    {
      initials: "NM",
      name: "Noor M.",
      role: "Peer review",
      quote:
        "Muqadas keeps the UI readable and the features practical. Feedback turned into changes quickly.",
    },
  ],
  faqs: [
    {
      q: "What do you work on?",
      a: "Web development projects for learning and clients: sites and practical tools in HTML, CSS, JavaScript, PHP, and MySQL.",
    },
    {
      q: "Are you available for freelance work?",
      a: "Yes. Email muqadasibrar746@gmail.com to talk about a project.",
    },
    {
      q: "What is your current focus?",
      a: "Computer Science studies, shipping practical web apps, and improving the development workflow with modern tools.",
    },
    {
      q: "Do you have live project links?",
      a: "Recent projects are listed on this page. Live and GitHub links will be added when they are ready.",
    },
  ],
  seo: {
    title: "Muqadas Ibrar — Software Engineer",
    description:
      "Computer Science student and software engineer building useful web products with HTML, CSS, JavaScript, PHP, and MySQL.",
  },
} as const;

export const mailto = `mailto:${site.email}`;
