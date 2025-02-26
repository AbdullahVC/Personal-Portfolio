import "./Sidebar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LogoDevIcon from "@mui/icons-material/LogoDev";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-main">
        <h1 className="sidebar-h1">Abdullah V. Çoşkun</h1>
        <h2 className="sidebar-h2">
          Full Stack Web Developer | ASP.NET & React
        </h2>
        <p className="sidebar-p">
          NET Core, Entity Framework, React ve modern UI/UX prensipleriyle
          performanslı ve ölçeklenebilir projeler üretiyorum.
        </p>
      </div>

      <nav className="sidebar-nav">
        <a href="#about">Hakkımda</a>
        <a href="#experience">Deneyimler</a>
        <a href="#projects">Projeler</a>
      </nav>

      <div className="sidebar-social">
        <a
          href="https://www.linkedin.com/in/abdullahvcoskun/"
          target="_blank"
          rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/abdullahvcoskun"
          target="_blank"
          rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="mailto:info@abdullahvcoskun.dev"
          target="_blank"
          rel="noreferrer">
          <EmailIcon />
        </a>
        <a
          href="https://www.instagram.com/abdullahvcoskun/"
          target="_blank"
          rel="noreferrer">
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/abdullahvcoskun"
          target="_blank"
          rel="noreferrer">
          <XIcon />
        </a>
        <a
          href="https://dev.to/abdullahvcoskun"
          target="_blank"
          rel="noreferrer">
          <LogoDevIcon />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
