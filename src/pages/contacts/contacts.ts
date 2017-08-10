import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RelationProvider } from '../../providers/relation/relation'
import { AuthService,User } from '../../providers/auth-service/auth-service'
import { ContactprofilePage } from '../contactprofile/contactprofile'

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 export class Track{
 	id:string;
 	name:string;
 	helped:number;
 	request:number;

 	constructor(id, name){
 		this.id = id;
 		this.name = name;
 		this.helped = 0;
 		this.request = 0;
 	}

 	setrequest(n){
 		this.request = n;
 	}

 	sethelped(n){
 		this.helped = n ;
 	}
 }

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
	helplist:any
	reqlist:any
	user : User
	rellist: Track[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rel:RelationProvider,
  			  public auth:AuthService) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
    this.rel.getrelationshelp(this.user._id).then(help =>{
    	this.helplist = help;
  		this.rel.getrelationsreq(this.user._id).then(req=>{
  			for(let i=0; i < this.helplist.length; i++){
  				let id = this.helplist[i].requester;
  				let name = this.auth.getusernamebyid(id);
  				var t = new Track(id, name);
  				t.sethelped(this.helplist[i].n)
  				this.rellist.push(t);
  			}

  			for(let j=0; j < this.reqlist.length; j++){
  				let id = this.reqlist[j].helper
  				for(let i=0; i<this.rellist.length; i++){
  					if(id == this.rellist[i].id){
  						this.rellist[i].setrequest(this.reqlist[j].n)
  					} else {
  						let id = this.reqlist[i].helper;
		  				let name = this.auth.getusernamebyid(id);
		  				var t = new Track(id, name);
		  				t.setrequest(this.reqlist[i].n)
		  				this.rellist.push(t);
  					}
  				}
  			}
  		})
  	})
  }

  ionViewDidEnter(){

  }

  opencontactpage(event, contact){
  	this.navCtrl.push(ContactprofilePage, {contact: contact});
  }


}
