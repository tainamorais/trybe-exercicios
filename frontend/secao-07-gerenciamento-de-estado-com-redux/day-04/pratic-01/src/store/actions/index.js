import { getCurrentISSLocation } from '../../services/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
})

// criador de Action para ação bem-sucedida
const receiveISSLocationSuccess = (issLocation) => {
  return {
    type: RECEIVE_ISS_LOCATION_SUCCESS,
    latitude: issLocation.latitude,
    longitude: issLocation.longitude,
  }
}

// criador de Action para ação malsucedida
const receiveISSLocationfAILURE = (errorMessage) => {
  return {
    type: RECEIVE_ISS_LOCATION_FAILURE,
    error: errorMessage,
  }
}

export const fetchISSLocation = () => {
  return async (dispatch) => {
    dispatch(requestISSLocation());

    try {
      const response = await getCurrentISSLocation();
      dispatch(receiveISSLocationSuccess(response.iss_position));
    } catch (error) {
      dispatch(receiveISSLocationfAILURE(error));
    }
  }
}