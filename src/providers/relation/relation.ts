import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User, AuthService } from '../auth-service/auth-service'

/*
  Generated class for the RelationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RelationProvider {
	helplist= []
	reqlist = []
	user: User;
  url='http://ec2-54-87-140-197.compute-1.amazonaws.com:5000'
  //url = ''

  constructor(public http: Http, public auth:AuthService) {
    console.log('Hello RelationProvider Provider');
    this.user = this.auth.getUserInfo();
  }

  addupdaterelation(relation){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return new Promise(resolve => {

            this.http.post(this.url + '/api/relation/', JSON.stringify(relation), {headers: headers})
                .map(res => res.json())
                .subscribe(data => {
                    this.reqlist = data;
                });
        });
  }

  getrelationsreq(id){
  	return new Promise(resolve => {

          this.http.get(this.url + '/api/relation/req/' + this.user._id)
              .map(res => res.json())
              .subscribe(data => {
                  this.reqlist = data;
                  console.log(this.reqlist)
                  resolve(this.reqlist)
              });
      });
  }

  getrelationshelp(id){
  	return new Promise(resolve => {

          this.http.get(this.url + '/api/relation/help/' + this.user._id)
              .map(res => res.json())
              .subscribe(data => {
                  this.helplist = data;
                  console.log(this.helplist)
                  resolve(this.helplist)
              });
      });
  }

}
