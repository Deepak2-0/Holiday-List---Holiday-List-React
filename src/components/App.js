import React, { Component, useState } from "react";
import "../styles/App.css";

const cities = ["Goa", "Darjeeling", "Lonavala"];

class App extends Component {
  render() {
    return (
      <>
        <ol>
          {cities.map((city, index) => (
            <li key={"location" + (index + 1)}>{city}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
