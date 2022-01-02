import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../store/ScoreProvider";
import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

import ScissorsIcon from "./UI/ScissorsIcon";
import PaperIcon from "./UI/PaperIcon";
import RockIcon from "./UI/RockIcon";
import BlankIcon from "./UI/BlankIcon";

const Result = () => {
  const [result, setResult] = useState("");
  const [youPickedIcon, setYouPickedIcon] = useState(<BlankIcon />);
  const [housePickedIcon, setHousePickedIcon] = useState(<BlankIcon />);
  const { setScore } = useContext(ScoreContext);
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const youPicked = searchParams.get("youPicked");
  const housePicked = searchParams.get("housePicked");

  useEffect(() => {
    if (youPicked === "PAPER") {
      if (housePicked === "ROCK") {
        setScore((prev) => prev + 1);
        setResult("YOU WIN");

        setYouPickedIcon(<PaperIcon success={true} />);
        setHousePickedIcon(<RockIcon />);
      }
      if (housePicked === "SCISSORS") {
        setScore((prev) => prev - 1);
        setResult("YOU LOOSE");

        setYouPickedIcon(<PaperIcon />);
        setHousePickedIcon(<ScissorsIcon success={true} />);
      }
      if (housePicked === "PAPER") {
        setResult("TIE");

        setYouPickedIcon(<PaperIcon />);
        setHousePickedIcon(<PaperIcon />);
      }
    } else if (youPicked === "SCISSORS") {
      if (housePicked === "PAPER") {
        setScore((prev) => prev + 1);
        setResult("YOU WIN");

        setYouPickedIcon(<ScissorsIcon success={true} />);
        setHousePickedIcon(<PaperIcon />);
      }
      if (housePicked === "ROCK") {
        setScore((prev) => prev - 1);
        setResult("YOU LOOSE");

        setYouPickedIcon(<ScissorsIcon />);
        setHousePickedIcon(<RockIcon success={true} />);
      }
      if (housePicked === "SCISSORS") {
        setResult("TIE");

        setYouPickedIcon(<ScissorsIcon />);
        setHousePickedIcon(<ScissorsIcon />);
      }
    } else if (youPicked === "ROCK") {
      if (housePicked === "SCISSORS") {
        setScore((prev) => prev + 1);
        setResult("YOU WIN");

        setYouPickedIcon(<RockIcon success={true} />);
        setHousePickedIcon(<ScissorsIcon />);
      }
      if (housePicked === "PAPER") {
        setScore((prev) => prev - 1);
        setResult("YOU LOOSE");

        setYouPickedIcon(<RockIcon />);
        setHousePickedIcon(<PaperIcon success={true} />);
      }
      if (housePicked === "ROCK") {
        setResult("TIE");

        setYouPickedIcon(<RockIcon />);
        setHousePickedIcon(<RockIcon />);
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.resultContainer}>
      <p>YOU PICKED</p>
      <p></p>
      <p>THE HOUSE PICKED</p>
      <div className={styles.icon}>{youPickedIcon}</div>
      <div className={styles.resultBox}>
        <p>{result}</p>
        <button onClick={() => navigate("/")}>Play Again</button>
      </div>
      <div className={styles.icon}>{housePickedIcon}</div>
    </div>
  );
};

export default Result;
