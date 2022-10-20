import { Component, OnInit } from '@angular/core';
import { mock_product_list7 } from '../card/mock-product-list-7';
import { ProductItemModel } from '../card/product-item.model';

@Component({
  selector: 'app-num-mem-layout',
  templateUrl: './num-mem-layout.component.html',
  styleUrls: ['./num-mem-layout.component.css']
})
export class NumMemLayoutComponent {

  products: ProductItemModel[] = [];
  
    constructor() 
    {
      for( var x of mock_product_list7)
      {
        this.products.push(x);
      }
    }
  }
