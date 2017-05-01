import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './navbar';
import Header from './header';
import Reservation from './reservationForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Reservation />
      </div>
    );
  }
}

export default App;
