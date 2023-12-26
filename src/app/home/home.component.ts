import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Se crea un arreglo para guardar los datos de la api, si es objeto se utiliza [] 
  //si fuera un objeto seria con {}
  data: any[] = [];


  constructor(private apiService: ApiService) { }

  //Se llama al metodo llenarData para que se ejecute al cargar la pagina
  //ngOnInit es un metodo que se ejecuta al cargar la pagina
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    //Se llama al metodo getData de la clase apiService
    this.apiService.getData().subscribe((data) => {
      //Se guarda la respuesta de la api en el arreglo data
      this.data = data;
      console.log(this.data);

    });
  }


}
