import React from "react";
import Person from "./Person";

function NameList() {
  const serial = ["Bruce", "Clark", "Drake", "Rock"];
  const names = [
    {
      id: 1,
      name: "Vaishak",
      age: 25,
      address: "rashin",
    },
    {
      id: 2,
      name: "Vaishak",
      age: 25,
      address: "rashin",
    },
    {
      id: 3,
      name: "Vaishak",
      age: 25,
      address: "rashin",
    },
    {
      id: 4,
      name: "Vaishak",
      age: 25,
      address: "rashin",
    },
  ];
  const nameList = names.map((n) => <Person name={n} key={n.id} />);
const s = serial.map((n, index) => <h1 key={index}>{index}</h1>);
  return (
    <div>
      <div>{s}</div>
    </div>
  );
}

export default NameList;
