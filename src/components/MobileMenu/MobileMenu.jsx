import { useState } from "react";
import { NavLink } from "@mantine/core";
import PropTypes from "prop-types";
import classes from "./mobileMenu.module.css";
import fermer from "../../assets/fermer.png";
import githubPurple from "../../assets/githubPurple.png";
import linkedin from "../../assets/linkedinPurple.png";

export const MobileMenu = ({ onClose }) => {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
    onClose();
  };

  const handleClick = (anchor) => {
    window.location.hash = anchor;
  };

  return (
    <>
      {/* Remplacement de l'icône du burger par une image */}

      <div className={classes.menu}>
        <img
          src={fermer}
          alt="Toggle navigation"
          className={classes.burgerImage}
          onClick={toggleMenu}
        />
        <NavLink
          className={classes.link}
          label="Accueil"
          onClick={() => handleClick("")}
        />
        <NavLink
          className={classes.link}
          label="A propos"
          onClick={() => handleClick("aPropos")}
        />
        <NavLink
          className={classes.link}
          label="Compétences"
          onClick={() => handleClick("competence")}
        />
        <NavLink
          className={classes.link}
          label="Mes projets"
          onClick={() => handleClick("projet")}
        />
        <NavLink
          className={classes.link}
          label="Contact"
          onClick={() => handleClick("contact")}
        />
      </div>
      <div className={classes.flex}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alexialang"
        >
          <img className={classes.git} src={githubPurple} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexia-lang/"
        >
          <img className={classes.git} src={linkedin} alt="linkedin" />
        </a>
      </div>
      {/* Affichage de la croix lorsque le menu est ouvert */}
      {menuClosed ? null : (
        <div className={classes.closeButton} onClick={toggleMenu}>
          <span className={classes.crossLine} />
          <span className={classes.crossLine} />
        </div>
      )}
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
