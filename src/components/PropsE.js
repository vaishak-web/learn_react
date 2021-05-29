import React from "react";

// function PropsE() {
//     return <h1>Hello Vaishak</h1>
// }

const PropsE = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.aka.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default PropsE;
