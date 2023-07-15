import { Injectable } from '@angular/core';
import { Product } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  constructor(private httpclient:HttpClient) { }
  addProduct(product:Product){
    return this.httpclient.post("http://localhost:8080/Productpost",product)
  }
  productList(){
    return this.httpclient.get<Product[]>("http://localhost:8080/Productget")
  }
  public dodelete(id:any){
    return this.httpclient.delete("http://localhost:8080/Productdelete?id="+id);
  }
  public doupadate(product:any){
    return this.httpclient.put("http://localhost:8080/Productupdate",product);
  }
  trendyProducts(){
    return this.httpclient.get<Product[]>("http://localhost:8080/Productget");
  }
  getProduct(id:any){
    return this.httpclient.get("http://localhost:8080/Product/"+id);
  }

  data="";
  getdata(){
    return this.data;
  }
  setdata(mydata:any){
    this.data=mydata;
  }
}
