import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	user: User;
  joined: any;
  lastactive: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  	this.user = this.auth.getUserInfo();
    this.joined = new Date(this.user.joined).getTime();
    this.lastactive = new Date(this.user.last_active);
    alert(this.user.total_fix);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
