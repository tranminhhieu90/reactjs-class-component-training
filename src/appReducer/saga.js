import { put, takeEvery } from 'redux-saga/effects'
import { saveUserInfo } from './actions';
function* fetchUser(action) {
  try {
    yield put(saveUserInfo(action.payload.userId));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* appSaga() {
  yield takeEvery("FETCH_USER", fetchUser);
}

export default appSaga