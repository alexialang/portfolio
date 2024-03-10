import { NavLink } from "@mantine/core";
import PropTypes from "prop-types";
import classes from "./mobileMenu.module.css";

export const MobileMenu = ({ onClose }) => {
  const handleClick = (anchor) => {
    // Fermer le menu mobile
    onClose();

    // Rediriger vers l'ancre spécifiée
    window.location.hash = anchor;
  };

  return (
    <>
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
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
