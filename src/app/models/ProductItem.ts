import {Product} from "./Product";
import {Bill} from "./Bill";

interface ProductItem {
  id:number;
  product:Product;
  productID:number;
  name:string;
  quantity:number;
  bill:Bill
  productName:string;
}
