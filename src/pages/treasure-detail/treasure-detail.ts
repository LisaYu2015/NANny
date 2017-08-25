import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { TreasuresEditDetailPage } from '../../pages/treasures-edit-detail/treasures-edit-detail';
import { AuthService } from '../../providers/auth-service/auth-service';

 
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
    projectcauses = [];
    projectsummarys = [];
    projectdiagnosis = [];
    projectsymptoms = [];
    projectreasonings = [];
    projectuploadstatus = "cloud-upload";
    counter = Array;
    newcomment = {
    treasureid:'',
    content:'',
    writerid:'',};
    message : string;
    comments:any;
    authornames =[];


    constructor(public navCtrl: NavController , public auth: AuthService , public treasuresService: TreasuresProvider , public alertCtrl: AlertController , public navParams: NavParams, private toastCtrl:ToastController, public modalCtrl : ModalController) {
        this.ProjID = navParams.data;
        
       
    }
    

    ionViewDidLoad() {
        console.log('ionViewDidLoad TreasuresDetailPage');
        console.log(this.ProjID);
        this.treasuresService.getprojtreasuresdetail(this.ProjID._id).then((data) => {
            this.details = data;
            for (let i = 0; i < this.details.length; i++) {

              //this part can also be done by only searching for the right type of detail. here all the details are collected and then sorted manually
                              
                if (this.details[i].ProjectID==this.ProjID._id)
                {
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
                
            }
            

        });



        if (this.ProjID.uploaded=="yes")
            this.projectuploadstatus="cloud-done";
        else
            this.projectuploadstatus="cloud-upload";



              this.treasuresService.gettreasurecomment(this.ProjID._id).then((data) => {
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

      chat(){

          this.treasuresService.gettreasurecomment(this.ProjID._id).then((data) => {
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
  send(){
  this.newcomment.treasureid=this.ProjID._id;
  this.newcomment.writerid=this.auth.getUserid();
  this.newcomment.content=this.message;
  this.message='';
  console.log(this.newcomment);
  this.treasuresService.postcomment(this.newcomment);
  this.comments.push(this.newcomment);
console.log(this.comments.length)
  this.chat();
  this.ProjID.numcomments=this.comments.length;
  this.treasuresService.posttreasures(this.ProjID);
}





      editDetails(project,details){

      //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        this.navCtrl.pop();
        let modal = this.modalCtrl.create(TreasuresEditDetailPage, {project, details} );
        modal.present();
        console.log("here12");
      }


      deleteproject(id){
          let confirm = this.alertCtrl.create({
          title: 'Delete',
          message: 'Do you want to permanently delete this project and all of the related data?',
          buttons: [
          {
              text: 'delete',
              handler :() => {
              this.treasuresService.deleteproject(id);
              this.navCtrl.pop(TreasureDetailPage);
          }
          },
          {
              text: 'Cancel',
              handler: () => {
              console.log('cancel clicked');
           }
           }]});
          confirm.present()
      }
}