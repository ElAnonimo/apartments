import ApolloClient from 'apollo-boost/lib/index';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL
});

export default client;
