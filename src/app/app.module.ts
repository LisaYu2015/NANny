import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TreasuresPage } from '../pages/treasures/treasures';
import { TreasureDetailPage } from '../pages/treasure-detail/treasure-detail';
import { TreasuresEditDetailPage } from '../pages/treasures-edit-detail/treasures-edit-detail';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { ChatPage } from '../pages/chat/chat';
import { OneChatPage } from '../pages/onechat/onechat';
import { NewProjectPage } from '../pages/new-project/new-project';

import { NewRequestPage } from '../pages/new-request/new-request'
import { PointsPage } from '../pages/points/points'
import { EarnpointsPage } from '../pages/earnpoints/earnpoints'
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactprofilePage } from '../pages/contactprofile/contactprofile';
import { OnesearchresultPage } from '../pages/onesearchresult/onesearchresult';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { GroupaddPage } from '../pages/groupadd/groupadd';
import { GroupsearchPage } from '../pages/groupsearch/groupsearch';
import { GroupshomePage } from '../pages/groupshome/groupshome';
import { OnegroupPage } from '../pages/onegroup/onegroup';
import { ContactreasuresPage } from '../pages/contactreasures/contactreasures';
import { SearchfeedbackPage } from '../pages/searchfeedback/searchfeedback';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { RequestsProvider } from '../providers/requests/requests';
import { PointsProvider } from '../providers/points/points';
import { TreasuresProvider } from '../providers/treasuresprovider/treasuresprovider';
import { RelationProvider } from '../providers/relation/relation';
import { GroupProvider } from '../providers/group/group';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    ChatPage,
    OneChatPage,
    SearchPage,
    NewRequestPage,
    PointsPage,
    EarnpointsPage,
    TreasuresPage,
    TreasureDetailPage,
    TreasuresEditDetailPage,
    NewProjectPage,
    ContactsPage,
    ContactprofilePage,
    OnesearchresultPage,
    EditprofilePage,
    GroupaddPage,
    GroupsearchPage,
    GroupshomePage,
    OnegroupPage,
    ContactreasuresPage,
    SearchfeedbackPage,
      
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
    LoginPage,
    RegisterPage,
    ProfilePage,
    ChatPage,
    OneChatPage,
    SearchPage,
    NewRequestPage,
    PointsPage,
    EarnpointsPage,
    TreasuresPage,
    TreasureDetailPage,
    TreasuresEditDetailPage,
    NewProjectPage,
    ContactsPage,
    ContactprofilePage,
    OnesearchresultPage,
    EditprofilePage,
    GroupaddPage,
    GroupsearchPage,
    GroupshomePage,
    OnegroupPage,
    ContactreasuresPage,
    SearchfeedbackPage,
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RequestsProvider,
    PointsProvider,
    TreasuresProvider,
    RelationProvider,
    RelationProvider,
    GroupProvider,
    GroupProvider,
  ]
})
export class AppModule {}
