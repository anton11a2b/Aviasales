import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

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
        id={title}
        name={title}
        type="checkbox"
        onChange={onChange}
        checked={filter.checked}
        className={classes.filter__input}
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
