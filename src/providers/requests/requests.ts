import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';

export class Chat{
	_id: string;
    content: string;
    date: Date;
    helperID: string; //points to a user
    helpername: string;
    requesterID: string; //points to a user
    requestername:string;
    symptoms: string;
    ProjectID : string;
}

export class Comment{
	_id: string;
	author:string;
	comment:string;
	requestid:string;
	time:Date;
}

@Injectable()
export class RequestsProvider {
	chats: Array<Chat>;
	disc: Array<Comment>;


  constructor(public http: Http, public auth: AuthService) {
    console.log('Hello RequestsProvider Provider');
  }

  //where id is the _id of the user
  getallrequests(id){
  	var username = this.auth.getUserName();

  	return new Promise(resolve => {
      this.http.get('/api/question/reqid/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          if(data){
            this.chats.push(data);
                  //for each request, get and store name of helper
            for (var i =  0; i < this.chats.length; i++) {
              this.chats[i].requestername = username;
              this.chats[i].helpername = this.auth.getusernamebyid(this.chats[i].helperID);
            }
          }

          this.http.get('/api/question/helpid/'+id)
            .map(res => res.json())
            .subscribe(data => {
              if(data){
                this.chats.push(data);
                //for each request, get and store name of requester
                for (var i =  0; i < this.chats.length; i++) {
                  this.chats[i].helpername = username;
                  this.chats[i].requestername = this.auth.getusernamebyid(this.chats[i].requesterID);
                }
                resolve(this.chats);
              }
          });
        });
    });
  }

  //where id is the _id of the chat
  getdiscussion(id){
  	return new Promise(resolve => {
      this.http.get('/api/disc/id/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          this.disc = data;
          resolve(this.disc);
        });

    });
  }

  createrequest(info){
    console.log(info);

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('/api/question', JSON.stringify(info), {headers: headers})
                  .subscribe(res => {
                    resolve(res);
                  });
    });
  }

  assignhelper(){}

}
