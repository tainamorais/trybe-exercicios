import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <Link to="/">Voltar ao início</Link>
      </div>
    )
  }
}

export default About;
