import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { ChatPage } from '../pages/chat/chat';
import { OneChatPage } from '../pages/onechat/onechat';
import { NewRequestPage } from '../pages/new-request/new-request'
import { PointsPage } from '../pages/points/points'
import { EarnpointsPage } from '../pages/earnpoints/earnpoints'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { RequestsProvider } from '../providers/requests/requests';
import { PointsProvider } from '../providers/points/points';
import { TreasuresProvider } from '../providers/treasuresprovider/treasuresprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    ChatPage,
    OneChatPage,
    SearchPage,
    NewRequestPage,
    PointsPage,
    EarnpointsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    ChatPage,
    OneChatPage,
    SearchPage,
    NewRequestPage,
    PointsPage,
    EarnpointsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RequestsProvider,
    PointsProvider,
    TreasuresProvider
  ]
})
export class AppModule {}
