import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests'

/**
 * Generated class for the NewRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-request',
  templateUrl: 'new-request.html',
})
export class NewRequestPage {
  nrequest: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public req: RequestsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }

  send(){
  	//send request
    this.req.createrequest(this.nrequest).then((request) => {
      alert("Successfully created request. We will get back to you in a few days");
    });
  	this.navCtrl.pop();
  }

}
