import React from "react";

// function Greet() {
//     return <h1>Hello Vaishak</h1>
// }

const Greet = props => {
    const {name, heroName} = props
  return (
    <div>
      <h1>
        I'm {name} and my fav hero is {heroName}
      </h1>
    </div>
  );
};

export default Greet;
