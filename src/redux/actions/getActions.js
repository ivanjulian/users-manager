import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../types'

export const getUsersRequest = () => {
  return{
    type: GET_USERS_REQUEST
  }
}

export const getUsersSuccess = (users) => {
  return{
    type: GET_USERS_SUCCESS,
    payload: users
  }
}

export const getUsersFailure = (error) => {
  return{
    type: GET_USERS_FAILURE,
    payload: error
  }
}