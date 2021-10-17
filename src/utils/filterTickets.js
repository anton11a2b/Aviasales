const filterTickets = (tickets, filters) => {
  const checkedId = filters.filter((filter) => filter.checked).map((filter) => filter.id);
  let TicketsList = [];

  if (filters.every((filter) => filter.checked)) {
    return tickets;
  }
  if (checkedId.some((id) => id === 2)) {
    TicketsList = [
      ...new Set([
        ...TicketsList,
        ...tickets.filter((ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0),
      ]),
    ];
  }
  if (checkedId.some((id) => id === 3)) {
    TicketsList = [
      ...new Set([
        ...TicketsList,
        ...tickets.filter((ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1),
      ]),
    ];
  }
  if (checkedId.some((id) => id === 4)) {
    TicketsList = [
      ...new Set([
        ...TicketsList,
        ...tickets.filter((ticket) => ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2),
      ]),
    ];
  }
  if (checkedId.some((id) => id === 5)) {
    TicketsList = [
      ...new Set([
        ...TicketsList,
        ...tickets.filter((ticket) => ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3),
      ]),
    ];
  }
  if (TicketsList.length === 0) {
    return null;
  }

  return TicketsList;
};

export default filterTickets;
