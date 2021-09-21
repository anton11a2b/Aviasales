import React from 'react';

import classes from './filters.module.scss'

const Filters = () => (
  <aside className={classes.filters}>
    <h2 className={classes.filters__title}>Количество пересадок</h2>
		<div className={classes.filters__filter}>
			{/* <span></span> */}
      <input className={classes['filters__filter-input']} type="checkbox" id="All" name="All" />
      <label className={classes['filters__filter-title']} htmlFor="All">
        Все
      </label>
    </div>
    <div className={classes.filters__filter}>
      <input className={classes['filters__filter-input']} type="checkbox" id="noTransfers" name="noTransfers" />
      <label className={classes['filters__filter-title']} htmlFor="noTransfers">
        Без пересадок
      </label>
    </div>
    <div className={classes.filters__filter}>
      <input className={classes['filters__filter-input']} type="checkbox" id="oneTransfer" name="oneTransfer" />
      <label className={classes['filters__filter-title']} htmlFor="oneTransfer">
        1 пересадка
      </label>
    </div>
    <div className={classes.filters__filter}>
      <input className={classes['filters__filter-input']} type="checkbox" id="twoTransfers" name="twoTransfers" />
      <label className={classes['filters__filter-title']} htmlFor="twoTransfers">
        2 пересадка
      </label>
    </div>
    <div className={classes.filters__filter}>
      <input className={classes['filters__filter-input']} type="checkbox" id="threeTransfers" name="threeTransfers" />
      <label className={classes['filters__filter-title']} htmlFor="threeTransfers">
        3 пересадка
      </label>
    </div>
  </aside>
);

export default Filters;
