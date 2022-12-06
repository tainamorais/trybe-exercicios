import { REQUEST_ISS_LOCATION, RECEIVE_ISS_LOCATION_SUCCESS, RECEIVE_ISS_LOCATION_FAILURE } from "../actions";

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
  isFetching: true,
  error: '',
}

const issLocationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ISS_LOCATION: return {
      ...state,
      isFetching: true,
    }
    case RECEIVE_ISS_LOCATION_SUCCESS: return {
      ...state,
      latitude: action.latitude,
      longitude: action.longitude,
    }
    case RECEIVE_ISS_LOCATION_FAILURE: return {
      ...state,
      error: action.error,
      isFetching: false,
    }
    default: return state;
  }
}

export default issLocationReducer;
