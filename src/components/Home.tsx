function HomeSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('background1.jpeg')", height: "100vh" }}
      id="home-section"
    >
      <div className="mb-[30%]">
        <img className="block mx-auto w-[15%] pt-[10vh]" src="Logo-White.jpeg" alt="Logo" />
        <h1 className="text-center text-[700%] mt-[8%] mb-0 pb-0 transform scale-[0.94] animate-[scale_4s_cubic-bezier(0.40,_1,_0.5,_1)_forwards]">
          Andrew Petersen
        </h1>
        <h2 className="text-center text-[350%] m-0 pt-[5%]">Software Developer</h2>
      </div>
    </section>
  );
}

export default HomeSection;
