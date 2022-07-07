import { gql } from 'apollo-server';

export const typeTrack = gql`
  type Track {
    id: ID!
    title: String
    albums: String
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
  input TrackInput {
    title: String
    albums: String
    bands: [BandInput]
    duration: Int
    released: Int
    genres: [GenreInput]
  }
  input TrackInputID {
    id: ID!
    title: String
    albums: String
    bands: [BandInput]
    duration: Int
    released: Int
    genres: [GenreInput]
  }
`;
