import {FETCH_CURRENT_APARTMENT, SET_CURRENT_APARTMENT} from './../actions/types';

const initialState = {
  item: {},
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_APARTMENT:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_APARTMENT:
      return {
        ...state,
        apartment: action.apartment,
        loading: false
      };
    default:
      return state;
  }
}
