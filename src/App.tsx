import AboutSection from "./components/About";
import HomeSection from "./components/Home";
import NavBar from "./components/Navbar";
import ProjectsSection from "./components/Projects";
import TechStackSection from "./components/TechStack";
function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
