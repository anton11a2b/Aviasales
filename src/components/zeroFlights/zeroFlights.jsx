import React from 'react';
import { useSelector } from 'react-redux';

import errorMessage from '../../utils/errorMessage';

import classes from './zeroFlights.module.scss';

const ZeroFlights = () => {
  const { errorStatus } = useSelector((state) => state);
  const aa = errorMessage(errorStatus)
    ? errorMessage(errorStatus)
    : 'Рейсов, подходящих под заданные фильтры, не найдено.';

  return <span className={classes.zeroFlights}>{aa}</span>;
};

export default ZeroFlights;
