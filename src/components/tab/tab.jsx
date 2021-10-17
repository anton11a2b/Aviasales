import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { activeTab } from '../../redux/actions/actionCreators';

import classes from './tab.module.scss';

const Tab = ({ title, id, isActive }) => {
  const dispatch = useDispatch();
  let classN = classes.tab;

  if (isActive) {
    classN += ` ${classes['tab--active']}`;
  }

  const onClick = () => {
    dispatch(activeTab(id));
  };

  return (
    <button onClick={onClick} className={classN} type="button">
      {title}
    </button>
  );
};

Tab.defaultProps = {
  id: 0,
  title: '',
  isActive: false,
};

Tab.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Tab;
