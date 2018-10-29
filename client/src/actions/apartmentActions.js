import {FETCH_CURRENT_APARTMENT, SET_CURRENT_APARTMENT} from './types';
import gql from 'graphql-tag';
import client from './../ApolloClient'

export const fetchApartment = (_id) => dispatch => {
  dispatch({
    type: FETCH_CURRENT_APARTMENT,
  });

  client.query({
    query: gql`
    {
      apartment(_id: "${_id}") {
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
        images
        amenities
        details {
          rooms
          bedrooms
          floor
          bathrooms
        } 
        services 
      }
    }`
  })
  .then(response => dispatch({
    type: SET_CURRENT_APARTMENT,
    apartment: response.data.apartment
  }));
};
