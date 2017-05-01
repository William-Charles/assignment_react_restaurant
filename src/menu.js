import React from 'react';
import EntreeCard from './entreeCard';

//borked, figure this out:
const Menu = ({ food, category, color }) => {
  const cards = food.map(entree => (
    <EntreeCard entree={entree} key={entree.name} color=`style='color: ${color}'`/>
  ));

  Menu.defaultProps = {
    color: 'default'
  };

  return (
    <div className="EntreeCard container" id="menu">
      <h2>{category}</h2>
      {cards}
    </div>
  );
};

export default Menu;
