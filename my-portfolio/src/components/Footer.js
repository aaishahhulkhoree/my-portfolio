import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aaishah Hulkhoree. Tous droits réservés.</p>

      <div className="socials">
        <a href="https://github.com/aaishahhulkhoree" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:hulkhoreea@gmail.com">Email</a>
        <a href="/mentions-legales" className="footer-link">Mentions légales</a>
        <a href="/confidentialite" className="footer-link">Politique de confidentialité</a>
        <a href="/conditions" className="footer-link">Conditions d’utilisation</a>
      </div>

      <p className="disclaimer">
        Ce site utilise des cookies nécessaires à son bon fonctionnement. En continuant, vous acceptez notre politique de confidentialité et nos conditions d’utilisation.
      </p>
    </footer>
  );
};

export default Footer;
