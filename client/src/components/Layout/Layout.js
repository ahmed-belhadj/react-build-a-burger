import React from "react";

import hoc from "../../hoc/hoc";

const Layout = props => {
  return (
    <hoc>
      <div>Header, SideNav, Background</div>
      <main>{props.children}</main>
    </hoc>
  );
};

export default Layout;
