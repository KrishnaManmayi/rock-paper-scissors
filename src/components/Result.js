import React from "react";
import styles from "./Result.module.css";

import PaperIcon from "./UI/PaperIcon";
import RockIcon from "./UI/RockIcon";

const Result = () => {
  return (
    <div className={styles.resultContainer}>
      <p>YOU PICKED</p>
      <p></p>
      <p>THE HOUSE PICKED</p>
      <div className={styles.icon}>
        <PaperIcon success="false" />
      </div>
      <div className={styles.resultBox}>
        <p>YOU WIN</p>
        <button>Play Again</button>
      </div>
      <div className={styles.icon}>
        <RockIcon />
      </div>
    </div>
  );
};

export default Result;
