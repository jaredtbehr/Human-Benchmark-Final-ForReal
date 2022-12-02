import { Component, OnInit } from '@angular/core';
import { UserService } from './login.service';
import { UserModel } from './user-item.model';

@Component({
  selector: 'fm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: UserModel) {
    console.log("You clicked add user");
    console.log(user);
    

    
  }
}
