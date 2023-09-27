import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Products } from '../interfaces/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "https://fakestoreapi.com/products/";

  constructor(private http:HttpClient) { }

  getProducts():Observable<Products[]>{
   return this.http.get<Products[]>(this.url)
  }

}
