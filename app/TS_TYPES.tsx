export interface PersonData {
  name: string;
  phone?: number | string;
  image?: string;
  age?: number;
  description?: string;
}

interface RUDName {
  name: string;
  title: string;
  first: string;
  last: string;
}
interface RUDCoords {
  latitude: string;
  longitude: string;
}
interface RUDTimezone {
  offset: string;
  description: string;
}
interface RUDLocation {
  street: RUDStreet;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: RUDCoords;
  timezone: RUDTimezone;
}
interface RUDStreet {
  number: number;
  name: string;
}
interface RUDLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
interface RUDTime {
  date: string;
  age: number;
}

interface RUDPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface RUDId {
  name: string;
  value: string;
}

export interface RandomUserData {
  gender: string;
  name: RUDName;
  location: RUDLocation;
  email: string;
  login: RUDLogin;
  dob: RUDTime;
  registered: RUDTime;
  phone: string;
  cell: string;
  id: RUDId;
  picture: RUDPicture;
  nat: "YES" | "NO";
}
