import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests'
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider'
import { User, AuthService } from '../../providers/auth-service/auth-service';

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
  nrequest= {year:'', brand:'', model:'', error:'', symptoms:''};
  nrequestq = {content:'', requesterid:'', helperid:'', projectid:''};
  project: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public req: RequestsProvider, 
              public tres:TreasuresProvider, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }

  createnewproj(){
    this.project = this.tres.posttreasures(this.nrequest);
  }

  send(){
    //create new project
    console.log(this.nrequest);
    this.tres.posttreasures(this.nrequest).then((data)=>{
      this.project = data;
      console.log(JSON.stringify(this.project))

      this.nrequestq.requesterid = this.auth.getUserid();
      this.nrequestq.projectid = this.project._id;

      console.log(this.nrequestq);

      //create new request
      this.req.createrequest(this.nrequestq).then((data)=>{
        console.log("before pop");
        this.navCtrl.pop();
      });
    })
  }

}
