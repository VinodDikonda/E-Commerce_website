import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProductService } from '../service-product.service';
import { Product } from '../user';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private activeroute:ActivatedRoute, private serve:ServiceProductService){}
  productdata:undefined | Product | any;
  quanity:number=1;
  data="";

  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap
    .get('id');
    console.log(id);
    id && this.serve.getProduct(id)
    .subscribe(result=>{
      console.log(result);
      this.Addtocard();
      this.productdata=result;
    })
  }
  handleQuantity(val:string){   
    if(this.quanity<20 && val==='plus'){
      this.quanity+=1;
    }else if(this.quanity>1 && val==='min'){
      this.quanity-=1;
    }
  }
  Addtocard(){
    if(this.productdata){
      this.productdata.pquanity=this.quanity;
      console.log(this.productdata);
      this.data=this.productdata.pquanity;
      this.serve.setdata(this.data);
    }
  }


  
}
