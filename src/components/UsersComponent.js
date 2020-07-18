import React from 'react'
import { useEffect } from 'react';
import { getUsersRequest } from '../redux/actions/getActions'
import { deleteUserRequest } from '../redux/actions/deleteActions'

import { connect } from 'react-redux';
import { useState } from 'react';
import { putUserRequest } from '../redux/actions/putActions';
import { UserCard } from './UserCard'
import { EditUserCard } from './EditUserCard';
import { List, ListItem } from '@material-ui/core';

const UsersComponent = (props) => {
  const { users, loadUsers, deleteUser, putUser } = props;
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

  // const change = (e) => {
  //   setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
  //   console.log(editedUser);
  // };
  return (
    <>
      <List>
        {
          users.users.map(user => {
            if (editMode.isEdit && user.id === editMode.idUserToEdit) {
              return (
                <ListItem className="user-li" key={user.id}>
                  <EditUserCard putUser={putUser} loadUsers={loadUsers} editUser={editUser} user={user} />
                </ListItem>)
            } else {
              return (
                <ListItem className="user-li" key={user.id}>
                  <UserCard deleteUser={deleteUser} loadUsers={loadUsers} editUser={editUser} user={user} />
                </ListItem>)
            }
          })
        }
      </List>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(getUsersRequest()),
    deleteUser: (id) => dispatch(deleteUserRequest(id)),
    putUser: (user) => dispatch(putUserRequest(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)



// <form onSubmit={(e) => {
//   e.preventDefault();
//   putUser(editedUser);
//   setEditMode({ isEdit: false, idUserToEdit: null })
//   console.log(editedUser)

// }} >
//   Edit Name: <input name="name" onChange={e => change(e)} defaultValue={user.name} type="text" />  <br />
//   Edit Surname:<input name="surname" onChange={e => change(e)} defaultValue={user.surname} type="text" />  <br />
//   Edit Description:<input name="desc" onChange={e => change(e)} defaultValue={user.desc} type="text" /> <br />
//   <button type="submit">Save</button>
//   <button onClick={() => editUser(user)}>Cancel</button>
// </form>