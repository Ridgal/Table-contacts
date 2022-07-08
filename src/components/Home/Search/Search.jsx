import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postsSearch } from '../../../redux/posts/actions';

import './Search.css';

const Search = () => {

  const dispatch = useDispatch();

  const { valueSearch } = useSelector((state) => state.posts);

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(getPosts(valueSearch))
  };

  const onChange = e => {
    dispatch(postsSearch(e.target.value))
  };

  return (
    <header>
      <Form className='form-field' onSubmit={handleSubmit}>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Поиск"
            value={valueSearch}
            onChange={onChange}
            className="search"
          />
          <Button
            className="search-btn"
            type='submit'
            onClick={ () => dispatch(getPosts(valueSearch))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </Button>
        </InputGroup>
      </Form>
    </header>
  )
};

export default Search;