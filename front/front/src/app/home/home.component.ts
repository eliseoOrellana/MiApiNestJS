import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servicios/api.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { get } from 'http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data: any = [];
  form!: FormGroup; 
  categorias: any = [];
  deleteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ProductsService) { 
    
  } 

  ngOnInit(): void {
    this.getProducts();
    this.getCategorias();

    this.form = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
      categorias: new FormArray([]),
    });

    this.deleteForm = this.formBuilder.group({
      id: ['']
    });


  }

  getProducts(){
    this.apiService.getProducts().subscribe((data)=>{
      this.data = data;
    });
  }

  addProduct(){
    this.apiService.addProduct(this.form.value).subscribe((data)=>{
      this.data = data;
    });
  }

  getCategorias() {
    this.apiService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  onCheckboxChange(e:any) {
    const categorias: FormArray = this.form.get('categorias') as FormArray;
  
    if (e.target.checked) {
      categorias.push(this.formBuilder.group({ id: e.target.value }));
    } else {
      let i: number = 0;
      categorias.controls.forEach((item) => {
        if (item.value.id == e.target.value) {
          categorias.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  deleteProduct(id: number){
    this.apiService.deleteProduct(id).subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    });
  }
  
}






  




  


  


