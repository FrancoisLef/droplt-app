import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query ExampleQuery {
    users {
      userId
      email
      firstName
      lastName
      isDisabled
      createdAt
      updatedAt
    }
  }
`;
