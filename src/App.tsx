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
          <HomeSection />
          <ProjectsSection />
          <ResumeSection />
          <TechStackSection />
          <AboutSection />
          <ContactMeSection />
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
