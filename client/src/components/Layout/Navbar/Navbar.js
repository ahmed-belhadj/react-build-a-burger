import React from "react";

import classes from "./Navbar.css";
import Logo from "../../Logo/Logo";

const Navbar = props => {
  return (
    <header className={classes.navbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Navbar;
