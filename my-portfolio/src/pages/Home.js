import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';
import { FaRocket, FaLaptopCode, FaUsers, FaShieldAlt, FaUniversity, FaChartLine } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Bienvenue !</h1>
        <h2>Je suis Aaishah Hulkhoree</h2>
        <p className="intro">
          🎓 Étudiante en <strong>Master 2 MIAGE</strong> à l’Université Paris Cité, je recherche une <strong>alternance à partir de septembre 2025</strong>.
        </p>

        <div className="home-highlights">
          <p><FaLaptopCode className="icon" /> Passionnée de <strong>développement web et mobile</strong> (React, Node.js, PHP, Python, Java).</p>
          <p><FaChartLine className="icon" /> Expérience en <strong>analyse de données</strong>, BI (SAP Analytics Cloud), et <strong>projets stratégiques SI</strong>.</p>
          <p><FaUsers className="icon" /> Formée à la <strong>gestion de projet agile</strong>, coordination d’équipe et design UX/UI (Figma).</p>
          <p><FaRocket className="icon" /> Ambition : devenir <strong>cheffe de projet informatique</strong>, alliant technicité et vision métier.</p>
        </div>

        <Link to="/projects" className="btn">Voir mes projets</Link>
      </div>

      <div className="home-image">
        
      </div>
    </section>
  );
};

export default Home;
