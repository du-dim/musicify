import { gql } from 'apollo-server';

export const typeTrack = gql`
  type Track {
    id: ID!
    title: String
    album: Album
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
  input TrackInput {
    title: String
    album: ID
    bands: [ID]
    duration: Int
    released: Int
    genres: [ID]
  }
  input TrackInputID {
    id: ID!
    title: String
    album: ID
    bands: [ID]
    duration: Int
    released: Int
    genres: [ID]
  }
`;
