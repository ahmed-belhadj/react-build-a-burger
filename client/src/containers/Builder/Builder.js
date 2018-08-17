import React, { Component } from "react";

import hoc from "../../hoc/hoc";
import Burger from "../../components/Burger/Burger";

class Builder extends Component {
  state = {};
  render() {
    return (
      <hoc>
        <Burger />
        <div>Controls</div>
      </hoc>
    );
  }
}

export default Builder;
