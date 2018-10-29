import {FETCH_APARTMENTS_LIST, SET_APARTMENTS_LIST} from './../actions/types';

const initialState = {
  items: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_LIST:
      return {
        ...state,
        loading: true
      };
    case SET_APARTMENTS_LIST:
      return {
        ...state,
        items: action.items,
        loading: false
      };
    default:
      return state;
  }
}
