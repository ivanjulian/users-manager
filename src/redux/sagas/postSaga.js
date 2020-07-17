import { takeEvery, put, call } from 'redux-saga/effects'
import {
  POST_USER_REQUEST,
} from '../types'
import { postUserSuccess, postUserFailure } from '../actions/postActions'
import Axios from 'axios'

const postData = async() =>{
  const params = JSON.stringify({
    id: 1431,
    name: 'John',
    surname: 'Dou',
    desc: 'man'
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const response = await Axios.post('http://77.120.241.80:8911/api/users', params, {
    headers
  }) 
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