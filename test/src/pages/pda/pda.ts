import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartJsPage } from '../chart-js/chart-js';

@Component({
  selector: 'page-PDA',
  templateUrl: 'pda.html'
})
export class PDA {

  constructor(public navCtrl: NavController) {

  }
  pagechar()
  {
    this.navCtrl.push(ChartJsPage);
  }

}