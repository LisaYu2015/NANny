import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { RequestsProvider } from '../../providers/requests/requests';
import * as io from 'socket.io-client';


/**
 * Generated class for the OnechatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//socket io 
// declare var io : {
//     connect(url: string): Socket;
// }
// interface Socket {
//     on(event: string, callback: (data: any) => void );
//     emit(event: string, data: any);
// }
 

@Component({
  selector: 'page-onechat',
  templateUrl: 'onechat.html',
})
export class OneChatPage {
	chat:any;
  disc:any;
	ncomment:any;
  otherperson: string;
  currentuser: User;
  socket: any;
  @ViewChild('content') content;


  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, 
              public req:RequestsProvider) {
  	this.chat = navParams.get('chat');
    this.disc = navParams.get('disc');
    this.currentuser = this.auth.getUserInfo();
    if(this.chat.requesterID == this.currentuser._id){
      this.otherperson = this.chat.helpername;
    } else {
      this.otherperson = this.chat.requestername;
    }
  	//in reality need to get the chat info from the database
    console.log(this.disc);

    this.socket = io();

    this.socket.on("comment",(data:any) => {
      console.log(data)
      this.req.getdiscussion(this.chat._id)
          .then((data)=>{
            this.disc = data;
          })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnechatPage');
  }

  ionViewDidEnter(){
    this.content.scrollToBottom();
  }

  addcomment(){
  	//add comment to db
    this.req.addcomment({requestid:this.chat._id, comment:this.ncomment, author:this.currentuser._id})
        .then(data => {
          this.socket.emit('comment', data);
          //get all the coments again
          this.req.getdiscussion(this.chat._id)
            .then((data)=>{
              this.disc = data;
            })
          this.content.scrollToBottom();
          // this.navCtrl.push(OneChatPage,{chat:this.chat});
    })

    this.ncomment = "";
  	
  }

}
