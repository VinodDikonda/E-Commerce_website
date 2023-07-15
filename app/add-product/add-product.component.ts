import { Component } from '@angular/core';
import { ServiceProductService } from '../service-product.service';
import { Product } from '../user';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private product:ServiceProductService){}
  addProductMessage="";
  submit(data:Product){
    this.product.addProduct(data)
    .subscribe(resp=>{
      console.log(resp);
      if(resp){
        this.addProductMessage="product is added successfully.."
      }
    })
  }
}
