import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="border border-gray-600 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold text-primary">
        {experience.title}
      </h2>
      <h3 className="text-lg text-gray-400">
        {experience.company} ({experience.duration})
      </h3>
      <p className="mt-2 text-gray-300">{experience.description}</p>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperienceCard;
