import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { OnesearchresultPage } from '../onesearchresult/onesearchresult'
import { NewRequestPage } from '../new-request/new-request';



/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  nrequest = {year:'', make:'', model:'', error:'', symptoms:''};
  projects: any;
  carlinks= [];
  projectage = [];
  buttonimg = [];
  searchval = false;
  UserID : any;
  hit :any;
  verifications = [];
  Authors = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, 
              public tres: TreasuresProvider, public modalCtrl : ModalController) {
  this.UserID = this.auth.getUserInfo();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.tres.getuploadedtreasures().then(data=>{
        this.projects = data
        this.display();
      })
    }


  display(){
  
    this.carlinks = []
    
    console.log("in display")


       
        for (let i=0; i < this.projects.length; i++) {
              this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.projects[i].brand +"/"+ this.projects[i].model + ".jpg"; 
              
              this.auth.getuserbyid(this.projects[i].Userid).then(user=> {
              this.Authors[i] = user
              console.log(this.Authors)
            })
        }  
  }


  searchsingle(ev:any){
    let val = ev.target.value
    console.log(val)
     //get value of the searchbar
    if(val != ''){
      this.searchval = true;
      this.tres.searchtreasures(val).then(data=>{
        console.log(data)
        this.projects = data;
        this.display();
      })
    } else {
      this.ionViewDidLoad();
    }
  }

  showDetails(project){
        
        this.navCtrl.push(OnesearchresultPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
   }

  newrequest(){
    let modal = this.modalCtrl.create(NewRequestPage)
    modal.present()
    // this.navCtrl.push(NewRequestPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }




}