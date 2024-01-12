import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../servicios/api.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {

  data: any = [];
  form!: FormGroup; 
  categorias: any = [];
  deleteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ProductsService) { 
    
  } 

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      id: ['']
    });


  }

  deleteProduct(id: number){
    this.apiService.deleteProduct(id).subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    });
  }
}
