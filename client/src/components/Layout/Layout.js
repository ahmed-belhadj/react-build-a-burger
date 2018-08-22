import React from "react";

import classes from "./Layout.css";
import hoc from "../../hoc/hoc";
import Navbar from "./Navbar/Navbar";

const Layout = props => {
  return (
    <hoc>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </hoc>
  );
};

export default Layout;
