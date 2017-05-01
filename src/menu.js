import React from "react";
import EntreeCard from "./entreeCard";

let divStyle;

//borked, figure this out:
const Menu = ({ food, category, color }) => {
  divStyle = {
    color: color
  };
  const cards = food.map(entree => (
    <EntreeCard color={color} entree={entree} key={entree.name} />
  ));

  return (
    <div className="EntreeCard container" id="menu">
      <h2 id={category}>{category}</h2>
      {cards}
    </div>
  );
};

export default Menu;
