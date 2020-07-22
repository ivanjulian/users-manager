import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { getUsersRequest } from '../redux/actions/getActions';
import { deleteUserRequest } from '../redux/actions/deleteActions';
import { putUserRequest } from '../redux/actions/putActions';

import Paginator from './Paginator.js';

const UsersComponent = () => {
  const users = useSelector(
    createSelector(
      (state) => state.users,
      (users) => users
    )
  );
  const dispatch = useDispatch();
  const loadUsers = () => dispatch(getUsersRequest());
  const deleteUser = (id) => dispatch(deleteUserRequest(id));
  const putUser = (user) => dispatch(putUserRequest(user));

  useEffect(() => {
    loadUsers();
  }, []);

  const [editMode, setEditMode] = useState({
    isEdit: false,
    idUserToEdit: null,
  });

  const [editedUser, setEditedUser] = useState({
    id: null,
    name: '',
    surname: '',
    desc: '',
  });

  const editUser = (user) => {
    setEditMode({
      ...editMode,
      isEdit: !editMode.isEdit,
      idUserToEdit: user.id,
    });
    setEditedUser({ ...editedUser, id: user.id });
  };

  return (
    <>
      {users.users ? (
        <Paginator
          users={users}
          editMode={editMode}
          putUser={putUser}
          loadUsers={loadUsers}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UsersComponent;
