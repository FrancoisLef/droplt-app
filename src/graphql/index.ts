import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getAuth, signOut } from 'firebase/auth';

// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';
import { accessToken } from '../helpers/auth';
import firebase from '../helpers/firebase';

// WebSocket Link
// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:4000/subscriptions',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       // authToken: inMemoryToken,
//     },
//   },
// });

// Split Link
// Decides wether a query should use the HTTP Link or the WebSocket Link
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   // wsLink,
//   concat(httpAuth, httpLink)
// );

// HTTP Link
const httpLink = createHttpLink({ uri: '/graphql' });

// Auth Link
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  }));
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors }) => {
  const hasUnauthenticatedError =
    (graphQLErrors || []).filter(
      (err) => err.extensions.code === 'UNAUTHENTICATED'
    ).length > 0;

  // Sign out user on UNAUTHENTICATED error
  if (hasUnauthenticatedError) {
    signOut(getAuth(firebase));
  }
});

const link = from([authLink, errorLink, httpLink]);

const client = new ApolloClient({
  link,
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export * from './__generated__';
export default client;
