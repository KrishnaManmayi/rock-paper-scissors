import React from "react";
import styles from "./Icons.module.css";
import paperIcon from "../../assets/img/icon-paper.svg";

const PaperIcon = () => {
  return (
    <div className={styles.paperIconWrap}>
      <div className={styles.iconMain}>
        <img src={paperIcon} alt="Paper" />
      </div>
    </div>
  );
};

export default PaperIcon;
