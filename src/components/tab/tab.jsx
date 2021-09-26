import React from 'react';
import PropTypes from 'prop-types';

import classes from './tab.module.scss';

const Tab = ({ title }) => (
  <button className={classes.tab} type="button">
    {title}
  </button>
);

Tab.defaultProps = {
  title: '',
};

Tab.propTypes = {
  title: PropTypes.string,
};

export default Tab;
