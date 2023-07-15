import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from '../service-product.service';
import { Product } from '../user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList:undefined | Product[];

constructor(private product:ServiceProductService){}
  ngOnInit(): void {
    this.product.productList()
    .subscribe(resp=>{
      console.log(resp);
      if(resp){
        this.productList=resp;
      }
    })
  }
  deleteProduct(productid:any){
    this.product.dodelete(productid.id)
    .subscribe(resp=>{
      console.log(resp);
      this.ngOnInit();
    })
  }
  producttoupdate={
    id:"",
    name:"",
    price:"",
    color:"",
    description:"",
    url:"",
  }
  updatepro(){
    this.product.doupadate(this.producttoupdate)
    .subscribe(resp=>{
      console.log(resp);
    })
  }
  edit(product:any){
    this.producttoupdate=product
  }
}
