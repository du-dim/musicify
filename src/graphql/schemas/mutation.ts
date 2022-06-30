import * as input from './input/_inputRedirect.js';

export const mutation = `type Mutation {
${input.inUser}
${input.inAlbum}
${input.inArtist}
${input.inBand}
${input.inGenre}
${input.inTrack}
${input.inFavorites}
createUser(body: UserInput): User!
createAlbum(body: AlbumInput): Album!
createArtist(body: ArtistInput): Artist!
createBand(body: BandInput): Band!
createGenre(body: GenreInput): Genre!
createTrack(body: TrackInput): Track!
createFavourites(body: FavouritesInput): Favourites!
}`;
