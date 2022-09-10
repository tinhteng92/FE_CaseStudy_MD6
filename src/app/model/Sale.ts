import {Seller} from "./Seller";

export interface Sale {
  id?:number;
  name?: string;
  description?: string;
  priceDiscount?: number;
  status?: boolean;
  startAt?: string;
  endAt?: string;
  seller?: Seller;
}
