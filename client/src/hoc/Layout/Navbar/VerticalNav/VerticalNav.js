import React from "react";

import Wrapper from "../../../Wrapper";
import Logo from "../../../../components/UI/Logo/Logo";
import Nav from "../Nav/Nav";
import Backdrop from "../../../../components/UI/Backdrop/Backdrop";
import classes from "./VerticalNav.css";

const VerticalNav = props => {
  let verticalNav = [classes.verticalNav, classes.close];
  if (props.opened) {
    verticalNav = [classes.verticalNav, classes.open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={verticalNav.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <Nav />
        </nav>
      </div>
    </Wrapper>
  );
};

export default VerticalNav;
