import React from 'react';
import { useSelector } from 'react-redux';

import Tab from '../tab/tab';

import classes from './tabs.module.scss';

const Tabs = () => {
  const tabs = useSelector((state) => state.tabs);

  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => (
        <Tab id={tab.id} key={tab.id} title={tab.title} isActive={tab.active} />
      ))}
    </div>
  );
};

export default Tabs;
