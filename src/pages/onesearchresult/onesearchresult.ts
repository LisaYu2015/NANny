import { Component } from '@angular/core';
import { NavController, NavParams , ToastController, ModalController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';

import { Http, HttpModule } from '@angular/http';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { CommentPage } from '../commentpage/commentpage';

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
    projectcauses = [];
    projectconclusions = [];
    projectdiagnosis = [];
    projectsymptoms = [];
    projectsummarys =[];
    projectreasonings = [];
    projectuploadstatus = "cloud-upload";
    completestatusimg = "radio-button-off";
    user: User;
    UserID : any;
      hit :any;
      verifications = [];
      counter = Array;
      authornames =[];
   newcomment = {
    treasureid:'',
    content:'',
    writerid:'',};
    message : string;
    comments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public auth: AuthService , 
              public tres: TreasuresProvider, private toastCtrl : ToastController, public modalCtrl : ModalController) {
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
    this.details=[];
    this.projectdetails = [];
    this.projectsummarys = [];
    this.projectcauses = [];
    this.projectreasonings = [];
    this.projectdiagnosis = [];
    this.projectsymptoms = [];

        this.tres.getprojtreasuresdetail(this.ProjID._id).then((data) => {
            this.details = data;
            for (let i = 0; i < this.details.length; i++) {
                    this.projectdetails.push(this.details[i]);
                    if (this.details[i].type == "cause")
                        this.projectcauses.push(this.details[i]);
                    else if (this.details[i].type == "summary")
                        this.projectsummarys.push(this.details[i]);
                    else if (this.details[i].type == "diagnosis")
                        this.projectdiagnosis.push(this.details[i]); 
                    else if (this.details[i].type == "symptom")
                        this.projectsymptoms.push(this.details[i]); 
                    else if (this.details[i].type == "reasoning")
                        this.projectreasonings.push(this.details[i]); 

                }
            for (let i=1; i<= this.ProjID.numofpics; i++){
                this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.ProjID.PID + "/Photo/" + i + ".jpg";
                console.log(this.links[i]);
            }

        });this.tres.gettreasurecomment(this.ProjID._id).then((data) => {
          this.comments = data;
          console.log(this.comments)
          this.authornames = [this.comments.length]
          
          for (let i=0; i < this.comments.length; i++){
            
            console.log(this.comments[i].writerid);
            this.auth.getusernamebyid(this.comments[i].writerid).then(name=> {
              this.authornames[i] = name
            })
            console.log(this.authornames)

          }
        });
    }

    chat(){

this.tres.gettreasurecomment(this.ProjID._id).then((data) => {
          this.comments = data;
          console.log(this.comments)
          this.authornames = [this.comments.length]
          
          for (let i=0; i < this.comments.length; i++){
            
            console.log(this.comments[i].writerid);
            this.auth.getusernamebyid(this.comments[i].writerid).then(name=> {
              this.authornames[i] = name
            })
            console.log(this.authornames)

          }
        });
        
  

  }

  


    verify (project) {
    this.hit=0;
    
    for (let i=0 ; i<project.verifications.length; i++)
    {
      if (this.user._id == project.verifications[i])
      {
        
        project.verifications.splice(i, 1);
                 
        this.hit=1;

        let toast = this.toastCtrl.create({
        message: 'You removed your verification from this project',
        duration:1500,
        position:'middle'
        });
        toast.present();
        this.tres.posttreasures(project);

      }
    }
    if (this.hit == 0 )
      {
        
      if (project.Userid!=this.user._id)
      {
        project.verifications.push(this.user._id);



        let toast = this.toastCtrl.create({
        message: 'You verified this project',
        duration:1500,
        position:'middle'
        });
        toast.present();
        this.tres.posttreasures(project);
      }
      else
      {
        let toast = this.toastCtrl.create({
        message: 'You connot verify your own project',
        duration:1500,
        position:'middle'
        });
        toast.present();
      }  
    }
    }

 

  send(){
  this.newcomment.treasureid=this.ProjID._id;
  this.newcomment.writerid=this.user._id;
  this.newcomment.content=this.message;
 
  this.message='';
  console.log(this.newcomment);
  this.tres.postcomment(this.newcomment);
  this.comments.push(this.newcomment);
console.log(this.comments.length)
  this.chat();
  this.ProjID.numcomments=this.comments.length;
  this.tres.posttreasures(this.ProjID);



  

}


}
