import { gql } from 'apollo-server';

export const typeMutation = gql`
  type Mutation {
    createUser(body: UserInput): User
    createAlbum(body: AlbumInput): Album
    createArtist(body: ArtistInput): Artist
    createBand(body: BandInput): Band
    createGenre(body: GenreInput): Genre
    createTrack(body: TrackInput): Track
    createFavourites(body: FavouritesInput): Favourites
    deleteAlbum(id: ID!): DEL
    deleteArtist(id: ID!): DEL
    deleteBand(id: ID!): DEL
    deleteGenre(id: ID!): DEL
    deleteTrack(id: ID!): DEL
    updateAlbum(body: AlbumInputID): Album
    updateArtist(body: ArtistInputID): Artist
    updateBand(body: BandInputID): Band
    updateGenre(body: GenreInputID): Genre
    updateTrack(body: TrackInputID): Track
  }
`;
