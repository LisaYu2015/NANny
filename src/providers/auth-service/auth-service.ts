import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class User {
  _id:string;
  email:string;
  fname:string;
  lname:string;
  shop:string;
  password:string;
  last_active:Date;
  joined:Date;
  expertise:string;
  experience: string;
  total_points:number;
  level:string;
  total_fix:number;
  total_help:number;

  constructor(email: string, fname:string, lname:string, shop:string, pass:string) {
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.shop = shop;
    this.password = pass;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Promise.reject("Please insert credentials");
    } 
    return new Promise(resolve => {
      this.http.get('/api/email/'+ credentials.email)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.currentUser = data[0];
          resolve(this.data);
        });
    });
  }


  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Promise.reject("Please fill all fields.");
    }
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/api/user', JSON.stringify(credentials), {headers: headers})
                  .subscribe(res => {
                    this.currentUser = res[0];
                    resolve(res);
                  });
      console.log("will this be visible?");
    });
  } 
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}