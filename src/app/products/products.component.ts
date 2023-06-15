import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getTestProducts().subscribe(products => this.products = products);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return }
    this.productService.addProduct({name} as Product)
    .subscribe(product => {
        this.products.push(product)
      });
  }

  delete(product: Product): void{
    this.products = this.products.filter(p => p !==product);
    this.productService.deleteProduct(product.id).subscribe();
  }

}
