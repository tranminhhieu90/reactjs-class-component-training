import { put, takeEvery } from 'redux-saga/effects'
import { fetchPatientsSuccess } from './actions';
import { FETCH_PATIENTS } from 'containers/patient/constants';

function* fetchPatient(action) {
  try {
    yield put(fetchPatientsSuccess(action.payload));
  } catch (e) {
  }
}
function* patientSaga() {
  yield takeEvery(FETCH_PATIENTS, fetchPatient);
}

export default patientSaga