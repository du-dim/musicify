import { gql } from 'apollo-server';

export const typeQuery = gql`
  type Query {
    getJwt(body: UserInputJWT): JWT
    albums: [Album]
    artists: [Artist]
    bands: [Band]
    genres: [Genre]
    tracks: [Track]
    favourites: [Favourites]
    album(id: ID!): Album
    artist(id: ID!): Artist
    band(id: ID!): Band
    genre(id: ID!): Genre
    track(id: ID!): Track
    user(id: ID!): User
  }
`;
