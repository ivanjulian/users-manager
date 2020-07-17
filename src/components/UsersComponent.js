import React from 'react'
import { useEffect } from 'react';
import { getUsersRequest } from '../redux/actions/getActions'
import { deleteUserRequest } from '../redux/actions/deleteActions'

import { connect } from 'react-redux';

const UsersComponent = (props) => {
  const { users, loadUsers, deleteUser } = props;
  useEffect(() => {
    loadUsers();
  }, [])

  return (
    <>
      {
        users.users.map(user => 
        <li key={user.id}>
          Name: {user.name} <br/>
          Surname: {user.surname} <br/>
          Description: {user.desc} <br/>
          <button onClick={() =>deleteUser(user.id)}>Delete</button>
        </li>)
      }
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
    deleteUser: (id)=> dispatch(deleteUserRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
