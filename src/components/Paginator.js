import React, { useEffect, useState, useMemo } from 'react';
import { List, ListItem } from '@material-ui/core';

import UserCard from './UserCard';
import { EditUserCard } from './EditUserCard';
import { PaginationPages } from './PaginationPages';

const Paginator = (props) => {
  const { users, editMode, putUser, loadUsers, editUser, deleteUser } = props;

  const [paginatorInfo, setPaginatorInfo] = useState({
    currentPage: 1, //current opened page
    usersPerPage: 5, //number of users on the page
    currentUsers: [], //users on the page
    pageNumbers: null, //ul with pages number for navigation
  });
  const {
    currentPage,
    usersPerPage,
    currentUsers,
    pageNumbers,
  } = paginatorInfo;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginate = (page) => {
    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const someUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);
    setPaginatorInfo((allState) => {
      return {
        ...allState,
        currentPage: page,
        currentUsers: someUsers,
      };
    });
  };

  const calcPaginationInfo = () => {
    let numberOfPages = Math.ceil(users.users.length / usersPerPage);
    const someUsers = users.users.slice(indexOfFirstUser, indexOfLastUser);

    setPaginatorInfo((allState) => {
      return {
        ...allState,
        currentUsers: someUsers,
        pageNumbers: numberOfPages,
      };
    });

    //console.log(paginatorInfo);
  };

  useEffect(() => {
    calcPaginationInfo();
  }, [users]);

  return (
    <>
      <PaginationPages
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        paginate={paginate}
      />
      <List>
        {currentUsers.map((user) =>
          editMode.isEdit && user.id === editMode.idUserToEdit ? (
            <ListItem className="user-li" key={user.id}>
              <EditUserCard
                putUser={putUser}
                loadUsers={loadUsers}
                editUser={editUser}
                user={user}
              />
            </ListItem>
          ) : (
            <ListItem className="user-li" key={user.id}>
              <UserCard
                deleteUser={deleteUser}
                loadUsers={loadUsers}
                editUser={editUser}
                user={user}
              />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  } else {
    return false;
  }
};

export default React.memo(Paginator, areEqual);
