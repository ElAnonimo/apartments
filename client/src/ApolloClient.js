import ApolloClient from 'apollo-boost/lib/index';
import {GRAPHQL_URL} from './constants/url';

const client = new ApolloClient({
  uri: GRAPHQL_URL
});

export default client;
