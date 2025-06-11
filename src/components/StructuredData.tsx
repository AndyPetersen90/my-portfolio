import React from "react";

const StructuredData: React.FC = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Petersen",
    jobTitle: "Software Developer",
    url: "https://andrewmpetersen.com",
    sameAs: [
      // Add your social media profiles here
      "https://github.com/AndyPetersen90",
      "https://www.linkedin.com/in/andrew-andy-petersen/",
      // Add other social profiles
    ],
    knowsAbout: ["Web Development", "Full Stack Developer", "Software Engineering", "Frontend Development", "Backend Development"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />;
};

export default StructuredData;
