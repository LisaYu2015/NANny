import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService, User } from '../../providers/auth-service/auth-service'
import { GroupProvider } from '../../providers/group/group'

/**
 * Generated class for the OnegroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-onegroup',
  templateUrl: 'onegroup.html',
})
export class OnegroupPage {
	group:any;
	member:number;
	user: User;
	ismember:any;
  posts:any;
  writers = [];
  posttext:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService,
  			  public groupctrl:GroupProvider) {
  	this.group = this.navParams.get("group")
  	this.user = this.auth.getUserInfo();
  	console.log(this.user._id)
  	console.log(this.group._id)
  	this.groupctrl.ismember({memberid:this.user._id, groupid:this.group._id}).then(mem => {
  		console.log(mem)
  		this.ismember = mem
  		if(this.ismember.length > 0){
  			this.member = 1
  		} else {
  			this.member = 0
  		}
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnegroupPage');
  }

  ionViewDidEnter(){
  	console.log(this.user._id)
  	console.log(this.group._id)
  	this.groupctrl.ismember({memberid:this.user._id, groupid:this.group._id}).then(mem => {
  		console.log(mem)
  		this.ismember = mem
  		if(this.ismember.length > 0){
  			this.member = 1
  		} else {
  			this.member = 0
  		}
  	})
    this.getposts()
  }

  getposts(){
    this.groupctrl.getposts(this.group._id).then(data2=>{
      this.posts = data2
      this.writers = [this.posts.length]
      for(let i=0;i<this.posts.length;i++){
        this.auth.getusernamebyid(this.posts[i].memberid).then(name => {
          let name2 = name
          let content = this.posts[i].content
          let id = this.posts[i].memberid
          this.writers[i] = {name:name2, content:content, id:id}
          console.log(this.writers[i])
        })
      }
    })
  }

  post(){
    let p =  {groupid:this.group._id, memberid:this.user._id, content:this.posttext}
  	this.groupctrl.addpost(p).then(data =>{
      this.getposts()
      this.posttext = ''
    })
  }

  joingroup(){
  	this.groupctrl.joingroup({memberid:this.user._id, groupid:this.group._id}).then(data => {
  		this.member = 1;
  	})
  }
  leavegroup(){
  	console.log("trying to leave")
  	this.groupctrl.unjoingroup({memberid:this.user._id , groupid:this.group._id}).then(data=>{
  		console.log("left")
  		this.member = 0;
  	})
  }

}
