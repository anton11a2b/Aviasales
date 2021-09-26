import React from 'react';

import classes from './ticket.module.scss';

const Ticket = () => (
  <div className={classes.ticket}>
    <div className={classes.ticket__header}>
      <p className={classes.ticket__price}>13 400 ₽ </p>
      <img alt="Airline logo" />
    </div>
    <div className={classes.ticket__info}>
      <div>
        <p className={classes['ticket__title-info']}>MOW — HKT</p>
        <p className={classes['ticket__main-info']}>10:45–08:00</p>
      </div>
      <div>
        <p className={classes['ticket__title-info']}>В пути</p>
        <p className={classes['ticket__main-info']}>21 ч. 15 мин.</p>
      </div>
      <div>
        <p className={classes['ticket__title-info']}>2 пересадки</p>
        <p className={classes['ticket__main-info']}>HKG, JNB</p>
      </div>
    </div>
    <div className={classes.ticket__info}>
      <div>
        <p className={classes['ticket__title-info']}>MOW — HKT</p>
        <p className={classes['ticket__main-info']}>11:20–00:50</p>
      </div>
      <div>
        <p className={classes['ticket__title-info']}>В пути</p>
        <p className={classes['ticket__main-info']}>13 ч. 30 мин.</p>
      </div>
      <div>
        <p className={classes['ticket__title-info']}>1 пересадка</p>
        <p className={classes['ticket__main-info']}>HKG</p>
      </div>
    </div>
  </div>
);

export default Ticket;
