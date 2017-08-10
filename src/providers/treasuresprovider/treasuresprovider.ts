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

  gettreasures() {

    return new Promise(resolve => {

      this.http.get('/api/Project')
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              console.log(data);
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
            console.log(this.data);
        });
                
    });


          // this.http.post('/api/Project',JSON.stringify(project), {headers: headers})
          // .subscribe(res => {
          //     console.log(res.json());
          //     return res.json();
          // });

  }


    deleteproject(id){
 
    this.http.delete('/api/Project/' + id).subscribe((res) => {
      console.log(res.json());
      this.http.delete('/api/detail/project_id/' + id).subscribe((res) => {
      console.log(res.json());
    });
    });    
 
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



  deletedetails(id){
 
    this.http.delete('/api/Detail/detail_id/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
}