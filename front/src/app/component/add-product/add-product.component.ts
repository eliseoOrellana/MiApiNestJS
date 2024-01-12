import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../servicios/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  form!: FormGroup; 
  data: any = [];
  categorias: any = [];

  constructor(private formBuilder: FormBuilder, private apiService: ProductsService) { 
    
  } 

  ngOnInit(): void {
    this.apiService.getCategorias().subscribe((data)=>{
      this.categorias = data;
    });

    this.form = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
      categorias: new FormArray([]),
    });


  }

   addProduct(){
    this.apiService.addProduct(this.form.value).subscribe((data)=>{
      this.data = data;
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
}

