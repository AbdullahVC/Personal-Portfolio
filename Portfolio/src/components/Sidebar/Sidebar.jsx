import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-background p-5 text-lightGray">
      <h1 className="text-2xl font-bold text-primary">Portföy</h1>
      <nav className="mt-5 space-y-4">
        <Link to="/" className="block hover:text-primary">
          Hakkımda
        </Link>
        <Link to="/experiences" className="block hover:text-primary">
          Deneyimler
        </Link>
        <Link to="/projects" className="block hover:text-primary">
          Projeler
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
