import { Link } from "react-scroll";
import styles from "./header.module.css";
import { Button, Burger } from "@mantine/core";
import PropTypes from "prop-types";

export const Header = ({ opened, toggle }) => {
  return (
    <div className={styles.root}>
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        classNames={{
          root: styles.burger,
        }}
      />
      <div className={styles.nav}>
        <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
          <Button variant="subtle">Accueil</Button>
        </Link>
        <Link to="aPropos" spy={true} smooth={true} offset={-35} duration={500}>
          <Button variant="subtle">A propos</Button>
        </Link>

        <Link
          to="competence"
          spy={true}
          smooth={true}
          offset={-35}
          duration={500}
        >
          <Button variant="subtle">Compétences</Button>
        </Link>
        <Link to="projet" spy={true} smooth={true} offset={-35} duration={500}>
          <Button variant="subtle">Mes projets</Button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-35} duration={500}>
          <Button variant="subtle">Contact</Button>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
