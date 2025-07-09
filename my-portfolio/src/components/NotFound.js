import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <h2>Page introuvable</h2>
      <p>Désolé, la page que vous cherchez n’existe pas.</p>
      <Link to="/" className="btn">← Retour à l'accueil</Link>
    </section>
  );
};

export default NotFound;
