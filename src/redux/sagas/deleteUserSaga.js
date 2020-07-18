import { takeEvery, put, call } from 'redux-saga/effects'
import { DELETE_USER_REQUEST, } from '../types'
import { deleteUserSuccess, deleteUserFailure } from '../actions/deleteActions'
import Axios from 'axios'
import { fetchData } from './getSaga'
import { getUsersSuccess, getUsersFailure } from '../actions/getActions'


const apiDeleteUser = async (action) => {

  const headers = {
    'Content-Type': 'application/json'
  }
  const userID = action.payload;
  //console.log('jsonNewUser', userID)
  const response = await Axios.delete(`http://77.120.241.80:8911/api/user/${userID}`, userID, {
    headers
  })

  //console.log({ response })
  return response
}

function* deleteUser(action) {
  try {
    const payload = yield call(apiDeleteUser, action)
    yield put(deleteUserSuccess(payload))
    const update = yield call(fetchData) // updating users after deleting user
    yield put(getUsersSuccess(update))   
  } catch (error) {
    yield put(deleteUserFailure(error))
    yield put(getUsersFailure(error))
  }

}

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER_REQUEST, deleteUser)
}