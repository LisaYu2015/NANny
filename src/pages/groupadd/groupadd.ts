import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group'
import { AuthService, User } from '../../providers/auth-service/auth-service'
import { GroupshomePage } from '../groupshome/groupshome'

/**
 * Generated class for the GroupaddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-groupadd',
  templateUrl: 'groupadd.html',
})
export class GroupaddPage {
	ngroup= {name:'', basedon:'', description:''};
	user:User;
  groupid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public group: GroupProvider,
  			  public auth: AuthService, public view:ViewController) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupaddPage');
  }

  send(){
  	this.group.addgroup(this.ngroup).then(res=>{
  		let userid = this.user._id
      this.groupid = res
  		this.group.joingroup({groupid:this.groupid._id, memberid:userid}).then(data=>{
  			this.view.dismiss()
   		})
  	})
  }

}
