import { resAlbums } from './resolvers/resAlbums.js';
import { resArtists } from './resolvers/resArtists.js';
import { resBands } from './resolvers/resBands.js';
import { resGenres } from './resolvers/resGenre.js';
import { resTracks } from './resolvers/resTracks.js';
import { resUsers } from './resolvers/resUsers.js';
import { resFavourites } from './resolvers/resFavourites.js';
import { resMember } from './resolvers/resMember.js';

export const resolvers = {
  Album: {
    ...resArtists.Album,
    ...resTracks.Album,
    ...resBands.Album,
    ...resGenres.Album
  },
  Favourites: {
    ...resArtists.Favourites,
    ...resTracks.Favourites,
    ...resBands.Favourites,
    ...resGenres.Favourites
  },
  Artist: {
    ...resBands.Artist
  },
  Track: {
    ...resBands.Track,
    ...resGenres.Track
  },
  Band: {
    ...resGenres.Band,
    ...resMember.Band
  },
  Query: {
    ...resUsers.Query,
    ...resAlbums.Query,
    ...resArtists.Query,
    ...resBands.Query,
    ...resGenres.Query,
    ...resTracks.Query,
    ...resFavourites.Query
  },
  Mutation: {
    ...resAlbums.Mutation,
    ...resUsers.Mutation,
    ...resArtists.Mutation,
    ...resBands.Mutation,
    ...resGenres.Mutation,
    ...resTracks.Mutation,
    ...resFavourites.Mutation
  }
};
