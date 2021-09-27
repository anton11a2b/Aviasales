import { v4 as uuid } from 'uuid';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Ticket from '../ticket/ticket';
import { getTickets } from '../../redux/actions/actionCreators';

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <section>
      {tickets.slice(0, 5).map((ticket) => (
        <Ticket
          key={uuid()}
          price={ticket.price}
          carrier={ticket.carrier}
          date={ticket.segments[0].date}
          stops={ticket.segments[0].stops}
          backDate={ticket.segments[1].date}
          backStops={ticket.segments[1].stops}
          departure={ticket.segments[0].origin}
          duration={ticket.segments[0].duration}
          backDuration={ticket.segments[1].duration}
          destination={ticket.segments[0].destination}
        />
      ))}
    </section>
  );
};

export default TicketsList;
