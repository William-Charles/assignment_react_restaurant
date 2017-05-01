import React, { Component } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Reservation from "./reservationForm";
import Menu from "./menu";
import Google from "./google";

import "./App.css";
const { dinner, dessert, appetizers } = require("./menuItems");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Header />
        <Reservation />
        <Google />

        <Menu food={appetizers} category="Appetizers" />
        <Menu food={dinner} category="Dinner" color="red" />
        <Menu food={dessert} category="Dessert" color="blue" />
      </div>
    );
  }
}

export default App;
