import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutSection() {
  const photos = [
    "./aboutMePhotos/4th-july-fam.jpg",
    "./aboutMePhotos/20230315_152739.jpg",
    "./aboutMePhotos/20240517_171135.jpg",
    "./aboutMePhotos/Tyson-me-fishing.jpeg",
    "./aboutMePhotos/Sky-Dive.jpeg",
    "./aboutMePhotos/boys-camping.jpg",
    "./aboutMePhotos/cancun-ocean-fam.jpg",
    "./aboutMePhotos/fam-halloween-2022.jpg",
    "./aboutMePhotos/fam-halloween.jpg",
    "./aboutMePhotos/fam-pumpkin-drop.jpg",
    "./aboutMePhotos/family-archway-photo.jpg",
    "./aboutMePhotos/hardrock-sign.jpg",
    "./aboutMePhotos/Hiking-tyson-me.jpeg",
    "./aboutMePhotos/HQ3A2177.jpg",
    "./aboutMePhotos/me-and-tyson-shooting.jpg",
    "./aboutMePhotos/me-coding.jpg",
    "./aboutMePhotos/me-dax-hiking.jpg",
    "./aboutMePhotos/me-ziplining.jpg",
    "./aboutMePhotos/tyson-w-rocket.jpg",
    "./aboutMePhotos/rocket-launch-station.jpg",
    "./aboutMePhotos/tyson-robotics.jpg",
    "./aboutMePhotos/tyson-trout.jpg",
    "./aboutMePhotos/me-dax-tyson.jpg",
    "./aboutMePhotos/me-and-alexis.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="bg-black w-full" id="about-section">
      <h3 className="pt-[4vh] text-aliceblue text-center text-3xl">About Me</h3>
      <div className="flex items-center justify-center pt-8 pb-16 px-8">
        <div className="w-full text-center mb-12">
          <p className="text-aliceblue text-[2vh] mb-6">
            I'm a full-stack JavaScript developer with expertise in React, TypeScript, Node.js, and MongoDB, complemented by experience with
            PostgreSQL, AWS S3, and Lambda. My focus is on crafting clean, maintainable code that solves real-world problems. Currently expanding my
            backend skills with Python, I'm committed to continuous learning in this ever-evolving tech landscape.
          </p>
          <p className="text-aliceblue text-[2vh] mb-6">
            My background in sales and technical support has given me a unique perspective on user needs and communication. This experience shapes my
            development approach: I build for people, not just ideal use cases. I've created internal tools and web applications with a strong
            emphasis on user-centered design and clear functionality.
          </p>
          <p className="text-aliceblue text-[2vh] mb-6">
            When I'm not coding, you'll find me with my family, working on woodworking projects, or enjoying outdoor activities like fishing and
            hiking. These interests help me maintain a balanced perspective and bring fresh creativity to my development work.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center pb-16 px-8 md:px-16">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div className="px-2 flex items-center justify-center" key={index}>
              <img src={photo} alt={`Slide ${index}`} className="w-auto h-[50vh] max-h-[60vh] sm:max-h-[40vh] object-contain rounded-lg mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AboutSection;
