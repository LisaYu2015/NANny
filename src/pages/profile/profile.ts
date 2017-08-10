import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { TreasuresPage } from '../treasures/treasures'
import { EditprofilePage } from '../editprofile/editprofile'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	user: User;
  joined: any;
  lastactive: string;
  fixes: string;
  helps: any;
  total_points: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  	this.user = this.auth.getUserInfo();
    this.joined = new Date(this.user.joined).getTime().toString();
    this.lastactive = new Date(this.user.last_active).getTime().toString();
    this.fixes = this.user.total_fix.toString();
    this.helps = this.user.total_help.toString();
    this.total_points = this.user.total_points.toString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editprofile(){
    this.navCtrl.push(EditprofilePage);
  }

  gototreasures(){
    this.navCtrl.setRoot(TreasuresPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
