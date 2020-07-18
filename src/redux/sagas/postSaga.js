import { takeEvery, put, call } from 'redux-saga/effects'
import { POST_USER_REQUEST } from '../types'
import { postUserSuccess, postUserFailure } from '../actions/postActions'
import Axios from 'axios'
import { fetchData } from './getSaga'
import { getUsersSuccess, getUsersFailure } from '../actions/getActions'

const postData = async (newUser) => {

  const headers = {
    'Content-Type': 'application/json'
  }
  const jsonNewUser = JSON.stringify(newUser.payload)
  //console.log('jsonNewUser', jsonNewUser)
  const response = await Axios.post('http://77.120.241.80:8911/api/users', jsonNewUser, {
    headers
  })

  //console.log({ response })
  return response
}

function* postUser(newUser) {
  try {
    const payload = yield call(postData, newUser)
    yield put(postUserSuccess(payload))
    const update = yield call(fetchData) // updating users after post user
    yield put(getUsersSuccess(update))   
  } catch (error) {
    yield put(postUserFailure(error))
    yield put(getUsersFailure(error))
  }

}

export function* watchPostUser() {
  yield takeEvery(POST_USER_REQUEST, postUser)
}