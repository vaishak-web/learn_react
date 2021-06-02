import React from "react";

function Person({name}) {
  return (
    <div>
      <h2>
        I am {name.name}. I am {name.age} year old. I live {name.address}.
      </h2>
    </div>
  );
}

export default Person;
