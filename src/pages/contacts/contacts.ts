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

 	constructor(id){
 		this.id = id;
 		this.name = '';
 		this.helped = 0;
 		this.request = 0;
 	}

 	setrequest(n){
 		this.request = n;
 	}

  setname(name){
    this.name = name;
  }

 	sethelped(n){
 		this.helped = n ;
 	}

  getid(){
    return this.id;
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
	rellist= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rel:RelationProvider,
  			  public auth:AuthService) {
  	this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');

  }

  ionViewDidEnter(){
    this.helplist = null;
    this.reqlist = null;
    this.rellist = []
    this.rel.getrelationshelp(this.user._id).then(help =>{
      this.helplist = help;
      console.log(this.helplist)
      this.rel.getrelationsreq(this.user._id).then(req=>{
        this.reqlist = req;
        console.log(this.reqlist)
        let t;
        for(let i=0; i < this.helplist.length; i++){
          let id = this.helplist[i].requester;
            t = new Track(id);
            t.setrequest(this.helplist[i].n)
            this.rellist.push(t);
        }

        for(let j=0; j < this.reqlist.length; j++){
          let id = this.reqlist[j].helper
          for(let i=0; i<this.rellist.length; i++){
            console.log("here")
            if(id == this.rellist[i].id){
              console.log("here")
              this.rellist[i].sethelped(this.reqlist[j].n)
            } else {
                t = new Track(id);
                t.sethelped(this.reqlist[i].n)
                this.rellist.push(t);
            }
          }
        }

        for(let k=0; k<this.rellist.length; k++){
          let id = this.rellist[k].getid();
          this.auth.getusernamebyid(id).then(name => {
            this.rellist[k].setname(name);
            console.log(this.rellist)
          })
        }
      })
    })
  }

  opencontactpage(event, person){
    console.log(person)
    let id = person.id
    this.auth.getuserbyid(id).then(user => {
      let contact = user;
      console.log(contact)
      this.navCtrl.push(ContactprofilePage, {contact: contact});
    })
  }


}
