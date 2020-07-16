import { takeEvery, put, call } from 'redux-saga/effects'
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../types'
import { getUsersSuccess, getUsersFailure } from '../actions/getActions'
import Axios from 'axios'

const fetchData = async() =>{
  const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(response)
  return await response.data
}

function* getUsers() {
  try {
    const payload = yield call(fetchData)
    yield put(getUsersSuccess(payload))
  }catch(error){
    yield put(getUsersFailure(error))
  }
   
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers)
}