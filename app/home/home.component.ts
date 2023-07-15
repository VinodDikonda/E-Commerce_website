import { Component, OnInit } from '@angular/core';
import { Product } from '../user';
import { ServiceProductService } from '../service-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendyProducts:undefined |Product[];
   constructor(private myservice:ServiceProductService){
  }
  ngOnInit(): void {
    this.myservice.trendyProducts()
    .subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

}
