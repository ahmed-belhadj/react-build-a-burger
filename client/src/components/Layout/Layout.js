import React, { Component } from "react";

import classes from "./Layout.css";
import hoc from "../../hoc/hoc";
import Navbar from "./Navbar/Navbar";
import VerticalNav from "./Navbar/VerticalNav/VerticalNav";

class Layout extends Component {
  state = {
    verticalNavIsOpen: false
  };
  handleHideVerticalNav = () => {
    this.setState({ verticalNavIsOpen: false });
  };
  handleToggleVerticalNav = () => {
    this.setState(prevState => {
      return { verticalNavIsOpen: !prevState.verticalNavIsOpen };
    });
  };
  render() {
    return (
      <hoc>
        <Navbar toggleClicked={this.handleToggleVerticalNav} />
        <VerticalNav
          opened={this.state.verticalNavIsOpen}
          closed={this.handleHideVerticalNav}
        />
        <main className={classes.main}>{this.props.children}</main>
      </hoc>
    );
  }
}

export default Layout;
