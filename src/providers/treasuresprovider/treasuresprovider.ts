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
    url='http://texconnect.kaasbox.com:5000';
    url2='http://ec2-54-87-140-197.compute-1.amazonaws.com:5000'
  //url = ''

  constructor(public http: Http) {
      console.log('Hello TreasuresProvider Provider');
      this.data = null;
  }

  getonetreasure(id){
  	return new Promise(resolve=>{
  		this.http.get(this.url + '/api/Project/id/' + id)
  			.map(res=>res.json())
  			.subscribe(proj => {
  				console.log(proj)
  				resolve(proj);
  			})
  	})
  }

    getprojtreasuresdetail(id) {

    return new Promise(resolve => {

      this.http.get(this.url + '/api/Detail/ProjID/' + id)
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              console.log(data);
          });
    });
  }


  getusertreasures(id) {

    return new Promise(resolve => {

      this.http.get(this.url + '/api/Project/UserID/' + id)
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              console.log(data);
          });
    });
  }

  getusertreasuresuploaded(id) {

    return new Promise(resolve => {

      this.http.get(this.url + '/api/Project/alluploaded/id/' + id)
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

      this.http.get(this.url + '/api/Project/alluploaded')
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

    this.http.post(this.url + '/api/Project',JSON.stringify(project), {headers: headers})
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
 
    this.http.delete(this.url + '/api/Project/' + id).subscribe((res) => {
      console.log(res.json());
      this.http.delete(this.url + '/api/detail/project_id/' + id).subscribe((res) => {
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

    this.http.post(this.url + '/api/Detail',JSON.stringify(details), {headers: headers})
    
    .subscribe(res => {
      //console.log(res.json());
    });
  }

  searchtreasures(search:string){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
    console.log(search);

  	let details = search;
  	return new Promise(resolve => {
  		this.http.get(this.url + 'api/Project/search/' + details)
  		.map(res => res.json() )
  		.subscribe(data => {
  			resolve(data);
  		})
  	})
  }


  deletedetails(id){
 
    this.http.delete(this.url + '/api/Detail/detail_id/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }

// does not work


// uploadimg(img){

//   let headers = new Headers();
//   console.log("gah")
//   console.log(img);
//   this.http.post('/api/img', JSON.stringify(img), {headers: headers})

//   .subscribe(res => {
//     console.log(res.json());
//     console.log("abc");
//   });
// }


  gettreasurecomment(treasureid) {
    

    return new Promise(resolve => {

      this.http.get(this.url + '/api/TreasureComment/' + treasureid)
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              
          });
    });
  }

  postcomment(comment) {
        let headers = new Headers();
    

    //project.uploaded="yes"
        
    console.log(comment);

    headers.append('Content-Type','application/json');

    return new Promise(resolve => {

    this.http.post(this.url + '/api/trescomment',JSON.stringify(comment), {headers: headers})
    .map(res => res.json())
        .subscribe(data => {
            resolve(data);
            console.log(data);


    
    });
  });
  }




}


