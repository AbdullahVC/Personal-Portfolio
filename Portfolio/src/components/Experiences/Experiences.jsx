import { experiences } from "../../data/experiences";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experiences = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-primary">Deneyimler</h1>
      <div className="mt-6 space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
