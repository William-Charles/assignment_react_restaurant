import React from ('react');

//borked, figure this out:
const Menu = ({food}) => {
  const cards = food.map(entree => (
    <li entree={entree} key={food.something} />
  ));

  return (
    <li>

    </li>
  )
}

export default Menu;
