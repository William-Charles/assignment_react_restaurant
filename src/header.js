import React from "react";

const Header = () => {
  let divStyle = {
    backgroundImage: `url('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg')`,
    backgroundSize: `cover`,
    height: `100%`
  };
  return (
    <div id="header" className="jumbotron" style={divStyle}>
      <h1>Dining for the brutish!</h1>
      <p>And something else</p>
    </div>
  );
};
export default Header;
