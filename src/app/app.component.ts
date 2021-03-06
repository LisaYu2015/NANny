import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as io from 'socket.io-client';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { ChatPage } from '../pages/chat/chat';
import { TreasuresPage} from '../pages/treasures/treasures';
import { ContactsPage } from '../pages/contacts/contacts';
import { GroupshomePage } from '../pages/groupshome/groupshome';

import { AuthService,User } from '../providers/auth-service/auth-service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  socket: any;

  pages: Array<{title: string, component: any}>;
  user: User;
  name:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public toast:ToastController, public auth:AuthService) {
    this.initializeApp();

    //used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Treasures', component: TreasuresPage },
      { title: 'Search', component: SearchPage },
      { title: 'Network', component: ContactsPage },
      { title: 'Groups', component: GroupshomePage },
      { title: 'Requests', component: ChatPage },
      { title: 'Profile', component: ProfilePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
