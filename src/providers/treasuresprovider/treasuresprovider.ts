import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TreasuresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TreasuresProvider {

    data: any;

  constructor(public http: Http) {
      console.log('Hello TreasuresProvider Provider');
      this.data = null;
  }

  getonetreasure(id){
  	return new Promise(resolve=>{
  		this.http.get('/api/Project/id/' + id)
  			.map(res=>res.json())
  			.subscribe(proj => {
  				console.log(proj)
  				resolve(proj);
  			})
  	})
  }

  gettreasures() {

      if (this.data) {
          return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

          this.http.get('/api/Project')
              .map(res => res.json())
              .subscribe(data => {
                  this.data = data;
                  resolve(this.data);
              });
      });
  }

  posttreasures(project) {
    let headers = new Headers();
      //project.uploaded="yes"
          
      // console.log(project);

      headers.append('Content-Type','application/json');

      return new Promise(resolve => {

          this.http.post('/api/Project',JSON.stringify(project), {headers: headers})
              .map(res => res.json())
              .subscribe(data => {
                  resolve(data);
              });
      });


        // this.http.post('/api/Project',JSON.stringify(project), {headers: headers})
        // .subscribe(res => {
        //     console.log(res.json());
        //     return res.json();
        // });

  }

  getdata(){
  	return this.data;
  }

  postdetails(details) {
    let headers = new Headers();
      

      //project.uploaded="yes"
          
      console.log(details);

      headers.append('Content-Type','application/json');

        this.http.post('/api/Detail',JSON.stringify(details), {headers: headers})
        
        .subscribe(res => {
          //console.log(res.json());
        });
  }

  searchtreasures(make:string, model:string, symptoms:string, errorcodes:string){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	let details = make + " " + model + " " + symptoms + " " + errorcodes;
  	return new Promise(resolve => {
  		this.http.get('api/Project/search/' + details)
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }


}
