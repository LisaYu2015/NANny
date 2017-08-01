import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsProvider {
	chats:

  constructor(public http: Http) {
    console.log('Hello RequestsProvider Provider');
  }

  getallrequests(id){
  	return new Promise(resolve => {
      this.http.get('/api/points/id/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          this.points = data;
          resolve(this.points);
        });
    });
  }

  getdiscussion(){}

  addcomment(){}

  createrequest(){}

  assignhelper(){}

}
