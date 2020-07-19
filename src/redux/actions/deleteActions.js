import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from '../types'

export const deleteUserRequest = (id) => {
  return{
    type: DELETE_USER_REQUEST,
    payload: id
  }
}

export const deleteUserSuccess = (users) => {
  return{
    type: DELETE_USER_SUCCESS,
    payload: users
  }
}

export const deleteUserFailure = (error) => {
  return{
    type: DELETE_USER_FAILURE,
    payload: error
  }
}