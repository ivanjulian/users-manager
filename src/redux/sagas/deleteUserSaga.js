import { takeEvery, put, call } from 'redux-saga/effects'
import {
  DELETE_USER_REQUEST,
} from '../types'
import { deleteUserSuccess, deleteUserFailure } from '../actions/deleteActions'
import Axios from 'axios'

const apiDeleteUser = async(action) =>{

  const headers = {
    'Content-Type': 'application/json'
  }
  const userID = action.payload;
  console.log('jsonNewUser', userID)
  const response = await Axios.delete(`http://77.120.241.80:8911/api/user/${userID}`, userID, {
    headers
  }) 
  
  console.log({response})
  return response
}

 function* deleteUser(action) {
  try {
    const payload = yield call(apiDeleteUser, action)
    yield  put(deleteUserSuccess(payload))
  }catch(error){
    yield put(deleteUserFailure(error))
  }
   
}

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER_REQUEST, deleteUser)
}