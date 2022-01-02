import React from "react";
import rockIcon from "../../assets/img/icon-rock.svg";
import styles from "./Icons.module.css";

import SuccessBorder from "./SuccessBorder";

const RockIcon = (props) => {
  return (
    <div className={styles.mainBox}>
      {props.success === "true" && <SuccessBorder />}
      <div className={styles.rockIconWrap}>
        <div className={styles.iconMain}>
          <img src={rockIcon} alt="Rock" />
        </div>
      </div>
    </div>
  );
};

export default RockIcon;
