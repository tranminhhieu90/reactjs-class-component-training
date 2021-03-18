import { combineReducers } from 'redux';
import appReducer from '../appReducer/reducer.js'
const rootReducer = combineReducers({
  appReducer: appReducer
});

export default rootReducer;