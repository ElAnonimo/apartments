import {FETCH_APARTMENTS_LIST, SET_APARTMENTS_LIST} from "./types";
import gql from "graphql-tag";
import client from './../ApolloClient'

export const fetchApartmentsList = () => dispatch => {
  dispatch({
    type: FETCH_APARTMENTS_LIST,
  });

  client.query({
    query: gql`
    {
      apartments(active: true) {
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
    type: SET_APARTMENTS_LIST,
    items: response.data.apartments.items
  }));
};


