import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { Http } from '@angular/http';
import { TreasureDetailPage } from '../treasure-detail/treasure-detail';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NewProjectPage } from '../new-project/new-project';

/**
 * Generated class for the TreasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-treasures',
  templateUrl: 'treasures.html',
})
export class TreasuresPage {

    projects: any;
    test: any;
    links= [];
    carlinks= [];
    ProjID : any;
    buttonimg=[];
    Userprojects =[];
    UserID : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public treasuresService: TreasuresProvider, public modalCtrl: ModalController , private auth: AuthService, public http : Http, private toastCtrl : ToastController) {
  this.UserID = this.auth.getUserid();
  console.log(this.auth.getUserid());
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad TreasuresPage');}

      ionViewDidEnter(){
        console.log("Ion view enter")
        this.projects=[];
        this.treasuresService.getusertreasures(this.UserID).then((data) => {
          this.projects = data;
          console.log(this.projects);
          console.log("hier");



          for (let i=0; i < this.projects.length; i++) {
              this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.projects[i].brand +"/"+ this.projects[i].model + ".jpg"; 
              this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.projects[i].PID + "/Photo/1.jpg";       
              if (this.projects[i].uploaded=="yes")
              this.buttonimg[i]="cloud-done";
              else
              this.buttonimg[i]="cloud-upload";



          }

      })};
  



    showDetails(project){
        
        this.navCtrl.push(TreasureDetailPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
        }
    upload(project, i){
      console.log("upload");
      console.log(i);
      if (project.uploaded=="yes")
      {

        project.uploaded ="no";
      this.buttonimg[i]="cloud-upload";

      let toast = this.toastCtrl.create({
        message: 'Your project is now private',
        duration:1500,
        position:'middle'
      });
      toast.present();

      }


      else
      {project.uploaded ="yes";
      this.buttonimg[i]="cloud-done";

      let toast = this.toastCtrl.create({
        message: 'You published your project',
        duration:1500,
        position:'middle'
      });
      toast.present();}


      

      this.treasuresService.posttreasures(project);

      }


        addProject(){

      //this.navCtrl.push(TreasuresEditDetailPage, {project,details});
        let modal = this.modalCtrl.create(NewProjectPage);
        modal.onDidDismiss(data => {
          console.log(data);
          console.log('jetzt');
          //this.projects.push(data);

        })
        modal.present();
        console.log("here12");
      }
      
    

    }
  
