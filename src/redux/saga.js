import { all } from 'redux-saga/effects'
import appSaga from 'appReducer/saga';
import patientSaga from 'containers/patient/saga';

function* rootSaga() {
  yield all([
    appSaga(),
    patientSaga()
  ])
}
export default rootSaga;