import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group'
import { User, AuthService } from '../../providers/auth-service/auth-service'
import { OnegroupPage } from '../onegroup/onegroup'
import { GroupshomePage } from '../groupshome/groupshome'


/**
 * Generated class for the GroupsearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-groupsearch',
  templateUrl: 'groupsearch.html',
})
export class GroupsearchPage {
  groupdetails:any;
	groups: any;
	user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, public groupctrl:GroupProvider,
  			  public auth:AuthService, public groupCtrl:GroupProvider) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsearchPage');
  }

  ionViewDidEnter(){
    console.log("groupshome enter")
    this.groupdetails = [];
    this.groupCtrl.getallgroups().then(data=>{
      this.groupdetails = data
    })
  }

  mygroups(){
    this.navCtrl.setRoot(GroupshomePage);
  }

  entergroup(event, group){
    console.log(group)
    this.navCtrl.push(OnegroupPage, {group:group});
  }

  getItems(ev:any){
    	let val = ev.target.value //get value of the searchbar
    	if(val != ''){
  	  	this.groupctrl.searchgroup(val).then(data=>{
          console.log(data)
  	  		this.groupdetails = data;
  	  	})
  	} else {
      this.ionViewDidEnter(); //reset groups
    }
  }


}
