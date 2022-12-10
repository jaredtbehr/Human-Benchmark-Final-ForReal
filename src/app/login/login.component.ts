import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoginResponse } from './login-response';
import { UserService } from './login.service';
import { UserModel } from './user-item.model';

@Component({
  selector: 'fm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public buttonClicked!:string;
  private loginObservable!: Observable<LoginResponse>;

  constructor(private loginService:UserService) { }

  public onSubmit(user: NgForm) {
    console.log(this.buttonClicked);
    console.log(user.value);

    if(this.buttonClicked == 'SignUp')
    {
      this.loginObservable = this.loginService.signUp(user.value.email, user.value.password);
    }
    if(this.buttonClicked == 'Login')
    {
      this.loginObservable = this.loginService.login(user.value.email, user.value.password);
    }
    

    this.loginObservable.subscribe(
        (user:LoginResponse) => 
        {
          console.log(user);
        },
        error => 
        {
          console.log(error.error.error.message);
        }
    );

    user.resetForm();


  }
}
