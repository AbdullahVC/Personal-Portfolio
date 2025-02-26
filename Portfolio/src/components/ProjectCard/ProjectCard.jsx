import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-600 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold text-primary">{project.name}</h2>
      <p className="mt-2 text-gray-300">{project.description}</p>
      <div className="mt-4 space-x-2">
        <Button variant="outlined" href={project.github} target="_blank">
          GitHub
        </Button>
        <Button variant="contained" href={project.liveDemo} target="_blank">
          Live Demo
        </Button>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
