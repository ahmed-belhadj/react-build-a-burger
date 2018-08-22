import React from "react";

import classes from "./Nav.css";
import NavItem from "./NavItem/NavItem";

const Nav = props => {
  return (
    <ul className={classes.nav}>
      <NavItem link="/" active>
        Build-a-burger
      </NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default Nav;
