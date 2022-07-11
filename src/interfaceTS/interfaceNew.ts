export interface IArtistNew {
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bands: string[];
  instruments: string[];
}
export interface IUserNew {
  id: string;
  firstName: string;
  secondName: string;
  password: string;
  email: string;
}
export interface IBandNew {
  id: string;
  name: string;
  origin: string;
  members: IMemberNew[];
  website: string;
  genres: string[];
}
export interface IGenreNew {
  id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}
export interface ITrackNew {
  id: string;
  title: string;
  album: string;
  bands: string[];
  duration: number;
  released: number;
  genres: string[];
}
export interface IAlbumNew {
  id: string;
  name: string;
  released: number;
  artists: string[];
  bands: string[];
  tracks: string[];
  genres: string[];
  image: string;
}
export interface IFavouritesNew {
  id: string;
  userId: string;
  bands: string[];
  genres: string[];
  artists: string[];
  tracks: string[];
}

export interface IJWT {
  jwt: string;
}
export interface IDelete {
  acknowledged: boolean;
  deletedCount: number;
}
export interface IMemberNew {
  artistId: string;
  instrument: string;
  years: number[];
}
