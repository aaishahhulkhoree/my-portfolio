import React, { useState, useEffect } from 'react';
import '../assets/styles/CookieBanner.css';

const CookieBanner = ({ onAccept }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setVisible(true);
    } else {
      onAccept(); // débloque l'accès
    }
  }, [onAccept]);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
    onAccept(); // débloque l'accès
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner locked">
        <p>
          Ce site utilise des cookies pour fonctionner correctement. Vous devez accepter pour continuer.
        </p>
        <button onClick={acceptCookies}>J’accepte</button>
      </div>
    </div>
  );
};

export default CookieBanner;
