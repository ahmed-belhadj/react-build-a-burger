import React, { Component } from "react";

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <Wrapper>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div
          className={classes.modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

export default Modal;
