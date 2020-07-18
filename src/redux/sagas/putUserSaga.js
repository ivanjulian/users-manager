import { takeEvery, put, call } from 'redux-saga/effects'
import { PUT_USER_REQUEST } from '../types'
import { putUserSuccess, putUserFailure } from '../actions/putActions'
import Axios from 'axios'
import { fetchData } from './getSaga'
import { getUsersSuccess, getUsersFailure } from '../actions/getActions'

const apiPutUser = async (action) => {

  const headers = {
    'Content-Type': 'application/json'
  }
  const editedUser = JSON.stringify(action.payload);
  // console.log('action', action)
  // console.log('jsonEditedUser', editedUser)
  const response = await Axios.put(`http://77.120.241.80:8911/api/user/${action.payload.id}`, editedUser, {
    headers
  })

  //console.log({ response })
  return response
}

function* putUser(action) {
  try {
    const payload = yield call(apiPutUser, action)
    yield put(putUserSuccess(payload))
    const update = yield call(fetchData) // updating users after put user
    yield put(getUsersSuccess(update))   
  } catch (error) {
    yield put(putUserFailure(error))
    yield put(getUsersFailure(error))
  }

}

export function* watchPutUser() {
  yield takeEvery(PUT_USER_REQUEST, putUser)
}