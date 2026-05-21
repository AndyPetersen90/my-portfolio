import { useScrollAnimation } from "../hooks/useScrollAnimation";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  image: string;
  alt: string;
  summary: string;
  impact: string;
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Valhalla Pet Crematory",
    image: "./valhalla-pet-crematory-website.png",
    alt: "Valhalla Pet Crematory website screenshot",
    summary:
      "A compassionate, production-ready website for a local pet cremation business serving Logan, Utah and Cache Valley families.",
    impact:
      "Includes service education, transparent pricing, family and veterinary contact workflows, local SEO pages, structured metadata, and email notifications for inquiries and clinic pickup requests.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Vercel Analytics",
      "SEO",
      "JSON-LD",
    ],
    // Replace with the live production URL when you publish or if it differs.
    links: [{ label: "View Project", href: "https://www.valhallapetcrematory.com" }],
    featured: true,
  },
  {
    title: "ASL — Lighting Quote & Contract MVP",
    image: "./ASL-MVP-Screenshot.png",
    alt: "ASL lighting quote and e-sign contract workflow screenshot",
    summary:
      "Full-stack app for dealership reps to quote exterior lighting from photos and send contracts for e-sign.",
    impact:
      "Portfolio materials show product-facing flows and outcomes only. Proprietary pricing logic and customer data stay private and are not included in any public repository.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Radix UI",
      "Firebase Auth",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "AWS S3",
      "OpenAI API",
      "SignWell",
    ],
    links: [{ label: "Contact for demo", href: "#contact-section" }],
    featured: true,
  },
  {
    title: "Past Work at Sunrebel",
    image: "./sunrebel-proposals-image.webp",
    alt: "Sunrebel proposal tools screenshot",
    summary: "A collection of internal tools and product features created for a previous engineering role.",
    impact:
      "The available demos show business-facing software work while respecting private company code and sensitive internal systems.",
    tech: ["React", "TypeScript", "Material UI", "TanStack Query", "Zustand", "Express", "MongoDB", "AWS"],
    links: [{ label: "Watch Demos", href: "https://www.youtube.com/playlist?list=PLlFtToxLwJR73Ewb-pY2kPb0RQsUpGNB3" }],
    featured: true,
  },
  {
    title: "All Season Lighting",
    image: "./all-season-lighting-screenshot.webp",
    alt: "All Season Lighting website screenshot",
    summary: "A marketing site for a permanent lighting company with customer and seller request forms.",
    impact:
      "Helped create a clearer path for visitors to request quotes, contact the company, and understand the service offering.",
    tech: ["Astro", "TypeScript", "Tailwind", "AWS Lambda", "Vercel"],
    links: [{ label: "View Live Site", href: "https://www.allseasonlighting.com/" }],
    featured: true,
  },
  {
    title: "Word Fishing Game",
    image: "./word-fishing-game-image.webp",
    alt: "Word Fishing Game screenshot",
    summary: "A kid-friendly word game designed to make memorization more interactive and fun.",
    impact:
      "Created for a real group activity, with playful visuals and simple interactions that make the experience easy for children to follow.",
    tech: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "View Live Site", href: "https://word-fishing.netlify.app/" }],
  },
  {
    title: "Word Removal Game",
    image: "./word-remover-game-screenshot.webp",
    alt: "Word Removal Game screenshot",
    summary: "A simple teaching tool that progressively removes words from songs to help children practice from memory.",
    impact: "Useful for live group settings where the leader needs a quick, flexible way to adjust the difficulty.",
    tech: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "View Live Site", href: "https://word-removal-game.netlify.app/" }],
  },
  {
    title: "Exercises Web App",
    image: "./exercises-web-app.webp",
    alt: "Exercises Web App screenshot",
    summary: "A fitness discovery app that uses third-party exercise data to help users browse workout movements.",
    impact: "Demonstrates API usage, search-oriented interfaces, and presenting outside data in a more usable format.",
    tech: ["React", "Material UI", "RapidAPI"],
    links: [{ label: "View Live Site", href: "https://react-exercises-web-app.netlify.app/" }],
  },
  {
    title: "Random Quote Generator",
    image: "./Screen Shot 2022-06-29 at 4.53.33 PM.webp",
    alt: "Random Quote Generator screenshot",
    summary: "An early React project for practicing API calls, state updates, and simple interface design.",
    impact: "Kept as a snapshot of learning progress and the foundation that led into more practical web applications.",
    tech: ["React", "CSS", "Axios", "RapidAPI"],
    links: [{ label: "View Live Site", href: "https://andrews-react-quote-generator.netlify.app/" }],
  },
  {
    title: "DevMountain Capstone",
    image: "./specs-capstone-screenshot.webp",
    alt: "DevMountain capstone project screenshot",
    summary: "A bootcamp capstone for searching movie titles and organizing owned or wanted movies.",
    impact: "Shows early full-stack learning, API usage, pagination, and turning a personal idea into a working application demo.",
    tech: ["React", "Node.js", "SQL", "Axios", "Netlify"],
    links: [{ label: "Watch Demo", href: "https://www.youtube.com/watch?v=vQob0MA61MM" }],
  },
  {
    title: "KPNailGeek Website Demo",
    image: "./kpnailgeek-demo-screenshot.webp",
    alt: "KPNailGeek website demo screenshot",
    summary: "An early business website concept for displaying services, pricing, and portfolio work.",
    impact: "Included as a first website milestone and a reference point for growth over time.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    links: [{ label: "Watch Demo", href: "https://www.youtube.com/watch?v=L8YZ12ITwsc" }],
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const earlyProjects = projects.filter((project) => !project.featured);

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
        <img
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${compact ? "h-44" : "h-56"}`}
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-bold !text-slate-950">{project.title}</h3>
        <p className="mb-4 text-base leading-7 !text-slate-700">{project.summary}</p>
        <p className="mb-5 text-sm leading-6 !text-slate-600">{project.impact}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium !text-blue-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {project.links.map((link) => {
            const openInNewTab = link.href.startsWith("http");
            return (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold !text-white hover:bg-blue-700"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const sectionRef = useScrollAnimation("fade-in", 0.1);

  return (
    <section ref={sectionRef} id="project-section" className="bg-slate-50 px-4 py-16 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] !text-blue-700">Selected Work</p>
          <h2 className="mb-4 text-3xl font-bold !text-slate-950 sm:text-4xl md:text-5xl">Projects Built Around Real Problems</h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 !text-slate-700">
            A focused look at business tools, client work, and practical apps. Each project highlights what it was built for, not just which tools were
            used.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mb-8 flex flex-col gap-3 border-t border-slate-200 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] !text-slate-500">Earlier Work</p>
            <h3 className="text-2xl font-bold !text-slate-950">Learning Milestones</h3>
          </div>
          <p className="max-w-2xl text-sm leading-6 !text-slate-600">
            These projects are kept smaller on purpose. They show progression, but the featured work above should carry the main professional story.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {earlyProjects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
