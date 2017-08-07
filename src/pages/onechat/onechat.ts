import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { RequestsProvider } from '../../providers/requests/requests'


/**
 * Generated class for the OnechatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnechatPage');
  }

  addcomment(){
  	//add comment to db
    this.req.addcomment({requestid:this.chat._id, comment:this.ncomment, author:this.currentuser._id})
        .then(data => {
          //get all the coments again
          this.req.getdiscussion(this.chat._id)
            .then((data)=>{
              this.disc = data;
            })
          // this.navCtrl.push(OneChatPage,{chat:this.chat});
    })
  	
  }

}
