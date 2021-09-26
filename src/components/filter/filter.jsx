import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { checked } from '../../redux/actions/actionCreators';

import classes from './filter.module.scss';

const Filter = ({ title, filter }) => {
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(checked(filter));
  };

  return (
    <div className={classes.filter}>
      <input
        checked={filter.checked}
        onChange={onChange}
        className={classes.filter__input}
        type="checkbox"
        name={title}
        id={title}
      />
      <label className={classes.filter__title} htmlFor={title}>
        {title}
      </label>
    </div>
  );
};

Filter.defaultProps = {
  title: '',
  filter: {},
};

Filter.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.objectOf(PropTypes.any),
};

export default Filter;
