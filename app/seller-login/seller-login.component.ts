import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';
import { LoginFrom } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  constructor(private myservice: MydataService) {

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

}
