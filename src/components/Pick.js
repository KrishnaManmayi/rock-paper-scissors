import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pick.module.css";

import PaperIcon from "./UI/PaperIcon";
import ScissorsIcon from "./UI/ScissorsIcon";
import RockIcon from "./UI/RockIcon";

const Pick = () => {
  let navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className={styles.pickContainer}>
        <div
          className={styles.gridItem1Wrap}
          onClick={() => navigate("/youpicked/PAPER")}>
          <PaperIcon />
        </div>
        <div
          className={styles.gridItem2Wrap}
          onClick={() => navigate("/youpicked/SCISSORS")}>
          <ScissorsIcon />
        </div>
        <div
          className={styles.gridItem3Wrap}
          onClick={() => navigate("/youpicked/ROCK")}>
          <RockIcon />
        </div>
      </div>
    </div>
  );
};

export default Pick;
