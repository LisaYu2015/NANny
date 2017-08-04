import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';

/**
 * Generated class for the TreasuresEditDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-treasures-edit-detail',
  templateUrl: 'treasures-edit-detail.html',
})
export class TreasuresEditDetailPage {
	ProjID : any;
	newyear : any;
	newbrand : any;
	newmodel : any;
	newerrorcode : any;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public alertCtrl: AlertController , public treasuresService: TreasuresProvider) {
  	this.ProjID=navParams.get('project');
  	this.projdetails=navParams.get('details');
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreasuresEditDetailPage');
	this.newyear=this.ProjID.year;
	this.newbrand=this.ProjID.brand;
	this.newmodel=this.ProjID.model;
	this.newerrorcode=this.ProjID.errorcode;


    


    for (let i = 0; i < this.projdetails.length; i++) {
	    if (this.projdetails[i].type == "problem")
		    {this.projectproblems.push(this.projdetails[i]);
	    	this.newprojectproblems.push(this.projdetails[i].sentence);}
		else if (this.projdetails[i].type == "conclusion")
		    {this.projectconclusions.push(this.projdetails[i]);
	    	this.newprojectconclusions.push(this.projdetails[i].sentence);}
		else if (this.projdetails[i].type == "diagnosis")
		    {this.projectdiagnosis.push(this.projdetails[i]); 
		    this.newprojectdiagnosis.push(this.projdetails[i].sentence);}
		else if (this.projdetails[i].type == "symptom")
		    {this.projectsymptoms.push(this.projdetails[i]); 
	    	this.newprojectsymptoms.push(this.projdetails[i].sentence);}
	}



	}


  dismiss() {
  	this.viewCtrl.dismiss();
  }

  save() {

  	this.details=[];

  	let confirm = this.alertCtrl.create({
  		title: 'Save',
  		message: 'Do you want to save your changes and overwrite your data?',
  		buttons: [
  		{
  			text: 'Save',
  			handler :() => {
  				console.log(this.newbrand);

  				if (this.newyear!=this.ProjID.year || this.newbrand!=this.ProjID.brand || this.newmodel!=this.ProjID.model || this.newerrorcode!=this.ProjID.errorcode )
  					{this.ProjID.year=this.newyear;
  						this.ProjID.brand=this.newbrand;
  						this.ProjID.model=this.newmodel;
  						this.ProjID.errorcode=this.newerrorcode;
						console.log(this.ProjID);
  						this.treasuresService.posttreasures(this.ProjID);
  					}
		

  				for (let i = 0; i < this.projectproblems.length; i++) {
  					if (this.newprojectproblems[i]!=this.projectproblems[i].sentence)
  						{	
  							this.projectproblems[i].sentence=this.newprojectproblems[i];
  							this.treasuresService.postdetails(this.projectproblems[i]);
  						}
  				}
  				for (let i = 0; i < this.projectconclusions.length; i++) {
  					if (this.newprojectconclusions[i]!=this.projectconclusions[i].sentence)
  						{	
  							this.projectconclusions[i].sentence=this.newprojectconclusions[i];
  							this.treasuresService.postdetails(this.projectconclusions[i]);
  						}
  				}
  				for (let i = 0; i < this.projectdiagnosis.length; i++) {
  					if (this.newprojectdiagnosis[i]!=this.projectdiagnosis[i].sentence)
  						{	
  							this.projectdiagnosis[i].sentence=this.newprojectdiagnosis[i];
  							this.treasuresService.postdetails(this.projectdiagnosis[i]);
  						}
  				}
  				for (let i = 0; i < this.projectsymptoms.length; i++) {
  					if (this.newprojectsymptoms[i]!=this.projectsymptoms[i].sentence)
  						{	
  							console.log("a");
  							this.projectsymptoms[i].sentence=this.newprojectsymptoms[i];
  							this.treasuresService.postdetails(this.projectsymptoms[i]);
  						}
  				}
  				this.viewCtrl.dismiss();
  			
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


}
