import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Picked.module.css";

import BlankIcon from "./UI/BlankIcon";
import PaperIcon from "./UI/PaperIcon";
import RockIcon from "./UI/RockIcon";
import ScissorsIcon from "./UI/ScissorsIcon";

const allIcons = {
  ROCK: <RockIcon />,
  PAPER: <PaperIcon />,
  SCISSORS: <ScissorsIcon />,
};

const YouPicked = () => {
  let navigate = useNavigate();
  let params = useParams();

  const youPicked = params.youPicked;
  let youPickedIcon =
    youPicked in allIcons ? allIcons[youPicked] : navigate("/");

  useEffect(() => {
    const array = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    setTimeout(() => {
      navigate({
        pathname: `/housepicked/${array[random]}`,
        search: `?youPicked=${youPicked}`,
        replace: true,
      });
    }, 3000);
  }, []);

  return (
    <div className="mainContainer">
      <div className={styles.header}>
        <p>YOU PICKED</p>
        <p>THE HOUSE PICKED</p>
      </div>
      <div className={styles.main}>
        <div className={styles.icon}>{youPickedIcon}</div>
        <div className={styles.icon + " " + styles.blankIcon}>
          <BlankIcon />
        </div>
      </div>
    </div>
  );
};

export default YouPicked;
