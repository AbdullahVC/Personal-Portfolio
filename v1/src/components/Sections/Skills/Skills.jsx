import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h1 className="skills-title">Yeteneklerim</h1>
      <div className="skills-grid">
        {/* FRONTEND */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="devicon-materialui-plain"></i>
              <span>Material-UI</span>
            </div>
            <div className="skill-item">
              <i className="devicon-tailwindcss-plain"></i>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-dotnetcore-plain"></i>
              <span>.NET Core</span>
            </div>
            <div className="skill-item">
              <i className="devicon-postgresql-plain"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="skill-item">
              <i className="devicon-mysql-plain"></i>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-git-plain"></i>
              <span>Git</span>
            </div>
            <div className="skill-item">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <i className="devicon-docker-plain"></i>
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <i className="devicon-figma-plain"></i>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
