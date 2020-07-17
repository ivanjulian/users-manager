import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {watchGetUsers} from './sagas/getSaga'
import {watchPostUser} from './sagas/postSaga'
import {watchDeleteUser} from './sagas/deleteUserSaga'

import logger from 'redux-logger'

const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      saga,
      logger
    )
  )
)

saga.run(watchGetUsers)
saga.run(watchPostUser)
saga.run(watchDeleteUser)