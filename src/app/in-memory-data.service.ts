import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from 'src/classes/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const products = [
      {id: 12, name: 'BenQ GW2480 Monitor', price: 169, currency: 'AUD', vendor: 'PC Case Gear',
      link: 'https://www.pccasegear.com/products/39659/benq-gw2480-fhd-eyecare-24in-monitor' },
     {id: 13, name: 'Celsius BC2 FID Bench', price: 229.99, currency: 'AUD', vendor: 'Rebel Sport',
      link: 'https://www.rebelsport.com.au/p/celsius-bc2-fid-bench-573097.html?cgid=REB070901'},
     {id: 14, name: 'Celsius 50kg Weight Set', price: 229.99, currency: 'AUD', vendor: 'Rebel Sport',
      link: 'https://www.rebelsport.com.au/p/celsius-50kg-weight-set-406383.html?cgid=REB071805#start=2'},
     {id: 15, name: 'Final Fantasy XVI', price: 9900, currency: 'JPY', vendor: 'Square Enix e-store',
      link: 'https://store.jp.square-enix.com/item/ELJM_30240.html'},
    ];
    return {products};
  }
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(products => products.id)) + 1 : 11;
  }
  constructor() { }
}
