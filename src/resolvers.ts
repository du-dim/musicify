import * as getData from './modules/redirection.js';

export const resolvers = {
  Query: {
    user: () => getData.user,
    artists: () => getData.artists,
    bands: () => getData.bands,
    albums: () => getData.albums,
    genres: () => getData.genres,
    tracks: () => getData.tracks,
    favourites: () => getData.favourites,
    artist: (id: string) => getData.artists.find((obj) => obj._id === id),
    band: (id: string) => getData.bands.find((obj) => obj._id === id),
    album: (id: string) => getData.albums.find((obj) => obj._id === id),
    genre: (id: string) => getData.genres.find((obj) => obj._id === id),
    track: (id: string) => getData.tracks.find((obj) => obj._id === id)
  }
};
