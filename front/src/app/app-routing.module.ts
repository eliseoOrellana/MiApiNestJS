import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { CategoryComponent } from './component/category/category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { LoadProductComponent } from './component/load-product/load-product.component';
import { UpdateProducComponent } from './component/update-produc/update-produc.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'loadProducts', component: LoadProductComponent},
  {path: 'addProducts', component: AddProductComponent},
  {path: 'deleteProducts', component: DeleteProductComponent},
  {path: 'loadCategories', component: CategoryComponent},
  {path: 'addCategories', component: AddCategoryComponent},
  {path: 'updateProducts', component: UpdateProducComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
