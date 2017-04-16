import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2' ;

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from '../pages/singuppage/singuppage';
import { PDA } from '../pages/pda/pda';
import { ChartJsPage } from '../pages/chart-js/chart-js';



  export const config = {
    apiKey: "AIzaSyDU6Xcl9NyoXGHmjNb7VPc3lmTkNLtipIQ",
    authDomain: "test-eaa72.firebaseapp.com",
    databaseURL: "https://test-eaa72.firebaseio.com/",
    projectId: "test-eaa72",
    storageBucket: "test-eaa72.appspot.com",
    messagingSenderId: "54219576841"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
     PDA,
     ChartJsPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
     PDA,
     ChartJsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
