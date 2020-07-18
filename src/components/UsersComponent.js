import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getUsersRequest } from '../redux/actions/getActions'
import { deleteUserRequest } from '../redux/actions/deleteActions'
import { putUserRequest } from '../redux/actions/putActions';

import { Paginator } from './Paginator.js'

const UsersComponent = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const loadUsers = () => dispatch(getUsersRequest());
  const deleteUser = (id) => dispatch(deleteUserRequest(id));
  const putUser = (user) => dispatch(putUserRequest(user));

  useEffect(() => {
    loadUsers();
  }, [])

  const [editMode, setEditMode] = useState({
    isEdit: false,
    idUserToEdit: null
  })

  const [editedUser, setEditedUser] = useState({
    id: null,
    name: '',
    surname: '',
    desc: ''
  })

  useEffect(() => {
    loadUsers();
  }, [])
 

  const editUser = (user) => {
    setEditMode({ ...editMode, isEdit: !editMode.isEdit, idUserToEdit: user.id })
    setEditedUser({ ...editedUser, id: user.id })
  }

  return (
    <>
    {
      users.users?
      <Paginator
        users={users}
        editMode={editMode}
        putUser={putUser}
        loadUsers={loadUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      : <p>Loading...</p>
    }
    </>
  )
}

export default UsersComponent;
