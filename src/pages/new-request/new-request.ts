import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

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

    model: any;
    symptoms: any;
    

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }

  save():void{
  	let question = {
  		model: this.model,
  		symptoms = this.symptoms
  	}
  	this.viewCtrl.dismiss(question);
  }

  close():void{
  	this.viewCtrl.dismiss();
  }

}
