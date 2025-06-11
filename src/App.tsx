import { Analytics } from "@vercel/analytics/react";
import AboutSection from "./components/About";
import ContactMeSection from "./components/ContactMe";
import FooterSection from "./components/Footer";
import HomeSection from "./components/Home";
import NavBar from "./components/Navbar";
import ProjectsSection from "./components/Projects";
import ResumeSection from "./components/Resume";
import TechStackSection from "./components/TechStack";
import BackToTop from "./components/BackToTop";
import StructuredData from "./components/StructuredData";

function App() {
  return (
    <>
      <StructuredData />
      <div className="relative">
        <NavBar />
        <main>
          <section id="home-section" className="min-h-screen dark">
            <HomeSection />
          </section>
          <section id="tech-stack-section" className="dark">
            <TechStackSection />
          </section>
          <section id="resume-section" className="light">
            <ResumeSection />
          </section>
          <section id="about-section" className="dark">
            <AboutSection />
          </section>
          <section id="project-section" className="light">
            <ProjectsSection />
          </section>
          <section id="contact-section" className="dark">
            <ContactMeSection />
          </section>
        </main>
        <footer className="light">
          <FooterSection />
        </footer>
        <BackToTop />
      </div>
      <Analytics />
    </>
  );
}

export default App;
