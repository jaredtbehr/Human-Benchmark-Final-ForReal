import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UserModel } from "../login/user-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { environment } from "src/environments/environment";
import { LoginResponse } from "./login-response";

@Injectable(
    {providedIn: 'root'}
)

export class UserService{
    baseURL:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndPoint:string = "signUp";
    signInEndPoint:string = "signInWithPassword";

    constructor(private http:HttpClient) 
    {}

    public signUp(email: string, password: string)
    {
        const requestBody = 
        {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post<LoginResponse>(this.baseURL + ':' + this.signUpEndPoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    public login(email:string, password:string)
    {
        const requestBody = 
        {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post<LoginResponse>(this.baseURL + ':' + this.signInEndPoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}