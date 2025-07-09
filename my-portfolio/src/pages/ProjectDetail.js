import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects.js';
import '../assets/styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Projet introuvable.</p>;

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.details}</p>

        {project.images && (
            <div className="project-images">
                {project.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${project.title} - ${idx + 1}`} />
                ))}
            </div>
            )}

            {project.collaborators && (
            <div className="project-collab">
                <h4>Collaboration :</h4>
                <ul>
                {project.collaborators.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
                </ul>
            </div>
            )}

        {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
                Voir le projet
            </a>
        )}
      <br />
      <Link to="/projects" className="btn">← Retour aux projets</Link>
    </section>
  );
};

export default ProjectDetail;
