import { takeEvery, put, call } from 'redux-saga/effects';
import { tooledAxios as axios } from '../axiosConfig';

import { PUT_USER_REQUEST } from '../types';
import { putUserSuccess, putUserFailure } from '../actions/putActions';
import { getUsersSuccess, getUsersFailure } from '../actions/getActions';
import { fetchData } from './getUsersSaga';

const apiPutUser = async (action) => {
  const editedUser = JSON.stringify(action.payload);
  const response = await axios.put(`user/${action.payload.id}`, editedUser);

  return response;
};

function* putUser(action) {
  try {
    const payload = yield call(apiPutUser, action);
    yield put(putUserSuccess(payload));
    const update = yield call(fetchData); // updating users after put user
    yield put(getUsersSuccess(update));
  } catch (error) {
    yield put(putUserFailure(error));
    yield put(getUsersFailure(error));
  }
}

export function* watchPutUser() {
  yield takeEvery(PUT_USER_REQUEST, putUser);
}
