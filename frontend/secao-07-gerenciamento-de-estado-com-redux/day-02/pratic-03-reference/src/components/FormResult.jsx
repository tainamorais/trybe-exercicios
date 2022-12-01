import React, { Component } from 'react';
import { connect } from 'react-redux'; // usado para os componentes que lerão o estado

class FormResult extends Component {
  render() {
    const { username, userpreferences } = this.props;
    return (
      <div>
        <p>Nome: {username.name} </p>
        <p>Cor favorita: {userpreferences.favoriteColor}</p>
        <p>Fruta favorita: {userpreferences.favoriteFruit}</p>
      </div>
    )
  }
}

// função que faz ler o estado global é o mapStateToProps
// ele lê o estado global e trnasforma em props
// sempre é state
// depois é o nome do reducer que você quer
// depois verifica as chaves que o compõe até chegar no valor desejado
const mapStateToProps = (state) => ({
  username: state.formReducer.username,
  userpreferences: state.formReducer.userpreferences
})

export default connect(mapStateToProps)(FormResult)
