import { FETCH_PATIENTS, FETCH_PATIENTS_SUCCESS } from './constants';


const initialState = {
  loading: false,
  error: false,
  created: false,
  message: '',
  patientList: [],
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS: {
      return {
        ...state,
        patientList: action.payload,
      };
    }
    case FETCH_PATIENTS_SUCCESS: {
      console.log('reducer', action.payload)
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default patientReducer;
