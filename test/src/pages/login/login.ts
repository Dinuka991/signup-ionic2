import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PDA } from '../pda/pda';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  pagepda()
  {
    this.navCtrl.push(PDA);
  }

}