function ResumeSection() {
  return (
    <section id="resume-section" className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] !text-blue-700">Experience</p>
        <h2 className="mb-4 text-3xl font-bold !text-slate-950 sm:text-4xl">Want the Full Career Snapshot?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 !text-slate-700">
          My resume gives a more complete look at my professional background, technical experience, and the roles that shaped how I approach software
          work.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://docs.google.com/document/d/1lp6trdtLPqfmoypVgaip5I1YE-JgXyStnUJ1HXzLXIM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-slate-950 px-6 py-3 font-semibold !text-white hover:bg-blue-700"
          >
            View Resume
          </a>
          <a href="#contact-section" className="inline-block rounded-lg border border-slate-300 px-6 py-3 font-semibold !text-slate-900 hover:bg-white">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
