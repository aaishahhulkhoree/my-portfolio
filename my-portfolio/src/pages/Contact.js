import React from 'react';
import '../assets/styles/Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact</h2>
      <p>Tu veux collaborer ou en savoir plus ? Envoie-moi un message :</p>
      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
