import {Role} from "./Role";


export class UserToken{
  id: number;
  userName: string;
  token:string;
  roles: Role[];


  constructor(id: number, userName: string, token: string, roles: Role[]) {
    this.id = id;
    this.userName = userName;
    this.token = token;
    this.roles = roles;
  }
}
