import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO, add } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({
  date,
  stops,
  price,
  carrier,
  backDate,
  duration,
  backStops,
  departure,
  destination,
  backDuration,
}) => {
  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;

    if (minutes === 0) {
      return `${hours} ч.`;
    }

    return `${hours} ч. ${minutes} мин.`;
  }

  function getTransfers(transfers) {
    if (transfers.length > 0) {
      return transfers.join(', ');
    }

    return null;
  }

  function getValueTransfers(stops) {
    switch (stops.length) {
      case 0:
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default:
        return null;
    }
  }

  function getDateDeparture(date) {
    return format(parseISO(date), 'hh:mm');
  }

  function getDateDestination(date, duration) {
    return format(add(parseISO(date), { hours: Math.trunc(duration / 60), minutes: duration % 60 }), 'hh:mm');
  }

  function getPrice(price) {
    const thousands = String(price).split('').slice(0, 2).join('');

    return `${thousands} ${String(price).split('').slice(2).join('')}`;
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <p className={classes.ticket__price}>{getPrice(price)} ₽ </p>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Airline logo" />
      </div>
      <div className={classes.ticket__info}>
        <div>
          <p className={classes['ticket__title-info']}>
            {departure} — {destination}
          </p>
          <p className={classes['ticket__main-info']}>
            {getDateDeparture(date, duration)}–{getDateDestination(date, duration)}
          </p>
        </div>
        <div>
          <p className={classes['ticket__title-info']}>В пути</p>
          <p className={classes['ticket__main-info']}>{getTimeFromMins(duration)}</p>
        </div>
        <div>
          <p className={classes['ticket__title-info']}>{getValueTransfers(stops)}</p>
          <p className={classes['ticket__main-info']}>{getTransfers(stops)}</p>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div>
          <p className={classes['ticket__title-info']}>
            {destination} — {departure}
          </p>
          <p className={classes['ticket__main-info']}>
            {getDateDeparture(backDate, backDuration)}–{getDateDestination(backDate, backDuration)}
          </p>
        </div>
        <div>
          <p className={classes['ticket__title-info']}>В пути</p>
          <p className={classes['ticket__main-info']}>{getTimeFromMins(backDuration)}</p>
        </div>
        <div>
          <p className={classes['ticket__title-info']}>{getValueTransfers(backStops)}</p>
          <p className={classes['ticket__main-info']}>{getTransfers(backStops)}</p>
        </div>
      </div>
    </div>
  );
};

Ticket.defaultProps = {
  price: 0,
  duration: 0,
  backDuration: 0,
  stops: [],
  backStops: [],
  date: '',
  carrier: '',
  backDate: '',
  departure: '',
  destination: '',
};

Ticket.propTypes = {
  price: PropTypes.number,
  duration: PropTypes.number,
  backDuration: PropTypes.number,
  date: PropTypes.string,
  carrier: PropTypes.string,
  backDate: PropTypes.string,
  departure: PropTypes.string,
  destination: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.any),
  backStops: PropTypes.arrayOf(PropTypes.any),
};

export default Ticket;
