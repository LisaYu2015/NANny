import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '', fname: '', lname: '', shop: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {

    this.auth.register(this.registerCredentials).then((user) => {
      this.createSuccess = true;
      this.showPopup("Success", "Account created. Please enter your email and password to get started");
    });
                
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
