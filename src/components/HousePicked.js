import React, { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Picked.module.css";

import PaperIcon from "./UI/PaperIcon";
import RockIcon from "./UI/RockIcon";
import ScissorsIcon from "./UI/ScissorsIcon";

const allIcons = {
  ROCK: <RockIcon />,
  PAPER: <PaperIcon />,
  SCISSORS: <ScissorsIcon />,
};

const HousePicked = () => {
  let params = useParams();
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const housePicked = params.housePicked;
  const youPicked = searchParams.get("youPicked");

  const youPickedIcon =
    youPicked in allIcons ? allIcons[youPicked] : navigate("/");
  const housePickedIcon =
    housePicked in allIcons ? allIcons[housePicked] : navigate("/");

  useEffect(() => {
    setTimeout(() => {
      navigate({
        pathname: "/result",
        search: `?youPicked=${youPicked}&housePicked=${housePicked}`,
        replace: true,
      });
    }, 1000);
  }, []);

  return (
    <div className="mainContainer">
      <div className={styles.header}>
        <p>YOU PICKED</p>
        <p>THE HOUSE PICKED</p>
      </div>
      <div className={styles.main}>
        <div className={styles.icon}>{youPickedIcon}</div>
        <div className={styles.icon}>{housePickedIcon}</div>
      </div>
    </div>
  );
};

export default HousePicked;
