import { Analytics } from "@vercel/analytics/react";
import AboutSection from "./components/About";
import ContactMeSection from "./components/ContactMe";
import FooterSection from "./components/Footer";
import HomeSection from "./components/Home";
import NavBar from "./components/Navbar";
import ProjectsSection from "./components/Projects";
import ResumeSection from "./components/Resume";
import TechStackSection from "./components/TechStack";
function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <TechStackSection />
      <ResumeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactMeSection />
      <FooterSection />
      <Analytics />
    </div>
  );
}

export default App;
