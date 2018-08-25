import React, { Component } from "react";

import Wrapper from "../Wrapper";
import Navbar from "./Navbar/Navbar";
import VerticalNav from "./Navbar/VerticalNav/VerticalNav";

import classes from "./Layout.css";

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
      <Wrapper>
        <Navbar toggleClicked={this.handleToggleVerticalNav} />
        <VerticalNav
          opened={this.state.verticalNavIsOpen}
          closed={this.handleHideVerticalNav}
        />
        <main className={classes.main}>{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
