import { useEffect } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" }
];

const socialLinks = [
  {
    href: "https://github.com/bchiang7",
    label: "GitHub",
    path: "M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
  },
  {
    href: "https://www.linkedin.com/in/bchiang7/",
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1-.01 5.01 2.5 2.5 0 0 1 .01-5.01ZM3 9.45h4v11.8H3V9.45Zm6.35 0h3.84v1.61h.05c.54-.96 1.84-1.98 3.79-1.98 4.05 0 4.8 2.67 4.8 6.13v6.04h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83v5.45h-4V9.45Z"
  },
  {
    href: "https://codepen.io/bchiang7",
    label: "CodePen",
    path: "M12 2.5 2.75 8.67v6.66L12 21.5l9.25-6.17V8.67L12 2.5Zm0 2.4 6.55 4.37-2.93 1.96L12 8.8 8.38 11.23 5.45 9.27 12 4.9Zm-7.25 6.23 1.83 1.22-1.83 1.22v-2.44Zm7.25-.22 1.8 1.21-1.8 1.2-1.8-1.2 1.8-1.21Zm-3.62 2.43L12 15.76l3.62-2.42 2.93 1.95L12 19.66l-6.55-4.37 2.93-1.95Zm10.87.23-1.83-1.22 1.83-1.22v2.44Z"
  },
  {
    href: "https://instagram.com/bchiang7",
    label: "Instagram",
    path: "M7.75 2.75h8.5a5 5 0 0 1 5 5v8.5a5 5 0 0 1-5 5h-8.5a5 5 0 0 1-5-5v-8.5a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-8.5a3 3 0 0 0-3-3h-8.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.75-2.28a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06Z"
  },
  {
    href: "https://www.goodreads.com/user/show/143480747-brittany-chiang",
    label: "Goodreads",
    path: "M7.4 3.25h9.2c1.2 0 2.15.96 2.15 2.15v13.2c0 1.2-.96 2.15-2.15 2.15H7.4a2.15 2.15 0 0 1-2.15-2.15V5.4c0-1.2.96-2.15 2.15-2.15Zm0 2v13.5h9.2a.15.15 0 0 0 .15-.15V5.4a.15.15 0 0 0-.15-.15H7.4Zm2.1 3.25h5v1.6h-5V8.5Zm0 3.05h5v1.6h-5v-1.6Zm0 3.05h3.65v1.6H9.5v-1.6Z"
  }
];

const experiences = [
  {
    period: "2024 - Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    href: "https://www.klaviyo.com/",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"]
  },
  {
    period: "2018 - 2024",
    title: "Lead Engineer",
    company: "Upstatement",
    href: "https://upstatement.com/",
    subrole: "Senior Engineer\nEngineer",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
    tags: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
  },
  {
    period: "July - Dec 2017",
    title: "UI Engineer Co-op",
    company: "Apple",
    href: "https://www.apple.com/apple-music/",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    tags: ["MusicKit.js", "9to5Mac", "The Verge", "Ember", "SCSS", "JavaScript"]
  },
  {
    period: "2016 - 2017",
    title: "Developer",
    company: "Scout Studio",
    href: "https://scout.camd.northeastern.edu/",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tags: ["Jekyll", "SCSS", "JavaScript", "WordPress"]
  },
  {
    period: "July - Dec 2016",
    title: "Software Engineer Co-op",
    company: "Starry",
    href: "https://starry.com/",
    description:
      "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    tags: ["Android App", "ScreenTime 2.0", "Cordova", "Backbone", "JavaScript", "CSS"]
  },
  {
    period: "July - Dec 2015",
    title: "Creative Technologist Co-op",
    company: "MullenLowe U.S.",
    href: "https://us.mullenlowe.com/",
    description:
      "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"]
  }
];

const projects = [
  {
    title: "Build a Spotify Connected App",
    href: "https://www.newline.co/courses/build-a-spotify-connected-app",
    thumbClass: "course",
    thumb: "BC",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
  },
  {
    title: "Spotify Profile",
    href: "https://spotify-profile.herokuapp.com/",
    thumbClass: "spotify",
    thumb: "719",
    description:
      "Web app for visualizing personalized Spotify data. View top artists, top tracks, recently played tracks, detailed audio information, and recommended playlists.",
    tags: ["React", "Express", "Spotify API", "Heroku"]
  },
  {
    title: "Halcyon Theme",
    href: "https://halcyon-theme.netlify.app/",
    thumbClass: "halcyon",
    thumb: "100k+",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more."
  },
  {
    title: "brittanychiang.com (v4)",
    href: "https://v4.brittanychiang.com/",
    thumbClass: "v4",
    thumb: "8,262",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.",
    tags: ["Gatsby", "Styled Components", "Netlify"]
  }
];

