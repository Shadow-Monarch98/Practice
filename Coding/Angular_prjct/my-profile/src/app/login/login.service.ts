import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
interface loginResponseData{
    kind :string;
    idToken:string;
    email:string;
           refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}
@Injectable({providedIn:'root'})
export class loginService {
    constructor(private http:HttpClient){

    }
    signup(email:string,password:string){
        return this.http.post<loginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpNNhGXeySYM4cGLnHo5NKNd9H6htxjkI'
       , {
            email:email,
            password:password,
            returnSecureToken:true,
        }
     );
    }
    login(email: string, password: string) {
        return this.http.post<loginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpNNhGXeySYM4cGLnHo5NKNd9H6htxjkI'
            , {
                email: email,
                password: password,
                returnSecureToken: true,
            }
        );
    }
}
