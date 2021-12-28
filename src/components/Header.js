import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div class="mainContainer">
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className={styles.scoreContainer}>
          <p id={styles.scoreTitle}>SCORE</p>
          <p id={styles.scoreVal}>12</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
