import React from 'react';

import Tabs from '../tabs/tabs';
import Filters from '../filters/filters';
import TicketsList from '../ticketsList/ticketsList';
import ShowMore from '../showMore/showMore';

import logo from './logo.png';
import classes from './app.module.scss';

const App = () => (
  <div className={classes.app}>
    <img className={classes.app__logo} src={logo} alt="logo" />
    <div className={classes.app__content}>
      <Filters />
      <main className={classes.app__main}>
        <Tabs />
        <TicketsList />
        <ShowMore />
      </main>
    </div>
  </div>
);

export default App;
