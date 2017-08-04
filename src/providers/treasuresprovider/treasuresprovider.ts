import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TreasuresProvider {

    data: any;

  constructor(public http: Http) {
      console.log('Hello TreasuresProvider Provider');
      this.data = null;
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


}