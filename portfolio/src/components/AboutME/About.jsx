import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return ( 
    <div>
      <div className={styles.Box}>
        <h1>About Me</h1>
        <p className={styles.para}>
          The journey started when I was coding a simple{" "}
          <span className={styles.span}>"Hello World"</span> program in my High
          School.This drived passion for coding. I joined Masai School-Bangalore
          to qualify as a full stack developer. I write code in{" "}
          <span className={styles.span}>
            Html, Css, React, Express, MongoDB
          </span>
          . I'm basically interested in frontend, datastructures, and
          algorithms. I'm hoping to build challenging projects, open to work remotely
          for the projects and passionate to grow as a{" "}
          <span className={styles.span}>Software Developer</span>.{" "}
        </p>
        <a className={styles.button} href="Manish_R R_Resume.pdf" download>Download Resume</a>
      </div>
      <div className={styles.Box}>
          <img src="code2.png" alt="pic"/>
      </div>
    </div>
  );
};
