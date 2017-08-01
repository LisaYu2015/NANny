import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { Http} from '@angular/http';
import { TreasureDetailPage } from '../treasure-detail/treasure-detail';

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
    UserID=1;
    Userprojects =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public treasuresService: TreasuresProvider, public modalCtrl: ModalController, public http:Http) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad TreasuresPage');
      this.treasuresService.gettreasures().then((data) => {
          this.projects = data;

          for (let i=0; i < this.projects.length; i++) {
              if (this.projects[i].TID == this.UserID)
                this.Userprojects.push(this.projects[i]);

          for (let i=0; i < this.Userprojects.length; i++) {
              this.carlinks[i] = "https://s3.amazonaws.com/katcher/Brands/" + this.Userprojects[i].brand +"/"+ this.Userprojects[i].model + ".jpg"; 
              this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.Userprojects[i].PID + "/Photo/1.jpg";       
              if (this.Userprojects[i].uploaded=="yes")
              this.buttonimg[i]="cloud-done";
              else
              this.buttonimg[i]="cloud-upload";



          }

      }});
  }



    showDetails(project){
        
        this.navCtrl.push(TreasureDetailPage, project);
        //let modal = this.modalCtrl.create(TreasureDetailPage );
        //modal.present();
        }
    upload(project, i){
      console.log("upload");
      console.log(i);
      if (project.uploaded=="yes")
      {project.uploaded ="no";
      this.buttonimg[i]="cloud-upload";}


      else
      {project.uploaded ="yes";
      this.buttonimg[i]="cloud-done";}

      

      this.treasuresService.posttreasures(project);

      
    

    }
  }
