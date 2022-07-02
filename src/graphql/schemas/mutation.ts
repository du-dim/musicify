export const mutation = `type Mutation {
createUser(body: UserInput): User!
createAlbum(body: AlbumInput): Album!
createArtist(body: ArtistInput): Artist!
createBand(body: BandInput): Band!
createGenre(body: GenreInput): Genre!
createTrack(body: TrackInput): Track!
createFavourites(body: FavouritesInput): Favourites!
getJwt(body: UserInput): JWT!
}`;
