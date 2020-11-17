export const ACTIONS = {
  'SET_LAYOUTS': 'SET_LAYOUTS',
  'SET_MODALISOPENED': 'SET_MODALISOPENED',
  'SET_CURRENT_APPOINTMENT': 'SET_CURRENT_APPOINTMENT'
};

export const setLayouts = (payload) => ({ type: ACTIONS.SET_LAYOUTS, payload });
export const setModalIsOpened = (payload) => ({ type: ACTIONS.SET_MODALISOPENED, payload });
export const setCurrentAppointment = (payload) => ({ type: ACTIONS.SET_CURRENT_APPOINTMENT, payload });