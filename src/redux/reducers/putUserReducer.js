import {
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_FAILURE
} from '../types'

const initialState = {
  loading: false,
  editedUser: {},
  error: ''
}

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        editedUser: action.payload
      }

    case PUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        editedUser: action.payload,
        error: ''
      }
    case PUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}