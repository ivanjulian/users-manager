import { takeEvery, put, call } from 'redux-saga/effects'
import {
  POST_USER_REQUEST,
} from '../types'
import { postUserSuccess, postUserFailure } from '../actions/postActions'
import Axios from 'axios'

const postData = async() =>{
  const params = {
    name: 'John',
    surename: 'Dou',
    description: 'Nice man'
  }
  const response = await Axios.post('https://jsonplaceholder.typicode.com/users', params) 
  console.log({params})
  console.log({response})
  return await response.data
}

function* postUser() {
  try {
    const payload = yield call(postData)
    yield put(postUserSuccess(payload))
  }catch(error){
    yield put(postUserFailure(error))
  }
   
}

export function* watchPostUser() {
  yield takeEvery(POST_USER_REQUEST, postUser)
}