import { Component } from '@angular/core';
import { ProductsService } from '../servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: any = [];

  constructor(private apiService: ProductsService ) { }

  ngOnInit(): void {
      this.filldata();
  }

  filldata(){
    this.apiService.getProducts().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    });
  }

  


  

}
