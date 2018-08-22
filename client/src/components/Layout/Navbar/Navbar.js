import React from "react";

import classes from "./Navbar.css";
import Logo from "../../Logo/Logo";
import Nav from "./Nav/Nav";

const Navbar = props => {
  return (
    <header className={classes.navbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <Nav />
      </nav>
    </header>
  );
};

export default Navbar;
