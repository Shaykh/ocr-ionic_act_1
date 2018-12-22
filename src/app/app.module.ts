import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DonneesService } from './../services/donneesService';

import { MyApp } from './app.component';
import { SettingsPage } from './../pages/settings/settings';
import { LendCdPage } from './../pages/cds/lendcd/lendcd';
import { CdListPage } from './../pages/cds/cdList/cdlist';
import { LendBookPage } from './../pages/books/lendbook/lendbook';
import { TabsPage } from './../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BookListPage } from '../pages/books/booklist/booklist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage
  ],
  providers: [
    DonneesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
