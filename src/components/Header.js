import React, { useContext } from "react";
import { ScoreContext } from "../store/ScoreProvider";
import styles from "./Header.module.css";

const Header = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div className="mainContainer">
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className={styles.scoreContainer}>
          <p id={styles.scoreTitle}>SCORE</p>
          <p id={styles.scoreVal}>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
