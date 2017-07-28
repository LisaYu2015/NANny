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
  pass:string;
  activedate:string;
  joindate:string;
  expertise:string;
  points:number;
  level:string;
  fixes:number;
  helps:number;

  constructor(email: string, fname:string, lname:string, shop:string, pass:string) {
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.shop = shop;
    this.pass = pass;
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
    // if (credentials.email === null || credentials.password === null) {
    //   return Observable.throw("Please fill all fields.");
    // } else {
    //   let headers = new Headers({ 'Content-Type': 'application/json' });
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post('/api/user', JSON.stringify(credentials), options).toPromise()
    //               .then((res) => res.json()[1])
    //               .catch(this.handleErrorPromise);
    //   console.log("will this be visible?");
    //   return Observable.create(observer => {
    //     this.currentUser = new User(this.data["email"], this.data["fname"], this.data["lname"], this.data["shop"], '');
    //     observer.next(true);
    //     observer.complete();
    //   });
    // }
  } 
  // public register(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please fill all fields.");
  //   } else {
  //     // At this point store the credentials to your backend!
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  // }
 
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