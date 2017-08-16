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
	groups:any;
  groupdetails = [];
  memberof = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService,
  			  public groupCtrl: GroupProvider, public modalCtrl:ModalController) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupshomePage');
  }

  ionViewDidEnter(){
    console.log("groupshome enter")
    this.groupdetails = [];
  	this.groupCtrl.getusergrouplist(this.user._id).then(data=>{
      this.groups = data
      for(let i=0; i<this.groups.length; i++){
        this.groupCtrl.getgroup(this.groups[i].groupid).then(res => {
          this.groupdetails.push(res)
        })
      }
  	})
  }

  newgroup(){
    console.log("clicked")
  	//modal to add a new group
  	let modal = this.modalCtrl.create(GroupaddPage);
    modal.present();
    modal.onDidDismiss(data=>{
      this.ionViewDidEnter();
    })
  }

  groupsearch(){
  	this.navCtrl.setRoot(GroupsearchPage);
  }

  entergroup(event, group){
    console.log(group)
  	this.navCtrl.push(OnegroupPage, {group:group});
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
