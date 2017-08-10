import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnesearchresultPage } from '../onesearchresult/onesearchresult'
import { NewRequestPage } from '../new-request/new-request'

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

	projects= [];
  carlinks= [];
  Userprojects = [];
  links = [];
  buttonimg = []
  searchparams:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.projects = navParams.get('projects');
    this.searchparams = navParams.get('searchparams')

        for (let i=0; i < this.projects.length; i++) {
                this.Userprojects.push(this.projects[i]);
        }

        for (let i=0; i < this.Userprojects.length; i++) {
              this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand +"/"+ this.Userprojects[i].model + ".jpg"; 
              this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";       
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
  }

  showDetails(project){
        
        this.navCtrl.push(OnesearchresultPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
   }


  newrequest(){
    this.navCtrl.push(NewRequestPage, {searchparams: this.searchparams});
  }

}
