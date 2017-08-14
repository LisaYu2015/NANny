import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group'
import { User, AuthService } from '../../providers/auth-service/auth-service'

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
	groups: any;
	user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, public groupctrl:GroupProvider,
  			  public auth:AuthService) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsearchPage');
  }

  getallgroups(){
  	this.groupctrl.getallgroups().then(data=>{
  		this.groups = data
  	})
  }

  getitems(ev:any){
  	this.getallgroups(); //reset groups

  	let val = ev.target.value //get value of the searchbar
  	if(val != ''){
	  	this.groupctrl.searchgroup(val).then(data=>{
	  		this.groups = data;
	  	})
	}
  }

  joingroup(event, g){
  	this.groupctrl.joingroup({groupid:g._id, memberid:this.user._id})
  }

}
