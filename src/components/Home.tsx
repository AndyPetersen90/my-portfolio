function HomeSection() {
  return (
    <section
      className="dark relative"
      style={{
        backgroundImage: "url('background1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home-section"
    >
      <div className="flex flex-col items-center justify-center h-[75vh]">
        <img className="w-[15%] md:w-[20%] sm:w-[30%]" src="Logo-White.jpeg" alt="Andrew Petersen's Logo" />

        <h1
          className="text-white text-center mt-[2%] mb-0 pb-0 max-w-[90%] mx-auto break-words transform scale-[0.94] animate-[scale_6s_cubic-bezier(0.40,_1,_0.5,_1)_forwards]"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            lineHeight: "1.2",
          }}
        >
          Andrew M. Petersen
        </h1>

        <h2
          className="text-white/90 text-center mb-0 pt-[3%] max-w-[90%] mx-auto break-words leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            lineHeight: "1.2",
          }}
        >
          Software Developer
        </h2>
      </div>
    </section>
  );
}

export default HomeSection;
