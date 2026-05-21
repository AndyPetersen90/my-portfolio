import React from "react";

const SITE_URL = "https://andrewmpetersen.com";
const SITE_NAME = "Andrew Petersen Portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Portfolio of Andrew Petersen, a full-stack software engineer building practical web apps, internal tools, and user-focused software.",
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Andrew Petersen | Full-Stack Software Engineer",
      description:
        "Explore practical web apps, internal tools, and selected project work from full-stack software engineer Andrew Petersen.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Andrew Petersen",
      jobTitle: "Full-Stack Software Engineer",
      url: SITE_URL,
      sameAs: [
        "https://github.com/AndyPetersen90",
        "https://www.linkedin.com/in/andrew-andy-petersen/",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "React",
        "TypeScript",
        "Node.js",
        "Frontend Development",
        "Backend Development",
        "Internal Tools",
        "Cloud Services",
      ],
    },
  ],
};

const StructuredData: React.FC = () => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  );
};

export default StructuredData;
