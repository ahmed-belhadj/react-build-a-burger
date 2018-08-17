import React, { Component } from "react";

import hoc from "../../hoc/hoc";

class Builder extends Component {
  state = {};
  render() {
    return (
      <hoc>
        <div>Burger</div>
        <div>Controls</div>
      </hoc>
    );
  }
}

export default Builder;
