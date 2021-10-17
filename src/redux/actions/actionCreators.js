import { CHECKED, SHOW_MORE, GET_TICKETS, ACTIVE_TAB, ENABLE_LOADER, DISABLE_LOADER, ERROR_STATUS } from './actions';

export const showMore = () => ({ type: SHOW_MORE });
export const enableLoader = () => ({ type: ENABLE_LOADER });
export const disableLoader = () => ({ type: DISABLE_LOADER });
export const activeTab = (id) => ({ type: ACTIVE_TAB, payload: id });
export const checked = (checkBox) => ({ type: CHECKED, payload: checkBox });
export const errorMessage = (status) => ({ type: ERROR_STATUS, payload: status });
export const getTickets = (id) => async (dispatch) => {
  dispatch(enableLoader());

  const recursiveQuery = async () => {
    try {
      const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`);

      if (res.status >= 500) {
				recursiveQuery();
				throw new Error(res.status);
			}

			if (res.status >= 400 && res.status < 500) {
        throw new Error(res.status);
      }

      const data = await res.json();

      dispatch({ type: GET_TICKETS, payload: data.tickets });

      if (data.stop === false) {
        recursiveQuery();
      }

    } catch (err) {
			dispatch(disableLoader());

			if (err.message !== '500') {
				dispatch(errorMessage(err.message));
			}
    }
  };
	recursiveQuery();
};
export const getSearchId = () => async (dispatch) => {
  try {
    const searchId = await fetch('https://front-test.beta.aviasales.ru/search');

		if (!searchId.ok) {
			throw new Error(searchId.status);
		}

		const id = await searchId.json();

		dispatch(getTickets(id));
	} catch (err) {
		dispatch(errorMessage(err.message));
  }
};
