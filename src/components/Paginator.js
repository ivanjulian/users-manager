import React, {useEffect, useState} from 'react'
import { List, ListItem } from '@material-ui/core';

import { UserCard } from './UserCard'
import { EditUserCard } from './EditUserCard';
import { PaginationPages } from './PaginationPages'

export const Paginator = (props) => {
  const {
    users,
    editMode,
    putUser,
    loadUsers,
    editUser,
    deleteUser,
  } = props;


  const [paginatorInfo, setPaginatorInfo] = useState({
    currentPage: 1,  //current opened page 
    usersPerPage: 5,//number of users on the page
    currentUsers: [],//users on the page
    pageNumbers: []  //ul with pages number for navigation
  })
  const {
    currentPage,
    usersPerPage,
    currentUsers,
    pageNumbers } = paginatorInfo;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginate = (page) => {
    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const someUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);
    setPaginatorInfo(allState => {
      return {
        ...allState,
        currentPage: page,
        currentUsers: someUsers
      }
    });
  }

  const calcPaginationInfo = () => {
    let pageNumbersArray = [];
    const someUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);

    for (let i = 1; i <= Math.ceil(users.users.length / usersPerPage); i++) {
      pageNumbersArray.push(i);
    }

    setPaginatorInfo(allState => {
      return {
        ...allState,
        currentUsers: someUsers,
        pageNumbers: pageNumbersArray
      }
    })

    console.log(paginatorInfo);
  }

  useEffect(() => {
    calcPaginationInfo();
  }, [users])

  return (
    <>
      <PaginationPages pageNumbers={pageNumbers} paginate={paginate} />
      <List>
        {
          currentUsers.map(user => {
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