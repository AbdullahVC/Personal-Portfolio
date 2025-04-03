import { projects } from "../../../data/projects";
import ProjectCard from "../../Elements/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h1 className="projects-title">Projeler</h1>
      <div className="projects-item-container">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
