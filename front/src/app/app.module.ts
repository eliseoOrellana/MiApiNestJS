import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { VistaProductosComponent } from './vistas/dashboard/vista-productos/vista-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { CategoryComponent } from './component/category/category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { LoadProductComponent } from './component/load-product/load-product.component';
import { UpdateProducComponent } from './component/update-produc/update-produc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VistaProductosComponent,
    AddProductComponent,
    DeleteProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    LoadProductComponent,
    UpdateProducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
