import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { defaults } from '../containers/defaults';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();

const stateLink = withClientState({
  resolvers: {},
  defaults,
  cache,
});

const createClient = (): any => {
  return new ApolloClient({
    link: ApolloLink.from([stateLink]),
    cache,
  });
};

export const client = createClient();
