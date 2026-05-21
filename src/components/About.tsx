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
    <section ref={sectionRef} className="bg-slate-950 px-4 py-16 sm:px-6 md:px-8 lg:px-12" id="about-section">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">About</p>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">A Developer Who Understands People and Process</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I build full-stack web applications with a focus on clear user experiences, maintainable code, and practical business value. My work
                includes internal tools, customer-facing forms, marketing sites, and interactive apps.
              </p>
              <p>
                Before moving deeper into software engineering, I worked in sales and technical support. That background helps me ask better
                questions, explain trade-offs clearly, and build software around real user needs instead of assumptions.
              </p>
              <p>
                Outside of work, I spend time with my family, build woodworking projects, and get outdoors whenever I can. I like bringing that same
                hands-on, problem-solving mindset into the software I build.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-2 text-xl font-bold text-white">What I Bring</h3>
              <p className="text-slate-300">
                A mix of engineering ability, customer empathy, and practical communication that helps teams turn messy problems into usable
                products.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-2 text-xl font-bold text-white">How I Work</h3>
              <p className="text-slate-300">
                I care about simple interfaces, clear ownership, steady improvement, and building features that are understandable after the first
                version ships.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-2 text-xl font-bold text-white">Current Focus</h3>
              <p className="text-slate-300">
                Deepening backend skills, improving system design judgment, and continuing to build software that solves grounded, everyday problems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white">A Little More Personal</h3>
            <p className="mx-auto max-w-2xl text-slate-300">
              A small photo reel keeps the site human without taking attention away from the professional work above.
            </p>
          </div>

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
      </div>
    </section>
  );
}

export default AboutSection;
