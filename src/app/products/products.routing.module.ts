import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {
    path: 'list-products',
    component: ListProductsComponent
  },
  {
    path: 'by/:id',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: 'list-products'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProductsRoutingModule { }
