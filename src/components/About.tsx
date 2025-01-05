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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <section className="bg-black w-full" id="about-section">
      <h3 className="pt-[4vh] text-aliceblue text-center text-3xl">About Me</h3>
      <div className="flex items-center justify-center pt-8 pb-16 px-8">
        <div className="w-full text-center mb-12">
          <p className="text-aliceblue text-[2vh] mb-6">
            My journey to becoming a Web Developer began when I worked as a phone sales representative at a software company. Initially, I believed
            web development required a traditional 4-year degree. However, getting to know the talented developers at the company opened my eyes to
            alternative paths, including self-teaching and bootcamps. Inspired, I started exploring programming and created my first HTML and CSS
            project—a blog website about my family. Watching the website come to life through the code I wrote sparked a deep excitement and curiosity
            about what I could build with my hands.
          </p>
          <p className="text-aliceblue text-[2vh] mb-6">
            In 2022, after much consideration, my wife and I decided it was time for me to pursue a career that brought me joy and opportunities for
            creativity and growth. I enrolled in DevMountain’s Web Development program, where I expanded my knowledge of web technologies and honed my
            skills. Each project and new skill further fueled my passion for development and solidified my confidence in this career path.
          </p>
          <p className="text-aliceblue text-[2vh] mb-6">
            When I’m not coding, I enjoy spending time with my family—my wife, our two sons, and our Pomskey, Alexis. You might find me working on
            woodworking projects, fishing, hiking, watching movies, or staying active through exercise. These activities help me stay balanced and
            inspire my creativity.
          </p>
          <p className="text-aliceblue text-[2vh]">
            Becoming a developer has opened up countless possibilities for me and my family. I’m excited about the future and the chance to contribute
            to meaningful projects that solve real-world problems, one line of code at a time.
          </p>
        </div>
      </div>
      {/* Carousel Section */}
      <div className="flex flex-col justify-center pb-16 px-16">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div className="px-2" key={index}>
              <img src={photo} alt="Image 1" className="w-full h-[20vh] object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AboutSection;
