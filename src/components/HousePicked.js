import React from "react";
import styles from "./Picked.module.css";

import PaperIcon from "./UI/PaperIcon";
import RockIcon from "./UI/RockIcon";

const HousePicked = () => {
  return (
    <div className="mainContainer">
      <div className={styles.header}>
        <p>YOU PICKED</p>
        <p>THE HOUSE PICKED</p>
      </div>
      <div className={styles.main}>
        <div className={styles.icon}>
          <PaperIcon />
        </div>
        <div className={styles.icon}>
          <RockIcon />
        </div>
      </div>
    </div>
  );
};

export default HousePicked;
