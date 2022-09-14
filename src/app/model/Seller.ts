import {UserToken} from "./UserToken";
import {AppUser} from "./AppUser";

export class Seller {
  id : number;
  name: string;
  phoneNumber: string;
  avatar: string;
  imageBanner: string;
  address: string;
  isAccept: boolean;
  isActive: boolean;
  appUser: AppUser;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, imageBanner: string, address: string, isAccept: boolean, isActive: boolean, appUser: AppUser) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.imageBanner = imageBanner;
    this.address = address;
    this.isAccept = isAccept;
    this.isActive = isActive;
    this.appUser = appUser;
  }
}
