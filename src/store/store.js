import { ACTIONS } from './actions';
import { createStore } from 'redux';

const initialState = {
  layouts: [],
  modalIsOpened: false,
  currentAppointment: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LAYOUTS:
      return { ...state, layouts: action.payload };
    case ACTIONS.SET_MODALISOPENED:
      return { ...state, modalIsOpened: action.payload };
    case ACTIONS.SET_CURRENT_APPOINTMENT:
      return { ...state, currentAppointment: action.payload }
    default:
      return state
  }
}

export default createStore(reducer, initialState);