import {
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_FAILURE
} from '../types'

export const putUserRequest = () => {
  return{
    type: PUT_USER_REQUEST,
  }
}

export const putUserSuccess = (users) => {
  return{
    type: PUT_USER_SUCCESS,
    payload: users
  }
}

export const putUserFailure = (error) => {
  return{
    type: PUT_USER_FAILURE,
    payload: error
  }
}