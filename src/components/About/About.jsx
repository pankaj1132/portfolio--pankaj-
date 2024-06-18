import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("pankaj.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              "Enthusiastic frontend developer proficient in HTML, CSS, JavaScript And Reactjs. Dedicated to creating responsive, user-friendly designs. Eager learner, passionate about evolving technologies and enhancing user experiences."
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
              "Driven student mastering Data Structures and Algorithms in C++. Dedicated to problem-solving, optimizing code efficiency, and creating scalable solutions. Eager to apply skills to real-world challenges and contribute meaningfully."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};