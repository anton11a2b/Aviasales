import { CHECKED, GET_TICKETS } from './actions';

export const checked = (checkBox) => ({ type: CHECKED, payload: checkBox });
export const getTickets = () => async (dispatch) => {
  try {
    const searchId = await fetch('https://front-test.beta.aviasales.ru/search');

    if (searchId.ok) {
      const id = await searchId.json();
      const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`);
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: GET_TICKETS, payload: data.tickets });
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
