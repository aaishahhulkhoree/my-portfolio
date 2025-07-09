import React from 'react';
import '../assets/styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aaishah Hulkhoree. Tous droits réservés.</p>
      <div className="socials">
        <a href="https://github.com/aaishahhulkhoree" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:hulkhoreea@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
