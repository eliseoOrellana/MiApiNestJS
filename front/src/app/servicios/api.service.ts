import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'http://localhost:3000/api/v1/';

  constructor( private http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this.http.get(this.url + 'productos');
  }


  public addProduct(producto: any): Observable<any>{
    return this.http.post(this.url + 'productos', producto);
  }

  public getCategorias(): Observable<any>{
    return this.http.get(this.url + 'categorias');
  }

  public deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.url + 'productos/' + id);
  }

  public addCategory(categoria: any): Observable<any>{
    return this.http.post(this.url + 'categorias', categoria);
  }
  

  public updateProduct(id: number, product: any): Observable<any> {
    return this.http.patch(this.url + 'productos/' + id, product);
  }
}


