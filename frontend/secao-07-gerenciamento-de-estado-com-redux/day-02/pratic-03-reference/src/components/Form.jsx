import React, { Component } from 'react';
import { connect } from 'react-redux'; // usado para os componentes que lerão o estado
import { userInformationAction, userPreferencesAction } from '../redux/actions';
// O dispatch vem por padrão ao utilizar o connect ele que vai modificar o estado:

class Form extends Component {
  state = {
    name: '',
    favoriteColor: '',
    favoriteFruit: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  validateName = () => {
    const { dispatch } = this.props;
    const { name } = this.state;

    if (name.length > 0) {
      dispatch(userInformationAction(name));
      this.setState({ name: ''})
    }
  }

  render() {
    const { name, favoriteColor, favoriteFruit } = this.state;
    const { dispatch } = this.props;
    return (
      <div>
        <label htmlFor="name-input">
          Name:
          <input
            type="text"
            name="name"
            id="name-input"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type='button'
          // onClick={ () => dispatch(userInformationAction(name)) }
          onClick={ () => this.validateName() }
        >
          Salva o nome
        </button>

        <br />
        <br />

        <label htmlFor="favorite-color-input">
          Cor favorita:
          <input
            type="text"
            name="favoriteColor"
            id="favorite-color-input"
            value={ favoriteColor }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="favorite-fruit-input">
          Fruta favorita:
          <input
            type="text"
            name="favoriteFruit"
            id="favorite-fruit-input"
            value={ favoriteFruit }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type='button'
          onClick={ () => dispatch(userPreferencesAction({favoriteColor, favoriteFruit})) }          
        >
          Salva os favoritos
        </button>

      </div>
    )
  }
}

export default connect()(Form)
