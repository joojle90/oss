import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the PdrmPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pdrm/pdrm.html',
})
export class PdrmPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }
    callpolice() {
        let alert = this.alertCtrl.create({
          title: 'Call process',
          subTitle: 'We will direct you to the police station',
          buttons: ['OK']
        });
        alert.present();
    }
}
