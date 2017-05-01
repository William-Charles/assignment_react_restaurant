import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#main-nav-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">Slavic Slob</a>
        </div>

        <div className="collapse navbar-collapse" id="main-nav-collapse">

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Header</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#menu">Menu</a></li>
          </ul>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;
