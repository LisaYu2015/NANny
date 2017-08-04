import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { OneChatPage } from '../onechat/onechat';
import { NewRequestPage } from '../new-request/new-request'
import { Chat, RequestsProvider } from '../../providers/requests/requests'


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  // selectedItem: any;
  icons: string[];
  items: Array<{author:string, title: string, note: string, icon: string}>;
  userid: any;
  chats: any;
  disc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private ques: RequestsProvider) {
  	// If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    this.userid = this.auth.getUserid();

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
      	author: 'SK' +i,
        title: '2014 Honda Civic',
        note: 'These are the symptoms',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  ionViewDidEnter(){
      console.log("ionview did enter chatpage")
      this.ques.getallrequests(this.userid).then((data) => {
        if(data){
          this.chats = data;
        }
      })
      .catch(function(err){
          alert(err);
        });
  }

  itemTapped(event, item) {
    //get one discussion and push to page
    this.ques.getdiscussion(item._id)
    .then((data)=>{
      if(data){
        this.disc = data;
      }
    })
    .catch(function(err){
      alert(err);
    });

  	this.navCtrl.push(OneChatPage, {chat: item});
  }

  newrequest(){
  	this.navCtrl.push(NewRequestPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }
}
