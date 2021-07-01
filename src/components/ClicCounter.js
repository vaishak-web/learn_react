import React, { Component } from "react";
import UpdatedCounter from "./withCounter";

class ClicCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}> Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedCounter(ClicCounter);
