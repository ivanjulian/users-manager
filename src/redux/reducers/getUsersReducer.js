import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../types'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ''
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}