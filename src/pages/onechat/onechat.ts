import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
	comments: Array<{author:string, date: string, comment: string}>;
	ncomment:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.chat = navParams.get('chat');
  	//in reality need to get the chat info from the database
  	this.comments = [];
    for (let i = 1; i < 11; i++) {
      this.comments.push({
      	author: 'SK' +i,
      	date: '12/1/17',
        comment: 'testing'
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnechatPage');
  }

  addcomment(){
  	//add comment to db
  	//get all the coments again
  	//this.navCtrl.push(OneChatPage,{chat:this.chat});
  }

}
