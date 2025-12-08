// src/App.js
import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Skills from "./components/pages/Skills";
import { useGlobalContext } from "./context/GlobalContext";
import "./assets/styles/App.css";
import Project from "./components/pages/Project";

function App() {
  const { isDarkTheme } = useGlobalContext();
  const themeClass = isDarkTheme ? "app-dark" : "app-light";

  return (
    <div className={`App ${themeClass}`}>
      <Header />
      <main>
        {/* Each section is a full component, ready to render its content */}
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
export default App;
