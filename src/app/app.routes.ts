// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BasketComponent } from './components/basket/basket.component';

export const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Redirect to categories by default
  { path: 'categories', component: CategoryListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductListComponent },
 
  { path: 'basket', component: BasketComponent },

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }