import { gql } from 'apollo-server';

export const typeMember = gql`
  type Member {
    artistId: ID
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [Int]
  }
  input MemberInput {
    artistId: String!
    years: [Int]
    instrument: String
  }
`;
