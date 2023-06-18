import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';
import { Product } from 'src/classes/product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product : Product | undefined;

  products: Product[] = [];



  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getTestProducts().subscribe(products => this.products = products);
  }
  goBack(): void {
    this.location.back();
  }

  adjustPrice(cost: string): string {
    if(this.model)
    {
      console.log("Adjust call, adjusting: " + cost);
      var v = parseFloat(cost);
      cost = v.toFixed(2);
      console.log("Adjusted: " + cost);
      this.model.price = parseFloat(cost);
    }

    return cost;
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
        .subscribe(() => this.goBack());
    }
  }

  add(name: string, price: number, currency: string, vendor: string, link: string, description?: string): void {
    name = name.trim();
    if(!name) { return }
    if(!description)
    {
      this.productService.addProduct({name, price, currency, vendor, link} as Product)
      .subscribe(product => {
          this.products.push(product)
        });
    }
    else{
      this.productService.addProduct({name, price, currency, vendor, link, description} as Product)
      .subscribe(product => {
          this.products.push(product)
        });
    }
  }

  currency = ['AUD', 'USD', 'GBP', 'JPY'];
  model =  new Product(0, '', 0, this.currency[0], '', '');

  submitted = false;
  onSubmit() { this.submitted = true; }

}
