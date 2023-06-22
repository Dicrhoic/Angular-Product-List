import { Component, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() product?: Product;

  
  editEnabled = false;

  constructor(
    private productService: ProductService,
  ) {}

  unlockInputs() {
    console.log(this.editEnabled);
    this.editEnabled = !this.editEnabled;
    console.log(this.editEnabled);
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
        .subscribe();
    }
  }

}
