import { useEffect } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" }
];

const socialLinks = [
  {
    href: "https://github.com/Amritgupta023",
    label: "GitHub",
    path: "M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
  },
  {
    href: "https://www.linkedin.com/in/amrit-lal-gupta-2555ab128/",
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1-.01 5.01 2.5 2.5 0 0 1 .01-5.01ZM3 9.45h4v11.8H3V9.45Zm6.35 0h3.84v1.61h.05c.54-.96 1.84-1.98 3.79-1.98 4.05 0 4.8 2.67 4.8 6.13v6.04h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83v5.45h-4V9.45Z"
  },
  {
    href: "mailto:guptaamrit04@gmail.com",
    label: "Email",
    path: "M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm8.5 7.15L19.2 7H4.8l7.2 5.15Zm0 2.45L4 8.88V17h16V8.88l-8 5.72Z"
  },
  {
    href: "tel:+918882990954",
    label: "Phone",
    path: "M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
  }
];

const experiences = [
  {
    period: "Nov 2021 — Present",
    title: "Senior Software Engineer",
    company: "Capgemini · IBM",
    description:
      "Develop enterprise cloud management solutions for IBM. Build scalable React applications and reusable UI components, integrate REST APIs, improve performance and maintainability, and contribute to frontend architecture, code reviews, and CI/CD delivery.",
    tags: ["React", "TypeScript", "Carbon Design System", "Node.js", "REST APIs", "Nginx", "GitHub Actions", "AWS"]
  },
  {
    period: "Mar 2017 — Nov 2021",
    title: "Software Engineer",
    company: "Gemini Solutions",
    description:
      "Delivered products from requirements through deployment for international clients across telecom, insurance, banking, and conversational AI, including Bandwidth, Tata AIG, HSBC, Apollo Munich, and Kore.ai.",
    tags: ["React", "Next.js", "Redux", "JavaScript", "Jest", "Storybook", "Bootstrap", "REST APIs"]
  }
];

const projects = [
  {
    title: "IBM Cloud Disaster Recovery Automation",
    client: "IBM",
    thumbClass: "cloud",
    thumb: "IBM",
    description:
      "Enterprise cloud automation platform for configuring and managing disaster recovery solutions across IBM Cloud infrastructure. Built scalable dashboards, complex configuration workflows, and reusable Carbon components while integrating multiple backend services.",
    tags: ["React", "TypeScript", "Carbon Design System", "Node.js", "REST APIs"]
  },
  {
    title: "Janus",
    client: "Bandwidth",
    thumbClass: "janus",
    thumb: "J",
    description:
      "Application that enables customers to purchase and manage virtual phone numbers across multiple countries. Developed responsive React interfaces, Redux flows, REST integrations, and automated unit tests.",
    tags: ["React", "Redux", "Axios", "Jest", "React Testing Library"]
  },
  {
    title: "Alloy Design System",
    client: "Bandwidth",
    thumbClass: "alloy",
    thumb: "A",
    description:
      "Reusable component library shared across Bandwidth applications. Built responsive React components and documented them in Storybook while collaborating with multiple product teams to maintain a consistent experience.",
    tags: ["React", "Storybook", "MDBootstrap", "HTML", "CSS"]
  },
  {
    title: "Tata AIG Insurance Portal",
    client: "Tata AIG",
    thumbClass: "insurance",
    thumb: "TA",
    description:
      "Responsive portal for purchasing and renewing car, bike, health, and travel insurance. Implemented server-side rendering, journey resume, partner-specific dynamic themes, analytics integrations, and a neuromorphic interface.",
    tags: ["React", "Next.js", "Redux", "Bootstrap", "Strapi", "SSR"]
  }
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "Redux", "HTML5", "CSS3", "Bootstrap", "MDBootstrap"]
  },
  {
    title: "Backend & Testing",
    items: ["Node.js", "Express.js", "MongoDB", "Jest", "React Testing Library", "Cypress"]
  },
  {
    title: "UI & Tooling",
    items: ["Carbon Design System", "Storybook", "Alloy Design System", "Jira", "Postman", "VS Code"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "Nginx", "GitHub Actions", "CI/CD", "Linux", "Git"]
  }
];

function Tags({ items = [] }) {
  return (
    <ul className="pills">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function IconLink({ href, label, path }) {
  return (
    <li>
      <a href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
      </a>
    </li>
  );
}

function App() {
  useEffect(() => {
    const spotlight = document.querySelector(".spotlight");
    const scrollRoot = document.querySelector("main");
    const navLinks = [...document.querySelectorAll(".section-nav a")];
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const handlePointerMove = (event) => {
      spotlight?.style.setProperty("--x", `${event.clientX}px`);
      spotlight?.style.setProperty("--y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { root: scrollRoot, rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="spotlight" aria-hidden="true" />
      <div className="shell">
        <header className="intro">
          <div>
            <a className="name" href="/" aria-label="Amrit Lal Gupta home">Amrit Lal Gupta</a>
            <h1>Senior Frontend Engineer</h1>
            <p className="tagline">I build scalable, high-performance web applications and reusable frontend systems.</p>
          </div>
          <nav className="section-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}><span />{item.label}</a>
            ))}
          </nav>
          <ul className="socials" aria-label="Contact links">
            {socialLinks.map((link) => <IconLink key={link.label} {...link} />)}
          </ul>
        </header>

        <main id="content">
          <section id="about" className="section">
            <h2 className="section-heading">About</h2>
            <div className="copy">
              <p>I’m a Senior Frontend Engineer with 8+ years of experience building enterprise-scale web applications using React, TypeScript, Next.js, and modern JavaScript technologies.</p>
              <p>Currently, I work at <strong>Capgemini</strong> for the <strong>IBM</strong> client, developing enterprise cloud management applications. I focus on scalable frontend architecture, reusable component libraries, REST API integrations, and high-performance user experiences.</p>
              <p>Across my career, I’ve worked with global clients including IBM, Bandwidth, Tata AIG, HSBC, Apollo Munich, and Kore.ai on cloud platforms, insurance portals, design systems, and telecom products.</p>
              <p>I enjoy writing clean, maintainable code, improving performance, mentoring developers, and learning new technologies.</p>
            </div>
          </section>

          <section id="experience" className="section">
            <h2 className="section-heading">Experience</h2>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="row-card" key={`${item.period}-${item.company}`}>
                  <p className="eyebrow">{item.period}</p>
                  <div>
                    <h3>{item.title} &middot; {item.company}</h3>
                    <p>{item.description}</p>
                    <Tags items={item.tags} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <h2 className="section-heading">Featured Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <article className="row-card project-card" key={project.title}>
                  <div className={`thumb ${project.thumbClass}`}>{project.thumb}</div>
                  <div>
                    <p className="project-client">{project.client}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Tags items={project.tags} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <h2 className="section-heading">Skills</h2>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <Tags items={group.items} />
                </article>
              ))}
            </div>
          </section>

          <footer>
            <p>B.Tech in Computer Science, Galgotias University · Gurugram, India</p>
            <p><a href="mailto:guptaamrit04@gmail.com">guptaamrit04@gmail.com</a> · <a href="tel:+918882990954">+91 88829 90954</a></p>
            <p>Built with React and Vite. Set in the Inter typeface.</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
