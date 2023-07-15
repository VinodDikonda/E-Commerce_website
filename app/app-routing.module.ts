import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { CartComponent } from './cart/cart.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"",redirectTo:"seller",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"seller",component:SellerComponent},
  {path:"cart/:id",component:CartComponent},
  {path:"seller-add",component:SellerAddComponent},
  {path:"seller-login",component:SellerLoginComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
