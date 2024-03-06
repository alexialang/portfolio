import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./mobileMenu.module.css";

export const MobileMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate();
    onClose();
  };

  return (
    <>
      <Link
        to="/"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Accueil"></NavLink>
      </Link>

      {/* Avant la Vente */}

      <NavLink
        className={classes.link}
        label="Avant la vente"
        childrenOffset={28}
      >
        <Link
          to="/dpe"
          onClick={() => {
            handleClick("/dpe");
          }}
        >
          <NavLink className={classes.link} label="Dpe"></NavLink>
        </Link>

        <Link
          to="/erp"
          onClick={() => {
            handleClick("/erp");
          }}
        >
          <NavLink className={classes.link} label="ERP"></NavLink>
        </Link>
        <Link
          to="/loi_carrez"
          onClick={() => {
            handleClick("/loi_carrez");
          }}
        >
          <NavLink className={classes.link} label="Loi Carrez"></NavLink>
        </Link>
        <Link
          to="/diag_gaz"
          onClick={() => {
            handleClick("/diag_gaz");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Gaz"></NavLink>
        </Link>
        <Link
          to="/diag_plomb"
          onClick={() => {
            handleClick("/diag_plomb");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
          to="/diag_elec"
          onClick={() => {
            handleClick("/diag_elec");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
          to="/obligations_achat"
          onClick={() => {
            handleClick("/obligations_vente");
          }}
        >
          <NavLink
            className={classes.link}
            label="Obligation de Vente"
          ></NavLink>
        </Link>
      </NavLink>

      {/* Avant la location */}

      <NavLink
        className={classes.link}
        label="Avant la location"
        childrenOffset={28}
        defaultOpened
      >
        <Link
          to="/dpe"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="DPE"></NavLink>
        </Link>
        <Link
          to="/erp"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="ERP"></NavLink>
        </Link>
        <Link
          to="/loi_boutin"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Loi Boutin"></NavLink>
        </Link>
        <Link
          to="/diag_gaz"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Gaz"></NavLink>
        </Link>
        <Link
          to="/diag_plomb"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink className={classes.link} label="Diagnostic Plomb"></NavLink>
        </Link>
        <Link
          to="/diag_electrique"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink
            className={classes.link}
            label="Diagnostic Electrique"
          ></NavLink>
        </Link>
        <Link
          to="/obligations_location"
          onClick={() => {
            handleClick("/");
          }}
        >
          <NavLink
            className={classes.link}
            label="Obligations de Location"
          ></NavLink>
        </Link>
      </NavLink>
      <Link
        to="/devis"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Devis"></NavLink>
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          handleClick("/");
        }}
      >
        <NavLink className={classes.link} label="Nous Contacter"></NavLink>
      </Link>
    </>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
