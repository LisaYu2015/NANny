import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';


//IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push(RegisterPage);
  }
 
  public login() {
    // alert("here.....");
    this.showLoading();
    // alert(JSON.stringify(this.auth.login(this.registerCredentials)));
    console.log(this.registerCredentials)
    this.auth.login(this.registerCredentials).then((data) => {
      console.log(data)
      if(data[0] == "notfound"){
        this.showError("This user does not exist. Please create a new account");
      }
      // alert(JSON.stringify(data));
      if (data[0].password==this.registerCredentials.password) {
          this.nav.setRoot(HomePage);
        } else {
          this.showError("Access Denied");
        }
      })
      .catch(function(reason){
        this.showError(reason.toString());
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}