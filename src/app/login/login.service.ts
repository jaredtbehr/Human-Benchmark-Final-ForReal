import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UserModel } from "../login/user-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)

export class UserService{

    
    constructor(private db: AngularFireDatabase) { 

    }

    getUsers()
    {
        return this.db.list<UserModel>("users").valueChanges();
    }

    getUser(index:number) {

    }

    addUser(user: UserModel)
    {
        this.db.list<UserModel>("users").push(user);
    }

}