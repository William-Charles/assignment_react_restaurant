import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import Header from "./header";
import Reservation from "./reservationForm";
import Menu from "./menu";
import "./App.css";

const food = [
  {
    name: "Sven",
    desc: "Food that is amazing",
    price: 30,
    category: "Dinner"
  },
  {
    name: "Olga",
    desc: "food that isn't great",
    price: 12,
    category: "Dinner"
  },
  {
    name: "Erik",
    desc: "food that is good",
    price: 22,
    category: "Dinner"
  },
  {
    name: "Cake",
    desc: "Food that is amazing",
    price: 30,
    category: "Dessert"
  },
  {
    name: "Pie",
    desc: "food that isn't great",
    price: 12,
    category: "Dessert"
  },
  {
    name: "Ice Cream",
    desc: "food that is good",
    price: 22,
    category: "Dessert"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Reservation />
        <Menu food={food} />
      </div>
    );
  }
}

export default App;
