import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';
import { rootSagas } from './sagas/rootSagas';

const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSagas);
