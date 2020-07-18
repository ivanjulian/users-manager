import React, { useEffect } from 'react';
//import  './style.css';

export const PaginationPages = (props) => {
  const {pageNumbers, paginate} = props;
  return (
    <nav>
      select page:
      <ul className="paginator-ul">
        {
          pageNumbers.map(pageNum =>
            <li className="paginator-li" key={pageNum}>
              <a href="#" onClick={()=>paginate(pageNum)}>
                {pageNum}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  )
}