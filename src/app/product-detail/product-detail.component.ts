import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product : Product | undefined;
  currency = ['AUD', 'USD', 'GBP', 'YEN'];
  
  adjustPrice(cost: string): string {
    if(this.product)
    {
      console.log("Adjust call, adjusting: " + cost);
      var v = parseFloat(cost);
      cost = v.toFixed(2);
      console.log("Adjusted: " + cost);
      this.product.price = parseFloat(cost);
    }

    return cost;
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductI(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
        .subscribe(() => this.goBack());
    }
  }
  
}
