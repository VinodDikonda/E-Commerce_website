import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { ServiceProductService } from '../service-product.service';
import { Product } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private servie:ServiceProductService,private activeroute:ActivatedRoute){}
  data:any;
  price : any;
  total: any;
  productdata:undefined | Product | any;
  inVisible=true;

  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap
    .get('id');
    console.log(id);
    id && this.servie.getProduct(id)
    .subscribe(result=>{
      console.log(result);
      this.productdata=result;
      this.price=this.productdata.price;
      this.data=this.servie.getdata();
      this.total=(this.price*this.data)+100-(this.price/10);
      console.log(this.data);
      console.log(this.price);
    })
  }
  submitevent(){
    this.inVisible = !this.inVisible;
    alert("Order Comform Sucessfully.....")
  }
  cancleevent(){
    this.inVisible = !this.inVisible;
    alert("Order Cancle Sucessfully.....")
  }
  
}
