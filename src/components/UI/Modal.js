import React from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.css";
import closeIcon from "../../assets/img/icon-close.svg";
import RulesImg from "../../assets/img/image-rules.svg";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h1>RULES</h1>
        <img src={closeIcon} alt="close" onClick={props.closeModal} />
      </div>
      <div className={styles.rulesImg}>
        <img src={RulesImg} alt="Rules" />
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