const writing = [
  ["2026", "Welcome to the AI Parade", "https://medium.com/@bchiang7/welcome-to-the-ai-parade-765f79b00c30"],
  ["2024", "5 Common Accessibility Pitfalls and How to Avoid Them", "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0"],
  ["2020", "Integrating Algolia Search with WordPress Multisite", "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"],
  ["2019", "Building a Headless Mobile App CMS From Scratch", "https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9"]
];

function Tags({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="pills">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function IconLink({ href, label, path }) {
  return (
    <li>
      <a href={href} aria-label={label}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={path} />
        </svg>
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
            <a className="name" href="/" aria-label="Amrit lal Gupta home">Amrit lal</a>
            <h1>Frontend Engineer</h1>
            <p className="tagline">I build accessible, pixel-perfect experiences for the web.</p>
          </div>
          <nav className="section-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}><span />{item.label}</a>
            ))}
          </nav>
          <ul className="socials" aria-label="Social links">
            {socialLinks.map((link) => <IconLink key={link.label} {...link} />)}
          </ul>
        </header>

        <main id="content">
          <section id="about" className="section">
            <h2 className="section-heading">About</h2>
            <div className="copy">
              <p>Hi there! I'm Brittany, and I like building things. I'm a frontend engineer with expertise in building accessible, pixel-perfect user interfaces. I take pride in crafting thoughtful, inclusive products and have a sharp eye for the small details that separate a good product from an exceptional one. I enjoy working at the intersection of design and engineering, where great UX meets clean, scalable code.</p>
              <p>Currently, I'm a <a href="https://www.klaviyo.com/">Senior Frontend Engineer</a> at Klaviyo, where I work on our design system and help build new products. I lead engineering efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is built into the foundation of everything we ship.</p>
              <p>Previously, I've worked across a wide range of environments - from product studios to startups and large tech companies - including <a href="https://www.apple.com/apple-music/">Apple</a>, <a href="https://starry.com/">Starry Internet</a>, and <a href="https://upstatement.com/">Upstatement</a>. Outside of my day-to-day work, I also created an <a href="https://www.newline.co/courses/build-a-spotify-connected-app">online video course</a> a few years ago which walks through building a real-world, API-driven application from scratch.</p>
              <p>In my spare time, you can usually find me climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for <a href="https://www.zeldadungeon.net/wiki/Korok_Seed">Korok seeds</a>.</p>
            </div>
          </section>

          <section id="experience" className="section">
            <h2 className="section-heading">Experience</h2>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="row-card" key={`${item.period}-${item.company}`}>
                  <p className="eyebrow">{item.period}</p>
                  <div>
                    <h3><a href={item.href}>{item.title} &middot; {item.company}</a></h3>
                    {item.subrole && <p className="subrole">{item.subrole.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p>}
                    <p>{item.description}</p>
                    <Tags items={item.tags} />
                  </div>
                </article>
              ))}
            </div>
            <a className="text-link" href="https://brittanychiang.com/resume.pdf">View Full Resume</a>
          </section>

          <section id="projects" className="section">
            <h2 className="section-heading">Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <article className="row-card project-card" key={project.title}>
                  <div className={`thumb ${project.thumbClass}`}>{project.thumb}</div>
                  <div>
                    <h3><a href={project.href}>{project.title}</a></h3>
                    <p>{project.description}</p>
                    <Tags items={project.tags} />
                  </div>
                </article>
              ))}
            </div>
            <a className="text-link" href="https://brittanychiang.com/archive">View Full Project Archive</a>
          </section>

          <section id="writing" className="section">
            <h2 className="section-heading">Writing</h2>
            <div className="writing-list">
              {writing.map(([year, title, href]) => (
                <a className="writing-row" href={href} key={title}>
                  <span>{year}</span><strong>{title}</strong>
                </a>
              ))}
            </div>
          </section>

          <footer>
            <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
