const sortTickets = (tickets, id) => {
  if (id === 2) {
    return tickets.sort(
      (prev, next) =>
        prev.segments[0].duration + prev.segments[1].duration - (next.segments[0].duration + next.segments[1].duration)
    );
  }
  if (id === 3) {
    return tickets.sort(
      (prev, next) =>
        prev.price +
        prev.segments[0].duration +
        prev.segments[1].duration -
        (next.price + next.segments[0].duration + next.segments[1].duration)
    );
  }

  return tickets.sort((prev, next) => prev.price - next.price);
};

export default sortTickets;
