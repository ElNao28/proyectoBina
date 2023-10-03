import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productId = {
    id:0,
    title:       "",
    price:       0,
    description: "",
    category:    "",
    image:       "",
    rating:{
      rate:  0,
      count: 0
    }
  }
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.productService.getProductById(id))
      )
      .subscribe(product => {
        console.log(product)
        if (!product) {
          return this.router.navigateByUrl('')
        }
        this.productId = product;
        return
      })
  }
}
