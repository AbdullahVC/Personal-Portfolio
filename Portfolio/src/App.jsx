import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
