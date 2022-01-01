import React from "react";
import rockIcon from "../../assets/img/icon-rock.svg";
import styles from "./Icons.module.css";

const RockIcon = () => {
  return (
    <div className={styles.rockIconWrap}>
      <div className={styles.iconMain}>
        <img src={rockIcon} alt="Rock" />
      </div>
    </div>
  );
};

export default RockIcon;
