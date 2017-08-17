import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests'
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider'
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { RelationProvider } from '../../providers/relation/relation'

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
  nrequest= {year:'', brand:'', model:'', errorcode:'', symptoms:''};
  searchreq={year:'Year', make:'Make', model:'Model', error:'Error', symptoms:'Describe the issues that you are seeing.'};
  nrequestq = {content:'', requesterid:'', helperid:'', projectid:''};
  project: any;
  angular:any;
  expertise = {expertise:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public req: RequestsProvider, 
              public tres:TreasuresProvider, private auth: AuthService, public rel:RelationProvider,
              public viewCtrl:ViewController) {
    // let tmp = this.navParams.get('searchparams')
    // if(tmp.year)
    //   this.searchreq.year = tmp.year;
    // if(tmp.make != '')
    //   this.searchreq.make = tmp.make;
    // if(tmp.model != '')
    //   this.searchreq.model = tmp.model;
    // if(tmp.error != '')
    //   this.searchreq.error = tmp.error;
    // if(tmp.symptoms != '')
    //   this.searchreq.symptoms = tmp.symptoms;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
    console.log(this.nrequest)


  }

   dismiss() {
    this.viewCtrl.dismiss();
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

      //match: currently, we are simply doing an expertise text search
      this.auth.searchbyexpertise(this.expertise.expertise).then(data=>{
        var t = data[0];
        console.log(t);
        this.nrequestq.helperid = t._id;

        console.log(this.nrequestq);

        //create new request
        this.req.createrequest(this.nrequestq).then((data)=>{
          console.log("before pop");
          this.rel.addupdaterelation({requesterid:this.nrequestq.requesterid, helperid:this.nrequestq.helperid})
          this.viewCtrl.dismiss()
        });
      })
    })
  }

}
