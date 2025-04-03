import "./Sidebar.css";
import { Skills, SocialLinks } from "../../index";
import { useState } from "react";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("#about");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-main">
        <h1 className="sidebar-h1">Abdullah V. Çoşkun</h1>
        <h2 className="sidebar-h2 chakra-petch-regular">
          Full Stack Web Developer <br /> ASP.NET & React
        </h2>
      </div>

      <nav className="sidebar-nav">
        <a
          href="#about"
          onClick={() => handleClick("#about")}
          className={activeLink === "#about" ? "active" : ""}>
          Hakkımda
        </a>
        <a
          href="#skills"
          onClick={() => handleClick("#skills")}
          className={activeLink === "#skills" ? "active" : ""}>
          Yetenekler
        </a>
        <a
          href="#experiences"
          onClick={() => handleClick("#experiences")}
          className={activeLink === "#experiences" ? "active" : ""}>
          Deneyimler
        </a>
        <a
          href="#projects"
          onClick={() => handleClick("#projects")}
          className={activeLink === "#projects" ? "active" : ""}>
          Projeler
        </a>
      </nav>

      <SocialLinks />
    </div>
  );
};
export default Sidebar;
