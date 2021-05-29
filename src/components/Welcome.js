import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;

    // console.log(this.props);
    return (
      <h4>
        props.name:- {name} and props.heroName:- {heroName}
      </h4>
    );
  }
}

export default Welcome;
