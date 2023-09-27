import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsListComponent,
    ListProductsComponent
  ]
})
export class ProductsModule { }
