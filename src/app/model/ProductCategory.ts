export class ProductCategory{
  // private _id:number;
  // private _name:string;
  //
  // constructor(id: number, name: string) {
  //   this._id = id;
  //   this._name = name;
  // }

  id!: number;
  nameCategory!: string;
  imageCategory!: string;


  constructor(id: number, nameCategory: string, imageCategory: string) {
    this.id = id;
    this.nameCategory = nameCategory;
    this.imageCategory = imageCategory;
  }
}
