import React from "react";

import classes from "./Layout.css";
import hoc from "../../hoc/hoc";

const Layout = props => {
  return (
    <hoc>
      <div>Header, SideNav, Background</div>
      <main className={classes.main}>{props.children}</main>
    </hoc>
  );
};

export default Layout;
