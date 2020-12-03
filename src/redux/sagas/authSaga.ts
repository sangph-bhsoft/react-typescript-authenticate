import { call, put, takeLatest } from "redux-saga/effects";
import { loginSever } from "../../fakeApi";
import {
  loginRequest,
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
} from "../../features/auth/actions";

function* authenticate({
  payload: { username, password },
}: ReturnType<typeof loginRequest>) {
  try {
    const user = yield call(loginSever, username, password);
    yield put(loginSuccess(user));
  } catch ({ error }) {
    yield put(loginFailure(error.message));
  }
}

export default function* watchAuthenticate() {
  yield takeLatest(LOGIN_REQUEST, authenticate);
}
