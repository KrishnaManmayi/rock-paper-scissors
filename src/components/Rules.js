import React, { useState } from "react";

import styles from "./Rules.module.css";
import Modal from "./UI/Modal";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const showRulesHandler = () => {
    setShowRules(true);
  };

  const closeRulesModal = () => {
    setShowRules(false);
  };

  return (
    <div>
      {showRules && <Modal closeModal={closeRulesModal} />}
      <button className={styles.rulesButton} onClick={showRulesHandler}>
        RULES
      </button>
    </div>
  );
};

export default Rules;
