import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
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
    year: number;
    make: string;
    model: string;
    error: string;
    complete: string;
    opendate:string;


    constructor(id:string, content:string, helperID:string, requesterID:string, helpername:string, username:string,
      year:number, make:string, model:string, error:string, symptoms:string, complete:string){
        this._id = id;
        this.content = content;
        this.helperID = helperID;
        this.helpername = helpername;
        this.requesterID =  requesterID;
        this.requestername = username;
        this.year = year;
        this.make = make;
        this.model = model;
        this.error = error;
        this.symptoms = symptoms;
        this.complete = complete;
        this.opendate = "";
    }

    setopendate(opendate:string){
      this.opendate = opendate;
    }
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
	chats : Array<Chat>;
	disc = Array<Comment>();
  username: any;
  url='http://ec2-54-87-140-197.compute-1.amazonaws.com:5000'
  //url = ''


  constructor(public http: Http, public auth: AuthService, public tres: TreasuresProvider) {
    console.log('Hello RequestsProvider Provider');
  }

  convertdatatochat(data, type){
      for (var i =  0; i < data.length; i++) {
        let requestername;
        let r = data[i]
        var helpername;
        var request;
        var data2;


              console.log("inloop")


              //find project
              this.tres.getonetreasure(r.ProjectID)
                  .then((project)=>{
                    console.log(project)
                    data2 = project[0];
                    if(type=="req"){
                      if(r.helperID){
                        this.auth.getusernamebyid(r.helperID).then(name => {
                          helpername = name
                          requestername = this.auth.getUserName()
                          request = new Chat(r._id, r.content, r.helperID, r.requesterID, helpername, requestername
                        , data2.year, data2.brand, data2.model, data2.errorcode, data2.symptoms, data2.complete);
                          // if(data2.opendate){
                          //   request.setopendate(data2.opendate.getTime().toString())
                          // } 
                          this.chats.push(request);
                          console.log(request);
                        })
                      } else{
                        helpername = "Not Matched";
                        request = new Chat(r._id, r.content, r.helperID, r.requesterID, helpername, requestername
                        , data2.year, data2.brand, data2.model, data2.errorcode, data2.symptoms, data2.complete);
                          // if(data2.opendate){
                          //   request.setopendate(data2.opendate.getTime().toString())
                          // } 
                          this.chats.push(request);
                          console.log(request);
                      }
                    } else {
                      this.auth.getusernamebyid(r.requesterID).then(name => {
                        requestername = this.auth.getUserName();
                        helpername = name
                        request = new Chat(r._id, r.content, r.helperID, r.requesterID, helpername, requestername
                        , data2.year, data2.brand, data2.model, data2.errorcode, data2.symptoms, data2.complete);
                          // if(data2.opendate){
                          //   request.setopendate(data2.opendate.getTime().toString())
                          // } 
                          this.chats.push(request);
                          console.log(request);
                      })
                    }
                    
                    
                  })
        }
  }

  //where id is the _id of the user
  getallrequests(id){
    this.chats = new Array<Chat>();
  	this.username = this.auth.getUserName();
    console.log(this.username)

  	return new Promise(resolve => {
      this.http.get(this.url + '/api/question/reqid/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          console.log("in subscribe")
          if(data){
            console.log(data)
            this.convertdatatochat(data, "req");
          }

          this.http.get(this.url + '/api/question/helpid/'+id)
            .map(res => res.json())
            .subscribe(data => {
              if(data){
                console.log("in here after  subscribe")
                this.convertdatatochat(data, "help");
                }
              });
        });
        resolve(this.chats);
    });
  }

  //where id is the _id of the chat
  getdiscussion(id){
  	return new Promise(resolve => {
      this.http.get(this.url + '/api/disc/id/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          this.disc = data;
          resolve(this.disc);
        });

    });
  }

  addcomment(info){
    console.log(info);

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.url + '/api/disc', JSON.stringify(info), {headers: headers})
                  .subscribe(res => {
                    resolve(res);
                  });
    });
  }

  createrequest(info){
    console.log(info);

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.url + '/api/question', JSON.stringify(info), {headers: headers})
                  .subscribe(res => {
                    resolve(res);
                  });
    });
  }

  assignhelper(){}

}
