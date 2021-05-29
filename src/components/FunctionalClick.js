import React from 'react'

function FunctionalClick() {
  function clickHandler(){
    console.log("clicking")
  }

  return (
    <div>
      <button onClick={clickHandler}>Functional Click Handler</button>
    </div>
  )
}

export default FunctionalClick
