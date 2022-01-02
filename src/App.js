import React from "react";
import Header from "./components/Header";
import Pick from "./components/Pick";
import HousePicked from "./components/HousePicked";
import Rules from "./components/Rules";

import { Routes, Route, Navigate } from "react-router-dom";
import YouPicked from "./components/YouPicked";
import Result from "./components/Result";

import { ScoreProvider } from "./store/ScoreProvider";

const App = () => {
  return (
    <ScoreProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Pick />} />
        <Route path="/youpicked/:youPicked" element={<YouPicked />} />
        <Route path="/housepicked/:housePicked" element={<HousePicked />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Rules />
    </ScoreProvider>
  );
};

export default App;
