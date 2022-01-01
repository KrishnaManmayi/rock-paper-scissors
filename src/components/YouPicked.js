import React from "react";
import styles from "./Picked.module.css";

import BlankIcon from "./UI/BlankIcon";
import PaperIcon from "./UI/PaperIcon";

const YouPicked = () => {
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
          <BlankIcon />
        </div>
      </div>
    </div>
  );
};

export default YouPicked;
