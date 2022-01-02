import React from "react";
import styles from "./Icons.module.css";
import paperIcon from "../../assets/img/icon-paper.svg";
import SuccessBorder from "./SuccessBorder";

const PaperIcon = (props) => {
  return (
    <div className={styles.mainBox}>
      {props.success === "true" && <SuccessBorder />}
      <div className={styles.paperIconWrap}>
        <div className={styles.iconMain}>
          <img src={paperIcon} alt="Paper" />
        </div>
      </div>
    </div>
  );
};

export default PaperIcon;
