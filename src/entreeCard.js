import React from "react";

const EntreeCard = ({ entree }) => {
  const { name, desc, price } = entree;
  console.log(entree);
  return (
    <div className="EntreeCard well">
      <h3>{name}</h3>
      <dl>
        <dt>Description</dt>
        <dd>{desc}</dd>
      </dl>
      <dl>
        <dt>price</dt>
        <dd>{price}</dd>
      </dl>
    </div>
  );
};

export default EntreeCard;
