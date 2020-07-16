import {
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE
} from '../types'

export const postUserRequest = () => {
  return {
    type: POST_USER_REQUEST
  }
}

export const postUserSuccess = (users) => {
  return {
    type: POST_USER_SUCCESS,
    payload: users
  }
}

export const postUserFailure = (error) => {
  return {
    type: POST_USER_FAILURE,
    payload: error
  }
}