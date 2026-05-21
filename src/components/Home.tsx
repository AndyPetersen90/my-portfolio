import { useState, useEffect } from "react";

function HomeSection() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.onload = () => setBackgroundLoaded(true);
    img.onerror = () => {
      console.warn("Background image failed to load, using fallback");
      setBackgroundLoaded(true); // Still set to true to remove loading state
    };
    img.src = "/background1.webp";
  }, []);

  return (
    <section className={`dark relative overflow-hidden ${backgroundLoaded ? "background-loaded" : "background-loading"}`} id="home-section">
      {/* Loading overlay with better performance */}
      {!backgroundLoaded && <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 animate-pulse" />}

      <div className="absolute inset-0 bg-black/60" />

      <div className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center relative z-10">
        <img
          className="mb-8 w-24 sm:w-28 md:w-32 logo-image"
          src="/Logo-White.webp"
          alt="Andrew Petersen's Logo"
          loading="eager"
          decoding="async"
        />

        <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-blue-100">
          Full-Stack Software Engineer
        </p>

        <h1 className="text-white text-center mb-6 max-w-5xl mx-auto break-words transform scale-[0.94] animate-[scale_6s_cubic-bezier(0.40,_1,_0.5,_1)_forwards] hero-title">
          Andrew M. Petersen
        </h1>

        <h2 className="text-white/95 text-center mb-6 max-w-4xl mx-auto break-words leading-tight text-3xl sm:text-4xl md:text-5xl font-semibold">
          I build practical web apps and internal tools that help people work faster.
        </h2>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-white/80">
          I focus on clean user experiences, dependable features, and software that solves real business problems instead of just looking good in a
          screenshot.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#project-section"
            className="rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-400"
          >
            View Featured Work
          </a>
          <a
            href="#contact-section"
            className="rounded-lg border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white hover:bg-white/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
