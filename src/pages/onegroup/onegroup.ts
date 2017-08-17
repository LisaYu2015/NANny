import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService, User } from '../../providers/auth-service/auth-service'
import { GroupProvider } from '../../providers/group/group'

/**
 * Generated class for the OnegroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-onegroup',
  templateUrl: 'onegroup.html',
})
export class OnegroupPage {
	group:any;
	member:number;
	user: User;
	ismember:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService,
  			  public groupctrl:GroupProvider) {
  	this.group = this.navParams.get("group")
  	this.user = this.auth.getUserInfo();
  	console.log(this.user._id)
  	console.log(this.group._id)
  	this.groupctrl.ismember({memberid:this.user._id, groupid:this.group._id}).then(mem => {
  		console.log(mem)
  		this.ismember = mem
  		if(this.ismember.length > 0){
  			this.member = 1
  		} else {
  			this.member = 0
  		}
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnegroupPage');
  }

  ionViewDidEnter(){
  	console.log(this.user._id)
  	console.log(this.group._id)
  	this.groupctrl.ismember({memberid:this.user._id, groupid:this.group._id}).then(mem => {
  		console.log(mem)
  		this.ismember = mem
  		if(this.ismember.length > 0){
  			this.member = 1
  		} else {
  			this.member = 0
  		}
  	})
  }

  viewcomments(){}

  post(){
  	
  }

  joingroup(){
  	this.groupctrl.joingroup({memberid:this.user._id, groupid:this.group._id}).then(data => {
  		this.member = 1;
  	})
  }
  leavegroup(){
  	console.log("trying to leave")
  	this.groupctrl.unjoingroup({memberid:this.user._id , groupid:this.group._id}).then(data=>{
  		console.log("left")
  		this.member = 0;
  	})
  }

}
