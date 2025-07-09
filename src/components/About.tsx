import { useState, useEffect, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutSection() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const photos = useMemo(() => {
    return [
      { source: "./aboutMePhotos/4th-july-fam.webp", alt: "4th of July Fam" },
      { source: "./aboutMePhotos/20230315_152739.webp", alt: "Baby Announcement" },
      { source: "./aboutMePhotos/20240517_171135.webp", alt: "Cancun Poolside" },
      { source: "./aboutMePhotos/Tyson-me-fishing.webp", alt: "Tyson and Me fishing" },
      { source: "./aboutMePhotos/Sky-Dive.webp", alt: "Me Sky Diving" },
      { source: "./aboutMePhotos/boys-camping.webp", alt: "Boys and Cousins Camping" },
      { source: "./aboutMePhotos/cancun-ocean-fam.webp", alt: "Family at the Ocean in Cancun" },
      { source: "./aboutMePhotos/fam-halloween.webp", alt: "Family Halloween Costumes" },
      { source: "./aboutMePhotos/fam-pumpkin-drop.webp", alt: "Family at the Pumpkin Drop" },
      { source: "./aboutMePhotos/family-archway-photo.webp", alt: "Family in Moab Photo" },
      { source: "./aboutMePhotos/hardrock-sign.webp", alt: "Family at the Hardrock Cancun Sign" },
      { source: "./aboutMePhotos/Hiking-tyson-me.webp", alt: "Me and Tyson Hiking" },
      { source: "./aboutMePhotos/me-and-tyson-shooting.webp", alt: "Me and Tyson Shooting" },
      { source: "./aboutMePhotos/me-coding.webp", alt: "Me Writing Coding" },
      { source: "./aboutMePhotos/me-dax-hiking.webp", alt: "Me and Dax hiking" },
      { source: "./aboutMePhotos/me-ziplining.webp", alt: "Me ziplining" },
      { source: "./aboutMePhotos/tyson-w-rocket.", alt: "Tyson with his model rocket" },
      { source: "./aboutMePhotos/rocket-launch-station.webp", alt: "Homemade rocket launch station" },
      { source: "./aboutMePhotos/tyson-robotics.webp", alt: "tyson playing with robots" },
      { source: "./aboutMePhotos/tyson-trout.webp", alt: "tyson with his first trout catch" },
      { source: "./aboutMePhotos/me-dax-tyson.webp", alt: "me dax tyson at the river" },
      { source: "./aboutMePhotos/me-and-alexis.webp", alt: "me scratching my dogs head on a car ride." },
    ];
  }, []);

  // Intersection Observer to only load images when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload images only when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    setTotalImages(photos.length);

    // Preload first 3 images immediately (reduced from 5 due to large file sizes)
    const preloadImages = photos.slice(0, 3);
    preloadImages.forEach((photo) => {
      const img = new Image();
      img.onload = () => setImagesLoaded((prev) => prev + 1);
      img.onerror = () => {
        console.warn(`Failed to load image: ${photo.source}`);
        setImagesLoaded((prev) => prev + 1); // Count as loaded even if failed
      };
      img.src = photo.source;
    });
  }, [isVisible, photos]);

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
    lazyLoad: "ondemand" as const,
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
    <section ref={sectionRef} className="bg-black w-full" id="about-section">
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
        {/* Loading indicator */}
        {isVisible && imagesLoaded < Math.min(3, totalImages) && (
          <div className="text-center mb-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-aliceblue"></div>
            <p className="text-aliceblue mt-2">
              Loading photos... ({imagesLoaded}/{Math.min(3, totalImages)})
            </p>
          </div>
        )}

        {isVisible && (
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div className="px-2 flex items-center justify-center" key={index}>
                <img
                  src={photo.source}
                  alt={`Slide ${photo.alt}`}
                  className="w-auto h-[50vh] max-h-[60vh] sm:max-h-[40vh] object-contain rounded-lg mx-auto carousel-image"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    willChange: "transform",
                    contain: "layout style",
                  }}
                  onError={() => {
                    console.warn(`Failed to load carousel image: ${photo.source}`);
                    // Could add a fallback image here
                  }}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
