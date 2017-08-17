import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GroupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GroupProvider {

  constructor(public http: Http) {
    console.log('Hello GroupProvider Provider');
  }

  getallgroups(){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return new Promise(resolve => {
  		this.http.get('/api/group/')
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }

  getgroup(id){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return new Promise(resolve => {
  		this.http.get('/api/group/groupid/' + id)
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data[0]);
  		})
  	})
  }

  getusergrouplist(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return new Promise(resolve => {
      this.http.get('/api/member/userid/' + id)
      .map(res => res.json() )
      .subscribe(data => {
        resolve(data);
      })
    })
  }

  ismember(creds){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return new Promise(resolve => {
      this.http.get('/api/member/is/' + creds.memberid + '/' + creds.groupid)
        .map(res => res.json() )
        .subscribe(data => {
          resolve(data);
        })
    })
  }

  addgroup(group){
  	return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/api/group', JSON.stringify(group), {headers: headers})
                  .map(res=>res.json())
                  .subscribe(res => {
                    console.log(res)
                    resolve(res);
                  });
    });

  }

  searchgroup(search){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
    console.log("here")

  	let details = search;
  	return new Promise(resolve => {
  		this.http.get('/api/group/search/' + details)
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }

  joingroup(creds){
    console.log(creds)
  	return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/api/member', JSON.stringify(creds), {headers: headers})
                  .subscribe(res => {
                    resolve(res);
                  });
    });
  }

  unjoingroup(creds){
    console.log("provider leaving")
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return new Promise(resolve => {
  		this.http.delete('/api/member', new RequestOptions({
  			headers: headers,
  			body:creds
  		}))
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }

  addpost(post){
    console.log(post)
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/api/post/add', JSON.stringify(post), {headers: headers})
                  .subscribe(res => {
                    resolve(res);
                  });
    });
  }

  getposts(groupid){
    return new Promise(resolve => {
      this.http.get('/api/post/groupid/' + groupid)
          .map(res=>res.json())
          .subscribe(data => {
            resolve(data)
          })
    })
  }

}
