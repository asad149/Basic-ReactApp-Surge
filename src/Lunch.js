import React from "react";

function Lunch(props) {
  return (
    <div>
      <h1>Today we are serving {props.dishName} in main course </h1>
      <h1>Today we are serving {props.sweetName} in sweet dish </h1>
    </div>
  );
}

export default Lunch;
