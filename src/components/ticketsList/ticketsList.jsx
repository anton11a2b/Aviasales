import { v4 as uuid } from 'uuid';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Ticket from '../ticket/ticket';
import Spinner from '../spinner/spinner';
import ZeroFlights from '../zeroFlights/zeroFlights';

import sortTickets from '../../utils/sortTickets';
import filterTickets from '../../utils/filterTickets';
import { getSearchId, disableLoader } from '../../redux/actions/actionCreators';

const TicketsList = () => {
  const dispatch = useDispatch();
  const { tickets, activeTab, filters, quantityTickets, loading, errorStatus } = useSelector((state) => state);
  const ticketsList = filterTickets(sortTickets(tickets, activeTab), filters);
  const hasData = !(loading || errorStatus || !ticketsList);
  const loader = loading && !errorStatus ? <Spinner /> : null;
  const zeroFlights = !(loader || ticketsList);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (tickets.length !== 0) {
      dispatch(disableLoader());
    }
  }, [tickets, dispatch]);

  return (
    <section>
      {hasData &&
        ticketsList
          .slice(0, quantityTickets)
          .map((ticket) => (
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
      {loader}
      {zeroFlights && <ZeroFlights />}
    </section>
  );
};

export default TicketsList;
