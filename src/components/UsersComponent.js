import React from 'react'
import { useEffect } from 'react';
import { getUsersRequest } from '../redux/actions/getActions'
import { connect } from 'react-redux';

const UsersComponent = (props) => {
  const { users, loadUsers } = props;
  useEffect(() => {
    loadUsers();
  }, [])

  return (
    <>
      {
        users.users.map(user => 
        <li key={user.id}>
          {user.name}
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
    loadUsers: () => dispatch(getUsersRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
