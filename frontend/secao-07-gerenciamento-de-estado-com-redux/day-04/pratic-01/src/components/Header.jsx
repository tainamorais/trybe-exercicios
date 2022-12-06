import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { latitude, longitude } = this.props;

    return (
      <div>
        <h1>
          SpaceStation Tracker
        </h1>
        <div>
          <p><strong>Latitude:</strong> { latitude }</p>
          <p><strong>Longitude:</strong> { longitude }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    latitude: state.issLocationReducer.latitude,
    longitude: state.issLocationReducer.longitude,
  }
}

export default connect(mapStateToProps)(Header);
