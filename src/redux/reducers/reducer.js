import {
  CHECKED,
  SHOW_MORE,
  ACTIVE_TAB,
  GET_TICKETS,
  ERROR_STATUS,
  ENABLE_LOADER,
  DISABLE_LOADER,
} from '../actions/actions';

const initialState = {
  activeTab: 1,
  loading: true,
  errorStatus: '',
  quantityTickets: 5,
  tabs: [
    {
      id: 1,
      title: 'Самый дешёвый',
      active: true,
    },
    {
      id: 2,
      title: 'Самый быстрый',
      active: false,
    },
    {
      id: 3,
      title: 'Оптимальный',
      active: false,
    },
  ],
  filters: [
    {
      id: 1,
      title: 'Все',
      checked: false,
    },
    {
      id: 2,
      title: 'Без пересадок',
      checked: true,
    },
    {
      id: 3,
      title: '1 пересадка',
      checked: true,
    },
    {
      id: 4,
      title: '2 пересадки',
      checked: false,
    },
    {
      id: 5,
      title: '3 пересадки',
      checked: false,
    },
  ],
  tickets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_STATUS:
      return { ...state, errorStatus: action.payload };
    case ENABLE_LOADER:
      return { ...state, loading: true };
    case DISABLE_LOADER:
      return { ...state, loading: false };
    case SHOW_MORE:
      return { ...state, quantityTickets: state.quantityTickets + 5 };
    case ACTIVE_TAB:
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.id === action.payload) {
            return { ...tab, active: true };
          }

          return { ...tab, active: false };
        }),
        activeTab: action.payload,
      };
    case GET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case CHECKED: {
      if (action.payload.id === 1) {
        return {
          ...state,
          filters: state.filters.map((el) => ({ ...el, checked: !action.payload.checked })),
        };
      }

      const newState = {
        ...state,
        filters: state.filters.map((el) => {
          if (action.payload.id === el.id) {
            return { ...el, checked: !el.checked };
          }

          return el;
        }),
      };

      newState.filters[0].checked = newState.filters.slice(1).every((el) => el.checked);
      newState.quantityTickets = newState.filters.some((filter) => filter.checked) ? 5 : null;

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
