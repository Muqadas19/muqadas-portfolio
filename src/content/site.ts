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
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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
      a: "Case studies are listed on the Work page. Live and GitHub links will be added when they are ready.",
    },
  ],
  seo: {
    title: "Muqadas Ibrar — Software Engineer",
    description:
      "Computer Science student and software engineer building useful web products with HTML, CSS, JavaScript, PHP, and MySQL.",
  },
} as const;

export const mailto = `mailto:${site.email}`;
