import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './login.service';
import { UserModel } from './user-item.model';

@Component({
  selector: 'fm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:UserService) { }

  ngOnInit(): void {
  }

  public onSubmit(user: NgForm) {
    console.log("User log in / sign up.");
    console.log(user.value);
    this.loginService.signUp(user.value.email,user.value.password).subscribe(user => {
      console.log(user);
    });
  }
}
