import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects.js';
import '../assets/styles/ProjectDetail.css';
import AutoSlideShow from '../components/AutoSlideShow.js';

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

            {project.id === 'meteo' && (
              <div className="project-slides">
                <h4>Slides de Soutenance :</h4>
                <AutoSlideShow images={[
                  '/assets/slides/meteoshield/Soutenance.png',
                  '/assets/slides/meteoshield/Soutenance(1).png',
                  '/assets/slides/meteoshield/Soutenance(2).png',
                  '/assets/slides/meteoshield/Soutenance(3).png',
                  '/assets/slides/meteoshield/Soutenance(4).png',
                  '/assets/slides/meteoshield/Soutenance(5).png',
                  '/assets/slides/meteoshield/Soutenance(6).png',
                  '/assets/slides/meteoshield/Soutenance(7).png',
                  '/assets/slides/meteoshield/Soutenance(80).png',
                  '/assets/slides/meteoshield/Soutenance(8).png',
                  '/assets/slides/meteoshield/Soutenance(9).png',
                  '/assets/slides/meteoshield/Soutenance(10).png',
                  '/assets/slides/meteoshield/Soutenance(11).png',
                  '/assets/slides/meteoshield/Soutenance(12).png',
                  '/assets/slides/meteoshield/Soutenance(13).png',
                  '/assets/slides/meteoshield/Soutenance(14).png',
                  '/assets/slides/meteoshield/Soutenance(15).png',
                  '/assets/slides/meteoshield/Soutenance(16).png',
                ]} />
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
