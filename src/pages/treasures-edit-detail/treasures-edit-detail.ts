import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController, App } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';


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
  newimg : any;
	projdetails : any;
	projectproblems= [];
  projectsummarys = [];
  projectdiagnosis = [];
  projectsymptoms = [];
  newprojectproblems = [] ;
  newprojectsummarys = [];
  newprojectdiagnosis = [] ;
  newprojectsymptoms = [];
  counter = Array;

 

  constructor(public navCtrl: NavController,public appCtrl : App, public navParams: NavParams,public toastCtrl:ToastController, public viewCtrl:ViewController, public alertCtrl: AlertController , public treasuresService: TreasuresProvider) {
  	this.ProjID=navParams.get('project');
  	  this.projdetails=navParams.get('details');
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreasuresEditDetailPage');
	this.newyear=this.ProjID.year;
	this.newbrand=this.ProjID.brand;
	this.newmodel=this.ProjID.model;
	this.newerrorcode=this.ProjID.errorcode;
console.log(this.ProjID);
console.log(this.projdetails);
    
//this part can also be done by only searching for the right type of detail. here all the details are collected and then sorted manually

    for (let i = 0; i < this.projdetails.length; i++) {
	    if (this.projdetails[i].type == "problem")
		    {this.projectproblems.push(this.projdetails[i]);
	    	this.newprojectproblems.push(this.projdetails[i].sentence);}
		else if (this.projdetails[i].type == "summary")
		    {this.projectsummarys.push(this.projdetails[i]);
	    	this.newprojectsummarys.push(this.projdetails[i].sentence);}
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



  	let confirm = this.alertCtrl.create({
  		title: 'Save',
  		message: 'Do you want to save your changes and overwrite your data?',
  		buttons: [
  		{
  			text: 'Save',
  			handler :() => {
  				

  				if (this.newyear!=this.ProjID.year || this.newbrand!=this.ProjID.brand || this.newmodel!=this.ProjID.model || this.newerrorcode!=this.ProjID.errorcode )
  					{this.ProjID.year=this.newyear;
  						this.ProjID.brand=this.newbrand;
  						this.ProjID.model=this.newmodel;
  						this.ProjID.errorcode=this.newerrorcode;
						console.log(this.ProjID);
  						this.treasuresService.posttreasures(this.ProjID);
  					}
		

  				for (let i = 0; i < this.newprojectproblems.length; i++) {
  					if (this.newprojectproblems[i]!=this.projectproblems[i].sentence&&this.newprojectproblems[i]!="")
  						{	
  							this.projectproblems[i].sentence=this.newprojectproblems[i];
  							let projdetails ={
              _id:this.projectproblems[i]._id,
							ProjectID:this.ProjID._id,
							type:"problem",
							sentence:this.newprojectproblems[i],
              numpic:this.projectproblems[i].numpic,
              numvid:this.projectproblems[i].numvid,
							}
							this.treasuresService.postdetails(projdetails);
  						}
              else if (this.newprojectproblems[i]=="")
              {

              }
  				}
  				for (let i = 0; i < this.projectsummarys.length; i++) {
  					if (this.newprojectsummarys[i]!=this.projectsummarys[i].sentence&&this.newprojectsummarys[i]!="")
  						{	
  							this.projectsummarys[i].sentence=this.newprojectsummarys[i];
  							let projdetails ={
                _id:this.projectsummarys[i]._id,
	  						ProjectID:this.ProjID._id,
	  						type:"conclusion",
	  						sentence:this.newprojectsummarys[i],
                numpic:this.projectsummarys[i].numpic,
                numvid:this.projectsummarys[i].numvid,
	  						}
	  						this.treasuresService.postdetails(projdetails);
  						}
              else if (this.newprojectsummarys[i]==""&&this.projectsummarys[i]._id!=null)
              {
                  this.treasuresService.deletedetails(this.projectsummarys[i]._id);
              }
  						
  				}
  				for (let i = 0; i < this.projectdiagnosis.length; i++) {
  					if (this.newprojectdiagnosis[i]!=this.projectdiagnosis[i].sentence&&this.newprojectdiagnosis[i]!="")
  						{	
  							this.projectdiagnosis[i].sentence=this.newprojectdiagnosis[i];
  							let projdetails ={
                _id:this.projectdiagnosis[i]._id,
	  						ProjectID:this.ProjID._id,
	  						type:"diagnosis",
	  						sentence:this.newprojectdiagnosis[i],
                numpic:this.projectdiagnosis[i].numpic,
                numvid:this.projectdiagnosis[i].numvid,
	  						}
                console.log(projdetails);
	  						this.treasuresService.postdetails(projdetails);
  						}
              else if (this.newprojectdiagnosis[i]==""&&this.projectdiagnosis[i]._id!=null)
              {
                  this.treasuresService.deletedetails(this.projectdiagnosis[i]._id);
              }
  				}
  				for (let i = 0; i < this.projectsymptoms.length; i++) {
  					if (this.newprojectsymptoms[i]!=this.projectsymptoms[i].sentence&&this.newprojectsymptoms[i]!="")
  						{	
  							console.log("a");
  							this.projectsymptoms[i].sentence=this.newprojectsymptoms[i];
  							let projdetails ={
                _id:this.projectsymptoms[i]._id,
	  						ProjectID:this.ProjID._id,
	  						type:"symptom",
	  						sentence:this.newprojectsymptoms[i],
                numpic:this.projectsymptoms[i].numpic,
                numvid:this.projectsymptoms[i].numvid,
	  						}
	  						this.treasuresService.postdetails(projdetails);
  						}
              else if (this.newprojectsymptoms[i]==""&&this.projectsymptoms[i]._id!=null)
              {
                  this.treasuresService.deletedetails(this.projectsymptoms[i]._id);
              }

  				}
          //this.treasuresService.uploadimg(this.newimg);
          
  				this.viewCtrl.dismiss(); 
          // this.appCtrl.getRootNav().push(TreasureDetailPage, this.ProjID);

          
  			
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
  	this.projectsymptoms.push(
    {
      ProjectID:this.ProjID._id,
      type:"symptom",
      sentence:"",
    })
  	}

adddiagnosis(){
	this.newprojectdiagnosis[this.newprojectdiagnosis.length]="";
	this.projectdiagnosis.push(
                {
                ProjectID:this.ProjID._id,
                type:"symptom",
                sentence:"",
                });
	}

addsummary(){
	this.newprojectsummarys[this.newprojectsummarys.length]="";
	this.projectsummarys.push(
                {
                ProjectID:this.ProjID._id,
                type:"conclusion",
                sentence:"",
                });
}


}