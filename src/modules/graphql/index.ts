import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import { inMemoryToken } from '../auth';

const httpLink = createHttpLink({ uri: '/graphql' });

const authMiddleware = new ApolloLink((operation, next) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: inMemoryToken ? `Bearer ${inMemoryToken}` : null,
    },
  }));

  return next(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default client;
