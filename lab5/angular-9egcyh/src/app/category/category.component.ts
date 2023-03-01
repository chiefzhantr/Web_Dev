import { Component } from '@angular/core';
import { categories, Category } from '../categories';
import { Product, products } from '../products';
import { GlobalsService } from '../globals.service';
export let currentCategoryProducts : Product[] = products

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories = [...categories]
  setCategory(category: Category) {
    console.log("DBG" + currentCategoryProducts)
    currentCategoryProducts = products.filter((product)=>{
      return category.itemsId.includes(product.id)
    })
    console.log("DBG" +currentCategoryProducts)
    this.globalService.setProducts(currentCategoryProducts)
  }
  constructor(private globalService: GlobalsService) {
    
  }
  
}
