import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService,User } from '../../providers/auth-service/auth-service'
import { NewRequestPage } from '../new-request/new-request'
import { ContactreasuresPage } from '../contactreasures/contactreasures'


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
  	this.contact = this.navParams.get('contact');
    console.log(this.contact)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactprofilePage');
  }

  viewfixes(){
    this.navCtrl.push(ContactreasuresPage, {id: this.contact._id})
  }

  gethelp(){
    this.navCtrl.push(NewRequestPage)
  }

}
