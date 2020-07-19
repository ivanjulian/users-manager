import {watchGetUsers} from './getUsersSaga'
import {watchPostUser} from './postUsersSaga'
import {watchDeleteUser} from './deleteUserSaga'
import {watchPutUser} from './putUserSaga'
import { all, fork } from 'redux-saga/effects'

export function* rootSagas(){
  yield all([fork(watchGetUsers)]);
  yield all([fork(watchPostUser)]);
  yield all([fork(watchDeleteUser)]);
  yield all([fork(watchPutUser)]);
}