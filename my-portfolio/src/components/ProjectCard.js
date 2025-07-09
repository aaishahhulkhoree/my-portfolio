import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Link>
  );
};

export default ProjectCard;
