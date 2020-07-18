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
import { PaginationPages } from './PaginationPages'
import { Paginator } from './Paginator.js'

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

  // const [paginatorInfo, setPaginatorInfo] = useState({
  //   currentPage: 1,  //current opened page 
  //   postsPerPage: 5,//number of posts on the page
  //   currentPosts: [],//posts on the page
  //   pageNumbers: []  //ul with pages number for navigation
  // })
  // const {
  //   currentPage,
  //   postsPerPage,
  //   currentPosts,
  //   pageNumbers } = paginatorInfo;

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // const paginate = (page) => {
  //   const indexOfLastPost = page * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const somePosts = users.data.slice(indexOfFirstPost, indexOfLastPost);
  //   console.log({ somePosts })
  //   setPaginatorInfo(allState => {
  //     return {
  //       ...allState,
  //       currentPage: page,
  //       currentPosts: somePosts
  //     }
  //   });
  // }

  useEffect(() => {
    loadUsers();


    // const somePosts = users.users.slice(indexOfFirstPost, indexOfLastPost);
    // for (let i = 1; i <= Math.ceil(users.users.length / postsPerPage); i++) {
    //   pageNumbersArray.push(i);
    // }

    // setPaginatorInfo(allState => {
    //   return {
    //     ...allState,
    //     currentPosts: somePosts,
    //     pageNumbers: pageNumbersArray
    //   }
    // })

    // console.log(paginatorInfo);

  }, [])
  // console.log(paginatorInfo);
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



{/* users.users.map(user => {
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
}) */}