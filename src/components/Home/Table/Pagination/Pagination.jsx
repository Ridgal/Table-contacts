import React from "react";
import './Pagination.css';
import { useDispatch } from "react-redux";
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { postsCurrentPage } from "../../../../redux/posts/actions";

const Pagination = ({ perPage, currentPage }) => {

  const dispatch = useDispatch();

  const pages = []
  for (let i = 1; i <= perPage; i++) {
    pages.push(i)
  };

  const prevPage = () => {
    const prevPage = currentPage -1
    if (prevPage > 0) {
      dispatch(postsCurrentPage(currentPage - 1));
    } 
  };

  const nextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage <= perPage) {
      // debugger
      dispatch(postsCurrentPage(currentPage + 1));
    }
  };


  return (
    <footer>
      <div>
        <Button
          variant="light"
          className="btn-prev"
          onClick={prevPage}>
          <h6>Назад</h6>
        </Button>
      </div>
      <div className='pages'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup
            className="me-2" 
            aria-label="First group">
          {pages.map((page) => 
            <Button
              key={page}
              className={currentPage === page ? 'btn-routes-active' : 'btn-routes'}
              variant="light"
              onClick={ () => dispatch(postsCurrentPage(page))}>
              {page}
            </Button> 
            )}             
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <div>
        <Button
          variant="light"
          className="btn-next"
          onClick={nextPage}>
          <h6>Далее</h6>
        </Button>
      </div>
    </footer>
  )
};

export default Pagination;