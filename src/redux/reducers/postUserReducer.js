import {
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE
} from '../types'

const initialState = {
  loading: false,
  userToGive: [],
  error: ''
}

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_REQUEST:
      return {
        ...state,
        loading: true,
        userToGive: action.payload
      }

    case POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userToGive: action.payload,
        error: ''
      }
    case POST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}