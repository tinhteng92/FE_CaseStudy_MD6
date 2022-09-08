export class Seller {
  id : number;
  name: string;
  phoneNumber: string;
  avatar: string;
  address: string;
  isAccept: boolean;
  idUser: number;
  imgBanner: string;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, address: string, isAccept: boolean, idUser: number,   imgBanner: string) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.address = address;
    this.isAccept = isAccept;
    this.idUser = idUser;
    this.imgBanner = imgBanner;
  }
}

