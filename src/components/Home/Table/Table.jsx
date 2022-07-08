import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Table.css';

import ButtonSort from './ButtonSort';
import Pagination from './Pagination';

import { getPosts, sortPosts } from '../../../redux/posts/actions';

const Table =  () => {
  const dispatch = useDispatch();

  const {posts, keySort, typeSort, currentPage, perPage} = useSelector((state) => state.posts);
  
  const lastPostsIndex = currentPage * perPage;
  const firstPostsIndex = lastPostsIndex - perPage;
  const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  const btnSortClick = (id, type) => {
    dispatch(sortPosts(type, id))
  };

  return (
    <div className="table-page">
      <div className="header-table">
        <ButtonSort title={'ID'} initKey={'id'} keySort={keySort} typeSort={typeSort} onClick={btnSortClick}/>
        <ButtonSort title={'Заголовок'} initKey={'title'} keySort={keySort} typeSort={typeSort} onClick={btnSortClick}/>
        <ButtonSort title={'Описание'} initKey={'body'} keySort={keySort} typeSort={typeSort} onClick={btnSortClick}/>
      </div>
      <div className="table-section">
        <table className="table table-bordered table-hover">
          <tbody>
            {currentPosts?.map(
              ((item) => (
                <tr key={item.id}>
                  <th 
                    className="th" 
                    id='id' 
                    scope="row">
                    {item.id}
                  </th>
                  <td id='title'>{item.title}</td>
                  <td id='body'>{item.body}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        perPage={perPage}
        currentPage={currentPage}
      />
    </div>
  )
};

export default Table;

