import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../store/actions';

class ISSLocation extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = setInterval(() => dispatch(fetchISSLocation()), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {

    const { latitude, longitude } = this.props;

    return (
      <div>
        <Map
          center={[0, 0]}
          defaultWidth={450}
          height={450}
          minZoom={1}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker anchor={[latitude, longitude]} />
        </Map>
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

export default connect(mapStateToProps)(ISSLocation);

// npm install pigeon-maps@^0.14.0
// npm install pigeon-marker@^0.3.4
