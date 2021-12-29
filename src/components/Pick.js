import React from "react";
import styles from "./Pick.module.css";
import paperIcon from "../assets/img/icon-paper.svg";
import scissorsIcon from "../assets/img/icon-scissors.svg";
import rockIcon from "../assets/img/icon-rock.svg";

const Pick = () => {
  return (
    <div class="mainContainer">
      <div className={styles.pickContainer}>
        <div className={styles.gridItem1Wrap}>
          <div className={styles.gridItem1 + " " + styles.gridItem}>
            <img src={paperIcon} alt="Paper" />
          </div>
        </div>
        <div className={styles.gridItem2Wrap}>
          <div className={styles.gridItem2 + " " + styles.gridItem}>
            <img src={scissorsIcon} alt="Scissors" />
          </div>
        </div>
        <div className={styles.gridItem3Wrap}>
          <div className={styles.gridItem3 + " " + styles.gridItem}>
            <img src={rockIcon} alt="Rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
