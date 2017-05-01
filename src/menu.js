import React from "react";
import EntreeCard from "./entreeCard";

//borked, figure this out:
const Menu = ({ food }) => {
  const cards = food.map(entree => (
    <EntreeCard entree={entree} key={entree.name} />
  ));

  return (
    <div className="EntreeCard container" id="menu">
      {cards}
    </div>
  );
};

export default Menu;
