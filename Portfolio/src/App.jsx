import { About, Experience, Projects, Sidebar, Cursor } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <div className="main-content">
        <Cursor />
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
    </div>
  );
}

export default App;
