import { Injectable } from '@angular/core';
import { Product,products } from './products';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  products : Product[] 
  constructor() {
    this.products = [...products]
  }

  setProducts(products: Product[]) {
    this.products = products
  }
}
