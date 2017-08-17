import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { SearchresultPage } from '../searchresult/searchresult'
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { OnesearchresultPage } from '../onesearchresult/onesearchresult'
import { NewRequestPage } from '../new-request/new-request'



/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contactreasures',
  templateUrl: 'contactreasures.html',
})
export class ContactreasuresPage {
  projects: any;
  id: any;
  carlinks= [];
  Userprojects = [];
  links = [];
  buttonimg = []
  searchval = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, 
              public tres: TreasuresProvider) {
  	this.id = this.navParams.get('id')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.tres.getusertreasuresuploaded(this.id).then(data=>{
        this.projects = data
        this.display();
      })
  }


  display(){
    this.Userprojects = []
    this.carlinks = []
    this.links = []
    console.log("in display")

        for (let i=0; i < this.projects.length; i++) {
          this.Userprojects.push(this.projects[i]);
        }

        for (let i=0; i < this.Userprojects.length; i++) {
              this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand +"/"+ this.Userprojects[i].model + ".jpg"; 
              this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";       
        }
  }


  showDetails(project){
        
        this.navCtrl.push(OnesearchresultPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
   }


}
