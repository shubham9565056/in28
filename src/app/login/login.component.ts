import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'shubh'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin =  false

  constructor(private router: Router,
  private hardcodeAuthenticationService:HardcodedAuthenticationService) {

  }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username);
   //  if(this.username === "shubh" && this.password === 'shubh123'){
     if(this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
       this.router.navigate(['welcome', this.username])
       this.invalidLogin = false
     }
     else{
       this.invalidLogin=true;
     }
  }
}
