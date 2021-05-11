import React from "react";
import styles from "./about.module.css";
import {motion} from "framer-motion"

export const About = () => {
  return (  
    <motion.div
    initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className={styles.Box}>
        <h1>About Me</h1>
        <p className={styles.para}>
          The journey started when I was coding a simple{" "}
          <span className={styles.span}>"Hello World"</span> program in my High
          School.This drived passion for coding. I joined Masai School-Bengaluru
          to qualify as a Full web stack developer. I write code in{" "}
          <span className={styles.span}>
            HTML, CSS, React, Express, MongoDB
          </span>
          . I'm basically interested in frontend, datastructures, and
          algorithms. I'm hoping to build challenging projects, open to work remotely
          for the projects and passionate to grow as a{" "}
          <span className={styles.span}>Software Developer</span>.{" "}
        </p>
        <a className={styles.button} href="Manish_R_R_Resume.pdf" download>Download Resume</a>
      </div>
      <div className={styles.Box}>
          <img src="code2.png" alt="pic"/>
      </div>
    </motion.div>
  );
};
