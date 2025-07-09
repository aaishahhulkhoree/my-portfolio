import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../assets/styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
