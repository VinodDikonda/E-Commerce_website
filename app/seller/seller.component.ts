import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFrom } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  constructor(private myservice: MydataService , private route : Router) {

  }
login:LoginFrom=new LoginFrom();
  inVisible = true
  message2 = "Successfully Login......"
  message1 = "Successfully Created......"

  openLogin() {
    this.inVisible = !this.inVisible;
  }
 
  alert12() {
    console.log(this.login);
    this.myservice.identify(this.login)
    .subscribe(data=>{
      alert(this.message2)
      this.gotohome();
    },error=>alert("sorry please enter correct username and password"));
    
  }
  mymodelform = new FormGroup({
    username: new FormControl("", Validators.compose([
      Validators.required, Validators.pattern("[A-Za-z]+")
    ])),
    password:new FormControl("",Validators.compose([
      Validators.required, Validators.pattern("[a-z0-9]+")
    ])),
    email:new FormControl("",Validators.compose([
      Validators.required, Validators.pattern("[a-z0-9]+@[a-z]+.[a-z]+")
    ]))
  })
  signUp(formdata: any) {
  this.myservice.add(this.login)
  .subscribe(data=>{
    console.log(data);
    alert(this.message1)
  })
    console.log(this.login);
    console.log(formdata.username + " " + formdata.password)
  }
  gotohome(){
    this.route.navigate(['/home']);
  }
}

