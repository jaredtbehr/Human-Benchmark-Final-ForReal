import { Component, OnInit } from '@angular/core';
import { mock_product_list4 } from '../card/mock-product-list-4';
import { ProductItemModel } from '../card/product-item.model';

@Component({
  selector: 'app-rt-layout',
  templateUrl: './rt-layout.component.html',
  styleUrls: ['./rt-layout.component.css']
})
export class RtLayoutComponent {

products: ProductItemModel[] = [];

  constructor() 
  {
    for( var x of mock_product_list4)
    {
      this.products.push(x);
    }
  }
}
