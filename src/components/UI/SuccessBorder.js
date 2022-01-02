import React from "react";
import BlankIcon from "./BlankIcon";
import styles from "./SuccessBorder.module.css";

const SuccessBorder = () => {
  return (
    <div className={styles.border + " " + styles.container}>
      <div className={styles.border}>
        <div className={styles.border}>
          <div className={styles.iconWrap}>
            <BlankIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessBorder;
