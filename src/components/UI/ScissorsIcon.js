import React from "react";
import scissorsIcon from "../../assets/img/icon-scissors.svg";
import styles from "./Icons.module.css";

import SuccessBorder from "./SuccessBorder";

const ScissorsIcon = (props) => {
  return (
    <div className={styles.mainBox}>
      {props.success && <SuccessBorder />}
      <div className={styles.scissorsIconWrap}>
        <div className={styles.iconMain}>
          <img src={scissorsIcon} alt="Scissors" />
        </div>
      </div>
    </div>
  );
};

export default ScissorsIcon;
