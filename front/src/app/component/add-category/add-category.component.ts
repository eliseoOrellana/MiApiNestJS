import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servicios/api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  data: any = [];
  categorias: any = [];
  form!: FormGroup;

  constructor(private apiService: ProductsService, private formBuilder: FormBuilder) { 
    
  } 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  addCategory(){
    this.apiService.addCategory(this.form.value).subscribe((data)=>{
      console.log(this.data);
      this.data = data;
      
    });
  }
}




