import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';
import { AuthService } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the CommentpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-commentpage',
  templateUrl: 'commentpage.html',
})
export class CommentPage {


	proj:any;
	comments:any;
  UserID : any;
  message : string;
  authornames =[];
   newcomment = {
    treasureid:'',
    content:'',
    writerid:'',
    
  } 

  constructor(public navCtrl: NavController, public auth: AuthService , public navParams: NavParams, public tres : TreasuresProvider, public viewCtrl:ViewController) {
  	this.proj=navParams.get('Project');
  	this.UserID = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentpagePage');
    
    this.tres.gettreasurecomment(this.proj._id).then((data) => {
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
  this.newcomment.treasureid=this.proj._id;
  this.newcomment.writerid=this.UserID._id;
  this.newcomment.content=this.message;
 
  this.message='';
  console.log(this.newcomment);
  this.tres.postcomment(this.newcomment);
  this.comments.push(this.newcomment);
console.log(this.comments.length)
  this.ionViewDidLoad();
  this.proj.numcomments=this.comments.length;
  this.tres.posttreasures(this.proj);



  

}


  dismiss() {
    this.viewCtrl.dismiss();
  }


}
