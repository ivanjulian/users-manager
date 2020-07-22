import { takeEvery, put, call } from 'redux-saga/effects';
import { tooledAxios as axios } from '../axiosConfig';

import { GET_USERS_REQUEST } from '../types';
import { getUsersSuccess, getUsersFailure } from '../actions/getActions';

export const fetchData = async () => {
  const response = await axios.get('/users');
  return await response.data;
};

function* getUsers() {
  try {
    const payload = yield call(fetchData);
    yield put(getUsersSuccess(payload));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}
