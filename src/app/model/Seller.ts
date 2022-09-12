import {UserToken} from "./UserToken";

export class Seller {
  id : number;
  name: string;
  phoneNumber: string;
  avatar: string;
  imageBanner: string;
  address: string;
  isAccept: boolean;
  isActive: boolean;
  userToken: UserToken;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, imageBanner: string, address: string, isAccept: boolean, isActive: boolean, userToken: UserToken) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.imageBanner = imageBanner;
    this.address = address;
    this.isAccept = isAccept;
    this.isActive = isActive;
    this.userToken = userToken;
  }
}
