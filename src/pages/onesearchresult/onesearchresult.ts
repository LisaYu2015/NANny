import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { TreasuresDetailProvider } from '../../providers/treasuresdetailprovider/treasuresdetailprovider';
import { Http, HttpModule } from '@angular/http';
import { User, AuthService } from '../../providers/auth-service/auth-service'

/**
 * Generated class for the OnesearchresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-onesearchresult',
  templateUrl: 'onesearchresult.html',
})
export class OnesearchresultPage {

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
    user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public treasuresDetailService: TreasuresDetailProvider,
              public auth: AuthService) {
        this.ProjID = navParams.data;
        this.user = this.auth.getUserInfo();
        console.log(this.ProjID)
        console.log(this.user)
        this.user.last_viewed = this.ProjID._id.toString();
        console.log(this.user)
        this.auth.updateuser(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnesearchresultPage');
    console.log(this.ProjID);
        this.treasuresDetailService.gettreasuresdetail().then((data) => {
            this.details = data;
            for (let i = 0; i < this.details.length; i++) {
                              
                if (this.details[i].ProjectID==this.ProjID._id)
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

  }

}
