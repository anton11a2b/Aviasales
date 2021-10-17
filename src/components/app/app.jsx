import React from 'react';
import { useSelector } from 'react-redux';

import Tabs from '../tabs/tabs';
import Filters from '../filters/filters';
import ShowMore from '../showMore/showMore';
import TicketsList from '../ticketsList/ticketsList';

import logo from './logo.png';
import classes from './app.module.scss';

const App = () => {
  const { quantityTickets, loading, errorStatus } = useSelector((state) => state);
  const hasShowMore = !(!quantityTickets || loading || errorStatus);

  return (
    <div className={classes.app}>
      <img className={classes.app__logo} src={logo} alt="logo" />
      <div className={classes.app__content}>
        <Filters />
        <main className={classes.app__main}>
          <Tabs />
          <TicketsList />
          {hasShowMore && <ShowMore />}
        </main>
      </div>
    </div>
  );
};

export default App;
