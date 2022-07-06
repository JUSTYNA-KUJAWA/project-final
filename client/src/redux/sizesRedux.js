import axios from 'axios';
import { API_URL } from '../config';
import initialState from './sizesInitialState';


export const getAllSizes = ({ sizes }) => sizes;


/* action name creator */
const reducerName = 'sizes';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_SIZES = createActionName('LOAD_SIZES');

/* action creators */

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });
export const loadSizes = payload => ({ payload, type:LOAD_SIZES });

/* thunk creators */

export const loadSizesRequest = () => {
  return (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_SIZES' }));

    axios
      .get(`${API_URL}/sizes`)
      .then(res => {
        dispatch(loadSizes(res.data));
        dispatch(endRequest({ name: 'LOAD_SIZES' }));
      })
      .catch(err => {
        dispatch(errorRequest({ name: 'LOAD_SIZES', error: err.message }));
      });
  };
};


/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SIZES:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    default:
      return statePart;
  }
};