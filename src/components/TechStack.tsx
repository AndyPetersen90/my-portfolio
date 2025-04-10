import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TechStackSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const icons = [
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML5",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "NodeJs",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgressSQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      className: "bg-white rounded-lg",
    },
    {
      name: "Typescript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Express",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      className: "bg-white rounded-lg",
    },
    // {
    //   name: "Postman",
    //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    // },
    {
      name: "Material UI",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
      name: "Tailwind",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" ,
    },
  ];

  return (
    <section className="bg-black" id="tech-stack-section">
      <h2 className="pt-[4vh] text-aliceblue text-center text-3xl mb-4">Tech Stack</h2>
      <div className="flex flex-col justify-center pb-16 px-8 md:px-16">
        <Slider {...settings}>
          {icons.map((icon, index) => (
            <div className="px-4" key={index}>
              <img id="devicon" alt={icon.name} src={icon.url} className={`max-w-[100px] mx-auto ${icon.className || ""}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TechStackSection;
