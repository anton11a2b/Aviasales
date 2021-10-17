import React from 'react';
import { useSelector } from 'react-redux';

import Filter from '../filter/filter';

import classes from './filters.module.scss';

const Filters = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <aside className={classes.filters}>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      {filters.map((filter) => (
        <Filter key={filter.id} title={filter.title} filter={filter} />
      ))}
    </aside>
  );
};

export default Filters;
