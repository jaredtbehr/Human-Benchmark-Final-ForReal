import { Component } from '@angular/core';
import { mock_product_list } from './card/mock-product-list';
import { mock_product_list2 } from './card/mock-product-list-2';
import { ProductItemModel } from './card/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
 
}
