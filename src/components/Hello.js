import React from "react";

const Hello = () => {
  // return(
  //     <div><h1>Hello Vaishak</h1></div>
  // )
  return React.createElement(
    "div",
    {id: "hello", className:"Classna"},
    React.createElement("h4", null, "May 30 1233 – The Mongols entered Kaifeng after a 13-month siege and began looting the fallen capital of the Jin dynasty.")
  );
};

export default Hello;
