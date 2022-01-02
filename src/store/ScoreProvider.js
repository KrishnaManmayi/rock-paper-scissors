import React, { useState, useEffect } from "react";

export const ScoreContext = React.createContext();

const initialState = sessionStorage.getItem("count");

const getScore = (key, defaultValue) => {
  const storedScore = sessionStorage.getItem(key);
  return storedScore ? storedScore : defaultValue;
};

export const ScoreProvider = (props) => {
  const [score, setScore] = useState(parseInt(getScore("score", 0)));

  useEffect(() => {
    sessionStorage.setItem("score", score);
  }, [score]);

  return (
    <ScoreContext.Provider value={{ score: score, setScore: setScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
};
