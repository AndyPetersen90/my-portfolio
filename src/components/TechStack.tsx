import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TechStackSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };
  return (
    <section className="bg-black" id="tech-stack-section">
      <h2 className="pt-[4vh] text-aliceblue text-center text-2xl mb-4">Tech Stack</h2>
      <div className="flex flex-col justify-center pb-16 px-16">
        <Slider {...settings}>
          <div className="px-4">
            <img id="devicon" alt="React Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="HTML5 Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="CSS3 Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="Javascript Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="NodeJs Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="PostgressSQL Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          </div>
          <div className="px-4">
            <img id="devicon" alt="Git Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          </div>
          <div className="px-4">
            <img
              className="bg-white"
              id="devicon"
              alt="Github Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </div>
          <div className="px-4">
            <img
              id="devicon"
              alt="Typescript Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
          </div>
          <div className="px-4">
            <img
              id="devicon"
              alt="MongoDB Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </div>
          <div className="px-4">
            <img
              className="bg-white"
              id="devicon"
              alt="Express Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            />
          </div>
          <div className="px-4">
            <img id="devicon" alt="Postman Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
          </div>
          <div className="px-4">
            <img
              id="devicon"
              alt="Material UI Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default TechStackSection;
