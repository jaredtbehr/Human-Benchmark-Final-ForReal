import { Component, OnInit } from '@angular/core';
import { mock_product_list6 } from '../card/mock-product-list-6';
import { ProductItemModel } from '../card/product-item.model';

@Component({
  selector: 'app-aim-train-layout',
  templateUrl: './aim-train-layout.component.html',
  styleUrls: ['./aim-train-layout.component.css']
})
export class AimTrainLayoutComponent  {

  products: ProductItemModel[] = [];
  
    constructor() 
    {
      for( var x of mock_product_list6)
      {
        this.products.push(x);
      }
    }
  }
