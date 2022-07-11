export interface IArtist {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
export interface IBand {
  _id: string;
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}
export interface IGenre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}
export interface ITrack {
  _id: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}
export interface IAlbum {
  _id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  tracksIds: string[];
  genresIds: string[];
  image: string;
}
export interface IFavourites {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}
export interface IMember {
  artistId: string;
  firstName: string;
  secondName: string;
  middleName: string;
  instrument: string;
  years: number[];
}
