import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from '../types'

const initialState = {
  loading: false,
  userToDelete: {},
  error: ''
}

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        userToDelete: action.payload
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userToDelete: action.payload,
        error: ''
      }
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}