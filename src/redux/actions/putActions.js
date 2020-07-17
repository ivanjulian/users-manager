import {
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_FAILURE
} from '../types'

export const putUserRequest = (editedUser) => {
  return{
    type: PUT_USER_REQUEST,
    payload: editedUser
  }
}

export const putUserSuccess = (user) => {
  return{
    type: PUT_USER_SUCCESS,
    payload: user
  }
}

export const putUserFailure = (error) => {
  return{
    type: PUT_USER_FAILURE,
    payload: error
  }
}