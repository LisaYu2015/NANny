import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { OneChatPage } from '../onechat/onechat';
import { SearchPage } from '../search/search'
import { Chat, RequestsProvider } from '../../providers/requests/requests'


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  // selectedItem: any;
  userid: any;
  chats: any;
  disc: any;
  len:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private ques: RequestsProvider) {
  	// If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    this.userid = this.auth.getUserid();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  ionViewDidEnter(){
      console.log("ionview did enter chatpage")
      this.ques.getallrequests(this.userid).then((data) => {
        if(data){
          this.chats = data;
          this.len = this.chats.length;
          console.log(this.chats);
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
        this.disc = data;
        this.navCtrl.push(OneChatPage, {chat: item, disc: this.disc});
    })
    .catch(function(err){
      alert(err);
    });

  	
  }

  opensearch(){
  	this.navCtrl.setRoot(SearchPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }
}
