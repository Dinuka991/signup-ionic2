import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AuthProviders ,AuthMethods ,AngularFire} from 'angularfire2' ; 
 
@Component({
  selector: 'page-register',
  templateUrl: 'singuppage.html'
})
export class SignupPage {
 
 
  constructor(private nav: NavController, private alertCtrl: AlertController) {}
 
  
}