import { resAlbums } from './resolvers/resAlbums.js';
import { resArtists } from './resolvers/resArtists.js';
import { resBands } from './resolvers/resBands.js';
import { resGenres } from './resolvers/resGenre.js';
import { resTracks } from './resolvers/resTracks.js';
import { resUsers } from './resolvers/resUsers.js';
import { resFavourites } from './resolvers/resFavourites.js';

export const resolvers = {
  Query: {
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
