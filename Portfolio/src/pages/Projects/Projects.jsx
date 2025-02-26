import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-primary">Projeler</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
