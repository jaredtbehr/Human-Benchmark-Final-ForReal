import { Component, OnInit } from '@angular/core';

import { ProductItemModel } from '../card/product-item.model';

import { ProductService } from '../card/products.service';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{

  products: ProductItemModel[] = [];
  products2: ProductItemModel[] = [];
  products3: ProductItemModel[] = [];

  constructor(private productService: ProductService)
  {
    
  }

  ngOnInit(): void 
  {
    this.productService.getProductsRowOne().subscribe((data: ProductItemModel[])=>
      {
        for(var x of data)
        {
          console.log(x);
          this.products.push(x);
        }    
      })
     
    this.productService.getProductsRowTwo().subscribe((data: ProductItemModel[])=>
      {
        for(var x of data)
        {
          console.log(x);
          this.products2.push(x);
        }
      }) 
    this.productService.getProductsRowThree().subscribe((data: ProductItemModel[])=>
      {
        for(var x of data)
        {
          console.log(x);
          this.products3.push(x);
        }
      })

  }


}
