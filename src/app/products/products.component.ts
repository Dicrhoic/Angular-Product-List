import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/classes/product';
import {Sort, MatSortModule} from '@angular/material/sort';
import { CurrModel } from 'src/classes/currencyModel';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @ViewChild('prodList', {static: false}) htmlData!: ElementRef<HTMLDivElement>;
  products: Product[] = [];
  totalCosts: CurrModel[] = [];
  constructor(private productService: ProductService) {}
  selectedProduct?: Product;

  onSelect(prod: Product){
    this.selectedProduct = prod;
    console.log(this.selectedProduct);
  }
  dataSource = this.products;
  displayedColumns: string[] = ['Name', 'Price', 'Vendor'];
  ngOnInit(): void {
    this.getProducts();
  }

 

  calculateCosts() {
    const currencies = Array.from(new Set(this.products.map((p) => p.currency)));
    console.log(currencies.length);
    const intialCosts: CurrModel[] = [];
    for (const c of currencies)
    {
      const filter = this.products.filter((prod) => prod.currency == c);
      let sum: number = 0;
      filter.forEach(a=> sum += a.price);
      const m: CurrModel = {
        name: c,
        total: sum
      };
      console.log(m);
      intialCosts.push(m);
    }
    this.totalCosts = intialCosts.filter((value, index, self) =>
      index === self.findIndex((t)=> 
        t.name === value.name
      )
    );
    console.log(this.totalCosts);
  }

  costString(){
    const num = this.totalCosts.length;
    if(num > 1)
    {
      return "Total costs:";
    }
    else
    {
      return "Total cost:"
    }
  }

  openPDF() {
    let DATA: any = document.getElementById('prodRes');
    console.log(this.htmlData.nativeElement);
    let PDF = new jsPDF('p', 'mm', 'a4');
    PDF.html(this.htmlData.nativeElement, {
      callback(doc) {
        doc.output('pdfobjectnewwindow');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 190,
      windowWidth: 675 
    });
    autoTable(PDF, {html: '#prodRes'});
    //PDF.output('pdfobjectnewwindow');
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

  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === "") {
      this.products = data;
      return;
    }
    this.products = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "type":
          return this.compare(a.name, b.name, isAsc);
        case "brand":
          return this.compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    })
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
