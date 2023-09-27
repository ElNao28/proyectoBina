import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/Products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private productService:ProductsService){

  }
  public products:Products[] = [];

  ngOnInit(){
    this.productService.getProducts().subscribe(products=>{
      this.products = products;
      console.log(products)
    })
  }
}
