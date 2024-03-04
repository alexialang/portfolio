// import { useState } from "react";
// import { Burger } from "@mantine/core";
// import { Link, useNavigate } from "react-router-dom";
// import classes from "./mobileMenu.module.css";
// import PropTypes from "prop-types";

// export const MobileMenu = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [opened, setOpened] = useState(false);

//   const handleClick = () => {
//     navigate("/");
//     onClose();
//     setOpened(false);
//   };

//   const toggleMenu = () => {
//     setOpened(!opened);
//   };

//   return (
//     <div className={`${classes.mobileMenu} ${opened ? classes.opened : ""}`}>
//       <Burger
//         opened={opened}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation"
//         className={`burgerIcon ${opened ? classes.visible : ""}`}
//       />
//       {opened && ( // Condition pour afficher la navigation uniquement si le menu est ouvert
//         <nav className={classes.nav}>
//           <Link to="/" onClick={handleClick} className={classes.navLink}>
//             Accueil
//           </Link>
//           <Link to="/page1" onClick={handleClick} className={classes.navLink}>
//             Page 1
//           </Link>
//         </nav>
//       )}
//     </div>
//   );
// };

// MobileMenu.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
