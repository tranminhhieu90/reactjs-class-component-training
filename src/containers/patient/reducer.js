import { FETCH_PATIENTS, DELETE_PATIENT, UPDATE_PATIENT } from './constants';


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
    default:
      return state;
  }
};

export default patientReducer;
