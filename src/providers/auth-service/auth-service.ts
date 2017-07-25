import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
 
export class User {
  email: string;
  fname:string;
  lname:string;
  shop:string;
  pass:string;

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
  url = "api/user";

  constructor(private http: Http) {
    this.data = null;
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } 
    else {
      // this.http.get('/api/user')
      //     .map(res => res.json())
      //     .subscribe(data => {
      //       this.data = data;
      //       // resolve(this.data);
      //     });
      return Observable.create(observer => {
        
        let access = (credentials.password === this.data["password"] && credentials.email === this.data["email"]);
        this.currentUser = new User(this.data["email"], this.data["fname"], this.data["lname"], this.data["shop"], '');
        observer.next(access);
        observer.complete();
      });
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  public register(credentials): Observable<User> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please fill all fields.");
    } else {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.url, JSON.stringify(credentials), options)
                  .map(this.extractData)
                  .catch(this.handleErrorObservable);
      // this.http.post('api/user', JSON.stringify(credentials), options)
      //   .subscribe(res=> {
      //     console.log(res.json());
      //   });
      // return Observable.create(observer => {
      //   observer.next(true);
      //   observer.complete();
      // });
    }
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
    return this.data;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}