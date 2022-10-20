import { Component, OnInit } from '@angular/core';
import { mock_product_list4 } from '../card/mock-product-list-4';
import { mock_product_list5 } from '../card/mock-product-list-5';
import { ProductItemModel } from '../card/product-item.model';

@Component({
  selector: 'app-seq-mem-layout',
  templateUrl: './seq-mem-layout.component.html',
  styleUrls: ['./seq-mem-layout.component.css']
})
export class SeqMemLayoutComponent {

  products: ProductItemModel[] = [];
  
    constructor() 
    {
      for( var x of mock_product_list5)
      {
        this.products.push(x);
      }
    }
  }
