import { gql } from 'apollo-server';
import * as input from './schemas/input/_inputRedirect.js';
import * as schema from './schemas/_redirect.js';

export const typeDefs = gql`
  ${input.inUser}
  ${input.inAlbum}
  ${input.inArtist}
  ${input.inBand}
  ${input.inGenre}
  ${input.inTrack}
  ${input.inMember}
  ${input.inFavourites}
  ${schema.user}
  ${schema.album}
  ${schema.artist}
  ${schema.genre}
  ${schema.band}
  ${schema.track}
  ${schema.favourites}
  ${schema.member}
  ${schema.query}
  ${schema.mutation}
`;
