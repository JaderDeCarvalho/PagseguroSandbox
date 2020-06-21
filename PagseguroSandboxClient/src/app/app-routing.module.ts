import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { ShopComponent } from '../app/shop/shop.component';
import { CartComponent } from '../app/cart/cart.component';

import { AdminComponent } from '../app/admin/admin.component';
import { ProductComponent } from '../app/admin/product/product.component';
import { PlanComponent } from '../app/admin/plan/plan.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'plan', component: PlanComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
