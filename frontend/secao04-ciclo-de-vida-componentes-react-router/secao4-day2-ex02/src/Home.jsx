import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
        <Link to="/about">About</Link>
        <Link to="/howto">How To</Link>
        <Link to="/profile">Profile</Link>
      </div>
    )
  }
}

export default Home;
