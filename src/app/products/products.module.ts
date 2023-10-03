import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { viewProductComponent } from './pages/view-product/product.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ListProductsComponent,
    viewProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsListComponent,
    ListProductsComponent,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
