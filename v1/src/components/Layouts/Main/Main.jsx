import { About, Experiences, Projects, Skills } from "../../Sections";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <section id="about" className="main-section">
        <About />
      </section>
      <section id="skills" className="main-section">
        <Skills />
      </section>
      <section id="experiences" className="main-section">
        <Experiences />
      </section>
      <section id="projects" className="main-section">
        <Projects />
      </section>
    </div>
  );
};

export default Main;
