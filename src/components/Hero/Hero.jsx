import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export  const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pankaj Saini</h1>
        <p className={styles.description}>
        "Aspiring student proficient in Data Structures, Algorithms, and Frontened-developer, specializing in React.js. Experienced in building responsive web applications with a focus on efficiency and user experience. Eager to contribute innovative solutions, leveraging strong problem-solving skills and a passion for continuous learning in frontend  development."
        </p>
        <a href="mailto:pankaj17469@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;