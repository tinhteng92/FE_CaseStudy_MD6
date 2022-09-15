export class Customer {
  id: number;
  name: string;
  phoneNumber: string;
  avatar: string;
  address: string;
  appUser: any;
  isActive!: boolean;


  constructor(id: number, name: string, phoneNumber: string, avatar: string, address: string, appUser: any, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.avatar = avatar;
    this.address = address;
    this.appUser = appUser;
    this.isActive = isActive;

  }
}
