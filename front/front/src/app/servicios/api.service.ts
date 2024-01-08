import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'http://localhost:3000/api/v1/';

  constructor(
    private http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this.http.get(this.url + 'productos');
  }
}


