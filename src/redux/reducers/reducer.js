import { CHECKED } from '../actions/actions';

const initialState = {
  filters: [
    {
      id: 1,
      title: 'Все',
      checked: false,
    },
    {
      id: 2,
      title: 'Без пересадок',
      checked: false,
    },
    {
      id: 3,
      title: '1 пересадка',
      checked: false,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED: {
      if (action.payload.id === 1) {
        return { ...state, filters: state.filters.map((el) => ({ ...el, checked: !action.payload.checked })) };
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

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
