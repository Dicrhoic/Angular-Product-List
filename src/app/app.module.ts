import { LOCALE_ID ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInfoComponent } from './detail/product-info/product-info.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';
import { AddFormComponent } from './form/add-form/add-form.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    HomeComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    ProductSearchComponent,
    PcPartsComponent,
    AddFormComponent,
    PageNotFoundComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-AU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
