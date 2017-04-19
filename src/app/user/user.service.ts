import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private Url = 'http://localhost:63107/';  // URL to web api

    constructor(private http: Http) { }
    
    getUsers(): Promise<any> {
        return this.http.get(this.Url)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

    create(email:String, password:String, confirmPassword:String) {
        return this.http.post(this.Url+"api/Account/Register", JSON.stringify({email: email, password:password, confirmPassword:confirmPassword}), {headers: this.headers})
        .toPromise()
        .then( res => console.log("Sign up successed!"))
        .catch(this.handleError);
    }

    login(email:String, password:String) {
        return this.http.post(this.Url+"token", JSON.stringify({email: email, password:password, grant_type: 'password'}), {headers: this.headers})
        .toPromise()
        .then( res => console.log("Response: "+res.json().data))
        .catch(this.handleError);

    }
    
    // create(email:String, password:String, confirmPassword:String) {
    //     return this.http.post(this.Url, JSON.stringify({email: email, password:password, confirmPassword:confirmPassword}), {headers: this.headers}).map((response: Response) => response.json());
    // }
    
    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}