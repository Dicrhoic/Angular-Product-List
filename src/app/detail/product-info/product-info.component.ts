import { Component, Input } from '@angular/core';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() product?: Product;
}
