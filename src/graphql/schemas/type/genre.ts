import { gql } from 'apollo-server';

export const typeGenre = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }
  input GenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }
  input GenreInputID {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }
`;
