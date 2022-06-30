export interface IArtist {
  _id: string;
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  bands: string[];
  instruments: string[];
}
export interface IUser {
  _id: string;
  id: string;
  firstName: string;
  secondName: string;
  password: string;
  email: string;
}
export interface IBand {
  _id: string;
  id: string;
  name: string;
  origin: string;
  membersId: IMember[];
  members: IMember[];
  website: string;
  genresIds: string[];
  genres: string[];
}
export interface IGenre {
  _id: string;
  id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}
export interface ITrack {
  _id: string;
  id: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  bands: string[];
  duration: number;
  released: number;
  genresIds: string[];
  genres: string[];
}
export interface IAlbum {
  _id: string;
  id: string;
  name: string;
  released: number;
  artistsIds: string[];
  artists: string[];
  bandsIds: string[];
  bands: string[];
  tracksIds: string[];
  tracks: string[];
  genresIds: string[];
  genres: string[];
  image: string;
}
export interface IFavourites {
  _id: string;
  id: string;
  userId: string;
  bandsIds: string[];
  bands: string[];
  genresIds: string[];
  genres: string[];
  artistsIds: string[];
  artists: string[];
  tracksIds: string[];
  tracks: string[];
}
export interface IJWT {
  jwt: string;
}
export interface IMember {
  id: string;
}
