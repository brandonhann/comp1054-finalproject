import React from "react";
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Blog from "./components/Blog";
import BlogPostPage from "./components/BlogPostPage";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css"

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin";

  return (
    <div className="bg wrapper">
      {!isAdminRoute && (
        <nav>
          <div>
            <Link
              to="/blog"
              className={`blogLink ${location.pathname === "/blog"
                ? "linkActive"
                : "linkNotActive"
                }`}
            >
              <FontAwesomeIcon icon={faBlog} /> Blog
            </Link>
            <Link
              to="/"
              className={`aboutLink ${location.pathname === "/"
                ? "linkActive"
                : "linkNotActive"
                }`}
            >
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
            <Link
              to="/projects"
              className={`projectsLink ${location.pathname === "/projects"
                ? "linkActive"
                : "linkNotActive"
                }`}
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Link>
          </div>
        </nav>
      )}

      <main>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogPostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;