import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-r-login',
  templateUrl: './r-login.component.html',
  styleUrls: ['./r-login.component.css']
})
export class RLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loginForm.setValue({name:'wasim', email:'wasim@gmail.com', password:'12345678'})
  }


  loginForm= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  loginUser(){
    console.log(this.loginForm.value);
    
  }

}
