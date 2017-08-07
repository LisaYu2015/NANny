import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreasureDetailPage } from '../treasure-detail/treasure-detail';

/**
 * Generated class for the SearchresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html',
})
export class SearchresultPage {

	projects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.projects = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
  }

  showDetails(project){
        
        this.navCtrl.push(TreasureDetailPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
   }

}
