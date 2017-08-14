import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController, App } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { TreasuresPage } from '../treasures/treasures';
import { TreasureDetailPage } from '../treasure-detail/treasure-detail';


/**
 * Generated class for the TreasuresEditDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-project',
  templateUrl: 'new-project.html',
})
export class NewProjectPage {
	
	ProjID:any;
	newyear : any;
	newbrand : any;
	newmodel : any;
	newerrorcode : any;
  newengine : any;
	projdetails : any;
	projectproblems = [];
    projectconclusions = [];
    projectdiagnosis = [];
    projectsymptoms = [];
    newprojectproblems = [] ;
    newprojectconclusions = [];
    newprojectdiagnosis = [] ;
    newprojectsymptoms = [];
    details : any ;
    UserID :any;

  constructor(public navCtrl: NavController,public appCtrl : App, public toastCtrl : ToastController, public navParams: NavParams, public viewCtrl:ViewController, private auth: AuthService, public alertCtrl: AlertController , public treasuresService: TreasuresProvider) {
  	this.UserID = this.auth.getUserid();
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreasuresEditDetailPage');
	}


  dismiss() {
  	this.viewCtrl.dismiss();
  }

  save() {

  	this.details=[];

  	let confirm = this.alertCtrl.create({
  		title: 'Save',
  		message: 'Do you want to save your new project?',
  		buttons: [
  		{
  			text: 'Save',
  			handler :() => {
  				

  					let newproj = {
  						Userid:this.UserID,
	  					year:this.newyear,
	  					brand:this.newbrand,
	  					model:this.newmodel,
	  					errorcode:this.newerrorcode,
              engine:this.newengine,
  					}
  					newproj.Userid=this.UserID;
  					newproj.year=this.newyear;
  					newproj.brand=this.newbrand;
  					newproj.model=this.newmodel;
  					newproj.errorcode=this.newerrorcode;
            newproj.engine=this.newengine;
					console.log(newproj);
  					this.treasuresService.posttreasures(newproj).then((data) => {
          			this.ProjID = data;

  					
  					console.log(this.ProjID);
  					

		

  				for (let i = 0; i < this.projectproblems.length; i++) {
  					if (this.newprojectproblems[i] != "") {
  						let projdetails ={
  						ProjectID:this.ProjID._id,
  						type:"problem",
  						sentence:this.newprojectproblems[i],
  						}
  						this.treasuresService.postdetails(projdetails);
  					}

  				}
  				for (let i = 0; i < this.projectconclusions.length; i++) {
  					if (this.newprojectconclusions[i]!="")
  						{	
  						let projdetails ={
  						ProjectID:this.ProjID._id,
  						type:"conclusion",
  						sentence:this.newprojectconclusions[i],
  						}
  						this.treasuresService.postdetails(projdetails);
  						}
  				}
  				for (let i = 0; i < this.projectdiagnosis.length; i++) {
  					if (this.newprojectdiagnosis[i]!="")
  						{	
  						let projdetails ={
  						ProjectID:this.ProjID._id,
  						type:"diagnosis",
  						sentence:this.newprojectdiagnosis[i],
  						}
  						this.treasuresService.postdetails(projdetails);
  						}
  				}
  				for (let i = 0; i < this.projectsymptoms.length; i++) {
  					if (this.newprojectsymptoms[i]!="")
  						{	
  						let projdetails ={
  						ProjectID:this.ProjID._id,
  						type:"symptom",
  						sentence:this.newprojectsymptoms[i],
  						}
  						this.treasuresService.postdetails(projdetails);
  						}
  				}

          let toast = this.toastCtrl.create({
          message: 'Congratulations your project was created. You can find it in your Treasures.',
          duration:2000,
          position:'middle'
      });
      toast.present();

          
  				this.viewCtrl.dismiss(data);
          this.appCtrl.getRootNav().push(TreasuresPage);
  			})
  		}},
  			{
  			text: 'Cancel',
  			handler: () => {
  			console.log('cancel clicked');
  			}


  			
  		}]
  	});
  	confirm.present();
  	
  }


addsymptom(){
  	this.newprojectsymptoms[this.newprojectsymptoms.length]="";
  	this.projectsymptoms[this.projectsymptoms.length]="";
  	}

adddiagnosis(){
	this.newprojectdiagnosis[this.newprojectdiagnosis.length]="";
	this.projectdiagnosis[this.projectdiagnosis.length]="";
	}

addconclusion(){
	this.newprojectconclusions[this.newprojectconclusions.length]="";
	this.projectconclusions[this.projectconclusions.length]="";
	}


}
