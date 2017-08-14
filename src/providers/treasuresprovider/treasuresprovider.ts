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

  getusertreasures(id) {

    return new Promise(resolve => {

      this.http.get('/api/Project/UserID/' + id)
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              console.log(data);
          });
    });
  }

  getuploadedtreasures() {

    return new Promise(resolve => {

      this.http.get('/api/Project/alluploaded')
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
            console.log(data);
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

  searchtreasures(search:string){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

  	// let details = make + " " + model + " " + symptoms + " " + errorcodes;
    let details = search;
  	return new Promise(resolve => {
  		this.http.get('api/Project/search/' + details)
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }


  deletedetails(id){
 
    this.http.delete('/api/Detail/detail_id/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }


uploadimg(img){

  let headers = new Headers();
  console.log("gah")

  this.http.post('/api/img', JSON.stringify(img), {headers: headers})

  .subscribe(res => {
    console.log(res.json());
    console.log("abc");
  });
}



}



