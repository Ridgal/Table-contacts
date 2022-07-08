import { Button } from 'react-bootstrap';
import { ArrowDown, ArrowUp, ArrowDownUp } from 'react-bootstrap-icons';

import './ButtonSort.css';

const ButtonSort = ({title, initKey, keySort, typeSort, onClick}) => {

  const getSortType = (type) => {
    if(type === null) {
        return 'ASC';
      }
      if(type === 'ASC') {
        return 'DESC';
      }
      if(type === 'DESC') {
        return null;
      }
      return null;
  }; 

  const edit = () => {
    if(typeSort === null) {
      const type = getSortType(typeSort);
      onClick(initKey, type);
    }
    if(initKey === keySort) {
      const type = getSortType(typeSort);
      onClick(initKey, type);
    } else {
      onClick(initKey, 'ASC');
    }
  };

  const Icon = () => {
    if(initKey === keySort) {
      if(typeSort === 'ASC') {
        return (
          <ArrowDown />
        )
      }
      if(typeSort === 'DESC') {
        return (
          <ArrowUp />
        )
      }
    } 
    return (
      <ArrowDownUp />
    )
  };

  return (
    <Button className='btn-sort' onClick={edit} >
      <h6>{title}</h6>
      <Icon />
    </Button>
  )
};

export default ButtonSort;