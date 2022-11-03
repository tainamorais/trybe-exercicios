import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HowTo extends Component {
  render() {
    return (
      <div>
        <h2>How To</h2>
        <Link to="/">Voltar ao início</Link>
      </div>
    )
  }
}

export default HowTo;
