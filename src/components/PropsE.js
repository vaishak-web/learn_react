import React from "react";

// function PropsE() {
//     return <h1>Hello Vaishak</h1>
// }

const PropsE = (props) => {
  console.log(props);
  return (
    <div>
      <h4>
      May 30 1852 – Swedish operatic soprano Jenny Lind concluded a successful concert tour of the United States under the management of showman P. T. Barnum.<br/>props.name:- {props.name} and props.heroName:- {props.heroName}
      </h4>
      {props.children}
    </div>
  );
};

export default PropsE;
