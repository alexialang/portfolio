import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

const Titre = ({ contenu }) => {
  const [texte, setTexte] = useState("");
  const timerRef = useRef(null);

  const demarrerAnimation = useCallback(() => {
    setTexte("");
    let index = 0;
    timerRef.current = setInterval(() => {
      if (index < contenu.length) {
        setTexte((ancienTexte) => ancienTexte + contenu.charAt(index));
        index++;
      } else {
        clearInterval(timerRef.current);
        // Réinitialise l'état pour permettre la prochaine animation
        setTexte("");
        index = 0;
        // Démarre la nouvelle animation après une pause de 1 seconde (ajustable selon vos besoins)
        setTimeout(demarrerAnimation, 500);
      }
    }, 100);
  }, [contenu]);

  useEffect(() => {
    demarrerAnimation();

    // Efface l'intervalle lorsque le composant est démonté
    return () => clearInterval(timerRef.current);
  }, [demarrerAnimation, contenu]);

  // Utilisez la propriété CSS white-space: pre-line pour conserver les retours à la ligne
  const styleTexte = {
    whiteSpace: "pre-line",
  };

  return (
    <div>
      <h1 style={styleTexte}>{texte}</h1>
    </div>
  );
};

Titre.propTypes = {
  contenu: PropTypes.string.isRequired,
};

export default Titre;
