import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatProvider {

	apiurl = '/api/question';
	data: any;

	constructor(public http: Http) {
		console.log('Hello ChatProvider Provider');
		this.data=null;
	}

	getQuestions(){
    	if (this.data) {
    	  return Promise.resolve(this.data);
    	}
    	return new Promise(resolve => {
    		this.http.get(this.apiurl)
        	.map(res => res.json())
        	.subscribe(data => {
        		this.data = data;
        		resolve(this.data);
        	});
    	});
	}

	createQuestion(question){
		let headers = new Headers();
		headers.append('Content-type', 'application/json');
		this.http.post(this.apiurl, JSON.stringify(question), {headers:headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}

	deleteQuestion(id){
		this.http.delete(this.apiurl + id).subscribe((res)=>{
			console.log(res.json());
		)};
	}
}
