import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { TreasuresDetailProvider } from '../../providers/treasuresdetailprovider/treasuresdetailprovider';
import { Http, HttpModule } from '@angular/http';
import { TreasuresEditDetailPage } from '../../pages/treasures-edit-detail/treasures-edit-detail';

 
/**
 * Generated class for the TreasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-treasure-detail',
    templateUrl: 'treasure-detail.html',
})
export class TreasureDetailPage {




    details: any;
    links = [];
    ProjID: any;
    completestatus = "error";
    projectdetails = [];
    projectproblems = [];
    projectconclusions = [];
    projectdiagnosis = [];
    projectsymptoms = [];
    projectuploadstatus = "cloud-upload";
    completestatusimg = "radio-button-off";


    constructor(public navCtrl: NavController, public treasuresService: TreasuresProvider, public navParams: NavParams, public treasuresDetailService: TreasuresDetailProvider, private toastCtrl:ToastController, public modalCtrl : ModalController) {
        this.ProjID = navParams.data;
        
       
    }
    

    ionViewDidLoad() {
        console.log('ionViewDidLoad TreasuresDetailPage');
        console.log(this.ProjID);
        this.treasuresDetailService.gettreasuresdetail().then((data) => {
            this.details = data;
            for (let i = 0; i < this.details.length; i++) {
                              
                if (this.details[i].PID==this.ProjID.PID)
                {
                    this.projectdetails.push(this.details[i]);
                    if (this.details[i].type == "problem")
                        this.projectproblems.push(this.details[i]);
                    else if (this.details[i].type == "conclusion")
                        this.projectconclusions.push(this.details[i]);
                    else if (this.details[i].type == "diagnosis")
                        this.projectdiagnosis.push(this.details[i]); 
                    else if (this.details[i].type == "symptom")
                        this.projectsymptoms.push(this.details[i]); 
                }
                
            }
            for (let i=1; i<= this.ProjID.numofpics; i++){
                this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.ProjID.PID + "/Photo/" + i + ".jpg";
                console.log(this.links[i]);
            }

        });

        if (this.ProjID.complete=="yes")
            {this.completestatus="Finished";
            this.completestatusimg="checkmark-circle"}

        else 
            {this.completestatus="Pending";
            this.completestatusimg="radio-button-off"}

        if (this.ProjID.uploaded=="yes")
            this.projectuploadstatus="cloud-done";
        else
            this.projectuploadstatus="cloud-upload";

    }



    upload1(project){
      console.log("upload");
      if (project.uploaded=="yes")
      {

        project.uploaded ="no";
      this.projectuploadstatus="cloud-upload";

      let toast = this.toastCtrl.create({
        message: 'Your project is now private',
        duration:1500,
        position:'middle'
      });
      toast.present();

      }
      else
      {project.uploaded ="yes";
      this.projectuploadstatus="cloud-done";

      let toast = this.toastCtrl.create({
        message: 'You published your project',
        duration:1500,
        position:'middle'
      });
      toast.present();}


      

      this.treasuresService.posttreasures(project);

      }




       complete(project){
      console.log("complete");
      if (project.complete=="yes")
      {
        project.complete ="no";
      this.completestatusimg="radio-button-off";
      this.completestatus="Pending";

      let toast = this.toastCtrl.create({
        message: 'The status of your project is no longer complete',
        duration:1500,
        position:'middle'
      });
      toast.present();

      }


      else
      {project.complete ="yes";
      this.completestatusimg="checkmark-circle";
      this.completestatus="Finished";

      let toast = this.toastCtrl.create({
        message: 'Congratulations! You completed your project',
        duration:1500,
        position:'middle'
      });
      toast.present();}


      

      this.treasuresService.posttreasures(project);

      }

      editDetails(project,details){

      //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        let modal = this.modalCtrl.create(TreasuresEditDetailPage, {project, details} );
        modal.present();
        console.log("here12");
      }
}