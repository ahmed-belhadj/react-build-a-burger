import React from "react";

import Logo from "../../../components/UI/Logo/Logo";
import Nav from "./Nav/Nav";
import Toggle from "./VerticalNav/Toggle/Toggle";

import classes from "./Navbar.css";

const Navbar = props => {
  return (
    <header className={classes.navbar}>
      <Toggle clicked={props.toggleClicked} />
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktop}>
        <Nav />
      </nav>
    </header>
  );
};

export default Navbar;
