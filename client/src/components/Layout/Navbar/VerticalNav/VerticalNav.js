import React from "react";

import Logo from "../../../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./VerticalNav.css";
import Backdrop from "../../../Backdrop/Backdrop";
import hoc from "../../../../hoc/hoc";

const VerticalNav = props => {
  let verticalNav = [classes.verticalNav, classes.close];
  if (props.opened) {
    verticalNav = [classes.verticalNav, classes.open];
  }
  return (
    <hoc>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={verticalNav.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <Nav />
        </nav>
      </div>
    </hoc>
  );
};

export default VerticalNav;
