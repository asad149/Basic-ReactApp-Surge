import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Lunch from "./Lunch";

function App() {
  return (
    <div className="App">
      <Lunch dishName="Chicken Biryani" sweetName="Kheer" />
      <hr />
      <Lunch dishName="Chicken Karahi" sweetName="Ice Cream" />
      <hr />
      <Lunch dishName="Chicken Tikka" sweetName="Ice Cake" />
    </div>
  );
}

export default App;
