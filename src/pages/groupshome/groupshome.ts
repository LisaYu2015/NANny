import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group'
import { User, AuthService } from '../../providers/auth-service/auth-service'
import { OnegroupPage } from '../onegroup/onegroup'
import { GroupaddPage } from '../groupadd/groupadd'
import { GroupsearchPage } from '../groupsearch/groupsearch'

/**
 * Generated class for the GroupshomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-groupshome',
  templateUrl: 'groupshome.html',
})
export class GroupshomePage {
	user: User
	groups: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService,
  			  public groupCtrl: GroupProvider, public modalCtrl:ModalController) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupshomePage');
  }

  ionViewDidEnter(){
  	this.groupCtrl.getgroup(this.user._id).then(data=>{
  		this.groups = data;
  	})
  }

  newgroup(event, group){
  	//modal to add a new group
  	let modal = this.modalCtrl.create(GroupaddPage);
  }

  searchgroup(){
  	this.navCtrl.push(GroupsearchPage);
  }

  entergroup(event, group){
  	this.navCtrl.push(OnegroupPage, group);
  }

  removegroup(event, group){
  	var membership = {groupid:group._id, memberid:this.user._id}
  	this.groupCtrl.unjoingroup(membership).then(data=>{
  		this.groupCtrl.getgroup(this.user._id).then(groups=>{
  			this.groups = groups;
  		});
  	});
  }

}
