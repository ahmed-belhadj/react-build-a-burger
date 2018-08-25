import React from "react";

import burgerLogo from "../../assets/images/logo.png";
import classes from "./Logo.css";

const Logo = props => {
  return (
    <div className={classes.logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="build-a-burger" />
    </div>
  );
};

export default Logo;
