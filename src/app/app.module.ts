import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TreasuresPage } from '../pages/treasures/treasures';
import { TreasureDetailPage } from '../pages/treasure-detail/treasure-detail';


import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TreasuresProvider } from '../providers/treasuresprovider/treasuresprovider';
import { HttpModule } from '@angular/http';
import { TreasuresDetailProvider } from '../providers/treasuresdetailprovider/treasuresdetailprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
      TreasuresPage,
      TreasureDetailPage
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
    ProfilePage,
    TreasuresPage,
    TreasureDetailPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TreasuresProvider,
    TreasuresDetailProvider
  ]
})
export class AppModule {}
