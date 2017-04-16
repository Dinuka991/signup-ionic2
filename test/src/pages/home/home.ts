import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {SignupPage} from '../singuppage/singuppage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  nextPage()
  {
    this.navCtrl.push(LoginPage);
  }

   nextPage2()
  {
    this.navCtrl.push(SignupPage);
  }

  alerf()
  {
    alert( 'invalid username or password' )
  }

}
