import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_USERS_REQUEST } from '../types'
import { getUsersSuccess, getUsersFailure } from '../actions/getActions'
import Axios from 'axios'

export const fetchData = async () => {
  const response = await Axios.get('http://77.120.241.80:8911/api/users')
  //console.log(response)
  return await response.data
}

function* getUsers() {
  try {
    const payload = yield call(fetchData)
    yield put(getUsersSuccess(payload))
  } catch (error) {
    yield put(getUsersFailure(error))
  }

}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers)
}