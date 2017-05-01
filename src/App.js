import React, { Component } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Reservation from "./reservationForm";
import Menu from "./menu";
import "./App.css";

const dinner = [
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
  }
];

const dessert = [
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

const appetizers = [
  {
    name: "French Fries",
    desc: "Food that is amazing",
    price: 30,
    category: "appetizers"
  },
  {
    name: "Quesadilla",
    desc: "food that isn't great",
    price: 12,
    category: "appetizers"
  },
  {
    name: "Ice cream sunday",
    desc: "food that is good",
    price: 22,
    category: "appetizers"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Reservation />

        <Menu food={appetizers} category="~Appetizers~" />
        <Menu food={dinner} category="~Dinner~" color="red" />
        <Menu food={dessert} category="~Dessert~" color="blue" />
      </div>
    );
  }
}

export default App;
