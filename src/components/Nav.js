import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../imgs/logo-white-fg.svg";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, 0.1, -0.05, 0.9] };

const childVariants = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: { ...transition },
  },
};

const Nav = () => {
  return (
    <motion.div id="main-menu" initial="hidden" animate="visible">
      <nav>
        <div className="logo">
          <img src={logoSvg} />
        </div>
        <ul className="nav-links">
          <Link to="/">
            <motion.li variants={childVariants}>Start</motion.li>
          </Link>
          <Link to="/progetti">
            <motion.li variants={childVariants}>Progetti</motion.li>
          </Link>
          <Link to="/about">
            <motion.li variants={childVariants}>About</motion.li>
          </Link>
          <Link to="/contatti">
            <motion.li variants={childVariants}>Contatti</motion.li>
          </Link>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
