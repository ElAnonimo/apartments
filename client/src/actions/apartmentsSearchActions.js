import {FETCH_APARTMENTS_SEARCH, SET_APARTMENTS_SEARCH_RESULT} from './types';
import gql from 'graphql-tag';
import client from './../ApolloClient'

const prepareFilter = (filter) => {
  let preparedFilter = '';

  for (const key in filter){
    if (filter.hasOwnProperty(key)) {
      const value = filter[key];

      if (value) {
        preparedFilter = `
          ${preparedFilter}
          ${key}: ${typeof value === 'string' ? `"${value}"` : value}
        `
      }
    }
  }

  return preparedFilter;
};

export const fetchApartmentsSearch = (filter = {}) => dispatch => {
  dispatch({
    type: FETCH_APARTMENTS_SEARCH,
  });

  client.query({
    query: gql`
    {
      apartments(
        filter: {
          ${prepareFilter(filter)}
        }
        active: true
      ) {
        items {
          _id
          owner {
            _id
            email
          } 
          title
          location {
            title
          }
          size
          price
          amenities
          images
        }
      }
    }`
  })
  .then(response => dispatch({
    type: SET_APARTMENTS_SEARCH_RESULT,
    items: response.data.apartments.items
  }));
};


