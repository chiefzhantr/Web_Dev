import { Component } from '@angular/core';
import { categories, Category } from '../categories';
import { Product, products } from '../products';
import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';

export let currentCategoryProducts : Product[] = products

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories = [...categories]
  setCategory(category: Category) {
    const currentCategoryProducts = products.filter((product)=>{
      return category.itemsId.includes(product.id)
    })
    this.globalService.setProducts(currentCategoryProducts)
    this.router.navigate(['/product-list'], { queryParams: { products: JSON.stringify(currentCategoryProducts) } });
  }
  constructor(private router: Router, private globalService: GlobalsService) { 

  }
  
}
