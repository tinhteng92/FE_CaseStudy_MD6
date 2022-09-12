import {UserToken} from "./UserToken";
import {AppUser} from "./AppUser";

export class Seller {
  id : number;
  name: string;
  phoneNumber: string;
  avatar: string;
  address: string;
  isAccept: boolean;
  isActive: boolean;
  appUser: AppUser;
  imageBanner: string;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, address: string, isAccept: boolean, isActive: boolean, appUser: AppUser,   imageBanner: string) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.address = address;
    this.isAccept = isAccept;
    this.isActive = isActive;
    this.appUser = appUser;
    this.imageBanner = imageBanner;
  }
}

