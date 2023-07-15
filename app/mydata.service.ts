import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFrom } from './user';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
 constructor(private httpclient:HttpClient){}

 add(loginFrom:LoginFrom){
  console.log(loginFrom);
  return this.httpclient.post("http://localhost:8080/loginpost",loginFrom);
}

identify(singupFrom:LoginFrom){
  console.log(singupFrom)
  return this.httpclient.post("http://localhost:8080/check",singupFrom);
}
}
