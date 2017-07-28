import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { OneChatPage } from '../onechat/onechat';
import { NewRequestPage } from '../new-request/new-request'


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  // selectedItem: any;
  icons: string[];
  items: Array<{author:string, title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  	// If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
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

  itemTapped(event, item) {
  	this.navCtrl.push(OneChatPage, {chat: item});
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ChatPage, {
    //   item: item
    // });
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
