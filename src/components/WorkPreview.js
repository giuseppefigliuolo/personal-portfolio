import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { transition } from "../utils/fm-transitions";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.44,
    },
  },
};

const mainDivVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "27rem",
    transition: { duration: 3, ...transition },
  },
};

const childVariants = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...transition },
  },
};

const WorkPreview = ({ reversed, number, backgroundImg, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "-150px",
  });
  return (
    <Tilt
      className={`Tilt work-preview ${reversed && "reversed"}`}
      options={{ reverse: true, max: 13, scale: 1.05 }}
    >
      <motion.div
        ref={ref}
        className={`work-preview__inner ${reversed && "reversed"}`}
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
        variants={mainDivVariants}
        initial="hidden"
        animate={inView && "visible"}
      >
        <div>
          <p
            className={`work-preview__project-number mono ${
              reversed && "reversed"
            }`}
          >
            {number}
          </p>
        </div>
        <motion.div
          className={`work-preview__text ${reversed && "reversed"}`}
          variants={containerVariants}
        >
          <motion.h3 variants={childVariants}>{title}</motion.h3>
          <motion.p variants={childVariants}>
            Progetto nato dalla creazione di un testo a caso di 150 caratteri
            approssimatamente non so.
          </motion.p>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

export default WorkPreview;
