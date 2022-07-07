import { gql } from 'apollo-server';

export const typeAlbum = gql`
  type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  input AlbumInput {
    name: String
    released: Int
    artists: [ArtistInput]
    bands: [BandInput]
    tracks: [TrackInput]
    genres: [GenreInput]
    image: String
  }

  input AlbumInputID {
    id: ID
    name: String
    released: Int
    artists: [ArtistInput]
    bands: [BandInput]
    tracks: [TrackInput]
    genres: [GenreInput]
    image: String
  }
`;
