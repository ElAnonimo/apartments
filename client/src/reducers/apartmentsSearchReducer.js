import {FETCH_APARTMENTS_SEARCH, SET_APARTMENTS_SEARCH_RESULT} from './../actions/types';

const initialState = {
  items: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_SEARCH:
      return {
        ...state,
        loading: true
      };
    case SET_APARTMENTS_SEARCH_RESULT:
      return {
        ...state,
        items: action.items,
        loading: false
      };
    default:
      return state;
  }
}
