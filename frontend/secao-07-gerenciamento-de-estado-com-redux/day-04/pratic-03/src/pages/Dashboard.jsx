import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTaskAction from '../redux/actions/addTaskAction';
// import PropTypes from 'prop-types';

class Dashboard extends Component {
  state = {
    task:'',
    owner:'',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () =>{
    const { task, owner } = this.state;
    const { taskDispatch } = this.props;
    taskDispatch(task, owner);
    this.setState({
      task:'',
      owner:'',
    })
  }

  render() {
    const { email, password } = this.props;
    const { task, owner } = this.state;
    return (
      <div>
        <div>
          <p>{ email }</p>
          <p>{ password }</p>
        </div>
        <div>
        <input
          type="text"
          placeholder='Task'
          onChange={ this.handleChange }
          value={ task }
          name="task"
        />

        <input
          type="text"
          placeholder='Owner'
          onChange={ this.handleChange }
          value={ owner }
          name="owner"
        />


        <button
          type='button'
          onClick={ this.handleClick }
        >
          Inserir
        </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  taskDispatch: (task, owner) => dispatch(addTaskAction(task, owner)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Dashboard);
