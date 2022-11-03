import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { prof } = this.props.match.params;
    return (
      <div>
        <h1>Meu perfil: { this.props.name }, profissão: {prof}</h1>
        <Link to="/">Voltar ao início</Link>
      </div>
    )
  }
}

export default Profile;
