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

      <div className="flex flex-col items-center justify-center h-[75vh] relative z-10">
        <img
          className="w-[15%] md:w-[20%] sm:w-[30%] logo-image"
          src="/Logo-White.webp"
          alt="Andrew Petersen's Logo"
          loading="eager"
          decoding="async"
        />

        <h1 className="text-white text-center mt-[2%] mb-0 pb-0 max-w-[90%] mx-auto break-words transform scale-[0.94] animate-[scale_6s_cubic-bezier(0.40,_1,_0.5,_1)_forwards] hero-title">
          Andrew M. Petersen
        </h1>

        <h2 className="text-white/90 text-center mb-0 pt-[3%] max-w-[90%] mx-auto break-words leading-tight hero-subtitle">Software Engineer</h2>
      </div>
    </section>
  );
}

export default HomeSection;
