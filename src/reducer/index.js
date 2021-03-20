import { combineReducers } from 'redux';
import appReducer from '../appReducer/reducer.js';
import patientReducer from 'containers/patient/reducer';
const rootReducer = combineReducers({
  appReducer: appReducer,
  patientReducer: patientReducer
});

export default rootReducer;