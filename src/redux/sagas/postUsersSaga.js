import { takeEvery, put, call } from 'redux-saga/effects';
import { tooledAxios as axios } from '../axiosConfig';

import { POST_USER_REQUEST } from '../types';
import { postUserSuccess, postUserFailure } from '../actions/postActions';
import { getUsersSuccess, getUsersFailure } from '../actions/getActions';
import { fetchData } from './getUsersSaga';

const postData = async (newUser) => {
  const jsonNewUser = JSON.stringify(newUser.payload);
  const response = await axios.post('/users', jsonNewUser);

  return response;
};

function* postUser(newUser) {
  try {
    const payload = yield call(postData, newUser);
    yield put(postUserSuccess(payload));
    const update = yield call(fetchData); // updating users after post user
    yield put(getUsersSuccess(update));
  } catch (error) {
    yield put(postUserFailure(error));
    yield put(getUsersFailure(error));
  }
}

export function* watchPostUser() {
  yield takeEvery(POST_USER_REQUEST, postUser);
}
