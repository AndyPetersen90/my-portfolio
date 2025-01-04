function ProjectsSection() {
  return (
    <section className="bg-white py-[5vh] px-[10vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="border border-[#ccc] rounded-lg p-[2rem] bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-[1.5em] text-[#333] text-center mb-[1rem]">Random Quote Generator</h3>
          <a href="https://andrews-react-quote-generator.netlify.app/" target="_blank">
            <img
              className="w-full h-[200px] object-cover rounded-lg mb-[1rem]"
              src="./Screen Shot 2022-06-29 at 4.53.33 PM.png"
              alt="Random Quote Generator Screenshot"
            />
          </a>
        </div>

        <div className="border border-[#ccc] rounded-lg p-[2rem] bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-[1.5em] text-[#333] text-center mb-[1rem]">KPNailGeek Website Demo</h3>
          <a href="https://www.youtube.com/watch?v=L8YZ12ITwsc" target="_blank">
            <img
              className="w-full h-[200px] object-cover rounded-lg mb-[1rem]"
              src="./kpnailgeek-demo-screenshot.png"
              alt="KPNailGeek Website Demo Screenshot"
            />
          </a>
        </div>

        <div className="border border-[#ccc] rounded-lg p-[2rem] bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-[1.5em] text-[#333] text-center mb-[1rem]">Exercises Web App</h3>
          <a href="https://react-exercises-web-app.netlify.app/" target="_blank">
            <img className="w-full h-[200px] object-cover rounded-lg mb-[1rem]" src="./exercises-web-app.png" alt="Exercises Web App Screenshot" />
          </a>
        </div>

        <div className="border border-[#ccc] rounded-lg p-[2rem] bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-[1.5em] text-[#333] text-center mb-[1rem]">Specs Capstone Project</h3>
          <a href="https://fes-movie-collection.herokuapp.com/" target="_blank">
            <img
              className="w-full h-[200px] object-cover rounded-lg mb-[1rem]"
              src="./specs-capstone-screenshot.png"
              alt="Specs Capstone Project Screenshot"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
