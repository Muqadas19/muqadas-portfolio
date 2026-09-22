export type Metric = {
  value: string;
  label: string;
};

export type Service = {
  name: string;
  outcome: string;
};

export type Project = {
  category: string;
  name: string;
  summary: string;
  role: string;
  tags: string[];
  year: string;
  visual: string;
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
};

export const site = {
  brandName: "Framora",
  fullName: "Muqadas Ibrar",
  role: "Software Engineer",
  roleLine1: "FULL STACK",
  roleLine2: "DEVELOPER",
  location: "Pakistan",
  email: "Muqadasibrar746@gmail.com",
  domain: "muqadasibrar.com",
  hero: {
    intro: "I Am Isaac Fomo",
    cta: "Let's Collaborate",
    portrait: "/images/hero-portrait.png",
    butterfly: "/images/hero-butterfly.png",
  },
  about: {
    headline:
      "I help clients turn ideas into functional, user-friendly websites.",
    body: "Hi, I'm Muqadas Ibrar, a Computer Science student passionate about web development and creating useful digital solutions. I have experience working with HTML, CSS, JavaScript, PHP, and MySQL. I also enjoy designing creative visuals using Photoshop and exploring modern tools like AI and Cursor to improve my development workflow.",
    metrics: [
      { value: "3+", label: "Featured Projects" },
      { value: "5+", label: "Core Technologies" },
      { value: "1", label: "BSCS Degree" },
      { value: "2028", label: "Graduation Year" },
    ] satisfies Metric[],
    education: {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      school: "University of Central Punjab (UCP)",
      year: "2028",
    },
  },
  services: [
    {
      name: "Web Development",
      outcome:
        "Responsive and functional websites built according to the client's requirements.",
    },
    {
      name: "PHP & MySQL Development",
      outcome:
        "Dynamic websites with database integration, user accounts, forms, and data management.",
    },
    {
      name: "Website Design",
      outcome:
        "Clean, modern, and user-friendly website interfaces that work across different screen sizes.",
    },
    {
      name: "WordPress Development",
      outcome:
        "Simple and professional WordPress websites that clients can easily manage.",
    },
    {
      name: "Website Maintenance & Improvements",
      outcome:
        "Fixing website issues, updating existing pages, and improving functionality and design.",
    },
  ] satisfies Service[],
  stackLogos: [
    {
      name: "Catalxg",
      src: "/images/stack-catalxg.svg",
    },
    {
      name: "Eclipseful",
      src: "/images/stack-eclipseful.svg",
    },
    {
      name: "FeatherDev",
      src: "/images/stack-featherdev.svg",
    },
    {
      name: "Epicurious",
      src: "/images/stack-epicurious.svg",
    },
    {
      name: "Euphoria",
      src: "/images/stack-euphoria.svg",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "MySQL",
    "Git & GitHub",
    "Photoshop",
    "VS Code",
    "Cursor",
    "WordPress",
  ],
  projects: [
    {
      category: "Web Application",
      name: "Smart Nutrition Planner",
      summary:
        "A web-based nutrition planner that helps users calculate BMI and create meal plans according to their fitness goals. Users can choose weight loss, weight maintenance, or weight gain and receive suitable meal recommendations.",
      role: "Full-Stack Developer",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      year: "2026",
      visual: "BMI calculator and personalized meal-plan dashboard",
      image: "/images/project-nutrition.png",
    },
    {
      category: "Application / DSA",
      name: "Shortest Route Navigator",
      summary:
        "A navigation-based project that finds the shortest route between locations using graph algorithms. It demonstrates practical use of graphs, nodes, edges, and pathfinding concepts.",
      role: "Developer",
      tags: ["C++", "Data Structures", "Algorithms"],
      year: "2026",
      visual: "Route output and visualization of connected locations",
      image: "/images/project-navigator.png",
    },
    {
      category: "Game",
      name: "Zombie Arena",
      summary:
        "An action-based game where players fight and survive against waves of zombies. The project demonstrates gameplay concepts such as player movement, enemies, combat, and game mechanics.",
      role: "Game Developer",
      tags: ["Godot", "Game Development"],
      year: "2026",
      visual: "Gameplay screen with player, environment, and zombie enemies",
      image: "/images/project-zombie.png",
    },
  ] satisfies Project[],
  faqs: [
    {
      question: "What type of websites do you develop?",
      answer:
        "I develop responsive portfolio websites, business websites, landing pages, and dynamic PHP/MySQL websites based on client requirements.",
    },
    {
      question: "Can you work on an existing website?",
      answer:
        "Yes. I can fix website issues, improve the design, add features, and make existing websites more responsive and user-friendly.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I mainly work with HTML, CSS, JavaScript, PHP, and MySQL. I also use tools such as VS Code, Git, WordPress, and Cursor in my development workflow.",
    },
    {
      question: "How can I start a project with you?",
      answer:
        "You can contact me through the portfolio contact form and share your project idea, requirements, and goals. We can then discuss the features and development approach.",
    },
  ] satisfies Faq[],
  testimonials: [
    {
      quote:
        "Working with this developer was a smooth experience. The website was delivered on time and matched what we asked for.",
      name: "Amina Khalid",
      role: "Boutique Owner",
      photo: "/images/testimonial-1.png",
    },
    {
      quote:
        "Clear communication and a practical approach. Our old pages feel faster and much easier to use on mobile.",
      name: "Hassan Malik",
      role: "Cafe Manager",
      photo: "/images/testimonial-2.png",
    },
    {
      quote:
        "The PHP forms and database work just the way we needed. Clients can now submit requests without back and forth.",
      name: "Sara Ahmed",
      role: "Studio Coordinator",
      photo: "/images/testimonial-3.png",
    },
    {
      quote:
        "Professional, patient, and focused on the result. The WordPress site is simple for our team to update.",
      name: "Omar Farooq",
      role: "Retail Founder",
      photo: "/images/testimonial-4.png",
    },
    {
      quote:
        "Design and development stayed in sync. The final site looks clean and works across phones and laptops.",
      name: "Noor Fatima",
      role: "Brand Designer",
      photo: "/images/testimonial-5.png",
    },
    {
      quote:
        "We came with a messy brief and left with a site our customers actually understand. Highly recommend.",
      name: "Bilal Hussain",
      role: "Operations Lead",
      photo: "/images/testimonial-6.png",
    },
  ] satisfies Testimonial[],
  seo: {
    title: "Muqadas Ibrar | Software Engineer",
    description:
      "Software Engineer in Pakistan building responsive websites, PHP/MySQL apps, and WordPress sites for clients.",
  },
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
] as const;
