import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService,User } from '../../providers/auth-service/auth-service'


/**
 * Generated class for the ContactprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contactprofile',
  templateUrl: 'contactprofile.html',
})
export class ContactprofilePage {
	contact:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  	var id = this.navParams.get('contact').id;
  	this.contact = this.auth.getuserbyid(id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactprofilePage');
  }

}
