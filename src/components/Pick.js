import React from "react";
import styles from "./Pick.module.css";
import rockIcon from "../assets/img/icon-rock.svg";
import PaperIcon from "./UI/PaperIcon";
import ScissorsIcon from "./UI/ScissorsIcon";
import RockIcon from "./UI/RockIcon";

const Pick = () => {
  return (
    <div class="mainContainer">
      <div className={styles.pickContainer}>
        <div className={styles.gridItem1Wrap}>
          <PaperIcon />
        </div>
        <div className={styles.gridItem2Wrap}>
          <ScissorsIcon />
        </div>
        <div className={styles.gridItem3Wrap}>
          <RockIcon />
        </div>
      </div>
    </div>
  );
};

export default Pick;
