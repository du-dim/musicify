import { gql } from 'apollo-server';

export const typeJWT = gql`
  type JWT {
    jwt: String
  }
`;
