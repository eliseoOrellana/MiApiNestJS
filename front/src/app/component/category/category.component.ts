import { ProductsService } from '../../servicios/api.service';
import { LoadProductComponent } from './../load-product/load-product.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  data: any = [];
  categorias: any = [];

  constructor(private apiService: ProductsService ) {
  
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){  
    this.apiService.getCategorias().subscribe((data)=>{
      this.categorias = data;
      console.log(this.categorias);
    });
  }

}





