function ResumeSection() {
  return (
    <section id="resume-section" className="bg-white text-black p-8">
      <h3 className="text-center text-2xl font-bold mb-4">Resume</h3>
      <p className="text-center text-lg mb-8">Interested in learning more about my professional experience? View my full resume below:</p>
      <div className="text-center">
        <a
          href="https://docs.google.com/document/d/1lp6trdtLPqfmoypVgaip5I1YE-JgXyStnUJ1HXzLXIM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
