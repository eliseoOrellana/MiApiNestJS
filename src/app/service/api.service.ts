import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Copiar la url de la api
  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';

  //Se llama a la clase httpclient para poder usar sus metodos http
  constructor(private http: HttpClient) { }

  //metodo para obtener los datos de la api
  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
    
  }




}
