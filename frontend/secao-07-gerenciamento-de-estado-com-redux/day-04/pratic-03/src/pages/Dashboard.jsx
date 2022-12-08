import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    const { email, password } = this.props;
    return (
      <div>
        <p>{ email }</p>
        <p>{ password }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

export default connect (mapStateToProps)(Dashboard);
