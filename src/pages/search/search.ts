import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { SearchresultPage } from '../searchresult/searchresult'
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  nrequest: {year:string, make:string, model:string, error:string, symptoms:string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, 
              public tres: TreasuresProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(){
    this.tres.searchtreasures(this.nrequest.make, this.nrequest.model, this.nrequest.symptoms, this.nrequest.error)
        .then(projects => {
          this.navCtrl.push(SearchresultPage, projects);
        })
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
