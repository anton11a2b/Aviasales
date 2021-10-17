import React from 'react';
import { useDispatch } from 'react-redux';

import { showMore } from '../../redux/actions/actionCreators';

import classes from './showMore.module.scss';

const ShowMore = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(showMore());
  };

  return (
    <button onClick={onClick} className={classes.showMore} type="button">
      Показать ещё 5 билетов!
    </button>
  );
};

export default ShowMore;
