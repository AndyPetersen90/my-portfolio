import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ProjectsSection() {
  const sectionRef = useScrollAnimation("fade-in", 0.1);
  const firstProjectRef = useScrollAnimation("slide-up", 0.2);

  return (
    <section ref={sectionRef} id="project-section" className="bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-12 text-black">Past Projects</h2>
      <div className="grid grid-cols-1 project-1:grid-cols-1 project-2:grid-cols-2 project-3:grid-cols-3 project-4:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* ASL Quote Requst Card */}
        <div>
          <a href="https://quote.allseasonlighting.com/" target="_blank" className="block">
            <div
              ref={firstProjectRef}
              className="group relative border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="relative">
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  ASL Quote Request
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./asl-quote-screenshot.png"
                  alt="All Season Lighting Static Page"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black mb-2 underline">
                      Tech Used: React | Typescript | Vite | OAuth | Tailwind | Javascript | Prisma | Node.js | AWS | Vercel
                    </p>
                    <p className="text-sm md:text-base !text-black">
                      ASLForms - A Full-Stack Web Application A modern web application built with React, TypeScript, and Express that helps manage and
                      process ASL-related forms. Features include secure file uploads via AWS S3, type-safe database operations with Prisma, and a
                      responsive UI built with TailwindCSS. The application demonstrates full-stack development capabilities, modern web architecture,
                      and cloud integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Word Fishing Game Card */}
        <div>
          <a href="https://word-fishing.netlify.app/" target="_blank" className="block">
            <div
              ref={firstProjectRef}
              className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative">
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  Word Fishing Game
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./word-fishing-game-image.png"
                  alt="Word Fishing Game Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black mb-2 underline">Tech Used: React | Typescript | Tailwind | Javascript</p>
                    <p className="text-sm md:text-base !text-black">
                      In my church, I help lead the children in singing religious music. I built this quick little word fishing game. Its a simple
                      game that is based on Hangman, but more kid friendly. When a letter is guessed and it is part of the word, the letter is shown
                      in the word as well as the fist moves closer to the fisherman. This was a prett simple project, but it was fun to be able to
                      work with animations and CSS to make it look nice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Word Removal Game */}
        <div>
          <a href="https://word-removal-game.netlify.app/" target="_blank" className="block">
            <div
              ref={firstProjectRef}
              className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative">
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  Word Removal Game
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./word-remover-game-screenshot.png"
                  alt="Word Remover Game Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black mb-2 underline">Tech Used: React | Typescript | Tailwind | Javascript</p>
                    <p className="text-sm md:text-base !text-black">
                      In my church, I help lead the children in singing religious music. I built this quick little website to allow me to easily test
                      the kids memory by progressively removing the words to any song they are learning. This was a fun and quick project to build. I
                      was able to play with custom fond sizing and global themes with Tailwind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* All Season Lighting Static */}
        <div>
          <a href="https://www.allseasonlighting.com/" target="_blank" className="block">
            <div
              ref={firstProjectRef}
              className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative">
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  All Season Lighting
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./all-season-lighting-screenshot.png"
                  alt="All Season Lighting Static Page"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">
                      Tech Used: Astro | Tailwind | Typescript | Lambda | Vercel
                    </p>
                    <p className="text-sm md:text-base !text-black text-center">
                      Helped build a static page for a former coworker. This is static page for a company that offers perminent lighting solutions for
                      homes. This is designed with a few images of past work as well as a option for people to request quotes or request to become a
                      seller. Both of these forms use an AWS Lamda function to send the requests to the company's email. This project was fun as I got
                      to use Astro and practice building a static page with serverside and clientside rendering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Past Work at Sunrebel */}
        <div>
          <a href="https://www.youtube.com/playlist?list=PLlFtToxLwJR73Ewb-pY2kPb0RQsUpGNB3" target="_blank" className="block">
            <div className="relative">
              <div
                ref={firstProjectRef}
                className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  Past Work at Sunrebel
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./sunrebel-proposals-image.png"
                  alt="Sunrebel Company Static Page"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">
                      Tech Used: React | Typescript | MUI | Zustand | Tanstack Query | Express | Node.js | MongoDB | AWS
                    </p>
                    <p className="text-sm md:text-base !text-black text-center">
                      This is a link to a youtube playlist of some short screen recordings I made of some of the projects I completed while working at
                      Sunrebel.
                      <br />
                      There are many more, but due to the nature of the code, I am not able to record those.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Exercise App */}
        <div>
          <a href="https://react-exercises-web-app.netlify.app/" target="_blank" className="block">
            <div className="relative">
              <div
                ref={firstProjectRef}
                className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  Exercises Web App
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./exercises-web-app.png"
                  alt="Exercises Web App Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">Tech Used: React | MUI | RapidAPI</p>
                    <p className="text-sm md:text-base !text-black text-center">
                      This was another practice website. I built this in react as well as using a third party API to get the exercise data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Random Quote Generator */}
        <div>
          <a href="https://andrews-react-quote-generator.netlify.app/" target="_blank" className="block">
            <div className="relative">
              <div
                ref={firstProjectRef}
                className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  Random Quote Generator
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./Screen Shot 2022-06-29 at 4.53.33 PM.png"
                  alt="Random Quote Generator Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">Tech Used: React | CSS | Axios | RapidAPI</p>
                    <p className="text-sm md:text-base !text-black text-center">
                      This was a simple website to generate random quotes. I used this project to practice using React and API calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* DevMountain Capstone Project */}
        <div>
          <a href="https://www.youtube.com/watch?v=vQob0MA61MM" target="_blank" className="block">
            <div className="relative">
              <div
                ref={firstProjectRef}
                className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  DevMountain Capstone Project
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./specs-capstone-screenshot.png"
                  alt="Specs Capstone Project Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">
                      Tech Used: HTML | CSS | React | Node.js | Axios | SQL | Netlify | RapidAPI
                    </p>
                    <p className="text-sm md:text-base !text-black text-center">
                      This was my final project for DevMountain. This project was my first use of an API. The API allowed me to search for movie
                      titles with a search function. I could then paginate if necessary. Additionally I designed this website to allow for storing a
                      list of movies I already own, and movies I would like to own. <br />
                      <br /> Currently it is down for updates and moving to a new hosting service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* KPNailGeek Website Demo */}
        <div>
          <a href="https://www.youtube.com/watch?v=L8YZ12ITwsc" target="_blank" className="block">
            <div className="relative">
              <div
                ref={firstProjectRef}
                className="group border border-[#ccc] rounded-lg p-4 md:p-6 lg:p-8 bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <h3 className="text-xl md:text-2xl !text-black text-center mb-4 transition-all duration-300 group-hover:blur-3xl">
                  KPNailGeek Website Demo
                </h3>
                <img
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:blur-3xl border-2 border-gray-300 shadow-md"
                  src="./kpnailgeek-demo-screenshot.png"
                  alt="KPNailGeek Website Demo Screenshot"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-[95%] max-w-[95%] px-2">
                    <p className="text-sm md:text-base !text-black text-center mb-2 underline">
                      Tech Used: HTML | CSS | Javascript | Node.js | Axios | Express
                    </p>
                    <p className="text-sm md:text-base !text-black text-center">
                      This was my first ever website. It was my mid bootcamp project. It was designed to be a simple website displaying my wifes nail
                      tech business, pricing, and portfolio work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* <div className="border border-[#ccc] rounded-lg p-[2rem] bg-[#f9f9f9] hover:bg-[#e0e0e0] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-[1.5em] !text-black text-center mb-[1rem]">Sunrebel Info Page (Previous Role)</h3>
                <a href="https://www.sunrebel.com/" target="_blank">
                  <img
                    className="w-full h-[200px] object-cover rounded-lg mb-[1rem]"
                    src="./sunrebel-proposals-image.png"
                    alt="Sunrebel Company Static Page"
                  />
                </a>
                <p className="text-[1em] !text-black text-center mb-[1rem]">
                  This is the main landing page for the company I previously worked at. This will go over what the web app was designed to do and how it was
                  used.
                </p>
              </div> */}
      </div>
    </section>
  );
}

export default ProjectsSection;
