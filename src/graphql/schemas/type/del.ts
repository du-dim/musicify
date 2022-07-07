import { gql } from 'apollo-server';

export const typeDel = gql`
  type DEL {
    acknowledged: Boolean
    deletedCount: Int
  }
`;
