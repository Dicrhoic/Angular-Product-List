import { Component } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products: Product[] = [];
  constructor(private productService: ProductService) {}
  getProducts(): void {
    this.products = this.productService.getTProducts();
  }
  ngOnInit(): void {
    this.getTProducts();
  }

  getTProducts(): void {
    this.productService.getProducts()
      .subscribe(product => this.products = product);
  }

}
