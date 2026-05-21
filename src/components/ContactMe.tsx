function ContactMeSection() {
  return (
    <section id="contact-section" className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Let’s Talk About the Next Thing to Build</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          I’m open to software engineering roles, practical web projects, and conversations with teams that care about building useful products.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:andrew.petersen.webdev+portfolio@gmail.com"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-400"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-andy-petersen/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/AndyPetersen90"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            View GitHub
          </a>
        </div>

        <p className="text-sm text-slate-400">Based in the United States. Available for remote-friendly teams and practical web application work.</p>
      </div>
    </section>
  );
}

export default ContactMeSection;
