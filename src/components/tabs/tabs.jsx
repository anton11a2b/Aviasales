import React from 'react';

import classes from './tabs.module.scss'

const Tabs = () => (
  <div className={classes.tabs}>
    <button className={classes.tabs__tab} type="button">
      Самый дешевый
    </button>
    <button className={classes.tabs__tab} type="button">
      Самый быстрый
    </button>
    <button className={classes.tabs__tab} type="button">
      Оптимальный
    </button>
  </div>
);

export default Tabs;
