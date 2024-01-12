import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servicios/api.service';

@Component({
  selector: 'app-load-product',
  templateUrl: './load-product.component.html',
  styleUrl: './load-product.component.css'
})
export class LoadProductComponent implements OnInit{
  data: any = [];
  categorias: any = [];

  constructor(private apiService: ProductsService) { 
    
  } 

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    this.apiService.getProducts().subscribe((data)=>{
      this.data = data;
    });
  }
  
}
