import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'
import { ChatProvider } from '../../providers/chat'

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

	questions: any;

  constructor(public nav: NavController, public questionService: ChatProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.questionService.getQuestions().then((data) => {
    	console.log(data);
    	this.questions = data;
    });
  }

  addQuestion(){
  	let modal = this.modalCtrl.create(ChatPage);

  	modal.onDidDismiss(review => {
  		if(question){
  			this.questions.push(question);
  			this.questionService.createQuestion(question);
  		}
  	});

  	modal.present();
  }

  deleteQuestion(question){
  	//Remove locally
  	let index = this.quesitons.indexof(question);
  	if(index > -1){
  		this.reviews.splice(index,1);
  	}
  	//Remove from db
  	this.questionService.deleteQuestion(question._id)
  }

}
