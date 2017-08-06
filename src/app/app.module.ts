import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, Response, HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ArticlePage } from '../pages/article-page/article-page';
import { Bookmark } from '../pages/bookmark/bookmark';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';


// import { NativeStorage } from '@ionic-native/native-storage';
import { ArticleProvider } from '../providers/article-provider';
import { IonicStorageModule  } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticlePage,
    Bookmark
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'article',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArticlePage,
    Bookmark
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArticleProvider,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
