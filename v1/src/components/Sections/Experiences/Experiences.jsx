import { experiences } from "../../../data/experiences";
import ExperienceCard from "../../Elements/ExperienceCard/ExperienceCard";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h1 className="experiences-title">Deneyimler</h1>
      <div className="experiences-item-container">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
