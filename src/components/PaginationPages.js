import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationPages = (props) => {
  const { pageNumbers, paginate, currentPage } = props;

  const handleChange = (event, value) => {
    paginate(value)
  }
  return (
    <>
      <Pagination count={pageNumbers} page={currentPage} onChange={handleChange} />
    </>
  )
}