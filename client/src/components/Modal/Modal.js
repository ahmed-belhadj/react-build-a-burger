import React from "react";

import classes from "./Modal.css";
import hoc from "../../hoc/hoc";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <hoc>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className={classes.modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </hoc>
  );
};

export default Modal;
