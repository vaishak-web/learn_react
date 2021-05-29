import React from "react";

const Hello = () => {
  // return(
  //     <div><h1>Hello Vaishak</h1></div>
  // )
  return React.createElement(
    "div",
    {id: "hello", className:"Classna"},
    React.createElement("h1", null, "Hello Vaishak")
  );
};

export default Hello;
