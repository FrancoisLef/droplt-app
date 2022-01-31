import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// import { inMemoryToken } from '../helpers/auth';

// HTTP Link
const httpLink = createHttpLink({ uri: '/graphql' });

// HTTP Authentication middleware
const httpAuth = new ApolloLink((operation, next) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      // authorization: inMemoryToken ? `Bearer ${inMemoryToken}` : null,
    },
  }));

  return next(operation);
});

// WebSocket Link
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true,
    connectionParams: {
      // authToken: inMemoryToken,
    },
  },
});

// Split Link
// Decides wether a query should use the HTTP Link or the WebSocket Link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  concat(httpAuth, httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export * from './__generated__';
export default client;
