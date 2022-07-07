import { gql } from 'apollo-server';

export const typeID = gql`
  input IdInput {
    id: ID!
  }
`;
