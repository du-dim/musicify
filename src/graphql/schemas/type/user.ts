import { gql } from 'apollo-server';

export const typeUser = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String!
    email: String!
  }
  input UserInput {
    firstName: String
    secondName: String
    password: String!
    email: String!
  }
  input UserInputJWT {
    password: String!
    email: String!
  }
`;
