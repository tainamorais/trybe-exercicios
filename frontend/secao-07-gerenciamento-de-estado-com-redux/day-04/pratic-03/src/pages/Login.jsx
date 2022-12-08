import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserAction from '../redux/actions/getUserAction';

class Login extends Component {
  state = {
    email:'',
    password:'',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () =>{
    const { email, password } = this.state;
    const { logUserDispatch, history } = this.props;
    logUserDispatch(email, password);
    this.setState({
      email:'',
      password:'',
    })
    history.push('/dashboard');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder='Email'
          onChange={ this.handleChange }
          value={ email }
          name="email"
        />

        <input
          type="password"
          placeholder='Password'
          onChange={ this.handleChange }
          name="password"
          value={ password }
        />

        <button
          type='button'
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logUserDispatch: (email, password) => dispatch(getUserAction(email, password)),
});

export default connect (null, mapDispatchToProps)(Login);
