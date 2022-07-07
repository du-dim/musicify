import { gql } from 'apollo-server';

export const typeBand = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }
  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: [GenreInput]
  }
  input BandInputID {
    id: ID!
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: [GenreInput]
  }
`;
