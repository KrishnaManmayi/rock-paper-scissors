import React from "react";
import scissorsIcon from "../../assets/img/icon-scissors.svg";
import styles from "./Icons.module.css";

const ScissorsIcon = () => {
  return (
    <div className={styles.scissorsIconWrap}>
      <div className={styles.iconMain}>
        <img src={scissorsIcon} alt="Scissors" />
      </div>
    </div>
  );
};

export default ScissorsIcon;
