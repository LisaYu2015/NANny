import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
	newcreds = {fname:'', lname:'', expertise:'', shop:'', email:''};
	user: User;
  	joined: any;
  	lastactive: string;
  	fixes: string;
  	helps: any;
  	total_points: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  	this.user = this.auth.getUserInfo();
    this.joined = new Date(this.user.joined).getTime().toString();
    this.lastactive = new Date(this.user.last_active).getTime().toString();
    this.fixes = this.user.total_fix.toString();
    this.helps = this.user.total_help.toString();
    this.total_points = this.user.total_points.toString();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  login() {
    this.user.fname=this.newcreds.fname;
    this.user.lname=this.newcreds.lname;
    this.user.expertise=this.newcreds.expertise;
    this.user.shop=this.newcreds.shop;
    this.user.email=this.newcreds.email;

    console.log(this.user);
    this.auth.updateuser(this.user);
  }



}
