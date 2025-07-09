import React from 'react';
import '../assets/styles/About.css';
import { FaCode, FaProjectDiagram, FaLanguage, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2>À propos de moi</h2>

      <p><FaCode className="icon" /> Je suis une développeuse web avec un profil full stack : JavaScript, React, Node.js, Python, PHP, MongoDB…</p>
      <p><FaProjectDiagram className="icon" /> En Master MIAGE, j’ai participé à des projets concrets : applis météo, commandes de gâteaux (Cake), dashboards BI, SI Carrefour, assistant médical (DocBot)…</p>

      <div className="languages">
        <p><FaLanguage className="icon" /> <strong>Langues :</strong></p>
        <ul>
          <li>🇲🇺 Créole mauricien : niveau avancé</li>
          <li>🇬🇧 Anglais : niveau avancé</li>
          <li>🇪🇸 Espagnol : niveau intermédiaire</li>
        </ul>
      </div>

      <p><FaHeart className="icon" /> Passionnée par la <strong>gestion de projet</strong>, la <strong>cybersécurité</strong>, l’UX/UI et l’impact des nouvelles technologies.</p>
    </section>
  );
};

export default About;
