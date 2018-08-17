import React, { Component } from "react";

import hoc from "../../hoc/hoc";
import Burger from "../../components/Burger/Burger";

class Builder extends Component {
  state = {
    ingredients: {
      lettuce: 1,
      bacon: 1,
      cheese: 2,
      patty: 2
    }
  };
  render() {
    return (
      <hoc>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </hoc>
    );
  }
}

export default Builder;
