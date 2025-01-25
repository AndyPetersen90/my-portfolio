// function HomeSection() {
//   return (
//     <section className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('background1.jpeg')" }} id="home-section">
//       <div className="mb-[20%] md:mb-[15%] sm:mb-[10%]">
//         <img className="block mx-auto w-[15%] md:w-[20%] sm:w-[30%] pt-[10vh]" src="Logo-White.jpeg" alt="Logo" />
//         <h1
//           className="text-center mt-[8%] mb-0 pb-0 max-w-[90%] mx-auto break-words transform scale-[0.94] animate-[scale_4s_cubic-bezier(0.40,_1,_0.5,_1)_forwards]"
//           style={{
//             fontSize: "clamp(2rem, 10vw, 10rem)",
//             lineHeight: "1.2",
//           }}
//         >
//           Andrew M. Petersen
//         </h1>
//         <h2
//           className="text-center mt-[5%] mb-0 pt-[5%] max-w-[90%] mx-auto break-words leading-tight"
//           style={{
//             fontSize: "clamp(1.5rem, 8vw, 4.5rem)",
//             lineHeight: "1.2",
//           }}
//         >
//           Software Developer
//         </h2>
//       </div>
//     </section>
//   );
// }

// export default HomeSection;
function HomeSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('background1.jpeg')",
        backgroundSize: "cover", // Ensures the background covers the entire section
        backgroundPosition: "center",
      }}
      id="home-section"
    >
      <div className="mb-[20%] md:mb-[15%] sm:mb-[10%]">
        <img className="block mx-auto w-[15%] md:w-[20%] sm:w-[30%] pt-[10vh]" src="Logo-White.jpeg" alt="Logo" />

        {/* Name with Animation */}
        <h1
          className="text-center mt-[4%] mb-0 pb-0 max-w-[90%] mx-auto break-words transform scale-[0.94] animate-[scale_4s_cubic-bezier(0.40,_1,_0.5,_1)_forwards]"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)", // Dynamically adjusted for larger screens
            lineHeight: "1.2",
          }}
        >
          Andrew M. Petersen
        </h1>

        {/* Career Title */}
        <h2
          className="text-center mb-0 pt-[5%] max-w-[90%] mx-auto break-words leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)", // Dynamically adjusted for career title
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
