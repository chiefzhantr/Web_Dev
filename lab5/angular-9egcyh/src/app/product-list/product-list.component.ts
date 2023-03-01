import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { currentCategoryProducts } from '../category/category.component';
import { GlobalsService } from '../globals.service';
import { Product } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[];

  constructor(private globalService: GlobalsService) {
    this.products = globalService.products;
    console.log(this.products)
  }

  share(name: string) {
    const message = name
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramUrl);
  }
  incLikes = (itemId : number) => {
    const updatedItemsList = this.products.map((product) => {
      if(itemId === product.id){
        return {...product, likes: product.likes + 1}
      }else{
        return product;
      }
    })
    this.products = updatedItemsList;
  }
  delete = (itemId: number) => {
    const updatedItemsList = this.products.filter((product) => product.id != itemId)
    this.products = updatedItemsList
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/