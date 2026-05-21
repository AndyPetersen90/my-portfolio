type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Clear, responsive interfaces that are easy to use and maintain.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Material UI", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description: "Application logic, APIs, and services that support real workflows.",
    skills: ["Node.js", "Express", "Python", "Prisma", "REST APIs"],
  },
  {
    title: "Data",
    description: "Structured data storage and practical data access patterns.",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Database Design"],
  },
  {
    title: "Cloud & Tools",
    description: "Deployment, file storage, version control, and production support.",
    skills: ["AWS S3", "AWS Lambda", "Vercel", "Git", "GitHub"],
  },
];

function TechStackSection() {
  return (
    <section className="bg-slate-950 px-4 py-16 sm:px-6 md:px-8 lg:px-12" id="tech-stack-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Skills</p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Tools I Use to Build Reliable Web Apps</h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            The goal is not to collect logos. The goal is to choose the right tools, keep the experience simple, and ship software people can depend
            on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
              <h3 className="mb-3 text-2xl font-bold text-white">{group.title}</h3>
              <p className="mb-5 text-sm leading-6 text-slate-300">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-sm font-medium text-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
