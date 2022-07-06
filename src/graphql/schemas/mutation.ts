export const mutation = `type Mutation {
getJwt(body: UserInput): JWT!  
createUser(body: UserInput): User!
createAlbum(body: AlbumInput): Album!
createArtist(body: ArtistInput): Artist!
createBand(body: BandInput): Band!
createGenre(body: GenreInput): Genre!
createTrack(body: TrackInput): Track!
createFavourites(body: FavouritesInput): Favourites!
deleteAlbum(id: ID!): DEL 
deleteArtist(id: ID!): DEL 
deleteBand(id: ID!): DEL
deleteGenre(id: ID!): DEL
deleteTrack(id: ID!): DEL
updateAlbum(body: AlbumInput): Album!
updateArtist(body: ArtistInput): Artist!
updateBand(body: BandInput): Band!
updateGenre(body: GenreInput): Genre!
updateTrack(body: TrackInput): Track!
}`;
