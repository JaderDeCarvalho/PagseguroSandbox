import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './admin/product/product.component';
import { PlanComponent } from './admin/plan/plan.component';
import { ProductService } from './admin/product/_service/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ShopComponent,
      CartComponent,
      MenuComponent,
      AdminComponent,
         ProductComponent,
         PlanComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [ProductService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
